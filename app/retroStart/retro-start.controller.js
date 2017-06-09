(function () {
    'use strict';

    angular.
    module('retroStart').
    controller('startController', startController);

    startController.$inject = ['$scope', '$location'];

      function startController($scope, $location) {
        $scope.gotoLogin = function(){
          $location.path('/search');
      };
      }
})();
