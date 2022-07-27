var mysql=require("mysql2");

var con = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
       
    }
);


con.connect(function(err)
{
    if(err) throw err;
    console.log("connected");
    con.query("insert into garfield values('vishal',2)",function(err,result)
    {
        if(err) throw err;
        console.log("1 record inserted");
    })
})


