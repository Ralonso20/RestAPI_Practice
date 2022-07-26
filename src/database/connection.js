import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host : 'localhost',
    user : 'node',
    password : 'password',
    database : 'webstore',
});


export function getConnection(){
    //conectarse a mysql
    try{
        connection.connect();
        return connection;
    }catch(error){
        console.error(error);
    }
    
};



