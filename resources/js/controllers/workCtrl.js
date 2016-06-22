angular.module('wendyApp')
.controller('workCtrl', ['$scope', '$stateParams', 'wendy.api', function ($scope, $stateParams, workApi) {
	'use strict';

	// get single work data
	workApi.getSingleWork($stateParams.slug).then(function(data){
	  $scope.work = data;
	});

	// get works data
	workApi.getWorks().then(function(data){
		$scope.works = data;
	});

}]);
