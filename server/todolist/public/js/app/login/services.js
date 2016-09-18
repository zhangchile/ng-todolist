define(function(require, exports, module) {
  var app = angular.module("app.login.services", []);
  app.factory("Login", ["$http", function ($http) {
    var baseUrl = '/login';
      return {
        in: function (username, password) {
          return $http.post(baseUrl, {username: username, password:password});
        },
        out: function () {
          return $http.get(baseUrl);
        }
      };
  }])
});
