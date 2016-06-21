angular.module('wendyApp')
.controller('workGridCtrl', ['$scope', 'wendy.api', function ($scope, worksApi) {
	'use strict';

	// get works data
	worksApi.getWorks().then(function(data){
		$scope.works = data;
	});

}]);
