/**
 * @typedef { import('estree').Node} Node
 * @typedef {{
 *   skip: () => void;
 *   remove: () => void;
 *   replace: (node: Node) => void;
 * }} WalkerContext
 */

export class WalkerBase {
	constructor() {
		/** @type {boolean} */
		this.should_skip = false;

		/** @type {boolean} */
		this.should_remove = false;

		/** @type {Node | null} */
		this.replacement = null;

		/** @type {WalkerContext} */
		this.context = {
			skip: () => (this.should_skip = true),
			remove: () => (this.should_remove = true),
			replace: (node) => (this.replacement = node)
		};
	}

	/**
	 * @template {Node} Parent
	 * @param {Parent | null | undefined} parent
	 * @param {keyof Parent | null | undefined} prop
	 * @param {number | null | undefined} index
	 * @param {Node} node
	 */
	replace(parent, prop, index, node) {
		if (parent && prop) {
			if (index != null) {
				/** @type {Array<Node>} */ (parent[prop])[index] = node;
			} else {
				/** @type {Node} */ (parent[prop]) = node;
			}
		}
	}

	/**
	 * @template {Node} Parent
	 * @param {Parent | null | undefined} parent
	 * @param {keyof Parent | null | undefined} prop
	 * @param {number | null | undefined} index
	 */
	remove(parent, prop, index) {
		if (parent && prop) {
			if (index !== null && index !== undefined) {
				/** @type {Array<Node>} */ (parent[prop]).splice(index, 1);
			} else {
				delete parent[prop];
			}
		}
	}
}
