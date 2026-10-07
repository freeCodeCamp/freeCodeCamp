"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meta = void 0;
exports.parseForESLint = parseForESLint;
const [major, minor] = process.versions.node.split(".").map(Number);
if (major < 12 || major === 12 && minor < 3) {
  throw new Error("@babel/eslint-parser/experimental-worker requires Node.js >= 12.3.0");
}
const normalizeESLintConfig = require("./configuration.cjs");
const analyzeScope = require("./analyze-scope.cjs");
const baseParse = require("./parse.cjs");
const Clients = require("./client.cjs");
const client = new Clients.WorkerClient();
const meta = exports.meta = {
  name: "@babel/eslint-parser/experimental-worker",
  version: "7.26.5"
};
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

//# sourceMappingURL=experimental-worker.cjs.map
