import { getConnection, mysql2 } from "../database/connection";

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const [rows, fields] = await pool.query('SELECT * FROM Products');
        res.json(rows);    
    } catch (error) {
        res.status(500);
        res.send(error.msg);
    }
};

export const createNewProduct = async (req, res) => { 

    const {name, description} = req.body;
    let {quantity} = req.body;

    if(quantity == null) quantity = 0;

    if(name == null || description == null){
        return res.status(400).json({msg: 'Bad Request, please fill all fields'});
    };
    
    const post = {
        name : name,
        description : description,
        quantity : quantity
    }

    try {
        const pool = await getConnection();
        await pool.query('INSERT INTO Products SET ?', post);

        res.json({name, description, quantity});        
    } catch (error) {
        res.status(500);
        res.send(error.msg);      
    }
    
};