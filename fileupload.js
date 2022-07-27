
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    
    if(req.url== '/fileupload')
    {
      var form=new formidable.IncomingForm();
      form.parse(req, function(err , fileds,files)
      {
        var oldpath=files.filetoupload.filepath;
        var newpath='/Users/garfield/Documents/web project/Nodejs/store/'+ files.filetoupload.originalFilename;
        fs.rename(oldpath , newpath , function(err)
        {
          if(err)
          {
            throw err;
          }
          else{
            res.write("data submitted");
            res.end();
          }
        })
      })
      
    }
    else
    {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');

    }
}).listen(8080);
