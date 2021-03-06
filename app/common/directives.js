"use strict";

var app = angular.module('ajsApp.directives',[]);

app.directive('userName', function () {		//create directive for user name validation
    var USER_REGEXP = new RegExp('([A-Z]{1}[a-z]{2,20}$)|(([A-Z]{1}[a-z]{2,20})\s+([A-Z]{1}[a-z]{2,20}$))'),
        isValid = function(s) {
            return (USER_REGEXP.test(s));
        };

    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ngModelCtrl) {

            ngModelCtrl.$validators.userName =  function(modelValue, viewValue) {
                return ngModelCtrl.$isEmpty(viewValue) || isValid(viewValue);
            };

        }
    };
});

app.directive('ageValidation', function () {   //create directive for age validation
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ngModelCtrl) {

            ngModelCtrl.$validators.ageValidation =  function(modelValue, viewValue) {
                return ngModelCtrl.$isEmpty(modelValue) || (modelValue > 18 && modelValue < 65);
            };
        }
    };
});

app.directive('dateValidation', function () {   //create directive for date validation
    var DATE_REGEXP = new RegExp('[0-9]{2,4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}'),
        isValid = function(s) {
            return (DATE_REGEXP.test(s));
        };

    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ngModelCtrl) {

            ngModelCtrl.$validators.dateValidation =  function(modelValue, viewValue) {
                return ngModelCtrl.$isEmpty(modelValue) || isValid(modelValue);
            };
        }
    };
});

app.directive('emailValidation', function() {  // email validation
    var EMAIL_REGEXP = new RegExp('[a-zA-Z]@epam\.com$'),
        isValid = function(s) {
            return (EMAIL_REGEXP.test(s));
        };
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ngModelCtrl) {

            ngModelCtrl.$validators.emailValidation =  function(modelValue, viewValue) {
                return ngModelCtrl.$isEmpty(modelValue) || isValid(modelValue);
            };
        }
    };
});