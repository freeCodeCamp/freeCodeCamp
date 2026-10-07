import { isAtRule, isRoot, isRule } from './typeGuards.mjs';

/** @typedef {import('postcss').Root} Root */
/** @typedef {import('postcss').Root} Document */
/** @typedef {import('postcss').Node} PostcssNode */
/** @typedef {import('postcss').Container} PostcssContainerNode */
/** @typedef {import('postcss').Declaration} Declaration */
/** @typedef {(callbackFn: (decl: Declaration, index: number, decls: Declaration[]) => void) => void} EachDeclaration */

/**
 * @param {PostcssNode} node
 * @returns {node is PostcssContainerNode}
 */
function isContainerNode(node) {
	return isRule(node) || isAtRule(node) || isRoot(node);
}

/**
 * In order to accommodate nested blocks (postcss-nested),
 * we need to run a shallow loop (instead of eachDecl() or eachRule(),
 * which loop recursively) and allow each nested block to accumulate
 * its own list of properties -- so that a property in a nested rule
 * does not conflict with the same property in the parent rule
 * executes a provided function once for each declaration block.
 *
 * @param {Root | Document} root - root element of file.
 * @param {(eachDecl: EachDeclaration) => void} callback - Function to execute for each declaration block
 *
 * @returns {void}
 */
export default function eachDeclarationBlock(root, callback) {
	/**
	 * @param {PostcssNode} statement
	 *
	 * @returns {void}
	 */
	function each(statement) {
		if (!isContainerNode(statement)) return;

		if (statement.nodes && statement.nodes.length) {
			/** @type {Declaration[]} */
			const decls = [];

			for (const node of statement.nodes) {
				if (node.type === 'decl') {
					decls.push(node);
				}

				each(node);
			}

			if (decls.length) {
				callback(decls.forEach.bind(decls));
			}
		}
	}

	each(root);
}
