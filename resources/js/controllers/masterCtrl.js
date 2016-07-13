angular.module('wendyApp')
.controller('masterCtrl', ['$scope', '$state', '$window', function ($scope, $state, $window) {
	'use strict';

	$scope.$on('$viewContentLoaded', function() {
	  $window.scrollTo(0,0);

	  $scope.navState = $state.current.name;

	  // console.log($scope.navState);
	});

}]);
