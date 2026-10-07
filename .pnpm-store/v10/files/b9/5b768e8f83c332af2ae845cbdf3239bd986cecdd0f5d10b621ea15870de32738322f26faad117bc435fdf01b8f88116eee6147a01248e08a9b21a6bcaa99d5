/**
 * @since 2.0.0
 */
import * as Cause from "./Cause.js";
import * as Chunk from "./Chunk.js";
import * as core from "./internal/stm/core.js";
import * as stm from "./internal/stm/stm.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const STMTypeId = core.STMTypeId;
/**
 * Returns `true` if the provided value is an `STM`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isSTM = core.isSTM;
/**
 * Treats the specified `acquire` transaction as the acquisition of a
 * resource. The `acquire` transaction will be executed interruptibly. If it
 * is a success and is committed the specified `release` workflow will be
 * executed uninterruptibly as soon as the `use` workflow completes execution.
 *
 * @since 2.0.0
 * @category constructors
 */
export const acquireUseRelease = stm.acquireUseRelease;
/**
 * Runs all the provided transactional effects in sequence respecting the
 * structure provided in input.
 *
 * Supports multiple arguments, a single argument tuple / array or record /
 * struct.
 *
 * @since 2.0.0
 * @category constructors
 */
export const all = stm.all;
/**
 * Maps the success value of this effect to the specified constant value.
 *
 * @since 2.0.0
 * @category mapping
 */
export const as = stm.as;
/**
 * Maps the success value of this effect to an optional value.
 *
 * @since 2.0.0
 * @category mapping
 */
export const asSome = stm.asSome;
/**
 * Maps the error value of this effect to an optional value.
 *
 * @since 2.0.0
 * @category mapping
 */
export const asSomeError = stm.asSomeError;
/**
 * This function maps the success value of an `STM` to `void`. If the original
 * `STM` succeeds, the returned `STM` will also succeed. If the original `STM`
 * fails, the returned `STM` will fail with the same error.
 *
 * @since 2.0.0
 * @category mapping
 */
export const asVoid = stm.asVoid;
/**
 * Creates an `STM` value from a partial (but pure) function.
 *
 * @since 2.0.0
 * @category constructors
 */
export const attempt = stm.attempt;
/**
 * Recovers from all errors.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchAll = core.catchAll;
/**
 * Recovers from some or all of the error cases.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchSome = stm.catchSome;
/**
 * Recovers from the specified tagged error.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchTag = stm.catchTag;
/**
 * Recovers from multiple tagged errors.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchTags = stm.catchTags;
/**
 * Checks the condition, and if it's true, returns unit, otherwise, retries.
 *
 * @since 2.0.0
 * @category constructors
 */
export const check = stm.check;
/**
 * Simultaneously filters and maps the value produced by this effect.
 *
 * @since 2.0.0
 * @category mutations
 */
export const collect = stm.collect;
/**
 * Simultaneously filters and maps the value produced by this effect.
 *
 * @since 2.0.0
 * @category mutations
 */
export const collectSTM = stm.collectSTM;
/**
 * Commits this transaction atomically.
 *
 * @since 2.0.0
 * @category destructors
 */
export const commit = core.commit;
/**
 * Commits this transaction atomically, regardless of whether the transaction
 * is a success or a failure.
 *
 * @since 2.0.0
 * @category destructors
 */
export const commitEither = stm.commitEither;
/**
 * Similar to Either.cond, evaluate the predicate, return the given A as
 * success if predicate returns true, and the given E as error otherwise
 *
 * @since 2.0.0
 * @category constructors
 */
export const cond = stm.cond;
/**
 * Retrieves the environment inside an stm.
 *
 * @since 2.0.0
 * @category constructors
 */
export const context = core.context;
/**
 * Accesses the environment of the transaction to perform a transaction.
 *
 * @since 2.0.0
 * @category constructors
 */
export const contextWith = core.contextWith;
/**
 * Accesses the environment of the transaction to perform a transaction.
 *
 * @since 2.0.0
 * @category constructors
 */
export const contextWithSTM = core.contextWithSTM;
/**
 * Transforms the environment being provided to this effect with the specified
 * function.
 *
 * @since 2.0.0
 * @category context
 */
export const mapInputContext = core.mapInputContext;
/**
 * Fails the transactional effect with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const die = core.die;
/**
 * Kills the fiber running the effect with a `Cause.RuntimeException` that
 * contains the specified message.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dieMessage = core.dieMessage;
/**
 * Fails the transactional effect with the specified lazily evaluated defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dieSync = core.dieSync;
/**
 * Converts the failure channel into an `Either`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const either = stm.either;
/**
 * Executes the specified finalization transaction whether or not this effect
 * succeeds. Note that as with all STM transactions, if the full transaction
 * fails, everything will be rolled back.
 *
 * @since 2.0.0
 * @category finalization
 */
export const ensuring = core.ensuring;
/**
 * Returns an effect that ignores errors and runs repeatedly until it
 * eventually succeeds.
 *
 * @since 2.0.0
 * @category mutations
 */
export const eventually = stm.eventually;
/**
 * Determines whether all elements of the `Iterable<A>` satisfy the effectual
 * predicate.
 *
 * @since 2.0.0
 * @category constructors
 */
export const every = stm.every;
/**
 * Determines whether any element of the `Iterable[A]` satisfies the effectual
 * predicate `f`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const exists = stm.exists;
/**
 * Fails the transactional effect with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail = core.fail;
/**
 * Fails the transactional effect with the specified lazily evaluated error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failSync = core.failSync;
/**
 * Returns the fiber id of the fiber committing the transaction.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fiberId = stm.fiberId;
/**
 * Filters the collection using the specified effectual predicate.
 *
 * @since 2.0.0
 * @category constructors
 */
export const filter = stm.filter;
/**
 * Filters the collection using the specified effectual predicate, removing
 * all elements that satisfy the predicate.
 *
 * @since 2.0.0
 * @category constructors
 */
export const filterNot = stm.filterNot;
/**
 * Dies with specified defect if the predicate fails.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterOrDie = stm.filterOrDie;
/**
 * Dies with a `Cause.RuntimeException` having the specified  message if the
 * predicate fails.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterOrDieMessage = stm.filterOrDieMessage;
/**
 * Supplies `orElse` if the predicate fails.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterOrElse = stm.filterOrElse;
/**
 * Fails with the specified error if the predicate fails.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterOrFail = stm.filterOrFail;
/**
 * Feeds the value produced by this effect to the specified function, and then
 * runs the returned effect as well to produce its results.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap = core.flatMap;
/**
 * Flattens out a nested `STM` effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatten = stm.flatten;
/**
 * Flips the success and failure channels of this transactional effect. This
 * allows you to use all methods on the error channel, possibly before
 * flipping back.
 *
 * @since 2.0.0
 * @category mutations
 */
export const flip = stm.flip;
/**
 * Swaps the error/value parameters, applies the function `f` and flips the
 * parameters back
 *
 * @since 2.0.0
 * @category mutations
 */
export const flipWith = stm.flipWith;
/**
 * Folds over the `STM` effect, handling both failure and success, but not
 * retry.
 *
 * @since 2.0.0
 * @category folding
 */
export const match = stm.match;
/**
 * Effectfully folds over the `STM` effect, handling both failure and success.
 *
 * @since 2.0.0
 * @category folding
 */
export const matchSTM = core.matchSTM;
/**
 * Applies the function `f` to each element of the `Iterable<A>` and returns
 * a transactional effect that produces a new `Chunk<A2>`.
 *
 * @since 2.0.0
 * @category traversing
 */
export const forEach = stm.forEach;
/**
 * Lifts an `Either` into a `STM`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEither = stm.fromEither;
/**
 * Lifts an `Option` into a `STM`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromOption = stm.fromOption;
/**
 * @since 2.0.0
 * @category constructors
 */
export const gen = stm.gen;
/**
 * Returns a successful effect with the head of the list if the list is
 * non-empty or fails with the error `None` if the list is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const head = stm.head;
const if_ = stm.if_;
export {
/**
 * Runs `onTrue` if the result of `b` is `true` and `onFalse` otherwise.
 *
 * @since 2.0.0
 * @category mutations
 */
if_ as if };
/**
 * Returns a new effect that ignores the success or failure of this effect.
 *
 * @since 2.0.0
 * @category mutations
 */
export const ignore = stm.ignore;
/**
 * Interrupts the fiber running the effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const interrupt = core.interrupt;
/**
 * Interrupts the fiber running the effect with the specified `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const interruptAs = core.interruptAs;
/**
 * Returns whether this transactional effect is a failure.
 *
 * @since 2.0.0
 * @category getters
 */
export const isFailure = stm.isFailure;
/**
 * Returns whether this transactional effect is a success.
 *
 * @since 2.0.0
 * @category getters
 */
export const isSuccess = stm.isSuccess;
/**
 * Iterates with the specified transactional function. The moral equivalent
 * of:
 *
 * ```ts skip-type-checking
 * const s = initial
 *
 * while (cont(s)) {
 *   s = body(s)
 * }
 *
 * return s
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const iterate = stm.iterate;
/**
 * Loops with the specified transactional function, collecting the results
 * into a list. The moral equivalent of:
 *
 * ```ts skip-type-checking
 * const as = []
 * let s  = initial
 *
 * while (cont(s)) {
 *   as.push(body(s))
 *   s  = inc(s)
 * }
 *
 * return as
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const loop = stm.loop;
/**
 * Maps the value produced by the effect.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = core.map;
/**
 * Maps the value produced by the effect with the specified function that may
 * throw exceptions but is otherwise pure, translating any thrown exceptions
 * into typed failed effects.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapAttempt = stm.mapAttempt;
/**
 * Returns an `STM` effect whose failure and success channels have been mapped
 * by the specified pair of functions, `f` and `g`.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapBoth = stm.mapBoth;
/**
 * Maps from one error type to another.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapError = stm.mapError;
/**
 * Returns a new effect where the error channel has been merged into the
 * success channel to their common combined type.
 *
 * @since 2.0.0
 * @category mutations
 */
export const merge = stm.merge;
/**
 * Merges an `Iterable<STM>` to a single `STM`, working sequentially.
 *
 * @since 2.0.0
 * @category constructors
 */
export const mergeAll = stm.mergeAll;
/**
 * Returns a new effect where boolean value of this effect is negated.
 *
 * @since 2.0.0
 * @category mutations
 */
export const negate = stm.negate;
/**
 * Requires the option produced by this value to be `None`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const none = stm.none;
/**
 * Converts the failure channel into an `Option`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const option = stm.option;
/**
 * Translates `STM` effect failure into death of the fiber, making all
 * failures unchecked and not a part of the type of the effect.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orDie = stm.orDie;
/**
 * Keeps none of the errors, and terminates the fiber running the `STM` effect
 * with them, using the specified function to convert the `E` into a defect.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orDieWith = stm.orDieWith;
/**
 * Tries this effect first, and if it fails or retries, tries the other
 * effect.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElse = stm.orElse;
/**
 * Returns a transactional effect that will produce the value of this effect
 * in left side, unless it fails or retries, in which case, it will produce
 * the value of the specified effect in right side.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseEither = stm.orElseEither;
/**
 * Tries this effect first, and if it fails or retries, fails with the
 * specified error.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseFail = stm.orElseFail;
/**
 * Returns an effect that will produce the value of this effect, unless it
 * fails with the `None` value, in which case it will produce the value of the
 * specified effect.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseOptional = stm.orElseOptional;
/**
 * Tries this effect first, and if it fails or retries, succeeds with the
 * specified value.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseSucceed = stm.orElseSucceed;
/**
 * Tries this effect first, and if it enters retry, then it tries the other
 * effect. This is an equivalent of Haskell's orElse.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orTry = core.orTry;
/**
 * Feeds elements of type `A` to a function `f` that returns an effect.
 * Collects all successes and failures in a tupled fashion.
 *
 * @since 2.0.0
 * @category traversing
 */
export const partition = stm.partition;
/**
 * Provides the transaction its required environment, which eliminates its
 * dependency on `R`.
 *
 * @since 2.0.0
 * @category context
 */
export const provideContext = stm.provideContext;
/**
 * Splits the context into two parts, providing one part using the
 * specified layer and leaving the remainder `R0`.
 *
 * @since 2.0.0
 * @category context
 */
export const provideSomeContext = stm.provideSomeContext;
/**
 * Provides the effect with the single service it requires. If the transactional
 * effect requires more than one service use `provideEnvironment` instead.
 *
 * @since 2.0.0
 * @category context
 */
export const provideService = stm.provideService;
/**
 * Provides the effect with the single service it requires. If the transactional
 * effect requires more than one service use `provideEnvironment` instead.
 *
 * @since 2.0.0
 * @category context
 */
export const provideServiceSTM = stm.provideServiceSTM;
/**
 * Folds an `Iterable<A>` using an effectual function f, working sequentially
 * from left to right.
 *
 * @since 2.0.0
 * @category constructors
 */
export const reduce = stm.reduce;
/**
 * Reduces an `Iterable<STM>` to a single `STM`, working sequentially.
 *
 * @since 2.0.0
 * @category constructors
 */
export const reduceAll = stm.reduceAll;
/**
 * Folds an `Iterable<A>` using an effectual function f, working sequentially
 * from right to left.
 *
 * @since 2.0.0
 * @category constructors
 */
export const reduceRight = stm.reduceRight;
/**
 * Keeps some of the errors, and terminates the fiber with the rest.
 *
 * @since 2.0.0
 * @category mutations
 */
export const refineOrDie = stm.refineOrDie;
/**
 * Keeps some of the errors, and terminates the fiber with the rest, using the
 * specified function to convert the `E` into a `Throwable`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const refineOrDieWith = stm.refineOrDieWith;
/**
 * Fail with the returned value if the `PartialFunction` matches, otherwise
 * continue with our held value.
 *
 * @since 2.0.0
 * @category mutations
 */
export const reject = stm.reject;
/**
 * Continue with the returned computation if the specified partial function
 * matches, translating the successful match into a failure, otherwise continue
 * with our held value.
 *
 * @since 2.0.0
 * @category mutations
 */
export const rejectSTM = stm.rejectSTM;
/**
 * Repeats this `STM` effect until its result satisfies the specified
 * predicate.
 *
 * **WARNING**: `repeatUntil` uses a busy loop to repeat the effect and will
 * consume a thread until it completes (it cannot yield). This is because STM
 * describes a single atomic transaction which must either complete, retry or
 * fail a transaction before yielding back to the Effect runtime.
 *   - Use `retryUntil` instead if you don't need to maintain transaction
 *     state for repeats.
 *   - Ensure repeating the STM effect will eventually satisfy the predicate.
 *
 * @since 2.0.0
 * @category mutations
 */
export const repeatUntil = stm.repeatUntil;
/**
 * Repeats this `STM` effect while its result satisfies the specified
 * predicate.
 *
 * **WARNING**: `repeatWhile` uses a busy loop to repeat the effect and will
 * consume a thread until it completes (it cannot yield). This is because STM
 * describes a single atomic transaction which must either complete, retry or
 * fail a transaction before yielding back to the Effect runtime.
 *   - Use `retryWhile` instead if you don't need to maintain transaction
 *     state for repeats.
 *   - Ensure repeating the STM effect will eventually not satisfy the
 *     predicate.
 *
 * @since 2.0.0
 * @category mutations
 */
export const repeatWhile = stm.repeatWhile;
/**
 * Replicates the given effect n times. If 0 or negative numbers are given, an
 * empty `Chunk` will be returned.
 *
 * @since 2.0.0
 * @category constructors
 */
export const replicate = stm.replicate;
/**
 * Performs this transaction the specified number of times and collects the
 * results.
 *
 * @since 2.0.0
 * @category constructors
 */
export const replicateSTM = stm.replicateSTM;
/**
 * Performs this transaction the specified number of times, discarding the
 * results.
 *
 * @since 2.0.0
 * @category constructors
 */
export const replicateSTMDiscard = stm.replicateSTMDiscard;
/**
 * Abort and retry the whole transaction when any of the underlying
 * transactional variables have changed.
 *
 * @since 2.0.0
 * @category error handling
 */
export const retry = core.retry;
/**
 * Filters the value produced by this effect, retrying the transaction until
 * the predicate returns `true` for the value.
 *
 * @since 2.0.0
 * @category mutations
 */
export const retryUntil = stm.retryUntil;
/**
 * Filters the value produced by this effect, retrying the transaction while
 * the predicate returns `true` for the value.
 *
 * @since 2.0.0
 * @category mutations
 */
export const retryWhile = stm.retryWhile;
/**
 * Converts an option on values into an option on errors.
 *
 * @since 2.0.0
 * @category getters
 */
export const some = stm.some;
/**
 * Returns an `STM` effect that succeeds with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed = core.succeed;
/**
 * Returns an effect with the empty value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeedNone = stm.succeedNone;
/**
 * Returns an effect with the optional value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeedSome = stm.succeedSome;
/**
 * Summarizes a `STM` effect by computing a provided value before and after
 * execution, and then combining the values to produce a summary, together
 * with the result of execution.
 *
 * @since 2.0.0
 * @category mutations
 */
export const summarized = stm.summarized;
/**
 * Suspends creation of the specified transaction lazily.
 *
 * @since 2.0.0
 * @category constructors
 */
export const suspend = stm.suspend;
/**
 * Returns an `STM` effect that succeeds with the specified lazily evaluated
 * value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sync = core.sync;
/**
 * "Peeks" at the success of transactional effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tap = stm.tap;
/**
 * "Peeks" at both sides of an transactional effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tapBoth = stm.tapBoth;
/**
 * "Peeks" at the error of the transactional effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tapError = stm.tapError;
const try_ = stm.try_;
export {
/**
 * Imports a synchronous side-effect into a pure value, translating any thrown
 * exceptions into typed failed effects.
 *
 * @since 2.0.0
 * @category constructors
 */
try_ as try };
/**
 * The moral equivalent of `if (!p) exp`
 *
 * @since 2.0.0
 * @category mutations
 */
export const unless = stm.unless;
/**
 * The moral equivalent of `if (!p) exp` when `p` has side-effects
 *
 * @since 2.0.0
 * @category mutations
 */
export const unlessSTM = stm.unlessSTM;
/**
 * Converts an option on errors into an option on values.
 *
 * @since 2.0.0
 * @category getters
 */
export const unsome = stm.unsome;
const void_ = stm.void;
export {
/**
 * Returns an `STM` effect that succeeds with `void`.
 *
 * @since 2.0.0
 * @category constructors
 */
void_ as void };
/**
 * Feeds elements of type `A` to `f` and accumulates all errors in error
 * channel or successes in success channel.
 *
 * This combinator is lossy meaning that if there are errors all successes
 * will be lost. To retain all information please use `STM.partition`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const validateAll = stm.validateAll;
/**
 * Feeds elements of type `A` to `f` until it succeeds. Returns first success
 * or the accumulation of all errors.
 *
 * @since 2.0.0
 * @category mutations
 */
export const validateFirst = stm.validateFirst;
/**
 * The moral equivalent of `if (p) exp`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const when = stm.when;
/**
 * The moral equivalent of `if (p) exp` when `p` has side-effects.
 *
 * @since 2.0.0
 * @category mutations
 */
export const whenSTM = stm.whenSTM;
/**
 * Sequentially zips this value with the specified one.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip = core.zip;
/**
 * Sequentially zips this value with the specified one, discarding the second
 * element of the tuple.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft = core.zipLeft;
/**
 * Sequentially zips this value with the specified one, discarding the first
 * element of the tuple.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipRight = core.zipRight;
/**
 * Sequentially zips this value with the specified one, combining the values
 * using the specified combiner function.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith = core.zipWith;
/**
 * This function takes an iterable of `STM` values and returns a new
 * `STM` value that represents the first `STM` value in the iterable
 * that succeeds. If all of the `Effect` values in the iterable fail, then
 * the resulting `STM` value will fail as well.
 *
 * This function is sequential, meaning that the `STM` values in the
 * iterable will be executed in sequence, and the first one that succeeds
 * will determine the outcome of the resulting `STM` value.
 *
 * Returns a new `STM` value that represents the first successful
 * `STM` value in the iterable, or a failed `STM` value if all of the
 * `STM` values in the iterable fail.
 *
 * @since 2.0.0
 * @category elements
 */
export const firstSuccessOf = effects => suspend(() => {
  const list = Chunk.fromIterable(effects);
  if (!Chunk.isNonEmpty(list)) {
    return dieSync(() => new Cause.IllegalArgumentException(`Received an empty collection of effects`));
  }
  return Chunk.reduce(Chunk.tailNonEmpty(list), Chunk.headNonEmpty(list), (left, right) => orElse(left, () => right));
});
/**
 * @category do notation
 * @since 2.0.0
 */
export const Do = /*#__PURE__*/succeed({});
/**
 * @category do notation
 * @since 2.0.0
 */
export const bind = stm.bind;
const let_ = stm.let_;
export {
/**
 * @category do notation
 * @since 2.0.0
 */
let_ as let };
/**
 * @category do notation
 * @since 2.0.0
 */
export const bindTo = stm.bindTo;
//# sourceMappingURL=STM.js.map