"use strict";

var app = angular.module('ajsApp.profile',['ajsApp.services'])
    .controller('profileCtrl', ['$rootScope','$scope', 'Authorization','$state', '$window', function($rootScope, $scope, Authorization, $state, $window) {


        $scope.user = JSON.parse($window.localStorage.userInfo);

        $scope.update = function(user) { //form update method
            $window.localStorage.userInfo = JSON.stringify(user);
        };

        $scope.reset = function() {
            $scope.user = {};
        };

        if(!Authorization.isAccepted()){
            $state.go('navigation.home');
            $rootScope.$broadcast('accessDecline');
        }
}]);

