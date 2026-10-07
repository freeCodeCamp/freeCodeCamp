/**
 * Create a collection of Maps that serve to contextualize a given node.
 * This is useful to ensure that you only compare nodes that share a certain
 * context.
 *
 * All nodes are initially contextualized by their input source.
 * From there, you can contextualize them however you want.
 *
 * For a usage example, see `selector-no-descending-specificity`.
 */
export default function nodeContextLookup() {
	const contextMap = new Map();

	return {
		/**
		 * @param {import('postcss').Node} node
		 * @param {any[]} subContexts
		 * @returns {Map<any, any>}
		 */
		getContext(node, ...subContexts) {
			if (!node.source) throw new Error('The node source must be present');

			const nodeSource = node.source.input.from;
			const baseContext = creativeGetMap(contextMap, nodeSource);

			return subContexts.reduce((result, context) => creativeGetMap(result, context), baseContext);
		},
	};
}

/**
 * @param {Map<any, any>} someMap
 * @param {any} someThing
 */
function creativeGetMap(someMap, someThing) {
	if (!someMap.has(someThing)) {
		someMap.set(someThing, new Map());
	}

	return someMap.get(someThing);
}
