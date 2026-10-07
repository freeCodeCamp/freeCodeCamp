'use strict';
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var $isExtensible = require('../internals/object-is-extensible');

// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible(target);
  }
});
