/**
 * @fileoverview Used for creating a suggested configuration based on project code.
 * @author Ian VanSchooten
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const equal = require("fast-deep-equal"),
    recConfig = require("../../conf/eslint-recommended"),
    ConfigOps = require("@eslint/eslintrc/lib/shared/config-ops"),
    { Linter } = require("../linter"),
    configRule = require("./config-rule");

const debug = require("debug")("eslint:autoconfig");
const linter = new Linter();

//------------------------------------------------------------------------------
// Data
//------------------------------------------------------------------------------

const MAX_CONFIG_COMBINATIONS = 17, // 16 combinations + 1 for severity only
    RECOMMENDED_CONFIG_NAME = "eslint:recommended";

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Information about a rule configuration, in the context of a Registry.
 * @typedef {Object}     registryItem
 * @param   {ruleConfig} config        A valid configuration for the rule
 * @param   {number}     specificity   The number of elements in the ruleConfig array
 * @param   {number}     errorCount    The number of errors encountered when linting with the config
 */

/**
 * This callback is used to measure execution status in a progress bar
 * @callback progressCallback
 * @param {number} The total number of times the callback will be called.
 */

/**
 * Create registryItems for rules
 * @param   {rulesConfig} rulesConfig Hash of rule names and arrays of ruleConfig items
 * @returns {Object}                  registryItems for each rule in provided rulesConfig
 */
function makeRegistryItems(rulesConfig) {
    return Object.keys(rulesConfig).reduce((accumulator, ruleId) => {
        accumulator[ruleId] = rulesConfig[ruleId].map(config => ({
            config,
            specificity: config.length || 1,
            errorCount: void 0
        }));
        return accumulator;
    }, {});
}

/**
 * Creates an object in which to store rule configs and error counts
 *
 * Unless a rulesConfig is provided at construction, the registry will not contain
 * any rules, only methods.  This will be useful for building up registries manually.
 *
 * Registry class
 */
class Registry {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {rulesConfig} [rulesConfig] Hash of rule names and arrays of possible configurations
     */
    constructor(rulesConfig) {
        this.rules = (rulesConfig) ? makeRegistryItems(rulesConfig) : {};
    }

    /**
     * Populate the registry with core rule configs.
     *
     * It will set the registry's `rule` property to an object having rule names
     * as keys and an array of registryItems as values.
     * @returns {void}
     */
    populateFromCoreRules() {
        const rulesConfig = configRule.createCoreRuleConfigs(/* noDeprecated = */ true);

        this.rules = makeRegistryItems(rulesConfig);
    }

    /**
     * Creates sets of rule configurations which can be used for linting
     * and initializes registry errors to zero for those configurations (side effect).
     *
     * This combines as many rules together as possible, such that the first sets
     * in the array will have the highest number of rules configured, and later sets
     * will have fewer and fewer, as not all rules have the same number of possible
     * configurations.
     *
     * The length of the returned array will be <= MAX_CONFIG_COMBINATIONS.
     * @returns {Object[]}          "rules" configurations to use for linting
     */
    buildRuleSets() {
        let idx = 0;
        const ruleIds = Object.keys(this.rules),
            ruleSets = [];

        /**
         * Add a rule configuration from the registry to the ruleSets
         *
         * This is broken out into its own function so that it doesn't need to be
         * created inside of the while loop.
         * @param   {string} rule The ruleId to add.
         * @returns {void}
         */
        const addRuleToRuleSet = function(rule) {

            /*
             * This check ensures that there is a rule configuration and that
             * it has fewer than the max combinations allowed.
             * If it has too many configs, we will only use the most basic of
             * the possible configurations.
             */
            const hasFewCombos = (this.rules[rule].length <= MAX_CONFIG_COMBINATIONS);

            if (this.rules[rule][idx] && (hasFewCombos || this.rules[rule][idx].specificity <= 2)) {

                /*
                 * If the rule has too many possible combinations, only take
                 * simple ones, avoiding objects.
                 */
                if (!hasFewCombos && typeof this.rules[rule][idx].config[1] === "object") {
                    return;
                }

                ruleSets[idx] = ruleSets[idx] || {};
                ruleSets[idx][rule] = this.rules[rule][idx].config;

                /*
                 * Initialize errorCount to zero, since this is a config which
                 * will be linted.
                 */
                this.rules[rule][idx].errorCount = 0;
            }
        }.bind(this);

        while (ruleSets.length === idx) {
            ruleIds.forEach(addRuleToRuleSet);
            idx += 1;
        }

        return ruleSets;
    }

    /**
     * Remove all items from the registry with a non-zero number of errors
     *
     * Note: this also removes rule configurations which were not linted
     * (meaning, they have an undefined errorCount).
     * @returns {void}
     */
    stripFailingConfigs() {
        const ruleIds = Object.keys(this.rules),
            newRegistry = new Registry();

        newRegistry.rules = Object.assign({}, this.rules);
        ruleIds.forEach(ruleId => {
            const errorFreeItems = newRegistry.rules[ruleId].filter(registryItem => (registryItem.errorCount === 0));

            if (errorFreeItems.length > 0) {
                newRegistry.rules[ruleId] = errorFreeItems;
            } else {
                delete newRegistry.rules[ruleId];
            }
        });

        return newRegistry;
    }

    /**
     * Removes rule configurations which were not included in a ruleSet
     * @returns {void}
     */
    stripExtraConfigs() {
        const ruleIds = Object.keys(this.rules),
            newRegistry = new Registry();

        newRegistry.rules = Object.assign({}, this.rules);
        ruleIds.forEach(ruleId => {
            newRegistry.rules[ruleId] = newRegistry.rules[ruleId].filter(registryItem => (typeof registryItem.errorCount !== "undefined"));
        });

        return newRegistry;
    }

    /**
     * Creates a registry of rules which had no error-free configs.
     * The new registry is intended to be analyzed to determine whether its rules
     * should be disabled or set to warning.
     * @returns {Registry}  A registry of failing rules.
     */
    getFailingRulesRegistry() {
        const ruleIds = Object.keys(this.rules),
            failingRegistry = new Registry();

        ruleIds.forEach(ruleId => {
            const failingConfigs = this.rules[ruleId].filter(registryItem => (registryItem.errorCount > 0));

            if (failingConfigs && failingConfigs.length === this.rules[ruleId].length) {
                failingRegistry.rules[ruleId] = failingConfigs;
            }
        });

        return failingRegistry;
    }

    /**
     * Create an eslint config for any rules which only have one configuration
     * in the registry.
     * @returns {Object} An eslint config with rules section populated
     */
    createConfig() {
        const ruleIds = Object.keys(this.rules),
            config = { rules: {} };

        ruleIds.forEach(ruleId => {
            if (this.rules[ruleId].length === 1) {
                config.rules[ruleId] = this.rules[ruleId][0].config;
            }
        });

        return config;
    }

    /**
     * Return a cloned registry containing only configs with a desired specificity
     * @param   {number} specificity Only keep configs with this specificity
     * @returns {Registry}           A registry of rules
     */
    filterBySpecificity(specificity) {
        const ruleIds = Object.keys(this.rules),
            newRegistry = new Registry();

        newRegistry.rules = Object.assign({}, this.rules);
        ruleIds.forEach(ruleId => {
            newRegistry.rules[ruleId] = this.rules[ruleId].filter(registryItem => (registryItem.specificity === specificity));
        });

        return newRegistry;
    }

    /**
     * Lint SourceCodes against all configurations in the registry, and record results
     * @param   {Object[]} sourceCodes  SourceCode objects for each filename
     * @param   {Object}   config       ESLint config object
     * @param   {progressCallback} [cb] Optional callback for reporting execution status
     * @returns {Registry}              New registry with errorCount populated
     */
    lintSourceCode(sourceCodes, config, cb) {
        let lintedRegistry = new Registry();

        lintedRegistry.rules = Object.assign({}, this.rules);

        const ruleSets = lintedRegistry.buildRuleSets();

        lintedRegistry = lintedRegistry.stripExtraConfigs();

        debug("Linting with all possible rule combinations");

        const filenames = Object.keys(sourceCodes);
        const totalFilesLinting = filenames.length * ruleSets.length;

        filenames.forEach(filename => {
            debug(`Linting file: ${filename}`);

            let ruleSetIdx = 0;

            ruleSets.forEach(ruleSet => {
                const lintConfig = Object.assign({}, config, { rules: ruleSet });
                const lintResults = linter.verify(sourceCodes[filename], lintConfig);

                lintResults.forEach(result => {

                    /*
                     * It is possible that the error is from a configuration comment
                     * in a linted file, in which case there may not be a config
                     * set in this ruleSetIdx.
                     * (https://github.com/eslint/eslint/issues/5992)
                     * (https://github.com/eslint/eslint/issues/7860)
                     */
                    if (
                        lintedRegistry.rules[result.ruleId] &&
                        lintedRegistry.rules[result.ruleId][ruleSetIdx]
                    ) {
                        lintedRegistry.rules[result.ruleId][ruleSetIdx].errorCount += 1;
                    }
                });

                ruleSetIdx += 1;

                if (cb) {
                    cb(totalFilesLinting); // eslint-disable-line node/callback-return
                }
            });

            // Deallocate for GC
            sourceCodes[filename] = null;
        });

        return lintedRegistry;
    }
}

/**
 * Extract rule configuration into eslint:recommended where possible.
 *
 * This will return a new config with `["extends": [ ..., "eslint:recommended"]` and
 * only the rules which have configurations different from the recommended config.
 * @param   {Object} config config object
 * @returns {Object}        config object using `"extends": ["eslint:recommended"]`
 */
function extendFromRecommended(config) {
    const newConfig = Object.assign({}, config);

    ConfigOps.normalizeToStrings(newConfig);

    const recRules = Object.keys(recConfig.rules).filter(ruleId => ConfigOps.isErrorSeverity(recConfig.rules[ruleId]));

    recRules.forEach(ruleId => {
        if (equal(recConfig.rules[ruleId], newConfig.rules[ruleId])) {
            delete newConfig.rules[ruleId];
        }
    });
    newConfig.extends.unshift(RECOMMENDED_CONFIG_NAME);
    return newConfig;
}


//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    Registry,
    extendFromRecommended
};
