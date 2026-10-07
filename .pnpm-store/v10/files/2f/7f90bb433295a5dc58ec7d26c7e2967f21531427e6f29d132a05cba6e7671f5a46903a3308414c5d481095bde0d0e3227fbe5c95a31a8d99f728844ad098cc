/**
 * @fileoverview `Map` to load rules lazily.
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

const debug = require("debug")("eslint:rules");

/** @typedef {import("./types").Rule} Rule */

/**
 * The `Map` object that loads each rule when it's accessed.
 * @example
 * const rules = new LazyLoadingRuleMap([
 *     ["eqeqeq", () => require("eqeqeq")],
 *     ["semi", () => require("semi")],
 *     ["no-unused-vars", () => require("no-unused-vars")],
 * ])
 *
 * rules.get("semi") // call `() => require("semi")` here.
 *
 * @extends {Map<string, () => Rule>}
 */
class LazyLoadingRuleMap extends Map {

    /**
     * Initialize this map.
     * @param {Array<[string, function(): Rule]>} loaders The rule loaders.
     */
    constructor(loaders) {
        let remaining = loaders.length;

        super(
            debug.enabled
                ? loaders.map(([ruleId, load]) => {
                    let cache = null;

                    return [
                        ruleId,
                        () => {
                            if (!cache) {
                                debug("Loading rule %o (remaining=%d)", ruleId, --remaining);
                                cache = load();
                            }
                            return cache;
                        }
                    ];
                })
                : loaders
        );

        // `super(...iterable)` uses `this.set()`, so disable it here.
        Object.defineProperty(LazyLoadingRuleMap.prototype, "set", {
            configurable: true,
            value: void 0
        });
    }

    /**
     * Get a rule.
     * Each rule will be loaded on the first access.
     * @param {string} ruleId The rule ID to get.
     * @returns {Rule|undefined} The rule.
     */
    get(ruleId) {
        const load = super.get(ruleId);

        return load && load();
    }

    /**
     * Iterate rules.
     * @returns {IterableIterator<Rule>} Rules.
     */
    *values() {
        for (const load of super.values()) {
            yield load();
        }
    }

    /**
     * Iterate rules.
     * @returns {IterableIterator<[string, Rule]>} Rules.
     */
    *entries() {
        for (const [ruleId, load] of super.entries()) {
            yield [ruleId, load()];
        }
    }

    /**
     * Call a function with each rule.
     * @param {Function} callbackFn The callback function.
     * @param {any} [thisArg] The object to pass to `this` of the callback function.
     * @returns {void}
     */
    forEach(callbackFn, thisArg) {
        for (const [ruleId, load] of super.entries()) {
            callbackFn.call(thisArg, load(), ruleId, this);
        }
    }
}

// Forbid mutation.
Object.defineProperties(LazyLoadingRuleMap.prototype, {
    clear: { configurable: true, value: void 0 },
    delete: { configurable: true, value: void 0 },
    [Symbol.iterator]: {
        configurable: true,
        writable: true,
        value: LazyLoadingRuleMap.prototype.entries
    }
});

module.exports = { LazyLoadingRuleMap };
