var express = require('express');
var app = express();

var viewHelper = {
  //获取view的静态文件路径
  getViewDir: function (file) {
    return app.get('views') + '/' + file;
  }
};

module.exports = viewHelper;
