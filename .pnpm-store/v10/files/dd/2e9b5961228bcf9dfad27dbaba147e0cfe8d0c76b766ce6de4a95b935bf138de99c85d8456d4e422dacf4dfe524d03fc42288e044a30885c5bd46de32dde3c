/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
import KEYS from "./visitor-keys.js";

/**
 * @typedef {import('./visitor-keys.js').VisitorKeys} VisitorKeys
 */

// List to ignore keys.
const KEY_BLACKLIST = new Set([
	"parent",
	"leadingComments",
	"trailingComments",
]);

/**
 * Check whether a given key should be used or not.
 * @param {string} key The key to check.
 * @returns {boolean} `true` if the key should be used.
 */
function filterKey(key) {
	return !KEY_BLACKLIST.has(key) && key[0] !== "_";
}

/* eslint-disable jsdoc/valid-types -- doesn't allow `readonly`.
   TODO: remove eslint-disable when https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/issues/164 is fixed
*/
/**
 * Get visitor keys of a given node.
 * @param {Object} node The AST node to get keys.
 * @returns {readonly string[]} Visitor keys of the node.
 */
export function getKeys(node) {
	return Object.keys(node).filter(filterKey);
}
/* eslint-enable jsdoc/valid-types -- doesn't allow `readonly` */

/**
 * Make the union set with `KEYS` and given keys.
 * @param {VisitorKeys} additionalKeys The additional keys.
 * @returns {VisitorKeys} The union set.
 */
export function unionWith(additionalKeys) {
	const retv =
		/** @type {{ [type: string]: ReadonlyArray<string> }} */
		(Object.assign({}, KEYS));

	for (const type of Object.keys(additionalKeys)) {
		if (Object.hasOwn(retv, type)) {
			const keys = new Set(additionalKeys[type]);

			for (const key of retv[type]) {
				keys.add(key);
			}

			retv[type] = Object.freeze(Array.from(keys));
		} else {
			retv[type] = Object.freeze(Array.from(additionalKeys[type]));
		}
	}

	return Object.freeze(retv);
}

export { KEYS };
