var express = require('express');
var app = express();

app.get('/', function (request, response) {
	// render the views/index.ejs template file
	response.render('index', {title: 'Lab 9 - Integration using node.js'})
});

module.exports = app;
