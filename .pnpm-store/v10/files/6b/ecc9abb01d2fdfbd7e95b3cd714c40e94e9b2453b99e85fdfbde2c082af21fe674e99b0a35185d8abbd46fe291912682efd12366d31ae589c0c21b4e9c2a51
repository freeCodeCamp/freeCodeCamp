import * as Equal from "../Equal.js";
import { dual } from "../Function.js";
import * as Hash from "../Hash.js";
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as HM from "./hashMap.js";
const HashSetSymbolKey = "effect/HashSet";
/** @internal */
export const HashSetTypeId = /*#__PURE__*/Symbol.for(HashSetSymbolKey);
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
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashSet",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const makeImpl = keyMap => {
  const set = Object.create(HashSetProto);
  set._keyMap = keyMap;
  return set;
};
/** @internal */
export const isHashSet = u => hasProperty(u, HashSetTypeId);
const _empty = /*#__PURE__*/makeImpl(/*#__PURE__*/HM.empty());
/** @internal */
export const empty = () => _empty;
/** @internal */
export const fromIterable = elements => {
  const set = beginMutation(empty());
  for (const value of elements) {
    add(set, value);
  }
  return endMutation(set);
};
/** @internal */
export const make = (...elements) => {
  const set = beginMutation(empty());
  for (const value of elements) {
    add(set, value);
  }
  return endMutation(set);
};
/** @internal */
export const has = /*#__PURE__*/dual(2, (self, value) => HM.has(self._keyMap, value));
/** @internal */
export const some = /*#__PURE__*/dual(2, (self, f) => {
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
export const every = /*#__PURE__*/dual(2, (self, refinement) => !some(self, a => !refinement(a)));
/** @internal */
export const isSubset = /*#__PURE__*/dual(2, (self, that) => every(self, value => has(that, value)));
/** @internal */
export const values = self => HM.keys(self._keyMap);
/** @internal */
export const size = self => HM.size(self._keyMap);
/** @internal */
export const beginMutation = self => makeImpl(HM.beginMutation(self._keyMap));
/** @internal */
export const endMutation = self => {
  ;
  self._keyMap._editable = false;
  return self;
};
/** @internal */
export const mutate = /*#__PURE__*/dual(2, (self, f) => {
  const transient = beginMutation(self);
  f(transient);
  return endMutation(transient);
});
/** @internal */
export const add = /*#__PURE__*/dual(2, (self, value) => self._keyMap._editable ? (HM.set(value, true)(self._keyMap), self) : makeImpl(HM.set(value, true)(self._keyMap)));
/** @internal */
export const remove = /*#__PURE__*/dual(2, (self, value) => self._keyMap._editable ? (HM.remove(value)(self._keyMap), self) : makeImpl(HM.remove(value)(self._keyMap)));
/** @internal */
export const difference = /*#__PURE__*/dual(2, (self, that) => mutate(self, set => {
  for (const value of that) {
    remove(set, value);
  }
}));
/** @internal */
export const intersection = /*#__PURE__*/dual(2, (self, that) => mutate(empty(), set => {
  for (const value of that) {
    if (has(value)(self)) {
      add(value)(set);
    }
  }
}));
/** @internal */
export const union = /*#__PURE__*/dual(2, (self, that) => mutate(empty(), set => {
  forEach(self, value => add(set, value));
  for (const value of that) {
    add(set, value);
  }
}));
/** @internal */
export const toggle = /*#__PURE__*/dual(2, (self, value) => has(self, value) ? remove(self, value) : add(self, value));
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => mutate(empty(), set => {
  forEach(self, a => {
    const b = f(a);
    if (!has(set, b)) {
      add(set, b);
    }
  });
}));
/** @internal */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => mutate(empty(), set => {
  forEach(self, a => {
    for (const b of f(a)) {
      if (!has(set, b)) {
        add(set, b);
      }
    }
  });
}));
/** @internal */
export const forEach = /*#__PURE__*/dual(2, (self, f) => HM.forEach(self._keyMap, (_, k) => f(k)));
/** @internal */
export const reduce = /*#__PURE__*/dual(3, (self, zero, f) => HM.reduce(self._keyMap, zero, (z, _, a) => f(z, a)));
/** @internal */
export const filter = /*#__PURE__*/dual(2, (self, f) => {
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
export const partition = /*#__PURE__*/dual(2, (self, predicate) => {
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