http.createServer(function(req,res)
{
    fs.readFile("Documents/websites/zomato/index.html" , function(err ,data)
    {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

fs.writeFile("newfile.txt" ,"i abhishek this side" ,function(err)
{
    if(err) throw err ;
    
        console.log("renamed");

});

fs.appendFile("newfile2.txt" , "hi new content" , function(err)
{
    if(err) throw err ;
    
        console.log("renamed");

});

fs.open("newfile3.txt","w",function(err)
{
    if(err) throw err ;
    
        console.log("renamed");
});

fs.appendFile("newfile2.txt", "i m modifying this file" , function(err)
{
    if(err) throw err ;
    
        console.log("renamed");
});

fs.writeFile("newfile.txt" , "updating it with the help of write" , function(err)
{
    if(err) throw err ;
    
        console.log("renamed");
});

fs.unlink("newfile3.txt", function(err)
{
    if(err) throw err ;
    
        console.log("renamed");
});

fs.rename("newfile.txt" , "garfield.txt" , function(err)
{
    if(err) throw err ;
    
        console.log("renamed");
    
});