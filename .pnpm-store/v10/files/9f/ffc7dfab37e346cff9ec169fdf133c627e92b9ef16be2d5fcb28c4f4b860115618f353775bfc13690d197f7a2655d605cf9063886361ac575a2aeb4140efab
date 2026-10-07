"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = exports.empty = exports.differ = exports.diff = exports.combine = exports.OP_REMOVE_SUPERVISOR = exports.OP_EMPTY = exports.OP_AND_THEN = exports.OP_ADD_SUPERVISOR = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Differ = _interopRequireWildcard(require("../../Differ.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var HashSet = _interopRequireWildcard(require("../../HashSet.js"));
var supervisor = _interopRequireWildcard(require("../supervisor.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const OP_EMPTY = exports.OP_EMPTY = "Empty";
/** @internal */
const OP_ADD_SUPERVISOR = exports.OP_ADD_SUPERVISOR = "AddSupervisor";
/** @internal */
const OP_REMOVE_SUPERVISOR = exports.OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
/** @internal */
const OP_AND_THEN = exports.OP_AND_THEN = "AndThen";
/**
 * The empty `SupervisorPatch`.
 *
 * @internal
 */
const empty = exports.empty = {
  _tag: OP_EMPTY
};
/**
 * Combines two patches to produce a new patch that describes applying the
 * updates from this patch and then the updates from the specified patch.
 *
 * @internal
 */
const combine = (self, that) => {
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
exports.combine = combine;
const patch = (self, supervisor) => {
  return patchLoop(supervisor, Chunk.of(self));
};
/** @internal */
exports.patch = patch;
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
      return (0, _Function.pipe)(toSet(self.left), HashSet.union(toSet(self.right)));
    } else {
      return HashSet.make(self);
    }
  }
};
/** @internal */
const diff = (oldValue, newValue) => {
  if (Equal.equals(oldValue, newValue)) {
    return empty;
  }
  const oldSupervisors = toSet(oldValue);
  const newSupervisors = toSet(newValue);
  const added = (0, _Function.pipe)(newSupervisors, HashSet.difference(oldSupervisors), HashSet.reduce(empty, (patch, supervisor) => combine(patch, {
    _tag: OP_ADD_SUPERVISOR,
    supervisor
  })));
  const removed = (0, _Function.pipe)(oldSupervisors, HashSet.difference(newSupervisors), HashSet.reduce(empty, (patch, supervisor) => combine(patch, {
    _tag: OP_REMOVE_SUPERVISOR,
    supervisor
  })));
  return combine(added, removed);
};
/** @internal */
exports.diff = diff;
const differ = exports.differ = /*#__PURE__*/Differ.make({
  empty,
  patch,
  combine,
  diff
});
//# sourceMappingURL=patch.js.map