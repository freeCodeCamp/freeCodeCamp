"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locally = exports.lessThanEqual = exports.lessThan = exports.greaterThanEqual = exports.greaterThan = exports.fromLiteral = exports.allLevels = exports.Warning = exports.Trace = exports.Order = exports.None = exports.Info = exports.Fatal = exports.Error = exports.Debug = exports.All = void 0;
var _Function = require("./Function.js");
var core = _interopRequireWildcard(require("./internal/core.js"));
var number = _interopRequireWildcard(require("./Number.js"));
var order = _interopRequireWildcard(require("./Order.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category constructors
 */
const All = exports.All = core.logLevelAll;
/**
 * @since 2.0.0
 * @category constructors
 */
const Fatal = exports.Fatal = core.logLevelFatal;
/**
 * @since 2.0.0
 * @category constructors
 */
const Error = exports.Error = core.logLevelError;
/**
 * @since 2.0.0
 * @category constructors
 */
const Warning = exports.Warning = core.logLevelWarning;
/**
 * @since 2.0.0
 * @category constructors
 */
const Info = exports.Info = core.logLevelInfo;
/**
 * @since 2.0.0
 * @category constructors
 */
const Debug = exports.Debug = core.logLevelDebug;
/**
 * @since 2.0.0
 * @category constructors
 */
const Trace = exports.Trace = core.logLevelTrace;
/**
 * @since 2.0.0
 * @category constructors
 */
const None = exports.None = core.logLevelNone;
/**
 * @since 2.0.0
 * @category constructors
 */
const allLevels = exports.allLevels = core.allLogLevels;
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
const locally = exports.locally = /*#__PURE__*/(0, _Function.dual)(2, (use, self) => core.fiberRefLocally(use, core.currentLogLevel, self));
/**
 * @since 2.0.0
 * @category instances
 */
const Order = exports.Order = /*#__PURE__*/(0, _Function.pipe)(number.Order, /*#__PURE__*/order.mapInput(level => level.ordinal));
/**
 * @since 2.0.0
 * @category ordering
 */
const lessThan = exports.lessThan = /*#__PURE__*/order.lessThan(Order);
/**
 * @since 2.0.0
 * @category ordering
 */
const lessThanEqual = exports.lessThanEqual = /*#__PURE__*/order.lessThanOrEqualTo(Order);
/**
 * @since 2.0.0
 * @category ordering
 */
const greaterThan = exports.greaterThan = /*#__PURE__*/order.greaterThan(Order);
/**
 * @since 2.0.0
 * @category ordering
 */
const greaterThanEqual = exports.greaterThanEqual = /*#__PURE__*/order.greaterThanOrEqualTo(Order);
/**
 * @since 2.0.0
 * @category conversions
 */
const fromLiteral = literal => {
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
exports.fromLiteral = fromLiteral;
//# sourceMappingURL=LogLevel.js.map