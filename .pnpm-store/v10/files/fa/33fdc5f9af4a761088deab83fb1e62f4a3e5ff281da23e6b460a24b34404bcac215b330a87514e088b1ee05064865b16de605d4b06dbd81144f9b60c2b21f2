/**
 * @fileoverview Defines a storage for rules.
 * @author Nicholas C. Zakas
 * @author aladdin-add
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const builtInRules = require("../rules");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/** @typedef {import("../types").Rule.RuleModule} Rule */

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * A storage for rules.
 */
class Rules {
	constructor() {
		this._rules = Object.create(null);
	}

	/**
	 * Registers a rule module for rule id in storage.
	 * @param {string} ruleId Rule id (file name).
	 * @param {Rule} rule Rule object.
	 * @returns {void}
	 */
	define(ruleId, rule) {
		this._rules[ruleId] = rule;
	}

	/**
	 * Access rule handler by id (file name).
	 * @param {string} ruleId Rule id (file name).
	 * @returns {Rule} Rule object.
	 */
	get(ruleId) {
		if (typeof this._rules[ruleId] === "string") {
			this.define(ruleId, require(this._rules[ruleId]));
		}
		if (this._rules[ruleId]) {
			return this._rules[ruleId];
		}
		if (builtInRules.has(ruleId)) {
			return builtInRules.get(ruleId);
		}

		return null;
	}

	*[Symbol.iterator]() {
		yield* builtInRules;

		for (const ruleId of Object.keys(this._rules)) {
			yield [ruleId, this.get(ruleId)];
		}
	}
}

module.exports = Rules;
