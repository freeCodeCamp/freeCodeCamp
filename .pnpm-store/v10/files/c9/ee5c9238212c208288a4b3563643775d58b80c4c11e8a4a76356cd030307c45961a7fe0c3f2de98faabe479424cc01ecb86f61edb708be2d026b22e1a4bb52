import * as Arr from "../../Array.js"
import { equals } from "../../Equal.js"
import type * as FiberId from "../../FiberId.js"
import type * as FiberRefs from "../../FiberRefs.js"
import type * as FiberRefsPatch from "../../FiberRefsPatch.js"
import { dual } from "../../Function.js"
import * as fiberRefs_ from "../fiberRefs.js"

/** @internal */
export const OP_EMPTY = "Empty" as const

/** @internal */
export type OP_EMPTY = typeof OP_EMPTY

/** @internal */
export const OP_ADD = "Add" as const

/** @internal */
export type OP_ADD = typeof OP_ADD

/** @internal */
export const OP_REMOVE = "Remove" as const

/** @internal */
export type OP_REMOVE = typeof OP_REMOVE

/** @internal */
export const OP_UPDATE = "Update" as const

/** @internal */
export type OP_UPDATE = typeof OP_UPDATE

/** @internal */
export const OP_AND_THEN = "AndThen" as const

/** @internal */
export type OP_AND_THEN = typeof OP_AND_THEN

/** @internal */
export const empty: FiberRefsPatch.FiberRefsPatch = ({
  _tag: OP_EMPTY
}) as FiberRefsPatch.FiberRefsPatch

/** @internal */
export const diff = (
  oldValue: FiberRefs.FiberRefs,
  newValue: FiberRefs.FiberRefs
): FiberRefsPatch.FiberRefsPatch => {
  const missingLocals = new Map(oldValue.locals)
  let patch = empty
  for (const [fiberRef, pairs] of newValue.locals.entries()) {
    const newValue = Arr.headNonEmpty(pairs)[1]
    const old = missingLocals.get(fiberRef)
    if (old !== undefined) {
      const oldValue = Arr.headNonEmpty(old)[1]
      if (!equals(oldValue, newValue)) {
        patch = combine({
          _tag: OP_UPDATE,
          fiberRef,
          patch: fiberRef.diff(oldValue, newValue)
        })(patch)
      }
    } else {
      patch = combine({
        _tag: OP_ADD,
        fiberRef,
        value: newValue
      })(patch)
    }
    missingLocals.delete(fiberRef)
  }
  for (const [fiberRef] of missingLocals.entries()) {
    patch = combine({
      _tag: OP_REMOVE,
      fiberRef
    })(patch)
  }
  return patch
}

/** @internal */
export const combine = dual<
  (that: FiberRefsPatch.FiberRefsPatch) => (self: FiberRefsPatch.FiberRefsPatch) => FiberRefsPatch.FiberRefsPatch,
  (self: FiberRefsPatch.FiberRefsPatch, that: FiberRefsPatch.FiberRefsPatch) => FiberRefsPatch.FiberRefsPatch
>(2, (self, that) => ({
  _tag: OP_AND_THEN,
  first: self,
  second: that
}))

/** @internal */
export const patch = dual<
  (
    fiberId: FiberId.Runtime,
    oldValue: FiberRefs.FiberRefs
  ) => (self: FiberRefsPatch.FiberRefsPatch) => FiberRefs.FiberRefs,
  (
    self: FiberRefsPatch.FiberRefsPatch,
    fiberId: FiberId.Runtime,
    oldValue: FiberRefs.FiberRefs
  ) => FiberRefs.FiberRefs
>(3, (self, fiberId, oldValue) => {
  let fiberRefs: FiberRefs.FiberRefs = oldValue
  let patches: ReadonlyArray<FiberRefsPatch.FiberRefsPatch> = Arr.of(self)
  while (Arr.isNonEmptyReadonlyArray(patches)) {
    const head = Arr.headNonEmpty(patches)
    const tail = Arr.tailNonEmpty(patches)
    switch (head._tag) {
      case OP_EMPTY: {
        patches = tail
        break
      }
      case OP_ADD: {
        fiberRefs = fiberRefs_.updateAs(fiberRefs, {
          fiberId,
          fiberRef: head.fiberRef,
          value: head.value
        })
        patches = tail
        break
      }
      case OP_REMOVE: {
        fiberRefs = fiberRefs_.delete_(fiberRefs, head.fiberRef)
        patches = tail
        break
      }
      case OP_UPDATE: {
        const value = fiberRefs_.getOrDefault(fiberRefs, head.fiberRef)
        fiberRefs = fiberRefs_.updateAs(fiberRefs, {
          fiberId,
          fiberRef: head.fiberRef,
          value: head.fiberRef.patch(head.patch)(value)
        })
        patches = tail
        break
      }
      case OP_AND_THEN: {
        patches = Arr.prepend(head.first)(Arr.prepend(head.second)(tail))
        break
      }
    }
  }
  return fiberRefs
})
