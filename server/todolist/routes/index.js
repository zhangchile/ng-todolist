var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var viewHelper = require('../lib/viewHelper');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // var sess = req.session
  // if (sess.views) {
  //   sess.views++
  //   res.setHeader('Content-Type', 'text/html')
  //   res.write('<p>views: ' + sess.views + '</p>')
  //   res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
  //   res.end()
  // } else {
  //   sess.views = 1
  //   res.end('welcome to the session demo. refresh!')
  // }
  res.render('index');
  // console.log(app.get('views'));
  // res.sendFile(viewHelper.getViewDir('index.html'));
});

module.exports = router;
