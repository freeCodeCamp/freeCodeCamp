'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepCyclicCopy;
/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const EMPTY = new Set();

// Node 6 does not have gOPDs, so we define a simple polyfill for it.
if (!Object.getOwnPropertyDescriptors) {
  // $FlowFixMe: polyfill
  Object.getOwnPropertyDescriptors = obj => {
    const list = {};

    Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj))
    // $FlowFixMe: assignment with a Symbol is OK.
    .forEach(key => list[key] = Object.getOwnPropertyDescriptor(obj, key));

    return list;
  };
}

function deepCyclicCopy(value) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { blacklist: EMPTY, keepPrototype: false };
  let cycles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new WeakMap();

  if (typeof value !== 'object' || value === null) {
    return value;
  } else if (cycles.has(value)) {
    return cycles.get(value);
  } else if (Array.isArray(value)) {
    return deepCyclicCopyArray(value, options, cycles);
  } else {
    return deepCyclicCopyObject(value, options, cycles);
  }
}

function deepCyclicCopyObject(object, options, cycles) {
  const newObject = options.keepPrototype ? Object.create(Object.getPrototypeOf(object)) : {};

  // $FlowFixMe: Object.getOwnPropertyDescriptors is polyfilled above.
  const descriptors = Object.getOwnPropertyDescriptors(object);

  cycles.set(object, newObject);

  Object.keys(descriptors).forEach(key => {
    if (options.blacklist && options.blacklist.has(key)) {
      delete descriptors[key];
      return;
    }

    const descriptor = descriptors[key];
    if (typeof descriptor.value !== 'undefined') {
      descriptor.value = deepCyclicCopy(descriptor.value, { blacklist: EMPTY, keepPrototype: options.keepPrototype }, cycles);
    }

    descriptor.configurable = true;
  });

  return Object.defineProperties(newObject, descriptors);
}

function deepCyclicCopyArray(array, options, cycles) {
  const newArray = options.keepPrototype ? // $FlowFixMe: getPrototypeOf an array is OK.
  new (Object.getPrototypeOf(array).constructor)(array.length) : [];
  const length = array.length;

  cycles.set(array, newArray);

  for (let i = 0; i < length; i++) {
    newArray[i] = deepCyclicCopy(array[i], { blacklist: EMPTY, keepPrototype: options.keepPrototype }, cycles);
  }

  return newArray;
}