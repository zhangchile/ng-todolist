var express = require('express');
var router = express.Router();

var user = require('../model/user');

// router.use(function timeLog(req, res, next) {
//   console.log('Time:' , Date.now());
// });

var nextObj = function (req, res) {

  res.send('from nextobj');
}

router.get('/', function (req, res, next) {
  //res.json('Birds home Page');
  console.log('user=')
  console.log(user);
  next();
}, nextObj);

router.get('/about', function(req, res, next) {
  res.send('About birds');
});

module.exports = router;
