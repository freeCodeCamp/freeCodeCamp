'use strict';
var globalThis = require('../internals/global-this');

module.exports = function (CONSTRUCTOR, METHOD) {
  var Constructor = globalThis[CONSTRUCTOR];
  var Prototype = Constructor && Constructor.prototype;
  return Prototype && Prototype[METHOD];
};
