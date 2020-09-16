var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '192.168.31.122',
    user : 'root',
    password : '123456',
    database : 'test'
});
connection.connect();

var inserSql = 'insert into user(id, name, sex) values(3, "Test", "Male")';
var querySql = 'select * from user';
var updateSql = 'UPDATE user SET sex = ? WHERE id = ? ';
var params = ['Female', 3];
var deleteSql = 'DELETE FROM user where id = 3';

connection.query(querySql, function (error, results, fields) {
   if (error)
       throw error;
   console.log('user name is ', results);
});

connection.query(inserSql, function (error, results, fields) {
    if (error)
        throw error;
});

connection.query(updateSql, params, function (error, results, fields) {
    if (error)
        throw error;
});

connection.query(deleteSql, params, function (error, results, fields) {
    if (error)
        throw error;
});

connection.end();