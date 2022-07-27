var mysql=require("mysql2");
var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("connection established");
    var sql="select * from garfield where SR>1 ;"
    con.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log(result);
    })
})