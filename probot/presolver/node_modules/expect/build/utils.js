'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = exports.subsetEquality = exports.iterableEquality = exports.getObjectSubset = exports.getPath = exports.hasOwnProperty = undefined;

var _jasmine_utils = require('./jasmine_utils');

const hasOwnProperty = exports.hasOwnProperty = (object, value) => Object.prototype.hasOwnProperty.call(object, value) || Object.prototype.hasOwnProperty.call(object.constructor.prototype, value); /**
                                                                                                                                                                                                      * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                      *
                                                                                                                                                                                                      * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                      * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                      *
                                                                                                                                                                                                      * 
                                                                                                                                                                                                      */

const getPath = exports.getPath = (object, propertyPath) => {
  if (!Array.isArray(propertyPath)) {
    propertyPath = propertyPath.split('.');
  }

  if (propertyPath.length) {
    const lastProp = propertyPath.length === 1;
    const prop = propertyPath[0];
    const newObject = object[prop];

    if (!lastProp && (newObject === null || newObject === undefined)) {
      // This is not the last prop in the chain. If we keep recursing it will
      // hit a `can't access property X of undefined | null`. At this point we
      // know that the chain has broken and we can return right away.
      return {
        hasEndProp: false,
        lastTraversedObject: object,
        traversedPath: []
      };
    }

    const result = getPath(newObject, propertyPath.slice(1));

    if (result.lastTraversedObject === null) {
      result.lastTraversedObject = object;
    }

    result.traversedPath.unshift(prop);

    if (lastProp) {
      result.hasEndProp = hasOwnProperty(object, prop);
      if (!result.hasEndProp) {
        result.traversedPath.shift();
      }
    }

    return result;
  }

  return {
    lastTraversedObject: null,
    traversedPath: [],
    value: object
  };
};

// Strip properties from object that are not present in the subset. Useful for
// printing the diff for toMatchObject() without adding unrelated noise.
const getObjectSubset = exports.getObjectSubset = (object, subset) => {
  if (Array.isArray(object)) {
    if (Array.isArray(subset) && subset.length === object.length) {
      return subset.map((sub, i) => getObjectSubset(object[i], sub));
    }
  } else if (object instanceof Date) {
    return object;
  } else if (typeof object === 'object' && object !== null && typeof subset === 'object' && subset !== null) {
    const trimmed = {};
    Object.keys(subset).filter(key => hasOwnProperty(object, key)).forEach(key => trimmed[key] = getObjectSubset(object[key], subset[key]));

    if (Object.keys(trimmed).length > 0) {
      return trimmed;
    }
  }
  return object;
};

const IteratorSymbol = Symbol.iterator;

const hasIterator = object => !!(object != null && object[IteratorSymbol]);
const iterableEquality = exports.iterableEquality = (a, b) => {
  if (typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) || Array.isArray(b) || !hasIterator(a) || !hasIterator(b)) {
    return undefined;
  }
  if (a.constructor !== b.constructor) {
    return false;
  }

  if (a.size !== undefined) {
    if (a.size !== b.size) {
      return false;
    } else if ((0, _jasmine_utils.isA)('Set', a) || (0, _jasmine_utils.isImmutableUnorderedSet)(a)) {
      let allFound = true;
      for (const aValue of a) {
        if (!b.has(aValue)) {
          allFound = false;
          break;
        }
      }
      if (allFound) {
        return true;
      }
    } else if ((0, _jasmine_utils.isA)('Map', a) || (0, _jasmine_utils.isImmutableUnorderedKeyed)(a)) {
      let allFound = true;
      for (const aEntry of a) {
        if (!b.has(aEntry[0]) || !(0, _jasmine_utils.equals)(aEntry[1], b.get(aEntry[0]), [iterableEquality])) {
          allFound = false;
          break;
        }
      }
      if (allFound) {
        return true;
      }
    }
  }

  const bIterator = b[IteratorSymbol]();

  for (const aValue of a) {
    const nextB = bIterator.next();
    if (nextB.done || !(0, _jasmine_utils.equals)(aValue, nextB.value, [iterableEquality])) {
      return false;
    }
  }
  if (!bIterator.next().done) {
    return false;
  }
  return true;
};

const isObjectWithKeys = a => a !== null && typeof a === 'object' && !(a instanceof Error) && !(a instanceof Array) && !(a instanceof Date);

const subsetEquality = exports.subsetEquality = (object, subset) => {
  if (!isObjectWithKeys(subset)) {
    return undefined;
  }

  return Object.keys(subset).every(key => hasOwnProperty(object, key) && (0, _jasmine_utils.equals)(object[key], subset[key], [iterableEquality, subsetEquality]));
};

const partition = exports.partition = (items, predicate) => {
  const result = [[], []];

  items.forEach(item => result[predicate(item) ? 0 : 1].push(item));

  return result;
};