import hasLessInterpolation from './hasLessInterpolation.mjs';
import hasPsvInterpolation from './hasPsvInterpolation.mjs';
import hasScssInterpolation from './hasScssInterpolation.mjs';
import hasTplInterpolation from './hasTplInterpolation.mjs';

/**
 * Check whether a string has interpolation
 *
 * @param {string} string
 * @returns {boolean} If `true`, a string has interpolation
 */
export default function hasInterpolation(string) {
	// SCSS or Less interpolation
	if (
		hasLessInterpolation(string) ||
		hasScssInterpolation(string) ||
		hasTplInterpolation(string) ||
		hasPsvInterpolation(string)
	) {
		return true;
	}

	return false;
}
