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
angular.module('wendyApp')
.controller('aboutCtrl', function ($scope) {
	'use strict';

	$scope.about = {
		image : 'resources/images/portrait.jpg',
		copy : 'My name is Wendy.\n\nI\’m a former graduate of linguistics and rhetorical studies, and have a working knowledge of at least four languages.\n\nI\'m an aspiring art director with skills in design. I believe fervently that the world can change for the better, and would love to do that through advertising.\n\nIn my spare time, you can find me walking my dog, rock climbing, or just cycling around the city and enjoying a good cup of joe with a friend.'
	};
});

angular.module('wendyApp')
.controller('workCtrl', function ($scope) {
	'use strict';

	$scope.work = {
		details : 'work details',
		images : [
			'derp',
			'derp1'
		]
	};

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
			image: 'resources/images/child-crying.jpg',
			role: 'Art Direction',
			slug: 'migrant-offshore-aid-station'
		},
		{
			title: 'Starbucks',
			image: 'resources/images/starbucks.jpg',
			role: 'Art Direction',
			slug: 'starbucks'
		},
		{
			title: 'Beau\'s',
			image: 'resources/images/beaus.jpg',
			role: 'Art Direction',
			slug: 'beaus'
		},
		{
			title: 'Tracksmith',
			image: 'resources/images/tracksmith.jpg',
			role: 'Art Direction',
			slug: 'tracksmith'
		},
		{
			title: 'Philips Hue',
			image: 'resources/images/hue.jpg',
			role: 'Art Direction',
			slug: 'philips-hue'
		},
		{
			title: 'Levis',
			image: 'resources/images/levis.jpg',
			role: 'Art Direction',
			slug: 'levis'
		},
	];
});
