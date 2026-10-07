/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {getOwnEnumerablePropertySymbols} from './getOwnEnumerablePropertySymbols.js';

/**
 * ### .getOwnEnumerableProperties(object)
 *
 * This allows the retrieval of directly-owned enumerable property names and
 * symbols of an object. This function is necessary because Object.keys only
 * returns enumerable property names, not enumerable property symbols.
 *
 * @param {object} obj
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerableProperties
 * @public
 */
export function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
}
