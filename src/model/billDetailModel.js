const pool = require('../utils/connectDB')

const getAllBillDetails = async ()=>{
    const [rows] = await pool.execute('SELECT * FROM bill_detail');
    return rows;
}

module.exports = {
    getAllBillDetails,
}