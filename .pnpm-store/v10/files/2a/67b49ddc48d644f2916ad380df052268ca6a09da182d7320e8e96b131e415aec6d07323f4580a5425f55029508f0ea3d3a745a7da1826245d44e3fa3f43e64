import {
	aNPlusBOfSNotationPseudoClasses,
	logicalCombinationsPseudoClasses,
} from '../reference/selectors.mjs';

/**
 * Check whether a node is a context-functional pseudo-class (i.e. either a logical combination
 * or a 'aNPlusBOfSNotationPseudoClasses' / tree-structural pseudo-class)
 *
 * @param {import('postcss-selector-parser').Node | import('postcss-selector-parser').Container | undefined} node - postcss-selector-parser node (of type pseudo)
 * @returns {node is import('postcss-selector-parser').Pseudo} If `true`, the node is a context-functional pseudo-class
 */
export default function isContextFunctionalPseudoClass(node) {
	if (node?.type === 'pseudo') {
		const normalisedParentName = node.value.toLowerCase().replace(/:+/, '');

		return (
			logicalCombinationsPseudoClasses.has(normalisedParentName) ||
			aNPlusBOfSNotationPseudoClasses.has(normalisedParentName)
		);
	}

	return false;
}
