var express = require('express');
var app = express();
var http = require('http');
app.use(express.static(__dirname));

app.listen(80,function () {
	console.log('启动成功');
});
