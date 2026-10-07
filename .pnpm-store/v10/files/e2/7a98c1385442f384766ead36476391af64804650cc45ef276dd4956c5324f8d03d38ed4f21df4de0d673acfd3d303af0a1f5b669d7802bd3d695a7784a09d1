import * as Chunk from "../../Chunk.js"
import * as Differ from "../../Differ.js"
import * as Equal from "../../Equal.js"
import { pipe } from "../../Function.js"
import * as HashSet from "../../HashSet.js"
import type * as Supervisor from "../../Supervisor.js"
import * as supervisor from "../supervisor.js"

/** @internal */
export type SupervisorPatch = Empty | AddSupervisor | RemoveSupervisor | AndThen

/** @internal */
export const OP_EMPTY = "Empty" as const

/** @internal */
export type OP_EMPTY = typeof OP_EMPTY

/** @internal */
export const OP_ADD_SUPERVISOR = "AddSupervisor" as const

/** @internal */
export type OP_ADD_SUPERVISOR = typeof OP_ADD_SUPERVISOR

/** @internal */
export const OP_REMOVE_SUPERVISOR = "RemoveSupervisor" as const

/** @internal */
export type OP_REMOVE_SUPERVISOR = typeof OP_REMOVE_SUPERVISOR

/** @internal */
export const OP_AND_THEN = "AndThen" as const

/** @internal */
export type OP_AND_THEN = typeof OP_AND_THEN

/** @internal */
export interface Empty {
  readonly _tag: OP_EMPTY
}

/** @internal */
export interface AddSupervisor {
  readonly _tag: OP_ADD_SUPERVISOR
  readonly supervisor: Supervisor.Supervisor<any>
}

/** @internal */
export interface RemoveSupervisor {
  readonly _tag: OP_REMOVE_SUPERVISOR
  readonly supervisor: Supervisor.Supervisor<any>
}

/** @internal */
export interface AndThen {
  readonly _tag: OP_AND_THEN
  readonly first: SupervisorPatch
  readonly second: SupervisorPatch
}

/**
 * The empty `SupervisorPatch`.
 *
 * @internal
 */
export const empty: SupervisorPatch = { _tag: OP_EMPTY }

/**
 * Combines two patches to produce a new patch that describes applying the
 * updates from this patch and then the updates from the specified patch.
 *
 * @internal
 */
export const combine = (self: SupervisorPatch, that: SupervisorPatch): SupervisorPatch => {
  return {
    _tag: OP_AND_THEN,
    first: self,
    second: that
  }
}

/**
 * Applies a `SupervisorPatch` to a `Supervisor` to produce a new `Supervisor`.
 *
 * @internal
 */
export const patch = (
  self: SupervisorPatch,
  supervisor: Supervisor.Supervisor<any>
): Supervisor.Supervisor<any> => {
  return patchLoop(supervisor, Chunk.of(self))
}

/** @internal */
const patchLoop = (
  _supervisor: Supervisor.Supervisor<any>,
  _patches: Chunk.Chunk<SupervisorPatch>
): Supervisor.Supervisor<any> => {
  let supervisor = _supervisor
  let patches = _patches
  while (Chunk.isNonEmpty(patches)) {
    const head = Chunk.headNonEmpty(patches)
    switch (head._tag) {
      case OP_EMPTY: {
        patches = Chunk.tailNonEmpty(patches)
        break
      }
      case OP_ADD_SUPERVISOR: {
        supervisor = supervisor.zip(head.supervisor)
        patches = Chunk.tailNonEmpty(patches)
        break
      }
      case OP_REMOVE_SUPERVISOR: {
        supervisor = removeSupervisor(supervisor, head.supervisor)
        patches = Chunk.tailNonEmpty(patches)
        break
      }
      case OP_AND_THEN: {
        patches = Chunk.prepend(head.first)(Chunk.prepend(head.second)(Chunk.tailNonEmpty(patches)))
        break
      }
    }
  }
  return supervisor
}

/** @internal */
const removeSupervisor = (
  self: Supervisor.Supervisor<any>,
  that: Supervisor.Supervisor<any>
): Supervisor.Supervisor<any> => {
  if (Equal.equals(self, that)) {
    return supervisor.none
  } else {
    if (supervisor.isZip(self)) {
      return removeSupervisor(self.left, that).zip(removeSupervisor(self.right, that))
    } else {
      return self
    }
  }
}

/** @internal */
const toSet = (self: Supervisor.Supervisor<any>): HashSet.HashSet<Supervisor.Supervisor<any>> => {
  if (Equal.equals(self, supervisor.none)) {
    return HashSet.empty()
  } else {
    if (supervisor.isZip(self)) {
      return pipe(toSet(self.left), HashSet.union(toSet(self.right)))
    } else {
      return HashSet.make(self)
    }
  }
}

/** @internal */
export const diff = (
  oldValue: Supervisor.Supervisor<any>,
  newValue: Supervisor.Supervisor<any>
): SupervisorPatch => {
  if (Equal.equals(oldValue, newValue)) {
    return empty
  }
  const oldSupervisors = toSet(oldValue)
  const newSupervisors = toSet(newValue)
  const added = pipe(
    newSupervisors,
    HashSet.difference(oldSupervisors),
    HashSet.reduce(
      empty as SupervisorPatch,
      (patch, supervisor) => combine(patch, { _tag: OP_ADD_SUPERVISOR, supervisor })
    )
  )
  const removed = pipe(
    oldSupervisors,
    HashSet.difference(newSupervisors),
    HashSet.reduce(
      empty as SupervisorPatch,
      (patch, supervisor) => combine(patch, { _tag: OP_REMOVE_SUPERVISOR, supervisor })
    )
  )
  return combine(added, removed)
}

/** @internal */
export const differ = Differ.make<Supervisor.Supervisor<any>, SupervisorPatch>({
  empty,
  patch,
  combine,
  diff
})
