'use strict';
require('../../modules/web.dom-collections.iterator');
var classof = require('../../internals/classof');
var hasOwn = require('../../internals/has-own-property');
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/values');

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.values;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.values)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};
