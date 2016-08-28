var db = require('./connection');

/**
* 用户文档结构 in collection('user')
{
  username:<string> email,
  nickname:<string> 昵称,
  password:<string> pwd,
  create: <unix_timestamp> 创建时间,
}
*/

var userObj = {
  data: [],
  find: function (obj) {
    db.collection('user').find(obj).toArray(function (err, result) {
      if (err) throw err;
      return result;
    });
  },

};

module.exports = userObj;
