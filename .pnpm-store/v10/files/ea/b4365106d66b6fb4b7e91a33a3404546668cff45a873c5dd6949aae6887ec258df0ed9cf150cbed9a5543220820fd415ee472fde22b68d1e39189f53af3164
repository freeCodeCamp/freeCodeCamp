"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.zipRight = exports.zipParRight = exports.zipParLeft = exports.zipPar = exports.zipLeft = exports.zip = exports.void = exports.succeed = exports.matchEffect = exports.match = exports.mapErrorCause = exports.mapError = exports.mapBoth = exports.map = exports.isSuccess = exports.isInterrupted = exports.isFailure = exports.isExit = exports.interrupt = exports.getOrElse = exports.fromOption = exports.fromEither = exports.forEachEffect = exports.flatten = exports.flatMapEffect = exports.flatMap = exports.failCause = exports.fail = exports.exists = exports.die = exports.causeOption = exports.asVoid = exports.as = exports.all = void 0;
var core = _interopRequireWildcard(require("./internal/core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Returns `true` if the specified value is an `Exit`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isExit = exports.isExit = core.exitIsExit;
/**
 * Returns `true` if the specified `Exit` is a `Failure`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isFailure = exports.isFailure = core.exitIsFailure;
/**
 * Returns `true` if the specified `Exit` is a `Success`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isSuccess = exports.isSuccess = core.exitIsSuccess;
/**
 * Returns `true` if the specified exit is a `Failure` **and** the `Cause` of
 * the failure was due to interruption, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isInterrupted = exports.isInterrupted = core.exitIsInterrupted;
/**
 * Maps the `Success` value of the specified exit to the provided constant
 * value.
 *
 * @since 2.0.0
 * @category mapping
 */
const as = exports.as = core.exitAs;
/**
 * Maps the `Success` value of the specified exit to a void.
 *
 * @since 2.0.0
 * @category mapping
 */
const asVoid = exports.asVoid = core.exitAsVoid;
/**
 * Returns a `Some<Cause<E>>` if the specified exit is a `Failure`, `None`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const causeOption = exports.causeOption = core.exitCauseOption;
/**
 * Collects all of the specified exit values into a `Some<Exit<List<A>, E>>`. If
 * the provided iterable contains no elements, `None` will be returned.
 *
 * @since 2.0.0
 * @category constructors
 */
const all = exports.all = core.exitCollectAll;
/**
 * Constructs a new `Exit.Failure` from the specified unrecoverable defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const die = exports.die = core.exitDie;
/**
 * Executes the predicate on the value of the specified exit if it is a
 * `Success`, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category elements
 */
const exists = exports.exists = core.exitExists;
/**
 * Constructs a new `Exit.Failure` from the specified recoverable error of type
 * `E`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = core.exitFail;
/**
 * Constructs a new `Exit.Failure` from the specified `Cause` of type `E`.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCause = exports.failCause = core.exitFailCause;
/**
 * @since 2.0.0
 * @category sequencing
 */
const flatMap = exports.flatMap = core.exitFlatMap;
/**
 * @since 2.0.0
 * @category sequencing
 */
const flatMapEffect = exports.flatMapEffect = core.exitFlatMapEffect;
/**
 * @since 2.0.0
 * @category sequencing
 */
const flatten = exports.flatten = core.exitFlatten;
/**
 * @since 2.0.0
 * @category traversing
 */
const forEachEffect = exports.forEachEffect = core.exitForEachEffect;
/**
 * Converts an `Either<R, L>` into an `Exit<R, L>`.
 *
 * @since 2.0.0
 * @category conversions
 */
const fromEither = exports.fromEither = core.exitFromEither;
/**
 * Converts an `Option<A>` into an `Exit<void, A>`.
 *
 * @since 2.0.0
 * @category conversions
 */
const fromOption = exports.fromOption = core.exitFromOption;
/**
 * Returns the `A` if specified exit is a `Success`, otherwise returns the
 * alternate `A` value computed from the specified function which receives the
 * `Cause<E>` of the exit `Failure`.
 *
 * @since 2.0.0
 * @category getters
 */
const getOrElse = exports.getOrElse = core.exitGetOrElse;
/**
 * Constructs a new `Exit.Failure` from the specified `FiberId` indicating that
 * the `Fiber` running an `Effect` workflow was terminated due to interruption.
 *
 * @since 2.0.0
 * @category constructors
 */
const interrupt = exports.interrupt = core.exitInterrupt;
/**
 * Maps over the `Success` value of the specified exit using the provided
 * function.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = core.exitMap;
/**
 * Maps over the `Success` and `Failure` cases of the specified exit using the
 * provided functions.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapBoth = exports.mapBoth = core.exitMapBoth;
/**
 * Maps over the error contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapError = exports.mapError = core.exitMapError;
/**
 * Maps over the `Cause` contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapErrorCause = exports.mapErrorCause = core.exitMapErrorCause;
/**
 * @since 2.0.0
 * @category folding
 */
const match = exports.match = core.exitMatch;
/**
 * @since 2.0.0
 * @category folding
 */
const matchEffect = exports.matchEffect = core.exitMatchEffect;
/**
 * Constructs a new `Exit.Success` containing the specified value of type `A`.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = core.exitSucceed;
const void_ = exports.void = core.exitVoid;
/**
 * Sequentially zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = core.exitZip;
/**
 * Sequentially zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipLeft = exports.zipLeft = core.exitZipLeft;
/**
 * Sequentially zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipRight = exports.zipRight = core.exitZipRight;
/**
 * Parallelly zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipPar = exports.zipPar = core.exitZipPar;
/**
 * Parallelly zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipParLeft = exports.zipParLeft = core.exitZipParLeft;
/**
 * Parallelly zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipParRight = exports.zipParRight = core.exitZipParRight;
/**
 * Zips this exit together with that exit using the specified combination
 * functions.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWith = exports.zipWith = core.exitZipWith;
//# sourceMappingURL=Exit.js.map