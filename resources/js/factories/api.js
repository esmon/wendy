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