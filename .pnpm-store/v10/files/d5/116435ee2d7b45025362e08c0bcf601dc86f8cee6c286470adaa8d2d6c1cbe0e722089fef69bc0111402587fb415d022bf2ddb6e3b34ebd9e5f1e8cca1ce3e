/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion.
 *
 * @param {object} obj object (constructed Assertion)
 * @param {unknown} args chai.Assertion.prototype.assert arguments
 * @returns {unknown}
 * @namespace Utils
 * @name getActual
 */
export function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
}
