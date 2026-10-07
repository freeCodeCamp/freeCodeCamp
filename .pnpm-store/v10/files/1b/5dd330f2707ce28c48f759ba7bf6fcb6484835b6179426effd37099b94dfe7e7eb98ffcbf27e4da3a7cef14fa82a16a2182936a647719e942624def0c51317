"use strict";

var attachComments = require("./attachComments");
var convertComments = require("./convertComments");
var toTokens = require("./toTokens");
var toAST = require("./toAST");

module.exports = function(ast, traverse, tt, code) {
  // convert tokens
  ast.tokens = toTokens(ast.tokens, tt, code);

  // add comments
  convertComments(ast.comments);

  // transform esprima and acorn divergent nodes
  toAST(ast, traverse, code);

  // ast.program.tokens = ast.tokens;
  // ast.program.comments = ast.comments;
  // ast = ast.program;

  // remove File
  ast.type = "Program";
  ast.sourceType = ast.program.sourceType;
  ast.directives = ast.program.directives;
  ast.body = ast.program.body;
  delete ast.program;

  attachComments(ast, ast.comments, ast.tokens);
};
