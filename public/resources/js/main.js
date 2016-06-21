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
.controller('aboutCtrl', ['$scope', 'wendy.api', function ($scope, aboutApi) {
	'use strict';

	// get works data
	aboutApi.getAbout().then(function(data){
		$scope.about = data;
	});
}]);

angular.module('wendyApp')
.controller('workCtrl', ['$scope', '$stateParams', 'wendy.api', function ($scope, $stateParams, workApi) {
	'use strict';

	// get work data
	workApi.getSingleWork($stateParams.slug).then(function(data){
	  $scope.work = data;
	});

}]);

angular.module('wendyApp')
.controller('workGridCtrl', ['$scope', 'wendy.api', function ($scope, worksApi) {
	'use strict';

	// get works data
	worksApi.getWorks().then(function(data){
		$scope.works = data;
	});

}]);

angular.module('wendyApp').factory('wendy.api', ['$http', function($http) {

  function url(path) {
    return '/resources/data/' + path + '.json';
  }

  return {
    getWorks: function(type) {
      return $http.get(url('works'))
        .then(function(response) {
          return response.data;
        });
    },

    getSingleWork: function(slug) {
      return $http.get(url('work/' + slug))
        .then(function(response) {
          console.log(response.data);
          return response.data;
        });
    },

    getAbout: function(type) {
      return $http.get(url('about'))
        .then(function(response) {
          return response.data;
        });
    }
  };

}]);