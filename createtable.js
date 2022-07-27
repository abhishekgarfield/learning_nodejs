var mysql=require('mysql2');

var con= mysql.createConnection(
{
    host:"localhost",
    user:"root",
   
});

con.connect(function(err)
{
    if(err)
    {
        throw err;
    }
    else{
        console.log("connection done");
    }
    con.query("create table senior(name varchar(22), sr int)" ,function(err, result)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log(result);
            process.exit();
        }
    })
});
