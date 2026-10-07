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

var FetchableQueryGenerator = require('./FetchableQueryGenerator');

var NodeQueryGenerator = require('./NodeQueryGenerator');

var QueryQueryGenerator = require('./QueryQueryGenerator');

var ViewerQueryGenerator = require('./ViewerQueryGenerator');

var _require = require('../../core/CompilerError'),
    createUserError = _require.createUserError;

var GENERATORS = [ViewerQueryGenerator, QueryQueryGenerator, NodeQueryGenerator, FetchableQueryGenerator];
/**
 * Builds a query to refetch the given fragment or throws if we have not way to
 * generate one.
 */

function buildRefetchOperation(schema, fragment, queryName) {
  var _iterator = (0, _createForOfIteratorHelper2["default"])(GENERATORS),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var generator = _step.value;
      var refetchRoot = generator.buildRefetchOperation(schema, fragment, queryName);

      if (refetchRoot != null) {
        return refetchRoot;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  throw createUserError("Invalid use of @refetchable on fragment '".concat(fragment.name, "', only ") + 'supported are fragments on:\n' + GENERATORS.map(function (generator) {
    return " - ".concat(generator.description);
  }).join('\n'), [fragment.loc]);
}

module.exports = {
  buildRefetchOperation: buildRefetchOperation
};