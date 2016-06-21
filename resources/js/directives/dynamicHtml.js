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