import { getConnection } from "../database/connection";

export const getProducts = async (req, res) => {
    
    const pool = await getConnection();
    const [rows, fields] = await pool.query('SELECT * FROM Products');
    res.json(rows);
    
};