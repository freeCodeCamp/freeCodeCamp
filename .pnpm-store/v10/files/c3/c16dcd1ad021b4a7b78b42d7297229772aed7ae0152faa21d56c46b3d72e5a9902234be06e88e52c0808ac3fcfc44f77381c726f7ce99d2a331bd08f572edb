/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var inferRootArgumentDefinitions = require('../core/inferRootArgumentDefinitions');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError,
    eachWithCombinedError = _require.eachWithCombinedError;

/**
 * Validates that all global variables used in operations are defined at the
 * root. This isn't a real transform as it returns the original context, but
 * has to happen before other transforms strip certain variable usages.
 */
function validateGlobalVariablesTransform(context) {
  var contextWithUsedArguments = inferRootArgumentDefinitions(context);
  eachWithCombinedError(context.documents(), function (node) {
    if (node.kind !== 'Root') {
      return;
    }

    var nodeWithUsedArguments = contextWithUsedArguments.getRoot(node.name);
    var definedArguments = argumentDefinitionsToMap(node.argumentDefinitions);
    var usedArguments = argumentDefinitionsToMap(nodeWithUsedArguments.argumentDefinitions); // All used arguments must be defined

    var undefinedVariables = [];

    var _iterator = (0, _createForOfIteratorHelper2["default"])(usedArguments.values()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var argDef = _step.value;

        if (!definedArguments.has(argDef.name)) {
          undefinedVariables.push(argDef);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (undefinedVariables.length !== 0) {
      throw createUserError("Operation '".concat(node.name, "' references undefined variable(s):\n").concat(undefinedVariables.map(function (argDef) {
        return "- $".concat(argDef.name, ": ").concat(context.getSchema().getTypeString(argDef.type));
      }).join('\n'), "."), undefinedVariables.map(function (argDef) {
        return argDef.loc;
      }));
    }
  });
  return context;
}

function argumentDefinitionsToMap(argDefs) {
  var map = new Map();

  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(argDefs),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var argDef = _step2.value;
      map.set(argDef.name, argDef);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return map;
}

module.exports = {
  transform: validateGlobalVariablesTransform
};