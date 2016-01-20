"use strict";

angular.module('ajsApp.navigation', [
]).controller('navigationCtrl', [ '$scope', '$translate',
    function($scope, $translate) {
        $scope.changeLang = function(lang){
            $translate.use(lang);
        };
        $scope.currentLang = function(){
            return $translate.use();
        };
    }
]);


                