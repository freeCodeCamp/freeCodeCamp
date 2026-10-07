/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks
 */
'use strict';
/**
 * Get a value from an object based on the given path
 *
 * Usage example:
 *
 *   var obj = {
 *     a : {
 *       b : 123
 *     }
 *   };
 *
 * var result = getByPath(obj, ['a', 'b']); // 123
 *
 * You may also specify the path using an object with a path field
 *
 * var result = getByPath(obj, {path: ['a', 'b']}); // 123
 *
 * If the path doesn't exist undefined will be returned
 *
 * var result = getByPath(obj, ['x', 'y', 'z']); // undefined
 */

function getByPath(root, path, fallbackValue) {
  var current = root;

  for (var i = 0; i < path.length; i++) {
    var segment = path[i]; // Use 'in' to check entire prototype chain since immutable js records
    // use prototypes

    if (current && segment in current) {
      current = current[segment];
    } else {
      return fallbackValue;
    }
  }

  return current;
}

module.exports = getByPath;