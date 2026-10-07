'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var iterateSimple = require('../internals/iterate-simple');
var SetHelpers = require('../internals/set-helpers');

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};
