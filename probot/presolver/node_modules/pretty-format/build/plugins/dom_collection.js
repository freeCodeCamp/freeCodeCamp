'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = exports.test = undefined;

var _collections = require('../collections');

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const SPACE = ' ';

const COLLECTION_NAMES = ['DOMStringMap', 'NamedNodeMap'];

const test = exports.test = val => val && val.constructor && COLLECTION_NAMES.indexOf(val.constructor.name) !== -1;

const convertCollectionToObject = collection => {
  let result = {};

  if (collection.constructor.name === 'NamedNodeMap') {
    for (let i = 0; i < collection.length; i++) {
      result[collection[i].name] = collection[i].value;
    }
  } else {
    result = Object.assign({}, collection);
  }

  return result;
};

const serialize = exports.serialize = (collection, config, indentation, depth, refs, printer) => {
  if (++depth > config.maxDepth) {
    return '[' + collection.constructor.name + ']';
  }

  return collection.constructor.name + SPACE + '{' + (0, _collections.printObjectProperties)(convertCollectionToObject(collection), config, indentation, depth, refs, printer) + '}';
};

exports.default = { serialize, test };