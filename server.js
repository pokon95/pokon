const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "root123456",
    database:"mydata"
});

// con.connect(function(err){
//     if (err) throw err;
//     console.log("Connected");
//     con.query("CREATE DATABASE mydata", function (err, result) {
//         if(err) throw err;
//         console.log ("DATABASE created");
//     });

// });


// con.connect(function(err){
//     if (err) throw err;
//     console.log("Connected");
//     con.query="CREATE TABLE customers (name VARCHAR(255), address VARCHAR (255))";
//         if (err) throw err;
//         console.log("Table created");
// });

con.connect (function(err){
    if(err) throw err;
    console.log("Connected!");
    const sql ="ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err,result){
        if (err) throw err;
        console.log("Table altered");
    });
});

con.connect (function(err){
    if(err) throw err;
    console.log("Connected!");
    const sql =" INSERT INTO customers (name, address) VALUES ?";
})

