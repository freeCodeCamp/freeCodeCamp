export { ObjectSchema } from "@eslint/object-schema";
export type PropertyDefinition = $eslintobjectschema.PropertyDefinition;
export type ObjectDefinition = $eslintobjectschema.ObjectDefinition;
export type ConfigObject = $typests.ConfigObject;
export type IMinimatchStatic = minimatch.IMinimatchStatic;
export type IMinimatch = minimatch.IMinimatch;
export type ObjectSchemaInstance = ObjectSchema;
/**
 * Represents an array of config objects and provides method for working with
 * those config objects.
 */
export class ConfigArray extends Array<any> {
    /**
     * Creates a new instance of ConfigArray.
     * @param {Iterable|Function|Object} configs An iterable yielding config
     *      objects, or a config function, or a config object.
     * @param {Object} options The options for the ConfigArray.
     * @param {string} [options.basePath="/"] The absolute path of the config file directory.
     * 		Defaults to `"/"`.
     * @param {boolean} [options.normalized=false] Flag indicating if the
     *      configs have already been normalized.
     * @param {Object} [options.schema] The additional schema
     *      definitions to use for the ConfigArray schema.
     * @param {Array<string>} [options.extraConfigTypes] List of config types supported.
     * @throws {TypeError} When the `basePath` is not a non-empty string,
     */
    constructor(configs: Iterable<any> | Function | any, { basePath, normalized, schema: customSchema, extraConfigTypes, }?: {
        basePath?: string;
        normalized?: boolean;
        schema?: any;
        extraConfigTypes?: Array<string>;
    });
    /**
     * The path of the config file that this array was loaded from.
     * This is used to calculate filename matches.
     * @property basePath
     * @type {string}
     */
    basePath: string;
    /**
     * The supported config types.
     * @type {Array<string>}
     */
    extraConfigTypes: Array<string>;
    /**
     * Returns the `files` globs from every config object in the array.
     * This can be used to determine which files will be matched by a
     * config array or to use as a glob pattern when no patterns are provided
     * for a command line interface.
     * @returns {Array<string|Function>} An array of matchers.
     */
    get files(): Array<string | Function>;
    /**
     * Returns ignore matchers that should always be ignored regardless of
     * the matching `files` fields in any configs. This is necessary to mimic
     * the behavior of things like .gitignore and .eslintignore, allowing a
     * globbing operation to be faster.
     * @returns {Object[]} An array of config objects representing global ignores.
     */
    get ignores(): any[];
    /**
     * Indicates if the config array has been normalized.
     * @returns {boolean} True if the config array is normalized, false if not.
     */
    isNormalized(): boolean;
    /**
     * Normalizes a config array by flattening embedded arrays and executing
     * config functions.
     * @param {Object} [context] The context object for config functions.
     * @returns {Promise<ConfigArray>} The current ConfigArray instance.
     */
    normalize(context?: any): Promise<ConfigArray>;
    /**
     * Normalizes a config array by flattening embedded arrays and executing
     * config functions.
     * @param {Object} [context] The context object for config functions.
     * @returns {ConfigArray} The current ConfigArray instance.
     */
    normalizeSync(context?: any): ConfigArray;
    /**
     * Returns the config object for a given file path and a status that can be used to determine why a file has no config.
     * @param {string} filePath The path of a file to get a config for.
     * @returns {{ config?: Object, status: "ignored"|"external"|"unconfigured"|"matched" }}
     * An object with an optional property `config` and property `status`.
     * `config` is the config object for the specified file as returned by {@linkcode ConfigArray.getConfig},
     * `status` a is one of the constants returned by {@linkcode ConfigArray.getConfigStatus}.
     */
    getConfigWithStatus(filePath: string): {
        config?: any;
        status: "ignored" | "external" | "unconfigured" | "matched";
    };
    /**
     * Returns the config object for a given file path.
     * @param {string} filePath The path of a file to get a config for.
     * @returns {Object|undefined} The config object for this file or `undefined`.
     */
    getConfig(filePath: string): any | undefined;
    /**
     * Determines whether a file has a config or why it doesn't.
     * @param {string} filePath The path of the file to check.
     * @returns {"ignored"|"external"|"unconfigured"|"matched"} One of the following values:
     * * `"ignored"`: the file is ignored
     * * `"external"`: the file is outside the base path
     * * `"unconfigured"`: the file is not matched by any config
     * * `"matched"`: the file has a matching config
     */
    getConfigStatus(filePath: string): "ignored" | "external" | "unconfigured" | "matched";
    /**
     * Determines if the given filepath is ignored based on the configs.
     * @param {string} filePath The path of a file to check.
     * @returns {boolean} True if the path is ignored, false if not.
     * @deprecated Use `isFileIgnored` instead.
     */
    isIgnored(filePath: string): boolean;
    /**
     * Determines if the given filepath is ignored based on the configs.
     * @param {string} filePath The path of a file to check.
     * @returns {boolean} True if the path is ignored, false if not.
     */
    isFileIgnored(filePath: string): boolean;
    /**
     * Determines if the given directory is ignored based on the configs.
     * This checks only default `ignores` that don't have `files` in the
     * same config. A pattern such as `/foo` be considered to ignore the directory
     * while a pattern such as `/foo/**` is not considered to ignore the
     * directory because it is matching files.
     * @param {string} directoryPath The path of a directory to check.
     * @returns {boolean} True if the directory is ignored, false if not. Will
     * 		return true for any directory that is not inside of `basePath`.
     * @throws {Error} When the `ConfigArray` is not normalized.
     */
    isDirectoryIgnored(directoryPath: string): boolean;
    #private;
}
export namespace ConfigArraySymbol {
    let isNormalized: symbol;
    let configCache: symbol;
    let schema: symbol;
    let finalizeConfig: symbol;
    let preprocessConfig: symbol;
}
import type * as $eslintobjectschema from "@eslint/object-schema";
import type * as $typests from "./types.ts";
import minimatch from 'minimatch';
import { ObjectSchema } from '@eslint/object-schema';
