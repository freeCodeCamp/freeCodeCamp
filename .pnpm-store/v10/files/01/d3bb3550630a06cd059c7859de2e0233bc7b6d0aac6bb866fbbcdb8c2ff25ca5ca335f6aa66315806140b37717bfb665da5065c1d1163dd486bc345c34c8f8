'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var isObject = require('../internals/is-object');
var anObject = require('../internals/an-object');
var isDataDescriptor = require('../internals/is-data-descriptor');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var toPropertyKey = require('../internals/to-property-key');

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
var $get = function (target, propertyKey, receiver) {
  if (anObject(target) === receiver) return target[propertyKey];
  var descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
  var prototype = getPrototypeOf(target);
  if (isObject(prototype)) return $get(prototype, propertyKey, receiver);
};

$({ target: 'Reflect', stat: true }, {
  get: function get(target, propertyKey /* , receiver */) {
    return $get(anObject(target), toPropertyKey(propertyKey), arguments.length < 3 ? target : arguments[2]);
  }
});
