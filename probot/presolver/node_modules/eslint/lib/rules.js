/**
 * @fileoverview Defines a storage for rules.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const loadRules = require("./load-rules");

//------------------------------------------------------------------------------
// Privates
//------------------------------------------------------------------------------

let rules = Object.create(null);

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Registers a rule module for rule id in storage.
 * @param {string} ruleId Rule id (file name).
 * @param {Function} ruleModule Rule handler.
 * @returns {void}
 */
function define(ruleId, ruleModule) {
    rules[ruleId] = ruleModule;
}

/**
 * Loads and registers all rules from passed rules directory.
 * @param {string} [rulesDir] Path to rules directory, may be relative. Defaults to `lib/rules`.
 * @param {string} cwd Current working directory
 * @returns {void}
 */
function load(rulesDir, cwd) {
    const newRules = loadRules(rulesDir, cwd);

    Object.keys(newRules).forEach(ruleId => {
        define(ruleId, newRules[ruleId]);
    });
}

/**
 * Registers all given rules of a plugin.
 * @param {Object} plugin The plugin object to import.
 * @param {string} pluginName The name of the plugin without prefix (`eslint-plugin-`).
 * @returns {void}
 */
function importPlugin(plugin, pluginName) {
    if (plugin.rules) {
        Object.keys(plugin.rules).forEach(ruleId => {
            const qualifiedRuleId = `${pluginName}/${ruleId}`,
                rule = plugin.rules[ruleId];

            define(qualifiedRuleId, rule);
        });
    }
}

/**
 * Access rule handler by id (file name).
 * @param {string} ruleId Rule id (file name).
 * @returns {Function} Rule handler.
 */
function getHandler(ruleId) {
    if (typeof rules[ruleId] === "string") {
        return require(rules[ruleId]);
    }
    return rules[ruleId];

}

/**
 * Get an object with all currently loaded rules
 * @returns {Map} All loaded rules
 */
function getAllLoadedRules() {
    const allRules = new Map();

    Object.keys(rules).forEach(name => {
        const rule = getHandler(name);

        allRules.set(name, rule);
    });
    return allRules;
}

/**
 * Reset rules storage.
 * Should be used only in tests.
 * @returns {void}
 */
function testClear() {
    rules = Object.create(null);
}

module.exports = {
    define,
    load,
    importPlugin,
    get: getHandler,
    getAllLoadedRules,
    testClear,

    /**
     * Resets rules to its starting state. Use for tests only.
     * @returns {void}
     */
    testReset() {
        testClear();
        load();
    }
};

//------------------------------------------------------------------------------
// Initialization
//------------------------------------------------------------------------------

// loads built-in rules
load();
