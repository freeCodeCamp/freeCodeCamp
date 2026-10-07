import { ConsolaInstance, ConsolaOptions } from './core.cjs';
export { ConfirmPromptOptions, Consola, ConsolaReporter, FormatOptions, InputLogObject, LogLevel, LogLevels, LogObject, LogType, LogTypes, MultiSelectOptions, PromptOptions, SelectPromptOptions, TextPromptOptions } from './core.cjs';

/**
 * Factory function to create a new Consola instance tailored for use in different environments.
 * It automatically adjusts logging levels based on environment variables and execution context.
 *
 * @param {Partial<ConsolaOptions & { fancy: boolean }>} [options={}] - Optional configuration options. See {@link ConsolaOptions}.
 * @returns {ConsolaInstance} A new Consola instance with configurations based on the given options and the execution environment.
 */
declare function createConsola(options?: Partial<ConsolaOptions & {
    fancy: boolean;
}>): ConsolaInstance;
/**
 * A default instance of Consola, created and configured for immediate use.
 * This instance is configured based on the execution environment and the options provided.
 *
 * @type {ConsolaInstance} consola - The default Consola instance, ready to use.
 */
declare const consola: ConsolaInstance;

// @ts-ignore
export = consola;
export { ConsolaInstance, ConsolaOptions, consola, createConsola };
