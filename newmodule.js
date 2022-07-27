http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(dt.myfnc());
    res.end();
}).listen(8080);