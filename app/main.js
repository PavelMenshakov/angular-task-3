"use strict";

var app = angular.module('ajsApp',[
    'pascalprecht.translate',
    'angular-md5',
    'ui.bootstrap',
    'ajsApp.routing',
    'ajsApp.directives',
    'ajsApp.services',
    'ajsApp.login',
    'ajsApp.profile',
    'ajsApp.navigation',
    'ajsApp.modal'
]).config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'lang/lang_',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
}]);