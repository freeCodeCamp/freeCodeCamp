"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = exports.empty = exports.diff = exports.combine = exports.OP_UPDATE = exports.OP_REMOVE = exports.OP_EMPTY = exports.OP_AND_THEN = exports.OP_ADD = void 0;
var Arr = _interopRequireWildcard(require("../../Array.js"));
var _Equal = require("../../Equal.js");
var _Function = require("../../Function.js");
var fiberRefs_ = _interopRequireWildcard(require("../fiberRefs.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const OP_EMPTY = exports.OP_EMPTY = "Empty";
/** @internal */
const OP_ADD = exports.OP_ADD = "Add";
/** @internal */
const OP_REMOVE = exports.OP_REMOVE = "Remove";
/** @internal */
const OP_UPDATE = exports.OP_UPDATE = "Update";
/** @internal */
const OP_AND_THEN = exports.OP_AND_THEN = "AndThen";
/** @internal */
const empty = exports.empty = {
  _tag: OP_EMPTY
};
/** @internal */
const diff = (oldValue, newValue) => {
  const missingLocals = new Map(oldValue.locals);
  let patch = empty;
  for (const [fiberRef, pairs] of newValue.locals.entries()) {
    const newValue = Arr.headNonEmpty(pairs)[1];
    const old = missingLocals.get(fiberRef);
    if (old !== undefined) {
      const oldValue = Arr.headNonEmpty(old)[1];
      if (!(0, _Equal.equals)(oldValue, newValue)) {
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
exports.diff = diff;
const combine = exports.combine = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => ({
  _tag: OP_AND_THEN,
  first: self,
  second: that
}));
/** @internal */
const patch = exports.patch = /*#__PURE__*/(0, _Function.dual)(3, (self, fiberId, oldValue) => {
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