import * as Arr from "../../Array.js";
import { equals } from "../../Equal.js";
import { dual } from "../../Function.js";
import * as fiberRefs_ from "../fiberRefs.js";
/** @internal */
export const OP_EMPTY = "Empty";
/** @internal */
export const OP_ADD = "Add";
/** @internal */
export const OP_REMOVE = "Remove";
/** @internal */
export const OP_UPDATE = "Update";
/** @internal */
export const OP_AND_THEN = "AndThen";
/** @internal */
export const empty = {
  _tag: OP_EMPTY
};
/** @internal */
export const diff = (oldValue, newValue) => {
  const missingLocals = new Map(oldValue.locals);
  let patch = empty;
  for (const [fiberRef, pairs] of newValue.locals.entries()) {
    const newValue = Arr.headNonEmpty(pairs)[1];
    const old = missingLocals.get(fiberRef);
    if (old !== undefined) {
      const oldValue = Arr.headNonEmpty(old)[1];
      if (!equals(oldValue, newValue)) {
        patch = combine({
          _tag: OP_UPDATE,
          fiberRef,
          patch: fiberRef.diff(oldValue, newValue)
        })(patch);
      }
    } else {
      patch = combine({
        _tag: OP_ADD,
        fiberRef,
        value: newValue
      })(patch);
    }
    missingLocals.delete(fiberRef);
  }
  for (const [fiberRef] of missingLocals.entries()) {
    patch = combine({
      _tag: OP_REMOVE,
      fiberRef
    })(patch);
  }
  return patch;
};
/** @internal */
export const combine = /*#__PURE__*/dual(2, (self, that) => ({
  _tag: OP_AND_THEN,
  first: self,
  second: that
}));
/** @internal */
export const patch = /*#__PURE__*/dual(3, (self, fiberId, oldValue) => {
  let fiberRefs = oldValue;
  let patches = Arr.of(self);
  while (Arr.isNonEmptyReadonlyArray(patches)) {
    const head = Arr.headNonEmpty(patches);
    const tail = Arr.tailNonEmpty(patches);
    switch (head._tag) {
      case OP_EMPTY:
        {
          patches = tail;
          break;
        }
      case OP_ADD:
        {
          fiberRefs = fiberRefs_.updateAs(fiberRefs, {
            fiberId,
            fiberRef: head.fiberRef,
            value: head.value
          });
          patches = tail;
          break;
        }
      case OP_REMOVE:
        {
          fiberRefs = fiberRefs_.delete_(fiberRefs, head.fiberRef);
          patches = tail;
          break;
        }
      case OP_UPDATE:
        {
          const value = fiberRefs_.getOrDefault(fiberRefs, head.fiberRef);
          fiberRefs = fiberRefs_.updateAs(fiberRefs, {
            fiberId,
            fiberRef: head.fiberRef,
            value: head.fiberRef.patch(head.patch)(value)
          });
          patches = tail;
          break;
        }
      case OP_AND_THEN:
        {
          patches = Arr.prepend(head.first)(Arr.prepend(head.second)(tail));
          break;
        }
    }
  }
  return fiberRefs;
});
//# sourceMappingURL=patch.js.map