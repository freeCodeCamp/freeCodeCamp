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

function buildFragmentSpread(fragment) {
  var args = [];

  var _iterator = (0, _createForOfIteratorHelper2["default"])(fragment.argumentDefinitions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var argDef = _step.value;

      if (argDef.kind !== 'LocalArgumentDefinition') {
        continue;
      }

      args.push({
        kind: 'Argument',
        loc: {
          kind: 'Derived',
          source: argDef.loc
        },
        name: argDef.name,
        type: argDef.type,
        value: {
          kind: 'Variable',
          loc: {
            kind: 'Derived',
            source: argDef.loc
          },
          variableName: argDef.name,
          type: argDef.type
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    args: args,
    directives: [],
    kind: 'FragmentSpread',
    loc: {
      kind: 'Derived',
      source: fragment.loc
    },
    metadata: null,
    name: fragment.name
  };
}

function buildOperationArgumentDefinitions(argumentDefinitions) {
  var localArgumentDefinitions = argumentDefinitions.map(function (argDef) {
    if (argDef.kind === 'LocalArgumentDefinition') {
      return argDef;
    } else {
      return {
        kind: 'LocalArgumentDefinition',
        name: argDef.name,
        type: argDef.type,
        defaultValue: null,
        loc: argDef.loc
      };
    }
  });
  localArgumentDefinitions.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  return localArgumentDefinitions;
}

module.exports = {
  buildFragmentSpread: buildFragmentSpread,
  buildOperationArgumentDefinitions: buildOperationArgumentDefinitions
};