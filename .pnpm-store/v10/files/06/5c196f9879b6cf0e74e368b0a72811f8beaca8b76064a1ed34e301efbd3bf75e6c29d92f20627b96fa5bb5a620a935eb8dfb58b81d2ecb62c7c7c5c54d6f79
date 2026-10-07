'use strict';
var globalThis = require('../internals/global-this');
var IS_NODE = require('../internals/environment-is-node');

module.exports = function (name) {
  if (IS_NODE) {
    try {
      return globalThis.process.getBuiltinModule(name);
    } catch (error) { /* empty */ }
    try {
      // eslint-disable-next-line no-new-func -- safe
      return Function('return require("' + name + '")')();
    } catch (error) { /* empty */ }
  }
};
