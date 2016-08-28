var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
 if (req.session.userId) {
  res.redirect('/');
 }
 req.session.userId = 'zhangzhili';
 console.log(req.session);
 res.send('session set '+ req.session.toString());
});

router.post('/login', function (req, res, next) {
  res.redirect('/index');
});

router.get('/logout', function (req, res, next) {
  res.session = null;
  // res.redirect('/login');
})

module.exports = router;
