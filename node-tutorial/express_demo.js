//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var url = req.query.url;
    var name = req.query.name;
    res.send('Hello World');
});

app.post('/http/receiveGateway', function (req, res) {
    var url = req.url;
    req.on('data', function(reqBody) {
        var body = reqBody.toString();
    });
    res.send('Hello World NodeJS');
});

var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});