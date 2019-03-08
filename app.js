const app = angular.module('app', []);
app.controller('HelloController', function ($scope) {
  $scope.userName = "AngularJs1";
  $scope.inspectMessage = '';
  $scope.inspectInjector = function () {
    const dom = document.querySelector('#hello');
    const scope = angular.element(dom).scope();
    $scope.inspectMessage = "$scope.userName: " + scope.userName;
  }
});
