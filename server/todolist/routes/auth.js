var express = require('express');
var router = express.Router();

//全局处理器
//校验登录状态
router.use(function (req, res, next) {
  var sess = req.session;
  if (sess.userId) {
    //已登录
    next();
  } else {
    //跳转
    res.redirect('/users/login');
  }
});

module.exports = router;
