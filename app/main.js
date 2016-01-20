"use strict";

var app = angular.module('ajsApp',[
    'pascalprecht.translate',
    'ajsApp.routing',
    'ajsApp.directives',
    'ajsApp.services',
    'ajsApp.home',
    'ajsApp.login',
    'ajsApp.profile',
    'ajsApp.navigation'
]).config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'lang/lang_',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
}])
    .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push([
        '$injector',
        function ($injector) {
            return $injector.get('AuthInterceptor');
        }
    ]);
}]);