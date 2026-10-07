'use strict';
var SetHelpers = require('../internals/set-helpers');
var iterate = require('../internals/set-iterate');

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};
