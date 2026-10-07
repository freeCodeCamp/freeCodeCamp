import { LogSeverityLevel } from '@sentry/core';
/**
 * Options for the Sentry Winston transport.
 */
interface WinstonTransportOptions {
    /**
     * Use this option to filter which levels should be captured. By default, all levels are captured.
     *
     * @example
     * ```ts
     * const SentryWinstonTransport = Sentry.createSentryWinstonTransport(Transport, {
     *   // Only capture error and warn logs
     *   levels: ['error', 'warn'],
     * });
     * ```
     */
    levels?: Array<LogSeverityLevel>;
    /**
     * Use this option to map custom levels to Sentry log severity levels.
     *
     * @example
     * ```ts
     * const SentryWinstonTransport = Sentry.createSentryWinstonTransport(Transport, {
     *   customLevelMap: {
     *     myCustomLevel: 'info',
     *     customError: 'error',
     *   },
     * });
     * ```
     */
    customLevelMap?: Record<string, LogSeverityLevel>;
}
/**
 * Creates a new Sentry Winston transport that fowards logs to Sentry. Requires the `enableLogs` option to be enabled.
 *
 * Supports Winston 3.x.x.
 *
 * @param TransportClass - The Winston transport class to extend.
 * @returns The extended transport class.
 *
 * @example
 * ```ts
 * const winston = require('winston');
 * const Transport = require('winston-transport');
 *
 * const SentryWinstonTransport = Sentry.createSentryWinstonTransport(Transport);
 *
 * const logger = winston.createLogger({
 *   transports: [new SentryWinstonTransport()],
 * });
 * ```
 */
export declare function createSentryWinstonTransport<TransportStreamInstance extends object>(TransportClass: new (options?: any) => TransportStreamInstance, sentryWinstonOptions?: WinstonTransportOptions): typeof TransportClass;
export {};
//# sourceMappingURL=winston.d.ts.map
