"use strict";

var resolve = require("path").resolve;

exports.readFileSync = function(path) {
  return window.JSHintTestFixtures[resolve(path)];
};
