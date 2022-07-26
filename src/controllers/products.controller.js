import { getConnection } from "../database/connection";

export const getProducts = (req, res) => {
    
    const pool = getConnection();
    pool.query(('SELECT * FROM Products'), function(err, rows, fields){
        if(err){
            console.log('error');
            return;
        }

        res.json(rows);
    })
    
}