const HAS_VALID_HEX = /#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})(?:$|[^\da-f])/i;

/**
 * Check if a value contains a valid 3, 4, 6 or 8 digit hex
 *
 * @param {string} value
 * @returns {boolean}
 */
export default function hasValidHex(value) {
	return HAS_VALID_HEX.test(value);
}
