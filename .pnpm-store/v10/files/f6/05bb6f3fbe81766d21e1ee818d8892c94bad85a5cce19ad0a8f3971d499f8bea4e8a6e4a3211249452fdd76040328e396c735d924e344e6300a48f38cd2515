import { ConsolaInstance, ConsolaOptions } from './core.js';
export { ConfirmPromptOptions, Consola, ConsolaReporter, FormatOptions, InputLogObject, LogLevel, LogLevels, LogObject, LogType, LogTypes, MultiSelectOptions, PromptOptions, SelectPromptOptions, TextPromptOptions } from './core.js';

/**
 * Creates a new Consola instance configured specifically for browser environments.
 * This function sets up default reporters and a prompt method tailored to the browser's dialogue APIs.
 *
 * @param {Partial<ConsolaOptions>} [options={}] - Optional configuration options.
 * The options can override the default reporter and prompt behaviour. See {@link ConsolaOptions}.
 * @returns {ConsolaInstance} A new Consola instance optimised for use in browser environments.
 */
declare function createConsola(options?: Partial<ConsolaOptions>): ConsolaInstance;
/**
 * A standard Consola instance created with browser-specific configurations.
 * This instance can be used throughout a browser-based project.
 *
 * @type {ConsolaInstance} consola - The default browser-configured Consola instance.
 */
declare const consola: ConsolaInstance;

// @ts-ignore
export = consola;
export { ConsolaInstance, ConsolaOptions, consola, createConsola };
