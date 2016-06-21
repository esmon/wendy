angular.module('wendyApp')
.controller('workCtrl', ['$scope', '$stateParams', 'wendy.api', function ($scope, $stateParams, workApi) {
	'use strict';

	// get work data
	workApi.getSingleWork($stateParams.slug).then(function(data){
	  $scope.work = data;
	});

}]);
