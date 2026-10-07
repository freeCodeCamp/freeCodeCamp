"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.union = exports.toggle = exports.some = exports.size = exports.remove = exports.reduce = exports.partition = exports.mutate = exports.map = exports.makeImpl = exports.make = exports.isSubset = exports.isHashSet = exports.intersection = exports.has = exports.fromIterable = exports.forEach = exports.flatMap = exports.filter = exports.every = exports.endMutation = exports.empty = exports.difference = exports.beginMutation = exports.add = exports.HashSetTypeId = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Inspectable = require("../Inspectable.js");
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var HM = _interopRequireWildcard(require("./hashMap.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const HashSetSymbolKey = "effect/HashSet";
/** @internal */
const HashSetTypeId = exports.HashSetTypeId = /*#__PURE__*/Symbol.for(HashSetSymbolKey);
const HashSetProto = {
  [HashSetTypeId]: HashSetTypeId,
  [Symbol.iterator]() {
    return HM.keys(this._keyMap);
  },
  [Hash.symbol]() {
    return Hash.cached(this, Hash.combine(Hash.hash(this._keyMap))(Hash.hash(HashSetSymbolKey)));
  },
  [Equal.symbol](that) {
    if (isHashSet(that)) {
      return HM.size(this._keyMap) === HM.size(that._keyMap) && Equal.equals(this._keyMap, that._keyMap);
    }
    return false;
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashSet",
      values: Array.from(this).map(_Inspectable.toJSON)
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const makeImpl = keyMap => {
  const set = Object.create(HashSetProto);
  set._keyMap = keyMap;
  return set;
};
/** @internal */
exports.makeImpl = makeImpl;
const isHashSet = u => (0, _Predicate.hasProperty)(u, HashSetTypeId);
exports.isHashSet = isHashSet;
const _empty = /*#__PURE__*/makeImpl(/*#__PURE__*/HM.empty());
/** @internal */
const empty = () => _empty;
/** @internal */
exports.empty = empty;
const fromIterable = elements => {
  const set = beginMutation(empty());
  for (const value of elements) {
    add(set, value);
  }
  return endMutation(set);
};
/** @internal */
exports.fromIterable = fromIterable;
const make = (...elements) => {
  const set = beginMutation(empty());
  for (const value of elements) {
    add(set, value);
  }
  return endMutation(set);
};
/** @internal */
exports.make = make;
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => HM.has(self._keyMap, value));
/** @internal */
const some = exports.some = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let found = false;
  for (const value of self) {
    found = f(value);
    if (found) {
      break;
    }
  }
  return found;
});
/** @internal */
const every = exports.every = /*#__PURE__*/(0, _Function.dual)(2, (self, refinement) => !some(self, a => !refinement(a)));
/** @internal */
const isSubset = exports.isSubset = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => every(self, value => has(that, value)));
/** @internal */
const values = self => HM.keys(self._keyMap);
/** @internal */
exports.values = values;
const size = self => HM.size(self._keyMap);
/** @internal */
exports.size = size;
const beginMutation = self => makeImpl(HM.beginMutation(self._keyMap));
/** @internal */
exports.beginMutation = beginMutation;
const endMutation = self => {
  ;
  self._keyMap._editable = false;
  return self;
};
/** @internal */
exports.endMutation = endMutation;
const mutate = exports.mutate = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const transient = beginMutation(self);
  f(transient);
  return endMutation(transient);
});
/** @internal */
const add = exports.add = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self._keyMap._editable ? (HM.set(value, true)(self._keyMap), self) : makeImpl(HM.set(value, true)(self._keyMap)));
/** @internal */
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self._keyMap._editable ? (HM.remove(value)(self._keyMap), self) : makeImpl(HM.remove(value)(self._keyMap)));
/** @internal */
const difference = exports.difference = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => mutate(self, set => {
  for (const value of that) {
    remove(set, value);
  }
}));
/** @internal */
const intersection = exports.intersection = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => mutate(empty(), set => {
  for (const value of that) {
    if (has(value)(self)) {
      add(value)(set);
    }
  }
}));
/** @internal */
const union = exports.union = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => mutate(empty(), set => {
  forEach(self, value => add(set, value));
  for (const value of that) {
    add(set, value);
  }
}));
/** @internal */
const toggle = exports.toggle = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => has(self, value) ? remove(self, value) : add(self, value));
/** @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mutate(empty(), set => {
  forEach(self, a => {
    const b = f(a);
    if (!has(set, b)) {
      add(set, b);
    }
  });
}));
/** @internal */
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mutate(empty(), set => {
  forEach(self, a => {
    for (const b of f(a)) {
      if (!has(set, b)) {
        add(set, b);
      }
    }
  });
}));
/** @internal */
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => HM.forEach(self._keyMap, (_, k) => f(k)));
/** @internal */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => HM.reduce(self._keyMap, zero, (z, _, a) => f(z, a)));
/** @internal */
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  return mutate(empty(), set => {
    const iterator = values(self);
    let next;
    while (!(next = iterator.next()).done) {
      const value = next.value;
      if (f(value)) {
        add(set, value);
      }
    }
  });
});
/** @internal */
const partition = exports.partition = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const iterator = values(self);
  let next;
  const right = beginMutation(empty());
  const left = beginMutation(empty());
  while (!(next = iterator.next()).done) {
    const value = next.value;
    if (predicate(value)) {
      add(right, value);
    } else {
      add(left, value);
    }
  }
  return [endMutation(left), endMutation(right)];
});
//# sourceMappingURL=hashSet.js.map