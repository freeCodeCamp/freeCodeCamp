/**
 * @since 2.0.0
 */

/**
 * @category symbol
 * @since 2.0.0
 */
export declare const nonEmpty: unique symbol

/**
 * @category model
 * @since 2.0.0
 */
export interface NonEmptyIterable<out A> extends Iterable<A> {
  readonly [nonEmpty]: A
}

/**
 * @category getters
 * @since 2.0.0
 */
export const unprepend = <A>(self: NonEmptyIterable<A>): [firstElement: A, remainingElements: Iterator<A>] => {
  const iterator = self[Symbol.iterator]()
  const next = iterator.next()
  if (next.done) {
    throw new Error(
      "BUG: NonEmptyIterator should not be empty - please report an issue at https://github.com/Effect-TS/effect/issues"
    )
  }
  return [next.value, iterator]
}
