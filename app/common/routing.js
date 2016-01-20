"use strict";

angular.module('ajsApp.routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('navigation',{
        abstract: true,
        url: '',
        templateUrl: 'app/pages/navigation/tpl/navigation.tpl.html',
        controller: 'navigationCtrl'
    }).state('navigation.home', {
        url: '/home',
        templateUrl: 'app/pages/home/tpl/home.tpl.html',
        controller: 'homeCtrl'
    }).state('navigation.login', {
        url: '/login',
        templateUrl: 'app/pages/login/tpl/login.tpl.html',
        controller: 'loginCtrl'
    }).state('navigation.login.remind', {
        url: '/remind',
        templateUrl: 'app/pages/login/tpl/login-remind.tpl.html'
    }).state('navigation.profile', {
        url: '/profile',
        templateUrl: 'app/pages/profile/tpl/profile.tpl.html',
        controller: 'profileCtrl'
    }).state('navigation.profile.view', {
        url: '/view',
        templateUrl: 'app/pages/profile/tpl/profile-view.tpl.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    }).state('navigation.profile.edit', {
        url: '/edit',
        templateUrl: 'app/pages/profile/tpl/profile-edit.tpl.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    });
});