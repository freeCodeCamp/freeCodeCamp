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

var IRValidator = require('../core/IRValidator');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError;

function visitRoot(node) {
  var _iterator = (0, _createForOfIteratorHelper2["default"])(node.selections),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selection = _step.value;

      if (selection.kind === 'ScalarField' && selection.name === '__typename') {
        throw createUserError('Relay does not allow `__typename` field on Query, Mutation or Subscription', [selection.loc]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function stopVisit() {}

function disallowTypenameOnRoot(context) {
  IRValidator.validate(context, {
    Root: visitRoot,
    Fragment: stopVisit
  });
  return context;
}

module.exports = {
  transform: disallowTypenameOnRoot
};