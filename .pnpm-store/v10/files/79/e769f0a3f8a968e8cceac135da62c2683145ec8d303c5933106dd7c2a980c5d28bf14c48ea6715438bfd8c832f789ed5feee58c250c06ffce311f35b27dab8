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

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var inferRootArgumentDefinitions = require('../core/inferRootArgumentDefinitions');

/**
 * Refines the argument definitions for operations to remove unused arguments
 * due to statically pruned conditional branches (e.g. because of overriding
 * a variable used in `@include()` to be false).
 */
function skipUnusedVariablesTransform(context) {
  var contextWithUsedArguments = inferRootArgumentDefinitions(context);
  return context.withMutations(function (ctx) {
    var nextContext = ctx;

    var _iterator = (0, _createForOfIteratorHelper2["default"])(nextContext.documents()),
        _step;

    try {
      var _loop = function _loop() {
        var node = _step.value;

        if (node.kind !== 'Root') {
          return "continue";
        }

        var usedArguments = new Set(contextWithUsedArguments.getRoot(node.name).argumentDefinitions.map(function (argDef) {
          return argDef.name;
        })); // Remove unused argument definitions

        var usedArgumentDefinitions = node.argumentDefinitions.filter(function (argDef) {
          return usedArguments.has(argDef.name);
        });

        if (usedArgumentDefinitions.length !== node.argumentDefinitions.length) {
          nextContext = nextContext.replace((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
            argumentDefinitions: usedArgumentDefinitions
          }));
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ret = _loop();

        if (_ret === "continue") continue;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return nextContext;
  });
}

module.exports = {
  transform: skipUnusedVariablesTransform
};