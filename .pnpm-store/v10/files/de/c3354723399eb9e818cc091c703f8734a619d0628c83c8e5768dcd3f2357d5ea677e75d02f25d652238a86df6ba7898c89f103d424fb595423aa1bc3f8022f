import { keyframeSelectorKeywords, namedTimelineRangeKeywords } from '../reference/keywords.mjs';

const HAS_TIMELINE_RANGE = new RegExp(
	`^(?:${[...namedTimelineRangeKeywords.values()].join('|')})\\s+(?:\\d+|\\d*\\.\\d+)%$`,
	'i',
);

/**
 * Check whether a string is a keyframe selector.
 *
 * @param {string} selector
 * @returns {boolean}
 */
export default function isKeyframeSelector(selector) {
	if (keyframeSelectorKeywords.has(selector)) {
		return true;
	}

	// Percentages
	if (/^(?:\d+|\d*\.\d+)%$/.test(selector)) {
		return true;
	}

	if (HAS_TIMELINE_RANGE.test(selector)) {
		return true;
	}

	return false;
}
