import type { Client } from '../client';
import type { LogSeverityLevel } from '../types/log';
/**
 * Options for the Sentry Consola reporter.
 */
interface ConsolaReporterOptions {
    /**
     * Use this option to filter which levels should be captured. By default, all levels are captured.
     *
     * @example
     * ```ts
     * const sentryReporter = Sentry.createConsolaReporter({
     *   // Only capture error and warn logs
     *   levels: ['error', 'warn'],
     * });
     * consola.addReporter(sentryReporter);
     * ```
     */
    levels?: Array<LogSeverityLevel>;
    /**
     * Optionally provide a specific Sentry client instance to use for capturing logs.
     * If not provided, the current client will be retrieved using `getClient()`.
     *
     * This is useful when you want to use specific client options for log normalization
     * or when working with multiple client instances.
     *
     * @example
     * ```ts
     * const sentryReporter = Sentry.createConsolaReporter({
     *   client: myCustomClient,
     * });
     * ```
     */
    client?: Client;
}
export interface ConsolaReporter {
    log: (logObj: ConsolaLogObject) => void;
}
/**
 * Represents a log object that Consola reporters receive.
 *
 * This interface matches the structure of log objects passed to Consola reporters.
 * See: https://github.com/unjs/consola#custom-reporters
 *
 * @example
 * ```ts
 * const reporter = {
 *   log(logObj: ConsolaLogObject) {
 *     console.log(`[${logObj.type}] ${logObj.message || logObj.args?.join(' ')}`);
 *   }
 * };
 * consola.addReporter(reporter);
 * ```
 */
export interface ConsolaLogObject {
    /**
     * Allows additional custom properties to be set on the log object. These properties will be captured as log attributes.
     *
     * Additional properties are set when passing a single object with a `message` (`consola.[type]({ message: '', ... })`) or if the reporter is called directly
     *
     * @example
     * ```ts
     * const reporter = Sentry.createConsolaReporter();
     * reporter.log({
     *   type: 'info',
     *   message: 'User action',
     *   userId: 123,
     *   sessionId: 'abc-123'
     * });
     * // Will create attributes: `userId` and `sessionId`
     * ```
     */
    [key: string]: unknown;
    /**
     * The numeric log level (0-5) or null.
     *
     * Consola log levels:
     * - 0: Fatal and Error
     * - 1: Warnings
     * - 2: Normal logs
     * - 3: Informational logs, success, fail, ready, start, box, ...
     * - 4: Debug logs
     * - 5: Trace logs
     * - null: Some special types like 'verbose'
     *
     * See: https://github.com/unjs/consola/blob/main/README.md#log-level
     */
    level?: number | null;
    /**
     * The log type/method name (e.g., 'error', 'warn', 'info', 'debug', 'trace', 'success', 'fail', etc.).
     *
     * Consola built-in types include:
     * - Standard: silent, fatal, error, warn, log, info, success, fail, ready, start, box, debug, trace, verbose
     * - Custom types can also be defined
     *
     * See: https://github.com/unjs/consola/blob/main/README.md#log-types
     */
    type?: string;
    /**
     * An optional tag/scope for the log entry.
     *
     * Tags are created using `consola.withTag('scope')` and help categorize logs.
     *
     * @example
     * ```ts
     * const scopedLogger = consola.withTag('auth');
     * scopedLogger.info('User logged in'); // tag will be 'auth'
     * ```
     *
     * See: https://github.com/unjs/consola/blob/main/README.md#withtagtag
     */
    tag?: string;
    /**
     * The raw arguments passed to the log method.
     *
     * These args are typically formatted into the final `message`. In Consola reporters, `message` is not provided. See: https://github.com/unjs/consola/issues/406#issuecomment-3684792551
     *
     * @example
     * ```ts
     * consola.info('Hello', 'world', { user: 'john' });
     * // args = ['Hello', 'world', { user: 'john' }]
     * ```
     *
     * @example
     * ```ts
     * // `message` is a reserved property in Consola
     * consola.log({ message: 'Hello' });
     * // args = ['Hello']
     * ```
     */
    args?: unknown[];
    /**
     * The timestamp when the log was created.
     *
     * This is automatically set by Consola when the log is created.
     */
    date?: Date;
    /**
     * The formatted log message.
     *
     * When provided, this is the final formatted message. When not provided,
     * the message should be constructed from the `args` array.
     *
     * Note: In reporters, `message` is typically undefined. It is primarily for
     * `consola.[type]({ message: 'xxx' })` usage and is normalized into `args` before
     * reporters receive the log object. See: https://github.com/unjs/consola/issues/406#issuecomment-3684792551
     */
    message?: string;
}
/**
 * Creates a new Sentry reporter for Consola that forwards logs to Sentry. Requires the `enableLogs` option to be enabled.
 *
 * **Note: This integration supports Consola v3.x only.** The reporter interface and log object structure
 * may differ in other versions of Consola.
 *
 * @param options - Configuration options for the reporter.
 * @returns A Consola reporter that can be added to consola instances.
 *
 * @example
 * ```ts
 * import * as Sentry from '@sentry/node';
 * import { consola } from 'consola';
 *
 * Sentry.init({
 *   enableLogs: true,
 * });
 *
 * const sentryReporter = Sentry.createConsolaReporter({
 *   // Optional: filter levels to capture
 *   levels: ['error', 'warn', 'info'],
 * });
 *
 * consola.addReporter(sentryReporter);
 *
 * // Now consola logs will be captured by Sentry
 * consola.info('This will be sent to Sentry');
 * consola.error('This error will also be sent to Sentry');
 * ```
 */
export declare function createConsolaReporter(options?: ConsolaReporterOptions): ConsolaReporter;
export {};
//# sourceMappingURL=consola.d.ts.map