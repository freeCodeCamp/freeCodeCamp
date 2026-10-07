import hasLessInterpolation from './hasLessInterpolation.mjs';
import hasPsvInterpolation from './hasPsvInterpolation.mjs';
import hasScssInterpolation from './hasScssInterpolation.mjs';
import hasTplInterpolation from './hasTplInterpolation.mjs';

const IS_LESS_VARIABLE_IN_URL = /^@@?[\w-]+$/;
const IS_SCSS_VARIABLE_IN_URL = /^[$\s\w+\-,./*'"@#?]+$/;

/**
 * Check whether a URL is standard
 *
 * @param {string} url
 * @returns {boolean}
 */
export default function isStandardSyntaxUrl(url) {
	if (url.length === 0) {
		return true;
	}

	// Sass interpolation works anywhere
	if (hasScssInterpolation(url) || hasTplInterpolation(url) || hasPsvInterpolation(url)) {
		return false;
	}

	// Inside `'` and `"` work only LESS interpolation
	if ((url.startsWith(`'`) && url.endsWith(`'`)) || (url.startsWith(`"`) && url.endsWith(`"`))) {
		if (hasLessInterpolation(url)) {
			return false;
		}

		return true;
	}

	// Less variable works only at the beginning
	// Check is less variable, allow use '@url/some/path'
	// https://github.com/less/less.js/blob/3.x/lib/less/parser/parser.js#L547
	if (url.startsWith('@') && IS_LESS_VARIABLE_IN_URL.test(url)) {
		return false;
	}

	// In url without quotes scss variable can be everywhere
	// But in this case it is allowed to use only specific characters
	// Also forbidden "/" at the end of url
	if (url.includes('$') && IS_SCSS_VARIABLE_IN_URL.test(url) && !url.endsWith('/')) {
		return false;
	}

	return true;
}
