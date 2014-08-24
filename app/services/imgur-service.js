(function() {

	var app = angular.module('ImgularApp');

	var imgur = function($http, $scope) {

		var getRandom = function(count) {

			var success = 0,
				dataSet = [];

			for(success; success < count; ) {
				$http.get('https://api.imgur.com/3/gallery/random/random/')
					.success(function(data) {
						success++;
						dataSet.push(data);
					});
			}
			console.warn(dataSet);
			return dataSet;
		};

		return {
			getRandom: getRandom
		};
	
	};

	app.factory('imgur', imgur);

}());