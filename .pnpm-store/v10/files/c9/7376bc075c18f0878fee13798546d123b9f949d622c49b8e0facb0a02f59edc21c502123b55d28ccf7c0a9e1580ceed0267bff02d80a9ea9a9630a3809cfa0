"use strict";
const { domSymbolTree } = require("./living/helpers/internal-constants");
const SYMBOL_TREE_POSITION = require("symbol-tree").TreePosition;

/**
 * Define a set of properties on an object, by copying the property descriptors
 * from the original object.
 *
 * - `object` {Object} the target object
 * - `properties` {Object} the source from which to copy property descriptors
 */
exports.define = function define(object, properties) {
  for (const name of Object.getOwnPropertyNames(properties)) {
    const propDesc = Object.getOwnPropertyDescriptor(properties, name);
    Object.defineProperty(object, name, propDesc);
  }
};

exports.mixin = (target, source) => {
  const keys = Reflect.ownKeys(source);
  for (let i = 0; i < keys.length; ++i) {
    if (keys[i] in target) {
      continue;
    }

    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
  }
};

let memoizeQueryTypeCounter = 0;

/**
 * Returns a version of a method that memoizes specific types of calls on the object
 *
 * - `fn` {Function} the method to be memozied
 */
exports.memoizeQuery = function memoizeQuery(fn) {
  // Only memoize query functions with arity <= 2
  if (fn.length > 2) {
    return fn;
  }

  const type = memoizeQueryTypeCounter++;

  return function (...args) {
    if (!this._memoizedQueries) {
      return fn.apply(this, args);
    }

    if (!this._memoizedQueries[type]) {
      this._memoizedQueries[type] = Object.create(null);
    }

    let key;
    if (args.length === 1 && typeof args[0] === "string") {
      key = args[0];
    } else if (args.length === 2 && typeof args[0] === "string" && typeof args[1] === "string") {
      key = args[0] + "::" + args[1];
    } else {
      return fn.apply(this, args);
    }

    if (!(key in this._memoizedQueries[type])) {
      this._memoizedQueries[type][key] = fn.apply(this, args);
    }
    return this._memoizedQueries[type][key];
  };
};

exports.simultaneousIterators = function* (first, second) {
  for (;;) {
    const firstResult = first.next();
    const secondResult = second.next();

    if (firstResult.done && secondResult.done) {
      return;
    }

    yield [
      firstResult.done ? null : firstResult.value,
      secondResult.done ? null : secondResult.value
    ];
  }
};

exports.treeOrderSorter = function (a, b) {
  const compare = domSymbolTree.compareTreePosition(a, b);

  if (compare & SYMBOL_TREE_POSITION.PRECEDING) { // b is preceding a
    return 1;
  }

  if (compare & SYMBOL_TREE_POSITION.FOLLOWING) {
    return -1;
  }

  // disconnected or equal:
  return 0;
};

try {
  exports.Canvas = require("canvas");
} catch {
  exports.Canvas = null;
}
