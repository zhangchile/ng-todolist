var express = require('express');
var router = express.Router();

var db = require('mongoskin').db('mongodb://localhost:27017/exercise');
//
router.get('/', function (req, res) {
  console.log('mongodb');
  var data = [];
  db.collection('exercise').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    data = result;
  });
  res.send(data);
});

module.exports = router;
