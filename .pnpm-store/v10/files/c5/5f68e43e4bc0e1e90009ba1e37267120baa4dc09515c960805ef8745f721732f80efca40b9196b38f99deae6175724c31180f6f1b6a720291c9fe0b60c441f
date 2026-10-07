"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertError = convertError;
exports.convertFile = convertFile;
const convertTokens = require("./convertTokens.cjs");
const convertComments = require("./convertComments.cjs");
const convertAST = require("./convertAST.cjs");
function convertFile(ast, code, tokLabels, visitorKeys) {
  ast.tokens = convertTokens(ast.tokens, code, tokLabels);
  convertComments(ast.comments);
  convertAST(ast, visitorKeys);
  return ast;
}
function convertError(err) {
  if (err instanceof SyntaxError) {
    err.lineNumber = err.loc.line;
    err.column = err.loc.column;
  }
  return err;
}

//# sourceMappingURL=index.cjs.map
