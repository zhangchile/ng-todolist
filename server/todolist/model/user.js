var db = require('./connection');

var resultObj = {
  data: [],
};
db.collection('exercise').find().toArray(function(err, result) {
  if (err) throw err;
  // console.log(result);
  resultObj.data = result;
});

module.exports = resultObj;
