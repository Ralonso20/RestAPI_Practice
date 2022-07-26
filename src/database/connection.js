import mysql2 from 'mysql2';

let connection = mysql2.createConnection({
    host : 'localhost',
    user : 'node',
    password : 'password',
    database : 'webstore'
});


async function getConnection(){
    //conectarse a mysql
    connection.connect(function(err) {
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
})};



connection.query('SELECT 1', function(err, rows, fields){
    if(err){
        console.log('error');
        return;
    }

    console.log(rows);
})

getConnection();


