angular.module('wendyApp')
.controller('masterCtrl', ['$scope', '$state', '$window', function ($scope, $state, $window) {
	'use strict';

	$scope.$on('$viewContentLoaded', function() {
	  $window.scrollTo(0,0);

	  $scope.navState = $state.current.name;

	});

	$scope.mobileMenuToggle = function() {
		var navContainer = document.body;
		navContainer.classList.toggle('menu-is-active');
	};

	$scope.hideMobileNav = function() {
		var navContainer = document.body;
		if (navContainer.classList.contains('menu-is-active')) {
			navContainer.classList.remove('menu-is-active');
		}
	};

}]);
