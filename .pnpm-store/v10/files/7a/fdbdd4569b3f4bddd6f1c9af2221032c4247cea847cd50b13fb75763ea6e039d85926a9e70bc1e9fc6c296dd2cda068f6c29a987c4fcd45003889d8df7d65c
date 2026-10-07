"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseAndBuildMetadata;
var _t = require("@babel/types");
var _parser = require("@babel/parser");
var _codeFrame = require("@babel/code-frame");
const {
  isCallExpression,
  isExpressionStatement,
  isFunction,
  isIdentifier,
  isJSXIdentifier,
  isNewExpression,
  isPlaceholder,
  isStatement,
  isStringLiteral,
  removePropertiesDeep,
  traverse
} = _t;
const PATTERN = /^[_$A-Z0-9]+$/;
function parseAndBuildMetadata(formatter, code, opts) {
  const {
    placeholderWhitelist,
    placeholderPattern,
    preserveComments,
    syntacticPlaceholders
  } = opts;
  const ast = parseWithCodeFrame(code, opts.parser, syntacticPlaceholders);
  removePropertiesDeep(ast, {
    preserveComments
  });
  formatter.validate(ast);
  const state = {
    syntactic: {
      placeholders: [],
      placeholderNames: new Set()
    },
    legacy: {
      placeholders: [],
      placeholderNames: new Set()
    },
    placeholderWhitelist,
    placeholderPattern,
    syntacticPlaceholders
  };
  traverse(ast, placeholderVisitorHandler, state);
  return Object.assign({
    ast
  }, state.syntactic.placeholders.length ? state.syntactic : state.legacy);
}
function placeholderVisitorHandler(node, ancestors, state) {
  var _state$placeholderWhi;
  let name;
  let hasSyntacticPlaceholders = state.syntactic.placeholders.length > 0;
  if (isPlaceholder(node)) {
    if (state.syntacticPlaceholders === false) {
      throw new Error("%%foo%%-style placeholders can't be used when " + "'.syntacticPlaceholders' is false.");
    }
    name = node.name.name;
    hasSyntacticPlaceholders = true;
  } else if (hasSyntacticPlaceholders || state.syntacticPlaceholders) {
    return;
  } else if (isIdentifier(node) || isJSXIdentifier(node)) {
    name = node.name;
  } else if (isStringLiteral(node)) {
    name = node.value;
  } else {
    return;
  }
  if (hasSyntacticPlaceholders && (state.placeholderPattern != null || state.placeholderWhitelist != null)) {
    throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible" + " with '.syntacticPlaceholders: true'");
  }
  if (!hasSyntacticPlaceholders && (state.placeholderPattern === false || !(state.placeholderPattern || PATTERN).test(name)) && !((_state$placeholderWhi = state.placeholderWhitelist) != null && _state$placeholderWhi.has(name))) {
    return;
  }
  ancestors = ancestors.slice();
  const {
    node: parent,
    key
  } = ancestors[ancestors.length - 1];
  let type;
  if (isStringLiteral(node) || isPlaceholder(node, {
    expectedNode: "StringLiteral"
  })) {
    type = "string";
  } else if (isNewExpression(parent) && key === "arguments" || isCallExpression(parent) && key === "arguments" || isFunction(parent) && key === "params") {
    type = "param";
  } else if (isExpressionStatement(parent) && !isPlaceholder(node)) {
    type = "statement";
    ancestors = ancestors.slice(0, -1);
  } else if (isStatement(node) && isPlaceholder(node)) {
    type = "statement";
  } else {
    type = "other";
  }
  const {
    placeholders,
    placeholderNames
  } = !hasSyntacticPlaceholders ? state.legacy : state.syntactic;
  placeholders.push({
    name,
    type,
    resolve: ast => resolveAncestors(ast, ancestors),
    isDuplicate: placeholderNames.has(name)
  });
  placeholderNames.add(name);
}
function resolveAncestors(ast, ancestors) {
  let parent = ast;
  for (let i = 0; i < ancestors.length - 1; i++) {
    const {
      key,
      index
    } = ancestors[i];
    if (index === undefined) {
      parent = parent[key];
    } else {
      parent = parent[key][index];
    }
  }
  const {
    key,
    index
  } = ancestors[ancestors.length - 1];
  return {
    parent,
    key,
    index
  };
}
function parseWithCodeFrame(code, parserOpts, syntacticPlaceholders) {
  const plugins = (parserOpts.plugins || []).slice();
  if (syntacticPlaceholders !== false) {
    plugins.push("placeholders");
  }
  parserOpts = Object.assign({
    allowAwaitOutsideFunction: true,
    allowReturnOutsideFunction: true,
    allowNewTargetOutsideFunction: true,
    allowSuperOutsideMethod: true,
    allowYieldOutsideFunction: true,
    sourceType: "module"
  }, parserOpts, {
    plugins
  });
  try {
    return (0, _parser.parse)(code, parserOpts);
  } catch (err) {
    const loc = err.loc;
    if (loc) {
      err.message += "\n" + (0, _codeFrame.codeFrameColumns)(code, {
        start: loc
      });
      err.code = "BABEL_TEMPLATE_PARSE_ERROR";
    }
    throw err;
  }
}

//# sourceMappingURL=parse.js.map
