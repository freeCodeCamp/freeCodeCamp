'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var core = require('@babel/core');
var helperSkipTransparentExpressionWrappers = require('@babel/helper-skip-transparent-expression-wrappers');

function willPathCastToBoolean(path) {
  const maybeWrapped = findOutermostTransparentParent(path);
  const {
    node,
    parentPath
  } = maybeWrapped;
  if (parentPath.isLogicalExpression()) {
    const {
      operator,
      right
    } = parentPath.node;
    if (operator === "&&" || operator === "||" || operator === "??" && node === right) {
      return willPathCastToBoolean(parentPath);
    }
  }
  if (parentPath.isSequenceExpression()) {
    const {
      expressions
    } = parentPath.node;
    if (expressions[expressions.length - 1] === node) {
      return willPathCastToBoolean(parentPath);
    } else {
      return true;
    }
  }
  return parentPath.isConditional({
    test: node
  }) || parentPath.isUnaryExpression({
    operator: "!"
  }) || parentPath.isLoop({
    test: node
  });
}
function findOutermostTransparentParent(path) {
  let maybeWrapped = path;
  path.findParent(p => {
    if (!helperSkipTransparentExpressionWrappers.isTransparentExprWrapper(p.node)) return true;
    maybeWrapped = p;
  });
  return maybeWrapped;
}

const last = arr => arr[arr.length - 1];
function isSimpleMemberExpression(expression) {
  expression = helperSkipTransparentExpressionWrappers.skipTransparentExprWrapperNodes(expression);
  return core.types.isIdentifier(expression) || core.types.isSuper(expression) || core.types.isMemberExpression(expression) && !expression.computed && isSimpleMemberExpression(expression.object);
}
function needsMemoize(path) {
  let optionalPath = path;
  const {
    scope
  } = path;
  while (optionalPath.isOptionalMemberExpression() || optionalPath.isOptionalCallExpression()) {
    const {
      node
    } = optionalPath;
    const childPath = helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers(optionalPath.isOptionalMemberExpression() ? optionalPath.get("object") : optionalPath.get("callee"));
    if (node.optional) {
      return !scope.isStatic(childPath.node);
    }
    optionalPath = childPath;
  }
}
const NULLISH_CHECK = core.template.expression(`%%check%% === null || %%ref%% === void 0`);
const NULLISH_CHECK_NO_DDA = core.template.expression(`%%check%% == null`);
const NULLISH_CHECK_NEG = core.template.expression(`%%check%% !== null && %%ref%% !== void 0`);
const NULLISH_CHECK_NO_DDA_NEG = core.template.expression(`%%check%% != null`);
function transformOptionalChain(path, {
  pureGetters,
  noDocumentAll
}, replacementPath, ifNullish, wrapLast) {
  const {
    scope
  } = path;
  if (scope.path.isPattern() && needsMemoize(path)) {
    replacementPath.replaceWith(core.template.expression.ast`(() => ${replacementPath.node})()`);
    return;
  }
  const optionals = [];
  let optionalPath = path;
  while (optionalPath.isOptionalMemberExpression() || optionalPath.isOptionalCallExpression()) {
    const {
      node
    } = optionalPath;
    if (node.optional) {
      optionals.push(node);
    }
    if (optionalPath.isOptionalMemberExpression()) {
      optionalPath.node.type = "MemberExpression";
      optionalPath = helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers(optionalPath.get("object"));
    } else if (optionalPath.isOptionalCallExpression()) {
      optionalPath.node.type = "CallExpression";
      optionalPath = helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers(optionalPath.get("callee"));
    }
  }
  if (optionals.length === 0) {
    return;
  }
  const checks = [];
  let tmpVar;
  for (let i = optionals.length - 1; i >= 0; i--) {
    const node = optionals[i];
    const isCall = core.types.isCallExpression(node);
    const chainWithTypes = isCall ? node.callee : node.object;
    const chain = helperSkipTransparentExpressionWrappers.skipTransparentExprWrapperNodes(chainWithTypes);
    let ref;
    let check;
    if (isCall && core.types.isIdentifier(chain, {
      name: "eval"
    })) {
      check = ref = chain;
      node.callee = core.types.sequenceExpression([core.types.numericLiteral(0), ref]);
    } else if (pureGetters && isCall && isSimpleMemberExpression(chain)) {
      check = ref = node.callee;
    } else if (scope.isStatic(chain)) {
      check = ref = chainWithTypes;
    } else {
      if (!tmpVar || isCall) {
        tmpVar = scope.generateUidIdentifierBasedOnNode(chain);
        scope.push({
          id: core.types.cloneNode(tmpVar)
        });
      }
      ref = tmpVar;
      check = core.types.assignmentExpression("=", core.types.cloneNode(tmpVar), chainWithTypes);
      isCall ? node.callee = ref : node.object = ref;
    }
    if (isCall && core.types.isMemberExpression(chain)) {
      if (pureGetters && isSimpleMemberExpression(chain)) {
        node.callee = chainWithTypes;
      } else {
        const {
          object
        } = chain;
        let context;
        if (core.types.isSuper(object)) {
          context = core.types.thisExpression();
        } else {
          const memoized = scope.maybeGenerateMemoised(object);
          if (memoized) {
            context = memoized;
            chain.object = core.types.assignmentExpression("=", memoized, object);
          } else {
            context = object;
          }
        }
        node.arguments.unshift(core.types.cloneNode(context));
        node.callee = core.types.memberExpression(node.callee, core.types.identifier("call"));
      }
    }
    const data = {
      check: core.types.cloneNode(check),
      ref: core.types.cloneNode(ref)
    };
    Object.defineProperty(data, "ref", {
      enumerable: false
    });
    checks.push(data);
  }
  let result = replacementPath.node;
  if (wrapLast) result = wrapLast(result);
  const ifNullishBoolean = core.types.isBooleanLiteral(ifNullish);
  const ifNullishFalse = ifNullishBoolean && ifNullish.value === false;
  const ifNullishVoid = !ifNullishBoolean && core.types.isUnaryExpression(ifNullish, {
    operator: "void"
  });
  const isEvaluationValueIgnored = core.types.isExpressionStatement(replacementPath.parent) && !replacementPath.isCompletionRecord() || core.types.isSequenceExpression(replacementPath.parent) && last(replacementPath.parent.expressions) !== replacementPath.node;
  const tpl = ifNullishFalse ? noDocumentAll ? NULLISH_CHECK_NO_DDA_NEG : NULLISH_CHECK_NEG : noDocumentAll ? NULLISH_CHECK_NO_DDA : NULLISH_CHECK;
  const logicalOp = ifNullishFalse ? "&&" : "||";
  const check = checks.map(tpl).reduce((expr, check) => core.types.logicalExpression(logicalOp, expr, check));
  replacementPath.replaceWith(ifNullishBoolean || ifNullishVoid && isEvaluationValueIgnored ? core.types.logicalExpression(logicalOp, check, result) : core.types.conditionalExpression(check, ifNullish, result));
}
function transform(path, assumptions) {
  const {
    scope
  } = path;
  const maybeWrapped = findOutermostTransparentParent(path);
  const {
    parentPath
  } = maybeWrapped;
  if (parentPath.isUnaryExpression({
    operator: "delete"
  })) {
    transformOptionalChain(path, assumptions, parentPath, core.types.booleanLiteral(true));
  } else {
    let wrapLast;
    if (parentPath.isCallExpression({
      callee: maybeWrapped.node
    }) && path.isOptionalMemberExpression()) {
      wrapLast = replacement => {
        var _baseRef;
        const object = helperSkipTransparentExpressionWrappers.skipTransparentExprWrapperNodes(replacement.object);
        let baseRef;
        if (!assumptions.pureGetters || !isSimpleMemberExpression(object)) {
          baseRef = scope.maybeGenerateMemoised(object);
          if (baseRef) {
            replacement.object = core.types.assignmentExpression("=", baseRef, object);
          }
        }
        return core.types.callExpression(core.types.memberExpression(replacement, core.types.identifier("bind")), [core.types.cloneNode((_baseRef = baseRef) != null ? _baseRef : object)]);
      };
    }
    transformOptionalChain(path, assumptions, path, willPathCastToBoolean(maybeWrapped) ? core.types.booleanLiteral(false) : scope.buildUndefinedNode(), wrapLast);
  }
}

var index = helperPluginUtils.declare((api, options) => {
  var _api$assumption, _api$assumption2;
  api.assertVersion(7);
  const {
    loose = false
  } = options;
  const noDocumentAll = (_api$assumption = api.assumption("noDocumentAll")) != null ? _api$assumption : loose;
  const pureGetters = (_api$assumption2 = api.assumption("pureGetters")) != null ? _api$assumption2 : loose;
  return {
    name: "transform-optional-chaining",
    inherits: require("@babel/plugin-syntax-optional-chaining").default,
    visitor: {
      "OptionalCallExpression|OptionalMemberExpression"(path) {
        transform(path, {
          noDocumentAll,
          pureGetters
        });
      }
    }
  };
});

exports.default = index;
exports.transform = transform;
exports.transformOptionalChain = transformOptionalChain;
//# sourceMappingURL=index.js.map
