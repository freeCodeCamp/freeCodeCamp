/**
 * The `Effect<A, E, R>` type is polymorphic in values of type `E` and we can
 * work with any error type that we want. However, there is a lot of information
 * that is not inside an arbitrary `E` value. So as a result, an `Effect` needs
 * somewhere to store things like unexpected errors or defects, stack and
 * execution traces, causes of fiber interruptions, and so forth.
 *
 * Effect-TS is very strict about preserving the full information related to a
 * failure. It captures all type of errors into the `Cause` data type. `Effect`
 * uses the `Cause<E>` data type to store the full story of failure. So its
 * error model is lossless. It doesn't throw information related to the failure
 * result. So we can figure out exactly what happened during the operation of
 * our effects.
 *
 * It is important to note that `Cause` is an underlying data type representing
 * errors occuring within an `Effect` workflow. Thus, we don't usually deal with
 * `Cause`s directly. Even though it is not a data type that we deal with very
 * often, the `Cause` of a failing `Effect` workflow can be accessed at any
 * time, which gives us total access to all parallel and sequential errors in
 * occurring within our codebase.
 *
 * @since 2.0.0
 */
import type * as Channel from "./Channel.js"
import type * as Chunk from "./Chunk.js"
import type * as Effect from "./Effect.js"
import type * as Either from "./Either.js"
import type * as Equal from "./Equal.js"
import type * as FiberId from "./FiberId.js"
import type * as HashSet from "./HashSet.js"
import type { Inspectable } from "./Inspectable.js"
import * as internal from "./internal/cause.js"
import * as core from "./internal/core.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type { Predicate, Refinement } from "./Predicate.js"
import type * as Sink from "./Sink.js"
import type * as Stream from "./Stream.js"
import type { Span } from "./Tracer.js"
import type { Covariant, NoInfer } from "./Types.js"

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
export const CauseTypeId: unique symbol = internal.CauseTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type CauseTypeId = typeof CauseTypeId

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
export const RuntimeExceptionTypeId: unique symbol = core.RuntimeExceptionTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type RuntimeExceptionTypeId = typeof RuntimeExceptionTypeId

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
export const InterruptedExceptionTypeId: unique symbol = core.InterruptedExceptionTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type InterruptedExceptionTypeId = typeof InterruptedExceptionTypeId

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
export const IllegalArgumentExceptionTypeId: unique symbol = core.IllegalArgumentExceptionTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type IllegalArgumentExceptionTypeId = typeof IllegalArgumentExceptionTypeId

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
export const NoSuchElementExceptionTypeId: unique symbol = core.NoSuchElementExceptionTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type NoSuchElementExceptionTypeId = typeof NoSuchElementExceptionTypeId

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
export const InvalidPubSubCapacityExceptionTypeId: unique symbol = core.InvalidPubSubCapacityExceptionTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type InvalidPubSubCapacityExceptionTypeId = typeof InvalidPubSubCapacityExceptionTypeId

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
export const ExceededCapacityExceptionTypeId: unique symbol = core.ExceededCapacityExceptionTypeId

/**
 * @since 3.5.0
 * @category Symbols
 */
export type ExceededCapacityExceptionTypeId = typeof ExceededCapacityExceptionTypeId

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
export const TimeoutExceptionTypeId: unique symbol = core.TimeoutExceptionTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type TimeoutExceptionTypeId = typeof TimeoutExceptionTypeId

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
export const UnknownExceptionTypeId: unique symbol = core.UnknownExceptionTypeId

/**
 * @since 2.0.0
 * @category Symbols
 */
export type UnknownExceptionTypeId = typeof UnknownExceptionTypeId

/**
 * Represents the full history of a failure within an `Effect`.
 *
 * **Details**
 *
 * This type is a data structure that captures all information about why and how
 * an effect has failed, including parallel errors, sequential errors, defects,
 * and interruptions. It enables a "lossless" error model: no error-related
 * information is discarded, which helps in debugging and understanding the root
 * cause of failures.
 *
 * @since 2.0.0
 * @category Models
 */
export type Cause<E> =
  | Empty
  | Fail<E>
  | Die
  | Interrupt
  | Sequential<E>
  | Parallel<E>

/**
 * @since 2.0.0
 */
export declare namespace Cause {
  /**
   * This interface is used internally to manage the type variance of `Cause`.
   *
   * @since 2.0.0
   * @category Models
   */
  export interface Variance<out E> {
    readonly [CauseTypeId]: {
      readonly _E: Covariant<E>
    }
  }
}

/**
 * Describes methods for reducing a `Cause<E>` into a value of type `Z` with
 * access to contextual information.
 *
 * **Details**
 *
 * This interface is meant for advanced transformations of `Cause`. By
 * implementing each method, you can define how different parts of the `Cause`
 * structure (like `Fail`, `Die`, or `Interrupt`) should be transformed into a
 * final type `Z`. The `context` parameter carries additional data needed during
 * this reduction.
 *
 * @see {@link reduceWithContext} Apply a `CauseReducer` to transform a `Cause`
 *
 * @since 2.0.0
 * @category Models
 */
export interface CauseReducer<in C, in E, in out Z> {
  emptyCase(context: C): Z
  failCase(context: C, error: E): Z
  dieCase(context: C, defect: unknown): Z
  interruptCase(context: C, fiberId: FiberId.FiberId): Z
  sequentialCase(context: C, left: Z, right: Z): Z
  parallelCase(context: C, left: Z, right: Z): Z
}

/**
 * Represents an error object that can be yielded in `Effect.gen`.
 *
 * @since 2.0.0
 * @category Models
 */
export interface YieldableError extends Pipeable, Inspectable, Error {
  readonly [Effect.EffectTypeId]: Effect.Effect.VarianceStruct<never, this, never>
  readonly [Stream.StreamTypeId]: Stream.Stream.VarianceStruct<never, this, never>
  readonly [Sink.SinkTypeId]: Sink.Sink.VarianceStruct<never, unknown, never, this, never>
  readonly [Channel.ChannelTypeId]: Channel.Channel.VarianceStruct<never, unknown, this, unknown, never, unknown, never>
  [Symbol.iterator](): Effect.EffectGenerator<Effect.Effect<never, this, never>>
}

/**
 * Creates an error that occurs at runtime, extendable for other exception
 * types.
 *
 * @since 2.0.0
 * @category Errors
 */
export const YieldableError: new(message?: string | undefined) => YieldableError = core.YieldableError

/**
 * An error representing a runtime error.
 *
 * **Details**
 *
 * This interface is used for errors that occur at runtime but are still
 * considered recoverable or typed.
 *
 * @since 2.0.0
 * @category Models
 */
export interface RuntimeException extends YieldableError {
  readonly _tag: "RuntimeException"
  readonly [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}

/**
 * An error representing fiber interruption.
 *
 * **Details**
 *
 * This interface represents errors that occur when a fiber is forcefully
 * interrupted. Interruption can happen for various reasons, including
 * cancellations or system directives to halt operations. Code that deals with
 * concurrency might need to catch or handle these to ensure proper cleanup.
 *
 * @since 2.0.0
 * @category Models
 */
export interface InterruptedException extends YieldableError {
  readonly _tag: "InterruptedException"
  readonly [InterruptedExceptionTypeId]: InterruptedExceptionTypeId
}

/**
 * An error representing an invalid argument passed to a method.
 *
 * **Details**
 *
 * This interface is used for signaling that a function or method received an
 * argument that does not meet its preconditions.
 *
 * @since 2.0.0
 * @category Models
 */
export interface IllegalArgumentException extends YieldableError {
  readonly _tag: "IllegalArgumentException"
  readonly [IllegalArgumentExceptionTypeId]: IllegalArgumentExceptionTypeId
}

/**
 * An error that occurs when an expected element is missing.
 *
 * **Details**
 *
 * This interface indicates scenarios like looking up an item in a collection
 * or searching for data that should be present but isn't. It helps your code
 * signal a more specific issue rather than a general error.
 *
 * @since 2.0.0
 * @category Models
 */
export interface NoSuchElementException extends YieldableError {
  readonly _tag: "NoSuchElementException"
  readonly [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}

/**
 * An error indicating invalid capacity for a `PubSub`.
 *
 * @since 2.0.0
 * @category Models
 */
export interface InvalidPubSubCapacityException extends YieldableError {
  readonly _tag: "InvalidPubSubCapacityException"
  readonly [InvalidPubSubCapacityExceptionTypeId]: InvalidPubSubCapacityExceptionTypeId
}

/**
 * An error that occurs when resource capacity is exceeded.
 *
 * @since 3.5.0
 * @category Models
 */
export interface ExceededCapacityException extends YieldableError {
  readonly _tag: "ExceededCapacityException"
  readonly [ExceededCapacityExceptionTypeId]: ExceededCapacityExceptionTypeId
}

/**
 * An error representing a computation that timed out.
 *
 * @since 2.0.0
 * @category Models
 */
export interface TimeoutException extends YieldableError {
  readonly _tag: "TimeoutException"
  readonly [TimeoutExceptionTypeId]: TimeoutExceptionTypeId
}

/**
 * A checked exception for handling unknown or unexpected errors.
 *
 * **Details**
 *
 * This interface captures errors that don't fall under known categories. It is
 * especially helpful for wrapping low-level or third-party library errors that
 * might provide little or no context, such as from a rejected promise.
 *
 * @since 2.0.0
 * @category Models
 */
export interface UnknownException extends YieldableError {
  readonly _tag: "UnknownException"
  readonly [UnknownExceptionTypeId]: UnknownExceptionTypeId
  readonly error: unknown
}

/**
 * Represents a lack of errors within a `Cause`.
 *
 * @see {@link empty} Construct a new `Empty` cause
 * @see {@link isEmptyType} Check if a `Cause` is an `Empty` type
 *
 * @since 2.0.0
 * @category Models
 */
export interface Empty extends Cause.Variance<never>, Equal.Equal, Pipeable, Inspectable {
  readonly _tag: "Empty"
}

/**
 * Represents an expected error within a `Cause`.
 *
 * **Details**
 *
 * This interface models a `Cause` that carries an expected or known error of
 * type `E`. For example, if you validate user input and find it invalid, you
 * might store that error within a `Fail`.
 *
 * @see {@link fail} Construct a `Fail` cause
 * @see {@link isFailType} Check if a `Cause` is a `Fail`
 *
 * @since 2.0.0
 * @category Models
 */
export interface Fail<out E> extends Cause.Variance<E>, Equal.Equal, Pipeable, Inspectable {
  readonly _tag: "Fail"
  readonly error: E
}

/**
 * Represents an unexpected defect within a `Cause`.
 *
 * **Details**
 *
 * This interface models a `Cause` for errors that are typically unrecoverable or
 * unanticipated—like runtime exceptions or bugs. When code "dies," it indicates a
 * severe failure that wasn't accounted for.
 *
 * @see {@link die} Construct a `Die` cause
 * @see {@link isDieType} Check if a `Cause` is a `Die`
 *
 * @since 2.0.0
 * @category Models
 */
export interface Die extends Cause.Variance<never>, Equal.Equal, Pipeable, Inspectable {
  readonly _tag: "Die"
  readonly defect: unknown
}

/**
 * Represents fiber interruption within a `Cause`.
 *
 * **Details**
 *
 * This interface models a scenario where an effect was halted by an external
 * signal, carrying a `FiberId` that identifies which fiber was interrupted.
 * Interruption is a normal part of concurrency, used for cancellation or
 * resource cleanup.
 *
 * @see {@link interrupt} Construct an `Interrupt` cause
 * @see {@link isInterruptType} Check if a `Cause` is an `Interrupt`
 *
 * @since 2.0.0
 * @category Models
 */
export interface Interrupt extends Cause.Variance<never>, Equal.Equal, Pipeable, Inspectable {
  readonly _tag: "Interrupt"
  readonly fiberId: FiberId.FiberId
}

/**
 * Represents parallel composition of two `Cause`s.
 *
 * **Details**
 *
 * This interface captures failures that happen simultaneously. In scenarios
 * with concurrency, more than one operation can fail in parallel. Instead of
 * losing information, this structure stores both errors together.
 *
 * @see {@link parallel} Combine two `Cause`s in parallel
 * @see {@link isParallelType} Check if a `Cause` is a `Parallel`
 *
 * @since 2.0.0
 * @category Models
 */
export interface Parallel<out E> extends Cause.Variance<E>, Equal.Equal, Pipeable, Inspectable {
  readonly _tag: "Parallel"
  readonly left: Cause<E>
  readonly right: Cause<E>
}

/**
 * Represents sequential composition of two `Cause`s.
 *
 * **Details**
 *
 * This interface models the scenario where one error follows another in
 * sequence, such as when a main effect fails and then a finalizer also fails.
 * It ensures both errors are retained in the final `Cause`.
 *
 * @see {@link sequential} Combine two `Cause`s sequentially
 * @see {@link isSequentialType} Check if a `Cause` is a `Sequential`
 *
 * @since 2.0.0
 * @category Models
 */
export interface Sequential<out E> extends Cause.Variance<E>, Equal.Equal, Pipeable, Inspectable {
  readonly _tag: "Sequential"
  readonly left: Cause<E>
  readonly right: Cause<E>
}

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
export const empty: Cause<never> = internal.empty

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
export const fail: <E>(error: E) => Cause<E> = internal.fail

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
export const die: (defect: unknown) => Cause<never> = internal.die

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
export const interrupt: (fiberId: FiberId.FiberId) => Cause<never> = internal.interrupt

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
export const parallel: <E, E2>(left: Cause<E>, right: Cause<E2>) => Cause<E | E2> = internal.parallel

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
export const sequential: <E, E2>(left: Cause<E>, right: Cause<E2>) => Cause<E | E2> = internal.sequential

/**
 * Checks if a value is a `Cause`.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isCause: (u: unknown) => u is Cause<unknown> = internal.isCause

/**
 * Checks if a `Cause` is an `Empty` type.
 *
 * @see {@link empty} Create a new `Empty` cause
 *
 * @since 2.0.0
 * @category Guards
 */
export const isEmptyType: <E>(self: Cause<E>) => self is Empty = internal.isEmptyType

/**
 * Checks if a `Cause` is a `Fail` type.
 *
 * @see {@link fail} Create a new `Fail` cause
 *
 * @since 2.0.0
 * @category Guards
 */
export const isFailType: <E>(self: Cause<E>) => self is Fail<E> = internal.isFailType

/**
 * Checks if a `Cause` is a `Die` type.
 *
 * @see {@link die} Create a new `Die` cause
 *
 * @since 2.0.0
 * @category Guards
 */
export const isDieType: <E>(self: Cause<E>) => self is Die = internal.isDieType

/**
 * Checks if a `Cause` is an `Interrupt` type.
 *
 * @see {@link interrupt} Create an `Interrupt` cause
 *
 * @since 2.0.0
 * @category Guards
 */
export const isInterruptType: <E>(self: Cause<E>) => self is Interrupt = internal.isInterruptType

/**
 * Checks if a `Cause` is a `Sequential` type.
 *
 * @see {@link sequential} Combine two `Cause`s sequentially
 *
 * @since 2.0.0
 * @category Guards
 */
export const isSequentialType: <E>(self: Cause<E>) => self is Sequential<E> = internal.isSequentialType

/**
 * Checks if a `Cause` is a `Parallel` type.
 *
 * @see {@link parallel} Combine two `Cause`s in parallel
 *
 * @since 2.0.0
 * @category Guards
 */
export const isParallelType: <E>(self: Cause<E>) => self is Parallel<E> = internal.isParallelType

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
export const size: <E>(self: Cause<E>) => number = internal.size

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
export const isEmpty: <E>(self: Cause<E>) => boolean = internal.isEmpty

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
export const isFailure: <E>(self: Cause<E>) => boolean = internal.isFailure

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
export const isDie: <E>(self: Cause<E>) => boolean = internal.isDie

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
export const isInterrupted: <E>(self: Cause<E>) => boolean = internal.isInterrupted

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
export const isInterruptedOnly: <E>(self: Cause<E>) => boolean = internal.isInterruptedOnly

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
export const failures: <E>(self: Cause<E>) => Chunk.Chunk<E> = internal.failures

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
export const defects: <E>(self: Cause<E>) => Chunk.Chunk<unknown> = internal.defects

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
export const interruptors: <E>(self: Cause<E>) => HashSet.HashSet<FiberId.FiberId> = internal.interruptors

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
export const failureOption: <E>(self: Cause<E>) => Option.Option<E> = internal.failureOption

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
export const failureOrCause: <E>(self: Cause<E>) => Either.Either<Cause<never>, E> = internal.failureOrCause

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
export const flipCauseOption: <E>(self: Cause<Option.Option<E>>) => Option.Option<Cause<E>> = internal.flipCauseOption

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
export const dieOption: <E>(self: Cause<E>) => Option.Option<unknown> = internal.dieOption

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
export const interruptOption: <E>(self: Cause<E>) => Option.Option<FiberId.FiberId> = internal.interruptOption

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
export const keepDefects: <E>(self: Cause<E>) => Option.Option<Cause<never>> = internal.keepDefects

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
export const linearize: <E>(self: Cause<E>) => HashSet.HashSet<Cause<E>> = internal.linearize

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
export const stripFailures: <E>(self: Cause<E>) => Cause<never> = internal.stripFailures

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
export const stripSomeDefects: {
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
  (pf: (defect: unknown) => Option.Option<unknown>): <E>(self: Cause<E>) => Option.Option<Cause<E>>
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
  <E>(self: Cause<E>, pf: (defect: unknown) => Option.Option<unknown>): Option.Option<Cause<E>>
} = internal.stripSomeDefects

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
export const as: {
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
  <E2>(error: E2): <E>(self: Cause<E>) => Cause<E2>
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
  <E, E2>(self: Cause<E>, error: E2): Cause<E2>
} = internal.as

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
export const map: {
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
  <E, E2>(f: (e: E) => E2): (self: Cause<E>) => Cause<E2>
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
  <E, E2>(self: Cause<E>, f: (e: E) => E2): Cause<E2>
} = internal.map

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
export const flatMap: {
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
  <E, E2>(f: (e: E) => Cause<E2>): (self: Cause<E>) => Cause<E2>
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
  <E, E2>(self: Cause<E>, f: (e: E) => Cause<E2>): Cause<E2>
} = internal.flatMap

/**
 * Sequences two `Cause`s. The second `Cause` can be dependent on the result of
 * the first `Cause`.
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const andThen: {
  /**
   * Sequences two `Cause`s. The second `Cause` can be dependent on the result of
   * the first `Cause`.
   *
   * @since 2.0.0
   * @category Sequencing
   */
  <E, E2>(f: (e: E) => Cause<E2>): (self: Cause<E>) => Cause<E2>
  /**
   * Sequences two `Cause`s. The second `Cause` can be dependent on the result of
   * the first `Cause`.
   *
   * @since 2.0.0
   * @category Sequencing
   */
  <E2>(f: Cause<E2>): <E>(self: Cause<E>) => Cause<E2>
  /**
   * Sequences two `Cause`s. The second `Cause` can be dependent on the result of
   * the first `Cause`.
   *
   * @since 2.0.0
   * @category Sequencing
   */
  <E, E2>(self: Cause<E>, f: (e: E) => Cause<E2>): Cause<E2>
  /**
   * Sequences two `Cause`s. The second `Cause` can be dependent on the result of
   * the first `Cause`.
   *
   * @since 2.0.0
   * @category Sequencing
   */
  <E, E2>(self: Cause<E>, f: Cause<E2>): Cause<E2>
} = internal.andThen

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
export const flatten: <E>(self: Cause<Cause<E>>) => Cause<E> = internal.flatten

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
export const contains: {
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
  <E2>(that: Cause<E2>): <E>(self: Cause<E>) => boolean
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
  <E, E2>(self: Cause<E>, that: Cause<E2>): boolean
} = internal.contains

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
export const squash: <E>(self: Cause<E>) => unknown = core.causeSquash

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
export const squashWith: {
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
  <E>(f: (error: E) => unknown): (self: Cause<E>) => unknown
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
  <E>(self: Cause<E>, f: (error: E) => unknown): unknown
} = core.causeSquashWith

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
export const find: {
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
  <E, Z>(pf: (cause: Cause<E>) => Option.Option<Z>): (self: Cause<E>) => Option.Option<Z>
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
  <E, Z>(self: Cause<E>, pf: (cause: Cause<E>) => Option.Option<Z>): Option.Option<Z>
} = internal.find

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
export const filter: {
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
  <E, EB extends E>(refinement: Refinement<Cause<NoInfer<E>>, Cause<EB>>): (self: Cause<E>) => Cause<EB>
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
  <E>(predicate: Predicate<Cause<NoInfer<E>>>): (self: Cause<E>) => Cause<E>
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
  <E, EB extends E>(self: Cause<E>, refinement: Refinement<Cause<E>, Cause<EB>>): Cause<EB>
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
  <E>(self: Cause<E>, predicate: Predicate<Cause<E>>): Cause<E>
} = internal.filter

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
export const match: {
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
  <Z, E>(
   options: {
     readonly onEmpty: Z
     readonly onFail: (error: E) => Z
     readonly onDie: (defect: unknown) => Z
     readonly onInterrupt: (fiberId: FiberId.FiberId) => Z
     readonly onSequential: (left: Z, right: Z) => Z
     readonly onParallel: (left: Z, right: Z) => Z
   }
  ): (self: Cause<E>) => Z
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
  <Z, E>(
   self: Cause<E>,
   options: {
     readonly onEmpty: Z
     readonly onFail: (error: E) => Z
     readonly onDie: (defect: unknown) => Z
     readonly onInterrupt: (fiberId: FiberId.FiberId) => Z
     readonly onSequential: (left: Z, right: Z) => Z
     readonly onParallel: (left: Z, right: Z) => Z
   }
  ): Z
} = internal.match

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
export const reduce: {
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
  <Z, E>(zero: Z, pf: (accumulator: Z, cause: Cause<E>) => Option.Option<Z>): (self: Cause<E>) => Z
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
  <Z, E>(
   self: Cause<E>,
   zero: Z,
   pf: (accumulator: Z, cause: Cause<E>) => Option.Option<Z>
  ): Z
} = internal.reduce

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
export const reduceWithContext: {
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
  <C, E, Z>(context: C, reducer: CauseReducer<C, E, Z>): (self: Cause<E>) => Z
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
  <C, E, Z>(self: Cause<E>, context: C, reducer: CauseReducer<C, E, Z>): Z
} = internal.reduceWithContext

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
export const InterruptedException: new(message?: string | undefined) => InterruptedException = core.InterruptedException

/**
 * Checks if a given unknown value is an `InterruptedException`.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isInterruptedException: (u: unknown) => u is InterruptedException = core.isInterruptedException

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
export const IllegalArgumentException: new(message?: string | undefined) => IllegalArgumentException =
  core.IllegalArgumentException

/**
 * Checks if a given unknown value is an `IllegalArgumentException`.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isIllegalArgumentException: (u: unknown) => u is IllegalArgumentException = core.isIllegalArgumentException

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
export const NoSuchElementException: new(message?: string | undefined) => NoSuchElementException =
  core.NoSuchElementException

/**
 * Checks if a given unknown value is a `NoSuchElementException`.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isNoSuchElementException: (u: unknown) => u is NoSuchElementException = core.isNoSuchElementException

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
export const RuntimeException: new(message?: string | undefined) => RuntimeException = core.RuntimeException

/**
 * Checks if a given unknown value is a `RuntimeException`.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isRuntimeException: (u: unknown) => u is RuntimeException = core.isRuntimeException

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
export const TimeoutException: new(message?: string | undefined) => TimeoutException = core.TimeoutException

/**
 * Checks if a given unknown value is a `TimeoutException`.
 *
 * @since 3.15.0
 * @category Guards
 */
export const isTimeoutException: (u: unknown) => u is TimeoutException = core.isTimeoutException

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
export const UnknownException: new(error: unknown, message?: string | undefined) => UnknownException =
  core.UnknownException

/**
 * Checks if a given unknown value is an `UnknownException`.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isUnknownException: (u: unknown) => u is UnknownException = core.isUnknownException

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
export const ExceededCapacityException: new(message?: string | undefined) => ExceededCapacityException =
  core.ExceededCapacityException

/**
 * Checks if a given unknown value is an `ExceededCapacityException`.
 *
 * @since 3.5.0
 * @category Guards
 */
export const isExceededCapacityException: (u: unknown) => u is ExceededCapacityException =
  core.isExceededCapacityException

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
export const pretty: <E>(cause: Cause<E>, options?: {
  readonly renderErrorCause?: boolean | undefined
}) => string = internal.pretty

/**
 * A shape for prettified errors, optionally including a source span.
 *
 * @since 3.2.0
 * @category Models
 */
export interface PrettyError extends Error {
  readonly span: Span | undefined
}

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
export const prettyErrors: <E>(cause: Cause<E>) => Array<PrettyError> = internal.prettyErrors

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
export const originalError: <E>(obj: E) => E = core.originalInstance
