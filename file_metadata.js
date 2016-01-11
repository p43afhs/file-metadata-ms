var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' }).single('upload_file')
var app = express()


app.get('/',function(req,res){
      res.sendFile(__dirname + '/form.html')
})

app.post('/', function (req, res) {
    upload(req,res,function(err) {
        if(err) {
            return res.end('Upload Error');
        }
        res.end(JSON.stringify({
            filesize: req.file.size
        }));
    });
})

app.listen(process.env.PORT)