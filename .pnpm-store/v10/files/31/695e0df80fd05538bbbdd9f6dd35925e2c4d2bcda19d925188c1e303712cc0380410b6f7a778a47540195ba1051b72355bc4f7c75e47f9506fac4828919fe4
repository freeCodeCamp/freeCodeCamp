/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js"
import { dual, pipe } from "./Function.js"
import * as core from "./internal/core.js"
import * as number from "./Number.js"
import * as order from "./Order.js"
import type { Pipeable } from "./Pipeable.js"

/**
 * A `LogLevel` represents the log level associated with an individual logging
 * operation. Log levels are used both to describe the granularity (or
 * importance) of individual log statements, as well as to enable tuning
 * verbosity of log output.
 *
 * @since 2.0.0
 * @category model
 * @property ordinal - The priority of the log message. Larger values indicate higher priority.
 * @property label - A label associated with the log level.
 * @property syslog -The syslog severity level of the log level.
 */
export type LogLevel = All | Fatal | Error | Warning | Info | Debug | Trace | None

/**
 * @since 2.0.0
 * @category model
 */
export type Literal = LogLevel["_tag"]

/**
 * @since 2.0.0
 * @category model
 */
export interface All extends Pipeable {
  readonly _tag: "All"
  readonly label: "ALL"
  readonly syslog: 0
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category model
 */
export interface Fatal extends Pipeable {
  readonly _tag: "Fatal"
  readonly label: "FATAL"
  readonly syslog: 2
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category model
 */
export interface Error extends Pipeable {
  readonly _tag: "Error"
  readonly label: "ERROR"
  readonly syslog: 3
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category model
 */
export interface Warning extends Pipeable {
  readonly _tag: "Warning"
  readonly label: "WARN"
  readonly syslog: 4
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category model
 */
export interface Info extends Pipeable {
  readonly _tag: "Info"
  readonly label: "INFO"
  readonly syslog: 6
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category model
 */
export interface Debug extends Pipeable {
  readonly _tag: "Debug"
  readonly label: "DEBUG"
  readonly syslog: 7
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category model
 */
export interface Trace extends Pipeable {
  readonly _tag: "Trace"
  readonly label: "TRACE"
  readonly syslog: 7
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category model
 */
export interface None extends Pipeable {
  readonly _tag: "None"
  readonly label: "OFF"
  readonly syslog: 7
  readonly ordinal: number
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const All: LogLevel = core.logLevelAll

/**
 * @since 2.0.0
 * @category constructors
 */
export const Fatal: LogLevel = core.logLevelFatal

/**
 * @since 2.0.0
 * @category constructors
 */
export const Error: LogLevel = core.logLevelError

/**
 * @since 2.0.0
 * @category constructors
 */
export const Warning: LogLevel = core.logLevelWarning

/**
 * @since 2.0.0
 * @category constructors
 */
export const Info: LogLevel = core.logLevelInfo

/**
 * @since 2.0.0
 * @category constructors
 */
export const Debug: LogLevel = core.logLevelDebug

/**
 * @since 2.0.0
 * @category constructors
 */
export const Trace: LogLevel = core.logLevelTrace

/**
 * @since 2.0.0
 * @category constructors
 */
export const None: LogLevel = core.logLevelNone

/**
 * @since 2.0.0
 * @category constructors
 */
export const allLevels = core.allLogLevels

/**
 * Temporarily sets a `LogLevel` for an `Effect` workflow.
 *
 * **Details**
 *
 * This function allows you to apply a specific `LogLevel` locally to an
 * `Effect` workflow. Once the workflow completes, the `LogLevel` reverts to its
 * previous state.
 *
 * **When to Use**
 *
 * This is particularly useful when you want to adjust the verbosity of logging
 * for specific parts of your program without affecting the global log level.
 *
 * @example
 * ```ts
 * import { Effect, LogLevel } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("message1")
 *   yield* Effect.gen(function*() {
 *     yield* Effect.log("message2")
 *     yield* Effect.log("message3")
 *   }).pipe(LogLevel.locally(LogLevel.Warning))
 * })
 *
 * Effect.runFork(program)
 * // timestamp=... level=INFO fiber=#0 message=message1
 * // timestamp=... level=WARN fiber=#0 message=message2
 * // timestamp=... level=WARN fiber=#0 message=message3
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const locally: {
  /**
   * Temporarily sets a `LogLevel` for an `Effect` workflow.
   *
   * **Details**
   *
   * This function allows you to apply a specific `LogLevel` locally to an
   * `Effect` workflow. Once the workflow completes, the `LogLevel` reverts to its
   * previous state.
   *
   * **When to Use**
   *
   * This is particularly useful when you want to adjust the verbosity of logging
   * for specific parts of your program without affecting the global log level.
   *
   * @example
   * ```ts
   * import { Effect, LogLevel } from "effect"
   *
   * const program = Effect.gen(function*() {
   *   yield* Effect.log("message1")
   *   yield* Effect.gen(function*() {
   *     yield* Effect.log("message2")
   *     yield* Effect.log("message3")
   *   }).pipe(LogLevel.locally(LogLevel.Warning))
   * })
   *
   * Effect.runFork(program)
   * // timestamp=... level=INFO fiber=#0 message=message1
   * // timestamp=... level=WARN fiber=#0 message=message2
   * // timestamp=... level=WARN fiber=#0 message=message3
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  (self: LogLevel): <A, E, R>(use: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  /**
   * Temporarily sets a `LogLevel` for an `Effect` workflow.
   *
   * **Details**
   *
   * This function allows you to apply a specific `LogLevel` locally to an
   * `Effect` workflow. Once the workflow completes, the `LogLevel` reverts to its
   * previous state.
   *
   * **When to Use**
   *
   * This is particularly useful when you want to adjust the verbosity of logging
   * for specific parts of your program without affecting the global log level.
   *
   * @example
   * ```ts
   * import { Effect, LogLevel } from "effect"
   *
   * const program = Effect.gen(function*() {
   *   yield* Effect.log("message1")
   *   yield* Effect.gen(function*() {
   *     yield* Effect.log("message2")
   *     yield* Effect.log("message3")
   *   }).pipe(LogLevel.locally(LogLevel.Warning))
   * })
   *
   * Effect.runFork(program)
   * // timestamp=... level=INFO fiber=#0 message=message1
   * // timestamp=... level=WARN fiber=#0 message=message2
   * // timestamp=... level=WARN fiber=#0 message=message3
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(use: Effect.Effect<A, E, R>, self: LogLevel): Effect.Effect<A, E, R>
} = dual(
  2,
  <A, E, R>(use: Effect.Effect<A, E, R>, self: LogLevel): Effect.Effect<A, E, R> =>
    core.fiberRefLocally(use, core.currentLogLevel, self)
)

/**
 * @since 2.0.0
 * @category instances
 */
export const Order: order.Order<LogLevel> = pipe(
  number.Order,
  order.mapInput((level: LogLevel) => level.ordinal)
)

/**
 * @since 2.0.0
 * @category ordering
 */
export const lessThan: {
  /**
   * @since 2.0.0
   * @category ordering
   */
  (that: LogLevel): (self: LogLevel) => boolean
  /**
   * @since 2.0.0
   * @category ordering
   */
  (self: LogLevel, that: LogLevel): boolean
} = order.lessThan(Order)

/**
 * @since 2.0.0
 * @category ordering
 */
export const lessThanEqual: {
  /**
   * @since 2.0.0
   * @category ordering
   */
  (that: LogLevel): (self: LogLevel) => boolean
  /**
   * @since 2.0.0
   * @category ordering
   */
  (self: LogLevel, that: LogLevel): boolean
} = order.lessThanOrEqualTo(Order)

/**
 * @since 2.0.0
 * @category ordering
 */
export const greaterThan: {
  /**
   * @since 2.0.0
   * @category ordering
   */
  (that: LogLevel): (self: LogLevel) => boolean
  /**
   * @since 2.0.0
   * @category ordering
   */
  (self: LogLevel, that: LogLevel): boolean
} = order.greaterThan(Order)

/**
 * @since 2.0.0
 * @category ordering
 */
export const greaterThanEqual: {
  /**
   * @since 2.0.0
   * @category ordering
   */
  (that: LogLevel): (self: LogLevel) => boolean
  /**
   * @since 2.0.0
   * @category ordering
   */
  (self: LogLevel, that: LogLevel): boolean
} = order.greaterThanOrEqualTo(Order)

/**
 * @since 2.0.0
 * @category conversions
 */
export const fromLiteral = (literal: Literal): LogLevel => {
  switch (literal) {
    case "All":
      return All
    case "Debug":
      return Debug
    case "Error":
      return Error
    case "Fatal":
      return Fatal
    case "Info":
      return Info
    case "Trace":
      return Trace
    case "None":
      return None
    case "Warning":
      return Warning
  }
}
