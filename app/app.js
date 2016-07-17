(function() {

	var app = angular.module('ImgularApp', ['ngRoute', 'angular-loading-bar']);

	app.config(function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'app/templates/randomize.html',
			})
			.when('/images/:pageNo', {
				templateUrl: 'app/templates/images.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

}());
