(function() {

	var app = angular.module('ImgularApp');

	var Imgur = function($http) {

		$http.defaults.useXDomain = true;
		$http.defaults.headers.common['Authorization'] = 'Client-ID 446a9f91f4383c2';

		var randomLinks = [],
			links = [];

		var getStrings = function(count) {
			$http.post('https://cors-anywhere.herokuapp.com/https://api.random.org/json-rpc/1/invoke', {
				    "jsonrpc": "2.0",
				    "method": "generateStrings",
				    "params": {
				        "apiKey": "e677aa72-f615-4c00-b5bb-8e2f7c2669aa",
				        "n": count,
				        "length": (Math.random() * (8 - 5) + 5),
				        "characters": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
				        "replacement": false
				    },
				    "id": 42
				})
				.success(function(result) {
					randomLinks = (result.result.random.data);
					return randomLinks;
				});
		};

		return {
			randomLinks: randomLinks,
			links: links,
			getStrings: getStrings
		};
	
	};

	app.factory('Imgur', Imgur);

}());