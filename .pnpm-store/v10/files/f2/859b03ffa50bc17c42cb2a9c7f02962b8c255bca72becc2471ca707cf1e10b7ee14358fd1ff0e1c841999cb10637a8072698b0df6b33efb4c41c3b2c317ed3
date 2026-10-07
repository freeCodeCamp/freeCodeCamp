import { DEFAULT_FIX_MODE } from '../constants.mjs';

/** @import { FixMode } from 'stylelint' */

/**
 * Normalize the fix mode based on options and configuration.
 * If the input is unknown, this returns `undefined`.
 *
 * @param {unknown} fix
 * @returns {FixMode | undefined}
 */
export default function normalizeFixMode(fix) {
	if (fix === true || fix === 'true' || fix === '' || fix === DEFAULT_FIX_MODE) {
		return DEFAULT_FIX_MODE;
	}

	if (fix === 'strict') {
		return 'strict';
	}

	return undefined;
}
