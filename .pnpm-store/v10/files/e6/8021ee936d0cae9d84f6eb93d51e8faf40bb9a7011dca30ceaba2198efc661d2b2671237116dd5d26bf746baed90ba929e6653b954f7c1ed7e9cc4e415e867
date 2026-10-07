import * as Chunk from "../../Chunk.js"
import type { Differ } from "../../Differ.js"
import type { Either } from "../../Either.js"
import * as E from "../../Either.js"
import * as Equal from "../../Equal.js"
import * as Dual from "../../Function.js"
import { Structural } from "../data.js"

/** @internal */
export const OrPatchTypeId: Differ.Or.TypeId = Symbol.for("effect/DifferOrPatch") as Differ.Or.TypeId

function variance<A, B>(a: A): B {
  return a as unknown as B
}

/** @internal */
const PatchProto = {
  ...Structural.prototype,
  [OrPatchTypeId]: {
    _Value: variance,
    _Key: variance,
    _Patch: variance
  }
}

/** @internal */
export interface Empty<in out Value, in out Value2, in out Patch, in out Patch2>
  extends Differ.Or.Patch<Value, Value2, Patch, Patch2>
{
  readonly _tag: "Empty"
}

const EmptyProto = Object.assign(Object.create(PatchProto), {
  _tag: "Empty"
})

const _empty = Object.create(EmptyProto)

/** @internal */
export const empty = <Value, Value2, Patch, Patch2>(): Differ.Or.Patch<
  Value,
  Value2,
  Patch,
  Patch2
> => _empty

/** @internal */
export interface AndThen<in out Value, in out Value2, in out Patch, Patch2>
  extends Differ.Or.Patch<Value, Value2, Patch, Patch2>
{
  readonly _tag: "AndThen"
  readonly first: Differ.Or.Patch<Value, Value2, Patch, Patch2>
  readonly second: Differ.Or.Patch<Value, Value2, Patch, Patch2>
}

const AndThenProto = Object.assign(Object.create(PatchProto), {
  _tag: "AndThen"
})

/** @internal */
export const makeAndThen = <Value, Value2, Patch, Patch2>(
  first: Differ.Or.Patch<Value, Value2, Patch, Patch2>,
  second: Differ.Or.Patch<Value, Value2, Patch, Patch2>
): Differ.Or.Patch<
  Value,
  Value2,
  Patch,
  Patch2
> => {
  const o = Object.create(AndThenProto)
  o.first = first
  o.second = second
  return o
}

/** @internal */
export interface SetLeft<in out Value, in out Value2, in out Patch, Patch2>
  extends Differ.Or.Patch<Value, Value2, Patch, Patch2>
{
  readonly _tag: "SetLeft"
  readonly value: Value
}

const SetLeftProto = Object.assign(Object.create(PatchProto), {
  _tag: "SetLeft"
})

/** @internal */
export const makeSetLeft = <Value, Value2, Patch, Patch2>(
  value: Value
): Differ.Or.Patch<
  Value,
  Value2,
  Patch,
  Patch2
> => {
  const o = Object.create(SetLeftProto)
  o.value = value
  return o
}

/** @internal */
export interface SetRight<in out Value, in out Value2, in out Patch, in out Patch2>
  extends Differ.Or.Patch<Value, Value2, Patch, Patch2>
{
  readonly _tag: "SetRight"
  readonly value: Value2
}

const SetRightProto = Object.assign(Object.create(PatchProto), {
  _tag: "SetRight"
})

/** @internal */
export const makeSetRight = <Value, Value2, Patch, Patch2>(
  value: Value2
): Differ.Or.Patch<
  Value,
  Value2,
  Patch,
  Patch2
> => {
  const o = Object.create(SetRightProto)
  o.value = value
  return o
}

/** @internal */
export interface UpdateLeft<in out Value, in out Value2, in out Patch, in out Patch2>
  extends Differ.Or.Patch<Value, Value2, Patch, Patch2>
{
  readonly _tag: "UpdateLeft"
  readonly patch: Patch
}

const UpdateLeftProto = Object.assign(Object.create(PatchProto), {
  _tag: "UpdateLeft"
})

/** @internal */
export const makeUpdateLeft = <Value, Value2, Patch, Patch2>(
  patch: Patch
): Differ.Or.Patch<
  Value,
  Value2,
  Patch,
  Patch2
> => {
  const o = Object.create(UpdateLeftProto)
  o.patch = patch
  return o
}

/** @internal */
export interface UpdateRight<in out Value, in out Value2, in out Patch, in out Patch2>
  extends Differ.Or.Patch<Value, Value2, Patch, Patch2>
{
  readonly _tag: "UpdateRight"
  readonly patch: Patch2
}

const UpdateRightProto = Object.assign(Object.create(PatchProto), {
  _tag: "UpdateRight"
})

/** @internal */
export const makeUpdateRight = <Value, Value2, Patch, Patch2>(
  patch: Patch2
): Differ.Or.Patch<
  Value,
  Value2,
  Patch,
  Patch2
> => {
  const o = Object.create(UpdateRightProto)
  o.patch = patch
  return o
}

type Instruction =
  | AndThen<any, any, any, any>
  | Empty<any, any, any, any>
  | SetLeft<any, any, any, any>
  | SetRight<any, any, any, any>
  | UpdateLeft<any, any, any, any>
  | UpdateRight<any, any, any, any>

/** @internal */
export const diff = <Value, Value2, Patch, Patch2>(
  options: {
    readonly oldValue: Either<Value2, Value>
    readonly newValue: Either<Value2, Value>
    readonly left: Differ<Value, Patch>
    readonly right: Differ<Value2, Patch2>
  }
): Differ.Or.Patch<Value, Value2, Patch, Patch2> => {
  switch (options.oldValue._tag) {
    case "Left": {
      switch (options.newValue._tag) {
        case "Left": {
          const valuePatch = options.left.diff(options.oldValue.left, options.newValue.left)
          if (Equal.equals(valuePatch, options.left.empty)) {
            return empty()
          }
          return makeUpdateLeft(valuePatch)
        }
        case "Right": {
          return makeSetRight(options.newValue.right)
        }
      }
    }
    case "Right": {
      switch (options.newValue._tag) {
        case "Left": {
          return makeSetLeft(options.newValue.left)
        }
        case "Right": {
          const valuePatch = options.right.diff(options.oldValue.right, options.newValue.right)
          if (Equal.equals(valuePatch, options.right.empty)) {
            return empty()
          }
          return makeUpdateRight(valuePatch)
        }
      }
    }
  }
}

/** @internal */
export const combine = Dual.dual<
  <Value, Value2, Patch, Patch2>(
    that: Differ.Or.Patch<Value, Value2, Patch, Patch2>
  ) => (
    self: Differ.Or.Patch<Value, Value2, Patch, Patch2>
  ) => Differ.Or.Patch<Value, Value2, Patch, Patch2>,
  <Value, Value2, Patch, Patch2>(
    self: Differ.Or.Patch<Value, Value2, Patch, Patch2>,
    that: Differ.Or.Patch<Value, Value2, Patch, Patch2>
  ) => Differ.Or.Patch<Value, Value2, Patch, Patch2>
>(2, (self, that) => makeAndThen(self, that))

/** @internal */
export const patch = Dual.dual<
  <Value, Value2, Patch, Patch2>(
    options: {
      readonly oldValue: Either<Value2, Value>
      readonly left: Differ<Value, Patch>
      readonly right: Differ<Value2, Patch2>
    }
  ) => (self: Differ.Or.Patch<Value, Value2, Patch, Patch2>) => Either<Value2, Value>,
  <Value, Value2, Patch, Patch2>(
    self: Differ.Or.Patch<Value, Value2, Patch, Patch2>,
    options: {
      readonly oldValue: Either<Value2, Value>
      readonly left: Differ<Value, Patch>
      readonly right: Differ<Value2, Patch2>
    }
  ) => Either<Value2, Value>
>(2, <Value, Value2, Patch, Patch2>(
  self: Differ.Or.Patch<Value, Value2, Patch, Patch2>,
  { left, oldValue, right }: {
    oldValue: Either<Value2, Value>
    left: Differ<Value, Patch>
    right: Differ<Value2, Patch2>
  }
) => {
  if ((self as Instruction)._tag === "Empty") {
    return oldValue
  }
  let patches: Chunk.Chunk<Differ.Or.Patch<Value, Value2, Patch, Patch2>> = Chunk.of(self)
  let result = oldValue
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
      case "UpdateLeft": {
        if (result._tag === "Left") {
          result = E.left(left.patch(head.patch, result.left))
        }
        patches = tail
        break
      }
      case "UpdateRight": {
        if (result._tag === "Right") {
          result = E.right(right.patch(head.patch, result.right))
        }
        patches = tail
        break
      }
      case "SetLeft": {
        result = E.left(head.value)
        patches = tail
        break
      }
      case "SetRight": {
        result = E.right(head.value)
        patches = tail
        break
      }
    }
  }
  return result
})
