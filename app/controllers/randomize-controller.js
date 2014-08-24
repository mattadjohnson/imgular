(function() {

	var app = angular.module('ImgularApp');

	var RandomizeCtrl = function($http, $scope) {
		$scope.count = 10;

		$scope.message = 'Randomize';

		$scope.onChange = function(count) {
			if (count < 0) {
				count = 0;
			} else if (count > 60) {
				count = 60;
			}

			$scope.count = count;
		};

		// $scope.onClick = function(count) {
		// 	imgur.getRandom(count);
		// };
	};

	app.controller('RandomizeCtrl', ['$http', '$scope', RandomizeCtrl]);

}());