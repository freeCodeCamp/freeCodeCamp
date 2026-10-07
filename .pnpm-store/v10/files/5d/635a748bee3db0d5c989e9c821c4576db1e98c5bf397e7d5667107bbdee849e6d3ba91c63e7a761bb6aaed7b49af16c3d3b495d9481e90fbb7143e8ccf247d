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
// Helpers
//------------------------------------------------------------------------------

/**
 * Normalizes a rule module to the new-style API
 * @param {(Function|{create: Function})} rule A rule object, which can either be a function
 * ("old-style") or an object with a `create` method ("new-style")
 * @returns {{create: Function}} A new-style rule.
 */
function normalizeRule(rule) {
    return typeof rule === "function" ? Object.assign({ create: rule }, rule) : rule;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

class Rules {
    constructor() {
        this._rules = Object.create(null);
    }

    /**
     * Registers a rule module for rule id in storage.
     * @param {string} ruleId Rule id (file name).
     * @param {Function} ruleModule Rule handler.
     * @returns {void}
     */
    define(ruleId, ruleModule) {
        this._rules[ruleId] = normalizeRule(ruleModule);
    }

    /**
     * Access rule handler by id (file name).
     * @param {string} ruleId Rule id (file name).
     * @returns {{create: Function, schema: JsonSchema[]}}
     * A rule. This is normalized to always have the new-style shape with a `create` method.
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
