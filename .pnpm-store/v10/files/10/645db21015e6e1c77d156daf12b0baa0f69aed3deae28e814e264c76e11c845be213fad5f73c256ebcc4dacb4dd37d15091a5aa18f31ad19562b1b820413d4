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

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError,
    createCompilerError = _require.createCompilerError;

var _require2 = require('./GraphQLASTUtils'),
    getName = _require2.getName;

var GraphQLNodeMap = /*#__PURE__*/function (_Map) {
  (0, _inheritsLoose2["default"])(GraphQLNodeMap, _Map);

  function GraphQLNodeMap() {
    return _Map.apply(this, arguments) || this;
  }

  GraphQLNodeMap.from = function from(nodes) {
    var result = new GraphQLNodeMap();

    var _iterator = (0, _createForOfIteratorHelper2["default"])(nodes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        var name = getName(node);
        var prevNode = result.get(name);

        if (prevNode) {
          throw createUserError("Duplicate node named '".concat(name, "'"), null, [node, prevNode]);
        }

        result.set(name, node);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result;
  };

  GraphQLNodeMap.fromSources = function fromSources(sources) {
    return GraphQLNodeMap.from(sources.nodes());
  };

  var _proto = GraphQLNodeMap.prototype;

  _proto.enforceGet = function enforceGet(name) {
    var node = this.get(name);

    if (!node) {
      throw createCompilerError("GraphQLNodeMap: expected to have a node named ".concat(name, "."));
    }

    return node;
  };

  return GraphQLNodeMap;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Map));

module.exports = GraphQLNodeMap;