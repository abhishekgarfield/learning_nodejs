var mysql=require("mysql2");

var con=mysql.createConnection({
    host:"localhost",
    
    
});

con.connect(function(err)
{
    if(err)
    {
        console.log("error here");
        throw err;
    }
    else
    {
        console.log("connection made");
    }
    var sql="create database data;"
    con.query(sql,function(err)
    {
        if(err)
        {
            console.log("error here");
            throw err;
        }
        else
        {
         console.log("database created");
        }
    });
});
