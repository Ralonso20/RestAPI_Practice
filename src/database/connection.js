import mysql2 from 'mysql2';

const dbSettings = {
    host : 'localhost',
    user : 'node',
    password : 'password',
    database : 'webstore'
};


export async function getConnection(){
    //conectarse a mysql
    try{
        const pool = mysql2.createPool(dbSettings);
        return pool.promise();
    }catch(error){
        console.error(error);
    }
    
};

export {mysql2};


