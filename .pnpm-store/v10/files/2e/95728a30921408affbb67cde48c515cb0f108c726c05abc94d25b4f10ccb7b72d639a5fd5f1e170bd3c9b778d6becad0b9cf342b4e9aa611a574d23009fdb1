import * as Arr from "../../Array.js"
import type * as Differ from "../../Differ.js"
import * as Equal from "../../Equal.js"
import * as Dual from "../../Function.js"
import * as Data from "../data.js"

/** @internal */
export const ReadonlyArrayPatchTypeId: Differ.Differ.ReadonlyArray.TypeId = Symbol.for(
  "effect/DifferReadonlyArrayPatch"
) as Differ.Differ.ReadonlyArray.TypeId

function variance<A, B>(a: A): B {
  return a as unknown as B
}

const PatchProto = {
  ...Data.Structural.prototype,
  [ReadonlyArrayPatchTypeId]: {
    _Value: variance,
    _Patch: variance
  }
}

interface Empty<Value, Patch> extends Differ.Differ.ReadonlyArray.Patch<Value, Patch> {
  readonly _tag: "Empty"
}

const EmptyProto = Object.assign(Object.create(PatchProto), {
  _tag: "Empty"
})

const _empty = Object.create(EmptyProto)

/**
 * @internal
 */
export const empty = <Value, Patch>(): Differ.Differ.ReadonlyArray.Patch<Value, Patch> => _empty

interface AndThen<Value, Patch> extends Differ.Differ.ReadonlyArray.Patch<Value, Patch> {
  readonly _tag: "AndThen"
  readonly first: Differ.Differ.ReadonlyArray.Patch<Value, Patch>
  readonly second: Differ.Differ.ReadonlyArray.Patch<Value, Patch>
}

const AndThenProto = Object.assign(Object.create(PatchProto), {
  _tag: "AndThen"
})

const makeAndThen = <Value, Patch>(
  first: Differ.Differ.ReadonlyArray.Patch<Value, Patch>,
  second: Differ.Differ.ReadonlyArray.Patch<Value, Patch>
): Differ.Differ.ReadonlyArray.Patch<Value, Patch> => {
  const o = Object.create(AndThenProto)
  o.first = first
  o.second = second
  return o
}

interface Append<Value, Patch> extends Differ.Differ.ReadonlyArray.Patch<Value, Patch> {
  readonly _tag: "Append"
  readonly values: ReadonlyArray<Value>
}

const AppendProto = Object.assign(Object.create(PatchProto), {
  _tag: "Append"
})

const makeAppend = <Value, Patch>(values: ReadonlyArray<Value>): Differ.Differ.ReadonlyArray.Patch<Value, Patch> => {
  const o = Object.create(AppendProto)
  o.values = values
  return o
}

interface Slice<Value, Patch> extends Differ.Differ.ReadonlyArray.Patch<Value, Patch> {
  readonly _tag: "Slice"
  readonly from: number
  readonly until: number
}

const SliceProto = Object.assign(Object.create(PatchProto), {
  _tag: "Slice"
})

const makeSlice = <Value, Patch>(from: number, until: number): Differ.Differ.ReadonlyArray.Patch<Value, Patch> => {
  const o = Object.create(SliceProto)
  o.from = from
  o.until = until
  return o
}

interface Update<Value, Patch> extends Differ.Differ.ReadonlyArray.Patch<Value, Patch> {
  readonly _tag: "Update"
  readonly index: number
  readonly patch: Patch
}

const UpdateProto = Object.assign(Object.create(PatchProto), {
  _tag: "Update"
})

const makeUpdate = <Value, Patch>(index: number, patch: Patch): Differ.Differ.ReadonlyArray.Patch<Value, Patch> => {
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
    readonly oldValue: ReadonlyArray<Value>
    readonly newValue: ReadonlyArray<Value>
    readonly differ: Differ.Differ<Value, Patch>
  }
): Differ.Differ.ReadonlyArray.Patch<Value, Patch> => {
  let i = 0
  let patch = empty<Value, Patch>()
  while (i < options.oldValue.length && i < options.newValue.length) {
    const oldElement = options.oldValue[i]!
    const newElement = options.newValue[i]!
    const valuePatch = options.differ.diff(oldElement, newElement)
    if (!Equal.equals(valuePatch, options.differ.empty)) {
      patch = combine(patch, makeUpdate(i, valuePatch))
    }
    i = i + 1
  }
  if (i < options.oldValue.length) {
    patch = combine(patch, makeSlice(0, i))
  }
  if (i < options.newValue.length) {
    patch = combine(patch, makeAppend(Arr.drop(i)(options.newValue)))
  }
  return patch
}

/** @internal */
export const combine = Dual.dual<
  <Value, Patch>(
    that: Differ.Differ.ReadonlyArray.Patch<Value, Patch>
  ) => (
    self: Differ.Differ.ReadonlyArray.Patch<Value, Patch>
  ) => Differ.Differ.ReadonlyArray.Patch<Value, Patch>,
  <Value, Patch>(
    self: Differ.Differ.ReadonlyArray.Patch<Value, Patch>,
    that: Differ.Differ.ReadonlyArray.Patch<Value, Patch>
  ) => Differ.Differ.ReadonlyArray.Patch<Value, Patch>
>(2, (self, that) => makeAndThen(self, that))

/** @internal */
export const patch = Dual.dual<
  <Value, Patch>(
    oldValue: ReadonlyArray<Value>,
    differ: Differ.Differ<Value, Patch>
  ) => (self: Differ.Differ.ReadonlyArray.Patch<Value, Patch>) => ReadonlyArray<Value>,
  <Value, Patch>(
    self: Differ.Differ.ReadonlyArray.Patch<Value, Patch>,
    oldValue: ReadonlyArray<Value>,
    differ: Differ.Differ<Value, Patch>
  ) => ReadonlyArray<Value>
>(3, <Value, Patch>(
  self: Differ.Differ.ReadonlyArray.Patch<Value, Patch>,
  oldValue: ReadonlyArray<Value>,
  differ: Differ.Differ<Value, Patch>
) => {
  if ((self as Instruction)._tag === "Empty") {
    return oldValue
  }
  let readonlyArray = oldValue.slice()
  let patches: Array<Differ.Differ.ReadonlyArray.Patch<Value, Patch>> = Arr.of(self)
  while (Arr.isNonEmptyArray(patches)) {
    const head: Instruction = Arr.headNonEmpty(patches) as Instruction
    const tail = Arr.tailNonEmpty(patches)
    switch (head._tag) {
      case "Empty": {
        patches = tail
        break
      }
      case "AndThen": {
        tail.unshift(head.first, head.second)
        patches = tail
        break
      }
      case "Append": {
        for (const value of head.values) {
          readonlyArray.push(value)
        }
        patches = tail
        break
      }
      case "Slice": {
        readonlyArray = readonlyArray.slice(head.from, head.until)
        patches = tail
        break
      }
      case "Update": {
        readonlyArray[head.index] = differ.patch(head.patch, readonlyArray[head.index]!)
        patches = tail
        break
      }
    }
  }
  return readonlyArray
})
