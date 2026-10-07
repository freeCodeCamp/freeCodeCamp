'use strict';
var store = require('../internals/shared-store');

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};
