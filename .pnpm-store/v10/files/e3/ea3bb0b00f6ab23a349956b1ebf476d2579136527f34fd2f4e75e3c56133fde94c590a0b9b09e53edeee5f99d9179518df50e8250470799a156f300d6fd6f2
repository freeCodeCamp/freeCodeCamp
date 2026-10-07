import * as core from "./internal/core.js";
/**
 * Returns `true` if the specified value is an `Exit`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isExit = core.exitIsExit;
/**
 * Returns `true` if the specified `Exit` is a `Failure`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isFailure = core.exitIsFailure;
/**
 * Returns `true` if the specified `Exit` is a `Success`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isSuccess = core.exitIsSuccess;
/**
 * Returns `true` if the specified exit is a `Failure` **and** the `Cause` of
 * the failure was due to interruption, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isInterrupted = core.exitIsInterrupted;
/**
 * Maps the `Success` value of the specified exit to the provided constant
 * value.
 *
 * @since 2.0.0
 * @category mapping
 */
export const as = core.exitAs;
/**
 * Maps the `Success` value of the specified exit to a void.
 *
 * @since 2.0.0
 * @category mapping
 */
export const asVoid = core.exitAsVoid;
/**
 * Returns a `Some<Cause<E>>` if the specified exit is a `Failure`, `None`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const causeOption = core.exitCauseOption;
/**
 * Collects all of the specified exit values into a `Some<Exit<List<A>, E>>`. If
 * the provided iterable contains no elements, `None` will be returned.
 *
 * @since 2.0.0
 * @category constructors
 */
export const all = core.exitCollectAll;
/**
 * Constructs a new `Exit.Failure` from the specified unrecoverable defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const die = core.exitDie;
/**
 * Executes the predicate on the value of the specified exit if it is a
 * `Success`, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category elements
 */
export const exists = core.exitExists;
/**
 * Constructs a new `Exit.Failure` from the specified recoverable error of type
 * `E`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail = core.exitFail;
/**
 * Constructs a new `Exit.Failure` from the specified `Cause` of type `E`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCause = core.exitFailCause;
/**
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap = core.exitFlatMap;
/**
 * @since 2.0.0
 * @category sequencing
 */
export const flatMapEffect = core.exitFlatMapEffect;
/**
 * @since 2.0.0
 * @category sequencing
 */
export const flatten = core.exitFlatten;
/**
 * @since 2.0.0
 * @category traversing
 */
export const forEachEffect = core.exitForEachEffect;
/**
 * Converts an `Either<R, L>` into an `Exit<R, L>`.
 *
 * @since 2.0.0
 * @category conversions
 */
export const fromEither = core.exitFromEither;
/**
 * Converts an `Option<A>` into an `Exit<void, A>`.
 *
 * @since 2.0.0
 * @category conversions
 */
export const fromOption = core.exitFromOption;
/**
 * Returns the `A` if specified exit is a `Success`, otherwise returns the
 * alternate `A` value computed from the specified function which receives the
 * `Cause<E>` of the exit `Failure`.
 *
 * @since 2.0.0
 * @category getters
 */
export const getOrElse = core.exitGetOrElse;
/**
 * Constructs a new `Exit.Failure` from the specified `FiberId` indicating that
 * the `Fiber` running an `Effect` workflow was terminated due to interruption.
 *
 * @since 2.0.0
 * @category constructors
 */
export const interrupt = core.exitInterrupt;
/**
 * Maps over the `Success` value of the specified exit using the provided
 * function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = core.exitMap;
/**
 * Maps over the `Success` and `Failure` cases of the specified exit using the
 * provided functions.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapBoth = core.exitMapBoth;
/**
 * Maps over the error contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapError = core.exitMapError;
/**
 * Maps over the `Cause` contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapErrorCause = core.exitMapErrorCause;
/**
 * @since 2.0.0
 * @category folding
 */
export const match = core.exitMatch;
/**
 * @since 2.0.0
 * @category folding
 */
export const matchEffect = core.exitMatchEffect;
/**
 * Constructs a new `Exit.Success` containing the specified value of type `A`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed = core.exitSucceed;
const void_ = core.exitVoid;
export {
/**
 * Represents an `Exit` which succeeds with `undefined`.
 *
 * @since 2.0.0
 * @category constructors
 */
void_ as void };
/**
 * Sequentially zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip = core.exitZip;
/**
 * Sequentially zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft = core.exitZipLeft;
/**
 * Sequentially zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipRight = core.exitZipRight;
/**
 * Parallelly zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipPar = core.exitZipPar;
/**
 * Parallelly zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipParLeft = core.exitZipParLeft;
/**
 * Parallelly zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipParRight = core.exitZipParRight;
/**
 * Zips this exit together with that exit using the specified combination
 * functions.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith = core.exitZipWith;
//# sourceMappingURL=Exit.js.map