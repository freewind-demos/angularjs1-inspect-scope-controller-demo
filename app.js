const app = angular.module('app', []);
app.controller('HelloController', function ($scope) {
  this.controllerName = 'HelloController';

  $scope.userName = "AngularJs1";
  $scope.inspectMessage = '';
  $scope.inspectInjector = function () {
    $scope.inspectMessage = "Please open your browser's console"

    const dom = document.querySelector('#hello');
    const scope = angular.element(dom).scope();
    const controller = angular.element(dom).controller();
    console.log(scope);
    console.log(controller);
  }
});
