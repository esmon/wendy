var pocketBetaApp = angular.module('wendyApp', [
	'ui.router'
]);

pocketBetaApp.config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}])
.config(['$stateProvider', function ($stateProvider) {

	$stateProvider
	// app homepage
	.state('home', {
		url: '/',
		templateUrl: '/views/work-grid.html',
		controller: 'workGridCtrl'
	})
	// form to enter climbing info
	.state('work', {
		url: '/work/:slug',
		templateUrl: '/views/work.html',
		controller: 'workCtrl'
	});

}]);
angular.module('wendyApp')
.controller('workCtrl', function ($scope) {
	'use strict';

	$scope.work = 'work';

});

angular.module('wendyApp')
.controller('workGridCtrl', function ($scope) {
	'use strict';

	$scope.works = [
		{
			title: 'Coppertone',
			image: '',
			role: 'Art Direction',
			slug: 'coppertone'
		},
		{
			title: 'Migrant Offshore Aid Station',
			image: 'images/child-crying.jpg',
			role: 'Art Direction',
			slug: 'migrant-offshore-aid-station'
		},
		{
			title: 'Starbucks',
			image: 'images/starbucks.jpg',
			role: 'Art Direction',
			slug: 'starbucks'
		},
		{
			title: 'Beau\'s',
			image: 'images/beaus.jpg',
			role: 'Art Direction',
			slug: 'beaus'
		},
		{
			title: 'Tracksmith',
			image: 'images/tracksmith.jpg',
			role: 'Art Direction',
			slug: 'tracksmith'
		},
		{
			title: 'Philips Hue',
			image: 'images/hue.jpg',
			role: 'Art Direction',
			slug: 'philips-hue'
		},
		{
			title: 'Levis',
			image: 'images/levis.jpg',
			role: 'Art Direction',
			slug: 'levis'
		},
	];
});
