/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from "assert";
import { getTypes } from "./util.js";

const mMap = new WeakMap();
function m(node) {
  if (!mMap.has(node)) {
    mMap.set(node, {});
  }
  return mMap.get(node);
}

const hasOwn = Object.prototype.hasOwnProperty;

function makePredicate(propertyName, knownTypes) {
  function onlyChildren(node) {
    const t = getTypes();
    t.assertNode(node);

    // Assume no side effects until we find out otherwise.
    let result = false;

    function check(child) {
      if (result) {
        // Do nothing.
      } else if (Array.isArray(child)) {
        child.some(check);
      } else if (t.isNode(child)) {
        assert.strictEqual(result, false);
        result = predicate(child);
      }
      return result;
    }

    let keys = t.VISITOR_KEYS[node.type];
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let child = node[key];
        check(child);
      }
    }

    return result;
  }

  function predicate(node) {
    getTypes().assertNode(node);

    let meta = m(node);
    if (hasOwn.call(meta, propertyName))
      return meta[propertyName];

    // Certain types are "opaque," which means they have no side
    // effects or leaps and we don't care about their subexpressions.
    if (hasOwn.call(opaqueTypes, node.type))
      return meta[propertyName] = false;

    if (hasOwn.call(knownTypes, node.type))
      return meta[propertyName] = true;

    return meta[propertyName] = onlyChildren(node);
  }

  predicate.onlyChildren = onlyChildren;

  return predicate;
}

let opaqueTypes = {
  FunctionExpression: true,
  ArrowFunctionExpression: true
};

// These types potentially have side effects regardless of what side
// effects their subexpressions have.
let sideEffectTypes = {
  CallExpression: true, // Anything could happen!
  ForInStatement: true, // Modifies the key variable.
  UnaryExpression: true, // Think delete.
  BinaryExpression: true, // Might invoke .toString() or .valueOf().
  AssignmentExpression: true, // Side-effecting by definition.
  UpdateExpression: true, // Updates are essentially assignments.
  NewExpression: true // Similar to CallExpression.
};

// These types are the direct cause of all leaps in control flow.
let leapTypes = {
  YieldExpression: true,
  BreakStatement: true,
  ContinueStatement: true,
  ReturnStatement: true,
  ThrowStatement: true
};

// All leap types are also side effect types.
for (let type in leapTypes) {
  if (hasOwn.call(leapTypes, type)) {
    sideEffectTypes[type] = leapTypes[type];
  }
}

exports.hasSideEffects = makePredicate("hasSideEffects", sideEffectTypes);
exports.containsLeap = makePredicate("containsLeap", leapTypes);
