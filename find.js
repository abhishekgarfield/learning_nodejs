var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    var dbo=db.db("data");
    var cond={"age":{$gt:23}};
    dbo.collection("data").find(cond,function(err,result)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log(result);
        }
    });
});