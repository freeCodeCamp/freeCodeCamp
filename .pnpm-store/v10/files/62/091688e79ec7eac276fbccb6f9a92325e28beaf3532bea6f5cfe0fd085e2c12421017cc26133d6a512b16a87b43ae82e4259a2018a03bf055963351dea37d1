import * as Chunk from "../../Chunk.js"
import type * as Differ from "../../Differ.js"
import * as Equal from "../../Equal.js"
import * as Dual from "../../Function.js"
import { pipe } from "../../Function.js"
import * as Data from "../data.js"

/** @internal */
export const ChunkPatchTypeId: Differ.Differ.Chunk.TypeId = Symbol.for(
  "effect/DifferChunkPatch"
) as Differ.Differ.Chunk.TypeId

function variance<A, B>(a: A): B {
  return a as unknown as B
}

const PatchProto = {
  ...Data.Structural.prototype,
  [ChunkPatchTypeId]: {
    _Value: variance,
    _Patch: variance
  }
}

interface Empty<Value, Patch> extends Differ.Differ.Chunk.Patch<Value, Patch> {
  readonly _tag: "Empty"
}

const EmptyProto = Object.assign(Object.create(PatchProto), {
  _tag: "Empty"
})

const _empty = Object.create(EmptyProto)

/**
 * @internal
 */
export const empty = <Value, Patch>(): Differ.Differ.Chunk.Patch<Value, Patch> => _empty

interface AndThen<Value, Patch> extends Differ.Differ.Chunk.Patch<Value, Patch> {
  readonly _tag: "AndThen"
  readonly first: Differ.Differ.Chunk.Patch<Value, Patch>
  readonly second: Differ.Differ.Chunk.Patch<Value, Patch>
}

const AndThenProto = Object.assign(Object.create(PatchProto), {
  _tag: "AndThen"
})

const makeAndThen = <Value, Patch>(
  first: Differ.Differ.Chunk.Patch<Value, Patch>,
  second: Differ.Differ.Chunk.Patch<Value, Patch>
): Differ.Differ.Chunk.Patch<Value, Patch> => {
  const o = Object.create(AndThenProto)
  o.first = first
  o.second = second
  return o
}

interface Append<Value, Patch> extends Differ.Differ.Chunk.Patch<Value, Patch> {
  readonly _tag: "Append"
  readonly values: Chunk.Chunk<Value>
}

const AppendProto = Object.assign(Object.create(PatchProto), {
  _tag: "Append"
})

const makeAppend = <Value, Patch>(values: Chunk.Chunk<Value>): Differ.Differ.Chunk.Patch<Value, Patch> => {
  const o = Object.create(AppendProto)
  o.values = values
  return o
}

interface Slice<Value, Patch> extends Differ.Differ.Chunk.Patch<Value, Patch> {
  readonly _tag: "Slice"
  readonly from: number
  readonly until: number
}

const SliceProto = Object.assign(Object.create(PatchProto), {
  _tag: "Slice"
})

const makeSlice = <Value, Patch>(from: number, until: number): Differ.Differ.Chunk.Patch<Value, Patch> => {
  const o = Object.create(SliceProto)
  o.from = from
  o.until = until
  return o
}

interface Update<Value, Patch> extends Differ.Differ.Chunk.Patch<Value, Patch> {
  readonly _tag: "Update"
  readonly index: number
  readonly patch: Patch
}

const UpdateProto = Object.assign(Object.create(PatchProto), {
  _tag: "Update"
})

const makeUpdate = <Value, Patch>(index: number, patch: Patch): Differ.Differ.Chunk.Patch<Value, Patch> => {
  const o = Object.create(UpdateProto)
  o.index = index
  o.patch = patch
  return o
}

type Instruction =
  | Empty<any, any>
  | AndThen<any, any>
  | Append<any, any>
  | Slice<any, any>
  | Update<any, any>

/** @internal */
export const diff = <Value, Patch>(
  options: {
    readonly oldValue: Chunk.Chunk<Value>
    readonly newValue: Chunk.Chunk<Value>
    readonly differ: Differ.Differ<Value, Patch>
  }
): Differ.Differ.Chunk.Patch<Value, Patch> => {
  let i = 0
  let patch = empty<Value, Patch>()
  while (i < options.oldValue.length && i < options.newValue.length) {
    const oldElement = Chunk.unsafeGet(i)(options.oldValue)
    const newElement = Chunk.unsafeGet(i)(options.newValue)
    const valuePatch = options.differ.diff(oldElement, newElement)
    if (!Equal.equals(valuePatch, options.differ.empty)) {
      patch = pipe(patch, combine(makeUpdate(i, valuePatch)))
    }
    i = i + 1
  }
  if (i < options.oldValue.length) {
    patch = pipe(patch, combine(makeSlice(0, i)))
  }
  if (i < options.newValue.length) {
    patch = pipe(patch, combine(makeAppend(Chunk.drop(i)(options.newValue))))
  }
  return patch
}

/** @internal */
export const combine = Dual.dual<
  <Value, Patch>(
    that: Differ.Differ.Chunk.Patch<Value, Patch>
  ) => (
    self: Differ.Differ.Chunk.Patch<Value, Patch>
  ) => Differ.Differ.Chunk.Patch<Value, Patch>,
  <Value, Patch>(
    self: Differ.Differ.Chunk.Patch<Value, Patch>,
    that: Differ.Differ.Chunk.Patch<Value, Patch>
  ) => Differ.Differ.Chunk.Patch<Value, Patch>
>(2, (self, that) => makeAndThen(self, that))

/** @internal */
export const patch = Dual.dual<
  <Value, Patch>(
    oldValue: Chunk.Chunk<Value>,
    differ: Differ.Differ<Value, Patch>
  ) => (self: Differ.Differ.Chunk.Patch<Value, Patch>) => Chunk.Chunk<Value>,
  <Value, Patch>(
    self: Differ.Differ.Chunk.Patch<Value, Patch>,
    oldValue: Chunk.Chunk<Value>,
    differ: Differ.Differ<Value, Patch>
  ) => Chunk.Chunk<Value>
>(3, <Value, Patch>(
  self: Differ.Differ.Chunk.Patch<Value, Patch>,
  oldValue: Chunk.Chunk<Value>,
  differ: Differ.Differ<Value, Patch>
) => {
  if ((self as Instruction)._tag === "Empty") {
    return oldValue
  }
  let chunk = oldValue
  let patches: Chunk.Chunk<Differ.Differ.Chunk.Patch<Value, Patch>> = Chunk.of(self)
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
      case "Append": {
        chunk = Chunk.appendAll(head.values)(chunk)
        patches = tail
        break
      }
      case "Slice": {
        const array = Chunk.toReadonlyArray(chunk)
        chunk = Chunk.unsafeFromArray(array.slice(head.from, head.until))
        patches = tail
        break
      }
      case "Update": {
        const array = Chunk.toReadonlyArray(chunk) as Array<Value>
        array[head.index] = differ.patch(head.patch, array[head.index]!)
        chunk = Chunk.unsafeFromArray(array)
        patches = tail
        break
      }
    }
  }
  return chunk
})
