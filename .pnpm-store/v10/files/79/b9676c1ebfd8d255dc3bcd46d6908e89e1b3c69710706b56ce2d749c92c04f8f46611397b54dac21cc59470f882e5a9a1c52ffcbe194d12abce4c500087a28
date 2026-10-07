/* global angular, sprintf, vsprintf */

!function() {
    'use strict'

    angular.
        module('sprintf', []).
        filter('sprintf', function() {
            return function() {
                return sprintf.apply(null, arguments)
            }
        }).
        filter('fmt', ['$filter', function($filter) {
            return $filter('sprintf')
        }]).
        filter('vsprintf', function() {
            return function(format, argv) {
                return vsprintf(format, argv)
            }
        }).
        filter('vfmt', ['$filter', function($filter) {
            return $filter('vsprintf')
        }])
}(); // eslint-disable-line
