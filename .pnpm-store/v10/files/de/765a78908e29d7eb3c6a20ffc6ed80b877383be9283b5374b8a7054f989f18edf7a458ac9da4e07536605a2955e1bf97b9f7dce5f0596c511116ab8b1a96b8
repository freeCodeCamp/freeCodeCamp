/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js";
import * as Dual from "./Function.js";
import { pipe } from "./Function.js";
import * as Hash from "./Hash.js";
import { format, NodeInspectSymbol, toJSON } from "./Inspectable.js";
import { pipeArguments } from "./Pipeable.js";
import { hasProperty } from "./Predicate.js";
import * as RBT from "./RedBlackTree.js";
const TypeId = /*#__PURE__*/Symbol.for("effect/SortedSet");
const SortedSetProto = {
  [TypeId]: {
    _A: _ => _
  },
  [Hash.symbol]() {
    return pipe(Hash.hash(this.keyTree), Hash.combine(Hash.hash(TypeId)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isSortedSet(that) && Equal.equals(this.keyTree, that.keyTree);
  },
  [Symbol.iterator]() {
    return RBT.keys(this.keyTree);
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "SortedSet",
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
const fromTree = keyTree => {
  const a = Object.create(SortedSetProto);
  a.keyTree = keyTree;
  return a;
};
/**
 * @since 2.0.0
 * @category refinements
 */
export const isSortedSet = u => hasProperty(u, TypeId);
/**
 * @since 2.0.0
 * @category constructors
 */
export const empty = O => fromTree(RBT.empty(O));
/**
 * Creates a new `SortedSet` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable = /*#__PURE__*/Dual.dual(2, (iterable, ord) => fromTree(RBT.fromIterable(Array.from(iterable).map(k => [k, true]), ord)));
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = ord => (...entries) => fromIterable(entries, ord);
/**
 * @since 2.0.0
 * @category elements
 */
export const add = /*#__PURE__*/Dual.dual(2, (self, value) => RBT.has(self.keyTree, value) ? self : fromTree(RBT.insert(self.keyTree, value, true)));
/**
 * @since 2.0.0
 */
export const difference = /*#__PURE__*/Dual.dual(2, (self, that) => {
  let out = self;
  for (const value of that) {
    out = remove(out, value);
  }
  return out;
});
/**
 * Check if a predicate holds true for every `SortedSet` element.
 *
 * @since 2.0.0
 * @category elements
 */
export const every = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
  for (const value of self) {
    if (!predicate(value)) {
      return false;
    }
  }
  return true;
});
/**
 * @since 2.0.0
 * @category filtering
 */
export const filter = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
  const ord = RBT.getOrder(self.keyTree);
  let out = empty(ord);
  for (const value of self) {
    if (predicate(value)) {
      out = add(out, value);
    }
  }
  return out;
});
/**
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap = /*#__PURE__*/Dual.dual(3, (self, O, f) => {
  let out = empty(O);
  forEach(self, a => {
    for (const b of f(a)) {
      out = add(out, b);
    }
  });
  return out;
});
/**
 * @since 2.0.0
 * @category traversing
 */
export const forEach = /*#__PURE__*/Dual.dual(2, (self, f) => RBT.forEach(self.keyTree, f));
/**
 * @since 2.0.0
 * @category elements
 */
export const has = /*#__PURE__*/Dual.dual(2, (self, value) => RBT.has(self.keyTree, value));
/**
 * @since 2.0.0
 */
export const intersection = /*#__PURE__*/Dual.dual(2, (self, that) => {
  const ord = RBT.getOrder(self.keyTree);
  let out = empty(ord);
  for (const value of that) {
    if (has(self, value)) {
      out = add(out, value);
    }
  }
  return out;
});
/**
 * @since 2.0.0
 * @category elements
 */
export const isSubset = /*#__PURE__*/Dual.dual(2, (self, that) => every(self, a => has(that, a)));
/**
 * @since 2.0.0
 * @category mapping
 */
export const map = /*#__PURE__*/Dual.dual(3, (self, O, f) => {
  let out = empty(O);
  forEach(self, a => {
    const b = f(a);
    if (!has(out, b)) {
      out = add(out, b);
    }
  });
  return out;
});
/**
 * @since 2.0.0
 * @category filtering
 */
export const partition = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
  const ord = RBT.getOrder(self.keyTree);
  let right = empty(ord);
  let left = empty(ord);
  for (const value of self) {
    if (predicate(value)) {
      right = add(right, value);
    } else {
      left = add(left, value);
    }
  }
  return [left, right];
});
/**
 * @since 2.0.0
 * @category elements
 */
export const remove = /*#__PURE__*/Dual.dual(2, (self, value) => fromTree(RBT.removeFirst(self.keyTree, value)));
/**
 * @since 2.0.0
 * @category getters
 */
export const size = self => RBT.size(self.keyTree);
/**
 * Check if a predicate holds true for some `SortedSet` element.
 *
 * @since 2.0.0
 * @category elements
 */
export const some = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
  for (const value of self) {
    if (predicate(value)) {
      return true;
    }
  }
  return false;
});
/**
 * @since 2.0.0
 * @category elements
 */
export const toggle = /*#__PURE__*/Dual.dual(2, (self, value) => has(self, value) ? remove(self, value) : add(self, value));
/**
 * @since 2.0.0
 */
export const union = /*#__PURE__*/Dual.dual(2, (self, that) => {
  const ord = RBT.getOrder(self.keyTree);
  let out = empty(ord);
  for (const value of self) {
    out = add(value)(out);
  }
  for (const value of that) {
    out = add(value)(out);
  }
  return out;
});
/**
 * @since 2.0.0
 * @category getters
 */
export const values = self => RBT.keys(self.keyTree);
/**
 * @since 2.0.0
 * @category equivalence
 */
export const getEquivalence = () => (a, b) => isSubset(a, b) && isSubset(b, a);
//# sourceMappingURL=SortedSet.js.map