import svgTags from 'svg-tags';

import mathMLTags from './mathMLTags.mjs';

/**
 * Check whether a type selector is a custom element
 *
 * @param {string} selector
 * @returns {boolean}
 */
export default function isCustomElement(selector) {
	if (!/^[a-z]/.test(selector)) {
		return false;
	}

	if (!selector.includes('-')) {
		return false;
	}

	const selectorLowerCase = selector.toLowerCase();

	if (selectorLowerCase !== selector) {
		return false;
	}

	if (svgTags.includes(selectorLowerCase)) {
		return false;
	}

	if (mathMLTags.includes(selectorLowerCase)) {
		return false;
	}

	return true;
}
