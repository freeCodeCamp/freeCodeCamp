import * as RA from "../../Array.js"
import * as Chunk from "../../Chunk.js"
import { dual, pipe } from "../../Function.js"
import * as HashSet from "../../HashSet.js"
import type * as Option from "../../Option.js"
import { hasProperty, type Predicate } from "../../Predicate.js"
import * as STM from "../../STM.js"
import type * as TMap from "../../TMap.js"
import type * as TSet from "../../TSet.js"
import * as core from "./core.js"
import * as tMap from "./tMap.js"

/** @internal */
const TSetSymbolKey = "effect/TSet"

/** @internal */
export const TSetTypeId: TSet.TSetTypeId = Symbol.for(
  TSetSymbolKey
) as TSet.TSetTypeId

const tSetVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
class TSetImpl<in out A> implements TSet.TSet<A> {
  readonly [TSetTypeId] = tSetVariance
  constructor(readonly tMap: TMap.TMap<A, void>) {}
}

const isTSet = (u: unknown) => hasProperty(u, TSetTypeId)

/** @internal */
export const add = dual<
  <A>(value: A) => (self: TSet.TSet<A>) => STM.STM<void>,
  <A>(self: TSet.TSet<A>, value: A) => STM.STM<void>
>(2, (self, value) => tMap.set(self.tMap, value, void 0 as void))

/** @internal */
export const difference = dual<
  <A>(other: TSet.TSet<A>) => (self: TSet.TSet<A>) => STM.STM<void>,
  <A>(self: TSet.TSet<A>, other: TSet.TSet<A>) => STM.STM<void>
>(2, (self, other) =>
  core.flatMap(
    toHashSet(other),
    (values) => removeIf(self, (value) => HashSet.has(values, value), { discard: true })
  ))

/** @internal */
export const empty = <A>(): STM.STM<TSet.TSet<A>> => fromIterable<A>([])

/** @internal */
export const forEach = dual<
  <A, R, E>(f: (value: A) => STM.STM<void, E, R>) => (self: TSet.TSet<A>) => STM.STM<void, E, R>,
  <A, R, E>(self: TSet.TSet<A>, f: (value: A) => STM.STM<void, E, R>) => STM.STM<void, E, R>
>(2, (self, f) => reduceSTM(self, void 0 as void, (_, value) => f(value)))

/** @internal */
export const fromIterable = <A>(iterable: Iterable<A>): STM.STM<TSet.TSet<A>> =>
  core.map(
    tMap.fromIterable(Array.from(iterable).map((a): [A, void] => [a, void 0])),
    (tMap) => new TSetImpl(tMap)
  )

/** @internal */
export const has = dual<
  <A>(value: A) => (self: TSet.TSet<A>) => STM.STM<boolean>,
  <A>(self: TSet.TSet<A>, value: A) => STM.STM<boolean>
>(2, (self, value) => tMap.has(self.tMap, value))

/** @internal */
export const intersection = dual<
  <A>(other: TSet.TSet<A>) => (self: TSet.TSet<A>) => STM.STM<void>,
  <A>(self: TSet.TSet<A>, other: TSet.TSet<A>) => STM.STM<void>
>(2, (self, other) =>
  core.flatMap(
    toHashSet(other),
    (values) => pipe(self, retainIf((value) => pipe(values, HashSet.has(value)), { discard: true }))
  ))

/** @internal */
export const isEmpty = <A>(self: TSet.TSet<A>): STM.STM<boolean> => tMap.isEmpty(self.tMap)

/** @internal */
export const make = <Elements extends Array<any>>(
  ...elements: Elements
): STM.STM<TSet.TSet<Elements[number]>> => fromIterable(elements)

/** @internal */
export const reduce = dual<
  <Z, A>(zero: Z, f: (accumulator: Z, value: A) => Z) => (self: TSet.TSet<A>) => STM.STM<Z>,
  <Z, A>(self: TSet.TSet<A>, zero: Z, f: (accumulator: Z, value: A) => Z) => STM.STM<Z>
>(3, (self, zero, f) =>
  tMap.reduce(
    self.tMap,
    zero,
    (acc, _, key) => f(acc, key)
  ))

/** @internal */
export const reduceSTM = dual<
  <Z, A, R, E>(zero: Z, f: (accumulator: Z, value: A) => STM.STM<Z, E, R>) => (self: TSet.TSet<A>) => STM.STM<Z, E, R>,
  <Z, A, R, E>(self: TSet.TSet<A>, zero: Z, f: (accumulator: Z, value: A) => STM.STM<Z, E, R>) => STM.STM<Z, E, R>
>(3, (self, zero, f) =>
  tMap.reduceSTM(
    self.tMap,
    zero,
    (acc, _, key) => f(acc, key)
  ))

/** @internal */
export const remove = dual<
  <A>(value: A) => (self: TSet.TSet<A>) => STM.STM<void>,
  <A>(self: TSet.TSet<A>, value: A) => STM.STM<void>
>(2, (self, value) => tMap.remove(self.tMap, value))

/** @internal */
export const removeAll = dual<
  <A>(iterable: Iterable<A>) => (self: TSet.TSet<A>) => STM.STM<void>,
  <A>(self: TSet.TSet<A>, iterable: Iterable<A>) => STM.STM<void>
>(2, (self, iterable) => tMap.removeAll(self.tMap, iterable))

/** @internal */
export const removeIf: {
  <A>(predicate: Predicate<A>, options: {
    readonly discard: true
  }): (self: TSet.TSet<A>) => STM.STM<void>
  <A>(
    predicate: Predicate<A>,
    options?: {
      readonly discard: false
    }
  ): (self: TSet.TSet<A>) => STM.STM<Array<A>>
  <A>(self: TSet.TSet<A>, predicate: Predicate<A>, options: {
    readonly discard: true
  }): STM.STM<void>
  <A>(
    self: TSet.TSet<A>,
    predicate: Predicate<A>,
    options?: {
      readonly discard: false
    }
  ): STM.STM<Array<A>>
} = dual(
  (args) => isTSet(args[0]),
  (self, predicate, options) =>
    options?.discard === true ? tMap.removeIf(self.tMap, (key) => predicate(key), { discard: true }) : pipe(
      tMap.removeIf(self.tMap, (key) => predicate(key)),
      core.map(RA.map((entry) => entry[0]))
    )
)

/** @internal */
export const retainIf: {
  <A>(predicate: Predicate<A>, options: {
    readonly discard: true
  }): (self: TSet.TSet<A>) => STM.STM<void>
  <A>(
    predicate: Predicate<A>,
    options?: {
      readonly discard: false
    }
  ): (self: TSet.TSet<A>) => STM.STM<Array<A>>
  <A>(self: TSet.TSet<A>, predicate: Predicate<A>, options: {
    readonly discard: true
  }): STM.STM<void>
  <A>(
    self: TSet.TSet<A>,
    predicate: Predicate<A>,
    options?: {
      readonly discard: false
    }
  ): STM.STM<Array<A>>
} = dual((args) => isTSet(args[0]), (self, predicate, options) =>
  options?.discard === true ?
    tMap.retainIf(self.tMap, (key) => predicate(key), { discard: true }) :
    pipe(
      tMap.retainIf(self.tMap, (key) => predicate(key)),
      core.map(RA.map((entry) => entry[0]))
    ))

/** @internal */
export const size = <A>(self: TSet.TSet<A>): STM.STM<number> => core.map(toChunk(self), (chunk) => chunk.length)

/** @internal */
export const takeFirst = dual<
  <A, B>(pf: (a: A) => Option.Option<B>) => (self: TSet.TSet<A>) => STM.STM<B>,
  <A, B>(self: TSet.TSet<A>, pf: (a: A) => Option.Option<B>) => STM.STM<B>
>(2, (self, pf) => tMap.takeFirst(self.tMap, (key) => pf(key)))

/** @internal */
export const takeFirstSTM = dual<
  <A, B, E, R>(pf: (a: A) => STM.STM<B, Option.Option<E>, R>) => (self: TSet.TSet<A>) => STM.STM<B, E, R>,
  <A, B, E, R>(self: TSet.TSet<A>, pf: (a: A) => STM.STM<B, Option.Option<E>, R>) => STM.STM<B, E, R>
>(2, (self, pf) => tMap.takeFirstSTM(self.tMap, (key) => pf(key)))

/** @internal */
export const takeSome = dual<
  <A, B>(pf: (a: A) => Option.Option<B>) => (self: TSet.TSet<A>) => STM.STM<RA.NonEmptyArray<B>>,
  <A, B>(self: TSet.TSet<A>, pf: (a: A) => Option.Option<B>) => STM.STM<RA.NonEmptyArray<B>>
>(2, (self, pf) => tMap.takeSome(self.tMap, (key) => pf(key)))

/** @internal */
export const takeSomeSTM = dual<
  <A, B, E, R>(
    pf: (a: A) => STM.STM<B, Option.Option<E>, R>
  ) => (self: TSet.TSet<A>) => STM.STM<RA.NonEmptyArray<B>, E, R>,
  <A, B, E, R>(
    self: TSet.TSet<A>,
    pf: (a: A) => STM.STM<B, Option.Option<E>, R>
  ) => STM.STM<RA.NonEmptyArray<B>, E, R>
>(2, (self, pf) => tMap.takeSomeSTM(self.tMap, (key) => pf(key)))

/** @internal */
export const toChunk = <A>(self: TSet.TSet<A>): STM.STM<Chunk.Chunk<A>> =>
  tMap.keys(self.tMap).pipe(STM.map(Chunk.unsafeFromArray))

/** @internal */
export const toHashSet = <A>(self: TSet.TSet<A>): STM.STM<HashSet.HashSet<A>> =>
  reduce(
    self,
    HashSet.empty<A>(),
    (acc, value) => pipe(acc, HashSet.add(value))
  )

/** @internal */
export const toArray = <A>(self: TSet.TSet<A>): STM.STM<Array<A>> =>
  reduce<Array<A>, A>(
    self,
    [],
    (acc, value) => [...acc, value]
  )

/** @internal */
export const toReadonlySet = <A>(self: TSet.TSet<A>): STM.STM<ReadonlySet<A>> =>
  core.map(toArray(self), (values) => new Set(values))

/** @internal */
export const transform = dual<
  <A>(f: (a: A) => A) => (self: TSet.TSet<A>) => STM.STM<void>,
  <A>(self: TSet.TSet<A>, f: (a: A) => A) => STM.STM<void>
>(2, (self, f) => tMap.transform(self.tMap, (key, value) => [f(key), value]))

/** @internal */
export const transformSTM = dual<
  <A, R, E>(f: (a: A) => STM.STM<A, E, R>) => (self: TSet.TSet<A>) => STM.STM<void, E, R>,
  <A, R, E>(self: TSet.TSet<A>, f: (a: A) => STM.STM<A, E, R>) => STM.STM<void, E, R>
>(2, (self, f) =>
  tMap.transformSTM(
    self.tMap,
    (key, value) => core.map(f(key), (a) => [a, value])
  ))

/** @internal */
export const union = dual<
  <A>(other: TSet.TSet<A>) => (self: TSet.TSet<A>) => STM.STM<void>,
  <A>(self: TSet.TSet<A>, other: TSet.TSet<A>) => STM.STM<void>
>(2, (self, other) => forEach(other, (value) => add(self, value)))
