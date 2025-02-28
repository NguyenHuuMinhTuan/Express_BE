
const pool = require('../utils/connectDB.js');

const getAll = async () => {
    const [rows] = await pool.execute('SELECT * FROM ACCOUNT');
    return rows;
};

const getUsernameByAccount = async (username) =>{
    const query = "SELECT * FROM ACCOUNT WHERE USERNAME = ?";
    const [rows] = await pool.execute(query,[username]);
    return rows;
}

const create = async (newUser) => {
    const { username, password, email } = newUser;

    if (!username || !password || !email) {
        throw new Error("All fields (username, password, email) are required");
    }

    const query = 'INSERT INTO account (username, password, email) VALUES (?, ?, ?)';
    const [rows] = await pool.execute(query, [username, password, email]);

    return rows;
};

const checkUser = async (username) => {
    const query = 'SELECT * FROM user WHERE username = ?';
    const [rows] = await pool.execute(query, [username]);

    return rows.length > 0 ? rows[0] : null;
};

const update = async (id, updatedUser) => {
    const { username, password, email } = updatedUser;
    
    let query = 'UPDATE account SET ';
    const values = [];

    if (username) {
        query += 'username = ?, ';
        values.push(username);
    }
    if (email) {
        query += 'email = ?, ';
        values.push(email);
    }
    if (password) {
        query += 'password = ?, ';
        values.push(password);
    }

    query = query.slice(0, -2); // Xóa dấu "," cuối cùng
    query += ' WHERE id = ?';
    values.push(id);

    const [rows] = await pool.execute(query, values);
    return rows;
};

const remove = async (id) => {
    const query = 'DELETE FROM account WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows;
};

module.exports = {
    getAll,
    getUsernameByAccount,
    create,
    checkUser,
    update,
    remove
};
