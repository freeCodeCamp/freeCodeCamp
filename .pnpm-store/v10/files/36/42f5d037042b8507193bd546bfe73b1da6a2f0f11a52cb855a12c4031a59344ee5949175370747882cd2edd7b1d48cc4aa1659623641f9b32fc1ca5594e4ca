"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _assert = _interopRequireDefault(require("assert"));
var _util = require("./util.js");
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var mMap = new WeakMap();
function m(node) {
  if (!mMap.has(node)) {
    mMap.set(node, {});
  }
  return mMap.get(node);
}
var hasOwn = Object.prototype.hasOwnProperty;
function makePredicate(propertyName, knownTypes) {
  function onlyChildren(node) {
    var t = (0, _util.getTypes)();
    t.assertNode(node);

    // Assume no side effects until we find out otherwise.
    var result = false;
    function check(child) {
      if (result) {
        // Do nothing.
      } else if (Array.isArray(child)) {
        child.some(check);
      } else if (t.isNode(child)) {
        _assert["default"].strictEqual(result, false);
        result = predicate(child);
      }
      return result;
    }
    var keys = t.VISITOR_KEYS[node.type];
    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var child = node[key];
        check(child);
      }
    }
    return result;
  }
  function predicate(node) {
    (0, _util.getTypes)().assertNode(node);
    var meta = m(node);
    if (hasOwn.call(meta, propertyName)) return meta[propertyName];

    // Certain types are "opaque," which means they have no side
    // effects or leaps and we don't care about their subexpressions.
    if (hasOwn.call(opaqueTypes, node.type)) return meta[propertyName] = false;
    if (hasOwn.call(knownTypes, node.type)) return meta[propertyName] = true;
    return meta[propertyName] = onlyChildren(node);
  }
  predicate.onlyChildren = onlyChildren;
  return predicate;
}
var opaqueTypes = {
  FunctionExpression: true,
  ArrowFunctionExpression: true
};

// These types potentially have side effects regardless of what side
// effects their subexpressions have.
var sideEffectTypes = {
  CallExpression: true,
  // Anything could happen!
  ForInStatement: true,
  // Modifies the key variable.
  UnaryExpression: true,
  // Think delete.
  BinaryExpression: true,
  // Might invoke .toString() or .valueOf().
  AssignmentExpression: true,
  // Side-effecting by definition.
  UpdateExpression: true,
  // Updates are essentially assignments.
  NewExpression: true // Similar to CallExpression.
};

// These types are the direct cause of all leaps in control flow.
var leapTypes = {
  YieldExpression: true,
  BreakStatement: true,
  ContinueStatement: true,
  ReturnStatement: true,
  ThrowStatement: true
};

// All leap types are also side effect types.
for (var type in leapTypes) {
  if (hasOwn.call(leapTypes, type)) {
    sideEffectTypes[type] = leapTypes[type];
  }
}
exports.hasSideEffects = makePredicate("hasSideEffects", sideEffectTypes);
exports.containsLeap = makePredicate("containsLeap", leapTypes);