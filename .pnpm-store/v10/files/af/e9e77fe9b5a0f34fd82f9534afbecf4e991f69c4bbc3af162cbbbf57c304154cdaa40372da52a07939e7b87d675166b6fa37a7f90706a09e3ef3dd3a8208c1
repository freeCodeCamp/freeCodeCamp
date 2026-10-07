"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tap = exports.of = exports.matchEffect = exports.match = exports.map = exports.make = exports.isSuccess = exports.isFailure = exports.isDone = exports.fromPull = exports.fromExit = exports.fromEffect = exports.failCause = exports.fail = exports.end = exports.done = exports.dieMessage = exports.die = exports.chunk = exports.TakeTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/take.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const TakeTypeId = exports.TakeTypeId = internal.TakeTypeId;
/**
 * Creates a `Take` with the specified chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
const chunk = exports.chunk = internal.chunk;
/**
 * Creates a failing `Take` with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const die = exports.die = internal.die;
/**
 * Creates a failing `Take` with the specified error message.
 *
 * @since 2.0.0
 * @category constructors
 */
const dieMessage = exports.dieMessage = internal.dieMessage;
/**
 * Transforms a `Take<A, E>` to an `Effect<A, E>`.
 *
 * @since 2.0.0
 * @category destructors
 */
const done = exports.done = internal.done;
/**
 * Represents the end-of-stream marker.
 *
 * @since 2.0.0
 * @category constructors
 */
const end = exports.end = internal.end;
/**
 * Creates a failing `Take` with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = internal.fail;
/**
 * Creates a failing `Take` with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCause = exports.failCause = internal.failCause;
/**
 * Creates an effect from `Effect<A, E, R>` that does not fail, but succeeds with
 * the `Take<A, E>`. Error from stream when pulling is converted to
 * `Take.failCause`. Creates a single value chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffect = exports.fromEffect = internal.fromEffect;
/**
 * Creates a `Take` from an `Exit`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromExit = exports.fromExit = internal.fromExit;
/**
 * Creates effect from `Effect<Chunk<A>, Option<E>, R>` that does not fail, but
 * succeeds with the `Take<A, E>`. Errors from stream when pulling are converted
 * to `Take.failCause`, and the end-of-stream is converted to `Take.end`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromPull = exports.fromPull = internal.fromPull;
/**
 * Checks if this `take` is done (`Take.end`).
 *
 * @since 2.0.0
 * @category getters
 */
const isDone = exports.isDone = internal.isDone;
/**
 * Checks if this `take` is a failure.
 *
 * @since 2.0.0
 * @category getters
 */
const isFailure = exports.isFailure = internal.isFailure;
/**
 * Checks if this `take` is a success.
 *
 * @since 2.0.0
 * @category getters
 */
const isSuccess = exports.isSuccess = internal.isSuccess;
/**
 * Constructs a `Take`.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Transforms `Take<A, E>` to `Take<B, A>` by applying function `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
/**
 * Folds over the failure cause, success value and end-of-stream marker to
 * yield a value.
 *
 * @since 2.0.0
 * @category destructors
 */
const match = exports.match = internal.match;
/**
 * Effectful version of `Take.fold`.
 *
 * Folds over the failure cause, success value and end-of-stream marker to
 * yield an effect.
 *
 * @since 2.0.0
 * @category destructors
 */
const matchEffect = exports.matchEffect = internal.matchEffect;
/**
 * Creates a `Take` with a single value chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
const of = exports.of = internal.of;
/**
 * Returns an effect that effectfully "peeks" at the success of this take.
 *
 * @since 2.0.0
 * @category sequencing
 */
const tap = exports.tap = internal.tap;
//# sourceMappingURL=Take.js.map