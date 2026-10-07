import * as Equal from "../../Equal.js"
import { dual, pipe } from "../../Function.js"
import * as Option from "../../Option.js"
import * as Order from "../../Order.js"
import type { Predicate } from "../../Predicate.js"
import type * as STM from "../../STM.js"
import type * as TArray from "../../TArray.js"
import type * as TRef from "../../TRef.js"
import * as core from "./core.js"
import * as stm from "./stm.js"
import * as tRef from "./tRef.js"

/** @internal */
const TArraySymbolKey = "effect/TArray"

/** @internal */
export const TArrayTypeId: TArray.TArrayTypeId = Symbol.for(TArraySymbolKey) as TArray.TArrayTypeId

const tArrayVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
export class TArrayImpl<in out A> implements TArray.TArray<A> {
  readonly [TArrayTypeId] = tArrayVariance
  constructor(readonly chunk: Array<TRef.TRef<A>>) {}
}

/** @internal */
export const collectFirst = dual<
  <A, B>(pf: (a: A) => Option.Option<B>) => (self: TArray.TArray<A>) => STM.STM<Option.Option<B>>,
  <A, B>(self: TArray.TArray<A>, pf: (a: A) => Option.Option<B>) => STM.STM<Option.Option<B>>
>(2, (self, pf) =>
  collectFirstSTM(
    self,
    (a) => pipe(pf(a), Option.map(core.succeed))
  ))

/** @internal */
export const collectFirstSTM = dual<
  <A, B, E, R>(
    pf: (a: A) => Option.Option<STM.STM<B, E, R>>
  ) => (
    self: TArray.TArray<A>
  ) => STM.STM<Option.Option<B>, E, R>,
  <A, B, E, R>(
    self: TArray.TArray<A>,
    pf: (a: A) => Option.Option<STM.STM<B, E, R>>
  ) => STM.STM<Option.Option<B>, E, R>
>(
  2,
  <A, B, E, R>(self: TArray.TArray<A>, pf: (a: A) => Option.Option<STM.STM<B, E, R>>) =>
    core.withSTMRuntime((runtime) => {
      let index = 0
      let result: Option.Option<STM.STM<B, E, R>> = Option.none()
      while (Option.isNone(result) && index < self.chunk.length) {
        const element = pipe(self.chunk[index], tRef.unsafeGet(runtime.journal))
        const option = pf(element)
        if (Option.isSome(option)) {
          result = option
        }
        index = index + 1
      }
      return pipe(
        result,
        Option.match({
          onNone: () => stm.succeedNone,
          onSome: core.map(Option.some)
        })
      )
    })
)

/** @internal */
export const contains = dual<
  <A>(value: A) => (self: TArray.TArray<A>) => STM.STM<boolean>,
  <A>(self: TArray.TArray<A>, value: A) => STM.STM<boolean>
>(2, (self, value) => some(self, (a) => Equal.equals(a)(value)))

/** @internal */
export const count = dual<
  <A>(predicate: Predicate<A>) => (self: TArray.TArray<A>) => STM.STM<number>,
  <A>(self: TArray.TArray<A>, predicate: Predicate<A>) => STM.STM<number>
>(2, (self, predicate) =>
  reduce(
    self,
    0,
    (n, a) => predicate(a) ? n + 1 : n
  ))

/** @internal */
export const countSTM = dual<
  <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>) => (self: TArray.TArray<A>) => STM.STM<number, E, R>,
  <A, R, E>(self: TArray.TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>) => STM.STM<number, E, R>
>(2, (self, predicate) =>
  reduceSTM(
    self,
    0,
    (n, a) => core.map(predicate(a), (bool) => bool ? n + 1 : n)
  ))

/** @internal */
export const empty = <A>(): STM.STM<TArray.TArray<A>> => fromIterable<A>([])

/** @internal */
export const every = dual<
  <A>(predicate: Predicate<A>) => (self: TArray.TArray<A>) => STM.STM<boolean>,
  <A>(self: TArray.TArray<A>, predicate: Predicate<A>) => STM.STM<boolean>
>(2, (self, predicate) => stm.negate(some(self, (a) => !predicate(a))))

/** @internal */
export const everySTM = dual<
  <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>) => (self: TArray.TArray<A>) => STM.STM<boolean, E, R>,
  <A, R, E>(self: TArray.TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>) => STM.STM<boolean, E, R>
>(2, (self, predicate) =>
  core.map(
    countSTM(self, predicate),
    (count) => count === self.chunk.length
  ))

/** @internal */
export const findFirst = dual<
  <A>(predicate: Predicate<A>) => (self: TArray.TArray<A>) => STM.STM<Option.Option<A>>,
  <A>(self: TArray.TArray<A>, predicate: Predicate<A>) => STM.STM<Option.Option<A>>
>(2, (self, predicate) =>
  collectFirst(self, (a) =>
    predicate(a)
      ? Option.some(a)
      : Option.none()))

/** @internal */
export const findFirstIndex = dual<
  <A>(value: A) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>>,
  <A>(self: TArray.TArray<A>, value: A) => STM.STM<Option.Option<number>>
>(2, (self, value) => findFirstIndexFrom(self, value, 0))

/** @internal */
export const findFirstIndexFrom = dual<
  <A>(value: A, from: number) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>>,
  <A>(self: TArray.TArray<A>, value: A, from: number) => STM.STM<Option.Option<number>>
>(3, (self, value, from) =>
  findFirstIndexWhereFrom(
    self,
    (a) => Equal.equals(a)(value),
    from
  ))

/** @internal */
export const findFirstIndexWhere = dual<
  <A>(predicate: Predicate<A>) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>>,
  <A>(self: TArray.TArray<A>, predicate: Predicate<A>) => STM.STM<Option.Option<number>>
>(2, (self, predicate) => findFirstIndexWhereFrom(self, predicate, 0))

/** @internal */
export const findFirstIndexWhereFrom = dual<
  <A>(
    predicate: Predicate<A>,
    from: number
  ) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>>,
  <A>(self: TArray.TArray<A>, predicate: Predicate<A>, from: number) => STM.STM<Option.Option<number>>
>(3, (self, predicate, from) => {
  if (from < 0) {
    return stm.succeedNone
  }
  return core.effect<never, Option.Option<number>>((journal) => {
    let index: number = from
    let found = false
    while (!found && index < self.chunk.length) {
      const element = tRef.unsafeGet(self.chunk[index], journal)
      found = predicate(element)
      index = index + 1
    }
    if (found) {
      return Option.some(index - 1)
    }
    return Option.none()
  })
})

/** @internal */
export const findFirstIndexWhereSTM = dual<
  <A, R, E>(
    predicate: (value: A) => STM.STM<boolean, E, R>
  ) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>, E, R>,
  <A, R, E>(
    self: TArray.TArray<A>,
    predicate: (value: A) => STM.STM<boolean, E, R>
  ) => STM.STM<Option.Option<number>, E, R>
>(2, (self, predicate) => findFirstIndexWhereFromSTM(self, predicate, 0))

/** @internal */
export const findFirstIndexWhereFromSTM = dual<
  <A, R, E>(
    predicate: (value: A) => STM.STM<boolean, E, R>,
    from: number
  ) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>, E, R>,
  <A, R, E>(
    self: TArray.TArray<A>,
    predicate: (value: A) => STM.STM<boolean, E, R>,
    from: number
  ) => STM.STM<Option.Option<number>, E, R>
>(3, <A, R, E>(
  self: TArray.TArray<A>,
  predicate: (value: A) => STM.STM<boolean, E, R>,
  from: number
) => {
  const forIndex = (index: number): STM.STM<Option.Option<number>, E, R> =>
    index < self.chunk.length
      ? pipe(
        tRef.get(self.chunk[index]),
        core.flatMap(predicate),
        core.flatMap((bool) =>
          bool ?
            core.succeed(Option.some(index)) :
            forIndex(index + 1)
        )
      )
      : stm.succeedNone
  return from < 0
    ? stm.succeedNone
    : forIndex(from)
})

/** @internal */
export const findFirstSTM = dual<
  <A, R, E>(
    predicate: (value: A) => STM.STM<boolean, E, R>
  ) => (
    self: TArray.TArray<A>
  ) => STM.STM<Option.Option<A>, E, R>,
  <A, R, E>(
    self: TArray.TArray<A>,
    predicate: (value: A) => STM.STM<boolean, E, R>
  ) => STM.STM<Option.Option<A>, E, R>
>(2, <A, R, E>(self: TArray.TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>) => {
  const init = [Option.none() as Option.Option<A>, 0 as number] as const
  const cont = (state: readonly [Option.Option<A>, number]) =>
    Option.isNone(state[0]) && state[1] < self.chunk.length - 1
  return core.map(
    stm.iterate(init, {
      while: cont,
      body: (state) => {
        const index = state[1]
        return pipe(
          tRef.get(self.chunk[index]),
          core.flatMap((value) =>
            core.map(
              predicate(value),
              (bool) => [bool ? Option.some(value) : Option.none(), index + 1] as const
            )
          )
        )
      }
    }),
    (state) => state[0]
  )
})

/** @internal */
export const findLast = dual<
  <A>(predicate: Predicate<A>) => (self: TArray.TArray<A>) => STM.STM<Option.Option<A>>,
  <A>(self: TArray.TArray<A>, predicate: Predicate<A>) => STM.STM<Option.Option<A>>
>(2, <A>(self: TArray.TArray<A>, predicate: Predicate<A>) =>
  core.effect<never, Option.Option<A>>((journal) => {
    let index = self.chunk.length - 1
    let result: Option.Option<A> = Option.none()
    while (Option.isNone(result) && index >= 0) {
      const element = tRef.unsafeGet(self.chunk[index], journal)
      if (predicate(element)) {
        result = Option.some(element)
      }
      index = index - 1
    }
    return result
  }))

/** @internal */
export const findLastIndex = dual<
  <A>(value: A) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>>,
  <A>(self: TArray.TArray<A>, value: A) => STM.STM<Option.Option<number>>
>(2, (self, value) => findLastIndexFrom(self, value, self.chunk.length - 1))

/** @internal */
export const findLastIndexFrom = dual<
  <A>(value: A, end: number) => (self: TArray.TArray<A>) => STM.STM<Option.Option<number>>,
  <A>(self: TArray.TArray<A>, value: A, end: number) => STM.STM<Option.Option<number>>
>(3, (self, value, end) => {
  if (end >= self.chunk.length) {
    return stm.succeedNone
  }
  return core.effect<never, Option.Option<number>>((journal) => {
    let index: number = end
    let found = false
    while (!found && index >= 0) {
      const element = tRef.unsafeGet(self.chunk[index], journal)
      found = Equal.equals(element)(value)
      index = index - 1
    }
    if (found) {
      return Option.some(index + 1)
    }
    return Option.none()
  })
})

/** @internal */
export const findLastSTM = dual<
  <A, R, E>(
    predicate: (value: A) => STM.STM<boolean, E, R>
  ) => (self: TArray.TArray<A>) => STM.STM<Option.Option<A>, E, R>,
  <A, R, E>(
    self: TArray.TArray<A>,
    predicate: (value: A) => STM.STM<boolean, E, R>
  ) => STM.STM<Option.Option<A>, E, R>
>(2, <A, R, E>(self: TArray.TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>) => {
  const init = [Option.none() as Option.Option<A>, self.chunk.length - 1] as const
  const cont = (state: readonly [Option.Option<A>, number]) => Option.isNone(state[0]) && state[1] >= 0
  return core.map(
    stm.iterate(init, {
      while: cont,
      body: (state) => {
        const index = state[1]
        return pipe(
          tRef.get(self.chunk[index]),
          core.flatMap((value) =>
            core.map(
              predicate(value),
              (bool) => [bool ? Option.some(value) : Option.none(), index - 1] as const
            )
          )
        )
      }
    }),
    (state) => state[0]
  )
})

/** @internal */
export const forEach = dual<
  <A, R, E>(f: (value: A) => STM.STM<void, E, R>) => (self: TArray.TArray<A>) => STM.STM<void, E, R>,
  <A, R, E>(self: TArray.TArray<A>, f: (value: A) => STM.STM<void, E, R>) => STM.STM<void, E, R>
>(2, (self, f) => reduceSTM(self, void 0 as void, (_, a) => f(a)))

/** @internal */
export const fromIterable = <A>(iterable: Iterable<A>): STM.STM<TArray.TArray<A>> =>
  core.map(
    stm.forEach(iterable, tRef.make),
    (chunk) => new TArrayImpl(chunk)
  )

/** @internal */
export const get = dual<
  (index: number) => <A>(self: TArray.TArray<A>) => STM.STM<A>,
  <A>(self: TArray.TArray<A>, index: number) => STM.STM<A>
>(2, (self, index) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds")
  }
  return tRef.get(self.chunk[index])
})

/** @internal */
export const headOption = <A>(self: TArray.TArray<A>): STM.STM<Option.Option<A>> =>
  self.chunk.length === 0 ?
    core.succeed(Option.none()) :
    core.map(tRef.get(self.chunk[0]), Option.some)

/** @internal */
export const lastOption = <A>(self: TArray.TArray<A>): STM.STM<Option.Option<A>> =>
  self.chunk.length === 0 ?
    stm.succeedNone :
    core.map(tRef.get(self.chunk[self.chunk.length - 1]), Option.some)

/** @internal */
export const make = <Elements extends [any, ...Array<any>]>(
  ...elements: Elements
): STM.STM<TArray.TArray<Elements[number]>> => fromIterable(elements)

/** @internal */
export const maxOption = dual<
  <A>(order: Order.Order<A>) => (self: TArray.TArray<A>) => STM.STM<Option.Option<A>>,
  <A>(self: TArray.TArray<A>, order: Order.Order<A>) => STM.STM<Option.Option<A>>
>(2, (self, order) => {
  const greaterThan = Order.greaterThan(order)
  return reduceOption(self, (acc, curr) => greaterThan(acc)(curr) ? curr : acc)
})

/** @internal */
export const minOption = dual<
  <A>(order: Order.Order<A>) => (self: TArray.TArray<A>) => STM.STM<Option.Option<A>>,
  <A>(self: TArray.TArray<A>, order: Order.Order<A>) => STM.STM<Option.Option<A>>
>(2, (self, order) => {
  const lessThan = Order.lessThan(order)
  return reduceOption(self, (acc, curr) => lessThan(acc)(curr) ? curr : acc)
})

/** @internal */
export const reduce = dual<
  <Z, A>(zero: Z, f: (accumulator: Z, current: A) => Z) => (self: TArray.TArray<A>) => STM.STM<Z>,
  <Z, A>(self: TArray.TArray<A>, zero: Z, f: (accumulator: Z, current: A) => Z) => STM.STM<Z>
>(
  3,
  <Z, A>(self: TArray.TArray<A>, zero: Z, f: (accumulator: Z, current: A) => Z) =>
    core.effect<never, Z>((journal) => {
      let index = 0
      let result = zero
      while (index < self.chunk.length) {
        const element = tRef.unsafeGet(self.chunk[index], journal)
        result = f(result, element)
        index = index + 1
      }
      return result
    })
)

/** @internal */
export const reduceOption = dual<
  <A>(f: (x: A, y: A) => A) => (self: TArray.TArray<A>) => STM.STM<Option.Option<A>>,
  <A>(self: TArray.TArray<A>, f: (x: A, y: A) => A) => STM.STM<Option.Option<A>>
>(
  2,
  <A>(self: TArray.TArray<A>, f: (x: A, y: A) => A) =>
    core.effect<never, Option.Option<A>>((journal) => {
      let index = 0
      let result: A | undefined = undefined
      while (index < self.chunk.length) {
        const element = tRef.unsafeGet(self.chunk[index], journal)
        result = result === undefined ? element : f(result, element)
        index = index + 1
      }
      return Option.fromNullable(result)
    })
)

/** @internal */
export const reduceOptionSTM = dual<
  <A, R, E>(f: (x: A, y: A) => STM.STM<A, E, R>) => (self: TArray.TArray<A>) => STM.STM<Option.Option<A>, E, R>,
  <A, R, E>(self: TArray.TArray<A>, f: (x: A, y: A) => STM.STM<A, E, R>) => STM.STM<Option.Option<A>, E, R>
>(
  2,
  <A, R, E>(self: TArray.TArray<A>, f: (x: A, y: A) => STM.STM<A, E, R>) =>
    reduceSTM(self, Option.none<A>(), (acc, curr) =>
      Option.isSome(acc)
        ? core.map(f(acc.value, curr), Option.some)
        : stm.succeedSome(curr))
)

/** @internal */
export const reduceSTM = dual<
  <Z, A, R, E>(
    zero: Z,
    f: (accumulator: Z, current: A) => STM.STM<Z, E, R>
  ) => (self: TArray.TArray<A>) => STM.STM<Z, E, R>,
  <Z, A, R, E>(
    self: TArray.TArray<A>,
    zero: Z,
    f: (accumulator: Z, current: A) => STM.STM<Z, E, R>
  ) => STM.STM<Z, E, R>
>(3, (self, zero, f) =>
  core.flatMap(
    toArray(self),
    stm.reduce(zero, f)
  ))

/** @internal */
export const size = <A>(self: TArray.TArray<A>): number => self.chunk.length

/** @internal */
export const some = dual<
  <A>(predicate: Predicate<A>) => (self: TArray.TArray<A>) => STM.STM<boolean>,
  <A>(self: TArray.TArray<A>, predicate: Predicate<A>) => STM.STM<boolean>
>(2, (self, predicate) =>
  core.map(
    findFirst(self, predicate),
    Option.isSome
  ))

/** @internal */
export const someSTM = dual<
  <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>) => (self: TArray.TArray<A>) => STM.STM<boolean, E, R>,
  <A, R, E>(self: TArray.TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>) => STM.STM<boolean, E, R>
>(2, (self, predicate) => core.map(countSTM(self, predicate), (n) => n > 0))

/** @internal */
export const toArray = <A>(self: TArray.TArray<A>): STM.STM<Array<A>> => stm.forEach(self.chunk, tRef.get)

/** @internal */
export const transform = dual<
  <A>(f: (value: A) => A) => (self: TArray.TArray<A>) => STM.STM<void>,
  <A>(self: TArray.TArray<A>, f: (value: A) => A) => STM.STM<void>
>(2, (self, f) =>
  core.effect<never, void>((journal) => {
    let index = 0
    while (index < self.chunk.length) {
      const ref = self.chunk[index]
      tRef.unsafeSet(ref, f(tRef.unsafeGet(ref, journal)), journal)
      index = index + 1
    }
    return void 0
  }))

/** @internal */
export const transformSTM = dual<
  <A, R, E>(f: (value: A) => STM.STM<A, E, R>) => (self: TArray.TArray<A>) => STM.STM<void, E, R>,
  <A, R, E>(self: TArray.TArray<A>, f: (value: A) => STM.STM<A, E, R>) => STM.STM<void, E, R>
>(2, <A, R, E>(self: TArray.TArray<A>, f: (value: A) => STM.STM<A, E, R>) =>
  core.flatMap(
    stm.forEach(
      self.chunk,
      (ref) => core.flatMap(tRef.get(ref), f)
    ),
    (chunk) =>
      core.effect<never, void>((journal) => {
        const iterator = chunk[Symbol.iterator]()
        let index = 0
        let next: IteratorResult<A>
        while ((next = iterator.next()) && !next.done) {
          tRef.unsafeSet(self.chunk[index], next.value, journal)
          index = index + 1
        }
        return void 0
      })
  ))

/** @internal */
export const update = dual<
  <A>(index: number, f: (value: A) => A) => (self: TArray.TArray<A>) => STM.STM<void>,
  <A>(self: TArray.TArray<A>, index: number, f: (value: A) => A) => STM.STM<void>
>(3, (self, index, f) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds")
  }
  return tRef.update(self.chunk[index], f)
})

/** @internal */
export const updateSTM = dual<
  <A, R, E>(index: number, f: (value: A) => STM.STM<A, E, R>) => (self: TArray.TArray<A>) => STM.STM<void, E, R>,
  <A, R, E>(self: TArray.TArray<A>, index: number, f: (value: A) => STM.STM<A, E, R>) => STM.STM<void, E, R>
>(3, (self, index, f) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds")
  }
  return pipe(
    tRef.get(self.chunk[index]),
    core.flatMap(f),
    core.flatMap((updated) => tRef.set(self.chunk[index], updated))
  )
})
