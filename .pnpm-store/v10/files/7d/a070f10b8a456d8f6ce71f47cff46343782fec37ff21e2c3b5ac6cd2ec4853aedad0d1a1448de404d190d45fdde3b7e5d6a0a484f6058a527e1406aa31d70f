/**
 * @fileoverview `ConfigArray` class.
 *
 * `ConfigArray` class expresses the full of a configuration. It has the entry
 * config file, base config files that were extended, loaded parsers, and loaded
 * plugins.
 *
 * `ConfigArray` class provides three properties and two methods.
 *
 * - `pluginEnvironments`
 * - `pluginProcessors`
 * - `pluginRules`
 *      The `Map` objects that contain the members of all plugins that this
 *      config array contains. Those map objects don't have mutation methods.
 *      Those keys are the member ID such as `pluginId/memberName`.
 * - `isRoot()`
 *      If `true` then this configuration has `root:true` property.
 * - `extractConfig(filePath)`
 *      Extract the final configuration for a given file. This means merging
 *      every config array element which that `criteria` property matched. The
 *      `filePath` argument must be an absolute path.
 *
 * `ConfigArrayFactory` provides the loading logic of config files.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { ExtractedConfig } from "./extracted-config.js";
import { IgnorePattern } from "./ignore-pattern.js";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

// Define types for VSCode IntelliSense.
/** @typedef {import("../../shared/types").Environment} Environment */
/** @typedef {import("../../shared/types").GlobalConf} GlobalConf */
/** @typedef {import("../../shared/types").RuleConf} RuleConf */
/** @typedef {import("../../shared/types").Rule} Rule */
/** @typedef {import("../../shared/types").Plugin} Plugin */
/** @typedef {import("../../shared/types").Processor} Processor */
/** @typedef {import("./config-dependency").DependentParser} DependentParser */
/** @typedef {import("./config-dependency").DependentPlugin} DependentPlugin */
/** @typedef {import("./override-tester")["OverrideTester"]} OverrideTester */

/**
 * @typedef {Object} ConfigArrayElement
 * @property {string} name The name of this config element.
 * @property {string} filePath The path to the source file of this config element.
 * @property {InstanceType<OverrideTester>|null} criteria The tester for the `files` and `excludedFiles` of this config element.
 * @property {Record<string, boolean>|undefined} env The environment settings.
 * @property {Record<string, GlobalConf>|undefined} globals The global variable settings.
 * @property {IgnorePattern|undefined} ignorePattern The ignore patterns.
 * @property {boolean|undefined} noInlineConfig The flag that disables directive comments.
 * @property {DependentParser|undefined} parser The parser loader.
 * @property {Object|undefined} parserOptions The parser options.
 * @property {Record<string, DependentPlugin>|undefined} plugins The plugin loaders.
 * @property {string|undefined} processor The processor name to refer plugin's processor.
 * @property {boolean|undefined} reportUnusedDisableDirectives The flag to report unused `eslint-disable` comments.
 * @property {boolean|undefined} root The flag to express root.
 * @property {Record<string, RuleConf>|undefined} rules The rule settings
 * @property {Object|undefined} settings The shared settings.
 * @property {"config" | "ignore" | "implicit-processor"} type The element type.
 */

/**
 * @typedef {Object} ConfigArrayInternalSlots
 * @property {Map<string, ExtractedConfig>} cache The cache to extract configs.
 * @property {ReadonlyMap<string, Environment>|null} envMap The map from environment ID to environment definition.
 * @property {ReadonlyMap<string, Processor>|null} processorMap The map from processor ID to environment definition.
 * @property {ReadonlyMap<string, Rule>|null} ruleMap The map from rule ID to rule definition.
 */

/** @type {WeakMap<ConfigArray, ConfigArrayInternalSlots>} */
const internalSlotsMap = new class extends WeakMap {
    get(key) {
        let value = super.get(key);

        if (!value) {
            value = {
                cache: new Map(),
                envMap: null,
                processorMap: null,
                ruleMap: null
            };
            super.set(key, value);
        }

        return value;
    }
}();

/**
 * Get the indices which are matched to a given file.
 * @param {ConfigArrayElement[]} elements The elements.
 * @param {string} filePath The path to a target file.
 * @returns {number[]} The indices.
 */
function getMatchedIndices(elements, filePath) {
    const indices = [];

    for (let i = elements.length - 1; i >= 0; --i) {
        const element = elements[i];

        if (!element.criteria || (filePath && element.criteria.test(filePath))) {
            indices.push(i);
        }
    }

    return indices;
}

/**
 * Check if a value is a non-null object.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is a non-null object.
 */
function isNonNullObject(x) {
    return typeof x === "object" && x !== null;
}

/**
 * Merge two objects.
 *
 * Assign every property values of `y` to `x` if `x` doesn't have the property.
 * If `x`'s property value is an object, it does recursive.
 * @param {Object} target The destination to merge
 * @param {Object|undefined} source The source to merge.
 * @returns {void}
 */
function mergeWithoutOverwrite(target, source) {
    if (!isNonNullObject(source)) {
        return;
    }

    for (const key of Object.keys(source)) {
        if (key === "__proto__") {
            continue;
        }

        if (isNonNullObject(target[key])) {
            mergeWithoutOverwrite(target[key], source[key]);
        } else if (target[key] === void 0) {
            if (isNonNullObject(source[key])) {
                target[key] = Array.isArray(source[key]) ? [] : {};
                mergeWithoutOverwrite(target[key], source[key]);
            } else if (source[key] !== void 0) {
                target[key] = source[key];
            }
        }
    }
}

/**
 * The error for plugin conflicts.
 */
class PluginConflictError extends Error {

    /**
     * Initialize this error object.
     * @param {string} pluginId The plugin ID.
     * @param {{filePath:string, importerName:string}[]} plugins The resolved plugins.
     */
    constructor(pluginId, plugins) {
        super(`Plugin "${pluginId}" was conflicted between ${plugins.map(p => `"${p.importerName}"`).join(" and ")}.`);
        this.messageTemplate = "plugin-conflict";
        this.messageData = { pluginId, plugins };
    }
}

/**
 * Merge plugins.
 * `target`'s definition is prior to `source`'s.
 * @param {Record<string, DependentPlugin>} target The destination to merge
 * @param {Record<string, DependentPlugin>|undefined} source The source to merge.
 * @returns {void}
 * @throws {PluginConflictError} When a plugin was conflicted.
 */
function mergePlugins(target, source) {
    if (!isNonNullObject(source)) {
        return;
    }

    for (const key of Object.keys(source)) {
        if (key === "__proto__") {
            continue;
        }
        const targetValue = target[key];
        const sourceValue = source[key];

        // Adopt the plugin which was found at first.
        if (targetValue === void 0) {
            if (sourceValue.error) {
                throw sourceValue.error;
            }
            target[key] = sourceValue;
        } else if (sourceValue.filePath !== targetValue.filePath) {
            throw new PluginConflictError(key, [
                {
                    filePath: targetValue.filePath,
                    importerName: targetValue.importerName
                },
                {
                    filePath: sourceValue.filePath,
                    importerName: sourceValue.importerName
                }
            ]);
        }
    }
}

/**
 * Merge rule configs.
 * `target`'s definition is prior to `source`'s.
 * @param {Record<string, Array>} target The destination to merge
 * @param {Record<string, RuleConf>|undefined} source The source to merge.
 * @returns {void}
 */
function mergeRuleConfigs(target, source) {
    if (!isNonNullObject(source)) {
        return;
    }

    for (const key of Object.keys(source)) {
        if (key === "__proto__") {
            continue;
        }
        const targetDef = target[key];
        const sourceDef = source[key];

        // Adopt the rule config which was found at first.
        if (targetDef === void 0) {
            if (Array.isArray(sourceDef)) {
                target[key] = [...sourceDef];
            } else {
                target[key] = [sourceDef];
            }

        /*
         * If the first found rule config is severity only and the current rule
         * config has options, merge the severity and the options.
         */
        } else if (
            targetDef.length === 1 &&
            Array.isArray(sourceDef) &&
            sourceDef.length >= 2
        ) {
            targetDef.push(...sourceDef.slice(1));
        }
    }
}

/**
 * Create the extracted config.
 * @param {ConfigArray} instance The config elements.
 * @param {number[]} indices The indices to use.
 * @returns {ExtractedConfig} The extracted config.
 * @throws {Error} When a plugin is conflicted.
 */
function createConfig(instance, indices) {
    const config = new ExtractedConfig();
    const ignorePatterns = [];

    // Merge elements.
    for (const index of indices) {
        const element = instance[index];

        // Adopt the parser which was found at first.
        if (!config.parser && element.parser) {
            if (element.parser.error) {
                throw element.parser.error;
            }
            config.parser = element.parser;
        }

        // Adopt the processor which was found at first.
        if (!config.processor && element.processor) {
            config.processor = element.processor;
        }

        // Adopt the noInlineConfig which was found at first.
        if (config.noInlineConfig === void 0 && element.noInlineConfig !== void 0) {
            config.noInlineConfig = element.noInlineConfig;
            config.configNameOfNoInlineConfig = element.name;
        }

        // Adopt the reportUnusedDisableDirectives which was found at first.
        if (config.reportUnusedDisableDirectives === void 0 && element.reportUnusedDisableDirectives !== void 0) {
            config.reportUnusedDisableDirectives = element.reportUnusedDisableDirectives;
        }

        // Collect ignorePatterns
        if (element.ignorePattern) {
            ignorePatterns.push(element.ignorePattern);
        }

        // Merge others.
        mergeWithoutOverwrite(config.env, element.env);
        mergeWithoutOverwrite(config.globals, element.globals);
        mergeWithoutOverwrite(config.parserOptions, element.parserOptions);
        mergeWithoutOverwrite(config.settings, element.settings);
        mergePlugins(config.plugins, element.plugins);
        mergeRuleConfigs(config.rules, element.rules);
    }

    // Create the predicate function for ignore patterns.
    if (ignorePatterns.length > 0) {
        config.ignores = IgnorePattern.createIgnore(ignorePatterns.reverse());
    }

    return config;
}

/**
 * Collect definitions.
 * @template T, U
 * @param {string} pluginId The plugin ID for prefix.
 * @param {Record<string,T>} defs The definitions to collect.
 * @param {Map<string, U>} map The map to output.
 * @returns {void}
 */
function collect(pluginId, defs, map) {
    if (defs) {
        const prefix = pluginId && `${pluginId}/`;

        for (const [key, value] of Object.entries(defs)) {
            map.set(`${prefix}${key}`, value);
        }
    }
}

/**
 * Delete the mutation methods from a given map.
 * @param {Map<any, any>} map The map object to delete.
 * @returns {void}
 */
function deleteMutationMethods(map) {
    Object.defineProperties(map, {
        clear: { configurable: true, value: void 0 },
        delete: { configurable: true, value: void 0 },
        set: { configurable: true, value: void 0 }
    });
}

/**
 * Create `envMap`, `processorMap`, `ruleMap` with the plugins in the config array.
 * @param {ConfigArrayElement[]} elements The config elements.
 * @param {ConfigArrayInternalSlots} slots The internal slots.
 * @returns {void}
 */
function initPluginMemberMaps(elements, slots) {
    const processed = new Set();

    slots.envMap = new Map();
    slots.processorMap = new Map();
    slots.ruleMap = new Map();

    for (const element of elements) {
        if (!element.plugins) {
            continue;
        }

        for (const [pluginId, value] of Object.entries(element.plugins)) {
            const plugin = value.definition;

            if (!plugin || processed.has(pluginId)) {
                continue;
            }
            processed.add(pluginId);

            collect(pluginId, plugin.environments, slots.envMap);
            collect(pluginId, plugin.processors, slots.processorMap);
            collect(pluginId, plugin.rules, slots.ruleMap);
        }
    }

    deleteMutationMethods(slots.envMap);
    deleteMutationMethods(slots.processorMap);
    deleteMutationMethods(slots.ruleMap);
}

/**
 * Create `envMap`, `processorMap`, `ruleMap` with the plugins in the config array.
 * @param {ConfigArray} instance The config elements.
 * @returns {ConfigArrayInternalSlots} The extracted config.
 */
function ensurePluginMemberMaps(instance) {
    const slots = internalSlotsMap.get(instance);

    if (!slots.ruleMap) {
        initPluginMemberMaps(instance, slots);
    }

    return slots;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * The Config Array.
 *
 * `ConfigArray` instance contains all settings, parsers, and plugins.
 * You need to call `ConfigArray#extractConfig(filePath)` method in order to
 * extract, merge and get only the config data which is related to an arbitrary
 * file.
 * @extends {Array<ConfigArrayElement>}
 */
class ConfigArray extends Array {

    /**
     * Get the plugin environments.
     * The returned map cannot be mutated.
     * @type {ReadonlyMap<string, Environment>} The plugin environments.
     */
    get pluginEnvironments() {
        return ensurePluginMemberMaps(this).envMap;
    }

    /**
     * Get the plugin processors.
     * The returned map cannot be mutated.
     * @type {ReadonlyMap<string, Processor>} The plugin processors.
     */
    get pluginProcessors() {
        return ensurePluginMemberMaps(this).processorMap;
    }

    /**
     * Get the plugin rules.
     * The returned map cannot be mutated.
     * @returns {ReadonlyMap<string, Rule>} The plugin rules.
     */
    get pluginRules() {
        return ensurePluginMemberMaps(this).ruleMap;
    }

    /**
     * Check if this config has `root` flag.
     * @returns {boolean} `true` if this config array is root.
     */
    isRoot() {
        for (let i = this.length - 1; i >= 0; --i) {
            const root = this[i].root;

            if (typeof root === "boolean") {
                return root;
            }
        }
        return false;
    }

    /**
     * Extract the config data which is related to a given file.
     * @param {string} filePath The absolute path to the target file.
     * @returns {ExtractedConfig} The extracted config data.
     */
    extractConfig(filePath) {
        const { cache } = internalSlotsMap.get(this);
        const indices = getMatchedIndices(this, filePath);
        const cacheKey = indices.join(",");

        if (!cache.has(cacheKey)) {
            cache.set(cacheKey, createConfig(this, indices));
        }

        return cache.get(cacheKey);
    }

    /**
     * Check if a given path is an additional lint target.
     * @param {string} filePath The absolute path to the target file.
     * @returns {boolean} `true` if the file is an additional lint target.
     */
    isAdditionalTargetPath(filePath) {
        for (const { criteria, type } of this) {
            if (
                type === "config" &&
                criteria &&
                !criteria.endsWithWildcard &&
                criteria.test(filePath)
            ) {
                return true;
            }
        }
        return false;
    }
}

/**
 * Get the used extracted configs.
 * CLIEngine will use this method to collect used deprecated rules.
 * @param {ConfigArray} instance The config array object to get.
 * @returns {ExtractedConfig[]} The used extracted configs.
 * @private
 */
function getUsedExtractedConfigs(instance) {
    const { cache } = internalSlotsMap.get(instance);

    return Array.from(cache.values());
}


export {
    ConfigArray,
    getUsedExtractedConfigs
};
