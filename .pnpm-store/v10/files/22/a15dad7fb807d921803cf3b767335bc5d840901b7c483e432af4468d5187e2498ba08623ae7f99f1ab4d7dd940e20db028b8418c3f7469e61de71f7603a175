'use strict';
// https://github.com/tc39/proposal-explicit-resource-management
var call = require('../internals/function-call');
var defineBuiltIn = require('../internals/define-built-in');
var getMethod = require('../internals/get-method');
var hasOwn = require('../internals/has-own-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;

var DISPOSE = wellKnownSymbol('dispose');

if (!hasOwn(IteratorPrototype, DISPOSE)) {
  defineBuiltIn(IteratorPrototype, DISPOSE, function () {
    var $return = getMethod(this, 'return');
    if ($return) call($return, this);
  });
}
