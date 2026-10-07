/**
 * @fileoverview A class of identifiers generator for code path segments.
 *
 * Each rule uses the identifier of code path segments to store additional
 * information of the code path.
 *
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * A generator for unique ids.
 */
class IdGenerator {
	/**
	 * @param {string} prefix Optional. A prefix of generated ids.
	 */
	constructor(prefix) {
		this.prefix = String(prefix);
		this.n = 0;
	}

	/**
	 * Generates id.
	 * @returns {string} A generated id.
	 */
	next() {
		this.n = (1 + this.n) | 0;

		/* c8 ignore start */
		if (this.n < 0) {
			this.n = 1;
		} /* c8 ignore stop */

		return this.prefix + this.n;
	}
}

module.exports = IdGenerator;
