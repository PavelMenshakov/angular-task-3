"use strict";

angular.module('ajsApp.home', [])
    .controller('homeCtrl', [ '$scope', '$http' , function($scope, $http) {
    $scope.url = 'data/users.json';
    $scope.parameters = {};
    $http({
        method: 'GET',
        url: $scope.url
    }).then(function(response) {
        $scope.users = response.data;
    });
}]);