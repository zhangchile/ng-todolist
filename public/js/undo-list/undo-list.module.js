define(function(require, exports, module) {

	var app = angular.module("undoList", []);
	app.config(function ($httpProvider) {
		
	});
	app.factory("loadList", ["$http", function ($http) {
		return {
			show : function () {
				return $http.get("public/data/undo-list/list.json");
			}
		}
	}]);
})