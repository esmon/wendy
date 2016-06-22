angular.module('wendyApp').directive('worksGrid',
['$state', 'wendy.api', function ($state, worksApi) {

	return {
		restrict: 'A',
		scope: {
			works: "=works"
		},
		replace: true,
		templateUrl: '/views/works-grid.html',
		link: function(scope) {

		}
	};

}]);