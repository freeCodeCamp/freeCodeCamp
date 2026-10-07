'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var aCallable = require('../internals/a-callable');
var toObject = require('../internals/to-object');
var definePropertyModule = require('../internals/object-define-property');

// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule.f(toObject(this), P, { get: aCallable(getter), enumerable: true, configurable: true });
    }
  });
}
