import * as fiberRuntime from "./internal/fiberRuntime.js";
import * as circular from "./internal/layer/circular.js";
import * as internalCircular from "./internal/logger-circular.js";
import * as internal from "./internal/logger.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const LoggerTypeId = internal.LoggerTypeId;
/**
 * Creates a custom logger that formats log messages according to the provided
 * function.
 *
 * @example
 * ```ts
 * import { Effect, Logger, LogLevel } from "effect"
 *
 * const logger = Logger.make(({ logLevel, message }) => {
 *   globalThis.console.log(`[${logLevel.label}] ${message}`)
 * })
 *
 * const task1 = Effect.logDebug("task1 done")
 * const task2 = Effect.logDebug("task2 done")
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("start")
 *   yield* task1
 *   yield* task2
 *   yield* Effect.log("done")
 * }).pipe(
 *   Logger.withMinimumLogLevel(LogLevel.Debug),
 *   Effect.provide(Logger.replace(Logger.defaultLogger, logger))
 * )
 *
 * Effect.runFork(program)
 * // [INFO] start
 * // [DEBUG] task1 done
 * // [DEBUG] task2 done
 * // [INFO] done
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export const make = internal.makeLogger;
/**
 * @since 2.0.0
 * @category context
 */
export const add = circular.addLogger;
/**
 * @since 2.0.0
 * @category context
 */
export const addEffect = circular.addLoggerEffect;
/**
 * @since 2.0.0
 * @category context
 */
export const addScoped = circular.addLoggerScoped;
/**
 * @since 2.0.0
 * @category mapping
 */
export const mapInput = internal.mapInput;
/**
 * @since 2.0.0
 * @category mapping
 */
export const mapInputOptions = internal.mapInputOptions;
/**
 * Returns a version of this logger that only logs messages when the log level
 * satisfies the specified predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterLogLevel = internal.filterLogLevel;
/**
 * @since 2.0.0
 * @category mapping
 */
export const map = internal.map;
/**
 * Creates a batched logger that groups log messages together and processes them
 * in intervals.
 *
 * @example
 * ```ts
 * import { Console, Effect, Logger } from "effect"
 *
 * const LoggerLive = Logger.replaceScoped(
 *   Logger.defaultLogger,
 *   Logger.logfmtLogger.pipe(
 *     Logger.batched("500 millis", (messages) => Console.log("BATCH", `[\n${messages.join("\n")}\n]`))
 *   )
 * )
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("one")
 *   yield* Effect.log("two")
 *   yield* Effect.log("three")
 * }).pipe(Effect.provide(LoggerLive))
 *
 * Effect.runFork(program)
 * // BATCH [
 * // timestamp=... level=INFO fiber=#0 message=one
 * // timestamp=... level=INFO fiber=#0 message=two
 * // timestamp=... level=INFO fiber=#0 message=three
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const batched = fiberRuntime.batchedLogger;
/**
 * @since 2.0.0
 * @category console
 */
export const withConsoleLog = fiberRuntime.loggerWithConsoleLog;
/**
 * Takes a `Logger<M, O>` and returns a logger that calls the respective `Console` method
 * based on the log level.
 *
 * @example
 * ```ts
 * import { Logger, Effect } from "effect"
 *
 * const loggerLayer = Logger.replace(
 *   Logger.defaultLogger,
 *   Logger.withLeveledConsole(Logger.stringLogger),
 * )
 *
 * Effect.gen(function* () {
 *   yield* Effect.logError("an error")
 *   yield* Effect.logInfo("an info")
 * }).pipe(Effect.provide(loggerLayer))
 * ```
 *
 * @since 3.8.0
 * @category console
 */
export const withLeveledConsole = fiberRuntime.loggerWithLeveledLog;
/**
 * @since 2.0.0
 * @category console
 */
export const withConsoleError = fiberRuntime.loggerWithConsoleError;
/**
 * A logger that does nothing in response to logging events.
 *
 * @since 2.0.0
 * @category constructors
 */
export const none = internal.none;
/**
 * @since 2.0.0
 * @category context
 */
export const remove = circular.removeLogger;
/**
 * @since 2.0.0
 * @category context
 */
export const replace = circular.replaceLogger;
/**
 * @since 2.0.0
 * @category context
 */
export const replaceEffect = circular.replaceLoggerEffect;
/**
 * @since 2.0.0
 * @category context
 */
export const replaceScoped = circular.replaceLoggerScoped;
/**
 * @since 2.0.0
 * @category constructors
 */
export const simple = internal.simple;
/**
 * @since 2.0.0
 * @category constructors
 */
export const succeed = internal.succeed;
/**
 * @since 2.0.0
 * @category constructors
 */
export const sync = internal.sync;
/**
 * @since 2.0.0
 * @category constructors
 */
export const test = internalCircular.test;
/**
 * Sets the minimum log level for subsequent logging operations, allowing
 * control over which log messages are displayed based on their severity.
 *
 * @example
 * ```ts
 * import { Effect, Logger, LogLevel } from "effect"
 *
 * const program = Effect.logDebug("message1").pipe(Logger.withMinimumLogLevel(LogLevel.Debug))
 *
 * Effect.runFork(program)
 * // timestamp=... level=DEBUG fiber=#0 message=message1
 * ```
 *
 * @since 2.0.0
 * @category context
 */
export const withMinimumLogLevel = circular.withMinimumLogLevel;
/**
 * @since 2.0.0
 * @category tracing
 */
export const withSpanAnnotations = fiberRuntime.loggerWithSpanAnnotations;
/**
 * Combines this logger with the specified logger to produce a new logger that
 * logs to both this logger and that logger.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip = internal.zip;
/**
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft = internal.zipLeft;
/**
 * @since 2.0.0
 * @category zipping
 */
export const zipRight = internal.zipRight;
/**
 * @since 2.0.0
 * @category constructors
 */
export const defaultLogger = fiberRuntime.defaultLogger;
/**
 * The `jsonLogger` logger formats log entries as JSON objects, making them easy to
 * integrate with logging systems that consume JSON data.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.json)))
 * // {"message":["message1","message2"],"logLevel":"INFO","timestamp":"...","annotations":{"key2":"value2","key1":"value1"},"spans":{"myspan":0},"fiberId":"#0"}
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const jsonLogger = internal.jsonLogger;
/**
 * This logger outputs logs in a human-readable format that is easy to read
 * during development or in a production console.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.logFmt)))
 * // timestamp=... level=INFO fiber=#0 message=message1 message=message2 myspan=0ms key2=value2 key1=value1
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const logfmtLogger = internal.logfmtLogger;
/**
 * @since 2.0.0
 * @category constructors
 */
export const stringLogger = internal.stringLogger;
/**
 * The pretty logger utilizes the capabilities of the console API to generate
 * visually engaging and color-enhanced log outputs. This feature is
 * particularly useful for improving the readability of log messages during
 * development and debugging processes.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.pretty)))
 * //         green --v                      v-- bold and cyan
 * // [07:51:54.434] INFO (#0) myspan=1ms: message1
 * //   message2
 * //    v-- bold
 * //   key2: value2
 * //   key1: value1
 * ```
 *
 * @since 3.5.0
 * @category constructors
 */
export const prettyLogger = internal.prettyLogger;
/**
 * A default version of the pretty logger.
 *
 * @since 3.8.0
 * @category constructors
 */
export const prettyLoggerDefault = internal.prettyLoggerDefault;
/**
 * The structured logger provides detailed log outputs, structured in a way that
 * retains comprehensive traceability of the events, suitable for deeper
 * analysis and troubleshooting.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.structured)))
 * // {
 * //   message: [ 'message1', 'message2' ],
 * //   logLevel: 'INFO',
 * //   timestamp: '2024-07-09T14:05:41.623Z',
 * //   cause: undefined,
 * //   annotations: { key2: 'value2', key1: 'value1' },
 * //   spans: { myspan: 0 },
 * //   fiberId: '#0'
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const structuredLogger = internal.structuredLogger;
/**
 * @since 2.0.0
 * @category constructors
 */
export const tracerLogger = fiberRuntime.tracerLogger;
/**
 * The `json` logger formats log entries as JSON objects, making them easy to
 * integrate with logging systems that consume JSON data.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.json)))
 * // {"message":["message1","message2"],"logLevel":"INFO","timestamp":"...","annotations":{"key2":"value2","key1":"value1"},"spans":{"myspan":0},"fiberId":"#0"}
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const json = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.jsonLogger);
/**
 * This logger outputs logs in a human-readable format that is easy to read
 * during development or in a production console.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.logFmt)))
 * // timestamp=... level=INFO fiber=#0 message=message1 message=message2 myspan=0ms key2=value2 key1=value1
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const logFmt = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.logFmtLogger);
/**
 * The pretty logger utilizes the capabilities of the console API to generate
 * visually engaging and color-enhanced log outputs. This feature is
 * particularly useful for improving the readability of log messages during
 * development and debugging processes.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.pretty)))
 * //         green --v                      v-- bold and cyan
 * // [07:51:54.434] INFO (#0) myspan=1ms: message1
 * //   message2
 * //    v-- bold
 * //   key2: value2
 * //   key1: value1
 * ```
 *
 * @since 3.5.0
 * @category constructors
 */
export const pretty = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.prettyLogger);
/**
 * The structured logger provides detailed log outputs, structured in a way that
 * retains comprehensive traceability of the events, suitable for deeper
 * analysis and troubleshooting.
 *
 * @example
 * ```ts
 * import { Effect, Logger } from "effect"
 *
 * const program = Effect.log("message1", "message2").pipe(
 *   Effect.annotateLogs({ key1: "value1", key2: "value2" }),
 *   Effect.withLogSpan("myspan")
 * )
 *
 * Effect.runFork(program.pipe(Effect.provide(Logger.structured)))
 * // {
 * //   message: [ 'message1', 'message2' ],
 * //   logLevel: 'INFO',
 * //   timestamp: '2024-07-09T14:05:41.623Z',
 * //   cause: undefined,
 * //   annotations: { key2: 'value2', key1: 'value1' },
 * //   spans: { myspan: 0 },
 * //   fiberId: '#0'
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const structured = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.structuredLogger);
/**
 * Sets the minimum log level for logging operations, allowing control over
 * which log messages are displayed based on their severity.
 *
 * @example
 * ```ts
 * import { Effect, Logger, LogLevel } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("Executing task...")
 *   yield* Effect.sleep("100 millis")
 *   console.log("task done")
 * })
 *
 * // Logging disabled using a layer
 * Effect.runFork(program.pipe(Effect.provide(Logger.minimumLogLevel(LogLevel.None))))
 * // task done
 * ```
 *
 * @since 2.0.0
 * @category context
 */
export const minimumLogLevel = circular.minimumLogLevel;
/**
 * Returns `true` if the specified value is a `Logger`, otherwise returns `false`.
 *
 * @since 1.0.0
 * @category guards
 */
export const isLogger = internal.isLogger;
//# sourceMappingURL=Logger.js.map