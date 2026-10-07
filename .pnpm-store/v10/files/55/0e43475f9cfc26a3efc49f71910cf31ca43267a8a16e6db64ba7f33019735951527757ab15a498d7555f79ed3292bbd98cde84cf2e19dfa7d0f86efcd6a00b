import * as Context from "../../Context.js"
import { pipe } from "../../Function.js"
import * as Layer from "../../Layer.js"
import type * as STM from "../../STM.js"
import type * as TArray from "../../TArray.js"
import type * as TRandom from "../../TRandom.js"
import type * as TRef from "../../TRef.js"
import * as Random from "../../Utils.js"
import * as core from "./core.js"
import * as stm from "./stm.js"
import * as tArray from "./tArray.js"
import * as tRef from "./tRef.js"

const TRandomSymbolKey = "effect/TRandom"

/** @internal */
export const TRandomTypeId: TRandom.TRandomTypeId = Symbol.for(
  TRandomSymbolKey
) as TRandom.TRandomTypeId

const randomInteger = (state: Random.PCGRandomState): [number, Random.PCGRandomState] => {
  const prng = new Random.PCGRandom()
  prng.setState(state)
  return [prng.integer(0), prng.getState()]
}

const randomIntegerBetween = (low: number, high: number) => {
  return (state: Random.PCGRandomState): [number, Random.PCGRandomState] => {
    const prng = new Random.PCGRandom()
    prng.setState(state)
    return [prng.integer(high - low) + low, prng.getState()]
  }
}

const randomNumber = (state: Random.PCGRandomState): [number, Random.PCGRandomState] => {
  const prng = new Random.PCGRandom()
  prng.setState(state)
  return [prng.number(), prng.getState()]
}

const withState = <A>(
  state: TRef.TRef<Random.PCGRandomState>,
  f: (state: Random.PCGRandomState) => [A, Random.PCGRandomState]
): STM.STM<A> => {
  return pipe(state, tRef.modify(f))
}

const shuffleWith = <A>(
  iterable: Iterable<A>,
  nextIntBounded: (n: number) => STM.STM<number>
): STM.STM<Array<A>> => {
  const swap = (buffer: TArray.TArray<A>, index1: number, index2: number): STM.STM<void> =>
    pipe(
      buffer,
      tArray.get(index1),
      core.flatMap((tmp) =>
        pipe(
          buffer,
          tArray.updateSTM(index1, () => pipe(buffer, tArray.get(index2))),
          core.zipRight(
            pipe(
              buffer,
              tArray.update(index2, () => tmp)
            )
          )
        )
      )
    )
  return pipe(
    tArray.fromIterable(iterable),
    core.flatMap((buffer) => {
      const array: Array<number> = []
      for (let i = array.length; i >= 2; i = i - 1) {
        array.push(i)
      }
      return pipe(
        array,
        stm.forEach((n) => pipe(nextIntBounded(n), core.flatMap((k) => swap(buffer, n - 1, k))), { discard: true }),
        core.zipRight(tArray.toArray(buffer))
      )
    })
  )
}

/** @internal */
export const Tag = Context.GenericTag<TRandom.TRandom>("effect/TRandom")

class TRandomImpl implements TRandom.TRandom {
  readonly [TRandomTypeId]: TRandom.TRandomTypeId = TRandomTypeId
  constructor(readonly state: TRef.TRef<Random.PCGRandomState>) {
    this.next = withState(this.state, randomNumber)
    this.nextBoolean = core.flatMap(this.next, (n) => core.succeed(n > 0.5))
    this.nextInt = withState(this.state, randomInteger)
  }

  next: STM.STM<number>
  nextBoolean: STM.STM<boolean>
  nextInt: STM.STM<number>

  nextRange(min: number, max: number): STM.STM<number> {
    return core.flatMap(this.next, (n) => core.succeed((max - min) * n + min))
  }
  nextIntBetween(low: number, high: number): STM.STM<number> {
    return withState(this.state, randomIntegerBetween(low, high))
  }
  shuffle<A>(elements: Iterable<A>): STM.STM<Array<A>> {
    return shuffleWith(elements, (n) => this.nextIntBetween(0, n))
  }
}

/** @internal */
export const live: Layer.Layer<TRandom.TRandom> = Layer.effect(
  Tag,
  pipe(
    tRef.make(new Random.PCGRandom((Math.random() * 4294967296) >>> 0).getState()),
    core.map((seed) => new TRandomImpl(seed)),
    core.commit
  )
)

/** @internal */
export const next: STM.STM<number, never, TRandom.TRandom> = core.flatMap(Tag, (random) => random.next)

/** @internal */
export const nextBoolean: STM.STM<boolean, never, TRandom.TRandom> = core.flatMap(Tag, (random) => random.nextBoolean)

/** @internal */
export const nextInt: STM.STM<number, never, TRandom.TRandom> = core.flatMap(Tag, (random) => random.nextInt)

/** @internal */
export const nextIntBetween = (low: number, high: number): STM.STM<number, never, TRandom.TRandom> =>
  core.flatMap(Tag, (random) => random.nextIntBetween(low, high))

/** @internal */
export const nextRange = (min: number, max: number): STM.STM<number, never, TRandom.TRandom> =>
  core.flatMap(Tag, (random) => random.nextRange(min, max))

/** @internal */
export const shuffle = <A>(elements: Iterable<A>): STM.STM<Array<A>, never, TRandom.TRandom> =>
  core.flatMap(Tag, (random) => random.shuffle(elements))
