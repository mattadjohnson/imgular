(function() {

	var app = angular.module('ImgularApp');

	var RandomizeCtrl = function($http, $scope, $routeParams) {
		$http.defaults.useXDomain = true;
		$http.defaults.headers.common['Authorization'] = 'Client-ID CLIENTIDHERE';

		$scope.pageNo = Math.floor(Math.random() * 50) + 1;
		$scope.message = 'Randomize';
		$scope.links = [];

		$scope.getImages = function(pageNo) {
			var https = '';
			var i = 0;
			var images = [];

			pageNo = Math.floor(Math.random() * 50) + 1;
			$routeParams.pageNo = pageNo;

			$http.get('https://api.imgur.com/3/gallery/random/random/' + pageNo)
				.success(function(result) {
					images = result.data;
					$scope.links = [];

					for (i = 0; i < images.length; i++) {
						if (!images[i].is_album) {
							https = images[i].link.replace('http://', 'https://');
							$scope.links.push(https);
						}
					}
				})
				.error(function() {
					console.log('error');
				})
			;
		};
	};

	app.controller('RandomizeCtrl', ['$http', '$scope', '$routeParams', RandomizeCtrl]);

}());
