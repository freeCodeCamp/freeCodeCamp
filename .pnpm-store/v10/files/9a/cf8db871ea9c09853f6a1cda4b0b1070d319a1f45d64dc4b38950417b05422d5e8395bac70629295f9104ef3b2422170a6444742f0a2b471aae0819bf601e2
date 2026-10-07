/*! sprintf-js | Alexandru Marasteanu <hello@alexei.ro> (http://alexei.ro/) | BSD-3-Clause */

angular.module("sprintf",[]).filter("sprintf",function(){return function(){return sprintf.apply(null,arguments)}}).filter("fmt",["$filter",function(a){return a("sprintf")}]).filter("vsprintf",function(){return function(a,b){return vsprintf(a,b)}}).filter("vfmt",["$filter",function(a){return a("vsprintf")}]);
//# sourceMappingURL=angular-sprintf.min.map