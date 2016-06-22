var pocketBetaApp = angular.module('wendyApp', [
	'ui.router'
]);

pocketBetaApp.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', function($urlRouterProvider, $locationProvider, $stateProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider
	// app homepage
	.state('home', {
		url: '/',
		templateUrl: '/views/home.html',
		controller: 'homeCtrl'
	})
	// work
	.state('works', {
		url: '/works',
		templateUrl: '/views/works.html',
		controller: 'worksCtrl'
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
	})
	// about
	.state('contact', {
		url: '/contact',
		templateUrl: '/views/contact.html',
		controller: 'contactCtrl'
	})
	// 404
	.state('404', {
		templateUrl: '/views/404.html',
	});

	$urlRouterProvider.otherwise(function($injector, $location){
		var state = $injector.get('$state');
		state.go('404');
		return $location.path();
	});

}]);