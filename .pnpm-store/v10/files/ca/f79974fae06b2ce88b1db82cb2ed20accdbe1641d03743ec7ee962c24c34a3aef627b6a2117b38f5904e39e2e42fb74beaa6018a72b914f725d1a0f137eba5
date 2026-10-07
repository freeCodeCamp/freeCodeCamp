import isStandardSyntaxSelector from './isStandardSyntaxSelector.mjs';

/**
 * Check whether a Node is a standard rule
 *
 * @param {import('postcss').Rule | import('postcss-less').Rule} rule
 * @returns {boolean}
 */
export default function isStandardSyntaxRule(rule) {
	if (rule.type !== 'rule') {
		return false;
	}

	// Ignore Less &:extend rule
	if ('extend' in rule && rule.extend) {
		return false;
	}

	if (!isStandardSyntaxSelector(rule.selector)) {
		return false;
	}

	return true;
}
