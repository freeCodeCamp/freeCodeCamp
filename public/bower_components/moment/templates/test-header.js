(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../../moment')) :
   typeof define === 'function' && define.amd ? define(['../../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';
