angular.module('wendyApp')
.controller('workCtrl', ['$scope', '$stateParams', 'wendy.api', '$q', function ($scope, $stateParams, workApi, $q) {
	'use strict';

	// get single work data
	const singleWork = workApi.getSingleWork($stateParams.slug).then(function(data){
	  	$scope.work = data;
	  	return $scope.work;
	});

	// get works data
	const allWorks = workApi.getWorks().then(function(data){
		$scope.works = data;
		return $scope.works;
	});

	const indexOfObject = (arr, obj) => {
		for(var i = 0; i < arr.length; i++){
			if(angular.equals(arr[i], obj)){
				return i;
			}
		}
		return -1;
	};

	// Determine Previous post
	const siblingWorks = () => {
		const index = indexOfObject($scope.works, $scope.work);
		const neighbours = {};

		neighbours.next = $scope.works[index + 1];
		neighbours.previous = $scope.works[index - 1];
		$scope.neighbours = neighbours;
	};

	$q.all([singleWork, allWorks]).then(function(){
		siblingWorks();
	});

}]);
