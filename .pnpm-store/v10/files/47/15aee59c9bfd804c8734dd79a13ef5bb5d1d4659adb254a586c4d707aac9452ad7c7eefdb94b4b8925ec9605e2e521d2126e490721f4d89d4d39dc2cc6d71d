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

var SCHEMA_EXTENSION = 'directive @DEPRECATED__relay_ignore_unused_variables_error on QUERY | MUTATION | SUBSCRIPTION';
/**
 * Validates that there are no unused variables in the operation.
 * former `graphql-js`` NoUnusedVariablesRule
 */

function validateUnusedVariablesTransform(context) {
  var contextWithUsedArguments = inferRootArgumentDefinitions(context);
  eachWithCombinedError(context.documents(), function (node) {
    if (node.kind !== 'Root') {
      return;
    }

    var rootArgumentLocations = new Map(node.argumentDefinitions.map(function (arg) {
      return [arg.name, arg.loc];
    }));
    var nodeWithUsedArguments = contextWithUsedArguments.getRoot(node.name);
    var usedArguments = argumentDefinitionsToMap(nodeWithUsedArguments.argumentDefinitions);

    var _iterator = (0, _createForOfIteratorHelper2["default"])(usedArguments.keys()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var usedArgumentName = _step.value;
        rootArgumentLocations["delete"](usedArgumentName);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var ignoreErrorDirective = node.directives.find(function (_ref) {
      var name = _ref.name;
      return name === 'DEPRECATED__relay_ignore_unused_variables_error';
    });

    if (rootArgumentLocations.size > 0 && !ignoreErrorDirective) {
      var isPlural = rootArgumentLocations.size > 1;
      throw createUserError("Variable".concat(isPlural ? 's' : '', " '$").concat(Array.from(rootArgumentLocations.keys()).join("', '$"), "' ").concat(isPlural ? 'are' : 'is', " never used in operation '").concat(node.name, "'."), Array.from(rootArgumentLocations.values()));
    }

    if (rootArgumentLocations.size === 0 && ignoreErrorDirective) {
      throw createUserError("Invalid usage of '@DEPRECATED__relay_ignore_unused_variables_error.'" + "No unused variables found in the query '".concat(node.name, "'"), [ignoreErrorDirective.loc]);
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
  transform: validateUnusedVariablesTransform,
  SCHEMA_EXTENSION: SCHEMA_EXTENSION
};