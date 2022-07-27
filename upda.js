var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    var findcond={$and: [{"name":"abhishek"},{"age":{$gt:19}}]};
    var setcond={ $set: {"name":"abhishekgarfield"}};
    var dbo=db.db("data");
    dbo.collection("data").updateMany(findcond,setcond , function(err,result)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("updated");
            console.log(result);
        }
    })

})