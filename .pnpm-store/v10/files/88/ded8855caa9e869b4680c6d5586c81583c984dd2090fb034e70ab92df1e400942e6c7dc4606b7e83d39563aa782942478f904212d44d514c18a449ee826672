import { ConsolaInstance, ConsolaOptions } from './core.js';
export { ConfirmPromptOptions, Consola, ConsolaReporter, FormatOptions, InputLogObject, LogLevel, LogLevels, LogObject, LogType, LogTypes, MultiSelectOptions, PromptOptions, SelectPromptOptions, TextPromptOptions } from './core.js';

/**
 * Factory function to create a new Consola instance
 *
 * @param {Partial<ConsolaOptions & { fancy: boolean }>} [options={}] - Optional configuration options. See {@link ConsolaOptions}.
 * @returns {ConsolaInstance} A new Consola instance configured with the given options.
 */
declare function createConsola(options?: Partial<ConsolaOptions & {
    fancy: boolean;
}>): ConsolaInstance;
/**
 * Creates and exports a standard instance of Consola with the default configuration.
 * This instance can be used directly for logging throughout the application.
 *
 * @type {ConsolaInstance} consola - The default instance of Consola.
 */
declare const consola: ConsolaInstance;

// @ts-ignore
export = consola;
export { ConsolaInstance, ConsolaOptions, consola, createConsola };
