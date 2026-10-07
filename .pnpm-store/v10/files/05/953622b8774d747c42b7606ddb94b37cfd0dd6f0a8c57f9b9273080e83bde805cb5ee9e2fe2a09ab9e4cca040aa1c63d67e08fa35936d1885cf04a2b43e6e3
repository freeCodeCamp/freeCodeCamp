"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipRight = exports.zipLeft = exports.zip = exports.withSpanAnnotations = exports.withMinimumLogLevel = exports.withLeveledConsole = exports.withConsoleLog = exports.withConsoleError = exports.tracerLogger = exports.test = exports.sync = exports.succeed = exports.structuredLogger = exports.structured = exports.stringLogger = exports.simple = exports.replaceScoped = exports.replaceEffect = exports.replace = exports.remove = exports.prettyLoggerDefault = exports.prettyLogger = exports.pretty = exports.none = exports.minimumLogLevel = exports.mapInputOptions = exports.mapInput = exports.map = exports.make = exports.logfmtLogger = exports.logFmt = exports.jsonLogger = exports.json = exports.isLogger = exports.filterLogLevel = exports.defaultLogger = exports.batched = exports.addScoped = exports.addEffect = exports.add = exports.LoggerTypeId = void 0;
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
var circular = _interopRequireWildcard(require("./internal/layer/circular.js"));
var internalCircular = _interopRequireWildcard(require("./internal/logger-circular.js"));
var internal = _interopRequireWildcard(require("./internal/logger.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const LoggerTypeId = exports.LoggerTypeId = internal.LoggerTypeId;
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
const make = exports.make = internal.makeLogger;
/**
 * @since 2.0.0
 * @category context
 */
const add = exports.add = circular.addLogger;
/**
 * @since 2.0.0
 * @category context
 */
const addEffect = exports.addEffect = circular.addLoggerEffect;
/**
 * @since 2.0.0
 * @category context
 */
const addScoped = exports.addScoped = circular.addLoggerScoped;
/**
 * @since 2.0.0
 * @category mapping
 */
const mapInput = exports.mapInput = internal.mapInput;
/**
 * @since 2.0.0
 * @category mapping
 */
const mapInputOptions = exports.mapInputOptions = internal.mapInputOptions;
/**
 * Returns a version of this logger that only logs messages when the log level
 * satisfies the specified predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
const filterLogLevel = exports.filterLogLevel = internal.filterLogLevel;
/**
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
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
const batched = exports.batched = fiberRuntime.batchedLogger;
/**
 * @since 2.0.0
 * @category console
 */
const withConsoleLog = exports.withConsoleLog = fiberRuntime.loggerWithConsoleLog;
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
const withLeveledConsole = exports.withLeveledConsole = fiberRuntime.loggerWithLeveledLog;
/**
 * @since 2.0.0
 * @category console
 */
const withConsoleError = exports.withConsoleError = fiberRuntime.loggerWithConsoleError;
/**
 * A logger that does nothing in response to logging events.
 *
 * @since 2.0.0
 * @category constructors
 */
const none = exports.none = internal.none;
/**
 * @since 2.0.0
 * @category context
 */
const remove = exports.remove = circular.removeLogger;
/**
 * @since 2.0.0
 * @category context
 */
const replace = exports.replace = circular.replaceLogger;
/**
 * @since 2.0.0
 * @category context
 */
const replaceEffect = exports.replaceEffect = circular.replaceLoggerEffect;
/**
 * @since 2.0.0
 * @category context
 */
const replaceScoped = exports.replaceScoped = circular.replaceLoggerScoped;
/**
 * @since 2.0.0
 * @category constructors
 */
const simple = exports.simple = internal.simple;
/**
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = internal.succeed;
/**
 * @since 2.0.0
 * @category constructors
 */
const sync = exports.sync = internal.sync;
/**
 * @since 2.0.0
 * @category constructors
 */
const test = exports.test = internalCircular.test;
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
const withMinimumLogLevel = exports.withMinimumLogLevel = circular.withMinimumLogLevel;
/**
 * @since 2.0.0
 * @category tracing
 */
const withSpanAnnotations = exports.withSpanAnnotations = fiberRuntime.loggerWithSpanAnnotations;
/**
 * Combines this logger with the specified logger to produce a new logger that
 * logs to both this logger and that logger.
 *
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = internal.zip;
/**
 * @since 2.0.0
 * @category zipping
 */
const zipLeft = exports.zipLeft = internal.zipLeft;
/**
 * @since 2.0.0
 * @category zipping
 */
const zipRight = exports.zipRight = internal.zipRight;
/**
 * @since 2.0.0
 * @category constructors
 */
const defaultLogger = exports.defaultLogger = fiberRuntime.defaultLogger;
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
const jsonLogger = exports.jsonLogger = internal.jsonLogger;
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
const logfmtLogger = exports.logfmtLogger = internal.logfmtLogger;
/**
 * @since 2.0.0
 * @category constructors
 */
const stringLogger = exports.stringLogger = internal.stringLogger;
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
const prettyLogger = exports.prettyLogger = internal.prettyLogger;
/**
 * A default version of the pretty logger.
 *
 * @since 3.8.0
 * @category constructors
 */
const prettyLoggerDefault = exports.prettyLoggerDefault = internal.prettyLoggerDefault;
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
const structuredLogger = exports.structuredLogger = internal.structuredLogger;
/**
 * @since 2.0.0
 * @category constructors
 */
const tracerLogger = exports.tracerLogger = fiberRuntime.tracerLogger;
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
const json = exports.json = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.jsonLogger);
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
const logFmt = exports.logFmt = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.logFmtLogger);
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
const pretty = exports.pretty = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.prettyLogger);
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
const structured = exports.structured = /*#__PURE__*/replace(fiberRuntime.defaultLogger, fiberRuntime.structuredLogger);
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
const minimumLogLevel = exports.minimumLogLevel = circular.minimumLogLevel;
/**
 * Returns `true` if the specified value is a `Logger`, otherwise returns `false`.
 *
 * @since 1.0.0
 * @category guards
 */
const isLogger = exports.isLogger = internal.isLogger;
//# sourceMappingURL=Logger.js.map