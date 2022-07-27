var mysql=require("mysql2");

var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        user:"",
    pass:""
      
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("connection done");
    var query="select * from garfield;";
    con.query(query,function(err,result)
    {
        if(err) throw err;
        console.log(result);
    })
})