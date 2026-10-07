/**
 * @since 2.0.0
 */
import * as internal from "./internal/groupBy.js"
import type { Pipeable } from "./Pipeable.js"
import type { Predicate } from "./Predicate.js"
import type * as Queue from "./Queue.js"
import type * as Stream from "./Stream.js"
import type * as Take from "./Take.js"
import type { Covariant, NoInfer } from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const GroupByTypeId: unique symbol = internal.GroupByTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type GroupByTypeId = typeof GroupByTypeId

/**
 * Representation of a grouped stream. This allows to filter which groups will
 * be processed. Once this is applied all groups will be processed in parallel
 * and the results will be merged in arbitrary order.
 *
 * @since 2.0.0
 * @category models
 */
export interface GroupBy<out K, out V, out E = never, out R = never> extends GroupBy.Variance<K, V, E, R>, Pipeable {
  readonly grouped: Stream.Stream<readonly [K, Queue.Dequeue<Take.Take<V, E>>], E, R>
}

/**
 * @since 2.0.0
 */
export declare namespace GroupBy {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out K, out V, out E, out R> {
    readonly [GroupByTypeId]: {
      readonly _K: Covariant<K>
      readonly _V: Covariant<V>
      readonly _E: Covariant<E>
      readonly _R: Covariant<R>
    }
  }
}

/**
 * Run the function across all groups, collecting the results in an
 * arbitrary order.
 *
 * @since 2.0.0
 * @category destructors
 */
export const evaluate: {
  /**
   * Run the function across all groups, collecting the results in an
   * arbitrary order.
   *
   * @since 2.0.0
   * @category destructors
   */
  <K, V, E, A, E2, R2>(
   f: (key: K, stream: Stream.Stream<V, E, never>) => Stream.Stream<A, E2, R2>,
   options?: { readonly bufferSize?: number | undefined } | undefined
  ): <R>(self: GroupBy<K, V, E, R>) => Stream.Stream<A, E | E2, R2 | R>
  /**
   * Run the function across all groups, collecting the results in an
   * arbitrary order.
   *
   * @since 2.0.0
   * @category destructors
   */
  <K, V, E, R, A, E2, R2>(
   self: GroupBy<K, V, E, R>,
   f: (key: K, stream: Stream.Stream<V, E, never>) => Stream.Stream<A, E2, R2>,
   options?: { readonly bufferSize?: number | undefined } | undefined
  ): Stream.Stream<A, E | E2, R | R2>
} = internal.evaluate

/**
 * Filter the groups to be processed.
 *
 * @since 2.0.0
 * @category utils
 */
export const filter: {
  /**
   * Filter the groups to be processed.
   *
   * @since 2.0.0
   * @category utils
   */
  <K>(predicate: Predicate<NoInfer<K>>): <V, E, R>(self: GroupBy<K, V, E, R>) => GroupBy<K, V, E, R>
  /**
   * Filter the groups to be processed.
   *
   * @since 2.0.0
   * @category utils
   */
  <K, V, E, R>(self: GroupBy<K, V, E, R>, predicate: Predicate<K>): GroupBy<K, V, E, R>
} = internal.filter

/**
 * Only consider the first `n` groups found in the `Stream`.
 *
 * @since 2.0.0
 * @category utils
 */
export const first: {
  /**
   * Only consider the first `n` groups found in the `Stream`.
   *
   * @since 2.0.0
   * @category utils
   */
  (n: number): <K, V, E, R>(self: GroupBy<K, V, E, R>) => GroupBy<K, V, E, R>
  /**
   * Only consider the first `n` groups found in the `Stream`.
   *
   * @since 2.0.0
   * @category utils
   */
  <K, V, E, R>(self: GroupBy<K, V, E, R>, n: number): GroupBy<K, V, E, R>
} = internal.first

/**
 * Constructs a `GroupBy` from a `Stream`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <K, V, E, R>(
  grouped: Stream.Stream<readonly [K, Queue.Dequeue<Take.Take<V, E>>], E, R>
) => GroupBy<K, V, E, R> = internal.make
