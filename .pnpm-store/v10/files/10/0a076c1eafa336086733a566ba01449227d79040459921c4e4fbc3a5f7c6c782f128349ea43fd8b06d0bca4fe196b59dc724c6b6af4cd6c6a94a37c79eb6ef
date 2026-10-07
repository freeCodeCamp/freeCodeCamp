"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapFunction;
var _helperFunctionName = require("@babel/helper-function-name");
var _template = require("@babel/template");
var _t = require("@babel/types");
const {
  blockStatement,
  callExpression,
  functionExpression,
  isAssignmentPattern,
  isFunctionDeclaration,
  isRestElement,
  returnStatement,
  isCallExpression
} = _t;
const buildAnonymousExpressionWrapper = _template.default.expression(`
  (function () {
    var REF = FUNCTION;
    return function NAME(PARAMS) {
      return REF.apply(this, arguments);
    };
  })()
`);
const buildNamedExpressionWrapper = _template.default.expression(`
  (function () {
    var REF = FUNCTION;
    function NAME(PARAMS) {
      return REF.apply(this, arguments);
    }
    return NAME;
  })()
`);
const buildDeclarationWrapper = _template.default.statements(`
  function NAME(PARAMS) { return REF.apply(this, arguments); }
  function REF() {
    REF = FUNCTION;
    return REF.apply(this, arguments);
  }
`);
function classOrObjectMethod(path, callId) {
  const node = path.node;
  const body = node.body;
  const container = functionExpression(null, [], blockStatement(body.body), true);
  body.body = [returnStatement(callExpression(callExpression(callId, [container]), []))];
  node.async = false;
  node.generator = false;
  path.get("body.body.0.argument.callee.arguments.0").unwrapFunctionEnvironment();
}
function plainFunction(inPath, callId, noNewArrows, ignoreFunctionLength) {
  let path = inPath;
  let node;
  let functionId = null;
  const nodeParams = inPath.node.params;
  if (path.isArrowFunctionExpression()) {
    {
      var _path$arrowFunctionTo;
      path = (_path$arrowFunctionTo = path.arrowFunctionToExpression({
        noNewArrows
      })) != null ? _path$arrowFunctionTo : path;
    }
    node = path.node;
  } else {
    node = path.node;
  }
  const isDeclaration = isFunctionDeclaration(node);
  let built = node;
  if (!isCallExpression(node)) {
    functionId = node.id;
    node.id = null;
    node.type = "FunctionExpression";
    built = callExpression(callId, [node]);
  }
  const params = [];
  for (const param of nodeParams) {
    if (isAssignmentPattern(param) || isRestElement(param)) {
      break;
    }
    params.push(path.scope.generateUidIdentifier("x"));
  }
  const wrapperArgs = {
    NAME: functionId || null,
    REF: path.scope.generateUidIdentifier(functionId ? functionId.name : "ref"),
    FUNCTION: built,
    PARAMS: params
  };
  if (isDeclaration) {
    const container = buildDeclarationWrapper(wrapperArgs);
    path.replaceWith(container[0]);
    path.insertAfter(container[1]);
  } else {
    let container;
    if (functionId) {
      container = buildNamedExpressionWrapper(wrapperArgs);
    } else {
      container = buildAnonymousExpressionWrapper(wrapperArgs);
      const returnFn = container.callee.body.body[1].argument;
      (0, _helperFunctionName.default)({
        node: returnFn,
        parent: path.parent,
        scope: path.scope
      });
      functionId = returnFn.id;
    }
    if (functionId || !ignoreFunctionLength && params.length) {
      path.replaceWith(container);
    } else {
      path.replaceWith(built);
    }
  }
}
function wrapFunction(path, callId, noNewArrows = true, ignoreFunctionLength = false) {
  if (path.isMethod()) {
    classOrObjectMethod(path, callId);
  } else {
    plainFunction(path, callId, noNewArrows, ignoreFunctionLength);
  }
}

//# sourceMappingURL=index.js.map
