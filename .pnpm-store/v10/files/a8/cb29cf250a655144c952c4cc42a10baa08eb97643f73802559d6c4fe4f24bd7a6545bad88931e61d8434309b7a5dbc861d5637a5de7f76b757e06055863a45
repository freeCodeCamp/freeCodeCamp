import valueParser from 'postcss-value-parser';

import { fontSizeKeywords } from '../reference/keywords.mjs';
import { lengthUnits } from '../reference/units.mjs';

/**
 * Check if a word is a font-size value.
 *
 * @param {string} word
 * @returns {boolean}
 */
export default function isValidFontSize(word) {
	if (!word) {
		return false;
	}

	if (fontSizeKeywords.has(word)) {
		return true;
	}

	const numberUnit = valueParser.unit(word);

	if (!numberUnit) {
		return false;
	}

	const unit = numberUnit.unit;

	if (unit === '%') {
		return true;
	}

	if (lengthUnits.has(unit.toLowerCase())) {
		return true;
	}

	return false;
}
