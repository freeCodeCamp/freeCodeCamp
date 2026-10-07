import { dual, pipe } from "./Function.js";
import * as core from "./internal/core.js";
import * as number from "./Number.js";
import * as order from "./Order.js";
/**
 * @since 2.0.0
 * @category constructors
 */
export const All = core.logLevelAll;
/**
 * @since 2.0.0
 * @category constructors
 */
export const Fatal = core.logLevelFatal;
/**
 * @since 2.0.0
 * @category constructors
 */
export const Error = core.logLevelError;
/**
 * @since 2.0.0
 * @category constructors
 */
export const Warning = core.logLevelWarning;
/**
 * @since 2.0.0
 * @category constructors
 */
export const Info = core.logLevelInfo;
/**
 * @since 2.0.0
 * @category constructors
 */
export const Debug = core.logLevelDebug;
/**
 * @since 2.0.0
 * @category constructors
 */
export const Trace = core.logLevelTrace;
/**
 * @since 2.0.0
 * @category constructors
 */
export const None = core.logLevelNone;
/**
 * @since 2.0.0
 * @category constructors
 */
export const allLevels = core.allLogLevels;
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
export const locally = /*#__PURE__*/dual(2, (use, self) => core.fiberRefLocally(use, core.currentLogLevel, self));
/**
 * @since 2.0.0
 * @category instances
 */
export const Order = /*#__PURE__*/pipe(number.Order, /*#__PURE__*/order.mapInput(level => level.ordinal));
/**
 * @since 2.0.0
 * @category ordering
 */
export const lessThan = /*#__PURE__*/order.lessThan(Order);
/**
 * @since 2.0.0
 * @category ordering
 */
export const lessThanEqual = /*#__PURE__*/order.lessThanOrEqualTo(Order);
/**
 * @since 2.0.0
 * @category ordering
 */
export const greaterThan = /*#__PURE__*/order.greaterThan(Order);
/**
 * @since 2.0.0
 * @category ordering
 */
export const greaterThanEqual = /*#__PURE__*/order.greaterThanOrEqualTo(Order);
/**
 * @since 2.0.0
 * @category conversions
 */
export const fromLiteral = literal => {
  switch (literal) {
    case "All":
      return All;
    case "Debug":
      return Debug;
    case "Error":
      return Error;
    case "Fatal":
      return Fatal;
    case "Info":
      return Info;
    case "Trace":
      return Trace;
    case "None":
      return None;
    case "Warning":
      return Warning;
  }
};
//# sourceMappingURL=LogLevel.js.map