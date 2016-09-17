var express = require('express');
var router = express.Router();
var app = express();
var viewHelper = require('../lib/viewHelper');

// 登录
router.get('/', function (req, res, next) {
  if (req.session.userId) {
    res.redirect('/');
  } else {
    // res.sendFile(viewHelper.getViewDir('/login/login.html'));
    res.render('login/login');
  }
});

router.post('/', function (req, res, next) {
  console.log(req.body)
});

//登出
router.get('/out', function (req, res, next) {
  res.session = null;
  res.redirect('/');
});


module.exports = router;
