import * as Chunk from "../../Chunk.js";
import * as Differ from "../../Differ.js";
import * as Equal from "../../Equal.js";
import { pipe } from "../../Function.js";
import * as HashSet from "../../HashSet.js";
import * as supervisor from "../supervisor.js";
/** @internal */
export const OP_EMPTY = "Empty";
/** @internal */
export const OP_ADD_SUPERVISOR = "AddSupervisor";
/** @internal */
export const OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
/** @internal */
export const OP_AND_THEN = "AndThen";
/**
 * The empty `SupervisorPatch`.
 *
 * @internal
 */
export const empty = {
  _tag: OP_EMPTY
};
/**
 * Combines two patches to produce a new patch that describes applying the
 * updates from this patch and then the updates from the specified patch.
 *
 * @internal
 */
export const combine = (self, that) => {
  return {
    _tag: OP_AND_THEN,
    first: self,
    second: that
  };
};
/**
 * Applies a `SupervisorPatch` to a `Supervisor` to produce a new `Supervisor`.
 *
 * @internal
 */
export const patch = (self, supervisor) => {
  return patchLoop(supervisor, Chunk.of(self));
};
/** @internal */
const patchLoop = (_supervisor, _patches) => {
  let supervisor = _supervisor;
  let patches = _patches;
  while (Chunk.isNonEmpty(patches)) {
    const head = Chunk.headNonEmpty(patches);
    switch (head._tag) {
      case OP_EMPTY:
        {
          patches = Chunk.tailNonEmpty(patches);
          break;
        }
      case OP_ADD_SUPERVISOR:
        {
          supervisor = supervisor.zip(head.supervisor);
          patches = Chunk.tailNonEmpty(patches);
          break;
        }
      case OP_REMOVE_SUPERVISOR:
        {
          supervisor = removeSupervisor(supervisor, head.supervisor);
          patches = Chunk.tailNonEmpty(patches);
          break;
        }
      case OP_AND_THEN:
        {
          patches = Chunk.prepend(head.first)(Chunk.prepend(head.second)(Chunk.tailNonEmpty(patches)));
          break;
        }
    }
  }
  return supervisor;
};
/** @internal */
const removeSupervisor = (self, that) => {
  if (Equal.equals(self, that)) {
    return supervisor.none;
  } else {
    if (supervisor.isZip(self)) {
      return removeSupervisor(self.left, that).zip(removeSupervisor(self.right, that));
    } else {
      return self;
    }
  }
};
/** @internal */
const toSet = self => {
  if (Equal.equals(self, supervisor.none)) {
    return HashSet.empty();
  } else {
    if (supervisor.isZip(self)) {
      return pipe(toSet(self.left), HashSet.union(toSet(self.right)));
    } else {
      return HashSet.make(self);
    }
  }
};
/** @internal */
export const diff = (oldValue, newValue) => {
  if (Equal.equals(oldValue, newValue)) {
    return empty;
  }
  const oldSupervisors = toSet(oldValue);
  const newSupervisors = toSet(newValue);
  const added = pipe(newSupervisors, HashSet.difference(oldSupervisors), HashSet.reduce(empty, (patch, supervisor) => combine(patch, {
    _tag: OP_ADD_SUPERVISOR,
    supervisor
  })));
  const removed = pipe(oldSupervisors, HashSet.difference(newSupervisors), HashSet.reduce(empty, (patch, supervisor) => combine(patch, {
    _tag: OP_REMOVE_SUPERVISOR,
    supervisor
  })));
  return combine(added, removed);
};
/** @internal */
export const differ = /*#__PURE__*/Differ.make({
  empty,
  patch,
  combine,
  diff
});
//# sourceMappingURL=patch.js.map