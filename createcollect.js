var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    var dbo=db.db("data");
    dbo.createCollection("datastore",function(err,res)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("collection created");
            db.close();
        }
    })
})