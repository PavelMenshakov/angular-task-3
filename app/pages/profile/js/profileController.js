"use strict";

var app = angular.module('ajsApp.profile',[])
    .controller('profileCtrl', ['$scope', function($scope) {
        $scope.master = {};		//master model in scope
        $scope.masterFields = []; //array of master model fields

        $scope.update = function(user) { //form update method
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = {};
        };

        $scope.reset();
}]);

