var mysql = require('mysql');
var pool = mysql.createPool({
   host:'192.168.31.122',
   user:'root',
   password:'123456',
   database:'test'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function(err, rows) {
           callback(err, rows);
           connection.release();
        });
    })
}

exports.query = query;