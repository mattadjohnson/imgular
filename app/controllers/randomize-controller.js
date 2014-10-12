(function() {

	var app = angular.module('ImgularApp');

	var RandomizeCtrl = function($http, $scope, Imgur) {
		$scope.count = Math.floor(Math.random()*(20-10+1)+10);;

		$scope.message = 'Randomize';

		$scope.links = Imgur.links;

		var i = 0,
			https = '';

		var url = "http://i.imgur.com/",
			table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
			table_length = table.length-1,
			requests = 0,
			failed = 0,
			finished = 0,
			file_types = ["png", "jpg", "jpeg", "gif"],
			current_type, img;

		$scope.onChange = function(count) {
			if (count < 0) {
				count = 0;
			} else if (count > 20) {
				count = 20;
			}

			$scope.count = count;
		};

		var tryRandom = function(count) {
			var error = false,
				length = (Math.floor(Math.random() * (6 - 5 + 1)) + 5);

			$http.post('https://cors-anywhere.herokuapp.com/https://api.random.org/json-rpc/1/invoke', {
				    "jsonrpc": "2.0",
				    "method": "generateStrings",
				    "params": {
				        "apiKey": "RANDOM.ORG_APIKEY_HERE",
				        "n": count,
				        "length": 5,
				        "characters": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
				        "replacement": false
				    },
				    "id": 42
				})
				.success(function(result) {
					getImages(result, count);
				});
		};

		var getImages = function(result, count) {
			randomLinks = (result.result.random.data);

			for(var j = 0; j < count; j++) {
				$http.get('https://api.imgur.com/3/image/' + randomLinks[j])
					.success(function(result) {
						https = result.data.link.replace('http://', 'https://');
						if($scope.links.indexOf(https) == -1 && $scope.links.length <= count) {
							$scope.links.push(https);
						}
					});
			}

			if($scope.links.length < count) {
				var diff = count - $scope.links.length;

				tryRandom(diff);
			}
		};

		$scope.onClick = function(count) {
			$scope.links.length = 0;
			tryRandom(count);
		};

	
	};

	app.controller('RandomizeCtrl', ['$http', '$scope', 'Imgur', RandomizeCtrl]);

}());