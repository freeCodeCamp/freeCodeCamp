import hasInterpolation from './hasInterpolation.mjs';

/**
 * Check whether a selector is standard
 *
 * @param {string} selector
 * @returns {boolean}
 */
export default function isStandardSyntaxSelector(selector) {
	// SCSS or Less interpolation
	if (hasInterpolation(selector)) {
		return false;
	}

	// SCSS placeholder selectors
	if (selector.startsWith('%')) {
		return false;
	}

	// SCSS nested properties
	if (selector.endsWith(':')) {
		return false;
	}

	// Less :extend()
	if (/:extend(?:\(.*?\))?/.test(selector)) {
		return false;
	}

	// Less mixin with resolved nested selectors (e.g. .foo().bar or .foo(@a, @b)[bar])
	if (/\.[\w-]+\(.*\).+/.test(selector)) {
		return false;
	}

	// Less non-outputting mixin definition (e.g. .mixin() {})
	if (selector.endsWith(')') && !selector.includes(':')) {
		return false;
	}

	// Less Parametric mixins (e.g. .mixin(@variable: x) {})
	if (/\(@.*\)$/.test(selector)) {
		return false;
	}

	// ERB template tags
	if (selector.includes('<%') || selector.includes('%>')) {
		return false;
	}

	//  SCSS and Less comments
	if (selector.includes('//')) {
		return false;
	}

	return true;
}
