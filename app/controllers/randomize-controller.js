(function() {

	var app = angular.module('ImgularApp');

	var RandomizeCtrl = function($http, $scope, Imgur) {
		$scope.count = 10;

		$scope.message = 'Randomize';

		$scope.onChange = function(count) {
			if (count < 0) {
				count = 0;
			} else if (count > 20) {
				count = 20;
			}

			$scope.count = count;
		};

		$scope.onClick = function(count) {
			var i = 0;
			Imgur.randomLinks = [];
			Imgur.links = [];
			for(i; i < count; i++) {
				random = (Math.random() + 1).toString(36).slice(-7)
				Imgur.randomLinks.push(random);
			}
		};
	};

	app.controller('RandomizeCtrl', ['$http', '$scope', 'Imgur', RandomizeCtrl]);

}());