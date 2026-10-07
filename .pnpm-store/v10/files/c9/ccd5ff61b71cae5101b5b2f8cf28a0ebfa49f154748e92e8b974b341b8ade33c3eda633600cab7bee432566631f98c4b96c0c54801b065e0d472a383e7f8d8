"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meta = void 0;
exports.parse = parse;
exports.parseForESLint = parseForESLint;
var _client = require("./client.cjs");
const normalizeESLintConfig = require("./configuration.cjs");
const analyzeScope = require("./analyze-scope.cjs");
const baseParse = require("./parse.cjs");
const client = new _client.LocalClient();
const meta = exports.meta = {
  name: "@babel/eslint-parser",
  version: "7.26.5"
};
function parse(code, options = {}) {
  return baseParse(code, normalizeESLintConfig(options), client);
}
function parseForESLint(code, options = {}) {
  const normalizedOptions = normalizeESLintConfig(options);
  const ast = baseParse(code, normalizedOptions, client);
  const scopeManager = analyzeScope(ast, normalizedOptions, client);
  return {
    ast,
    scopeManager,
    visitorKeys: client.getVisitorKeys()
  };
}

//# sourceMappingURL=index.cjs.map
