var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db)
{
    var dbo=db.db("data");
    var sql=[{"name":"abhishek","age":20,"roll":2759},
    {"name":"chandni","age":23,"roll":59},
    {"name":"garfield","age":25,"roll":9},
    {"name":"abhi","age":26,"roll":2}];
    dbo.collection("data").insertMany(sql,function(err,res)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("data inserted");
            db.close();
        }
    })
})