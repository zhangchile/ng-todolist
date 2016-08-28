var db = require('./connection');

/**
用户标签文档结构 in collection('tag')
{
  name: <string>,
  color:<string>,
  username: <string> email,
}


*/

var tagObj = {
  data: [],
  findUserTag: function (username) {
    db.collection('tag').find({username:username}).toArray(function(err, result) {
      if (err) throw err;
      return result;
    });
  }

};

module.exports = tagObj;
