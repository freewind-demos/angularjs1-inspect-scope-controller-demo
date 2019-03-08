const app = angular.module('app', []);
app.controller('HelloController', function ($scope) {
  $scope.userName = "AngularJs1";
  $scope.inspectMessage = '';
  $scope.inspectInjector = function () {
    const injector = angular.element(document.querySelector('body')).injector();
    $scope.inspectMessage = injector.get('$rootScope');
  }
});
