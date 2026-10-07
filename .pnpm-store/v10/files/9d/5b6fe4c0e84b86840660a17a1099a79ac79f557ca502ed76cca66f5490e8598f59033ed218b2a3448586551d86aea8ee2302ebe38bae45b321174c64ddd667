"use strict";

const visitorKeys = require("./visitor-keys");
const analyzeScope = require("./analyze-scope");
const parse = require("./parse");

module.exports = function(code, options) {
  const ast = parse(code, options);
  const scopeManager = analyzeScope(ast, options);

  return { ast, scopeManager, visitorKeys };
};
