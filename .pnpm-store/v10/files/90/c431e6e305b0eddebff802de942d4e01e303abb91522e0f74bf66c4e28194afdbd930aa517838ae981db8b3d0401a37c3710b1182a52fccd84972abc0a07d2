import type { Chunk } from "../Chunk.js"
import type { Context } from "../Context.js"
import type * as Differ from "../Differ.js"
import type { Either } from "../Either.js"
import * as Equal from "../Equal.js"
import * as Dual from "../Function.js"
import { constant, identity } from "../Function.js"
import type { HashMap } from "../HashMap.js"
import type { HashSet } from "../HashSet.js"
import { pipeArguments } from "../Pipeable.js"
import * as ChunkPatch from "./differ/chunkPatch.js"
import * as ContextPatch from "./differ/contextPatch.js"
import * as HashMapPatch from "./differ/hashMapPatch.js"
import * as HashSetPatch from "./differ/hashSetPatch.js"
import * as OrPatch from "./differ/orPatch.js"
import * as ReadonlyArrayPatch from "./differ/readonlyArrayPatch.js"

/** @internal */
export const DifferTypeId: Differ.TypeId = Symbol.for("effect/Differ") as Differ.TypeId

/** @internal */
export const DifferProto = {
  [DifferTypeId]: {
    _P: identity,
    _V: identity
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const make = <Value, Patch>(
  params: {
    readonly empty: Patch
    readonly diff: (oldValue: Value, newValue: Value) => Patch
    readonly combine: (first: Patch, second: Patch) => Patch
    readonly patch: (patch: Patch, oldValue: Value) => Value
  }
): Differ.Differ<Value, Patch> => {
  const differ = Object.create(DifferProto)
  differ.empty = params.empty
  differ.diff = params.diff
  differ.combine = params.combine
  differ.patch = params.patch
  return differ
}

/** @internal */
export const environment = <A>(): Differ.Differ<Context<A>, Differ.Differ.Context.Patch<A, A>> =>
  make({
    empty: ContextPatch.empty(),
    combine: (first, second) => ContextPatch.combine(second)(first),
    diff: (oldValue, newValue) => ContextPatch.diff(oldValue, newValue),
    patch: (patch, oldValue) => ContextPatch.patch(oldValue)(patch)
  })

/** @internal */
export const chunk = <Value, Patch>(
  differ: Differ.Differ<Value, Patch>
): Differ.Differ<Chunk<Value>, Differ.Differ.Chunk.Patch<Value, Patch>> =>
  make({
    empty: ChunkPatch.empty(),
    combine: (first, second) => ChunkPatch.combine(second)(first),
    diff: (oldValue, newValue) => ChunkPatch.diff({ oldValue, newValue, differ }),
    patch: (patch, oldValue) => ChunkPatch.patch(oldValue, differ)(patch)
  })

/** @internal */
export const hashMap = <Key, Value, Patch>(
  differ: Differ.Differ<Value, Patch>
): Differ.Differ<HashMap<Key, Value>, Differ.Differ.HashMap.Patch<Key, Value, Patch>> =>
  make({
    empty: HashMapPatch.empty(),
    combine: (first, second) => HashMapPatch.combine(second)(first),
    diff: (oldValue, newValue) => HashMapPatch.diff({ oldValue, newValue, differ }),
    patch: (patch, oldValue) => HashMapPatch.patch(oldValue, differ)(patch)
  })

/** @internal */
export const hashSet = <Value>(): Differ.Differ<HashSet<Value>, Differ.Differ.HashSet.Patch<Value>> =>
  make({
    empty: HashSetPatch.empty(),
    combine: (first, second) => HashSetPatch.combine(second)(first),
    diff: (oldValue, newValue) => HashSetPatch.diff(oldValue, newValue),
    patch: (patch, oldValue) => HashSetPatch.patch(oldValue)(patch)
  })

/** @internal */
export const orElseEither = Dual.dual<
  <Value2, Patch2>(that: Differ.Differ<Value2, Patch2>) => <Value, Patch>(
    self: Differ.Differ<Value, Patch>
  ) => Differ.Differ<Either<Value2, Value>, Differ.Differ.Or.Patch<Value, Value2, Patch, Patch2>>,
  <Value, Patch, Value2, Patch2>(
    self: Differ.Differ<Value, Patch>,
    that: Differ.Differ<Value2, Patch2>
  ) => Differ.Differ<Either<Value2, Value>, Differ.Differ.Or.Patch<Value, Value2, Patch, Patch2>>
>(2, (self, that) =>
  make({
    empty: OrPatch.empty(),
    combine: (first, second) => OrPatch.combine(first, second),
    diff: (oldValue, newValue) =>
      OrPatch.diff({
        oldValue,
        newValue,
        left: self,
        right: that
      }),
    patch: (patch, oldValue) =>
      OrPatch.patch(patch, {
        oldValue,
        left: self,
        right: that
      })
  }))

/** @internal */
export const readonlyArray = <Value, Patch>(
  differ: Differ.Differ<Value, Patch>
): Differ.Differ<ReadonlyArray<Value>, Differ.Differ.ReadonlyArray.Patch<Value, Patch>> =>
  make({
    empty: ReadonlyArrayPatch.empty(),
    combine: (first, second) => ReadonlyArrayPatch.combine(first, second),
    diff: (oldValue, newValue) => ReadonlyArrayPatch.diff({ oldValue, newValue, differ }),
    patch: (patch, oldValue) => ReadonlyArrayPatch.patch(patch, oldValue, differ)
  })

/** @internal */
export const transform = Dual.dual<
  <Value, Value2>(
    options: {
      readonly toNew: (value: Value) => Value2
      readonly toOld: (value: Value2) => Value
    }
  ) => <Patch>(self: Differ.Differ<Value, Patch>) => Differ.Differ<Value2, Patch>,
  <Value, Patch, Value2>(
    self: Differ.Differ<Value, Patch>,
    options: {
      readonly toNew: (value: Value) => Value2
      readonly toOld: (value: Value2) => Value
    }
  ) => Differ.Differ<Value2, Patch>
>(2, (self, { toNew, toOld }) =>
  make({
    empty: self.empty,
    combine: (first, second) => self.combine(first, second),
    diff: (oldValue, newValue) => self.diff(toOld(oldValue), toOld(newValue)),
    patch: (patch, oldValue) => toNew(self.patch(patch, toOld(oldValue)))
  }))

/** @internal */
export const update = <A>(): Differ.Differ<A, (a: A) => A> => updateWith((_, a) => a)

/** @internal */
export const updateWith = <A>(f: (x: A, y: A) => A): Differ.Differ<A, (a: A) => A> =>
  make({
    empty: identity,
    combine: (first, second) => {
      if (first === identity) {
        return second
      }
      if (second === identity) {
        return first
      }
      return (a) => second(first(a))
    },
    diff: (oldValue, newValue) => {
      if (Equal.equals(oldValue, newValue)) {
        return identity
      }
      return constant(newValue)
    },
    patch: (patch, oldValue) => f(oldValue, patch(oldValue))
  })

/** @internal */
export const zip = Dual.dual<
  <Value2, Patch2>(that: Differ.Differ<Value2, Patch2>) => <Value, Patch>(
    self: Differ.Differ<Value, Patch>
  ) => Differ.Differ<readonly [Value, Value2], readonly [Patch, Patch2]>,
  <Value, Patch, Value2, Patch2>(
    self: Differ.Differ<Value, Patch>,
    that: Differ.Differ<Value2, Patch2>
  ) => Differ.Differ<readonly [Value, Value2], readonly [Patch, Patch2]>
>(2, (self, that) =>
  make({
    empty: [self.empty, that.empty] as const,
    combine: (first, second) => [
      self.combine(first[0], second[0]),
      that.combine(first[1], second[1])
    ],
    diff: (oldValue, newValue) => [
      self.diff(oldValue[0], newValue[0]),
      that.diff(oldValue[1], newValue[1])
    ],
    patch: (patch, oldValue) => [
      self.patch(patch[0], oldValue[0]),
      that.patch(patch[1], oldValue[1])
    ]
  }))
