var wendyApp = angular.module('wendyApp', [
	'ui.router'
]);

wendyApp.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', function($urlRouterProvider, $locationProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
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
		template: '<div>error</div>',
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

angular.module('wendyApp')
.controller('homeCtrl', ['$scope', 'wendy.api', function ($scope, worksApi) {
	'use strict';

	// get works data
	worksApi.getWorks().then(function(data){
		$scope.works = data;
	});

}]);

angular.module('wendyApp')
.controller('masterCtrl', ['$scope', '$state', '$window', function ($scope, $state, $window) {
	'use strict';

	$scope.$on('$viewContentLoaded', function() {
	  $window.scrollTo(0,0);

	  $scope.navState = $state.current.name;

	});

	$scope.mobileMenuToggle = function() {
		var navContainer = document.body;
		navContainer.classList.toggle('menu-is-active');
	};

	$scope.hideMobileNav = function() {
		var navContainer = document.body;
		if (navContainer.classList.contains('menu-is-active')) {
			navContainer.classList.remove('menu-is-active');
		}
	};

}]);

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

angular.module('wendyApp')
.controller('worksCtrl', ['$scope', 'wendy.api', function ($scope, worksApi) {
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
angular.module('wendyApp')
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);