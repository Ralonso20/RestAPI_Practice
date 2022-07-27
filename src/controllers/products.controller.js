import { getConnection, queries } from "../database";

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const [rows, fields] = await pool.query(queries.getAllProducts);
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
        await pool.query(queries.addNewProduct, post);

        res.json({name, description, quantity});        
    } catch (error) {
        res.status(500);
        res.send(error.msg);      
    }
    
};

export const getProductById = async (req, res) => {
    const {id} = req.params;

    try {
        const pool = await getConnection();
        const [rows, fields] = await pool.query(queries.getProductById + id);
          
        res.send(rows);      
    } catch (error) {
        res.status(500);
        res.send(error.msg);      
    }
    
    
};

export const deleteProductById = async (req, res) => {
    const {id} = req.params;

    try {
        const pool = await getConnection();
        await pool.query('SET SQL_SAFE_UPDATE = 0');
        const [rows, fields] = await pool.query(queries.deleteProduct, id);
          
        res.send(rows);      
    } catch (error) {
        res.status(500);
        res.send(error.msg);      
    }
    
    
};

export const updateProductById = async (req, res) => { 

    const {name, description, quantity} = req.body;
    const {id} = req.body;

    if(quantity == null) quantity = 0;

    if(name == null || description == null || quantity){
        return res.status(400).json({msg: 'Bad Request, please fill all fields'});
    };
    
    const post = {
        name : name,
        description : description,
        quantity : quantity,
        id : id
    }

    try {
        const pool = await getConnection();
        await pool.query(queries.updateProduct, post);

        res.json({id, name, description, quantity});        
    } catch (error) {
        res.status(500);
        res.send(error.msg);      
    }
    
};
