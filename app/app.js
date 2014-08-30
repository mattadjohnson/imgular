(function() {

	var app = angular.module('ImgularApp', ['ngRoute', 'angular-loading-bar']);

	app.config(function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'app/templates/randomize.html',
				controller: 'RandomizeCtrl'
			})
			.when('/images/:count', {
				templateUrl: 'app/templates/images.html',
				controller: 'ImageCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

}());