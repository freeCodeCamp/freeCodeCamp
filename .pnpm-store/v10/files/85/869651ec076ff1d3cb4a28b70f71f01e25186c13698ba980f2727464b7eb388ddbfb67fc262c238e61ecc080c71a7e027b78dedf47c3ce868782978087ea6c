'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var $isCallable = require('../internals/is-callable');
var inspectSource = require('../internals/inspect-source');
var hasOwn = require('../internals/has-own-property');
var DESCRIPTORS = require('../internals/descriptors');

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var classRegExp = /^\s*class\b/;
var exec = uncurryThis(classRegExp.exec);

var isClassConstructor = function (argument) {
  try {
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    if (!DESCRIPTORS || !exec(classRegExp, inspectSource(argument))) return false;
  } catch (error) { /* empty */ }
  var prototype = getOwnPropertyDescriptor(argument, 'prototype');
  return !!prototype && hasOwn(prototype, 'writable') && !prototype.writable;
};

// `Function.isCallable` method
// https://github.com/caitp/TC39-Proposals/blob/trunk/tc39-reflect-isconstructor-iscallable.md
$({ target: 'Function', stat: true, sham: true, forced: true }, {
  isCallable: function isCallable(argument) {
    return $isCallable(argument) && !isClassConstructor(argument);
  }
});
