import { ConsoleLevel } from '../types/instrument';
export interface SentryDebugLogger {
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    log(...args: Parameters<typeof console.log>): void;
    warn(...args: Parameters<typeof console.warn>): void;
    error(...args: Parameters<typeof console.error>): void;
}
export declare const CONSOLE_LEVELS: readonly ConsoleLevel[];
/** This may be mutated by the console instrumentation. */
export declare const originalConsoleMethods: Partial<{
    log(...args: Parameters<typeof console.log>): void;
    info(...args: Parameters<typeof console.info>): void;
    warn(...args: Parameters<typeof console.warn>): void;
    error(...args: Parameters<typeof console.error>): void;
    debug(...args: Parameters<typeof console.debug>): void;
    assert(...args: Parameters<typeof console.assert>): void;
    trace(...args: Parameters<typeof console.trace>): void;
}>;
/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
export declare function consoleSandbox<T>(callback: () => T): T;
declare function enable(): void;
declare function disable(): void;
declare function isEnabled(): boolean;
declare function log(...args: Parameters<typeof console.log>): void;
declare function warn(...args: Parameters<typeof console.warn>): void;
declare function error(...args: Parameters<typeof console.error>): void;
/**
 * This is a logger singleton which either logs things or no-ops if logging is not enabled.
 */
export declare const debug: {
    /** Enable logging. */
    enable: typeof enable;
    /** Disable logging. */
    disable: typeof disable;
    /** Check if logging is enabled. */
    isEnabled: typeof isEnabled;
    /** Log a message. */
    log: typeof log;
    /** Log a warning. */
    warn: typeof warn;
    /** Log an error. */
    error: typeof error;
};
export {};
//# sourceMappingURL=debug-logger.d.ts.map
