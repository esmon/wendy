angular.module('wendyApp')
.controller('aboutCtrl', ['$scope', 'wendy.api', function ($scope, aboutApi) {
	'use strict';

	// get works data
	aboutApi.getAbout().then(function(data){
		$scope.about = data;
	});
}]);
