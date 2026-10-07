'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var flags = require('../regexp/flags');

var RegExpPrototype = RegExp.prototype;

module.exports = function (it) {
  return (it === RegExpPrototype || isPrototypeOf(RegExpPrototype, it)) ? flags(it) : it.flags;
};
