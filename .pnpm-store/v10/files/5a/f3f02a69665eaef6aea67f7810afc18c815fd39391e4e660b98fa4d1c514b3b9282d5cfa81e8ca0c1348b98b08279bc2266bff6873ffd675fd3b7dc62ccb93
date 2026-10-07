'use strict';
var $ = require('../internals/export');

// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});
