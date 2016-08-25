'use strict';
var express = require('express');
var multer =  require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

require('dotenv').load();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
	res.sendFile(process.cwd() + '/views/index.htm');
});
app.get('/returnfilesize', function(req, res){
	res.redirect('/');
});
app.post('/returnfilesize', upload.single('yourfile'), function(req, res, next){
	var fileSize = req.file.size;
	res.json({size: fileSize});
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('Node.js listening on port ' + port + '...');
});