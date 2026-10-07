"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertFunctionParams;
var _core = require("@babel/core");
var _shadowUtils = require("./shadow-utils.js");
const buildDefaultParam = _core.template.statement(`
  let VARIABLE_NAME =
    arguments.length > ARGUMENT_KEY && arguments[ARGUMENT_KEY] !== undefined ?
      arguments[ARGUMENT_KEY]
    :
      DEFAULT_VALUE;
`);
const buildLooseDefaultParam = _core.template.statement(`
  if (ASSIGNMENT_IDENTIFIER === UNDEFINED) {
    ASSIGNMENT_IDENTIFIER = DEFAULT_VALUE;
  }
`);
const buildLooseDestructuredDefaultParam = _core.template.statement(`
  let ASSIGNMENT_IDENTIFIER = PARAMETER_NAME === UNDEFINED ? DEFAULT_VALUE : PARAMETER_NAME ;
`);
const buildSafeArgumentsAccess = _core.template.statement(`
  let $0 = arguments.length > $1 ? arguments[$1] : undefined;
`);
function convertFunctionParams(path, ignoreFunctionLength, shouldTransformParam, replaceRestElement) {
  const params = path.get("params");
  const isSimpleParameterList = params.every(param => param.isIdentifier());
  if (isSimpleParameterList) return false;
  const {
    node,
    scope
  } = path;
  const body = [];
  const shadowedParams = new Set();
  for (const param of params) {
    (0, _shadowUtils.collectShadowedParamsNames)(param, scope, shadowedParams);
  }
  const state = {
    needsOuterBinding: false,
    scope
  };
  if (shadowedParams.size === 0) {
    for (const param of params) {
      if (!param.isIdentifier()) param.traverse(_shadowUtils.iifeVisitor, state);
      if (state.needsOuterBinding) break;
    }
  }
  let firstOptionalIndex = null;
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    if (shouldTransformParam && !shouldTransformParam(i)) {
      continue;
    }
    const transformedRestNodes = [];
    if (replaceRestElement) {
      replaceRestElement(path, param, transformedRestNodes);
    }
    const paramIsAssignmentPattern = param.isAssignmentPattern();
    if (paramIsAssignmentPattern && (ignoreFunctionLength || _core.types.isMethod(node, {
      kind: "set"
    }))) {
      const left = param.get("left");
      const right = param.get("right");
      const undefinedNode = scope.buildUndefinedNode();
      if (left.isIdentifier()) {
        body.push(buildLooseDefaultParam({
          ASSIGNMENT_IDENTIFIER: _core.types.cloneNode(left.node),
          DEFAULT_VALUE: right.node,
          UNDEFINED: undefinedNode
        }));
        param.replaceWith(left.node);
      } else if (left.isObjectPattern() || left.isArrayPattern()) {
        const paramName = scope.generateUidIdentifier();
        body.push(buildLooseDestructuredDefaultParam({
          ASSIGNMENT_IDENTIFIER: left.node,
          DEFAULT_VALUE: right.node,
          PARAMETER_NAME: _core.types.cloneNode(paramName),
          UNDEFINED: undefinedNode
        }));
        param.replaceWith(paramName);
      }
    } else if (paramIsAssignmentPattern) {
      if (firstOptionalIndex === null) firstOptionalIndex = i;
      const left = param.get("left");
      const right = param.get("right");
      const defNode = buildDefaultParam({
        VARIABLE_NAME: left.node,
        DEFAULT_VALUE: right.node,
        ARGUMENT_KEY: _core.types.numericLiteral(i)
      });
      body.push(defNode);
    } else if (firstOptionalIndex !== null) {
      const defNode = buildSafeArgumentsAccess([param.node, _core.types.numericLiteral(i)]);
      body.push(defNode);
    } else if (param.isObjectPattern() || param.isArrayPattern()) {
      const uid = path.scope.generateUidIdentifier("ref");
      uid.typeAnnotation = param.node.typeAnnotation;
      const defNode = _core.types.variableDeclaration("let", [_core.types.variableDeclarator(param.node, uid)]);
      body.push(defNode);
      param.replaceWith(_core.types.cloneNode(uid));
    }
    if (transformedRestNodes) {
      for (const transformedNode of transformedRestNodes) {
        body.push(transformedNode);
      }
    }
  }
  if (firstOptionalIndex !== null) {
    node.params = node.params.slice(0, firstOptionalIndex);
  }
  path.ensureBlock();
  const {
    async,
    generator
  } = node;
  if (generator || state.needsOuterBinding || shadowedParams.size > 0) {
    body.push((0, _shadowUtils.buildScopeIIFE)(shadowedParams, path.node.body));
    path.set("body", _core.types.blockStatement(body));
    const bodyPath = path.get("body.body");
    const arrowPath = bodyPath[bodyPath.length - 1].get("argument.callee");
    arrowPath.arrowFunctionToExpression();
    arrowPath.node.generator = generator;
    arrowPath.node.async = async;
    node.generator = false;
    node.async = false;
    if (async) {
      path.node.body = _core.template.statement.ast`{
        try {
          ${path.node.body.body}
        } catch (e) {
          return Promise.reject(e);
        }
      }`;
    }
  } else {
    path.get("body").unshiftContainer("body", body);
  }
  return true;
}

//# sourceMappingURL=params.js.map
