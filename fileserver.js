
var fs= require("fs");
var url= require("url");
var http= require("http");

http.createServer(function(req,res)
{
    var q=url.parse(req.url,true);
    var filename="."+ q.pathname;
    console.log("host: " + q.host);
    console.log("pathname: " + q.pathname);
    console.log("search: "+ q.search);
    console.log("filename: "+ filename);
    fs.readFile(filename , function(err,file)
    {
        if(err)
        {
            res.writeHead(404,{"Content-Type":"text/html"});
           return  res.end("error 404 file not found");
            
        }
        else
        {
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(file);
            return res.end();
        }
    });
}).listen(8080);