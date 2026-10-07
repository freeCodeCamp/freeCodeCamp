type VisitorKeys$1 = {
    readonly [type: string]: ReadonlyArray<string>;
};
/**
 * @typedef {{ readonly [type: string]: ReadonlyArray<string> }} VisitorKeys
 */
/**
 * @type {VisitorKeys}
 */
declare const KEYS: VisitorKeys$1;

/**
 * Get visitor keys of a given node.
 * @param {Object} node The AST node to get keys.
 * @returns {readonly string[]} Visitor keys of the node.
 */
declare function getKeys(node: Object): readonly string[];
/**
 * Make the union set with `KEYS` and given keys.
 * @param {VisitorKeys} additionalKeys The additional keys.
 * @returns {VisitorKeys} The union set.
 */
declare function unionWith(additionalKeys: VisitorKeys): VisitorKeys;

type VisitorKeys = VisitorKeys$1;

export { KEYS, getKeys, unionWith };
export type { VisitorKeys };
