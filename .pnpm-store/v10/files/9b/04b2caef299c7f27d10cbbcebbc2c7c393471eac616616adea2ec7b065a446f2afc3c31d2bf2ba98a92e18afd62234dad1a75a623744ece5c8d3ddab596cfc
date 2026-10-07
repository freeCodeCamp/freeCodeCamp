'use strict';
var defineBuiltIn = require('../internals/define-built-in');
var errorToString = require('../internals/error-to-string');

var ErrorPrototype = Error.prototype;

// `Error.prototype.toString` method fix
// https://tc39.es/ecma262/#sec-error.prototype.tostring
if (ErrorPrototype.toString !== errorToString) {
  defineBuiltIn(ErrorPrototype, 'toString', errorToString);
}
