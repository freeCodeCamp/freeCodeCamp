// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

import {inspect as _inspect} from 'loupe';
import {config} from '../config.js';

/**
 * ### .inspect(obj, [showHidden], [depth], [colors])
 *
 * Echoes the value of a value. Tries to print the value out
 * in the best way possible given the different types.
 *
 * @param {object} obj The object to print out.
 * @param {boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects. Default is false.
 * @param {number} depth Depth in which to descend in object. Default is 2.
 * @param {boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @returns {string}
 * @namespace Utils
 * @name inspect
 */
export function inspect(obj, showHidden, depth, colors) {
  let options = {
    colors: colors,
    depth: typeof depth === 'undefined' ? 2 : depth,
    showHidden: showHidden,
    truncate: config.truncateThreshold ? config.truncateThreshold : Infinity
  };
  return _inspect(obj, options);
}
