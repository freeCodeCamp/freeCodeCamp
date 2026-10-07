import type { DiagLogger, DiagLogFunction } from './types';
type ConsoleMapKeys = 'error' | 'warn' | 'info' | 'debug' | 'trace';
export declare const _originalConsoleMethods: Partial<Record<ConsoleMapKeys | 'log', typeof console.log>>;
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 *
 * @since 1.0.0
 */
export declare class DiagConsoleLogger implements DiagLogger {
    constructor();
    /** Log an error scenario that was not expected and caused the requested operation to fail. */
    error: DiagLogFunction;
    /**
     * Log a warning scenario to inform the developer of an issues that should be investigated.
     * The requested operation may or may not have succeeded or completed.
     */
    warn: DiagLogFunction;
    /**
     * Log a general informational message, this should not affect functionality.
     * This is also the default logging level so this should NOT be used for logging
     * debugging level information.
     */
    info: DiagLogFunction;
    /**
     * Log a general debug message that can be useful for identifying a failure.
     * Information logged at this level may include diagnostic details that would
     * help identify a failure scenario. Useful scenarios would be to log the execution
     * order of async operations
     */
    debug: DiagLogFunction;
    /**
     * Log a detailed (verbose) trace level logging that can be used to identify failures
     * where debug level logging would be insufficient, this level of tracing can include
     * input and output parameters and as such may include PII information passing through
     * the API. As such it is recommended that this level of tracing should not be enabled
     * in a production environment.
     */
    verbose: DiagLogFunction;
}
export {};
//# sourceMappingURL=consoleLogger.d.ts.map