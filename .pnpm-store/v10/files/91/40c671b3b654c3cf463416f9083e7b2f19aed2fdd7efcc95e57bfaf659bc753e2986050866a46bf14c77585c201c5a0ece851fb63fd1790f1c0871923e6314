'use strict';
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toPropertyKey = require('../internals/to-property-key');

// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    anObject(target);
    var key = toPropertyKey(propertyKey);
    var descriptor = getOwnPropertyDescriptor(target, key);
    return descriptor && !descriptor.configurable ? false : delete target[key];
  }
});
