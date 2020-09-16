var express = require('express');
var router = express.Router();

// import db.js
var db = require('./db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sql = 'select * from user';
  db.query(sql, function (err, rows) {
      if (err) {
        res.render('users', {title:'Express', datas:[]});
      } else {
        res.render('users', {title:'Express', datas:rows});
      }
  });
  // res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
    res.render('add');
});

router.post('/add', function(req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var sql = "insert into user(name, age) values(" + "'" + name + "'" +  "," + age + ")";
    db.query(sql, function(err, rows) {
      if (err) {
        res.end('' + err);
      } else {
        res.redirect('/users');
      }
    });
});

router.get('/delete/:id', function(req, res) {
    var id = req.params.id;
    var sql = 'delete from user where id=' + id ;
    db.query(sql, function(err, rows){
      if (err) {
        res.end('' + err);
      } else {
        res.redirect('/users');
      }
    })
});

router.get('/update/:id', function(req, res) {
    var id = req.params.id;
    var sql = 'select * from user where id = ' + id;
    db.query(sql, function(err, rows) {
      if (err) {
        res.end(err);
      } else {
        res.render("update", {datas: rows})
      }
    });
});

router.post('/update', function(req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var age = req.body.age;
  var sql = 'update user set name="' + name + '",age=' + age + ' where id = ' + id;
  db.query(sql, function(err, rows){
    if (err) {
      res.end(err);
    } else {
      res.redirect('/users');
    }
  })
});
/**
 * 查询
 */
router.post('/search', function (req, res) {
    var name = req.body.s_name;
    var age = req.body.s_age;

    var sql = "select * from user";

    if (name) {
        sql += " and name='" + name + "' ";
    }

    if (age) {
        sql += " and age=" + age + " ";
    }
    sql = sql.replace("and","where");
    db.query(sql, function (err, rows) {
        if (err) {
            res.end("查询失败：", err)
        } else {
            res.render("users", {title: 'Express', datas: rows, s_name: name, s_age: age});
        }
    });
});
module.exports = router;
