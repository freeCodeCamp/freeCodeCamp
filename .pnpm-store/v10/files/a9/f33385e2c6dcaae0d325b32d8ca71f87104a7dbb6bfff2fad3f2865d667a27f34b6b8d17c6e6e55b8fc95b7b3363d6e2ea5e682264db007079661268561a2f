'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var syntaxOptionalChaining = require('@babel/plugin-syntax-optional-chaining');
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

const {
  ast
} = core.template.expression;
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
function transform(path, {
  pureGetters,
  noDocumentAll
}) {
  const {
    scope
  } = path;
  const maybeWrapped = findOutermostTransparentParent(path);
  const {
    parentPath
  } = maybeWrapped;
  const willReplacementCastToBoolean = willPathCastToBoolean(maybeWrapped);
  let isDeleteOperation = false;
  const parentIsCall = parentPath.isCallExpression({
    callee: maybeWrapped.node
  }) && path.isOptionalMemberExpression();
  const optionals = [];
  let optionalPath = path;
  if (scope.path.isPattern() && needsMemoize(optionalPath)) {
    path.replaceWith(core.template.ast`(() => ${path.node})()`);
    return;
  }
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
  let replacementPath = path;
  if (parentPath.isUnaryExpression({
    operator: "delete"
  })) {
    replacementPath = parentPath;
    isDeleteOperation = true;
  }
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
    } else {
      ref = scope.maybeGenerateMemoised(chain);
      if (ref) {
        check = core.types.assignmentExpression("=", core.types.cloneNode(ref), chainWithTypes);
        isCall ? node.callee = ref : node.object = ref;
      } else {
        check = ref = chainWithTypes;
      }
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
    let replacement = replacementPath.node;
    if (i === 0 && parentIsCall) {
      var _baseRef;
      const object = helperSkipTransparentExpressionWrappers.skipTransparentExprWrapperNodes(replacement.object);
      let baseRef;
      if (!pureGetters || !isSimpleMemberExpression(object)) {
        baseRef = scope.maybeGenerateMemoised(object);
        if (baseRef) {
          replacement.object = core.types.assignmentExpression("=", baseRef, object);
        }
      }
      replacement = core.types.callExpression(core.types.memberExpression(replacement, core.types.identifier("bind")), [core.types.cloneNode((_baseRef = baseRef) != null ? _baseRef : object)]);
    }
    if (willReplacementCastToBoolean) {
      const nonNullishCheck = noDocumentAll ? ast`${core.types.cloneNode(check)} != null` : ast`
            ${core.types.cloneNode(check)} !== null && ${core.types.cloneNode(ref)} !== void 0`;
      replacementPath.replaceWith(core.types.logicalExpression("&&", nonNullishCheck, replacement));
      replacementPath = helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers(replacementPath.get("right"));
    } else {
      const nullishCheck = noDocumentAll ? ast`${core.types.cloneNode(check)} == null` : ast`
            ${core.types.cloneNode(check)} === null || ${core.types.cloneNode(ref)} === void 0`;
      const returnValue = isDeleteOperation ? ast`true` : ast`void 0`;
      replacementPath.replaceWith(core.types.conditionalExpression(nullishCheck, returnValue, replacement));
      replacementPath = helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers(replacementPath.get("alternate"));
    }
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
    name: "proposal-optional-chaining",
    inherits: syntaxOptionalChaining.default,
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

exports["default"] = index;
exports.transform = transform;
//# sourceMappingURL=index.js.map
