const ISO_10646_CHARACTERS = /\\[0-9a-f]{1,6}(\\r\\n|[ \t\r\n\f])?/gi;
const SINGLE_ESCAPED_CHARACTERS = /\\./g;
const NON_WORD_OR_DASH = /[^\w-]/;
const DIGIT = /\d/;

/**
 * Returns whether a string is a valid CSS identifier
 * (i.e. only alphanumeric characters, `-`, and `_`;
 * does not have a leading digit, leading dash followed by digit, or two leading dashes)
 * furthermore, any escaped or ISO 10646 characters are allowed.
 * @see https://www.w3.org/TR/CSS2/syndata.html#value-def-identifier
 * @param {string} ident
 * @returns {boolean}
 */
export default function isValidIdentifier(ident) {
	if (!ident || ident.trim() === '') {
		return false;
	}

	// trims, removes ISO 10646 characters, and singly-escaped characters
	const trimmedIdent = ident
		.trim()
		.replace(ISO_10646_CHARACTERS, '')
		.replace(SINGLE_ESCAPED_CHARACTERS, '');

	if (NON_WORD_OR_DASH.test(trimmedIdent)) {
		return false;
	}

	if (DIGIT.test(trimmedIdent.charAt(0))) {
		return false;
	}

	if (trimmedIdent.charAt(0) === '-' && DIGIT.test(trimmedIdent.charAt(1))) {
		return false;
	}

	return true;
}
