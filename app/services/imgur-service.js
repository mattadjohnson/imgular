(function() {

	var app = angular.module('ImgularApp');

	var Imgur = function($http) {

		$http.defaults.useXDomain = true;
		$http.defaults.headers.common['Authorization'] = 'Client-ID 446a9f91f4383c2';

		var randomLinks = [],
			links = [];

		return {
			randomLinks: randomLinks,
			links: links
		};
	
	};

	app.factory('Imgur', Imgur);

}());