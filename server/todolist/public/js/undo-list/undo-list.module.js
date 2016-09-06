define(function(require, exports, module) {

	var app = angular.module("undoList", []);
	app.config(function ($httpProvider) {

	});
	app.factory("loadList", ["$http", "$q", function ($http, $q) {
		return {
			show : function () {
				var defer = $q.defer();
				var promise = defer.promise;
				$http.get("/data/undo-list/list.json").success(function (data) {
					defer.resolve(data);
				}).error(function (data) {
					defer.reject(data);
				});
				return promise;
			}
		}
	}]);
})
