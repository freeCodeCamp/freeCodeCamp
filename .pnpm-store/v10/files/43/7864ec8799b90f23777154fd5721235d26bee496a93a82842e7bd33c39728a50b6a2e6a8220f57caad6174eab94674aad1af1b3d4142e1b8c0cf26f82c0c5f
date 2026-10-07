/**
 * @since 2.0.0
 */
import * as Chunk from "./Chunk.js"
import * as Dual from "./Function.js"
import { format, type Inspectable, NodeInspectSymbol, toJSON } from "./Inspectable.js"
import * as MutableList from "./MutableList.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"

const TypeId: unique symbol = Symbol.for("effect/MutableQueue") as TypeId

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category symbol
 */
export const EmptyMutableQueue = Symbol.for("effect/mutable/MutableQueue/Empty")

/**
 * @since 2.0.0
 * @category model
 */
export interface MutableQueue<out A> extends Iterable<A>, Pipeable, Inspectable {
  readonly [TypeId]: TypeId

  /** @internal */
  queue: MutableList.MutableList<A>
  /** @internal */
  capacity: number | undefined
}

/**
 * @since 2.0.0
 */
export declare namespace MutableQueue {
  /**
   * @since 2.0.0
   */
  export type Empty = typeof EmptyMutableQueue
}

const MutableQueueProto: Omit<MutableQueue<unknown>, "queue" | "capacity"> = {
  [TypeId]: TypeId,
  [Symbol.iterator]<A>(this: MutableQueue<A>): Iterator<A> {
    return Array.from(this.queue)[Symbol.iterator]()
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "MutableQueue",
      values: Array.from(this).map(toJSON)
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const make = <A>(capacity: number | undefined): MutableQueue<A> => {
  const queue = Object.create(MutableQueueProto)
  queue.queue = MutableList.empty()
  queue.capacity = capacity
  return queue
}

/**
 * Creates a new bounded `MutableQueue`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const bounded = <A>(capacity: number): MutableQueue<A> => make(capacity)

/**
 * Creates a new unbounded `MutableQueue`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unbounded = <A>(): MutableQueue<A> => make(undefined)

/**
 * Returns the current number of elements in the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export const length = <A>(self: MutableQueue<A>): number => MutableList.length(self.queue)

/**
 * Returns `true` if the queue is empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty = <A>(self: MutableQueue<A>): boolean => MutableList.isEmpty(self.queue)

/**
 * Returns `true` if the queue is full, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isFull = <A>(self: MutableQueue<A>): boolean =>
  self.capacity === undefined ? false : MutableList.length(self.queue) === self.capacity

/**
 * The **maximum** number of elements that a queue can hold.
 *
 * **Note**: unbounded queues can still implement this interface with
 * `capacity = Infinity`.
 *
 * @since 2.0.0
 * @category getters
 */
export const capacity = <A>(self: MutableQueue<A>): number => self.capacity === undefined ? Infinity : self.capacity

/**
 * Offers an element to the queue.
 *
 * Returns whether the enqueue was successful or not.
 *
 * @since 2.0.0
 */
export const offer: {
  /**
   * Offers an element to the queue.
   *
   * Returns whether the enqueue was successful or not.
   *
   * @since 2.0.0
   */
  <A>(self: MutableQueue<A>, value: A): boolean
  /**
   * Offers an element to the queue.
   *
   * Returns whether the enqueue was successful or not.
   *
   * @since 2.0.0
   */
  <A>(value: A): (self: MutableQueue<A>) => boolean
} = Dual.dual<
  <A>(value: A) => (self: MutableQueue<A>) => boolean,
  <A>(self: MutableQueue<A>, value: A) => boolean
>(2, <A>(self: MutableQueue<A>, value: A) => {
  const queueLength = MutableList.length(self.queue)
  if (self.capacity !== undefined && queueLength === self.capacity) {
    return false
  }
  MutableList.append(value)(self.queue)
  return true
})

/**
 * Enqueues a collection of values into the queue.
 *
 * Returns a `Chunk` of the values that were **not** able to be enqueued.
 *
 * @since 2.0.0
 */
export const offerAll: {
  /**
   * Enqueues a collection of values into the queue.
   *
   * Returns a `Chunk` of the values that were **not** able to be enqueued.
   *
   * @since 2.0.0
   */
  <A>(values: Iterable<A>): (self: MutableQueue<A>) => Chunk.Chunk<A>
  /**
   * Enqueues a collection of values into the queue.
   *
   * Returns a `Chunk` of the values that were **not** able to be enqueued.
   *
   * @since 2.0.0
   */
  <A>(self: MutableQueue<A>, values: Iterable<A>): Chunk.Chunk<A>
} = Dual.dual<
  <A>(values: Iterable<A>) => (self: MutableQueue<A>) => Chunk.Chunk<A>,
  <A>(self: MutableQueue<A>, values: Iterable<A>) => Chunk.Chunk<A>
>(2, <A>(self: MutableQueue<A>, values: Iterable<A>) => {
  const iterator = values[Symbol.iterator]()
  let next: IteratorResult<A> | undefined
  let remainder = Chunk.empty<A>()
  let offering = true
  while (offering && (next = iterator.next()) && !next.done) {
    offering = offer(next.value)(self)
  }
  while (next != null && !next.done) {
    remainder = Chunk.prepend<A>(next.value)(remainder)
    next = iterator.next()
  }
  return Chunk.reverse(remainder)
})

/**
 * Dequeues an element from the queue.
 *
 * Returns either an element from the queue, or the `def` param.
 *
 * **Note**: if there is no meaningful default for your type, you can always
 * use `poll(MutableQueue.EmptyMutableQueue)`.
 *
 * @since 2.0.0
 */
export const poll: {
  /**
   * Dequeues an element from the queue.
   *
   * Returns either an element from the queue, or the `def` param.
   *
   * **Note**: if there is no meaningful default for your type, you can always
   * use `poll(MutableQueue.EmptyMutableQueue)`.
   *
   * @since 2.0.0
   */
  <D>(def: D): <A>(self: MutableQueue<A>) => D | A
  /**
   * Dequeues an element from the queue.
   *
   * Returns either an element from the queue, or the `def` param.
   *
   * **Note**: if there is no meaningful default for your type, you can always
   * use `poll(MutableQueue.EmptyMutableQueue)`.
   *
   * @since 2.0.0
   */
  <A, D>(self: MutableQueue<A>, def: D): A | D
} = Dual.dual<
  <D>(def: D) => <A>(self: MutableQueue<A>) => A | D,
  <A, D>(self: MutableQueue<A>, def: D) => A | D
>(2, (self, def) => {
  if (MutableList.isEmpty(self.queue)) {
    return def
  }
  return MutableList.shift(self.queue)!
})

/**
 * Dequeues up to `n` elements from the queue.
 *
 * Returns a `List` of up to `n` elements.
 *
 * @since 2.0.0
 */
export const pollUpTo: {
  /**
   * Dequeues up to `n` elements from the queue.
   *
   * Returns a `List` of up to `n` elements.
   *
   * @since 2.0.0
   */
  (n: number): <A>(self: MutableQueue<A>) => Chunk.Chunk<A>
  /**
   * Dequeues up to `n` elements from the queue.
   *
   * Returns a `List` of up to `n` elements.
   *
   * @since 2.0.0
   */
  <A>(self: MutableQueue<A>, n: number): Chunk.Chunk<A>
} = Dual.dual<
  (n: number) => <A>(self: MutableQueue<A>) => Chunk.Chunk<A>,
  <A>(self: MutableQueue<A>, n: number) => Chunk.Chunk<A>
>(2, <A>(self: MutableQueue<A>, n: number) => {
  let result = Chunk.empty<A>()
  let count = 0
  while (count < n) {
    const element = poll(EmptyMutableQueue)(self)
    if (element === EmptyMutableQueue) {
      break
    }
    result = Chunk.prepend(element)(result)
    count += 1
  }
  return Chunk.reverse(result)
})
