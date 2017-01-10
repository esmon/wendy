angular.module('wendyApp')
.controller('contactCtrl', ['$scope', function ($scope) {
	'use strict';

	$scope.contact = 'Reach me here';

	$scope.message = '';
	$scope.contactInfo = {};
	$scope.emailSuccess = false;


	$scope.submitForm = function() {
		
		$scope.emailSuccess = true;

		// emailApi.postEmail({email: $scope.email}).then(function(data) {
		// 	console.log('it worked');
		// 	$scope.emailSuccess = true;
		// 	$scope.message = 'success';
		// });
	};

}]);
