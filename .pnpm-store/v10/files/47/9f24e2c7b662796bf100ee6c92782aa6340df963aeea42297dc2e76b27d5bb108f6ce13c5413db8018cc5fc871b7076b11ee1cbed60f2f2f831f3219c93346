'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.keyMap = keyMap;

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 * ```ts
 * const phoneBook = [
 *   { name: 'Jon', num: '555-1234' },
 *   { name: 'Jenny', num: '867-5309' }
 * ]
 *
 * const entriesByName = keyMap(
 *   phoneBook,
 *   entry => entry.name
 * )
 *
 * // {
 * //   Jon: { name: 'Jon', num: '555-1234' },
 * //   Jenny: { name: 'Jenny', num: '867-5309' }
 * // }
 *
 * const jennyEntry = entriesByName['Jenny']
 *
 * // { name: 'Jenny', num: '857-6309' }
 * ```
 */
function keyMap(list, keyFn) {
  const result = Object.create(null);

  for (const item of list) {
    result[keyFn(item)] = item;
  }

  return result;
}
