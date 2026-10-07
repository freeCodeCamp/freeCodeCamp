'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');
var defineProperty = require('../internals/object-define-property').f;

var METADATA = wellKnownSymbol('metadata');
var FunctionPrototype = Function.prototype;

// Function.prototype[@@metadata]
// https://github.com/tc39/proposal-decorator-metadata
if (FunctionPrototype[METADATA] === undefined) {
  defineProperty(FunctionPrototype, METADATA, {
    value: null
  });
}
