var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.31.122:27017";
// const url = 'mongodb://admin:123456@localhost:27017/'; 有密码连接方式 

const dbName="test";

var collection = 'site';

var a = 'a';
var c = 'c';
var demo = {name:'Hello World', value:'test demo'};

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var client = db.db(dbName);

    //创建集合
    client.createCollection(collection, function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });



    // find 返回集合中所有数据
    // client.collection(a). find({}).toArray(function(err, result) { 
    //     if (err) throw err;
    //     // console.log(result);

    //     client.collection(c).insertMany(result, function (error, result) {
    //         if(error)
    //             throw error;
    //         console.log("文档插入成功");

    //     });

    // });

    //insert
    // client.collection(collection).insertMany(myresult, function (error, result) {
    //    if(error)
    //        throw error;
    //     console.log("文档插入成功");
    //
    // });
    //update one
    // var newData = { $set: {name: "First Demo", value:'test'}};
    // var query = {name: 'Hello World'};
    // client.collection(collection).updateOne(query, newData, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.result.nModified + " 条文档被更新");
    //     db.close();
    // });
    //
    // var newQuery = {name: "First Demo"};
    // client.collection(collection).deleteOne(newQuery, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.result + " 条文档被删除");
    //     db.close();
    // });
    // client.collection(collection).deleteMany({}, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.result);
    //     db.close();
    // });
});



