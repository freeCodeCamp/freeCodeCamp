"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delete_ = exports.FiberRefsSym = exports.FiberRefsImpl = void 0;
exports.empty = empty;
exports.setAll = exports.joinAs = exports.getOrDefault = exports.get = exports.forkAs = exports.fiberRefs = void 0;
exports.unsafeMake = unsafeMake;
exports.updateManyAs = exports.updateAs = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var HashSet = _interopRequireWildcard(require("../HashSet.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var core = _interopRequireWildcard(require("./core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
function unsafeMake(fiberRefLocals) {
  return new FiberRefsImpl(fiberRefLocals);
}
/** @internal */
function empty() {
  return unsafeMake(new Map());
}
/** @internal */
const FiberRefsSym = exports.FiberRefsSym = /*#__PURE__*/Symbol.for("effect/FiberRefs");
/** @internal */
class FiberRefsImpl {
  locals;
  [FiberRefsSym] = FiberRefsSym;
  constructor(locals) {
    this.locals = locals;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.FiberRefsImpl = FiberRefsImpl;
const findAncestor = (_ref, _parentStack, _childStack, _childModified = false) => {
  const ref = _ref;
  let parentStack = _parentStack;
  let childStack = _childStack;
  let childModified = _childModified;
  let ret = undefined;
  while (ret === undefined) {
    if (Arr.isNonEmptyReadonlyArray(parentStack) && Arr.isNonEmptyReadonlyArray(childStack)) {
      const parentFiberId = Arr.headNonEmpty(parentStack)[0];
      const parentAncestors = Arr.tailNonEmpty(parentStack);
      const childFiberId = Arr.headNonEmpty(childStack)[0];
      const childRefValue = Arr.headNonEmpty(childStack)[1];
      const childAncestors = Arr.tailNonEmpty(childStack);
      if (parentFiberId.startTimeMillis < childFiberId.startTimeMillis) {
        childStack = childAncestors;
        childModified = true;
      } else if (parentFiberId.startTimeMillis > childFiberId.startTimeMillis) {
        parentStack = parentAncestors;
      } else {
        if (parentFiberId.id < childFiberId.id) {
          childStack = childAncestors;
          childModified = true;
        } else if (parentFiberId.id > childFiberId.id) {
          parentStack = parentAncestors;
        } else {
          ret = [childRefValue, childModified];
        }
      }
    } else {
      ret = [ref.initial, true];
    }
  }
  return ret;
};
/** @internal */
const joinAs = exports.joinAs = /*#__PURE__*/(0, _Function.dual)(3, (self, fiberId, that) => {
  const parentFiberRefs = new Map(self.locals);
  that.locals.forEach((childStack, fiberRef) => {
    const childValue = childStack[0][1];
    if (!childStack[0][0][Equal.symbol](fiberId)) {
      if (!parentFiberRefs.has(fiberRef)) {
        if (Equal.equals(childValue, fiberRef.initial)) {
          return;
        }
        parentFiberRefs.set(fiberRef, [[fiberId, fiberRef.join(fiberRef.initial, childValue)]]);
        return;
      }
      const parentStack = parentFiberRefs.get(fiberRef);
      const [ancestor, wasModified] = findAncestor(fiberRef, parentStack, childStack);
      if (wasModified) {
        const patch = fiberRef.diff(ancestor, childValue);
        const oldValue = parentStack[0][1];
        const newValue = fiberRef.join(oldValue, fiberRef.patch(patch)(oldValue));
        if (!Equal.equals(oldValue, newValue)) {
          let newStack;
          const parentFiberId = parentStack[0][0];
          if (parentFiberId[Equal.symbol](fiberId)) {
            newStack = [[parentFiberId, newValue], ...parentStack.slice(1)];
          } else {
            newStack = [[fiberId, newValue], ...parentStack];
          }
          parentFiberRefs.set(fiberRef, newStack);
        }
      }
    }
  });
  return new FiberRefsImpl(parentFiberRefs);
});
/** @internal */
const forkAs = exports.forkAs = /*#__PURE__*/(0, _Function.dual)(2, (self, childId) => {
  const map = new Map();
  unsafeForkAs(self, map, childId);
  return new FiberRefsImpl(map);
});
const unsafeForkAs = (self, map, fiberId) => {
  self.locals.forEach((stack, fiberRef) => {
    const oldValue = stack[0][1];
    const newValue = fiberRef.patch(fiberRef.fork)(oldValue);
    if (Equal.equals(oldValue, newValue)) {
      map.set(fiberRef, stack);
    } else {
      map.set(fiberRef, [[fiberId, newValue], ...stack]);
    }
  });
};
/** @internal */
const fiberRefs = self => HashSet.fromIterable(self.locals.keys());
/** @internal */
exports.fiberRefs = fiberRefs;
const setAll = self => core.forEachSequentialDiscard(fiberRefs(self), fiberRef => core.fiberRefSet(fiberRef, getOrDefault(self, fiberRef)));
/** @internal */
exports.setAll = setAll;
const delete_ = exports.delete_ = /*#__PURE__*/(0, _Function.dual)(2, (self, fiberRef) => {
  const locals = new Map(self.locals);
  locals.delete(fiberRef);
  return new FiberRefsImpl(locals);
});
/** @internal */
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, fiberRef) => {
  if (!self.locals.has(fiberRef)) {
    return Option.none();
  }
  return Option.some(Arr.headNonEmpty(self.locals.get(fiberRef))[1]);
});
/** @internal */
const getOrDefault = exports.getOrDefault = /*#__PURE__*/(0, _Function.dual)(2, (self, fiberRef) => (0, _Function.pipe)(get(self, fiberRef), Option.getOrElse(() => fiberRef.initial)));
/** @internal */
const updateAs = exports.updateAs = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  fiberId,
  fiberRef,
  value
}) => {
  if (self.locals.size === 0) {
    return new FiberRefsImpl(new Map([[fiberRef, [[fiberId, value]]]]));
  }
  const locals = new Map(self.locals);
  unsafeUpdateAs(locals, fiberId, fiberRef, value);
  return new FiberRefsImpl(locals);
});
const unsafeUpdateAs = (locals, fiberId, fiberRef, value) => {
  const oldStack = locals.get(fiberRef) ?? [];
  let newStack;
  if (Arr.isNonEmptyReadonlyArray(oldStack)) {
    const [currentId, currentValue] = Arr.headNonEmpty(oldStack);
    if (currentId[Equal.symbol](fiberId)) {
      if (Equal.equals(currentValue, value)) {
        return;
      } else {
        newStack = [[fiberId, value], ...oldStack.slice(1)];
      }
    } else {
      newStack = [[fiberId, value], ...oldStack];
    }
  } else {
    newStack = [[fiberId, value]];
  }
  locals.set(fiberRef, newStack);
};
/** @internal */
const updateManyAs = exports.updateManyAs = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  entries,
  forkAs
}) => {
  if (self.locals.size === 0) {
    return new FiberRefsImpl(new Map(entries));
  }
  const locals = new Map(self.locals);
  if (forkAs !== undefined) {
    unsafeForkAs(self, locals, forkAs);
  }
  entries.forEach(([fiberRef, values]) => {
    if (values.length === 1) {
      unsafeUpdateAs(locals, values[0][0], fiberRef, values[0][1]);
    } else {
      values.forEach(([fiberId, value]) => {
        unsafeUpdateAs(locals, fiberId, fiberRef, value);
      });
    }
  });
  return new FiberRefsImpl(locals);
});
//# sourceMappingURL=fiberRefs.js.map