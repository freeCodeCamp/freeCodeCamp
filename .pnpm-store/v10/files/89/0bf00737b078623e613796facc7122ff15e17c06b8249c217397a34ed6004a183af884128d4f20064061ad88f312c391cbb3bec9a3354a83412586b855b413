/**
 * Check whether a combinator is standard
 *
 * @param {import('postcss-selector-parser').Combinator} node postcss-selector-parser node (of type combinator)
 * @returns {boolean} If `true`, the combinator is standard
 */
export default function isStandardSyntaxCombinator(node) {
	// if it's not a combinator, then it's not a standard combinator
	if (node.type !== 'combinator') {
		return false;
	}

	// Ignore reference combinators like `/deep/`
	if (node.value.startsWith('/') || node.value.endsWith('/')) {
		return false;
	}

	// ignore the combinators that are the first or last node in their container
	if (node.parent !== undefined && node.parent !== null) {
		const parent = node.parent;

		if (node === parent.first) {
			return false;
		}

		if (node === parent.last) {
			return false;
		}
	}

	return true;
}
