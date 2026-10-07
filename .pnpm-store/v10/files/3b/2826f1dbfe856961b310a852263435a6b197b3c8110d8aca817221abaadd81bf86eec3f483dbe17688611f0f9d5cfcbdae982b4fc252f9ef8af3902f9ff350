"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripSomeDefects = exports.stripFailures = exports.squashWith = exports.squash = exports.size = exports.sequential = exports.reduceWithContext = exports.reduce = exports.prettyErrors = exports.pretty = exports.parallel = exports.originalError = exports.match = exports.map = exports.linearize = exports.keepDefects = exports.isUnknownException = exports.isTimeoutException = exports.isSequentialType = exports.isRuntimeException = exports.isParallelType = exports.isNoSuchElementException = exports.isInterruptedOnly = exports.isInterruptedException = exports.isInterrupted = exports.isInterruptType = exports.isIllegalArgumentException = exports.isFailure = exports.isFailType = exports.isExceededCapacityException = exports.isEmptyType = exports.isEmpty = exports.isDieType = exports.isDie = exports.isCause = exports.interruptors = exports.interruptOption = exports.interrupt = exports.flipCauseOption = exports.flatten = exports.flatMap = exports.find = exports.filter = exports.failures = exports.failureOrCause = exports.failureOption = exports.fail = exports.empty = exports.dieOption = exports.die = exports.defects = exports.contains = exports.as = exports.andThen = exports.YieldableError = exports.UnknownExceptionTypeId = exports.UnknownException = exports.TimeoutExceptionTypeId = exports.TimeoutException = exports.RuntimeExceptionTypeId = exports.RuntimeException = exports.NoSuchElementExceptionTypeId = exports.NoSuchElementException = exports.InvalidPubSubCapacityExceptionTypeId = exports.InterruptedExceptionTypeId = exports.InterruptedException = exports.IllegalArgumentExceptionTypeId = exports.IllegalArgumentException = exports.ExceededCapacityExceptionTypeId = exports.ExceededCapacityException = exports.CauseTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/cause.js"));
var core = _interopRequireWildcard(require("./internal/core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * A unique symbol identifying the `Cause` type.
 *
 * **Details**
 *
 * This provides a symbol that helps identify instances of the `Cause` data
 * type. This can be used for advanced operations such as refining types or
 * building internal utilities that check whether an unknown value is a `Cause`.
 *
 * @see {@link isCause} Check if a value is a `Cause`
 *
 * @since 2.0.0
 * @category Symbols
 */
const CauseTypeId = exports.CauseTypeId = internal.CauseTypeId;
/**
 * A unique symbol identifying the `RuntimeException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies a `RuntimeException`. This is
 * typically used internally by the library to recognize checked exceptions that
 * occur during runtime.
 *
 * @see {@link RuntimeException} Create or work with a `RuntimeException`
 *
 * @since 2.0.0
 * @category Symbols
 */
const RuntimeExceptionTypeId = exports.RuntimeExceptionTypeId = core.RuntimeExceptionTypeId;
/**
 * A unique symbol identifying the `InterruptedException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies an `InterruptedException`. This is
 * typically used internally to recognize when a fiber has been interrupted,
 * helping the framework handle interruption logic correctly.
 *
 * @see {@link InterruptedException} Create or work with an `InterruptedException`
 *
 * @since 2.0.0
 * @category Symbols
 */
const InterruptedExceptionTypeId = exports.InterruptedExceptionTypeId = core.InterruptedExceptionTypeId;
/**
 * A unique symbol identifying the `IllegalArgumentException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies an `IllegalArgumentException`. This is
 * often used in scenarios where invalid arguments are supplied to methods that
 * expect specific input.
 *
 * @see {@link IllegalArgumentException} Create or work with an `IllegalArgumentException`
 *
 * @since 2.0.0
 * @category Symbols
 */
const IllegalArgumentExceptionTypeId = exports.IllegalArgumentExceptionTypeId = core.IllegalArgumentExceptionTypeId;
/**
 * A unique symbol identifying the `NoSuchElementException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies a `NoSuchElementException`. It helps
 * differentiate cases where a required element is missing within a data
 * structure.
 *
 * @see {@link NoSuchElementException} Create or work with a `NoSuchElementException`
 *
 * @since 2.0.0
 * @category Symbols
 */
const NoSuchElementExceptionTypeId = exports.NoSuchElementExceptionTypeId = core.NoSuchElementExceptionTypeId;
/**
 * A unique symbol identifying the `InvalidPubSubCapacityException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies an `InvalidPubSubCapacityException`.
 * It indicates an error related to an invalid capacity passed to a `PubSub`
 * structure.
 *
 * @see {@link InvalidPubSubCapacityException} Create or work with an `InvalidPubSubCapacityException`
 *
 * @since 2.0.0
 * @category Symbols
 */
const InvalidPubSubCapacityExceptionTypeId = exports.InvalidPubSubCapacityExceptionTypeId = core.InvalidPubSubCapacityExceptionTypeId;
/**
 * A unique symbol identifying the `ExceededCapacityException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies an `ExceededCapacityException`. It
 * denotes situations where a resource has exceeded its configured capacity
 * limit.
 *
 * @see {@link ExceededCapacityException} Create or work with an `ExceededCapacityException`
 *
 * @since 3.5.0
 * @category Symbols
 */
const ExceededCapacityExceptionTypeId = exports.ExceededCapacityExceptionTypeId = core.ExceededCapacityExceptionTypeId;
/**
 * A unique symbol identifying the `TimeoutException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies a `TimeoutException`. It helps the
 * framework recognize errors related to operations that fail to complete within
 * a given timeframe.
 *
 * @see {@link TimeoutException} Create or work with a `TimeoutException`
 *
 * @since 2.0.0
 * @category Symbols
 */
const TimeoutExceptionTypeId = exports.TimeoutExceptionTypeId = core.TimeoutExceptionTypeId;
/**
 * A unique symbol identifying the `UnknownException` type.
 *
 * **Details**
 *
 * This provides a symbol that identifies an `UnknownException`. It is typically
 * used for generic or unexpected errors that do not fit other specific
 * exception categories.
 *
 * @see {@link UnknownException} Create or work with an `UnknownException`
 *
 * @since 2.0.0
 * @category Symbols
 */
const UnknownExceptionTypeId = exports.UnknownExceptionTypeId = core.UnknownExceptionTypeId;
/**
 * Creates an error that occurs at runtime, extendable for other exception
 * types.
 *
 * @since 2.0.0
 * @category Errors
 */
const YieldableError = exports.YieldableError = core.YieldableError;
/**
 * Creates an `Empty` cause.
 *
 * **Details**
 *
 * This function returns a cause that signifies "no error." It's commonly used
 * to represent an absence of failure conditions.
 *
 * @see {@link isEmpty} Check if a `Cause` is empty
 *
 * @since 2.0.0
 * @category Constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Creates a `Fail` cause from an expected error.
 *
 * **Details**
 *
 * This function constructs a `Cause` carrying an error of type `E`. It's used
 * when you want to represent a known or anticipated failure in your effectful
 * computations.
 *
 * @see {@link isFailure} Check if a `Cause` contains a failure
 *
 * @since 2.0.0
 * @category Constructors
 */
const fail = exports.fail = internal.fail;
/**
 * Creates a `Die` cause from an unexpected error.
 *
 * **Details**
 *
 * This function wraps an unhandled or unknown defect (like a runtime crash)
 * into a `Cause`. It's useful for capturing unforeseen issues in a structured
 * way.
 *
 * @see {@link isDie} Check if a `Cause` contains a defect
 *
 * @since 2.0.0
 * @category Constructors
 */
const die = exports.die = internal.die;
/**
 * Creates an `Interrupt` cause from a `FiberId`.
 *
 * **Details**
 *
 * This function represents a fiber that has been interrupted. It stores the
 * identifier of the interrupted fiber, enabling precise tracking of concurrent
 * cancellations.
 *
 * @see {@link isInterrupted} Check if a `Cause` contains an interruption
 *
 * @since 2.0.0
 * @category Constructors
 */
const interrupt = exports.interrupt = internal.interrupt;
/**
 * Combines two `Cause`s in parallel.
 *
 * **Details**
 *
 * This function merges two errors that occurred simultaneously. Instead of
 * discarding one error, both are retained, allowing for richer error reporting
 * and debugging.
 *
 * @see {@link isParallelType} Check if a `Cause` is a `Parallel`
 *
 * @since 2.0.0
 * @category Constructors
 */
const parallel = exports.parallel = internal.parallel;
/**
 * Combines two `Cause`s sequentially.
 *
 * **Details**
 *
 * This function merges two errors that occurred in sequence, such as a main
 * error followed by a finalization error. It preserves both errors for complete
 * failure information.
 *
 * @see {@link isSequentialType} Check if a `Cause` is a `Sequential`
 *
 * @since 2.0.0
 * @category Constructors
 */
const sequential = exports.sequential = internal.sequential;
/**
 * Checks if a value is a `Cause`.
 *
 * @since 2.0.0
 * @category Guards
 */
const isCause = exports.isCause = internal.isCause;
/**
 * Checks if a `Cause` is an `Empty` type.
 *
 * @see {@link empty} Create a new `Empty` cause
 *
 * @since 2.0.0
 * @category Guards
 */
const isEmptyType = exports.isEmptyType = internal.isEmptyType;
/**
 * Checks if a `Cause` is a `Fail` type.
 *
 * @see {@link fail} Create a new `Fail` cause
 *
 * @since 2.0.0
 * @category Guards
 */
const isFailType = exports.isFailType = internal.isFailType;
/**
 * Checks if a `Cause` is a `Die` type.
 *
 * @see {@link die} Create a new `Die` cause
 *
 * @since 2.0.0
 * @category Guards
 */
const isDieType = exports.isDieType = internal.isDieType;
/**
 * Checks if a `Cause` is an `Interrupt` type.
 *
 * @see {@link interrupt} Create an `Interrupt` cause
 *
 * @since 2.0.0
 * @category Guards
 */
const isInterruptType = exports.isInterruptType = internal.isInterruptType;
/**
 * Checks if a `Cause` is a `Sequential` type.
 *
 * @see {@link sequential} Combine two `Cause`s sequentially
 *
 * @since 2.0.0
 * @category Guards
 */
const isSequentialType = exports.isSequentialType = internal.isSequentialType;
/**
 * Checks if a `Cause` is a `Parallel` type.
 *
 * @see {@link parallel} Combine two `Cause`s in parallel
 *
 * @since 2.0.0
 * @category Guards
 */
const isParallelType = exports.isParallelType = internal.isParallelType;
/**
 * Calculates the size of a `Cause`.
 *
 * **Details**
 *
 * This function returns the total number of `Cause` nodes in the semiring
 * structure, reflecting how many individual error elements are recorded.
 *
 * @since 2.0.0
 * @category Getters
 */
const size = exports.size = internal.size;
/**
 * Checks if a `Cause` is entirely empty.
 *
 * **Details**
 *
 * This function returns `true` if the `Cause` contains no errors, defects, or
 * interruptions. It's helpful for verifying if a computation truly had no
 * failures.
 *
 * @since 2.0.0
 * @category Getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Checks if a `Cause` contains a failure.
 *
 * **Details**
 *
 * This function returns `true` if the `Cause` includes any `Fail` error. It's
 * commonly used to confirm whether a workflow encountered an anticipated error
 * versus just defects or interruptions.
 *
 * @since 2.0.0
 * @category Getters
 */
const isFailure = exports.isFailure = internal.isFailure;
/**
 * Checks if a `Cause` contains a defect.
 *
 * **Details**
 *
 * This function returns `true` if the `Cause` includes any unexpected or
 * unhandled errors (`Die`). It's useful for differentiating known failures from
 * unexpected ones.
 *
 * @since 2.0.0
 * @category Getters
 */
const isDie = exports.isDie = internal.isDie;
/**
 * Checks if a `Cause` contains an interruption.
 *
 * **Details**
 *
 * This function returns `true` if the `Cause` includes any fiber interruptions.
 *
 * @since 2.0.0
 * @category Getters
 */
const isInterrupted = exports.isInterrupted = internal.isInterrupted;
/**
 * Checks if a `Cause` contains only interruptions.
 *
 * **Details**
 *
 * This function returns `true` if the `Cause` has been interrupted but does not
 * contain any other failures, such as `Fail` or `Die`. It's helpful for
 * verifying purely "cancellation" scenarios.
 *
 * @since 2.0.0
 * @category Getters
 */
const isInterruptedOnly = exports.isInterruptedOnly = internal.isInterruptedOnly;
/**
 * Extracts all recoverable errors of type `E` from a `Cause`.
 *
 * **Details**
 *
 * This function returns a chunk of errors, providing a list of all `Fail`
 * values found in the cause. It's useful for collecting all known failures for
 * logging or combined error handling.
 *
 * @since 2.0.0
 * @category Getters
 */
const failures = exports.failures = internal.failures;
/**
 * Extracts all unrecoverable defects from a `Cause`.
 *
 * **Details**
 *
 * This function returns a chunk of values representing unexpected errors
 * (`Die`). It's handy for capturing or logging unanticipated failures that
 * might need special handling, such as bug reports.
 *
 * @since 2.0.0
 * @category Getters
 */
const defects = exports.defects = internal.defects;
/**
 * Collects all `FiberId`s responsible for interrupting a fiber.
 *
 * **Details**
 *
 * This function returns a set of IDs indicating which fibers caused
 * interruptions within this `Cause`. It's useful for debugging concurrency
 * issues or tracing cancellations.
 *
 * @since 2.0.0
 * @category Getters
 */
const interruptors = exports.interruptors = internal.interruptors;
/**
 * Retrieves the first `Fail` error in a `Cause`, if present.
 *
 * **Details**
 *
 * This function returns an `Option` containing the first recoverable error
 * (`E`) from the cause. It's often used to quickly check if there's a primary
 * error to handle or display.
 *
 * @since 2.0.0
 * @category Getters
 */
const failureOption = exports.failureOption = internal.failureOption;
/**
 * Splits a `Cause` into either its first `Fail` error or the rest of the cause
 * (which might only contain `Die` or `Interrupt`).
 *
 * **Details**
 *
 * This function either returns the checked error (`E`) or the remaining
 * `Cause<never>` with defects/interruptions. It helps you decide if there's a
 * recoverable path or if only unhandled issues remain.
 *
 * @since 2.0.0
 * @category Getters
 */
const failureOrCause = exports.failureOrCause = internal.failureOrCause;
/**
 * Strips out failures with an error of `None` from a `Cause<Option<E>>`.
 *
 * **Details**
 *
 * This function turns a `Cause<Option<E>>` into an `Option<Cause<E>>`. If the
 * cause only contains failures of `None`, it becomes `None`; otherwise, it
 * returns a `Cause` of the remaining errors. It's helpful when working with
 * optional errors and filtering out certain error paths.
 *
 * @since 2.0.0
 * @category Getters
 */
const flipCauseOption = exports.flipCauseOption = internal.flipCauseOption;
/**
 * Retrieves the first `Die` defect in a `Cause`, if present.
 *
 * **Details**
 *
 * This function returns an `Option` containing the first unexpected failure
 * (`Die`) discovered. It's helpful for diagnosing the primary defect in a chain
 * of errors.
 *
 * @since 2.0.0
 * @category Getters
 */
const dieOption = exports.dieOption = internal.dieOption;
/**
 * Retrieves the first `Interrupt` in a `Cause`, if present.
 *
 * **Details**
 *
 * This function returns an `Option` with the first fiber interruption
 * discovered. This is particularly useful for concurrency analysis or debugging
 * cancellations.
 *
 * @since 2.0.0
 * @category Getters
 */
const interruptOption = exports.interruptOption = internal.interruptOption;
/**
 * Removes all `Fail` and `Interrupt` nodes, keeping only defects (`Die`) in a
 * `Cause`.
 *
 * **Details**
 *
 * This function strips a cause of recoverable errors and interruptions, leaving
 * only unexpected failures. If no defects remain, it returns `None`. It's
 * valuable for focusing only on unanticipated problems when both known errors
 * and defects could occur.
 *
 * @since 2.0.0
 * @category Getters
 */
const keepDefects = exports.keepDefects = internal.keepDefects;
// TODO(4.0): remove? what's the point of this API?
/**
 * Linearizes a `Cause` into a set of parallel causes, each containing a
 * sequential chain of failures.
 *
 * **Details**
 *
 * This function reorganizes the cause structure so that you can analyze each
 * parallel branch separately, even if they have multiple sequential errors.
 *
 * @since 2.0.0
 * @category Getters
 */
const linearize = exports.linearize = internal.linearize;
/**
 * Removes `Fail` and `Interrupt` nodes from a `Cause`, keeping only defects
 * (`Die`).
 *
 * **Details**
 *
 * This function is similar to `keepDefects` but returns a `Cause<never>`
 * directly, which can still store `Die` or finalizer-related defects. It's
 * helpful for analyzing only the irrecoverable portion of the error.
 *
 * @since 2.0.0
 * @category Getters
 */
const stripFailures = exports.stripFailures = internal.stripFailures;
/**
 * Removes matching defects from a `Cause` using a partial function, returning
 * the remainder.
 *
 * **Details**
 *
 * This function applies a user-defined extraction function to each defect
 * (`Die`). If the function matches the defect, that defect is removed. If all
 * defects match, the result is `None`. Otherwise, you get a `Cause` with the
 * unmatched defects.
 *
 * @since 2.0.0
 * @category Getters
 */
const stripSomeDefects = exports.stripSomeDefects = internal.stripSomeDefects;
/**
 * Replaces any errors in a `Cause` with a provided constant error.
 *
 * **Details**
 *
 * This function transforms all `Fail` errors into the specified error value,
 * preserving the structure of the `Cause`. It's useful when you no longer need
 * the original error details but still want to keep the cause shape.
 *
 * @see {@link map} Apply a custom transformation to `Fail` errors
 *
 * @since 2.0.0
 * @category Mapping
 */
const as = exports.as = internal.as;
/**
 * Transforms the errors in a `Cause` using a user-provided function.
 *
 * **Details**
 *
 * This function applies `f` to each `Fail` error while leaving defects (`Die`)
 * and interruptions untouched. It's useful for changing or simplifying error
 * types in your effectful workflows.
 *
 * @see {@link as} Replace errors with a single constant
 *
 * @since 2.0.0
 * @category Mapping
 */
const map = exports.map = internal.map;
/**
 * Transforms errors in a `Cause` into new causes.
 *
 * **Details**
 *
 * This function applies a function `f` to each `Fail` error, converting it into
 * a new `Cause`. This is especially powerful for merging or restructuring error
 * types while preserving or combining cause information.
 *
 * @see {@link map} Apply a simpler transformation to errors
 *
 * @since 2.0.0
 * @category Sequencing
 */
const flatMap = exports.flatMap = internal.flatMap;
/**
 * Sequences two `Cause`s. The second `Cause` can be dependent on the result of
 * the first `Cause`.
 *
 * @since 2.0.0
 * @category Sequencing
 */
const andThen = exports.andThen = internal.andThen;
/**
 * Flattens a nested `Cause` structure.
 *
 * **Details**
 *
 * This function takes a `Cause<Cause<E>>` and merges the layers into a single
 * `Cause<E>`. It's useful for eliminating additional nesting created by
 * repeated transformations or compositions.
 *
 * @see {@link flatMap} Compose nested causes
 *
 * @since 2.0.0
 * @category Sequencing
 */
const flatten = exports.flatten = internal.flatten;
/**
 * Checks if the current `Cause` contains or is equal to another `Cause`.
 *
 * **Details**
 *
 * This function returns `true` if `that` cause is part of or the same as
 * the current `Cause`. It's useful when you need to check for specific
 * error patterns or deduplicate repeated failures.
 *
 * @since 2.0.0
 * @category Elements
 */
const contains = exports.contains = internal.contains;
/**
 * Extracts the most "important" defect from a `Cause`.
 *
 * **Details**
 *
 * This function reduces a `Cause` to a single, prioritized defect. It evaluates
 * the `Cause` in the following order of priority:
 *
 * 1. If the `Cause` contains a failure (e.g., from `Effect.fail`), it returns
 *    the raw error value.
 * 2. If there is no failure, it looks for the first defect (e.g., from
 *    `Effect.die`).
 * 3. If neither of the above is present, and the `Cause` stems from an
 *    interruption, it creates and returns an `InterruptedException`.
 *
 * This function ensures you can always extract a meaningful representation of
 * the primary issue from a potentially complex `Cause` structure.
 *
 * **When to Use**
 *
 * Use this function when you need to extract the most relevant error or defect
 * from a `Cause`, especially in scenarios where multiple errors or defects may
 * be present. It's particularly useful for simplifying error reporting or
 * logging.
 *
 * @see {@link squashWith} Allows transforming failures into defects when squashing.
 *
 * @since 2.0.0
 * @category Destructors
 */
const squash = exports.squash = core.causeSquash;
/**
 * Extracts the most "important" defect from a `Cause`, transforming failures
 * into defects using a provided function.
 *
 * **Details**
 *
 * This function reduces a `Cause` to a single, prioritized defect, while
 * allowing you to transform recoverable failures into defects through a custom
 * function. It processes the `Cause` in the following order:
 *
 * 1. If the `Cause` contains a failure (e.g., from `Effect.fail`), it applies
 *    the provided function `f` to the error to transform it into a defect.
 * 2. If there is no failure, it looks for the first defect (e.g., from
 *    `Effect.die`) and returns it.
 * 3. If neither is present and the `Cause` stems from an interruption, it
 *    returns an `InterruptedException`.
 *
 * This function is particularly useful when you need custom handling or
 * transformation of errors while processing a `Cause`.
 *
 * @see {@link squash} Extracts the most "important" defect without transforming failures.
 *
 * @since 2.0.0
 * @category Destructors
 */
const squashWith = exports.squashWith = core.causeSquashWith;
/**
 * Searches a `Cause` using a partial function to extract information.
 *
 * **Details**
 *
 * This function allows you to search through a `Cause` using a custom partial
 * function. The partial function is applied to the `Cause`, and if it matches,
 * the result is returned wrapped in a `Some`. If no match is found, the result
 * is `None`.
 *
 * This is particularly useful when you are only interested in specific types of
 * errors, defects, or interruption causes within a potentially complex `Cause`
 * structure. By leveraging a partial function, you can focus on extracting only
 * the relevant information you care about.
 *
 * The partial function should return an `Option` indicating whether it matched
 * and the value it extracted.
 *
 * @since 2.0.0
 * @category Elements
 */
const find = exports.find = internal.find;
/**
 * Preserves parts of a `Cause` that match a given predicate.
 *
 * **Details**
 *
 * This function allows you to retain only the parts of a `Cause` structure that
 * match a specified predicate or refinement. Any parts of the `Cause` that do
 * not match the provided condition are excluded from the result.
 *
 * You can use this function in two ways:
 * - With a `Predicate`: A function that evaluates whether a `Cause` should be
 *   retained based on its value.
 * - With a `Refinement`: A more specific predicate that can refine the type of
 *   the `Cause`.
 *
 * This is useful when you need to extract specific types of errors, defects, or
 * interruptions from a `Cause` while discarding unrelated parts.
 *
 * @since 2.0.0
 * @category Filtering
 */
const filter = exports.filter = internal.filter;
/**
 * Transforms a `Cause` into a single value using custom handlers for each
 * possible case.
 *
 * **Details**
 *
 * This function processes a `Cause` by applying a set of custom handlers to
 * each possible type of cause: `Empty`, `Fail`, `Die`, `Interrupt`,
 * `Sequential`, and `Parallel`. The result of this function is a single value
 * of type `Z`. This function allows you to define exactly how to handle each
 * part of a `Cause`, whether it's a failure, defect, interruption, or a
 * combination of these.
 *
 * The options parameter provides handlers for:
 * - `onEmpty`: Handles the case where the cause is `Empty`, meaning no errors
 *   occurred.
 * - `onFail`: Processes a failure with an error of type `E`.
 * - `onDie`: Processes a defect (unexpected error).
 * - `onInterrupt`: Handles a fiber interruption, providing the `FiberId` of the
 *   interruption.
 * - `onSequential`: Combines two sequential causes into a single value of type
 *   `Z`.
 * - `onParallel`: Combines two parallel causes into a single value of type `Z`.
 *
 * @since 2.0.0
 * @category Matching
 */
const match = exports.match = internal.match;
/**
 * Combines all parts of a `Cause` into a single value by starting with an
 * initial value.
 *
 * **Details**
 *
 * This function processes a `Cause` by starting with an initial value (`zero`)
 * and applying a custom function (`pf`) to combine all elements of the `Cause`
 * into a single result of type `Z`. The custom function determines how each
 * part of the `Cause` contributes to the final result. The function can return
 * an `Option` to either continue combining values or skip specific parts of the
 * `Cause`.
 *
 * This function is useful for tasks such as:
 * - Aggregating error messages from a `Cause` into a single string.
 * - Summarizing the structure of a `Cause` into a simplified result.
 * - Filtering or processing only specific parts of a `Cause`.
 *
 * The reduction proceeds in a top-down manner, visiting all nodes in the
 * `Cause` structure. This gives you complete control over how each part of the
 * `Cause` contributes to the final result.
 *
 * @since 2.0.0
 * @category Reducing
 */
const reduce = exports.reduce = internal.reduce;
/**
 * Combines all parts of a `Cause` into a single value using a custom reducer
 * and a context.
 *
 * **Details**
 *
 * This function allows you to reduce a `Cause` into a single value of type `Z`
 * using a custom `CauseReducer`. A `CauseReducer` provides methods to handle
 * specific parts of the `Cause`, such as failures, defects, or interruptions.
 * Additionally, this function provides access to a `context` value, which can
 * be used to carry information or maintain state during the reduction process.
 *
 * This is particularly useful when the reduction process needs additional
 * context or configuration, such as:
 * - Aggregating error details with dynamic formatting.
 * - Collecting logs or statistics about the `Cause`.
 * - Performing stateful transformations based on the `context`.
 *
 * @see {@link reduce} To reduce a `Cause` without additional context.
 *
 * @since 2.0.0
 * @category Reducing
 */
const reduceWithContext = exports.reduceWithContext = internal.reduceWithContext;
/**
 * Creates an error that indicates a `Fiber` was interrupted.
 *
 * **Details**
 *
 * This function constructs an `InterruptedException` recognized by the Effect
 * runtime. It is usually thrown or returned when a fiber's execution is
 * interrupted by external events or by another fiber. This is particularly
 * helpful in concurrent programs where fibers may halt each other before
 * completion.
 *
 * @since 2.0.0
 * @category Errors
 */
const InterruptedException = exports.InterruptedException = core.InterruptedException;
/**
 * Checks if a given unknown value is an `InterruptedException`.
 *
 * @since 2.0.0
 * @category Guards
 */
const isInterruptedException = exports.isInterruptedException = core.isInterruptedException;
/**
 * Creates an error indicating an invalid method argument.
 *
 * **Details**
 *
 * This function constructs an `IllegalArgumentException`. It is typically
 * thrown or returned when an operation receives improper inputs, such as
 * out-of-range values or invalid object states.
 *
 * @since 2.0.0
 * @category Errors
 */
const IllegalArgumentException = exports.IllegalArgumentException = core.IllegalArgumentException;
/**
 * Checks if a given unknown value is an `IllegalArgumentException`.
 *
 * @since 2.0.0
 * @category Guards
 */
const isIllegalArgumentException = exports.isIllegalArgumentException = core.isIllegalArgumentException;
/**
 * Creates an error indicating a missing element.
 *
 * **Details**
 *
 * This function constructs a `NoSuchElementException`. It helps you clearly
 * communicate that a required element is unavailable.
 *
 * @since 2.0.0
 * @category Errors
 */
const NoSuchElementException = exports.NoSuchElementException = core.NoSuchElementException;
/**
 * Checks if a given unknown value is a `NoSuchElementException`.
 *
 * @since 2.0.0
 * @category Guards
 */
const isNoSuchElementException = exports.isNoSuchElementException = core.isNoSuchElementException;
/**
 * Creates an error for general runtime errors.
 *
 * **Details**
 *
 * This function constructs a `RuntimeException`, for errors that occur at
 * runtime but are not specifically typed or categorized as interruptions,
 * missing elements, or invalid arguments. It helps unify a wide range of
 * unexpected conditions under a single, recognizable error type.
 *
 * @since 2.0.0
 * @category Errors
 */
const RuntimeException = exports.RuntimeException = core.RuntimeException;
/**
 * Checks if a given unknown value is a `RuntimeException`.
 *
 * @since 2.0.0
 * @category Guards
 */
const isRuntimeException = exports.isRuntimeException = core.isRuntimeException;
/**
 * Creates an error for operations that exceed their expected time.
 *
 * **Details**
 *
 * This function constructs a `TimeoutException`. It is typically used to signal
 * that an operation or fiber did not complete within a designated time limit,
 * allowing you to handle slow or hanging processes.
 *
 * @since 2.0.0
 * @category Errors
 */
const TimeoutException = exports.TimeoutException = core.TimeoutException;
/**
 * Checks if a given unknown value is a `TimeoutException`.
 *
 * @since 3.15.0
 * @category Guards
 */
const isTimeoutException = exports.isTimeoutException = core.isTimeoutException;
/**
 * Creates an instance of `UnknownException`, an error object used to handle
 * unknown errors such as those from rejected promises.
 *
 * **Details**
 *
 * This function constructs an `UnknownException` with flexible behavior for
 * managing the error message and cause.
 *
 * The required `error` argument is passed as the `cause` to the global `Error`
 * constructor, ensuring that the original cause is preserved in the error chain
 * for debugging purposes. This ensures that the origin stack trace is
 * preserved.
 *
 * The `error` argument is always stored in the `error` property of the
 * `UnknownException` instance for reference, regardless of its type.
 *
 * Additionally, if you provide a `message` argument, it is used as the error
 * message. If no `message` is provided, the error message defaults to `"An
 * unknown error occurred"`.
 *
 * **When to Use**
 *
 * Use this function when you need to handle unexpected or unknown errors in
 * your application, particularly when the source of the error might not provide
 * a clear message. This is useful for wrapping generic errors thrown from
 * promises or external APIs.
 *
 * @since 2.0.0
 * @category Errors
 */
const UnknownException = exports.UnknownException = core.UnknownException;
/**
 * Checks if a given unknown value is an `UnknownException`.
 *
 * @since 2.0.0
 * @category Guards
 */
const isUnknownException = exports.isUnknownException = core.isUnknownException;
/**
 * Creates an error indicating resource capacity has been exceeded.
 *
 * **Details**
 *
 * This function constructs an `ExceededCapacityException`, signifying that an
 * operation or resource usage surpassed established limits. This can be
 * essential for concurrency or resource management situations, ensuring your
 * application doesn't go beyond acceptable thresholds.
 *
 * @since 3.5.0
 * @category Errors
 */
const ExceededCapacityException = exports.ExceededCapacityException = core.ExceededCapacityException;
/**
 * Checks if a given unknown value is an `ExceededCapacityException`.
 *
 * @since 3.5.0
 * @category Guards
 */
const isExceededCapacityException = exports.isExceededCapacityException = core.isExceededCapacityException;
/**
 * Converts a `Cause` into a human-readable string.
 *
 * **Details**
 *
 * This function pretty-prints the entire `Cause`, including any failures,
 * defects, and interruptions. It can be especially helpful for logging,
 * debugging, or displaying structured errors to users.
 *
 * You can optionally pass `options` to configure how the error cause is
 * rendered. By default, it includes essential details of all errors in the
 * `Cause`.
 *
 * @see {@link prettyErrors} Get a list of `PrettyError` objects instead of a single string.
 *
 * @since 2.0.0
 * @category Formatting
 */
const pretty = exports.pretty = internal.pretty;
/**
 * Returns a list of prettified errors (`PrettyError`) from a `Cause`.
 *
 * **Details**
 *
 * This function inspects the entire `Cause` and produces an array of
 * `PrettyError` objects. Each object may include additional metadata, such as a
 * `Span`, to provide deeper insights into where and how the error occurred.
 *
 * @since 3.2.0
 * @category Formatting
 */
const prettyErrors = exports.prettyErrors = internal.prettyErrors;
/**
 * Retrieves the original, unproxied error instance from an error object.
 *
 * **Details**
 *
 * This function returns the underlying error object without any
 * library-specific wrapping or proxying that might occur during error handling.
 * This can be essential if you need direct access to the error's native
 * properties, such as stack traces or custom data fields, for detailed
 * debugging or integration with external systems.
 *
 * @since 2.0.0
 * @category Errors
 */
const originalError = exports.originalError = core.originalInstance;
//# sourceMappingURL=Cause.js.map