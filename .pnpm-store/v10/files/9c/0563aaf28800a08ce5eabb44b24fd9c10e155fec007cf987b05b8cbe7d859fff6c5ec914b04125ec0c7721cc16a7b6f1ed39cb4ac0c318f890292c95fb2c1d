'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var debugOrig = require('debug');
var fs = require('node:fs');
var importFresh = require('import-fresh');
var Module = require('node:module');
var path = require('node:path');
var stripComments = require('strip-json-comments');
var assert = require('node:assert');
var ignore = require('ignore');
var util = require('node:util');
var minimatch = require('minimatch');
var Ajv = require('ajv');
var globals = require('globals');
var os = require('node:os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debugOrig__default = /*#__PURE__*/_interopDefaultLegacy(debugOrig);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var importFresh__default = /*#__PURE__*/_interopDefaultLegacy(importFresh);
var Module__default = /*#__PURE__*/_interopDefaultLegacy(Module);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var stripComments__default = /*#__PURE__*/_interopDefaultLegacy(stripComments);
var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var ignore__default = /*#__PURE__*/_interopDefaultLegacy(ignore);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var minimatch__default = /*#__PURE__*/_interopDefaultLegacy(minimatch);
var Ajv__default = /*#__PURE__*/_interopDefaultLegacy(Ajv);
var globals__default = /*#__PURE__*/_interopDefaultLegacy(globals);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

/**
 * @fileoverview `IgnorePattern` class.
 *
 * `IgnorePattern` class has the set of glob patterns and the base path.
 *
 * It provides two static methods.
 *
 * - `IgnorePattern.createDefaultIgnore(cwd)`
 *      Create the default predicate function.
 * - `IgnorePattern.createIgnore(ignorePatterns)`
 *      Create the predicate function from multiple `IgnorePattern` objects.
 *
 * It provides two properties and a method.
 *
 * - `patterns`
 *      The glob patterns that ignore to lint.
 * - `basePath`
 *      The base path of the glob patterns. If absolute paths existed in the
 *      glob patterns, those are handled as relative paths to the base path.
 * - `getPatternsRelativeTo(basePath)`
 *      Get `patterns` as modified for a given base path. It modifies the
 *      absolute paths in the patterns as prepending the difference of two base
 *      paths.
 *
 * `ConfigArrayFactory` creates `IgnorePattern` objects when it processes
 * `ignorePatterns` properties.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

const debug$3 = debugOrig__default["default"]("eslintrc:ignore-pattern");

/** @typedef {ReturnType<import("ignore").default>} Ignore */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Get the path to the common ancestor directory of given paths.
 * @param {string[]} sourcePaths The paths to calculate the common ancestor.
 * @returns {string} The path to the common ancestor directory.
 */
function getCommonAncestorPath(sourcePaths) {
    let result = sourcePaths[0];

    for (let i = 1; i < sourcePaths.length; ++i) {
        const a = result;
        const b = sourcePaths[i];

        // Set the shorter one (it's the common ancestor if one includes the other).
        result = a.length < b.length ? a : b;

        // Set the common ancestor.
        for (let j = 0, lastSepPos = 0; j < a.length && j < b.length; ++j) {
            if (a[j] !== b[j]) {
                result = a.slice(0, lastSepPos);
                break;
            }
            if (a[j] === path__default["default"].sep) {
                lastSepPos = j;
            }
        }
    }

    let resolvedResult = result || path__default["default"].sep;

    // if Windows common ancestor is root of drive must have trailing slash to be absolute.
    if (resolvedResult && resolvedResult.endsWith(":") && process.platform === "win32") {
        resolvedResult += path__default["default"].sep;
    }
    return resolvedResult;
}

/**
 * Make relative path.
 * @param {string} from The source path to get relative path.
 * @param {string} to The destination path to get relative path.
 * @returns {string} The relative path.
 */
function relative(from, to) {
    const relPath = path__default["default"].relative(from, to);

    if (path__default["default"].sep === "/") {
        return relPath;
    }
    return relPath.split(path__default["default"].sep).join("/");
}

/**
 * Get the trailing slash if existed.
 * @param {string} filePath The path to check.
 * @returns {string} The trailing slash if existed.
 */
function dirSuffix(filePath) {
    const isDir = (
        filePath.endsWith(path__default["default"].sep) ||
        (process.platform === "win32" && filePath.endsWith("/"))
    );

    return isDir ? "/" : "";
}

const DefaultPatterns = Object.freeze(["/**/node_modules/*"]);
const DotPatterns = Object.freeze([".*", "!.eslintrc.*", "!../"]);

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

/**
 * Represents a set of glob patterns to ignore against a base path.
 */
class IgnorePattern {

    /**
     * The default patterns.
     * @type {string[]}
     */
    static get DefaultPatterns() {
        return DefaultPatterns;
    }

    /**
     * Create the default predicate function.
     * @param {string} cwd The current working directory.
     * @returns {((filePath:string, dot:boolean) => boolean) & {basePath:string; patterns:string[]}}
     * The preficate function.
     * The first argument is an absolute path that is checked.
     * The second argument is the flag to not ignore dotfiles.
     * If the predicate function returned `true`, it means the path should be ignored.
     */
    static createDefaultIgnore(cwd) {
        return this.createIgnore([new IgnorePattern(DefaultPatterns, cwd)]);
    }

    /**
     * Create the predicate function from multiple `IgnorePattern` objects.
     * @param {IgnorePattern[]} ignorePatterns The list of ignore patterns.
     * @returns {((filePath:string, dot?:boolean) => boolean) & {basePath:string; patterns:string[]}}
     * The preficate function.
     * The first argument is an absolute path that is checked.
     * The second argument is the flag to not ignore dotfiles.
     * If the predicate function returned `true`, it means the path should be ignored.
     */
    static createIgnore(ignorePatterns) {
        debug$3("Create with: %o", ignorePatterns);

        const basePath = getCommonAncestorPath(ignorePatterns.map(p => p.basePath));
        const patterns = ignorePatterns.flatMap(p => p.getPatternsRelativeTo(basePath));
        const ig = ignore__default["default"]({ allowRelativePaths: true }).add([...DotPatterns, ...patterns]);
        const dotIg = ignore__default["default"]({ allowRelativePaths: true }).add(patterns);

        debug$3("  processed: %o", { basePath, patterns });

        return Object.assign(
            (filePath, dot = false) => {
                assert__default["default"](path__default["default"].isAbsolute(filePath), "'filePath' should be an absolute path.");
                const relPathRaw = relative(basePath, filePath);
                const relPath = relPathRaw && (relPathRaw + dirSuffix(filePath));
                const adoptedIg = dot ? dotIg : ig;
                const result = relPath !== "" && adoptedIg.ignores(relPath);

                debug$3("Check", { filePath, dot, relativePath: relPath, result });
                return result;
            },
            { basePath, patterns }
        );
    }

    /**
     * Initialize a new `IgnorePattern` instance.
     * @param {string[]} patterns The glob patterns that ignore to lint.
     * @param {string} basePath The base path of `patterns`.
     */
    constructor(patterns, basePath) {
        assert__default["default"](path__default["default"].isAbsolute(basePath), "'basePath' should be an absolute path.");

        /**
         * The glob patterns that ignore to lint.
         * @type {string[]}
         */
        this.patterns = patterns;

        /**
         * The base path of `patterns`.
         * @type {string}
         */
        this.basePath = basePath;

        /**
         * If `true` then patterns which don't start with `/` will match the paths to the outside of `basePath`. Defaults to `false`.
         *
         * It's set `true` for `.eslintignore`, `package.json`, and `--ignore-path` for backward compatibility.
         * It's `false` as-is for `ignorePatterns` property in config files.
         * @type {boolean}
         */
        this.loose = false;
    }

    /**
     * Get `patterns` as modified for a given base path. It modifies the
     * absolute paths in the patterns as prepending the difference of two base
     * paths.
     * @param {string} newBasePath The base path.
     * @returns {string[]} Modifired patterns.
     */
    getPatternsRelativeTo(newBasePath) {
        assert__default["default"](path__default["default"].isAbsolute(newBasePath), "'newBasePath' should be an absolute path.");
        const { basePath, loose, patterns } = this;

        if (newBasePath === basePath) {
            return patterns;
        }
        const prefix = `/${relative(newBasePath, basePath)}`;

        return patterns.map(pattern => {
            const negative = pattern.startsWith("!");
            const head = negative ? "!" : "";
            const body = negative ? pattern.slice(1) : pattern;

            if (body.startsWith("/") || body.startsWith("../")) {
                return `${head}${prefix}${body}`;
            }
            return loose ? pattern : `${head}${prefix}/**/${body}`;
        });
    }
}

/**
 * @fileoverview `ExtractedConfig` class.
 *
 * `ExtractedConfig` class expresses a final configuration for a specific file.
 *
 * It provides one method.
 *
 * - `toCompatibleObjectAsConfigFileContent()`
 *      Convert this configuration to the compatible object as the content of
 *      config files. It converts the loaded parser and plugins to strings.
 *      `CLIEngine#getConfigForFile(filePath)` method uses this method.
 *
 * `ConfigArray#extractConfig(filePath)` creates a `ExtractedConfig` instance.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

// For VSCode intellisense
/** @typedef {import("../../shared/types").ConfigData} ConfigData */
/** @typedef {import("../../shared/types").GlobalConf} GlobalConf */
/** @typedef {import("../../shared/types").SeverityConf} SeverityConf */
/** @typedef {import("./config-dependency").DependentParser} DependentParser */
/** @typedef {import("./config-dependency").DependentPlugin} DependentPlugin */

/**
 * Check if `xs` starts with `ys`.
 * @template T
 * @param {T[]} xs The array to check.
 * @param {T[]} ys The array that may be the first part of `xs`.
 * @returns {boolean} `true` if `xs` starts with `ys`.
 */
function startsWith(xs, ys) {
    return xs.length >= ys.length && ys.every((y, i) => y === xs[i]);
}

/**
 * The class for extracted config data.
 */
class ExtractedConfig {
    constructor() {

        /**
         * The config name what `noInlineConfig` setting came from.
         * @type {string}
         */
        this.configNameOfNoInlineConfig = "";

        /**
         * Environments.
         * @type {Record<string, boolean>}
         */
        this.env = {};

        /**
         * Global variables.
         * @type {Record<string, GlobalConf>}
         */
        this.globals = {};

        /**
         * The glob patterns that ignore to lint.
         * @type {(((filePath:string, dot?:boolean) => boolean) & { basePath:string; patterns:string[] }) | undefined}
         */
        this.ignores = void 0;

        /**
         * The flag that disables directive comments.
         * @type {boolean|undefined}
         */
        this.noInlineConfig = void 0;

        /**
         * Parser definition.
         * @type {DependentParser|null}
         */
        this.parser = null;

        /**
         * Options for the parser.
         * @type {Object}
         */
        this.parserOptions = {};

        /**
         * Plugin definitions.
         * @type {Record<string, DependentPlugin>}
         */
        this.plugins = {};

        /**
         * Processor ID.
         * @type {string|null}
         */
        this.processor = null;

        /**
         * The flag that reports unused `eslint-disable` directive comments.
         * @type {boolean|undefined}
         */
        this.reportUnusedDisableDirectives = void 0;

        /**
         * Rule settings.
         * @type {Record<string, [SeverityConf, ...any[]]>}
         */
        this.rules = {};

        /**
         * Shared settings.
         * @type {Object}
         */
        this.settings = {};
    }

    /**
     * Convert this config to the compatible object as a config file content.
     * @returns {ConfigData} The converted object.
     */
    toCompatibleObjectAsConfigFileContent() {
        const {
            /* eslint-disable no-unused-vars -- needed to make `config` correct */
            configNameOfNoInlineConfig: _ignore1,
            processor: _ignore2,
            /* eslint-enable no-unused-vars -- needed to make `config` correct */
            ignores,
            ...config
        } = this;

        config.parser = config.parser && config.parser.filePath;
        config.plugins = Object.keys(config.plugins).filter(Boolean).reverse();
        config.ignorePatterns = ignores ? ignores.patterns : [];

        // Strip the default patterns from `ignorePatterns`.
        if (startsWith(config.ignorePatterns, IgnorePattern.DefaultPatterns)) {
            config.ignorePatterns =
                config.ignorePatterns.slice(IgnorePattern.DefaultPatterns.length);
        }

        return config;
    }
}

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
const internalSlotsMap$2 = new class extends WeakMap {
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
    const slots = internalSlotsMap$2.get(instance);

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
        const { cache } = internalSlotsMap$2.get(this);
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
    const { cache } = internalSlotsMap$2.get(instance);

    return Array.from(cache.values());
}

/**
 * @fileoverview `ConfigDependency` class.
 *
 * `ConfigDependency` class expresses a loaded parser or plugin.
 *
 * If the parser or plugin was loaded successfully, it has `definition` property
 * and `filePath` property. Otherwise, it has `error` property.
 *
 * When `JSON.stringify()` converted a `ConfigDependency` object to a JSON, it
 * omits `definition` property.
 *
 * `ConfigArrayFactory` creates `ConfigDependency` objects when it loads parsers
 * or plugins.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

/**
 * The class is to store parsers or plugins.
 * This class hides the loaded object from `JSON.stringify()` and `console.log`.
 * @template T
 */
class ConfigDependency {

    /**
     * Initialize this instance.
     * @param {Object} data The dependency data.
     * @param {T} [data.definition] The dependency if the loading succeeded.
     * @param {T} [data.original] The original, non-normalized dependency if the loading succeeded.
     * @param {Error} [data.error] The error object if the loading failed.
     * @param {string} [data.filePath] The actual path to the dependency if the loading succeeded.
     * @param {string} data.id The ID of this dependency.
     * @param {string} data.importerName The name of the config file which loads this dependency.
     * @param {string} data.importerPath The path to the config file which loads this dependency.
     */
    constructor({
        definition = null,
        original = null,
        error = null,
        filePath = null,
        id,
        importerName,
        importerPath
    }) {

        /**
         * The loaded dependency if the loading succeeded.
         * @type {T|null}
         */
        this.definition = definition;

        /**
         * The original dependency as loaded directly from disk if the loading succeeded.
         * @type {T|null}
         */
        this.original = original;

        /**
         * The error object if the loading failed.
         * @type {Error|null}
         */
        this.error = error;

        /**
         * The loaded dependency if the loading succeeded.
         * @type {string|null}
         */
        this.filePath = filePath;

        /**
         * The ID of this dependency.
         * @type {string}
         */
        this.id = id;

        /**
         * The name of the config file which loads this dependency.
         * @type {string}
         */
        this.importerName = importerName;

        /**
         * The path to the config file which loads this dependency.
         * @type {string}
         */
        this.importerPath = importerPath;
    }

    /**
     * Converts this instance to a JSON compatible object.
     * @returns {Object} a JSON compatible object.
     */
    toJSON() {
        const obj = this[util__default["default"].inspect.custom]();

        // Display `error.message` (`Error#message` is unenumerable).
        if (obj.error instanceof Error) {
            obj.error = { ...obj.error, message: obj.error.message };
        }

        return obj;
    }

    /**
     * Custom inspect method for Node.js `console.log()`.
     * @returns {Object} an object to display by `console.log()`.
     */
    [util__default["default"].inspect.custom]() {
        const {
            definition: _ignore1, // eslint-disable-line no-unused-vars -- needed to make `obj` correct
            original: _ignore2, // eslint-disable-line no-unused-vars -- needed to make `obj` correct
            ...obj
        } = this;

        return obj;
    }
}

/**
 * @fileoverview `OverrideTester` class.
 *
 * `OverrideTester` class handles `files` property and `excludedFiles` property
 * of `overrides` config.
 *
 * It provides one method.
 *
 * - `test(filePath)`
 *      Test if a file path matches the pair of `files` property and
 *      `excludedFiles` property. The `filePath` argument must be an absolute
 *      path.
 *
 * `ConfigArrayFactory` creates `OverrideTester` objects when it processes
 * `overrides` properties.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

const { Minimatch } = minimatch__default["default"];

const minimatchOpts = { dot: true, matchBase: true };

/**
 * @typedef {Object} Pattern
 * @property {InstanceType<Minimatch>[] | null} includes The positive matchers.
 * @property {InstanceType<Minimatch>[] | null} excludes The negative matchers.
 */

/**
 * Normalize a given pattern to an array.
 * @param {string|string[]|undefined} patterns A glob pattern or an array of glob patterns.
 * @returns {string[]|null} Normalized patterns.
 * @private
 */
function normalizePatterns(patterns) {
    if (Array.isArray(patterns)) {
        return patterns.filter(Boolean);
    }
    if (typeof patterns === "string" && patterns) {
        return [patterns];
    }
    return [];
}

/**
 * Create the matchers of given patterns.
 * @param {string[]} patterns The patterns.
 * @returns {InstanceType<Minimatch>[] | null} The matchers.
 */
function toMatcher(patterns) {
    if (patterns.length === 0) {
        return null;
    }
    return patterns.map(pattern => {
        if (/^\.[/\\]/u.test(pattern)) {
            return new Minimatch(
                pattern.slice(2),

                // `./*.js` should not match with `subdir/foo.js`
                { ...minimatchOpts, matchBase: false }
            );
        }
        return new Minimatch(pattern, minimatchOpts);
    });
}

/**
 * Convert a given matcher to string.
 * @param {Pattern} matchers The matchers.
 * @returns {string} The string expression of the matcher.
 */
function patternToJson({ includes, excludes }) {
    return {
        includes: includes && includes.map(m => m.pattern),
        excludes: excludes && excludes.map(m => m.pattern)
    };
}

/**
 * The class to test given paths are matched by the patterns.
 */
class OverrideTester {

    /**
     * Create a tester with given criteria.
     * If there are no criteria, returns `null`.
     * @param {string|string[]} files The glob patterns for included files.
     * @param {string|string[]} excludedFiles The glob patterns for excluded files.
     * @param {string} basePath The path to the base directory to test paths.
     * @returns {OverrideTester|null} The created instance or `null`.
     * @throws {Error} When invalid patterns are given.
     */
    static create(files, excludedFiles, basePath) {
        const includePatterns = normalizePatterns(files);
        const excludePatterns = normalizePatterns(excludedFiles);
        let endsWithWildcard = false;

        if (includePatterns.length === 0) {
            return null;
        }

        // Rejects absolute paths or relative paths to parents.
        for (const pattern of includePatterns) {
            if (path__default["default"].isAbsolute(pattern) || pattern.includes("..")) {
                throw new Error(`Invalid override pattern (expected relative path not containing '..'): ${pattern}`);
            }
            if (pattern.endsWith("*")) {
                endsWithWildcard = true;
            }
        }
        for (const pattern of excludePatterns) {
            if (path__default["default"].isAbsolute(pattern) || pattern.includes("..")) {
                throw new Error(`Invalid override pattern (expected relative path not containing '..'): ${pattern}`);
            }
        }

        const includes = toMatcher(includePatterns);
        const excludes = toMatcher(excludePatterns);

        return new OverrideTester(
            [{ includes, excludes }],
            basePath,
            endsWithWildcard
        );
    }

    /**
     * Combine two testers by logical and.
     * If either of the testers was `null`, returns the other tester.
     * The `basePath` property of the two must be the same value.
     * @param {OverrideTester|null} a A tester.
     * @param {OverrideTester|null} b Another tester.
     * @returns {OverrideTester|null} Combined tester.
     */
    static and(a, b) {
        if (!b) {
            return a && new OverrideTester(
                a.patterns,
                a.basePath,
                a.endsWithWildcard
            );
        }
        if (!a) {
            return new OverrideTester(
                b.patterns,
                b.basePath,
                b.endsWithWildcard
            );
        }

        assert__default["default"].strictEqual(a.basePath, b.basePath);
        return new OverrideTester(
            a.patterns.concat(b.patterns),
            a.basePath,
            a.endsWithWildcard || b.endsWithWildcard
        );
    }

    /**
     * Initialize this instance.
     * @param {Pattern[]} patterns The matchers.
     * @param {string} basePath The base path.
     * @param {boolean} endsWithWildcard If `true` then a pattern ends with `*`.
     */
    constructor(patterns, basePath, endsWithWildcard = false) {

        /** @type {Pattern[]} */
        this.patterns = patterns;

        /** @type {string} */
        this.basePath = basePath;

        /** @type {boolean} */
        this.endsWithWildcard = endsWithWildcard;
    }

    /**
     * Test if a given path is matched or not.
     * @param {string} filePath The absolute path to the target file.
     * @returns {boolean} `true` if the path was matched.
     * @throws {Error} When invalid `filePath` is given.
     */
    test(filePath) {
        if (typeof filePath !== "string" || !path__default["default"].isAbsolute(filePath)) {
            throw new Error(`'filePath' should be an absolute path, but got ${filePath}.`);
        }
        const relativePath = path__default["default"].relative(this.basePath, filePath);

        return this.patterns.every(({ includes, excludes }) => (
            (!includes || includes.some(m => m.match(relativePath))) &&
            (!excludes || !excludes.some(m => m.match(relativePath)))
        ));
    }

    /**
     * Converts this instance to a JSON compatible object.
     * @returns {Object} a JSON compatible object.
     */
    toJSON() {
        if (this.patterns.length === 1) {
            return {
                ...patternToJson(this.patterns[0]),
                basePath: this.basePath
            };
        }
        return {
            AND: this.patterns.map(patternToJson),
            basePath: this.basePath
        };
    }

    /**
     * Custom inspect method for Node.js `console.log()`.
     * @returns {Object} an object to display by `console.log()`.
     */
    [util__default["default"].inspect.custom]() {
        return this.toJSON();
    }
}

/**
 * @fileoverview `ConfigArray` class.
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

/**
 * @fileoverview Config file operations. This file must be usable in the browser,
 * so no Node-specific code can be here.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

const RULE_SEVERITY_STRINGS = ["off", "warn", "error"],
    RULE_SEVERITY = RULE_SEVERITY_STRINGS.reduce((map, value, index) => {
        map[value] = index;
        return map;
    }, {}),
    VALID_SEVERITIES = new Set([0, 1, 2, "off", "warn", "error"]);

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Normalizes the severity value of a rule's configuration to a number
 * @param {(number|string|[number, ...*]|[string, ...*])} ruleConfig A rule's configuration value, generally
 * received from the user. A valid config value is either 0, 1, 2, the string "off" (treated the same as 0),
 * the string "warn" (treated the same as 1), the string "error" (treated the same as 2), or an array
 * whose first element is one of the above values. Strings are matched case-insensitively.
 * @returns {(0|1|2)} The numeric severity value if the config value was valid, otherwise 0.
 */
function getRuleSeverity(ruleConfig) {
    const severityValue = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;

    if (severityValue === 0 || severityValue === 1 || severityValue === 2) {
        return severityValue;
    }

    if (typeof severityValue === "string") {
        return RULE_SEVERITY[severityValue.toLowerCase()] || 0;
    }

    return 0;
}

/**
 * Converts old-style severity settings (0, 1, 2) into new-style
 * severity settings (off, warn, error) for all rules. Assumption is that severity
 * values have already been validated as correct.
 * @param {Object} config The config object to normalize.
 * @returns {void}
 */
function normalizeToStrings(config) {

    if (config.rules) {
        Object.keys(config.rules).forEach(ruleId => {
            const ruleConfig = config.rules[ruleId];

            if (typeof ruleConfig === "number") {
                config.rules[ruleId] = RULE_SEVERITY_STRINGS[ruleConfig] || RULE_SEVERITY_STRINGS[0];
            } else if (Array.isArray(ruleConfig) && typeof ruleConfig[0] === "number") {
                ruleConfig[0] = RULE_SEVERITY_STRINGS[ruleConfig[0]] || RULE_SEVERITY_STRINGS[0];
            }
        });
    }
}

/**
 * Determines if the severity for the given rule configuration represents an error.
 * @param {int|string|Array} ruleConfig The configuration for an individual rule.
 * @returns {boolean} True if the rule represents an error, false if not.
 */
function isErrorSeverity(ruleConfig) {
    return getRuleSeverity(ruleConfig) === 2;
}

/**
 * Checks whether a given config has valid severity or not.
 * @param {number|string|Array} ruleConfig The configuration for an individual rule.
 * @returns {boolean} `true` if the configuration has valid severity.
 */
function isValidSeverity(ruleConfig) {
    let severity = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;

    if (typeof severity === "string") {
        severity = severity.toLowerCase();
    }
    return VALID_SEVERITIES.has(severity);
}

/**
 * Checks whether every rule of a given config has valid severity or not.
 * @param {Object} config The configuration for rules.
 * @returns {boolean} `true` if the configuration has valid severity.
 */
function isEverySeverityValid(config) {
    return Object.keys(config).every(ruleId => isValidSeverity(config[ruleId]));
}

/**
 * Normalizes a value for a global in a config
 * @param {(boolean|string|null)} configuredValue The value given for a global in configuration or in
 * a global directive comment
 * @returns {("readable"|"writeable"|"off")} The value normalized as a string
 * @throws Error if global value is invalid
 */
function normalizeConfigGlobal(configuredValue) {
    switch (configuredValue) {
        case "off":
            return "off";

        case true:
        case "true":
        case "writeable":
        case "writable":
            return "writable";

        case null:
        case false:
        case "false":
        case "readable":
        case "readonly":
            return "readonly";

        default:
            throw new Error(`'${configuredValue}' is not a valid configuration for a global (use 'readonly', 'writable', or 'off')`);
    }
}

var ConfigOps = {
    __proto__: null,
    getRuleSeverity: getRuleSeverity,
    normalizeToStrings: normalizeToStrings,
    isErrorSeverity: isErrorSeverity,
    isValidSeverity: isValidSeverity,
    isEverySeverityValid: isEverySeverityValid,
    normalizeConfigGlobal: normalizeConfigGlobal
};

/**
 * @fileoverview Provide the function that emits deprecation warnings.
 * @author Toru Nagashima <http://github.com/mysticatea>
 */

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

// Defitions for deprecation warnings.
const deprecationWarningMessages = {
    ESLINT_LEGACY_ECMAFEATURES:
        "The 'ecmaFeatures' config file property is deprecated and has no effect.",
    ESLINT_PERSONAL_CONFIG_LOAD:
        "'~/.eslintrc.*' config files have been deprecated. " +
        "Please use a config file per project or the '--config' option.",
    ESLINT_PERSONAL_CONFIG_SUPPRESS:
        "'~/.eslintrc.*' config files have been deprecated. " +
        "Please remove it or add 'root:true' to the config files in your " +
        "projects in order to avoid loading '~/.eslintrc.*' accidentally."
};

const sourceFileErrorCache = new Set();

/**
 * Emits a deprecation warning containing a given filepath. A new deprecation warning is emitted
 * for each unique file path, but repeated invocations with the same file path have no effect.
 * No warnings are emitted if the `--no-deprecation` or `--no-warnings` Node runtime flags are active.
 * @param {string} source The name of the configuration source to report the warning for.
 * @param {string} errorCode The warning message to show.
 * @returns {void}
 */
function emitDeprecationWarning(source, errorCode) {
    const cacheKey = JSON.stringify({ source, errorCode });

    if (sourceFileErrorCache.has(cacheKey)) {
        return;
    }
    sourceFileErrorCache.add(cacheKey);

    const rel = path__default["default"].relative(process.cwd(), source);
    const message = deprecationWarningMessages[errorCode];

    process.emitWarning(
        `${message} (found in "${rel}")`,
        "DeprecationWarning",
        errorCode
    );
}

/**
 * @fileoverview The instance of Ajv validator.
 * @author Evgeny Poberezkin
 */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/*
 * Copied from ajv/lib/refs/json-schema-draft-04.json
 * The MIT License (MIT)
 * Copyright (c) 2015-2017 Evgeny Poberezkin
 */
const metaSchema = {
    id: "http://json-schema.org/draft-04/schema#",
    $schema: "http://json-schema.org/draft-04/schema#",
    description: "Core schema meta-schema",
    definitions: {
        schemaArray: {
            type: "array",
            minItems: 1,
            items: { $ref: "#" }
        },
        positiveInteger: {
            type: "integer",
            minimum: 0
        },
        positiveIntegerDefault0: {
            allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }]
        },
        simpleTypes: {
            enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
            type: "array",
            items: { type: "string" },
            minItems: 1,
            uniqueItems: true
        }
    },
    type: "object",
    properties: {
        id: {
            type: "string"
        },
        $schema: {
            type: "string"
        },
        title: {
            type: "string"
        },
        description: {
            type: "string"
        },
        default: { },
        multipleOf: {
            type: "number",
            minimum: 0,
            exclusiveMinimum: true
        },
        maximum: {
            type: "number"
        },
        exclusiveMaximum: {
            type: "boolean",
            default: false
        },
        minimum: {
            type: "number"
        },
        exclusiveMinimum: {
            type: "boolean",
            default: false
        },
        maxLength: { $ref: "#/definitions/positiveInteger" },
        minLength: { $ref: "#/definitions/positiveIntegerDefault0" },
        pattern: {
            type: "string",
            format: "regex"
        },
        additionalItems: {
            anyOf: [
                { type: "boolean" },
                { $ref: "#" }
            ],
            default: { }
        },
        items: {
            anyOf: [
                { $ref: "#" },
                { $ref: "#/definitions/schemaArray" }
            ],
            default: { }
        },
        maxItems: { $ref: "#/definitions/positiveInteger" },
        minItems: { $ref: "#/definitions/positiveIntegerDefault0" },
        uniqueItems: {
            type: "boolean",
            default: false
        },
        maxProperties: { $ref: "#/definitions/positiveInteger" },
        minProperties: { $ref: "#/definitions/positiveIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: {
            anyOf: [
                { type: "boolean" },
                { $ref: "#" }
            ],
            default: { }
        },
        definitions: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: { }
        },
        properties: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: { }
        },
        patternProperties: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: { }
        },
        dependencies: {
            type: "object",
            additionalProperties: {
                anyOf: [
                    { $ref: "#" },
                    { $ref: "#/definitions/stringArray" }
                ]
            }
        },
        enum: {
            type: "array",
            minItems: 1,
            uniqueItems: true
        },
        type: {
            anyOf: [
                { $ref: "#/definitions/simpleTypes" },
                {
                    type: "array",
                    items: { $ref: "#/definitions/simpleTypes" },
                    minItems: 1,
                    uniqueItems: true
                }
            ]
        },
        format: { type: "string" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
    },
    dependencies: {
        exclusiveMaximum: ["maximum"],
        exclusiveMinimum: ["minimum"]
    },
    default: { }
};

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

var ajvOrig = (additionalOptions = {}) => {
    const ajv = new Ajv__default["default"]({
        meta: false,
        useDefaults: true,
        validateSchema: false,
        missingRefs: "ignore",
        verbose: true,
        schemaId: "auto",
        ...additionalOptions
    });

    ajv.addMetaSchema(metaSchema);
    // eslint-disable-next-line no-underscore-dangle -- part of the API
    ajv._opts.defaultMeta = metaSchema.id;

    return ajv;
};

/**
 * @fileoverview Applies default rule options
 * @author JoshuaKGoldberg
 */

/**
 * Check if the variable contains an object strictly rejecting arrays
 * @param {unknown} value an object
 * @returns {boolean} Whether value is an object
 */
function isObjectNotArray(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Deeply merges second on top of first, creating a new {} object if needed.
 * @param {T} first Base, default value.
 * @param {U} second User-specified value.
 * @returns {T | U | (T & U)} Merged equivalent of second on top of first.
 */
function deepMergeObjects(first, second) {
    if (second === void 0) {
        return first;
    }

    if (!isObjectNotArray(first) || !isObjectNotArray(second)) {
        return second;
    }

    const result = { ...first, ...second };

    for (const key of Object.keys(second)) {
        if (Object.prototype.propertyIsEnumerable.call(first, key)) {
            result[key] = deepMergeObjects(first[key], second[key]);
        }
    }

    return result;
}

/**
 * Deeply merges second on top of first, creating a new [] array if needed.
 * @param {T[] | undefined} first Base, default values.
 * @param {U[] | undefined} second User-specified values.
 * @returns {(T | U | (T & U))[]} Merged equivalent of second on top of first.
 */
function deepMergeArrays(first, second) {
    if (!first || !second) {
        return second || first || [];
    }

    return [
        ...first.map((value, i) => deepMergeObjects(value, second[i])),
        ...second.slice(first.length)
    ];
}

/**
 * @fileoverview Defines a schema for configs.
 * @author Sylvan Mably
 */

const baseConfigProperties = {
    $schema: { type: "string" },
    env: { type: "object" },
    extends: { $ref: "#/definitions/stringOrStrings" },
    globals: { type: "object" },
    overrides: {
        type: "array",
        items: { $ref: "#/definitions/overrideConfig" },
        additionalItems: false
    },
    parser: { type: ["string", "null"] },
    parserOptions: { type: "object" },
    plugins: { type: "array" },
    processor: { type: "string" },
    rules: { type: "object" },
    settings: { type: "object" },
    noInlineConfig: { type: "boolean" },
    reportUnusedDisableDirectives: { type: "boolean" },

    ecmaFeatures: { type: "object" } // deprecated; logs a warning when used
};

const configSchema = {
    definitions: {
        stringOrStrings: {
            oneOf: [
                { type: "string" },
                {
                    type: "array",
                    items: { type: "string" },
                    additionalItems: false
                }
            ]
        },
        stringOrStringsRequired: {
            oneOf: [
                { type: "string" },
                {
                    type: "array",
                    items: { type: "string" },
                    additionalItems: false,
                    minItems: 1
                }
            ]
        },

        // Config at top-level.
        objectConfig: {
            type: "object",
            properties: {
                root: { type: "boolean" },
                ignorePatterns: { $ref: "#/definitions/stringOrStrings" },
                ...baseConfigProperties
            },
            additionalProperties: false
        },

        // Config in `overrides`.
        overrideConfig: {
            type: "object",
            properties: {
                excludedFiles: { $ref: "#/definitions/stringOrStrings" },
                files: { $ref: "#/definitions/stringOrStringsRequired" },
                ...baseConfigProperties
            },
            required: ["files"],
            additionalProperties: false
        }
    },

    $ref: "#/definitions/objectConfig"
};

/**
 * @fileoverview Defines environment settings and globals.
 * @author Elan Shanker
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Get the object that has difference.
 * @param {Record<string,boolean>} current The newer object.
 * @param {Record<string,boolean>} prev The older object.
 * @returns {Record<string,boolean>} The difference object.
 */
function getDiff(current, prev) {
    const retv = {};

    for (const [key, value] of Object.entries(current)) {
        if (!Object.hasOwn(prev, key)) {
            retv[key] = value;
        }
    }

    return retv;
}

const newGlobals2015 = getDiff(globals__default["default"].es2015, globals__default["default"].es5); // 19 variables such as Promise, Map, ...
const newGlobals2017 = {
    Atomics: false,
    SharedArrayBuffer: false
};
const newGlobals2020 = {
    BigInt: false,
    BigInt64Array: false,
    BigUint64Array: false,
    globalThis: false
};

const newGlobals2021 = {
    AggregateError: false,
    FinalizationRegistry: false,
    WeakRef: false
};

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/** @type {Map<string, import("../lib/shared/types").Environment>} */
var environments = new Map(Object.entries({

    // Language
    builtin: {
        globals: globals__default["default"].es5
    },
    es6: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 6
        }
    },
    es2015: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 6
        }
    },
    es2016: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 7
        }
    },
    es2017: {
        globals: { ...newGlobals2015, ...newGlobals2017 },
        parserOptions: {
            ecmaVersion: 8
        }
    },
    es2018: {
        globals: { ...newGlobals2015, ...newGlobals2017 },
        parserOptions: {
            ecmaVersion: 9
        }
    },
    es2019: {
        globals: { ...newGlobals2015, ...newGlobals2017 },
        parserOptions: {
            ecmaVersion: 10
        }
    },
    es2020: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020 },
        parserOptions: {
            ecmaVersion: 11
        }
    },
    es2021: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 12
        }
    },
    es2022: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 13
        }
    },
    es2023: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 14
        }
    },
    es2024: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 15
        }
    },

    // Platforms
    browser: {
        globals: globals__default["default"].browser
    },
    node: {
        globals: globals__default["default"].node,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: true
            }
        }
    },
    "shared-node-browser": {
        globals: globals__default["default"]["shared-node-browser"]
    },
    worker: {
        globals: globals__default["default"].worker
    },
    serviceworker: {
        globals: globals__default["default"].serviceworker
    },

    // Frameworks
    commonjs: {
        globals: globals__default["default"].commonjs,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: true
            }
        }
    },
    amd: {
        globals: globals__default["default"].amd
    },
    mocha: {
        globals: globals__default["default"].mocha
    },
    jasmine: {
        globals: globals__default["default"].jasmine
    },
    jest: {
        globals: globals__default["default"].jest
    },
    phantomjs: {
        globals: globals__default["default"].phantomjs
    },
    jquery: {
        globals: globals__default["default"].jquery
    },
    qunit: {
        globals: globals__default["default"].qunit
    },
    prototypejs: {
        globals: globals__default["default"].prototypejs
    },
    shelljs: {
        globals: globals__default["default"].shelljs
    },
    meteor: {
        globals: globals__default["default"].meteor
    },
    mongo: {
        globals: globals__default["default"].mongo
    },
    protractor: {
        globals: globals__default["default"].protractor
    },
    applescript: {
        globals: globals__default["default"].applescript
    },
    nashorn: {
        globals: globals__default["default"].nashorn
    },
    atomtest: {
        globals: globals__default["default"].atomtest
    },
    embertest: {
        globals: globals__default["default"].embertest
    },
    webextensions: {
        globals: globals__default["default"].webextensions
    },
    greasemonkey: {
        globals: globals__default["default"].greasemonkey
    }
}));

/**
 * @fileoverview Validates configs.
 * @author Brandon Mills
 */

const ajv = ajvOrig();

const ruleValidators = new WeakMap();
const noop = Function.prototype;

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------
let validateSchema;
const severityMap = {
    error: 2,
    warn: 1,
    off: 0
};

const validated = new WeakSet();

// JSON schema that disallows passing any options
const noOptionsSchema = Object.freeze({
    type: "array",
    minItems: 0,
    maxItems: 0
});

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Validator for configuration objects.
 */
class ConfigValidator {
    constructor({ builtInRules = new Map() } = {}) {
        this.builtInRules = builtInRules;
    }

    /**
     * Gets a complete options schema for a rule.
     * @param {Rule} rule A rule object
     * @throws {TypeError} If `meta.schema` is specified but is not an array, object or `false`.
     * @returns {Object|null} JSON Schema for the rule's options.
     *      `null` if rule wasn't passed or its `meta.schema` is `false`.
     */
    getRuleOptionsSchema(rule) {
        if (!rule) {
            return null;
        }

        if (!rule.meta) {
            return { ...noOptionsSchema }; // default if `meta.schema` is not specified
        }

        const schema = rule.meta.schema;

        if (typeof schema === "undefined") {
            return { ...noOptionsSchema }; // default if `meta.schema` is not specified
        }

        // `schema:false` is an allowed explicit opt-out of options validation for the rule
        if (schema === false) {
            return null;
        }

        if (typeof schema !== "object" || schema === null) {
            throw new TypeError("Rule's `meta.schema` must be an array or object");
        }

        // ESLint-specific array form needs to be converted into a valid JSON Schema definition
        if (Array.isArray(schema)) {
            if (schema.length) {
                return {
                    type: "array",
                    items: schema,
                    minItems: 0,
                    maxItems: schema.length
                };
            }

            // `schema:[]` is an explicit way to specify that the rule does not accept any options
            return { ...noOptionsSchema };
        }

        // `schema:<object>` is assumed to be a valid JSON Schema definition
        return schema;
    }

    /**
     * Validates a rule's severity and returns the severity value. Throws an error if the severity is invalid.
     * @param {options} options The given options for the rule.
     * @returns {number|string} The rule's severity value
     * @throws {Error} If the severity is invalid.
     */
    validateRuleSeverity(options) {
        const severity = Array.isArray(options) ? options[0] : options;
        const normSeverity = typeof severity === "string" ? severityMap[severity.toLowerCase()] : severity;

        if (normSeverity === 0 || normSeverity === 1 || normSeverity === 2) {
            return normSeverity;
        }

        throw new Error(`\tSeverity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '${util__default["default"].inspect(severity).replace(/'/gu, "\"").replace(/\n/gu, "")}').\n`);

    }

    /**
     * Validates the non-severity options passed to a rule, based on its schema.
     * @param {{create: Function}} rule The rule to validate
     * @param {Array} localOptions The options for the rule, excluding severity
     * @returns {void}
     * @throws {Error} If the options are invalid.
     */
    validateRuleSchema(rule, localOptions) {
        if (!ruleValidators.has(rule)) {
            try {
                const schema = this.getRuleOptionsSchema(rule);

                if (schema) {
                    ruleValidators.set(rule, ajv.compile(schema));
                }
            } catch (err) {
                const errorWithCode = new Error(err.message, { cause: err });

                errorWithCode.code = "ESLINT_INVALID_RULE_OPTIONS_SCHEMA";

                throw errorWithCode;
            }
        }

        const validateRule = ruleValidators.get(rule);

        if (validateRule) {
            const mergedOptions = deepMergeArrays(rule.meta?.defaultOptions, localOptions);

            validateRule(mergedOptions);

            if (validateRule.errors) {
                throw new Error(validateRule.errors.map(
                    error => `\tValue ${JSON.stringify(error.data)} ${error.message}.\n`
                ).join(""));
            }
        }
    }

    /**
     * Validates a rule's options against its schema.
     * @param {{create: Function}|null} rule The rule that the config is being validated for
     * @param {string} ruleId The rule's unique name.
     * @param {Array|number} options The given options for the rule.
     * @param {string|null} source The name of the configuration source to report in any errors. If null or undefined,
     * no source is prepended to the message.
     * @returns {void}
     * @throws {Error} If the options are invalid.
     */
    validateRuleOptions(rule, ruleId, options, source = null) {
        try {
            const severity = this.validateRuleSeverity(options);

            if (severity !== 0) {
                this.validateRuleSchema(rule, Array.isArray(options) ? options.slice(1) : []);
            }
        } catch (err) {
            let enhancedMessage = err.code === "ESLINT_INVALID_RULE_OPTIONS_SCHEMA"
                ? `Error while processing options validation schema of rule '${ruleId}': ${err.message}`
                : `Configuration for rule "${ruleId}" is invalid:\n${err.message}`;

            if (typeof source === "string") {
                enhancedMessage = `${source}:\n\t${enhancedMessage}`;
            }

            const enhancedError = new Error(enhancedMessage, { cause: err });

            if (err.code) {
                enhancedError.code = err.code;
            }

            throw enhancedError;
        }
    }

    /**
     * Validates an environment object
     * @param {Object} environment The environment config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(envId:string) => Object} [getAdditionalEnv] A map from strings to loaded environments.
     * @returns {void}
     * @throws {Error} If the environment is invalid.
     */
    validateEnvironment(
        environment,
        source,
        getAdditionalEnv = noop
    ) {

        // not having an environment is ok
        if (!environment) {
            return;
        }

        Object.keys(environment).forEach(id => {
            const env = getAdditionalEnv(id) || environments.get(id) || null;

            if (!env) {
                const message = `${source}:\n\tEnvironment key "${id}" is unknown\n`;

                throw new Error(message);
            }
        });
    }

    /**
     * Validates a rules config object
     * @param {Object} rulesConfig The rules config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(ruleId:string) => Object} getAdditionalRule A map from strings to loaded rules
     * @returns {void}
     */
    validateRules(
        rulesConfig,
        source,
        getAdditionalRule = noop
    ) {
        if (!rulesConfig) {
            return;
        }

        Object.keys(rulesConfig).forEach(id => {
            const rule = getAdditionalRule(id) || this.builtInRules.get(id) || null;

            this.validateRuleOptions(rule, id, rulesConfig[id], source);
        });
    }

    /**
     * Validates a `globals` section of a config file
     * @param {Object} globalsConfig The `globals` section
     * @param {string|null} source The name of the configuration source to report in the event of an error.
     * @returns {void}
     */
    validateGlobals(globalsConfig, source = null) {
        if (!globalsConfig) {
            return;
        }

        Object.entries(globalsConfig)
            .forEach(([configuredGlobal, configuredValue]) => {
                try {
                    normalizeConfigGlobal(configuredValue);
                } catch (err) {
                    throw new Error(`ESLint configuration of global '${configuredGlobal}' in ${source} is invalid:\n${err.message}`);
                }
            });
    }

    /**
     * Validate `processor` configuration.
     * @param {string|undefined} processorName The processor name.
     * @param {string} source The name of config file.
     * @param {(id:string) => Processor} getProcessor The getter of defined processors.
     * @returns {void}
     * @throws {Error} If the processor is invalid.
     */
    validateProcessor(processorName, source, getProcessor) {
        if (processorName && !getProcessor(processorName)) {
            throw new Error(`ESLint configuration of processor in '${source}' is invalid: '${processorName}' was not found.`);
        }
    }

    /**
     * Formats an array of schema validation errors.
     * @param {Array} errors An array of error messages to format.
     * @returns {string} Formatted error message
     */
    formatErrors(errors) {
        return errors.map(error => {
            if (error.keyword === "additionalProperties") {
                const formattedPropertyPath = error.dataPath.length ? `${error.dataPath.slice(1)}.${error.params.additionalProperty}` : error.params.additionalProperty;

                return `Unexpected top-level property "${formattedPropertyPath}"`;
            }
            if (error.keyword === "type") {
                const formattedField = error.dataPath.slice(1);
                const formattedExpectedType = Array.isArray(error.schema) ? error.schema.join("/") : error.schema;
                const formattedValue = JSON.stringify(error.data);

                return `Property "${formattedField}" is the wrong type (expected ${formattedExpectedType} but got \`${formattedValue}\`)`;
            }

            const field = error.dataPath[0] === "." ? error.dataPath.slice(1) : error.dataPath;

            return `"${field}" ${error.message}. Value: ${JSON.stringify(error.data)}`;
        }).map(message => `\t- ${message}.\n`).join("");
    }

    /**
     * Validates the top level properties of the config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @returns {void}
     * @throws {Error} If the config is invalid.
     */
    validateConfigSchema(config, source = null) {
        validateSchema = validateSchema || ajv.compile(configSchema);

        if (!validateSchema(config)) {
            throw new Error(`ESLint configuration in ${source} is invalid:\n${this.formatErrors(validateSchema.errors)}`);
        }

        if (Object.hasOwn(config, "ecmaFeatures")) {
            emitDeprecationWarning(source, "ESLINT_LEGACY_ECMAFEATURES");
        }
    }

    /**
     * Validates an entire config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(ruleId:string) => Object} [getAdditionalRule] A map from strings to loaded rules.
     * @param {(envId:string) => Object} [getAdditionalEnv] A map from strings to loaded envs.
     * @returns {void}
     */
    validate(config, source, getAdditionalRule, getAdditionalEnv) {
        this.validateConfigSchema(config, source);
        this.validateRules(config.rules, source, getAdditionalRule);
        this.validateEnvironment(config.env, source, getAdditionalEnv);
        this.validateGlobals(config.globals, source);

        for (const override of config.overrides || []) {
            this.validateRules(override.rules, source, getAdditionalRule);
            this.validateEnvironment(override.env, source, getAdditionalEnv);
            this.validateGlobals(config.globals, source);
        }
    }

    /**
     * Validate config array object.
     * @param {ConfigArray} configArray The config array to validate.
     * @returns {void}
     */
    validateConfigArray(configArray) {
        const getPluginEnv = Map.prototype.get.bind(configArray.pluginEnvironments);
        const getPluginProcessor = Map.prototype.get.bind(configArray.pluginProcessors);
        const getPluginRule = Map.prototype.get.bind(configArray.pluginRules);

        // Validate.
        for (const element of configArray) {
            if (validated.has(element)) {
                continue;
            }
            validated.add(element);

            this.validateEnvironment(element.env, element.name, getPluginEnv);
            this.validateGlobals(element.globals, element.name);
            this.validateProcessor(element.processor, element.name, getPluginProcessor);
            this.validateRules(element.rules, element.name, getPluginRule);
        }
    }

}

/**
 * @fileoverview Common helpers for naming of plugins, formatters and configs
 */

const NAMESPACE_REGEX = /^@.*\//iu;

/**
 * Brings package name to correct format based on prefix
 * @param {string} name The name of the package.
 * @param {string} prefix Can be either "eslint-plugin", "eslint-config" or "eslint-formatter"
 * @returns {string} Normalized name of the package
 * @private
 */
function normalizePackageName(name, prefix) {
    let normalizedName = name;

    /**
     * On Windows, name can come in with Windows slashes instead of Unix slashes.
     * Normalize to Unix first to avoid errors later on.
     * https://github.com/eslint/eslint/issues/5644
     */
    if (normalizedName.includes("\\")) {
        normalizedName = normalizedName.replace(/\\/gu, "/");
    }

    if (normalizedName.charAt(0) === "@") {

        /**
         * it's a scoped package
         * package name is the prefix, or just a username
         */
        const scopedPackageShortcutRegex = new RegExp(`^(@[^/]+)(?:/(?:${prefix})?)?$`, "u"),
            scopedPackageNameRegex = new RegExp(`^${prefix}(-|$)`, "u");

        if (scopedPackageShortcutRegex.test(normalizedName)) {
            normalizedName = normalizedName.replace(scopedPackageShortcutRegex, `$1/${prefix}`);
        } else if (!scopedPackageNameRegex.test(normalizedName.split("/")[1])) {

            /**
             * for scoped packages, insert the prefix after the first / unless
             * the path is already @scope/eslint or @scope/eslint-xxx-yyy
             */
            normalizedName = normalizedName.replace(/^@([^/]+)\/(.*)$/u, `@$1/${prefix}-$2`);
        }
    } else if (!normalizedName.startsWith(`${prefix}-`)) {
        normalizedName = `${prefix}-${normalizedName}`;
    }

    return normalizedName;
}

/**
 * Removes the prefix from a fullname.
 * @param {string} fullname The term which may have the prefix.
 * @param {string} prefix The prefix to remove.
 * @returns {string} The term without prefix.
 */
function getShorthandName(fullname, prefix) {
    if (fullname[0] === "@") {
        let matchResult = new RegExp(`^(@[^/]+)/${prefix}$`, "u").exec(fullname);

        if (matchResult) {
            return matchResult[1];
        }

        matchResult = new RegExp(`^(@[^/]+)/${prefix}-(.+)$`, "u").exec(fullname);
        if (matchResult) {
            return `${matchResult[1]}/${matchResult[2]}`;
        }
    } else if (fullname.startsWith(`${prefix}-`)) {
        return fullname.slice(prefix.length + 1);
    }

    return fullname;
}

/**
 * Gets the scope (namespace) of a term.
 * @param {string} term The term which may have the namespace.
 * @returns {string} The namespace of the term if it has one.
 */
function getNamespaceFromTerm(term) {
    const match = term.match(NAMESPACE_REGEX);

    return match ? match[0] : "";
}

var naming = {
    __proto__: null,
    normalizePackageName: normalizePackageName,
    getShorthandName: getShorthandName,
    getNamespaceFromTerm: getNamespaceFromTerm
};

/**
 * Utility for resolving a module relative to another module
 * @author Teddy Katz
 */

/*
 * `Module.createRequire` is added in v12.2.0. It supports URL as well.
 * We only support the case where the argument is a filepath, not a URL.
 */
const createRequire = Module__default["default"].createRequire;

/**
 * Resolves a Node module relative to another module
 * @param {string} moduleName The name of a Node module, or a path to a Node module.
 * @param {string} relativeToPath An absolute path indicating the module that `moduleName` should be resolved relative to. This must be
 * a file rather than a directory, but the file need not actually exist.
 * @returns {string} The absolute path that would result from calling `require.resolve(moduleName)` in a file located at `relativeToPath`
 * @throws {Error} When the module cannot be resolved.
 */
function resolve(moduleName, relativeToPath) {
    try {
        return createRequire(relativeToPath).resolve(moduleName);
    } catch (error) {

        // This `if` block is for older Node.js than 12.0.0. We can remove this block in the future.
        if (
            typeof error === "object" &&
            error !== null &&
            error.code === "MODULE_NOT_FOUND" &&
            !error.requireStack &&
            error.message.includes(moduleName)
        ) {
            error.message += `\nRequire stack:\n- ${relativeToPath}`;
        }
        throw error;
    }
}

var ModuleResolver = {
    __proto__: null,
    resolve: resolve
};

/**
 * @fileoverview The factory of `ConfigArray` objects.
 *
 * This class provides methods to create `ConfigArray` instance.
 *
 * - `create(configData, options)`
 *     Create a `ConfigArray` instance from a config data. This is to handle CLI
 *     options except `--config`.
 * - `loadFile(filePath, options)`
 *     Create a `ConfigArray` instance from a config file. This is to handle
 *     `--config` option. If the file was not found, throws the following error:
 *      - If the filename was `*.js`, a `MODULE_NOT_FOUND` error.
 *      - If the filename was `package.json`, an IO error or an
 *        `ESLINT_CONFIG_FIELD_NOT_FOUND` error.
 *      - Otherwise, an IO error such as `ENOENT`.
 * - `loadInDirectory(directoryPath, options)`
 *     Create a `ConfigArray` instance from a config file which is on a given
 *     directory. This tries to load `.eslintrc.*` or `package.json`. If not
 *     found, returns an empty `ConfigArray`.
 * - `loadESLintIgnore(filePath)`
 *     Create a `ConfigArray` instance from a config file that is `.eslintignore`
 *     format. This is to handle `--ignore-path` option.
 * - `loadDefaultESLintIgnore()`
 *     Create a `ConfigArray` instance from `.eslintignore` or `package.json` in
 *     the current working directory.
 *
 * `ConfigArrayFactory` class has the responsibility that loads configuration
 * files, including loading `extends`, `parser`, and `plugins`. The created
 * `ConfigArray` instance has the loaded `extends`, `parser`, and `plugins`.
 *
 * But this class doesn't handle cascading. `CascadingConfigArrayFactory` class
 * handles cascading and hierarchy.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

const require$1 = Module.createRequire(require('url').pathToFileURL(__filename).toString());

const debug$2 = debugOrig__default["default"]("eslintrc:config-array-factory");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const configFilenames = [
    ".eslintrc.js",
    ".eslintrc.cjs",
    ".eslintrc.yaml",
    ".eslintrc.yml",
    ".eslintrc.json",
    ".eslintrc",
    "package.json"
];

// Define types for VSCode IntelliSense.
/** @typedef {import("./shared/types").ConfigData} ConfigData */
/** @typedef {import("./shared/types").OverrideConfigData} OverrideConfigData */
/** @typedef {import("./shared/types").Parser} Parser */
/** @typedef {import("./shared/types").Plugin} Plugin */
/** @typedef {import("./shared/types").Rule} Rule */
/** @typedef {import("./config-array/config-dependency").DependentParser} DependentParser */
/** @typedef {import("./config-array/config-dependency").DependentPlugin} DependentPlugin */
/** @typedef {ConfigArray[0]} ConfigArrayElement */

/**
 * @typedef {Object} ConfigArrayFactoryOptions
 * @property {Map<string,Plugin>} [additionalPluginPool] The map for additional plugins.
 * @property {string} [cwd] The path to the current working directory.
 * @property {string} [resolvePluginsRelativeTo] A path to the directory that plugins should be resolved from. Defaults to `cwd`.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {Function} getEslintAllConfig Returns the config data for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 * @property {Function} getEslintRecommendedConfig Returns the config data for eslint:recommended.
 */

/**
 * @typedef {Object} ConfigArrayFactoryInternalSlots
 * @property {Map<string,Plugin>} additionalPluginPool The map for additional plugins.
 * @property {string} cwd The path to the current working directory.
 * @property {string | undefined} resolvePluginsRelativeTo An absolute path the the directory that plugins should be resolved from.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {Function} getEslintAllConfig Returns the config data for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 * @property {Function} getEslintRecommendedConfig Returns the config data for eslint:recommended.
 */

/**
 * @typedef {Object} ConfigArrayFactoryLoadingContext
 * @property {string} filePath The path to the current configuration.
 * @property {string} matchBasePath The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
 * @property {string} name The name of the current configuration.
 * @property {string} pluginBasePath The base path to resolve plugins.
 * @property {"config" | "ignore" | "implicit-processor"} type The type of the current configuration. This is `"config"` in normal. This is `"ignore"` if it came from `.eslintignore`. This is `"implicit-processor"` if it came from legacy file-extension processors.
 */

/**
 * @typedef {Object} ConfigArrayFactoryLoadingContext
 * @property {string} filePath The path to the current configuration.
 * @property {string} matchBasePath The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
 * @property {string} name The name of the current configuration.
 * @property {"config" | "ignore" | "implicit-processor"} type The type of the current configuration. This is `"config"` in normal. This is `"ignore"` if it came from `.eslintignore`. This is `"implicit-processor"` if it came from legacy file-extension processors.
 */

/** @type {WeakMap<ConfigArrayFactory, ConfigArrayFactoryInternalSlots>} */
const internalSlotsMap$1 = new WeakMap();

/** @type {WeakMap<object, Plugin>} */
const normalizedPlugins = new WeakMap();

/**
 * Check if a given string is a file path.
 * @param {string} nameOrPath A module name or file path.
 * @returns {boolean} `true` if the `nameOrPath` is a file path.
 */
function isFilePath(nameOrPath) {
    return (
        /^\.{1,2}[/\\]/u.test(nameOrPath) ||
        path__default["default"].isAbsolute(nameOrPath)
    );
}

/**
 * Convenience wrapper for synchronously reading file contents.
 * @param {string} filePath The filename to read.
 * @returns {string} The file contents, with the BOM removed.
 * @private
 */
function readFile(filePath) {
    return fs__default["default"].readFileSync(filePath, "utf8").replace(/^\ufeff/u, "");
}

/**
 * Loads a YAML configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadYAMLConfigFile(filePath) {
    debug$2(`Loading YAML config file: ${filePath}`);

    // lazy load YAML to improve performance when not used
    const yaml = require$1("js-yaml");

    try {

        // empty YAML file can be null, so always use
        return yaml.load(readFile(filePath)) || {};
    } catch (e) {
        debug$2(`Error reading YAML file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a JSON configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadJSONConfigFile(filePath) {
    debug$2(`Loading JSON config file: ${filePath}`);

    try {
        return JSON.parse(stripComments__default["default"](readFile(filePath)));
    } catch (e) {
        debug$2(`Error reading JSON file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        e.messageTemplate = "failed-to-read-json";
        e.messageData = {
            path: filePath,
            message: e.message
        };
        throw e;
    }
}

/**
 * Loads a legacy (.eslintrc) configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadLegacyConfigFile(filePath) {
    debug$2(`Loading legacy config file: ${filePath}`);

    // lazy load YAML to improve performance when not used
    const yaml = require$1("js-yaml");

    try {
        return yaml.load(stripComments__default["default"](readFile(filePath))) || /* istanbul ignore next */ {};
    } catch (e) {
        debug$2("Error reading YAML file: %s\n%o", filePath, e);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a JavaScript configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadJSConfigFile(filePath) {
    debug$2(`Loading JS config file: ${filePath}`);
    try {
        return importFresh__default["default"](filePath);
    } catch (e) {
        debug$2(`Error reading JavaScript file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a configuration from a package.json file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadPackageJSONConfigFile(filePath) {
    debug$2(`Loading package.json config file: ${filePath}`);
    try {
        const packageData = loadJSONConfigFile(filePath);

        if (!Object.hasOwn(packageData, "eslintConfig")) {
            throw Object.assign(
                new Error("package.json file doesn't have 'eslintConfig' field."),
                { code: "ESLINT_CONFIG_FIELD_NOT_FOUND" }
            );
        }

        return packageData.eslintConfig;
    } catch (e) {
        debug$2(`Error reading package.json file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a `.eslintignore` from a file.
 * @param {string} filePath The filename to load.
 * @returns {string[]} The ignore patterns from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadESLintIgnoreFile(filePath) {
    debug$2(`Loading .eslintignore file: ${filePath}`);

    try {
        return readFile(filePath)
            .split(/\r?\n/gu)
            .filter(line => line.trim() !== "" && !line.startsWith("#"));
    } catch (e) {
        debug$2(`Error reading .eslintignore file: ${filePath}`);
        e.message = `Cannot read .eslintignore file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Creates an error to notify about a missing config to extend from.
 * @param {string} configName The name of the missing config.
 * @param {string} importerName The name of the config that imported the missing config
 * @param {string} messageTemplate The text template to source error strings from.
 * @returns {Error} The error object to throw
 * @private
 */
function configInvalidError(configName, importerName, messageTemplate) {
    return Object.assign(
        new Error(`Failed to load config "${configName}" to extend from.`),
        {
            messageTemplate,
            messageData: { configName, importerName }
        }
    );
}

/**
 * Loads a configuration file regardless of the source. Inspects the file path
 * to determine the correctly way to load the config file.
 * @param {string} filePath The path to the configuration.
 * @returns {ConfigData|null} The configuration information.
 * @private
 */
function loadConfigFile(filePath) {
    switch (path__default["default"].extname(filePath)) {
        case ".js":
        case ".cjs":
            return loadJSConfigFile(filePath);

        case ".json":
            if (path__default["default"].basename(filePath) === "package.json") {
                return loadPackageJSONConfigFile(filePath);
            }
            return loadJSONConfigFile(filePath);

        case ".yaml":
        case ".yml":
            return loadYAMLConfigFile(filePath);

        default:
            return loadLegacyConfigFile(filePath);
    }
}

/**
 * Write debug log.
 * @param {string} request The requested module name.
 * @param {string} relativeTo The file path to resolve the request relative to.
 * @param {string} filePath The resolved file path.
 * @returns {void}
 */
function writeDebugLogForLoading(request, relativeTo, filePath) {
    /* istanbul ignore next */
    if (debug$2.enabled) {
        let nameAndVersion = null; // eslint-disable-line no-useless-assignment -- known bug in the rule

        try {
            const packageJsonPath = resolve(
                `${request}/package.json`,
                relativeTo
            );
            const { version = "unknown" } = require$1(packageJsonPath);

            nameAndVersion = `${request}@${version}`;
        } catch (error) {
            debug$2("package.json was not found:", error.message);
            nameAndVersion = request;
        }

        debug$2("Loaded: %s (%s)", nameAndVersion, filePath);
    }
}

/**
 * Create a new context with default values.
 * @param {ConfigArrayFactoryInternalSlots} slots The internal slots.
 * @param {"config" | "ignore" | "implicit-processor" | undefined} providedType The type of the current configuration. Default is `"config"`.
 * @param {string | undefined} providedName The name of the current configuration. Default is the relative path from `cwd` to `filePath`.
 * @param {string | undefined} providedFilePath The path to the current configuration. Default is empty string.
 * @param {string | undefined} providedMatchBasePath The type of the current configuration. Default is the directory of `filePath` or `cwd`.
 * @returns {ConfigArrayFactoryLoadingContext} The created context.
 */
function createContext(
    { cwd, resolvePluginsRelativeTo },
    providedType,
    providedName,
    providedFilePath,
    providedMatchBasePath
) {
    const filePath = providedFilePath
        ? path__default["default"].resolve(cwd, providedFilePath)
        : "";
    const matchBasePath =
        (providedMatchBasePath && path__default["default"].resolve(cwd, providedMatchBasePath)) ||
        (filePath && path__default["default"].dirname(filePath)) ||
        cwd;
    const name =
        providedName ||
        (filePath && path__default["default"].relative(cwd, filePath)) ||
        "";
    const pluginBasePath =
        resolvePluginsRelativeTo ||
        (filePath && path__default["default"].dirname(filePath)) ||
        cwd;
    const type = providedType || "config";

    return { filePath, matchBasePath, name, pluginBasePath, type };
}

/**
 * Normalize a given plugin.
 * - Ensure the object to have four properties: configs, environments, processors, and rules.
 * - Ensure the object to not have other properties.
 * @param {Plugin} plugin The plugin to normalize.
 * @returns {Plugin} The normalized plugin.
 */
function normalizePlugin(plugin) {

    // first check the cache
    let normalizedPlugin = normalizedPlugins.get(plugin);

    if (normalizedPlugin) {
        return normalizedPlugin;
    }

    normalizedPlugin = {
        configs: plugin.configs || {},
        environments: plugin.environments || {},
        processors: plugin.processors || {},
        rules: plugin.rules || {}
    };

    // save the reference for later
    normalizedPlugins.set(plugin, normalizedPlugin);

    return normalizedPlugin;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * The factory of `ConfigArray` objects.
 */
class ConfigArrayFactory {

    /**
     * Initialize this instance.
     * @param {ConfigArrayFactoryOptions} [options] The map for additional plugins.
     */
    constructor({
        additionalPluginPool = new Map(),
        cwd = process.cwd(),
        resolvePluginsRelativeTo,
        builtInRules,
        resolver = ModuleResolver,
        eslintAllPath,
        getEslintAllConfig,
        eslintRecommendedPath,
        getEslintRecommendedConfig
    } = {}) {
        internalSlotsMap$1.set(this, {
            additionalPluginPool,
            cwd,
            resolvePluginsRelativeTo:
                resolvePluginsRelativeTo &&
                path__default["default"].resolve(cwd, resolvePluginsRelativeTo),
            builtInRules,
            resolver,
            eslintAllPath,
            getEslintAllConfig,
            eslintRecommendedPath,
            getEslintRecommendedConfig
        });
    }

    /**
     * Create `ConfigArray` instance from a config data.
     * @param {ConfigData|null} configData The config data to create.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.filePath] The path to this config data.
     * @param {string} [options.name] The config name.
     * @returns {ConfigArray} Loaded config.
     */
    create(configData, { basePath, filePath, name } = {}) {
        if (!configData) {
            return new ConfigArray();
        }

        const slots = internalSlotsMap$1.get(this);
        const ctx = createContext(slots, "config", name, filePath, basePath);
        const elements = this._normalizeConfigData(configData, ctx);

        return new ConfigArray(...elements);
    }

    /**
     * Load a config file.
     * @param {string} filePath The path to a config file.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.name] The config name.
     * @returns {ConfigArray} Loaded config.
     */
    loadFile(filePath, { basePath, name } = {}) {
        const slots = internalSlotsMap$1.get(this);
        const ctx = createContext(slots, "config", name, filePath, basePath);

        return new ConfigArray(...this._loadConfigData(ctx));
    }

    /**
     * Load the config file on a given directory if exists.
     * @param {string} directoryPath The path to a directory.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.name] The config name.
     * @throws {Error} If the config file is invalid.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     */
    loadInDirectory(directoryPath, { basePath, name } = {}) {
        const slots = internalSlotsMap$1.get(this);

        for (const filename of configFilenames) {
            const ctx = createContext(
                slots,
                "config",
                name,
                path__default["default"].join(directoryPath, filename),
                basePath
            );

            if (fs__default["default"].existsSync(ctx.filePath) && fs__default["default"].statSync(ctx.filePath).isFile()) {
                let configData;

                try {
                    configData = loadConfigFile(ctx.filePath);
                } catch (error) {
                    if (!error || error.code !== "ESLINT_CONFIG_FIELD_NOT_FOUND") {
                        throw error;
                    }
                }

                if (configData) {
                    debug$2(`Config file found: ${ctx.filePath}`);
                    return new ConfigArray(
                        ...this._normalizeConfigData(configData, ctx)
                    );
                }
            }
        }

        debug$2(`Config file not found on ${directoryPath}`);
        return new ConfigArray();
    }

    /**
     * Check if a config file on a given directory exists or not.
     * @param {string} directoryPath The path to a directory.
     * @returns {string | null} The path to the found config file. If not found then null.
     */
    static getPathToConfigFileInDirectory(directoryPath) {
        for (const filename of configFilenames) {
            const filePath = path__default["default"].join(directoryPath, filename);

            if (fs__default["default"].existsSync(filePath)) {
                if (filename === "package.json") {
                    try {
                        loadPackageJSONConfigFile(filePath);
                        return filePath;
                    } catch { /* ignore */ }
                } else {
                    return filePath;
                }
            }
        }
        return null;
    }

    /**
     * Load `.eslintignore` file.
     * @param {string} filePath The path to a `.eslintignore` file to load.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     */
    loadESLintIgnore(filePath) {
        const slots = internalSlotsMap$1.get(this);
        const ctx = createContext(
            slots,
            "ignore",
            void 0,
            filePath,
            slots.cwd
        );
        const ignorePatterns = loadESLintIgnoreFile(ctx.filePath);

        return new ConfigArray(
            ...this._normalizeESLintIgnoreData(ignorePatterns, ctx)
        );
    }

    /**
     * Load `.eslintignore` file in the current working directory.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     * @throws {Error} If the ignore file is invalid.
     */
    loadDefaultESLintIgnore() {
        const slots = internalSlotsMap$1.get(this);
        const eslintIgnorePath = path__default["default"].resolve(slots.cwd, ".eslintignore");
        const packageJsonPath = path__default["default"].resolve(slots.cwd, "package.json");

        if (fs__default["default"].existsSync(eslintIgnorePath)) {
            return this.loadESLintIgnore(eslintIgnorePath);
        }
        if (fs__default["default"].existsSync(packageJsonPath)) {
            const data = loadJSONConfigFile(packageJsonPath);

            if (Object.hasOwn(data, "eslintIgnore")) {
                if (!Array.isArray(data.eslintIgnore)) {
                    throw new Error("Package.json eslintIgnore property requires an array of paths");
                }
                const ctx = createContext(
                    slots,
                    "ignore",
                    "eslintIgnore in package.json",
                    packageJsonPath,
                    slots.cwd
                );

                return new ConfigArray(
                    ...this._normalizeESLintIgnoreData(data.eslintIgnore, ctx)
                );
            }
        }

        return new ConfigArray();
    }

    /**
     * Load a given config file.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} Loaded config.
     * @private
     */
    _loadConfigData(ctx) {
        return this._normalizeConfigData(loadConfigFile(ctx.filePath), ctx);
    }

    /**
     * Normalize a given `.eslintignore` data to config array elements.
     * @param {string[]} ignorePatterns The patterns to ignore files.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    *_normalizeESLintIgnoreData(ignorePatterns, ctx) {
        const elements = this._normalizeObjectConfigData(
            { ignorePatterns },
            ctx
        );

        // Set `ignorePattern.loose` flag for backward compatibility.
        for (const element of elements) {
            if (element.ignorePattern) {
                element.ignorePattern.loose = true;
            }
            yield element;
        }
    }

    /**
     * Normalize a given config to an array.
     * @param {ConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    _normalizeConfigData(configData, ctx) {
        const validator = new ConfigValidator();

        validator.validateConfigSchema(configData, ctx.name || ctx.filePath);
        return this._normalizeObjectConfigData(configData, ctx);
    }

    /**
     * Normalize a given config to an array.
     * @param {ConfigData|OverrideConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    *_normalizeObjectConfigData(configData, ctx) {
        const { files, excludedFiles, ...configBody } = configData;
        const criteria = OverrideTester.create(
            files,
            excludedFiles,
            ctx.matchBasePath
        );
        const elements = this._normalizeObjectConfigDataBody(configBody, ctx);

        // Apply the criteria to every element.
        for (const element of elements) {

            /*
             * Merge the criteria.
             * This is for the `overrides` entries that came from the
             * configurations of `overrides[].extends`.
             */
            element.criteria = OverrideTester.and(criteria, element.criteria);

            /*
             * Remove `root` property to ignore `root` settings which came from
             * `extends` in `overrides`.
             */
            if (element.criteria) {
                element.root = void 0;
            }

            yield element;
        }
    }

    /**
     * Normalize a given config to an array.
     * @param {ConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    *_normalizeObjectConfigDataBody(
        {
            env,
            extends: extend,
            globals,
            ignorePatterns,
            noInlineConfig,
            parser: parserName,
            parserOptions,
            plugins: pluginList,
            processor,
            reportUnusedDisableDirectives,
            root,
            rules,
            settings,
            overrides: overrideList = []
        },
        ctx
    ) {
        const extendList = Array.isArray(extend) ? extend : [extend];
        const ignorePattern = ignorePatterns && new IgnorePattern(
            Array.isArray(ignorePatterns) ? ignorePatterns : [ignorePatterns],
            ctx.matchBasePath
        );

        // Flatten `extends`.
        for (const extendName of extendList.filter(Boolean)) {
            yield* this._loadExtends(extendName, ctx);
        }

        // Load parser & plugins.
        const parser = parserName && this._loadParser(parserName, ctx);
        const plugins = pluginList && this._loadPlugins(pluginList, ctx);

        // Yield pseudo config data for file extension processors.
        if (plugins) {
            yield* this._takeFileExtensionProcessors(plugins, ctx);
        }

        // Yield the config data except `extends` and `overrides`.
        yield {

            // Debug information.
            type: ctx.type,
            name: ctx.name,
            filePath: ctx.filePath,

            // Config data.
            criteria: null,
            env,
            globals,
            ignorePattern,
            noInlineConfig,
            parser,
            parserOptions,
            plugins,
            processor,
            reportUnusedDisableDirectives,
            root,
            rules,
            settings
        };

        // Flatten `overries`.
        for (let i = 0; i < overrideList.length; ++i) {
            yield* this._normalizeObjectConfigData(
                overrideList[i],
                { ...ctx, name: `${ctx.name}#overrides[${i}]` }
            );
        }
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtends(extendName, ctx) {
        debug$2("Loading {extends:%j} relative to %s", extendName, ctx.filePath);
        try {
            if (extendName.startsWith("eslint:")) {
                return this._loadExtendedBuiltInConfig(extendName, ctx);
            }
            if (extendName.startsWith("plugin:")) {
                return this._loadExtendedPluginConfig(extendName, ctx);
            }
            return this._loadExtendedShareableConfig(extendName, ctx);
        } catch (error) {
            error.message += `\nReferenced from: ${ctx.filePath || ctx.name}`;
            throw error;
        }
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtendedBuiltInConfig(extendName, ctx) {
        const {
            eslintAllPath,
            getEslintAllConfig,
            eslintRecommendedPath,
            getEslintRecommendedConfig
        } = internalSlotsMap$1.get(this);

        if (extendName === "eslint:recommended") {
            const name = `${ctx.name} » ${extendName}`;

            if (getEslintRecommendedConfig) {
                if (typeof getEslintRecommendedConfig !== "function") {
                    throw new Error(`getEslintRecommendedConfig must be a function instead of '${getEslintRecommendedConfig}'`);
                }
                return this._normalizeConfigData(getEslintRecommendedConfig(), { ...ctx, name, filePath: "" });
            }
            return this._loadConfigData({
                ...ctx,
                name,
                filePath: eslintRecommendedPath
            });
        }
        if (extendName === "eslint:all") {
            const name = `${ctx.name} » ${extendName}`;

            if (getEslintAllConfig) {
                if (typeof getEslintAllConfig !== "function") {
                    throw new Error(`getEslintAllConfig must be a function instead of '${getEslintAllConfig}'`);
                }
                return this._normalizeConfigData(getEslintAllConfig(), { ...ctx, name, filePath: "" });
            }
            return this._loadConfigData({
                ...ctx,
                name,
                filePath: eslintAllPath
            });
        }

        throw configInvalidError(extendName, ctx.name, "extend-config-missing");
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtendedPluginConfig(extendName, ctx) {
        const slashIndex = extendName.lastIndexOf("/");

        if (slashIndex === -1) {
            throw configInvalidError(extendName, ctx.filePath, "plugin-invalid");
        }

        const pluginName = extendName.slice("plugin:".length, slashIndex);
        const configName = extendName.slice(slashIndex + 1);

        if (isFilePath(pluginName)) {
            throw new Error("'extends' cannot use a file path for plugins.");
        }

        const plugin = this._loadPlugin(pluginName, ctx);
        const configData =
            plugin.definition &&
            plugin.definition.configs[configName];

        if (configData) {
            return this._normalizeConfigData(configData, {
                ...ctx,
                filePath: plugin.filePath || ctx.filePath,
                name: `${ctx.name} » plugin:${plugin.id}/${configName}`
            });
        }

        throw plugin.error || configInvalidError(extendName, ctx.filePath, "extend-config-missing");
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtendedShareableConfig(extendName, ctx) {
        const { cwd, resolver } = internalSlotsMap$1.get(this);
        const relativeTo = ctx.filePath || path__default["default"].join(cwd, "__placeholder__.js");
        let request;

        if (isFilePath(extendName)) {
            request = extendName;
        } else if (extendName.startsWith(".")) {
            request = `./${extendName}`; // For backward compatibility. A ton of tests depended on this behavior.
        } else {
            request = normalizePackageName(
                extendName,
                "eslint-config"
            );
        }

        let filePath;

        try {
            filePath = resolver.resolve(request, relativeTo);
        } catch (error) {
            /* istanbul ignore else */
            if (error && error.code === "MODULE_NOT_FOUND") {
                throw configInvalidError(extendName, ctx.filePath, "extend-config-missing");
            }
            throw error;
        }

        writeDebugLogForLoading(request, relativeTo, filePath);
        return this._loadConfigData({
            ...ctx,
            filePath,
            name: `${ctx.name} » ${request}`
        });
    }

    /**
     * Load given plugins.
     * @param {string[]} names The plugin names to load.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {Record<string,DependentPlugin>} The loaded parser.
     * @private
     */
    _loadPlugins(names, ctx) {
        return names.reduce((map, name) => {
            if (isFilePath(name)) {
                throw new Error("Plugins array cannot includes file paths.");
            }
            const plugin = this._loadPlugin(name, ctx);

            map[plugin.id] = plugin;

            return map;
        }, {});
    }

    /**
     * Load a given parser.
     * @param {string} nameOrPath The package name or the path to a parser file.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {DependentParser} The loaded parser.
     */
    _loadParser(nameOrPath, ctx) {
        debug$2("Loading parser %j from %s", nameOrPath, ctx.filePath);

        const { cwd, resolver } = internalSlotsMap$1.get(this);
        const relativeTo = ctx.filePath || path__default["default"].join(cwd, "__placeholder__.js");

        try {
            const filePath = resolver.resolve(nameOrPath, relativeTo);

            writeDebugLogForLoading(nameOrPath, relativeTo, filePath);

            return new ConfigDependency({
                definition: require$1(filePath),
                filePath,
                id: nameOrPath,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        } catch (error) {

            // If the parser name is "espree", load the espree of ESLint.
            if (nameOrPath === "espree") {
                debug$2("Fallback espree.");
                return new ConfigDependency({
                    definition: require$1("espree"),
                    filePath: require$1.resolve("espree"),
                    id: nameOrPath,
                    importerName: ctx.name,
                    importerPath: ctx.filePath
                });
            }

            debug$2("Failed to load parser '%s' declared in '%s'.", nameOrPath, ctx.name);
            error.message = `Failed to load parser '${nameOrPath}' declared in '${ctx.name}': ${error.message}`;

            return new ConfigDependency({
                error,
                id: nameOrPath,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        }
    }

    /**
     * Load a given plugin.
     * @param {string} name The plugin name to load.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {DependentPlugin} The loaded plugin.
     * @private
     */
    _loadPlugin(name, ctx) {
        debug$2("Loading plugin %j from %s", name, ctx.filePath);

        const { additionalPluginPool, resolver } = internalSlotsMap$1.get(this);
        const request = normalizePackageName(name, "eslint-plugin");
        const id = getShorthandName(request, "eslint-plugin");
        const relativeTo = path__default["default"].join(ctx.pluginBasePath, "__placeholder__.js");

        if (name.match(/\s+/u)) {
            const error = Object.assign(
                new Error(`Whitespace found in plugin name '${name}'`),
                {
                    messageTemplate: "whitespace-found",
                    messageData: { pluginName: request }
                }
            );

            return new ConfigDependency({
                error,
                id,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        }

        // Check for additional pool.
        const plugin =
            additionalPluginPool.get(request) ||
            additionalPluginPool.get(id);

        if (plugin) {
            return new ConfigDependency({
                definition: normalizePlugin(plugin),
                original: plugin,
                filePath: "", // It's unknown where the plugin came from.
                id,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        }

        let filePath;
        let error;

        try {
            filePath = resolver.resolve(request, relativeTo);
        } catch (resolveError) {
            error = resolveError;
            /* istanbul ignore else */
            if (error && error.code === "MODULE_NOT_FOUND") {
                error.messageTemplate = "plugin-missing";
                error.messageData = {
                    pluginName: request,
                    resolvePluginsRelativeTo: ctx.pluginBasePath,
                    importerName: ctx.name
                };
            }
        }

        if (filePath) {
            try {
                writeDebugLogForLoading(request, relativeTo, filePath);

                const startTime = Date.now();
                const pluginDefinition = require$1(filePath);

                debug$2(`Plugin ${filePath} loaded in: ${Date.now() - startTime}ms`);

                return new ConfigDependency({
                    definition: normalizePlugin(pluginDefinition),
                    original: pluginDefinition,
                    filePath,
                    id,
                    importerName: ctx.name,
                    importerPath: ctx.filePath
                });
            } catch (loadError) {
                error = loadError;
            }
        }

        debug$2("Failed to load plugin '%s' declared in '%s'.", name, ctx.name);
        error.message = `Failed to load plugin '${name}' declared in '${ctx.name}': ${error.message}`;
        return new ConfigDependency({
            error,
            id,
            importerName: ctx.name,
            importerPath: ctx.filePath
        });
    }

    /**
     * Take file expression processors as config array elements.
     * @param {Record<string,DependentPlugin>} plugins The plugin definitions.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The config array elements of file expression processors.
     * @private
     */
    *_takeFileExtensionProcessors(plugins, ctx) {
        for (const pluginId of Object.keys(plugins)) {
            const processors =
                plugins[pluginId] &&
                plugins[pluginId].definition &&
                plugins[pluginId].definition.processors;

            if (!processors) {
                continue;
            }

            for (const processorId of Object.keys(processors)) {
                if (processorId.startsWith(".")) {
                    yield* this._normalizeObjectConfigData(
                        {
                            files: [`*${processorId}`],
                            processor: `${pluginId}/${processorId}`
                        },
                        {
                            ...ctx,
                            type: "implicit-processor",
                            name: `${ctx.name}#processors["${pluginId}/${processorId}"]`
                        }
                    );
                }
            }
        }
    }
}

/**
 * @fileoverview `CascadingConfigArrayFactory` class.
 *
 * `CascadingConfigArrayFactory` class has a responsibility:
 *
 * 1. Handles cascading of config files.
 *
 * It provides two methods:
 *
 * - `getConfigArrayForFile(filePath)`
 *     Get the corresponded configuration of a given file. This method doesn't
 *     throw even if the given file didn't exist.
 * - `clearCache()`
 *     Clear the internal cache. You have to call this method when
 *     `additionalPluginPool` was updated if `baseConfig` or `cliConfig` depends
 *     on the additional plugins. (`CLIEngine#addPlugin()` method calls this.)
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

const debug$1 = debugOrig__default["default"]("eslintrc:cascading-config-array-factory");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

// Define types for VSCode IntelliSense.
/** @typedef {import("./shared/types").ConfigData} ConfigData */
/** @typedef {import("./shared/types").Parser} Parser */
/** @typedef {import("./shared/types").Plugin} Plugin */
/** @typedef {import("./shared/types").Rule} Rule */
/** @typedef {ReturnType<ConfigArrayFactory["create"]>} ConfigArray */

/**
 * @typedef {Object} CascadingConfigArrayFactoryOptions
 * @property {Map<string,Plugin>} [additionalPluginPool] The map for additional plugins.
 * @property {ConfigData} [baseConfig] The config by `baseConfig` option.
 * @property {ConfigData} [cliConfig] The config by CLI options (`--env`, `--global`, `--ignore-pattern`, `--parser`, `--parser-options`, `--plugin`, and `--rule`). CLI options overwrite the setting in config files.
 * @property {string} [cwd] The base directory to start lookup.
 * @property {string} [ignorePath] The path to the alternative file of `.eslintignore`.
 * @property {string[]} [rulePaths] The value of `--rulesdir` option.
 * @property {string} [specificConfigPath] The value of `--config` option.
 * @property {boolean} [useEslintrc] if `false` then it doesn't load config files.
 * @property {Function} loadRules The function to use to load rules.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {Function} getEslintAllConfig Returns the config data for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 * @property {Function} getEslintRecommendedConfig Returns the config data for eslint:recommended.
 */

/**
 * @typedef {Object} CascadingConfigArrayFactoryInternalSlots
 * @property {ConfigArray} baseConfigArray The config array of `baseConfig` option.
 * @property {ConfigData} baseConfigData The config data of `baseConfig` option. This is used to reset `baseConfigArray`.
 * @property {ConfigArray} cliConfigArray The config array of CLI options.
 * @property {ConfigData} cliConfigData The config data of CLI options. This is used to reset `cliConfigArray`.
 * @property {ConfigArrayFactory} configArrayFactory The factory for config arrays.
 * @property {Map<string, ConfigArray>} configCache The cache from directory paths to config arrays.
 * @property {string} cwd The base directory to start lookup.
 * @property {WeakMap<ConfigArray, ConfigArray>} finalizeCache The cache from config arrays to finalized config arrays.
 * @property {string} [ignorePath] The path to the alternative file of `.eslintignore`.
 * @property {string[]|null} rulePaths The value of `--rulesdir` option. This is used to reset `baseConfigArray`.
 * @property {string|null} specificConfigPath The value of `--config` option. This is used to reset `cliConfigArray`.
 * @property {boolean} useEslintrc if `false` then it doesn't load config files.
 * @property {Function} loadRules The function to use to load rules.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {Function} getEslintAllConfig Returns the config data for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 * @property {Function} getEslintRecommendedConfig Returns the config data for eslint:recommended.
 */

/** @type {WeakMap<CascadingConfigArrayFactory, CascadingConfigArrayFactoryInternalSlots>} */
const internalSlotsMap = new WeakMap();

/**
 * Create the config array from `baseConfig` and `rulePaths`.
 * @param {CascadingConfigArrayFactoryInternalSlots} slots The slots.
 * @returns {ConfigArray} The config array of the base configs.
 */
function createBaseConfigArray({
    configArrayFactory,
    baseConfigData,
    rulePaths,
    cwd,
    loadRules
}) {
    const baseConfigArray = configArrayFactory.create(
        baseConfigData,
        { name: "BaseConfig" }
    );

    /*
     * Create the config array element for the default ignore patterns.
     * This element has `ignorePattern` property that ignores the default
     * patterns in the current working directory.
     */
    baseConfigArray.unshift(configArrayFactory.create(
        { ignorePatterns: IgnorePattern.DefaultPatterns },
        { name: "DefaultIgnorePattern" }
    )[0]);

    /*
     * Load rules `--rulesdir` option as a pseudo plugin.
     * Use a pseudo plugin to define rules of `--rulesdir`, so we can validate
     * the rule's options with only information in the config array.
     */
    if (rulePaths && rulePaths.length > 0) {
        baseConfigArray.push({
            type: "config",
            name: "--rulesdir",
            filePath: "",
            plugins: {
                "": new ConfigDependency({
                    definition: {
                        rules: rulePaths.reduce(
                            (map, rulesPath) => Object.assign(
                                map,
                                loadRules(rulesPath, cwd)
                            ),
                            {}
                        )
                    },
                    filePath: "",
                    id: "",
                    importerName: "--rulesdir",
                    importerPath: ""
                })
            }
        });
    }

    return baseConfigArray;
}

/**
 * Create the config array from CLI options.
 * @param {CascadingConfigArrayFactoryInternalSlots} slots The slots.
 * @returns {ConfigArray} The config array of the base configs.
 */
function createCLIConfigArray({
    cliConfigData,
    configArrayFactory,
    cwd,
    ignorePath,
    specificConfigPath
}) {
    const cliConfigArray = configArrayFactory.create(
        cliConfigData,
        { name: "CLIOptions" }
    );

    cliConfigArray.unshift(
        ...(ignorePath
            ? configArrayFactory.loadESLintIgnore(ignorePath)
            : configArrayFactory.loadDefaultESLintIgnore())
    );

    if (specificConfigPath) {
        cliConfigArray.unshift(
            ...configArrayFactory.loadFile(
                specificConfigPath,
                { name: "--config", basePath: cwd }
            )
        );
    }

    return cliConfigArray;
}

/**
 * The error type when there are files matched by a glob, but all of them have been ignored.
 */
class ConfigurationNotFoundError extends Error {


    /**
     * @param {string} directoryPath The directory path.
     */
    constructor(directoryPath) {
        super(`No ESLint configuration found in ${directoryPath}.`);
        this.messageTemplate = "no-config-found";
        this.messageData = { directoryPath };
    }
}

/**
 * This class provides the functionality that enumerates every file which is
 * matched by given glob patterns and that configuration.
 */
class CascadingConfigArrayFactory {

    /**
     * Initialize this enumerator.
     * @param {CascadingConfigArrayFactoryOptions} options The options.
     */
    constructor({
        additionalPluginPool = new Map(),
        baseConfig: baseConfigData = null,
        cliConfig: cliConfigData = null,
        cwd = process.cwd(),
        ignorePath,
        resolvePluginsRelativeTo,
        rulePaths = [],
        specificConfigPath = null,
        useEslintrc = true,
        builtInRules = new Map(),
        loadRules,
        resolver,
        eslintRecommendedPath,
        getEslintRecommendedConfig,
        eslintAllPath,
        getEslintAllConfig
    } = {}) {
        const configArrayFactory = new ConfigArrayFactory({
            additionalPluginPool,
            cwd,
            resolvePluginsRelativeTo,
            builtInRules,
            resolver,
            eslintRecommendedPath,
            getEslintRecommendedConfig,
            eslintAllPath,
            getEslintAllConfig
        });

        internalSlotsMap.set(this, {
            baseConfigArray: createBaseConfigArray({
                baseConfigData,
                configArrayFactory,
                cwd,
                rulePaths,
                loadRules
            }),
            baseConfigData,
            cliConfigArray: createCLIConfigArray({
                cliConfigData,
                configArrayFactory,
                cwd,
                ignorePath,
                specificConfigPath
            }),
            cliConfigData,
            configArrayFactory,
            configCache: new Map(),
            cwd,
            finalizeCache: new WeakMap(),
            ignorePath,
            rulePaths,
            specificConfigPath,
            useEslintrc,
            builtInRules,
            loadRules
        });
    }

    /**
     * The path to the current working directory.
     * This is used by tests.
     * @type {string}
     */
    get cwd() {
        const { cwd } = internalSlotsMap.get(this);

        return cwd;
    }

    /**
     * Get the config array of a given file.
     * If `filePath` was not given, it returns the config which contains only
     * `baseConfigData` and `cliConfigData`.
     * @param {string} [filePath] The file path to a file.
     * @param {Object} [options] The options.
     * @param {boolean} [options.ignoreNotFoundError] If `true` then it doesn't throw `ConfigurationNotFoundError`.
     * @returns {ConfigArray} The config array of the file.
     */
    getConfigArrayForFile(filePath, { ignoreNotFoundError = false } = {}) {
        const {
            baseConfigArray,
            cliConfigArray,
            cwd
        } = internalSlotsMap.get(this);

        if (!filePath) {
            return new ConfigArray(...baseConfigArray, ...cliConfigArray);
        }

        const directoryPath = path__default["default"].dirname(path__default["default"].resolve(cwd, filePath));

        debug$1(`Load config files for ${directoryPath}.`);

        return this._finalizeConfigArray(
            this._loadConfigInAncestors(directoryPath),
            directoryPath,
            ignoreNotFoundError
        );
    }

    /**
     * Set the config data to override all configs.
     * Require to call `clearCache()` method after this method is called.
     * @param {ConfigData} configData The config data to override all configs.
     * @returns {void}
     */
    setOverrideConfig(configData) {
        const slots = internalSlotsMap.get(this);

        slots.cliConfigData = configData;
    }

    /**
     * Clear config cache.
     * @returns {void}
     */
    clearCache() {
        const slots = internalSlotsMap.get(this);

        slots.baseConfigArray = createBaseConfigArray(slots);
        slots.cliConfigArray = createCLIConfigArray(slots);
        slots.configCache.clear();
    }

    /**
     * Load and normalize config files from the ancestor directories.
     * @param {string} directoryPath The path to a leaf directory.
     * @param {boolean} configsExistInSubdirs `true` if configurations exist in subdirectories.
     * @returns {ConfigArray} The loaded config.
     * @throws {Error} If a config file is invalid.
     * @private
     */
    _loadConfigInAncestors(directoryPath, configsExistInSubdirs = false) {
        const {
            baseConfigArray,
            configArrayFactory,
            configCache,
            cwd,
            useEslintrc
        } = internalSlotsMap.get(this);

        if (!useEslintrc) {
            return baseConfigArray;
        }

        let configArray = configCache.get(directoryPath);

        // Hit cache.
        if (configArray) {
            debug$1(`Cache hit: ${directoryPath}.`);
            return configArray;
        }
        debug$1(`No cache found: ${directoryPath}.`);

        const homePath = os__default["default"].homedir();

        // Consider this is root.
        if (directoryPath === homePath && cwd !== homePath) {
            debug$1("Stop traversing because of considered root.");
            if (configsExistInSubdirs) {
                const filePath = ConfigArrayFactory.getPathToConfigFileInDirectory(directoryPath);

                if (filePath) {
                    emitDeprecationWarning(
                        filePath,
                        "ESLINT_PERSONAL_CONFIG_SUPPRESS"
                    );
                }
            }
            return this._cacheConfig(directoryPath, baseConfigArray);
        }

        // Load the config on this directory.
        try {
            configArray = configArrayFactory.loadInDirectory(directoryPath);
        } catch (error) {
            /* istanbul ignore next */
            if (error.code === "EACCES") {
                debug$1("Stop traversing because of 'EACCES' error.");
                return this._cacheConfig(directoryPath, baseConfigArray);
            }
            throw error;
        }

        if (configArray.length > 0 && configArray.isRoot()) {
            debug$1("Stop traversing because of 'root:true'.");
            configArray.unshift(...baseConfigArray);
            return this._cacheConfig(directoryPath, configArray);
        }

        // Load from the ancestors and merge it.
        const parentPath = path__default["default"].dirname(directoryPath);
        const parentConfigArray = parentPath && parentPath !== directoryPath
            ? this._loadConfigInAncestors(
                parentPath,
                configsExistInSubdirs || configArray.length > 0
            )
            : baseConfigArray;

        if (configArray.length > 0) {
            configArray.unshift(...parentConfigArray);
        } else {
            configArray = parentConfigArray;
        }

        // Cache and return.
        return this._cacheConfig(directoryPath, configArray);
    }

    /**
     * Freeze and cache a given config.
     * @param {string} directoryPath The path to a directory as a cache key.
     * @param {ConfigArray} configArray The config array as a cache value.
     * @returns {ConfigArray} The `configArray` (frozen).
     */
    _cacheConfig(directoryPath, configArray) {
        const { configCache } = internalSlotsMap.get(this);

        Object.freeze(configArray);
        configCache.set(directoryPath, configArray);

        return configArray;
    }

    /**
     * Finalize a given config array.
     * Concatenate `--config` and other CLI options.
     * @param {ConfigArray} configArray The parent config array.
     * @param {string} directoryPath The path to the leaf directory to find config files.
     * @param {boolean} ignoreNotFoundError If `true` then it doesn't throw `ConfigurationNotFoundError`.
     * @returns {ConfigArray} The loaded config.
     * @throws {Error} If a config file is invalid.
     * @private
     */
    _finalizeConfigArray(configArray, directoryPath, ignoreNotFoundError) {
        const {
            cliConfigArray,
            configArrayFactory,
            finalizeCache,
            useEslintrc,
            builtInRules
        } = internalSlotsMap.get(this);

        let finalConfigArray = finalizeCache.get(configArray);

        if (!finalConfigArray) {
            finalConfigArray = configArray;

            // Load the personal config if there are no regular config files.
            if (
                useEslintrc &&
                configArray.every(c => !c.filePath) &&
                cliConfigArray.every(c => !c.filePath) // `--config` option can be a file.
            ) {
                const homePath = os__default["default"].homedir();

                debug$1("Loading the config file of the home directory:", homePath);

                const personalConfigArray = configArrayFactory.loadInDirectory(
                    homePath,
                    { name: "PersonalConfig" }
                );

                if (
                    personalConfigArray.length > 0 &&
                    !directoryPath.startsWith(homePath)
                ) {
                    const lastElement =
                        personalConfigArray.at(-1);

                    emitDeprecationWarning(
                        lastElement.filePath,
                        "ESLINT_PERSONAL_CONFIG_LOAD"
                    );
                }

                finalConfigArray = finalConfigArray.concat(personalConfigArray);
            }

            // Apply CLI options.
            if (cliConfigArray.length > 0) {
                finalConfigArray = finalConfigArray.concat(cliConfigArray);
            }

            // Validate rule settings and environments.
            const validator = new ConfigValidator({
                builtInRules
            });

            validator.validateConfigArray(finalConfigArray);

            // Cache it.
            Object.freeze(finalConfigArray);
            finalizeCache.set(configArray, finalConfigArray);

            debug$1(
                "Configuration was determined: %o on %s",
                finalConfigArray,
                directoryPath
            );
        }

        // At least one element (the default ignore patterns) exists.
        if (!ignoreNotFoundError && useEslintrc && finalConfigArray.length <= 1) {
            throw new ConfigurationNotFoundError(directoryPath);
        }

        return finalConfigArray;
    }
}

/**
 * @fileoverview Compatibility class for flat config.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/** @typedef {import("../../shared/types").Environment} Environment */
/** @typedef {import("../../shared/types").Processor} Processor */

const debug = debugOrig__default["default"]("eslintrc:flat-compat");
const cafactory = Symbol("cafactory");

/**
 * Translates an ESLintRC-style config object into a flag-config-style config
 * object.
 * @param {Object} eslintrcConfig An ESLintRC-style config object.
 * @param {Object} options Options to help translate the config.
 * @param {string} options.resolveConfigRelativeTo To the directory to resolve
 *      configs from.
 * @param {string} options.resolvePluginsRelativeTo The directory to resolve
 *      plugins from.
 * @param {ReadOnlyMap<string,Environment>} options.pluginEnvironments A map of plugin environment
 *      names to objects.
 * @param {ReadOnlyMap<string,Processor>} options.pluginProcessors A map of plugin processor
 *      names to objects.
 * @returns {Object} A flag-config-style config object.
 * @throws {Error} If a plugin or environment cannot be resolved.
 */
function translateESLintRC(eslintrcConfig, {
    resolveConfigRelativeTo,
    resolvePluginsRelativeTo,
    pluginEnvironments,
    pluginProcessors
}) {

    const flatConfig = {};
    const configs = [];
    const languageOptions = {};
    const linterOptions = {};
    const keysToCopy = ["settings", "rules", "processor"];
    const languageOptionsKeysToCopy = ["globals", "parser", "parserOptions"];
    const linterOptionsKeysToCopy = ["noInlineConfig", "reportUnusedDisableDirectives"];

    // copy over simple translations
    for (const key of keysToCopy) {
        if (key in eslintrcConfig && typeof eslintrcConfig[key] !== "undefined") {
            flatConfig[key] = eslintrcConfig[key];
        }
    }

    // copy over languageOptions
    for (const key of languageOptionsKeysToCopy) {
        if (key in eslintrcConfig && typeof eslintrcConfig[key] !== "undefined") {

            // create the languageOptions key in the flat config
            flatConfig.languageOptions = languageOptions;

            if (key === "parser") {
                debug(`Resolving parser '${languageOptions[key]}' relative to ${resolveConfigRelativeTo}`);

                if (eslintrcConfig[key].error) {
                    throw eslintrcConfig[key].error;
                }

                languageOptions[key] = eslintrcConfig[key].definition;
                continue;
            }

            // clone any object values that are in the eslintrc config
            if (eslintrcConfig[key] && typeof eslintrcConfig[key] === "object") {
                languageOptions[key] = {
                    ...eslintrcConfig[key]
                };
            } else {
                languageOptions[key] = eslintrcConfig[key];
            }
        }
    }

    // copy over linterOptions
    for (const key of linterOptionsKeysToCopy) {
        if (key in eslintrcConfig && typeof eslintrcConfig[key] !== "undefined") {
            flatConfig.linterOptions = linterOptions;
            linterOptions[key] = eslintrcConfig[key];
        }
    }

    // move ecmaVersion a level up
    if (languageOptions.parserOptions) {

        if ("ecmaVersion" in languageOptions.parserOptions) {
            languageOptions.ecmaVersion = languageOptions.parserOptions.ecmaVersion;
            delete languageOptions.parserOptions.ecmaVersion;
        }

        if ("sourceType" in languageOptions.parserOptions) {
            languageOptions.sourceType = languageOptions.parserOptions.sourceType;
            delete languageOptions.parserOptions.sourceType;
        }

        // check to see if we even need parserOptions anymore and remove it if not
        if (Object.keys(languageOptions.parserOptions).length === 0) {
            delete languageOptions.parserOptions;
        }
    }

    // overrides
    if (eslintrcConfig.criteria) {
        flatConfig.files = [absoluteFilePath => eslintrcConfig.criteria.test(absoluteFilePath)];
    }

    // translate plugins
    if (eslintrcConfig.plugins && typeof eslintrcConfig.plugins === "object") {
        debug(`Translating plugins: ${eslintrcConfig.plugins}`);

        flatConfig.plugins = {};

        for (const pluginName of Object.keys(eslintrcConfig.plugins)) {

            debug(`Translating plugin: ${pluginName}`);
            debug(`Resolving plugin '${pluginName} relative to ${resolvePluginsRelativeTo}`);

            const { original: plugin, error } = eslintrcConfig.plugins[pluginName];

            if (error) {
                throw error;
            }

            flatConfig.plugins[pluginName] = plugin;

            // create a config for any processors
            if (plugin.processors) {
                for (const processorName of Object.keys(plugin.processors)) {
                    if (processorName.startsWith(".")) {
                        debug(`Assigning processor: ${pluginName}/${processorName}`);

                        configs.unshift({
                            files: [`**/*${processorName}`],
                            processor: pluginProcessors.get(`${pluginName}/${processorName}`)
                        });
                    }

                }
            }
        }
    }

    // translate env - must come after plugins
    if (eslintrcConfig.env && typeof eslintrcConfig.env === "object") {
        for (const envName of Object.keys(eslintrcConfig.env)) {

            // only add environments that are true
            if (eslintrcConfig.env[envName]) {
                debug(`Translating environment: ${envName}`);

                if (environments.has(envName)) {

                    // built-in environments should be defined first
                    configs.unshift(...translateESLintRC({
                        criteria: eslintrcConfig.criteria,
                        ...environments.get(envName)
                    }, {
                        resolveConfigRelativeTo,
                        resolvePluginsRelativeTo
                    }));
                } else if (pluginEnvironments.has(envName)) {

                    // if the environment comes from a plugin, it should come after the plugin config
                    configs.push(...translateESLintRC({
                        criteria: eslintrcConfig.criteria,
                        ...pluginEnvironments.get(envName)
                    }, {
                        resolveConfigRelativeTo,
                        resolvePluginsRelativeTo
                    }));
                }
            }
        }
    }

    // only add if there are actually keys in the config
    if (Object.keys(flatConfig).length > 0) {
        configs.push(flatConfig);
    }

    return configs;
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * A compatibility class for working with configs.
 */
class FlatCompat {

    constructor({
        baseDirectory = process.cwd(),
        resolvePluginsRelativeTo = baseDirectory,
        recommendedConfig,
        allConfig
    } = {}) {
        this.baseDirectory = baseDirectory;
        this.resolvePluginsRelativeTo = resolvePluginsRelativeTo;
        this[cafactory] = new ConfigArrayFactory({
            cwd: baseDirectory,
            resolvePluginsRelativeTo,
            getEslintAllConfig() {

                if (!allConfig) {
                    throw new TypeError("Missing parameter 'allConfig' in FlatCompat constructor.");
                }

                // remove name property if it exists
                const config = { ...allConfig };

                delete config.name;

                return config;
            },
            getEslintRecommendedConfig() {

                if (!recommendedConfig) {
                    throw new TypeError("Missing parameter 'recommendedConfig' in FlatCompat constructor.");
                }

                // remove name property if it exists
                const config = { ...recommendedConfig };

                delete config.name;

                return config;
            }
        });
    }

    /**
     * Translates an ESLintRC-style config into a flag-config-style config.
     * @param {Object} eslintrcConfig The ESLintRC-style config object.
     * @returns {Object} A flag-config-style config object.
     */
    config(eslintrcConfig) {
        const eslintrcArray = this[cafactory].create(eslintrcConfig, {
            basePath: this.baseDirectory
        });

        const flatArray = [];
        let hasIgnorePatterns = false;

        eslintrcArray.forEach(configData => {
            if (configData.type === "config") {
                hasIgnorePatterns = hasIgnorePatterns || configData.ignorePattern;
                flatArray.push(...translateESLintRC(configData, {
                    resolveConfigRelativeTo: path__default["default"].join(this.baseDirectory, "__placeholder.js"),
                    resolvePluginsRelativeTo: path__default["default"].join(this.resolvePluginsRelativeTo, "__placeholder.js"),
                    pluginEnvironments: eslintrcArray.pluginEnvironments,
                    pluginProcessors: eslintrcArray.pluginProcessors
                }));
            }
        });

        // combine ignorePatterns to emulate ESLintRC behavior better
        if (hasIgnorePatterns) {
            flatArray.unshift({
                ignores: [filePath => {

                    // Compute the final config for this file.
                    // This filters config array elements by `files`/`excludedFiles` then merges the elements.
                    const finalConfig = eslintrcArray.extractConfig(filePath);

                    // Test the `ignorePattern` properties of the final config.
                    return Boolean(finalConfig.ignores) && finalConfig.ignores(filePath);
                }]
            });
        }

        return flatArray;
    }

    /**
     * Translates the `env` section of an ESLintRC-style config.
     * @param {Object} envConfig The `env` section of an ESLintRC config.
     * @returns {Object[]} An array of flag-config objects representing the environments.
     */
    env(envConfig) {
        return this.config({
            env: envConfig
        });
    }

    /**
     * Translates the `extends` section of an ESLintRC-style config.
     * @param {...string} configsToExtend The names of the configs to load.
     * @returns {Object[]} An array of flag-config objects representing the config.
     */
    extends(...configsToExtend) {
        return this.config({
            extends: configsToExtend
        });
    }

    /**
     * Translates the `plugins` section of an ESLintRC-style config.
     * @param {...string} plugins The names of the plugins to load.
     * @returns {Object[]} An array of flag-config objects representing the plugins.
     */
    plugins(...plugins) {
        return this.config({
            plugins
        });
    }
}

/**
 * @fileoverview Package exports for @eslint/eslintrc
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

const Legacy = {
    ConfigArray,
    createConfigArrayFactoryContext: createContext,
    CascadingConfigArrayFactory,
    ConfigArrayFactory,
    ConfigDependency,
    ExtractedConfig,
    IgnorePattern,
    OverrideTester,
    getUsedExtractedConfigs,
    environments,
    loadConfigFile,

    // shared
    ConfigOps,
    ConfigValidator,
    ModuleResolver,
    naming
};

exports.FlatCompat = FlatCompat;
exports.Legacy = Legacy;
//# sourceMappingURL=eslintrc.cjs.map
