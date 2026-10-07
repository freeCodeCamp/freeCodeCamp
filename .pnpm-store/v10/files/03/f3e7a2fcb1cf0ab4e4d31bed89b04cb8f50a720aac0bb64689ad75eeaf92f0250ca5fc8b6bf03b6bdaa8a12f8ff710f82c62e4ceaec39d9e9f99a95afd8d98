/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _require = require('./GraphQLASTUtils'),
    getName = _require.getName;

function getChangedNodeNames(projectStates, projects) {
  var changedNames = new Set();

  var _iterator = (0, _createForOfIteratorHelper2["default"])(projects),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var projectType = _step.value;
      var subConfig = projectStates.get(projectType);

      var _iterator2 = (0, _createForOfIteratorHelper2["default"])(subConfig.initialDirty),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var name = _step2.value;
          changedNames.add(name);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = (0, _createForOfIteratorHelper2["default"])(subConfig.changes.added),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ast = _step3.value.ast;
          changedNames.add(getName(ast));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = (0, _createForOfIteratorHelper2["default"])(subConfig.changes.removed),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _ast = _step4.value.ast;
          changedNames.add(getName(_ast));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return changedNames;
}

module.exports = getChangedNodeNames;