(function() {

	var app = angular.module('ImgularApp');

	var Imgur = function($http) {

		$http.defaults.useXDomain = true;
		$http.defaults.headers.common['Authorization'] = 'Client-ID INSERT_KEY_HERE';

		var randomLinks = [],
			links = [];

		return {
			randomLinks: randomLinks,
			links: links
		};
	
	};

	app.factory('Imgur', Imgur);

}());