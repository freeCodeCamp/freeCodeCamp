export type Config = $eslintcore.ConfigObject;
export type LegacyConfig = $eslintcore.LegacyConfigObject;
export type Plugin = $eslintcore.Plugin;
export type RuleConfig = $eslintcore.RuleConfig;
export type ExtendsElement = $typests.ExtendsElement;
export type SimpleExtendsElement = $typests.SimpleExtendsElement;
export type ConfigWithExtends = $typests.ConfigWithExtends;
export type InfiniteConfigArray = $typests.InfiniteArray<Config>;
export type ConfigWithExtendsArray = $typests.ConfigWithExtendsArray;
/**
 * Helper function to define a config array.
 * @param {ConfigWithExtendsArray} args The arguments to the function.
 * @returns {Config[]} The config array.
 * @throws {TypeError} If no arguments are provided or if an argument is not an object.
 */
export function defineConfig(...args: ConfigWithExtendsArray): Config[];
/**
 * Creates a global ignores config with the given patterns.
 * @param {string[]} ignorePatterns The ignore patterns.
 * @param {string} [name] The name of the global ignores config.
 * @returns {Config} The global ignores config.
 * @throws {TypeError} If ignorePatterns is not an array or if it is empty.
 */
export function globalIgnores(ignorePatterns: string[], name?: string): Config;
import type * as $eslintcore from "@eslint/core";
import type * as $typests from "./types.ts";
