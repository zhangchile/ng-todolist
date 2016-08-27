var express = require('express');
var router = express.Router();

// router.use(function timeLog(req, res, next) {
//   console.log('Time:' , Date.now());
// });

var nextObj = function (req, res) {

  res.send('from nextobj');
}

router.get('/', function (req, res, next) {
  //res.json('Birds home Page');
  next();
}, nextObj);

router.get('/about', function(req, res, next) {
  res.send('About birds');
});

module.exports = router;
