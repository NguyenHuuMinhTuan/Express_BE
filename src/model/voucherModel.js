const pool = require('../utils/connectDB.js');

const getAll = async () => {
    const [rows] = await pool.execute('SELECT * FROM Voucher');
    return rows;
};

const create = async (newVoucher) => {
    const { Date_sale, Date_end, discount, title, code} = newVoucher;

    if (!Date_sale || !Date_end ||! discount ||! title ||! code) {
        throw new Error("All fields (Date_sale, Date_end, discount, title, code) are required");
    }

    const query = 'INSERT INTO voucher ( Date_sale, Date_end, discount, title, code) VALUES (?, ?,?,?,?)';
    const [rows] = await pool.execute(query, [ Date_sale, Date_end, discount, title, code]);

    return rows;
};

const update = async (id, updateVoucher) => {
    const {  Date_sale, Date_end, discount, title, code } = updateVoucher;
    
    let query = 'UPDATE voucher SET ';
    const values = [];

    if (Date_sale) {
        query += 'Date_sale = ?, ';
        values.push(Date_sale);
    }
    if (Date_end) {
        query += 'Date_end = ?, ';
        values.push(Date_end);
    }
    if (discount) {
        query += 'discount = ?, ';
        values.push(discount);
    }
    if (title) {
        query += 'title = ?, ';
        values.push(title);
    }
    if (code) {
        query += 'code = ?, ';
        values.push(code);
    }

    query = query.slice(0, -2); 
    query += ' WHERE id = ?';
    values.push(id);

    const [rows] = await pool.execute(query, values);
    return rows;
};

const remove = async (id) => {
    const query = 'DELETE FROM voucher WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows;
};

module.exports = {
    getAll,
    create,
    update,
    remove
};
