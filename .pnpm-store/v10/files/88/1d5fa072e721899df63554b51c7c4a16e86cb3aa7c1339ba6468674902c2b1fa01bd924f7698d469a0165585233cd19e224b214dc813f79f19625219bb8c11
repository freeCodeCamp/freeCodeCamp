import * as Chunk from "../../Chunk.js"
import type { Differ } from "../../Differ.js"
import * as Dual from "../../Function.js"
import * as HashSet from "../../HashSet.js"
import { Structural } from "../data.js"

/** @internal */
export const HashSetPatchTypeId: Differ.HashSet.TypeId = Symbol.for(
  "effect/DifferHashSetPatch"
) as Differ.HashSet.TypeId

function variance<A, B>(a: A): B {
  return a as unknown as B
}

/** @internal */
const PatchProto = {
  ...Structural.prototype,
  [HashSetPatchTypeId]: {
    _Value: variance,
    _Key: variance,
    _Patch: variance
  }
}

interface Empty<Value> extends Differ.HashSet.Patch<Value> {
  readonly _tag: "Empty"
}

const EmptyProto = Object.assign(Object.create(PatchProto), {
  _tag: "Empty"
})

const _empty = Object.create(EmptyProto)

/** @internal */
export const empty = <Value>(): Differ.HashSet.Patch<Value> => _empty

interface AndThen<Value> extends Differ.HashSet.Patch<Value> {
  readonly _tag: "AndThen"
  readonly first: Differ.HashSet.Patch<Value>
  readonly second: Differ.HashSet.Patch<Value>
}

const AndThenProto = Object.assign(Object.create(PatchProto), {
  _tag: "AndThen"
})

/** @internal */
export const makeAndThen = <Value>(
  first: Differ.HashSet.Patch<Value>,
  second: Differ.HashSet.Patch<Value>
): Differ.HashSet.Patch<Value> => {
  const o = Object.create(AndThenProto)
  o.first = first
  o.second = second
  return o
}

interface Add<Value> extends Differ.HashSet.Patch<Value> {
  readonly _tag: "Add"
  readonly value: Value
}

const AddProto = Object.assign(Object.create(PatchProto), {
  _tag: "Add"
})

/** @internal */
export const makeAdd = <Value>(
  value: Value
): Differ.HashSet.Patch<Value> => {
  const o = Object.create(AddProto)
  o.value = value
  return o
}

interface Remove<Value> extends Differ.HashSet.Patch<Value> {
  readonly _tag: "Remove"
  readonly value: Value
}

const RemoveProto = Object.assign(Object.create(PatchProto), {
  _tag: "Remove"
})

/** @internal */
export const makeRemove = <Value>(
  value: Value
): Differ.HashSet.Patch<Value> => {
  const o = Object.create(RemoveProto)
  o.value = value
  return o
}

type Instruction =
  | Add<any>
  | AndThen<any>
  | Empty<any>
  | Remove<any>

/** @internal */
export const diff = <Value>(
  oldValue: HashSet.HashSet<Value>,
  newValue: HashSet.HashSet<Value>
): Differ.HashSet.Patch<Value> => {
  const [removed, patch] = HashSet.reduce(
    [oldValue, empty<Value>()] as const,
    ([set, patch], value: Value) => {
      if (HashSet.has(value)(set)) {
        return [HashSet.remove(value)(set), patch] as const
      }
      return [set, combine(makeAdd(value))(patch)] as const
    }
  )(newValue)
  return HashSet.reduce(patch, (patch, value: Value) => combine(makeRemove(value))(patch))(removed)
}

/** @internal */
export const combine = Dual.dual<
  <Value>(
    that: Differ.HashSet.Patch<Value>
  ) => (
    self: Differ.HashSet.Patch<Value>
  ) => Differ.HashSet.Patch<Value>,
  <Value>(
    self: Differ.HashSet.Patch<Value>,
    that: Differ.HashSet.Patch<Value>
  ) => Differ.HashSet.Patch<Value>
>(2, (self, that) => makeAndThen(self, that))

/** @internal */
export const patch = Dual.dual<
  <Value>(
    oldValue: HashSet.HashSet<Value>
  ) => (
    self: Differ.HashSet.Patch<Value>
  ) => HashSet.HashSet<Value>,
  <Value>(
    self: Differ.HashSet.Patch<Value>,
    oldValue: HashSet.HashSet<Value>
  ) => HashSet.HashSet<Value>
>(2, <Value>(
  self: Differ.HashSet.Patch<Value>,
  oldValue: HashSet.HashSet<Value>
) => {
  if ((self as Instruction)._tag === "Empty") {
    return oldValue
  }
  let set = oldValue
  let patches: Chunk.Chunk<Differ.HashSet.Patch<Value>> = Chunk.of(self)
  while (Chunk.isNonEmpty(patches)) {
    const head: Instruction = Chunk.headNonEmpty(patches) as Instruction
    const tail = Chunk.tailNonEmpty(patches)
    switch (head._tag) {
      case "Empty": {
        patches = tail
        break
      }
      case "AndThen": {
        patches = Chunk.prepend(head.first)(Chunk.prepend(head.second)(tail))
        break
      }
      case "Add": {
        set = HashSet.add(head.value)(set)
        patches = tail
        break
      }
      case "Remove": {
        set = HashSet.remove(head.value)(set)
        patches = tail
      }
    }
  }
  return set
})
