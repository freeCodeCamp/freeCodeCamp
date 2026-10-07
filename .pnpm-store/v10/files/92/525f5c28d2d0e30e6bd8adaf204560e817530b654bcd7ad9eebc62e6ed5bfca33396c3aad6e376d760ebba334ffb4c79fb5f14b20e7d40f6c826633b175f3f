/**
 * @since 1.0.0
 */
export type DiagLogFunction = (message: string, ...args: unknown[]) => void;
/**
 * Defines an internal diagnostic logger interface which is used to log internal diagnostic
 * messages, you can set the default diagnostic logger via the {@link DiagAPI} setLogger function.
 * API provided implementations include :-
 * - a No-Op {@link createNoopDiagLogger}
 * - a {@link DiagLogLevel} filtering wrapper {@link createLogLevelDiagLogger}
 * - a general Console {@link DiagConsoleLogger} version.
 *
 * @since 1.0.0
 */
export interface DiagLogger {
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
     * help identify a failure scenario.
     * For example: Logging the order of execution of async operations.
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
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
export declare enum DiagLogLevel {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    NONE = 0,
    /** Identifies an error scenario */
    ERROR = 30,
    /** Identifies a warning scenario */
    WARN = 50,
    /** General informational log message */
    INFO = 60,
    /** General debug log message */
    DEBUG = 70,
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    VERBOSE = 80,
    /** Used to set the logging level to include all logging */
    ALL = 9999
}
/**
 * Defines options for ComponentLogger
 *
 * @since 1.0.0
 */
export interface ComponentLoggerOptions {
    namespace: string;
}
/**
 * @since 1.4.1
 */
export interface DiagLoggerOptions {
    /**
     * The {@link DiagLogLevel} used to filter logs sent to the logger.
     *
     * @defaultValue DiagLogLevel.INFO
     */
    logLevel?: DiagLogLevel;
    /**
     * Setting this value to `true` will suppress the warning message normally emitted when registering a logger when another logger is already registered.
     */
    suppressOverrideMessage?: boolean;
}
export interface DiagLoggerApi {
    /**
     * Set the global DiagLogger and DiagLogLevel.
     * If a global diag logger is already set, this will override it.
     *
     * @param logger - The {@link DiagLogger} instance to set as the default logger.
     * @param options - A {@link DiagLoggerOptions} object. If not provided, default values will be set.
     * @returns `true` if the logger was successfully registered, else `false`
     */
    setLogger(logger: DiagLogger, options?: DiagLoggerOptions): boolean;
    /**
     *
     * @param logger - The {@link DiagLogger} instance to set as the default logger.
     * @param logLevel - The {@link DiagLogLevel} used to filter logs sent to the logger. If not provided it will default to {@link DiagLogLevel.INFO}.
     * @returns `true` if the logger was successfully registered, else `false`
     */
    setLogger(logger: DiagLogger, logLevel?: DiagLogLevel): boolean;
}
//# sourceMappingURL=types.d.ts.map