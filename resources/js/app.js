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
	// work
	.state('work', {
		url: '/work/:slug',
		templateUrl: '/views/work.html',
		controller: 'workCtrl'
	})
	// about
	.state('about', {
		url: '/about',
		templateUrl: '/views/about.html',
		controller: 'aboutCtrl'
	});

}]);