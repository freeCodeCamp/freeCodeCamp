/**
 * Check if two ranges of source offsets overlap.
 * This function assumes that the provided ranges have a width of at least one column.
 *
 * @param {[number, number]} a
 * @param {[number, number]} b
 * @returns {boolean}
 */
export default function rangesOverlap(a, b) {
	// a: ----
	// b:      ----
	if (a[1] <= b[0]) return false;

	// a:      ----
	// b: ----
	if (a[0] >= b[1]) return false;

	return true;
}
