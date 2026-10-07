'use strict';
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof-raw');
var regexpExec = require('../internals/regexp-exec');

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};
