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
	});

}]);
angular.module('wendyApp')
.controller('workGridCtrl', function ($scope) {
	'use strict';

	$scope.works = [
		{
			title: 'Coppertone',
			image: '',
			role: 'Art Direction'
		},
		{
			title: 'Migrant Offshore Aid Station',
			image: 'images/child-crying.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Starbucks',
			image: 'images/starbucks.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Beau\'s',
			image: 'images/beaus.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Tracksmith',
			image: 'images/tracksmith.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Philips Hue',
			image: 'images/hue.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Levis',
			image: 'images/levis.jpg',
			role: 'Art Direction'
		},
	];
});
