var mysql=require("mysql2");

var con=mysql.createConnection({
    host:"localhost",
    user:"",
    pass:"",
    database:"data"
});

con.connect(function(err)
{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("connection made");
    }
    con.query("create table data1(name varchar(12) , age int);", function(err,info)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log("table created");
        }
    });
    con.query("insert into data1(name , age ) values ('abhishek' , 16);", function(err,info)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log("table created" );
        }
    });
    con.query("select * from data1", function(err,info)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log(info);
        }
    });
})
