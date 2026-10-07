"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function helpers() {
  const data = require("@babel/helpers");
  helpers = function () {
    return data;
  };
  return data;
}
function _generator() {
  const data = require("@babel/generator");
  _generator = function () {
    return data;
  };
  return data;
}
function _template() {
  const data = require("@babel/template");
  _template = function () {
    return data;
  };
  return data;
}
function _t() {
  const data = require("@babel/types");
  _t = function () {
    return data;
  };
  return data;
}
var _file = require("../transformation/file/file.js");
const {
  arrayExpression,
  assignmentExpression,
  binaryExpression,
  blockStatement,
  callExpression,
  cloneNode,
  conditionalExpression,
  exportNamedDeclaration,
  exportSpecifier,
  expressionStatement,
  functionExpression,
  identifier,
  memberExpression,
  objectExpression,
  program,
  stringLiteral,
  unaryExpression,
  variableDeclaration,
  variableDeclarator
} = _t();
const buildUmdWrapper = replacements => _template().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(replacements);
function buildGlobal(allowlist) {
  const namespace = identifier("babelHelpers");
  const body = [];
  const container = functionExpression(null, [identifier("global")], blockStatement(body));
  const tree = program([expressionStatement(callExpression(container, [conditionalExpression(binaryExpression("===", unaryExpression("typeof", identifier("global")), stringLiteral("undefined")), identifier("self"), identifier("global"))]))]);
  body.push(variableDeclaration("var", [variableDeclarator(namespace, assignmentExpression("=", memberExpression(identifier("global"), namespace), objectExpression([])))]));
  buildHelpers(body, namespace, allowlist);
  return tree;
}
function buildModule(allowlist) {
  const body = [];
  const refs = buildHelpers(body, null, allowlist);
  body.unshift(exportNamedDeclaration(null, Object.keys(refs).map(name => {
    return exportSpecifier(cloneNode(refs[name]), identifier(name));
  })));
  return program(body, [], "module");
}
function buildUmd(allowlist) {
  const namespace = identifier("babelHelpers");
  const body = [];
  body.push(variableDeclaration("var", [variableDeclarator(namespace, identifier("global"))]));
  buildHelpers(body, namespace, allowlist);
  return program([buildUmdWrapper({
    FACTORY_PARAMETERS: identifier("global"),
    BROWSER_ARGUMENTS: assignmentExpression("=", memberExpression(identifier("root"), namespace), objectExpression([])),
    COMMON_ARGUMENTS: identifier("exports"),
    AMD_ARGUMENTS: arrayExpression([stringLiteral("exports")]),
    FACTORY_BODY: body,
    UMD_ROOT: identifier("this")
  })]);
}
function buildVar(allowlist) {
  const namespace = identifier("babelHelpers");
  const body = [];
  body.push(variableDeclaration("var", [variableDeclarator(namespace, objectExpression([]))]));
  const tree = program(body);
  buildHelpers(body, namespace, allowlist);
  body.push(expressionStatement(namespace));
  return tree;
}
function buildHelpers(body, namespace, allowlist) {
  const getHelperReference = name => {
    return namespace ? memberExpression(namespace, identifier(name)) : identifier(`_${name}`);
  };
  const refs = {};
  helpers().list.forEach(function (name) {
    if (allowlist && allowlist.indexOf(name) < 0) return;
    const ref = refs[name] = getHelperReference(name);
    helpers().ensure(name, _file.default);
    const {
      nodes
    } = helpers().get(name, getHelperReference, ref);
    body.push(...nodes);
  });
  return refs;
}
function _default(allowlist, outputType = "global") {
  let tree;
  const build = {
    global: buildGlobal,
    module: buildModule,
    umd: buildUmd,
    var: buildVar
  }[outputType];
  if (build) {
    tree = build(allowlist);
  } else {
    throw new Error(`Unsupported output type ${outputType}`);
  }
  return (0, _generator().default)(tree).code;
}
0 && 0;

//# sourceMappingURL=build-external-helpers.js.map
