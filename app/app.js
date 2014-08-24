(function() {

	var app = angular.module('ImgularApp', ['ngRoute']);

	app.config(function($routeProvider) {

	    // $imgurGlobalProvider.options({
	    //   apiKey:'446a9f91f4383c2'
	    // });

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