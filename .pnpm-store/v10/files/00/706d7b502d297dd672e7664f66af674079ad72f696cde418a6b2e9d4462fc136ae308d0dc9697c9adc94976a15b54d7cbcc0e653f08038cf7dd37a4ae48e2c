import {
	aNPlusBNotationPseudoClasses,
	aNPlusBOfSNotationPseudoClasses,
	linguisticPseudoClasses,
	shadowTreePseudoElements,
} from '../reference/selectors.mjs';

/**
 * Check whether a type selector is standard
 *
 * @param {import('postcss-selector-parser').Tag} node postcss-selector-parser node (of type tag)
 * @returns {boolean} If `true`, the type selector is standard
 */
export default function isStandardSyntaxTypeSelector(node) {
	// postcss-selector-parser includes the arguments to nth-child() functions
	// as "tags", so we need to ignore them ourselves.
	// The fake-tag's "parent" is actually a selector node, whose parent
	// should be the :nth-child pseudo node.
	if (!node.parent || !node.parent.parent) {
		return false;
	}

	const _node$parent$parent = node.parent.parent;
	const parentType = _node$parent$parent.type;
	const parentValue = _node$parent$parent.value;

	if (parentValue) {
		const normalisedParentName = parentValue.toLowerCase().replace(/:+/, '');

		if (
			parentType === 'pseudo' &&
			(aNPlusBNotationPseudoClasses.has(normalisedParentName) ||
				aNPlusBOfSNotationPseudoClasses.has(normalisedParentName) ||
				linguisticPseudoClasses.has(normalisedParentName) ||
				shadowTreePseudoElements.has(normalisedParentName))
		) {
			return false;
		}
	}

	// &-bar is a nesting selector combined with a suffix
	if (node.prev()?.type === 'nesting') {
		return false;
	}

	if (node.value.startsWith('%')) {
		return false;
	}

	// Reference combinators like `/deep/`
	if (node.value.startsWith('/') && node.value.endsWith('/')) {
		return false;
	}

	return true;
}
