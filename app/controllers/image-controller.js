(function() {

	var app = angular.module('ImgularApp');

	var ImageCtrl = function($http, $scope, Imgur) {

		var i = 0;
		var https = '';
		console.warn('image page: ' + Imgur.randomLinks);
		$scope.links = Imgur.links;

		angular.forEach(Imgur.randomLinks, function(string) {
			$http.get('https://api.imgur.com/3/image/' + string)
				.success(function(result) {
					https = result.data.link.replace('http://', 'https://');
					if($scope.links.indexOf(https) == -1) {
						$scope.links.push(https);
					}
				})
				.error(function() {
					$http.get('https://api.imgur.com/3/image/'+ ((Math.random() + 1).toString(36).slice(-6)))
						.success(function(result) {
							https = result.data.link.replace('http://', 'https://');
							if($scope.links.indexOf(https) == -1) {
								$scope.links.push(https);
							}
						})
						.error(function() {
							$http.get('https://api.imgur.com/3/image/'+ ((Math.random() + 1).toString(36).slice(-5)))
								.success(function(result) {
									https = result.data.link.replace('http://', 'https://');
									if($scope.links.indexOf(https) == -1) {
										$scope.links.push(https);
									}
								})
						});
				});
		});
	};

	app.controller('ImageCtrl', ['$http', '$scope', 'Imgur', ImageCtrl]);

}());