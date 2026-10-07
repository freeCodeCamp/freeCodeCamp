import * as RA from "../../Array.js"
import * as Effect from "../../Effect.js"
import { dual, identity, pipe } from "../../Function.js"
import * as HashSet from "../../HashSet.js"
import * as Option from "../../Option.js"
import type * as Scope from "../../Scope.js"
import type * as STM from "../../STM.js"
import type * as TPubSub from "../../TPubSub.js"
import type * as TQueue from "../../TQueue.js"
import type * as TRef from "../../TRef.js"
import * as core from "./core.js"
import * as OpCodes from "./opCodes/strategy.js"
import * as stm from "./stm.js"
import * as tQueue from "./tQueue.js"
import * as tRef from "./tRef.js"

/** @internal */
const TPubSubSymbolKey = "effect/TPubSub"

/** @internal */
export const TPubSubTypeId: TPubSub.TPubSubTypeId = Symbol.for(TPubSubSymbolKey) as TPubSub.TPubSubTypeId

const AbsentValue = Symbol.for("effect/TPubSub/AbsentValue")
type AbsentValue = typeof AbsentValue

/** @internal */
export interface Node<in out A> {
  readonly head: A | AbsentValue
  readonly subscribers: number
  readonly tail: TRef.TRef<Node<A> | undefined>
}

/** @internal */
export const makeNode = <A>(
  head: A | AbsentValue,
  subscribers: number,
  tail: TRef.TRef<Node<A> | undefined>
): Node<A> => ({
  head,
  subscribers,
  tail
})

/** @internal */
class TPubSubImpl<in out A> implements TPubSub.TPubSub<A> {
  readonly [TPubSubTypeId] = {
    _A: (_: any) => _
  }
  readonly [tQueue.TEnqueueTypeId] = tQueue.tEnqueueVariance
  constructor(
    readonly pubsubSize: TRef.TRef<number>,
    readonly publisherHead: TRef.TRef<TRef.TRef<Node<A> | undefined>>,
    readonly publisherTail: TRef.TRef<TRef.TRef<Node<A> | undefined> | undefined>,
    readonly requestedCapacity: number,
    readonly strategy: tQueue.TQueueStrategy,
    readonly subscriberCount: TRef.TRef<number>,
    readonly subscribers: TRef.TRef<HashSet.HashSet<TRef.TRef<TRef.TRef<Node<A>> | undefined>>>
  ) {}

  isShutdown: STM.STM<boolean> = core.effect<never, boolean>((journal) => {
    const currentPublisherTail = tRef.unsafeGet(this.publisherTail, journal)
    return currentPublisherTail === undefined
  })

  awaitShutdown: STM.STM<void> = core.flatMap(
    this.isShutdown,
    (isShutdown) => isShutdown ? stm.void : core.retry
  )

  capacity(): number {
    return this.requestedCapacity
  }

  size: STM.STM<number> = core.withSTMRuntime((runtime) => {
    const currentPublisherTail = tRef.unsafeGet(this.publisherTail, runtime.journal)
    if (currentPublisherTail === undefined) {
      return core.interruptAs(runtime.fiberId)
    }
    return core.succeed(tRef.unsafeGet(this.pubsubSize, runtime.journal))
  })

  isEmpty: STM.STM<boolean> = core.map(this.size, (size) => size === 0)

  isFull: STM.STM<boolean> = core.map(this.size, (size) => size === this.capacity())

  offer(value: A): STM.STM<boolean> {
    return core.withSTMRuntime((runtime) => {
      const currentPublisherTail = tRef.unsafeGet(this.publisherTail, runtime.journal)
      if (currentPublisherTail === undefined) {
        return core.interruptAs(runtime.fiberId)
      }
      const currentSubscriberCount = tRef.unsafeGet(this.subscriberCount, runtime.journal)
      if (currentSubscriberCount === 0) {
        return core.succeed(true)
      }
      const currentPubSubSize = tRef.unsafeGet(this.pubsubSize, runtime.journal)
      if (currentPubSubSize < this.requestedCapacity) {
        const updatedPublisherTail: TRef.TRef<Node<A> | undefined> = new tRef.TRefImpl<Node<A> | undefined>(void 0)
        const updatedNode = makeNode(value, currentSubscriberCount, updatedPublisherTail)
        tRef.unsafeSet<Node<A> | undefined>(currentPublisherTail, updatedNode, runtime.journal)
        tRef.unsafeSet<TRef.TRef<Node<A> | undefined> | undefined>(
          this.publisherTail,
          updatedPublisherTail,
          runtime.journal
        )
        tRef.unsafeSet(this.pubsubSize, currentPubSubSize + 1, runtime.journal)
        return core.succeed(true)
      }
      switch (this.strategy._tag) {
        case OpCodes.OP_BACKPRESSURE_STRATEGY: {
          return core.retry
        }
        case OpCodes.OP_DROPPING_STRATEGY: {
          return core.succeed(false)
        }
        case OpCodes.OP_SLIDING_STRATEGY: {
          if (this.requestedCapacity > 0) {
            let currentPublisherHead: TRef.TRef<Node<A> | undefined> = tRef.unsafeGet(
              this.publisherHead,
              runtime.journal
            )
            let loop = true
            while (loop) {
              const node = tRef.unsafeGet(currentPublisherHead, runtime.journal)
              if (node === undefined) {
                return core.retry
              }
              const head = node.head
              const tail = node.tail
              if (head !== AbsentValue) {
                const updatedNode = makeNode<A>(AbsentValue, node.subscribers, node.tail as any)
                tRef.unsafeSet<Node<A> | undefined>(
                  currentPublisherHead as any,
                  updatedNode as any,
                  runtime.journal
                )
                tRef.unsafeSet(this.publisherHead, tail, runtime.journal)
                loop = false
              } else {
                currentPublisherHead = tail
              }
            }
          }
          const updatedPublisherTail: TRef.TRef<Node<A> | undefined> = new tRef.TRefImpl<Node<A> | undefined>(void 0)
          const updatedNode = makeNode(value, currentSubscriberCount, updatedPublisherTail)
          tRef.unsafeSet<Node<A> | undefined>(currentPublisherTail, updatedNode, runtime.journal)
          tRef.unsafeSet<TRef.TRef<Node<A> | undefined> | undefined>(
            this.publisherTail,
            updatedPublisherTail,
            runtime.journal
          )
          return core.succeed(true)
        }
      }
    })
  }

  offerAll(iterable: Iterable<A>): STM.STM<boolean> {
    return core.map(
      stm.forEach(iterable, (a) => this.offer(a)),
      RA.every(identity)
    )
  }

  shutdown: STM.STM<void> = core.effect<never, void>((journal) => {
    const currentPublisherTail = tRef.unsafeGet(this.publisherTail, journal)
    if (currentPublisherTail !== undefined) {
      tRef.unsafeSet<TRef.TRef<Node<A> | undefined> | undefined>(this.publisherTail, void 0, journal)
      const currentSubscribers = tRef.unsafeGet(this.subscribers, journal)
      HashSet.forEach(currentSubscribers, (subscriber) => {
        tRef.unsafeSet<TRef.TRef<Node<A>> | undefined>(subscriber, void 0, journal)
      })
      tRef.unsafeSet(this.subscribers, HashSet.empty<TRef.TRef<TRef.TRef<Node<A>> | undefined>>(), journal)
    }
  })
}

/** @internal */
class TPubSubSubscriptionImpl<in out A> implements TQueue.TDequeue<A> {
  readonly [TPubSubTypeId]: TPubSub.TPubSubTypeId = TPubSubTypeId
  readonly [tQueue.TDequeueTypeId] = tQueue.tDequeueVariance
  constructor(
    readonly pubsubSize: TRef.TRef<number>,
    readonly publisherHead: TRef.TRef<TRef.TRef<Node<A> | undefined>>,
    readonly requestedCapacity: number,
    readonly subscriberHead: TRef.TRef<TRef.TRef<Node<A> | undefined> | undefined>,
    readonly subscriberCount: TRef.TRef<number>,
    readonly subscribers: TRef.TRef<HashSet.HashSet<TRef.TRef<TRef.TRef<Node<A>> | undefined>>>
  ) {}

  isShutdown: STM.STM<boolean> = core.effect<never, boolean>((journal) => {
    const currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, journal)
    return currentSubscriberHead === undefined
  })

  awaitShutdown: STM.STM<void> = core.flatMap(
    this.isShutdown,
    (isShutdown) => isShutdown ? stm.void : core.retry
  )

  capacity(): number {
    return this.requestedCapacity
  }

  size: STM.STM<number> = core.withSTMRuntime((runtime) => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal)
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId)
    }
    let loop = true
    let size = 0
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal)
      if (node === undefined) {
        loop = false
      } else {
        const head = node.head
        const tail: TRef.TRef<Node<A> | undefined> = node.tail
        if (head !== AbsentValue) {
          size = size + 1
          if (size >= Number.MAX_SAFE_INTEGER) {
            loop = false
          }
        }
        currentSubscriberHead = tail
      }
    }
    return core.succeed(size)
  })

  isEmpty: STM.STM<boolean> = core.map(this.size, (size) => size === 0)

  isFull: STM.STM<boolean> = core.map(this.size, (size) => size === this.capacity())

  peek: STM.STM<A> = core.withSTMRuntime((runtime) => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal)
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId)
    }
    let value: A | AbsentValue = AbsentValue
    let loop = true
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal)
      if (node === undefined) {
        return core.retry
      }
      const head = node.head
      const tail: TRef.TRef<Node<A> | undefined> = node.tail
      if (head !== AbsentValue) {
        value = head
        loop = false
      } else {
        currentSubscriberHead = tail
      }
    }
    return core.succeed(value as A)
  })

  peekOption: STM.STM<Option.Option<A>> = core.withSTMRuntime((runtime) => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal)
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId)
    }
    let value: Option.Option<A> = Option.none()
    let loop = true
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal)
      if (node === undefined) {
        value = Option.none()
        loop = false
      } else {
        const head = node.head
        const tail: TRef.TRef<Node<A> | undefined> = node.tail
        if (head !== AbsentValue) {
          value = Option.some(head)
          loop = false
        } else {
          currentSubscriberHead = tail
        }
      }
    }
    return core.succeed(value)
  })

  shutdown: STM.STM<void> = core.effect<never, void>((journal) => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, journal)
    if (currentSubscriberHead !== undefined) {
      tRef.unsafeSet<TRef.TRef<Node<A> | undefined> | undefined>(this.subscriberHead, void 0, journal)
      let loop = true
      while (loop) {
        const node = tRef.unsafeGet(currentSubscriberHead, journal)
        if (node === undefined) {
          loop = false
        } else {
          const head = node.head
          const tail: TRef.TRef<Node<A> | undefined> = node.tail
          if (head !== AbsentValue) {
            const subscribers = node.subscribers
            if (subscribers === 1) {
              const size = tRef.unsafeGet(this.pubsubSize, journal)
              const updatedNode = makeNode<A>(AbsentValue, 0, tail)
              tRef.unsafeSet<Node<A> | undefined>(currentSubscriberHead, updatedNode, journal)
              tRef.unsafeSet(this.publisherHead, tail as any, journal)
              tRef.unsafeSet(this.pubsubSize, size - 1, journal)
            } else {
              const updatedNode = makeNode(head, subscribers - 1, tail)
              tRef.unsafeSet<Node<A> | undefined>(currentSubscriberHead, updatedNode, journal)
            }
          }
          currentSubscriberHead = tail
        }
      }
      const currentSubscriberCount = tRef.unsafeGet(this.subscriberCount, journal)
      tRef.unsafeSet(this.subscriberCount, currentSubscriberCount - 1, journal)
      tRef.unsafeSet(
        this.subscribers,
        HashSet.remove(
          tRef.unsafeGet(this.subscribers, journal),
          this.subscriberHead as any
        ),
        journal
      )
    }
  })

  take: STM.STM<A> = core.withSTMRuntime((runtime) => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal)
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId)
    }
    let value: A | AbsentValue = AbsentValue
    let loop = true
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal)
      if (node === undefined) {
        return core.retry
      }
      const head = node.head
      const tail: TRef.TRef<Node<A> | undefined> = node.tail
      if (head !== AbsentValue) {
        const subscribers = node.subscribers
        if (subscribers === 1) {
          const size = tRef.unsafeGet(this.pubsubSize, runtime.journal)
          const updatedNode = makeNode<A>(AbsentValue, 0, tail)
          tRef.unsafeSet<Node<A> | undefined>(currentSubscriberHead, updatedNode, runtime.journal)
          tRef.unsafeSet(this.publisherHead, tail as any, runtime.journal)
          tRef.unsafeSet(this.pubsubSize, size - 1, runtime.journal)
        } else {
          const updatedNode = makeNode(head, subscribers - 1, tail)
          tRef.unsafeSet<Node<A> | undefined>(currentSubscriberHead, updatedNode, runtime.journal)
        }
        tRef.unsafeSet<TRef.TRef<Node<A> | undefined> | undefined>(
          this.subscriberHead,
          tail,
          runtime.journal
        )
        value = head
        loop = false
      } else {
        currentSubscriberHead = tail
      }
    }
    return core.succeed(value as A)
  })

  takeAll: STM.STM<Array<A>> = this.takeUpTo(Number.POSITIVE_INFINITY)

  takeUpTo(max: number): STM.STM<Array<A>> {
    return core.withSTMRuntime((runtime) => {
      let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal)
      if (currentSubscriberHead === undefined) {
        return core.interruptAs(runtime.fiberId)
      }
      const builder: Array<A> = []
      let n = 0
      while (n !== max) {
        const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal)
        if (node === undefined) {
          n = max
        } else {
          const head = node.head
          const tail: TRef.TRef<Node<A> | undefined> = node.tail
          if (head !== AbsentValue) {
            const subscribers = node.subscribers
            if (subscribers === 1) {
              const size = tRef.unsafeGet(this.pubsubSize, runtime.journal)
              const updatedNode = makeNode<A>(AbsentValue, 0, tail)
              tRef.unsafeSet<Node<A> | undefined>(currentSubscriberHead, updatedNode, runtime.journal)
              tRef.unsafeSet(this.publisherHead, tail as any, runtime.journal)
              tRef.unsafeSet(this.pubsubSize, size - 1, runtime.journal)
            } else {
              const updatedNode = makeNode(head, subscribers - 1, tail)
              tRef.unsafeSet<Node<A> | undefined>(currentSubscriberHead, updatedNode, runtime.journal)
            }
            builder.push(head)
            n = n + 1
          }
          currentSubscriberHead = tail
        }
      }
      tRef.unsafeSet<TRef.TRef<Node<A> | undefined> | undefined>(
        this.subscriberHead,
        currentSubscriberHead,
        runtime.journal
      )
      return core.succeed(builder)
    })
  }
}

/** @internal */
const makeTPubSub = <A>(
  requestedCapacity: number,
  strategy: tQueue.TQueueStrategy
): STM.STM<TPubSub.TPubSub<A>> =>
  pipe(
    stm.all([
      tRef.make<Node<A> | undefined>(void 0),
      tRef.make(0)
    ]),
    core.flatMap(([empty, pubsubSize]) =>
      pipe(
        stm.all([
          tRef.make(empty),
          tRef.make(empty),
          tRef.make(0),
          tRef.make(HashSet.empty())
        ]),
        core.map(([publisherHead, publisherTail, subscriberCount, subscribers]) =>
          new TPubSubImpl(
            pubsubSize,
            publisherHead,
            publisherTail as any,
            requestedCapacity,
            strategy,
            subscriberCount,
            subscribers as any
          )
        )
      )
    )
  )

const makeSubscription = <A>(
  pubsubSize: TRef.TRef<number>,
  publisherHead: TRef.TRef<TRef.TRef<Node<A> | undefined>>,
  publisherTail: TRef.TRef<TRef.TRef<Node<A> | undefined> | undefined>,
  requestedCapacity: number,
  subscriberCount: TRef.TRef<number>,
  subscribers: TRef.TRef<HashSet.HashSet<TRef.TRef<TRef.TRef<Node<A>> | undefined>>>
): STM.STM<TQueue.TDequeue<A>> =>
  pipe(
    tRef.get(publisherTail),
    core.flatMap((currentPublisherTail) =>
      pipe(
        stm.all([
          tRef.make(currentPublisherTail),
          tRef.get(subscriberCount),
          tRef.get(subscribers)
        ]),
        stm.tap(([_, currentSubscriberCount]) =>
          pipe(
            subscriberCount,
            tRef.set(currentSubscriberCount + 1)
          )
        ),
        stm.tap(([subscriberHead, _, currentSubscribers]) =>
          pipe(
            subscribers as any,
            tRef.set(pipe(currentSubscribers as any, HashSet.add(subscriberHead)))
          )
        ),
        core.map(([subscriberHead]) =>
          new TPubSubSubscriptionImpl(
            pubsubSize,
            publisherHead,
            requestedCapacity,
            subscriberHead as any,
            subscriberCount,
            subscribers
          )
        )
      )
    )
  )

/** @internal */
export const awaitShutdown = <A>(self: TPubSub.TPubSub<A>): STM.STM<void> => self.awaitShutdown

/** @internal */
export const bounded = <A>(requestedCapacity: number): STM.STM<TPubSub.TPubSub<A>> =>
  makeTPubSub<A>(requestedCapacity, tQueue.BackPressure)

/** @internal */
export const capacity = <A>(self: TPubSub.TPubSub<A>): number => self.capacity()

/** @internal */
export const dropping = <A>(requestedCapacity: number): STM.STM<TPubSub.TPubSub<A>> =>
  makeTPubSub<A>(requestedCapacity, tQueue.Dropping)

/** @internal */
export const isEmpty = <A>(self: TPubSub.TPubSub<A>): STM.STM<boolean> => self.isEmpty

/** @internal */
export const isFull = <A>(self: TPubSub.TPubSub<A>): STM.STM<boolean> => self.isFull

/** @internal */
export const isShutdown = <A>(self: TPubSub.TPubSub<A>): STM.STM<boolean> => self.isShutdown

/** @internal */
export const publish = dual<
  <A>(value: A) => (self: TPubSub.TPubSub<A>) => STM.STM<boolean>,
  <A>(self: TPubSub.TPubSub<A>, value: A) => STM.STM<boolean>
>(2, (self, value) => self.offer(value))

/** @internal */
export const publishAll = dual<
  <A>(iterable: Iterable<A>) => (self: TPubSub.TPubSub<A>) => STM.STM<boolean>,
  <A>(self: TPubSub.TPubSub<A>, iterable: Iterable<A>) => STM.STM<boolean>
>(2, (self, iterable) => self.offerAll(iterable))

/** @internal */
export const size = <A>(self: TPubSub.TPubSub<A>): STM.STM<number> => self.size

/** @internal */
export const shutdown = <A>(self: TPubSub.TPubSub<A>): STM.STM<void> => self.shutdown

/** @internal */
export const sliding = <A>(requestedCapacity: number): STM.STM<TPubSub.TPubSub<A>> =>
  makeTPubSub<A>(requestedCapacity, tQueue.Sliding)

/** @internal */
export const subscribe = <A>(self: TPubSub.TPubSub<A>): STM.STM<TQueue.TDequeue<A>> =>
  makeSubscription(
    self.pubsubSize,
    self.publisherHead,
    self.publisherTail,
    self.requestedCapacity,
    self.subscriberCount,
    self.subscribers
  )

/** @internal */
export const subscribeScoped = <A>(self: TPubSub.TPubSub<A>): Effect.Effect<TQueue.TDequeue<A>, never, Scope.Scope> =>
  Effect.acquireRelease(
    subscribe(self),
    (dequeue) => tQueue.shutdown(dequeue)
  )

/** @internal */
export const unbounded = <A>(): STM.STM<TPubSub.TPubSub<A>> => makeTPubSub<A>(Number.MAX_SAFE_INTEGER, tQueue.Dropping)
