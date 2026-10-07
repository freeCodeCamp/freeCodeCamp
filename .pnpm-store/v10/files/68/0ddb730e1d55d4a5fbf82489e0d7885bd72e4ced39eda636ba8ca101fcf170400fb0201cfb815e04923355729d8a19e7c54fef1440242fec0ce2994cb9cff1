'use strict';
var classof = require('../internals/classof');
var hasOwn = require('../internals/has-own-property');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');

var ITERATOR = wellKnownSymbol('iterator');
var $Object = Object;

module.exports = function (it) {
  if (isNullOrUndefined(it)) return false;
  var O = $Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || hasOwn(Iterators, classof(O));
};
