var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user:"",
 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE my", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});