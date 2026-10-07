export type FlatConfig = import("@eslint/core").ConfigObject;
export type FixupPluginDefinition = import("@eslint/core").Plugin;
export type FixupRuleDefinition = import("@eslint/core").RuleDefinition;
export type FixupLegacyRuleDefinition = FixupRuleDefinition["create"];
export type FixupConfig = import("@eslint/core").ConfigObject;
export type FixupConfigArray = Array<FixupConfig>;
/**
 * @fileoverview Ignore file utilities for the compat package.
 * @author Nicholas C. Zakas
 */
/** @typedef {import("@eslint/core").ConfigObject} FlatConfig */
/**
 * Converts an ESLint ignore pattern to a minimatch pattern.
 * @param {string} pattern The .eslintignore or .gitignore pattern to convert.
 * @returns {string} The converted pattern.
 */
export function convertIgnorePatternToMinimatch(pattern: string): string;
/**
 * Takes the given configuration and creates a new configuration with all of the
 * rules wrapped to provide the missing methods on the `context` object.
 * @param {FixupConfigArray|FixupConfig} config The configuration to fix up.
 * @returns {FixupConfigArray} The fixed-up configuration.
 */
export function fixupConfigRules(config: FixupConfigArray | FixupConfig): FixupConfigArray;
/**
 * Takes the given plugin and creates a new plugin with all of the rules wrapped
 * to provide the missing methods on the `context` object.
 * @param {FixupPluginDefinition} plugin The plugin to fix up.
 * @returns {FixupPluginDefinition} The fixed-up plugin.
 */
export function fixupPluginRules(plugin: FixupPluginDefinition): FixupPluginDefinition;
/**
 * Takes the given rule and creates a new rule with the `create()` method wrapped
 * to provide the missing methods on the `context` object.
 * @param {FixupRuleDefinition|FixupLegacyRuleDefinition} ruleDefinition The rule to fix up.
 * @returns {FixupRuleDefinition} The fixed-up rule.
 */
export function fixupRule(ruleDefinition: FixupRuleDefinition | FixupLegacyRuleDefinition): FixupRuleDefinition;
/**
 * Reads an ignore file and returns an object with the ignore patterns.
 * @param {string} ignoreFilePath The absolute path to the ignore file.
 * @param {string} [name] The name of the ignore file config.
 * @returns {FlatConfig} An object with an `ignores` property that is an array of ignore patterns.
 * @throws {Error} If the ignore file path is not an absolute path.
 */
export function includeIgnoreFile(ignoreFilePath: string, name?: string): FlatConfig;
