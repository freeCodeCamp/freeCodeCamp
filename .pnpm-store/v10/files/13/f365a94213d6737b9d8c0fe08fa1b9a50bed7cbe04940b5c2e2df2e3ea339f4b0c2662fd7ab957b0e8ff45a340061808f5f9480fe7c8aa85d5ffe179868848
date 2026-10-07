import * as Effect from "../../Effect.js"
import { dual, pipe } from "../../Function.js"
import * as Option from "../../Option.js"
import { pipeArguments } from "../../Pipeable.js"
import * as STM from "../../STM.js"
import * as TPubSub from "../../TPubSub.js"
import * as TQueue from "../../TQueue.js"
import * as TRef from "../../TRef.js"
import type * as TSubscriptionRef from "../../TSubscriptionRef.js"
import * as stream from "../stream.js"
import { tDequeueVariance } from "./tQueue.js"
import { tRefVariance } from "./tRef.js"

/** @internal */
const TSubscriptionRefSymbolKey = "effect/TSubscriptionRef"

/** @internal */
export const TSubscriptionRefTypeId: TSubscriptionRef.TSubscriptionRefTypeId = Symbol.for(
  TSubscriptionRefSymbolKey
) as TSubscriptionRef.TSubscriptionRefTypeId

const TSubscriptionRefVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

class TDequeueMerge<A> implements TQueue.TDequeue<A> {
  [TQueue.TDequeueTypeId] = tDequeueVariance

  constructor(
    readonly first: TQueue.TDequeue<A>,
    readonly second: TQueue.TDequeue<A>
  ) {}

  peek: STM.STM<A> = STM.gen(this, function*() {
    const first = yield* this.peekOption
    if (first._tag === "Some") {
      return first.value
    }
    return yield* STM.retry
  })

  peekOption: STM.STM<Option.Option<A>> = STM.gen(this, function*() {
    const first = yield* this.first.peekOption
    if (first._tag === "Some") {
      return first
    }
    const second = yield* this.second.peekOption
    if (second._tag === "Some") {
      return second
    }
    return Option.none()
  })

  take: STM.STM<A> = STM.gen(this, function*() {
    if (!(yield* this.first.isEmpty)) {
      return yield* this.first.take
    }
    if (!(yield* this.second.isEmpty)) {
      return yield* this.second.take
    }
    return yield* STM.retry
  })

  takeAll: STM.STM<Array<A>> = STM.gen(this, function*() {
    return [...yield* this.first.takeAll, ...yield* this.second.takeAll]
  })

  takeUpTo(max: number): STM.STM<Array<A>> {
    return STM.gen(this, function*() {
      const first = yield* this.first.takeUpTo(max)
      if (first.length >= max) {
        return first
      }
      return [...first, ...yield* this.second.takeUpTo(max - first.length)]
    })
  }

  capacity(): number {
    return this.first.capacity() + this.second.capacity()
  }

  size: STM.STM<number> = STM.gen(this, function*() {
    return (yield* this.first.size) + (yield* this.second.size)
  })

  isFull: STM.STM<boolean> = STM.gen(this, function*() {
    return (yield* this.first.isFull) && (yield* this.second.isFull)
  })

  isEmpty: STM.STM<boolean> = STM.gen(this, function*() {
    return (yield* this.first.isEmpty) && (yield* this.second.isEmpty)
  })

  shutdown: STM.STM<void> = STM.gen(this, function*() {
    yield* this.first.shutdown
    yield* this.second.shutdown
  })

  isShutdown: STM.STM<boolean> = STM.gen(this, function*() {
    return (yield* this.first.isShutdown) && (yield* this.second.isShutdown)
  })

  awaitShutdown: STM.STM<void> = STM.gen(this, function*() {
    yield* this.first.awaitShutdown
    yield* this.second.awaitShutdown
  })
}

/** @internal */
class TSubscriptionRefImpl<in out A> implements TSubscriptionRef.TSubscriptionRef<A> {
  readonly [TSubscriptionRefTypeId] = TSubscriptionRefVariance
  readonly [TRef.TRefTypeId] = tRefVariance

  constructor(
    readonly ref: TRef.TRef<A>,
    readonly pubsub: TPubSub.TPubSub<A>
  ) {}

  get todos() {
    return this.ref.todos
  }

  get versioned() {
    return this.ref.versioned
  }

  pipe() {
    return pipeArguments(this, arguments)
  }

  get changes(): STM.STM<TQueue.TDequeue<A>> {
    return STM.gen(this, function*() {
      const first = yield* TQueue.unbounded<A>()
      yield* TQueue.offer(first, yield* TRef.get(this.ref))
      return new TDequeueMerge(first, yield* TPubSub.subscribe(this.pubsub))
    })
  }

  modify<B>(f: (a: A) => readonly [B, A]): STM.STM<B> {
    return pipe(
      TRef.get(this.ref),
      STM.map(f),
      STM.flatMap(([b, a]) =>
        pipe(
          TRef.set(this.ref, a),
          STM.as(b),
          STM.zipLeft(TPubSub.publish(this.pubsub, a))
        )
      )
    )
  }
}

/** @internal */
export const make = <A>(value: A): STM.STM<TSubscriptionRef.TSubscriptionRef<A>> =>
  pipe(
    STM.all([
      TPubSub.unbounded<A>(),
      TRef.make(value)
    ]),
    STM.map(([pubsub, ref]) => new TSubscriptionRefImpl(ref, pubsub))
  )

/** @internal */
export const get = <A>(self: TSubscriptionRef.TSubscriptionRef<A>) => TRef.get(self.ref)

/** @internal */
export const set = dual<
  <A>(value: A) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<void>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, value: A) => STM.STM<void>
>(
  2,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, value: A): STM.STM<void> =>
    self.modify((): [void, A] => [void 0, value])
)

/** @internal */
export const getAndSet = dual<
  <A>(value: A) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<A>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, value: A) => STM.STM<A>
>(2, (self, value) => self.modify((a) => [a, value]))

/** @internal */
export const getAndUpdate = dual<
  <A>(f: (a: A) => A) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<A>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, f: (a: A) => A) => STM.STM<A>
>(2, (self, f) => self.modify((a) => [a, f(a)]))

/** @internal */
export const getAndUpdateSome = dual<
  <A>(f: (a: A) => Option.Option<A>) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<A>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, f: (a: A) => Option.Option<A>) => STM.STM<A>
>(2, (self, f) =>
  self.modify((a) =>
    Option.match(f(a), {
      onNone: () => [a, a],
      onSome: (b) => [a, b]
    })
  ))

/** @internal */
export const setAndGet = dual<
  <A>(value: A) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<A>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, value: A) => STM.STM<A>
>(2, (self, value) => self.modify(() => [value, value]))

/** @internal */
export const modify = dual<
  <A, B>(f: (a: A) => readonly [B, A]) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<B>,
  <A, B>(self: TSubscriptionRef.TSubscriptionRef<A>, f: (a: A) => readonly [B, A]) => STM.STM<B>
>(2, (self, f) => self.modify(f))

/** @internal */
export const modifySome = dual<
  <A, B>(
    fallback: B,
    f: (a: A) => Option.Option<readonly [B, A]>
  ) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<B>,
  <A, B>(
    self: TSubscriptionRef.TSubscriptionRef<A>,
    fallback: B,
    f: (a: A) => Option.Option<readonly [B, A]>
  ) => STM.STM<B>
>(3, (self, fallback, f) =>
  self.modify((a) =>
    Option.match(f(a), {
      onNone: () => [fallback, a],
      onSome: (b) => b
    })
  ))

/** @internal */
export const update = dual<
  <A>(f: (a: A) => A) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<void>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, f: (a: A) => A) => STM.STM<void>
>(2, (self, f) => self.modify((a) => [void 0, f(a)]))

/** @internal */
export const updateAndGet = dual<
  <A>(f: (a: A) => A) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<A>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, f: (a: A) => A) => STM.STM<A>
>(2, (self, f) =>
  self.modify((a) => {
    const b = f(a)
    return [b, b]
  }))

/** @internal */
export const updateSome = dual<
  <A>(f: (a: A) => Option.Option<A>) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<void>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, f: (a: A) => Option.Option<A>) => STM.STM<void>
>(
  2,
  (self, f) =>
    self.modify((a) => [
      void 0,
      Option.match(f(a), {
        onNone: () => a,
        onSome: (b) => b
      })
    ])
)

/** @internal */
export const updateSomeAndGet = dual<
  <A>(f: (a: A) => Option.Option<A>) => (self: TSubscriptionRef.TSubscriptionRef<A>) => STM.STM<A>,
  <A>(self: TSubscriptionRef.TSubscriptionRef<A>, f: (a: A) => Option.Option<A>) => STM.STM<A>
>(
  2,
  (self, f) =>
    self.modify((a) =>
      Option.match(f(a), {
        onNone: () => [a, a],
        onSome: (b) => [b, b]
      })
    )
)

/** @internal */
export const changesScoped = <A>(self: TSubscriptionRef.TSubscriptionRef<A>) =>
  Effect.acquireRelease(self.changes, TQueue.shutdown)

/** @internal */
export const changesStream = <A>(self: TSubscriptionRef.TSubscriptionRef<A>) =>
  stream.unwrap(Effect.map(self.changes, stream.fromTQueue))
