import * as Arr from "../../Array.js"
import * as Chunk from "../../Chunk.js"
import { dual, pipe } from "../../Function.js"
import * as Option from "../../Option.js"
import type * as Order from "../../Order.js"
import type { Predicate } from "../../Predicate.js"
import * as SortedMap from "../../SortedMap.js"
import type * as STM from "../../STM.js"
import type * as TPriorityQueue from "../../TPriorityQueue.js"
import type * as TRef from "../../TRef.js"
import * as core from "./core.js"
import * as tRef from "./tRef.js"

/** @internal */
const TPriorityQueueSymbolKey = "effect/TPriorityQueue"

/** @internal */
export const TPriorityQueueTypeId: TPriorityQueue.TPriorityQueueTypeId = Symbol.for(
  TPriorityQueueSymbolKey
) as TPriorityQueue.TPriorityQueueTypeId

const tPriorityQueueVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
export class TPriorityQueueImpl<in out A> implements TPriorityQueue.TPriorityQueue<A> {
  readonly [TPriorityQueueTypeId] = tPriorityQueueVariance
  constructor(readonly ref: TRef.TRef<SortedMap.SortedMap<A, [A, ...Array<A>]>>) {}
}

/** @internal */
export const empty = <A>(order: Order.Order<A>): STM.STM<TPriorityQueue.TPriorityQueue<A>> =>
  pipe(
    tRef.make(SortedMap.empty<A, [A, ...Array<A>]>(order)),
    core.map((ref) => new TPriorityQueueImpl(ref))
  )

/** @internal */
export const fromIterable =
  <A>(order: Order.Order<A>) => (iterable: Iterable<A>): STM.STM<TPriorityQueue.TPriorityQueue<A>> =>
    pipe(
      tRef.make(
        Arr.fromIterable(iterable).reduce(
          (map, value) =>
            pipe(
              map,
              SortedMap.set(
                value,
                pipe(
                  map,
                  SortedMap.get(value),
                  Option.match({
                    onNone: () => Arr.of(value),
                    onSome: Arr.prepend(value)
                  })
                )
              )
            ),
          SortedMap.empty<A, [A, ...Array<A>]>(order)
        )
      ),
      core.map((ref) => new TPriorityQueueImpl(ref))
    )

/** @internal */
export const isEmpty = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<boolean> =>
  core.map(tRef.get(self.ref), SortedMap.isEmpty)

/** @internal */
export const isNonEmpty = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<boolean> =>
  core.map(tRef.get(self.ref), SortedMap.isNonEmpty)

/** @internal */
export const make = <A>(order: Order.Order<A>) => (...elements: Array<A>): STM.STM<TPriorityQueue.TPriorityQueue<A>> =>
  fromIterable(order)(elements)

/** @internal */
export const offer = dual<
  <A>(value: A) => (self: TPriorityQueue.TPriorityQueue<A>) => STM.STM<void>,
  <A>(self: TPriorityQueue.TPriorityQueue<A>, value: A) => STM.STM<void>
>(2, (self, value) =>
  tRef.update(self.ref, (map) =>
    SortedMap.set(
      map,
      value,
      Option.match(SortedMap.get(map, value), {
        onNone: () => Arr.of(value),
        onSome: Arr.prepend(value)
      })
    )))

/** @internal */
export const offerAll = dual<
  <A>(values: Iterable<A>) => (self: TPriorityQueue.TPriorityQueue<A>) => STM.STM<void>,
  <A>(self: TPriorityQueue.TPriorityQueue<A>, values: Iterable<A>) => STM.STM<void>
>(2, (self, values) =>
  tRef.update(self.ref, (map) =>
    Arr.fromIterable(values).reduce(
      (map, value) =>
        SortedMap.set(
          map,
          value,
          Option.match(SortedMap.get(map, value), {
            onNone: () => Arr.of(value),
            onSome: Arr.prepend(value)
          })
        ),
      map
    )))

/** @internal */
export const peek = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<A> =>
  core.withSTMRuntime((runtime) => {
    const map = tRef.unsafeGet(self.ref, runtime.journal)
    return Option.match(
      SortedMap.headOption(map),
      {
        onNone: () => core.retry,
        onSome: (elements) => core.succeed(elements[0])
      }
    )
  })

/** @internal */
export const peekOption = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<Option.Option<A>> =>
  tRef.modify(self.ref, (map) => [
    Option.map(SortedMap.headOption(map), (elements) => elements[0]),
    map
  ])

/** @internal */
export const removeIf = dual<
  <A>(predicate: Predicate<A>) => (self: TPriorityQueue.TPriorityQueue<A>) => STM.STM<void>,
  <A>(self: TPriorityQueue.TPriorityQueue<A>, predicate: Predicate<A>) => STM.STM<void>
>(2, (self, predicate) => retainIf(self, (a) => !predicate(a)))

/** @internal */
export const retainIf = dual<
  <A>(predicate: Predicate<A>) => (self: TPriorityQueue.TPriorityQueue<A>) => STM.STM<void>,
  <A>(self: TPriorityQueue.TPriorityQueue<A>, predicate: Predicate<A>) => STM.STM<void>
>(
  2,
  <A>(self: TPriorityQueue.TPriorityQueue<A>, predicate: Predicate<A>) =>
    tRef.update(
      self.ref,
      (map) =>
        SortedMap.reduce(map, SortedMap.empty(SortedMap.getOrder(map)), (map, value, key) => {
          const filtered: ReadonlyArray<A> = Arr.filter(value, predicate)
          return filtered.length > 0 ?
            SortedMap.set(map, key, filtered as [A, ...Array<A>]) :
            SortedMap.remove(map, key)
        })
    )
)

/** @internal */
export const size = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<number> =>
  tRef.modify(
    self.ref,
    (map) => [SortedMap.reduce(map, 0, (n, as) => n + as.length), map]
  )

/** @internal */
export const take = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<A> =>
  core.withSTMRuntime((runtime) => {
    const map = tRef.unsafeGet(self.ref, runtime.journal)
    return Option.match(SortedMap.headOption(map), {
      onNone: () => core.retry,
      onSome: (values) => {
        const head = values[1][0]
        const tail = values[1].slice(1)
        tRef.unsafeSet(
          self.ref,
          tail.length > 0 ?
            SortedMap.set(map, head, tail as [A, ...Array<A>]) :
            SortedMap.remove(map, head),
          runtime.journal
        )
        return core.succeed(head)
      }
    })
  })

/** @internal */
export const takeAll = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<Array<A>> =>
  tRef.modify(self.ref, (map) => {
    const builder: Array<A> = []
    for (const entry of map) {
      for (const value of entry[1]) {
        builder.push(value)
      }
    }
    return [builder, SortedMap.empty(SortedMap.getOrder(map))]
  })

/** @internal */
export const takeOption = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<Option.Option<A>> =>
  core.effect<never, Option.Option<A>>((journal) => {
    const map = pipe(self.ref, tRef.unsafeGet(journal))
    return Option.match(SortedMap.headOption(map), {
      onNone: (): Option.Option<A> => Option.none(),
      onSome: ([key, value]) => {
        const tail = value.slice(1)
        tRef.unsafeSet(
          self.ref,
          tail.length > 0 ?
            SortedMap.set(map, key, tail as [A, ...Array<A>]) :
            SortedMap.remove(map, key),
          journal
        )
        return Option.some(value[0])
      }
    })
  })

/** @internal */
export const takeUpTo = dual<
  (n: number) => <A>(self: TPriorityQueue.TPriorityQueue<A>) => STM.STM<Array<A>>,
  <A>(self: TPriorityQueue.TPriorityQueue<A>, n: number) => STM.STM<Array<A>>
>(2, <A>(self: TPriorityQueue.TPriorityQueue<A>, n: number) =>
  tRef.modify(self.ref, (map) => {
    const builder: Array<A> = []
    const iterator = map[Symbol.iterator]()
    let updated = map
    let index = 0
    let next: IteratorResult<readonly [A, [A, ...Array<A>]], any>
    while ((next = iterator.next()) && !next.done && index < n) {
      const [key, value] = next.value
      const [left, right] = pipe(value, Arr.splitAt(n - index))
      for (const value of left) {
        builder.push(value)
      }
      if (right.length > 0) {
        updated = SortedMap.set(updated, key, right as [A, ...Array<A>])
      } else {
        updated = SortedMap.remove(updated, key)
      }
      index = index + left.length
    }
    return [builder, updated]
  }))

/** @internal */
export const toChunk = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<Chunk.Chunk<A>> =>
  tRef.modify(self.ref, (map) => {
    const builder: Array<A> = []
    for (const entry of map) {
      for (const value of entry[1]) {
        builder.push(value)
      }
    }
    return [Chunk.unsafeFromArray(builder), map]
  })

/** @internal */
export const toArray = <A>(self: TPriorityQueue.TPriorityQueue<A>): STM.STM<Array<A>> =>
  tRef.modify(self.ref, (map) => {
    const builder: Array<A> = []
    for (const entry of map) {
      for (const value of entry[1]) {
        builder.push(value)
      }
    }
    return [builder, map]
  })
