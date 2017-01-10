angular.module('wendyApp')
.controller('homeCtrl', ['$scope', 'wendy.api', function ($scope, worksApi) {
	'use strict';

	// get works data
	worksApi.getWorks().then(function(data){
		$scope.works = data;
	});

}]);
