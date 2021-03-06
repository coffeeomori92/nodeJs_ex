var express = require('express');
var template = require('./lib/template.js');
var db = require('./lib/db.js');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var topic = require('./lib/topic.js');
var app = express();

// route, routing
app.get('/', function (req, res) {topic.home(req, res);});

app.get('/page/:id', function (req, res) {topic.page(req, res);});

app.get('/create', function (req, res) {topic.create(req, res);});

app.post('/create_process', function (req, res) {topic.create_process(req, res);});

app.get('/update/:id', function (req, res) {topic.update(req, res);});

app.post('/update_process', function (req, res) {topic.update_process(req, res);});

app.post('/delete_process', function (req, res) {topic.delete_process(req, res);});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/*var http = require("http");
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var db = require('./lib/db.js');
var topic = require('./lib/topic.js');
var author = require('./lib/author.js');

var app = http.createServer(function(req, res){
	
	var _url = req.url;
	var queryData = url.parse(_url, true).query;
	var pathname = url.parse(_url, true).pathname;
	
	if(pathname === "/"){
		if(queryData.id === undefined){
			topic.home(req, res);
		}else{
			topic.page(req, res);
		}
	}else if(pathname === "/create"){
		topic.create(req, res);
	}else if(pathname === "/create_process"){
		topic.create_process(req, res);
	}else if(pathname === "/update"){
		topic.update(req, res);
	}else if(pathname === "/update_process"){
		topic.update_process(req, res);
	}else if(pathname === "/delete_process"){
		topic.delete_process(req, res);
	}else if(pathname === "/author"){
		author.home(req, res);
	}else if(pathname === "/author/create_process"){
		author.create_process(req, res);
	}else if(pathname === "/author/update"){
		author.update(req, res);
	}else if(pathname === "/author/update_process"){
		author.update_process(req, res);
	}else if(pathname === "/author/delete_process"){
		author.delete_process(req, res);
	}else{
		res.writeHead(404);
		res.end('Not found');
	}
	
});
app.listen(3000);*/