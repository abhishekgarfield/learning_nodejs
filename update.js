var mysql=require("mysql2");
var con = mysql.createConnection(

    {
        host:"localhost",
        user:"root",
        user:"",
    
       
    }
)
con.connect(function(err)
{
    if(err) throw err;
    console.log("database connection established");
    var sql1="show tables;";
    var sql2="create table datakio(sr int, roll int,name varchar(10));";
    var sql3="insert into datakio values(1,59,'abhishek');";
    var sql4="select * from datakio;";
    var sql5="select * from datakio where sr=1;";
    var sql6="update datakio set sr=3 where roll=59;";
    var sql7="delete from datakio where sr=3;";
    var sql8="drop table datakio;";

    con.query(sql1, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });
    con.query(sql2, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });
    con.query(sql3, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });
    con.query(sql4, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });

    con.query(sql5, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });
    
    con.query(sql6, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });
    
    
    con.query(sql7, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });
    
    con.query(sql8, function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });

    


}

);


