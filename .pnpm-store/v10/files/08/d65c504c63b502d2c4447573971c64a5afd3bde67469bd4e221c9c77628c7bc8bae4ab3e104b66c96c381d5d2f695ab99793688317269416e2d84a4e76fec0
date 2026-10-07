const HAS_EMPTY_LINE = /\n[\r\t ]*\n/;

/**
 * Check if a string contains at least one empty line
 *
 * @param {string | undefined} string
 * @returns {boolean}
 */
export default function hasEmptyLine(string) {
	if (string === '' || string === undefined) return false;

	return HAS_EMPTY_LINE.test(string);
}
