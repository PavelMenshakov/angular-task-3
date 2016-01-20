"use strict";

angular.module('ajsApp.login', [
    'ajsApp.directives'
])
    .controller('loginCtrl', [ '$scope',
        function($scope ) {

            $scope.LOGIN_TEXT = 'Login';

            $scope.PASSWORD_TEXT = 'Password';



            //$scope.login = function(credentials) {
            //    $scope.error = false;
            //    Auth.login(credentials, function(user) {
            //        //success function
            //        $modalInstance.close();
            //        $state.go('home');
            //    }, function(err) {
            //        console.log("error");
            //        $scope.error = true;
            //    });
            //};

            // if a session exists for current user (page was refreshed)
            // log him in again
            //if ($window.sessionStorage["userInfo"]) {
            //    var credentials = JSON.parse($window.sessionStorage["userInfo"]);
            //    $scope.login(credentials);
            //}

        } ]);


                