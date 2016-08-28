var db = require('./connection');

/**
清单文档结构 in collection('list')
{
title: <string> 标题,
content: <string> 内容,
username: <string> email 创建人,
state: <string> in [ready, doing, finish, delete]
tag: array [tag1,tag2,tag3],
create: <unix_timestamp> 创建时间,
update: <unix_timestamp> 更新时间,

}
*/

var listObj = {
getUserList: function () {
  db.collection('list').find().toArray(function (err, result) {
    if (err) throw err;
    return result;
  })
},

};

module.exports = listObj;
