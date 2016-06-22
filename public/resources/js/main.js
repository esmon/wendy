var pocketBetaApp = angular.module('wendyApp', [
	'ui.router'
]);

pocketBetaApp.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', function($urlRouterProvider, $locationProvider, $stateProvider) {
	$locationProvider.html5Mode(true);

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

angular.module('wendyApp')
.directive('dynamicHtml', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.markup, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
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