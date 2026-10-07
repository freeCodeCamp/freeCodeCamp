'use strict';
var $ = require('../internals/export');
var sameValueZero = require('../internals/same-value-zero');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  includes: function includes(searchElement) {
    return iterate(aMap(this), function (value) {
      if (sameValueZero(value, searchElement)) return true;
    }, true) === true;
  }
});
