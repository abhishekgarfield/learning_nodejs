var http=require("http");
var fs=require("fs");
var formidable=require("formidable");

http.createServer(function(req,res)
{
    if(req.url=="/formupload")
    {
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files)
        {
             var oldpath=files.filetoupload.filepath;
             var newpath="/Users/garfield/Desktop/"+ files.filetoupload.originalFilename;
             fs.rename(oldpath,newpath,function(err)
             {
                if(err)
                {
                    throw err;
                }
                else
                {
                    console.log("filename changes");
                    res.write("file renamed");
                    res.end();
                }
             })
        })

    }
    else
    {
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write('<form action="/formupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();

    }
}).listen(8080);