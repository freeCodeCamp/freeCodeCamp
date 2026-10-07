/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js"
import type { DurationInput } from "./Duration.js"
import type { Effect } from "./Effect.js"
import type * as FiberId from "./FiberId.js"
import type * as FiberRefs from "./FiberRefs.js"
import type { LazyArg } from "./Function.js"
import type * as HashMap from "./HashMap.js"
import * as fiberRuntime from "./internal/fiberRuntime.js"
import * as circular from "./internal/layer/circular.js"
import * as internalCircular from "./internal/logger-circular.js"
import * as internal from "./internal/logger.js"
import type * as Layer from "./Layer.js"
import type * as List from "./List.js"
import type * as LogLevel from "./LogLevel.js"
import type * as LogSpan from "./LogSpan.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type { Scope } from "./Scope.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const LoggerTypeId: unique symbol = internal.LoggerTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type LoggerTypeId = typeof LoggerTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface Logger<in Message, out Output> extends Logger.Variance<Message, Output>, Pipeable {
  log(options: Logger.Options<Message>): Output
}

/**
 * @since 2.0.0
 */
export declare namespace Logger {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in Message, out Output> {
    readonly [LoggerTypeId]: {
      readonly _Message: Types.Contravariant<Message>
      readonly _Output: Types.Covariant<Output>
    }
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export interface Options<out Message> {
    readonly fiberId: FiberId.FiberId
    readonly logLevel: LogLevel.LogLevel
    readonly message: Message
    readonly cause: Cause.Cause<unknown>
    readonly context: FiberRefs.FiberRefs
    readonly spans: List.List<LogSpan.LogSpan>
    readonly annotations: HashMap.HashMap<string, unknown>
    readonly date: Date
  }
}

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
export const make: <Message, Output>(log: (options: Logger.Options<Message>) => Output) => Logger<Message, Output> =
  internal.makeLogger

/**
 * @since 2.0.0
 * @category context
 */
export const add: <B>(logger: Logger<unknown, B>) => Layer.Layer<never> = circular.addLogger

/**
 * @since 2.0.0
 * @category context
 */
export const addEffect: <A, E, R>(effect: Effect<Logger<unknown, A>, E, R>) => Layer.Layer<never, E, R> =
  circular.addLoggerEffect

/**
 * @since 2.0.0
 * @category context
 */
export const addScoped: <A, E, R>(
  effect: Effect<Logger<unknown, A>, E, R>
) => Layer.Layer<never, E, Exclude<R, Scope>> = circular.addLoggerScoped

/**
 * @since 2.0.0
 * @category mapping
 */
export const mapInput: {
  /**
   * @since 2.0.0
   * @category mapping
   */
  <Message, Message2>(f: (message: Message2) => Message): <Output>(self: Logger<Message, Output>) => Logger<Message2, Output>
  /**
   * @since 2.0.0
   * @category mapping
   */
  <Output, Message, Message2>(self: Logger<Message, Output>, f: (message: Message2) => Message): Logger<Message2, Output>
} = internal.mapInput

/**
 * @since 2.0.0
 * @category mapping
 */
export const mapInputOptions: {
  /**
   * @since 2.0.0
   * @category mapping
   */
  <Message, Message2>(f: (options: Logger.Options<Message2>) => Logger.Options<Message>): <Output>(self: Logger<Message, Output>) => Logger<Message2, Output>
  /**
   * @since 2.0.0
   * @category mapping
   */
  <Output, Message, Message2>(
   self: Logger<Message, Output>,
   f: (options: Logger.Options<Message2>) => Logger.Options<Message>
  ): Logger<Message2, Output>
} = internal.mapInputOptions

/**
 * Returns a version of this logger that only logs messages when the log level
 * satisfies the specified predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterLogLevel: {
  /**
   * Returns a version of this logger that only logs messages when the log level
   * satisfies the specified predicate.
   *
   * @since 2.0.0
   * @category filtering
   */
  (f: (logLevel: LogLevel.LogLevel) => boolean): <Message, Output>(self: Logger<Message, Output>) => Logger<Message, Option.Option<Output>>
  /**
   * Returns a version of this logger that only logs messages when the log level
   * satisfies the specified predicate.
   *
   * @since 2.0.0
   * @category filtering
   */
  <Message, Output>(self: Logger<Message, Output>, f: (logLevel: LogLevel.LogLevel) => boolean): Logger<Message, Option.Option<Output>>
} = internal.filterLogLevel

/**
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * @since 2.0.0
   * @category mapping
   */
  <Output, Output2>(f: (output: Output) => Output2): <Message>(self: Logger<Message, Output>) => Logger<Message, Output2>
  /**
   * @since 2.0.0
   * @category mapping
   */
  <Message, Output, Output2>(self: Logger<Message, Output>, f: (output: Output) => Output2): Logger<Message, Output2>
} = internal.map

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
export const batched: {
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
  <Output, R>(
   window: DurationInput,
   f: (messages: Array<Types.NoInfer<Output>>) => Effect<void, never, R>
  ): <Message>(self: Logger<Message, Output>) => Effect<Logger<Message, void>, never, R | Scope>
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
  <Message, Output, R>(
   self: Logger<Message, Output>,
   window: DurationInput,
   f: (messages: Array<Types.NoInfer<Output>>) => Effect<void, never, R>
  ): Effect<Logger<Message, void>, never, Scope | R>
} = fiberRuntime.batchedLogger

/**
 * @since 2.0.0
 * @category console
 */
export const withConsoleLog: <M, O>(self: Logger<M, O>) => Logger<M, void> = fiberRuntime.loggerWithConsoleLog

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
export const withLeveledConsole: <M, O>(self: Logger<M, O>) => Logger<M, void> = fiberRuntime.loggerWithLeveledLog

/**
 * @since 2.0.0
 * @category console
 */
export const withConsoleError: <M, O>(self: Logger<M, O>) => Logger<M, void> = fiberRuntime.loggerWithConsoleError

/**
 * A logger that does nothing in response to logging events.
 *
 * @since 2.0.0
 * @category constructors
 */
export const none: Logger<unknown, void> = internal.none

/**
 * @since 2.0.0
 * @category context
 */
export const remove: <A>(logger: Logger<unknown, A>) => Layer.Layer<never> = circular.removeLogger

/**
 * @since 2.0.0
 * @category context
 */
export const replace: {
  /**
   * @since 2.0.0
   * @category context
   */
  <B>(that: Logger<unknown, B>): <A>(self: Logger<unknown, A>) => Layer.Layer<never>
  /**
   * @since 2.0.0
   * @category context
   */
  <A, B>(self: Logger<unknown, A>, that: Logger<unknown, B>): Layer.Layer<never>
} = circular.replaceLogger

/**
 * @since 2.0.0
 * @category context
 */
export const replaceEffect: {
  /**
   * @since 2.0.0
   * @category context
   */
  <B, E, R>(that: Effect<Logger<unknown, B>, E, R>): <A>(self: Logger<unknown, A>) => Layer.Layer<never, E, R>
  /**
   * @since 2.0.0
   * @category context
   */
  <A, B, E, R>(self: Logger<unknown, A>, that: Effect<Logger<unknown, B>, E, R>): Layer.Layer<never, E, R>
} = circular.replaceLoggerEffect

/**
 * @since 2.0.0
 * @category context
 */
export const replaceScoped: {
  /**
   * @since 2.0.0
   * @category context
   */
  <B, E, R>(that: Effect<Logger<unknown, B>, E, R>): <A>(self: Logger<unknown, A>) => Layer.Layer<never, E, Exclude<R, Scope>>
  /**
   * @since 2.0.0
   * @category context
   */
  <A, B, E, R>(self: Logger<unknown, A>, that: Effect<Logger<unknown, B>, E, R>): Layer.Layer<never, E, Exclude<R, Scope>>
} = circular.replaceLoggerScoped

/**
 * @since 2.0.0
 * @category constructors
 */
export const simple: <A, B>(log: (a: A) => B) => Logger<A, B> = internal.simple

/**
 * @since 2.0.0
 * @category constructors
 */
export const succeed: <A>(value: A) => Logger<unknown, A> = internal.succeed

/**
 * @since 2.0.0
 * @category constructors
 */
export const sync: <A>(evaluate: LazyArg<A>) => Logger<unknown, A> = internal.sync

/**
 * @since 2.0.0
 * @category constructors
 */
export const test: {
  /**
   * @since 2.0.0
   * @category constructors
   */
  <Message>(input: Message): <Output>(self: Logger<Message, Output>) => Output
  /**
   * @since 2.0.0
   * @category constructors
   */
  <Message, Output>(self: Logger<Message, Output>, input: Message): Output
} = internalCircular.test

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
export const withMinimumLogLevel: {
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
  (level: LogLevel.LogLevel): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
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
  <A, E, R>(self: Effect<A, E, R>, level: LogLevel.LogLevel): Effect<A, E, R>
} = circular.withMinimumLogLevel

/**
 * @since 2.0.0
 * @category tracing
 */
export const withSpanAnnotations: <Message, Output>(self: Logger<Message, Output>) => Logger<Message, Output> =
  fiberRuntime.loggerWithSpanAnnotations

/**
 * Combines this logger with the specified logger to produce a new logger that
 * logs to both this logger and that logger.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip: {
  /**
   * Combines this logger with the specified logger to produce a new logger that
   * logs to both this logger and that logger.
   *
   * @since 2.0.0
   * @category zipping
   */
  <Message2, Output2>(that: Logger<Message2, Output2>): <Message, Output>(self: Logger<Message, Output>) => Logger<Message & Message2, [Output, Output2]>
  /**
   * Combines this logger with the specified logger to produce a new logger that
   * logs to both this logger and that logger.
   *
   * @since 2.0.0
   * @category zipping
   */
  <Message, Output, Message2, Output2>(self: Logger<Message, Output>, that: Logger<Message2, Output2>): Logger<Message & Message2, [Output, Output2]>
} = internal.zip

/**
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft: {
  /**
   * @since 2.0.0
   * @category zipping
   */
  <Message2, Output2>(that: Logger<Message2, Output2>): <Message, Output>(self: Logger<Message, Output>) => Logger<Message & Message2, Output>
  /**
   * @since 2.0.0
   * @category zipping
   */
  <Message, Output, Message2, Output2>(self: Logger<Message, Output>, that: Logger<Message2, Output2>): Logger<Message & Message2, Output>
} = internal.zipLeft

/**
 * @since 2.0.0
 * @category zipping
 */
export const zipRight: {
  /**
   * @since 2.0.0
   * @category zipping
   */
  <Message2, Output2>(that: Logger<Message2, Output2>): <Message, Output>(self: Logger<Message, Output>) => Logger<Message & Message2, Output2>
  /**
   * @since 2.0.0
   * @category zipping
   */
  <Message, Output, Message2, Output2>(self: Logger<Message, Output>, that: Logger<Message2, Output2>): Logger<Message & Message2, Output2>
} = internal.zipRight

/**
 * @since 2.0.0
 * @category constructors
 */
export const defaultLogger: Logger<unknown, void> = fiberRuntime.defaultLogger

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
export const jsonLogger: Logger<unknown, string> = internal.jsonLogger

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
export const logfmtLogger: Logger<unknown, string> = internal.logfmtLogger

/**
 * @since 2.0.0
 * @category constructors
 */
export const stringLogger: Logger<unknown, string> = internal.stringLogger

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
export const prettyLogger: (
  options?: {
    readonly colors?: "auto" | boolean | undefined
    readonly stderr?: boolean | undefined
    readonly formatDate?: ((date: Date) => string) | undefined
    readonly mode?: "browser" | "tty" | "auto" | undefined
  }
) => Logger<unknown, void> = internal.prettyLogger

/**
 * A default version of the pretty logger.
 *
 * @since 3.8.0
 * @category constructors
 */
export const prettyLoggerDefault: Logger<unknown, void> = internal.prettyLoggerDefault

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
export const structuredLogger: Logger<
  unknown,
  {
    readonly logLevel: string
    readonly fiberId: string
    readonly timestamp: string
    readonly message: unknown
    readonly cause: string | undefined
    readonly annotations: Record<string, unknown>
    readonly spans: Record<string, number>
  }
> = internal.structuredLogger

/**
 * @since 2.0.0
 * @category constructors
 */
export const tracerLogger: Logger<unknown, void> = fiberRuntime.tracerLogger

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
export const json: Layer.Layer<never> = replace(fiberRuntime.defaultLogger, fiberRuntime.jsonLogger)

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
export const logFmt: Layer.Layer<never> = replace(fiberRuntime.defaultLogger, fiberRuntime.logFmtLogger)

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
export const pretty: Layer.Layer<never> = replace(fiberRuntime.defaultLogger, fiberRuntime.prettyLogger)

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
export const structured: Layer.Layer<never> = replace(fiberRuntime.defaultLogger, fiberRuntime.structuredLogger)

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
export const minimumLogLevel: (level: LogLevel.LogLevel) => Layer.Layer<never> = circular.minimumLogLevel

/**
 * Returns `true` if the specified value is a `Logger`, otherwise returns `false`.
 *
 * @since 1.0.0
 * @category guards
 */
export const isLogger: (u: unknown) => u is Logger<unknown, unknown> = internal.isLogger
