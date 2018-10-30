"use strict";
/* eslint-disable no-new-func */
const acorn = require("acorn");
const findGlobals = require("acorn-globals");
const escodegen = require("escodegen");

// We can't use the default browserify vm shim because it doesn't work in a web worker.

// From ES spec table of contents. Also, don't forget the Annex B additions.
// If someone feels ambitious maybe make this into an npm package.
const builtInConsts = ["Infinity", "NaN", "undefined"];
const otherBuiltIns = [
  "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent",
  "encodeURI", "encodeURIComponent", "Array", "ArrayBuffer", "Boolean", "DataView", "Date", "Error", "EvalError",
  "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Number", "Object",
  "Proxy", "Promise", "RangeError", "ReferenceError", "RegExp", "Set", "String", "Symbol", "SyntaxError", "TypeError",
  "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "URIError", "WeakMap", "WeakSet", "JSON", "Math",
  "Reflect", "escape", "unescape"
];

exports.createContext = function (sandbox) {
  Object.defineProperty(sandbox, "__isVMShimContext", {
    value: true,
    writable: true,
    configurable: true,
    enumerable: false
  });

  for (const builtIn of builtInConsts) {
    Object.defineProperty(sandbox, builtIn, {
      value: global[builtIn],
      writable: false,
      configurable: false,
      enumerable: false
    });
  }

  for (const builtIn of otherBuiltIns) {
    Object.defineProperty(sandbox, builtIn, {
      value: global[builtIn],
      writable: true,
      configurable: true,
      enumerable: false
    });
  }

  Object.defineProperty(sandbox, "eval", {
    value(code) {
      return exports.runInContext(code, sandbox);
    },
    writable: true,
    configurable: true,
    enumerable: false
  });
};

exports.isContext = function (sandbox) {
  return sandbox.__isVMShimContext;
};

exports.runInContext = function (code, contextifiedSandbox, options) {
  if (code === "this") {
    // Special case for during window creation.
    return contextifiedSandbox;
  }

  if (options === undefined) {
    options = {};
  }

  const comments = [];
  const tokens = [];
  const ast = acorn.parse(code, {
    allowReturnOutsideFunction: true,
    ranges: true,
    // collect comments in Esprima's format
    onComment: comments,
    // collect token ranges
    onToken: tokens
  });

  // make sure we keep comments
  escodegen.attachComments(ast, comments, tokens);

  const globals = findGlobals(ast);
  for (let i = 0; i < globals.length; ++i) {
    if (globals[i].name === "window" || globals[i].name === "this") {
      continue;
    }

    const { nodes } = globals[i];
    for (let j = 0; j < nodes.length; ++j) {
      const { type, name } = nodes[j];
      nodes[j].type = "MemberExpression";
      nodes[j].property = { name, type };
      nodes[j].computed = false;
      nodes[j].object = {
        name: "window",
        type: "Identifier"
      };
    }
  }

  const lastNode = ast.body[ast.body.length - 1];
  if (lastNode.type === "ExpressionStatement") {
    lastNode.type = "ReturnStatement";
    lastNode.argument = lastNode.expression;
    delete lastNode.expression;
  }

  const rewrittenCode = escodegen.generate(ast, { comment: true });
  const suffix = options.filename !== undefined ? "\n//# sourceURL=" + options.filename : "";

  return Function("window", rewrittenCode + suffix).bind(contextifiedSandbox)(contextifiedSandbox);
};

exports.Script = class VMShimScript {
  constructor(code, options) {
    this._code = code;
    this._options = options;
  }

  runInContext(sandbox, options) {
    return exports.runInContext(this._code, sandbox, Object.assign({}, this._options, options));
  }
};
