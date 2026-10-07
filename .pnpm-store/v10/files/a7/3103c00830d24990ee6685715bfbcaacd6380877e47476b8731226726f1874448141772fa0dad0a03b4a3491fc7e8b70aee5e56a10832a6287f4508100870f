/**
 * @fileoverview Interpolate keys from an object into a string with {{ }} markers.
 * @author Jed Fox
 */

"use strict";

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Returns a global expression matching placeholders in messages.
 * @returns {RegExp} Global regular expression matching placeholders
 */
function getPlaceholderMatcher() {
	return /\{\{([^{}]+)\}\}/gu;
}

/**
 * Replaces {{ placeholders }} in the message with the provided data.
 * Does not replace placeholders not available in the data.
 * @param {string} text Original message with potential placeholders
 * @param {Record<string, string>} data Map of placeholder name to its value
 * @returns {string} Message with replaced placeholders
 */
function interpolate(text, data) {
	if (!data) {
		return text;
	}

	const matcher = getPlaceholderMatcher();

	// Substitution content for any {{ }} markers.
	return text.replace(matcher, (fullMatch, termWithWhitespace) => {
		const term = termWithWhitespace.trim();

		if (term in data) {
			return data[term];
		}

		// Preserve old behavior: If parameter name not provided, don't replace it.
		return fullMatch;
	});
}

module.exports = {
	getPlaceholderMatcher,
	interpolate,
};
