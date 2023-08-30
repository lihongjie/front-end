//安装express依赖 并用变量保存起来方便调用里面的方法
var express = require("express");
var app = express();
var fs = require('fs')
//解析POST请求需要安装此依赖
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false
}));
//配置地址与端口号
var hostName = 'localhost';
var port = 3000;
//对所有请求开启CORS  解决跨域问题
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
//GET请求例子
app.get("/index", function(req, res) {
	console.log("请求url：", req.path)
	console.log("请求参数：", req.query)//如果有callback即说明是 jsonp方法
	let callback = req.query.callback;
	var result = fs.readFileSync("./mock/db1.json", 'utf-8');
	if(callback){
		res.send(callback + '(' + JSON.stringify(result) + ')');
	}
	else{
		res.send(result);
	}
})

//GET请求例子
app.get("/api/test", function(req, res) {
	console.log("请求url：", req.path)
	console.log("请求参数：", req.query)
	let callback = req.query.callback;
	var result = fs.readFileSync("./mock/db2.json", 'utf-8');
	if(callback){
		res.send(callback + '(' + JSON.stringify(result) + ')');
	}
	else{
		res.send(result);
	}
})


//POST请求例子
app.post("/index", function(req, res) {
	console.log("请求url：", req.path)
	console.log("请求参数：", req.query)
	var result = fs.readFileSync("./mock/db2.json", 'utf-8');
	res.send(result);
});

app.listen(port, hostName, function() {
		console.log(`服务器运行在http://${hostName}:${port}`);
});