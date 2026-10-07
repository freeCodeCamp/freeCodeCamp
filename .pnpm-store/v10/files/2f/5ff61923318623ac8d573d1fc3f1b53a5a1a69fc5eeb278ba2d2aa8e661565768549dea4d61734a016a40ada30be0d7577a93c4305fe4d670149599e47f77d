'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var pluginTransformOptionalChaining = require('@babel/plugin-transform-optional-chaining');
var helperSkipTransparentExpressionWrappers = require('@babel/helper-skip-transparent-expression-wrappers');
var core = require('@babel/core');

function matchAffectedArguments(argumentNodes) {
  const spreadIndex = argumentNodes.findIndex(node => core.types.isSpreadElement(node));
  return spreadIndex >= 0 && spreadIndex !== argumentNodes.length - 1;
}
function shouldTransform(path) {
  let optionalPath = path;
  const chains = [];
  for (;;) {
    if (optionalPath.isOptionalMemberExpression()) {
      chains.push(optionalPath.node);
      optionalPath = helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers(optionalPath.get("object"));
    } else if (optionalPath.isOptionalCallExpression()) {
      chains.push(optionalPath.node);
      optionalPath = helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers(optionalPath.get("callee"));
    } else {
      break;
    }
  }
  for (let i = 0; i < chains.length; i++) {
    const node = chains[i];
    if (core.types.isOptionalCallExpression(node) && matchAffectedArguments(node.arguments)) {
      if (node.optional) {
        return true;
      }
      const callee = chains[i + 1];
      if (core.types.isOptionalMemberExpression(callee, {
        optional: true
      })) {
        return true;
      }
    }
  }
  return false;
}

var index = helperPluginUtils.declare(api => {
  var _api$assumption, _api$assumption2;
  api.assertVersion(7);
  const noDocumentAll = (_api$assumption = api.assumption("noDocumentAll")) != null ? _api$assumption : false;
  const pureGetters = (_api$assumption2 = api.assumption("pureGetters")) != null ? _api$assumption2 : false;
  return {
    name: "bugfix-v8-spread-parameters-in-optional-chaining",
    visitor: {
      "OptionalCallExpression|OptionalMemberExpression"(path) {
        if (shouldTransform(path)) {
          pluginTransformOptionalChaining.transform(path, {
            noDocumentAll,
            pureGetters
          });
        }
      }
    }
  };
});

exports.default = index;
//# sourceMappingURL=index.js.map
