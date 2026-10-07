"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.union = exports.toggle = exports.some = exports.size = exports.remove = exports.partition = exports.map = exports.make = exports.isSubset = exports.isSortedSet = exports.intersection = exports.has = exports.getEquivalence = exports.fromIterable = exports.forEach = exports.flatMap = exports.filter = exports.every = exports.empty = exports.difference = exports.add = void 0;
var Equal = _interopRequireWildcard(require("./Equal.js"));
var _Function = _interopRequireWildcard(require("./Function.js"));
var Dual = _Function;
var Hash = _interopRequireWildcard(require("./Hash.js"));
var _Inspectable = require("./Inspectable.js");
var _Pipeable = require("./Pipeable.js");
var _Predicate = require("./Predicate.js");
var RBT = _interopRequireWildcard(require("./RedBlackTree.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const TypeId = /*#__PURE__*/Symbol.for("effect/SortedSet");
const SortedSetProto = {
  [TypeId]: {
    _A: _ => _
  },
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(this.keyTree), Hash.combine(Hash.hash(TypeId)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isSortedSet(that) && Equal.equals(this.keyTree, that.keyTree);
  },
  [Symbol.iterator]() {
    return RBT.keys(this.keyTree);
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "SortedSet",
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
const fromTree = keyTree => {
  const a = Object.create(SortedSetProto);
  a.keyTree = keyTree;
  return a;
};
/**
 * @since 2.0.0
 * @category refinements
 */
const isSortedSet = u => (0, _Predicate.hasProperty)(u, TypeId);
/**
 * @since 2.0.0
 * @category constructors
 */
exports.isSortedSet = isSortedSet;
const empty = O => fromTree(RBT.empty(O));
/**
 * Creates a new `SortedSet` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.empty = empty;
const fromIterable = exports.fromIterable = /*#__PURE__*/Dual.dual(2, (iterable, ord) => fromTree(RBT.fromIterable(Array.from(iterable).map(k => [k, true]), ord)));
/**
 * @since 2.0.0
 * @category constructors
 */
const make = ord => (...entries) => fromIterable(entries, ord);
/**
 * @since 2.0.0
 * @category elements
 */
exports.make = make;
const add = exports.add = /*#__PURE__*/Dual.dual(2, (self, value) => RBT.has(self.keyTree, value) ? self : fromTree(RBT.insert(self.keyTree, value, true)));
/**
 * @since 2.0.0
 */
const difference = exports.difference = /*#__PURE__*/Dual.dual(2, (self, that) => {
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
const every = exports.every = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
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
const filter = exports.filter = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
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
const flatMap = exports.flatMap = /*#__PURE__*/Dual.dual(3, (self, O, f) => {
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
const forEach = exports.forEach = /*#__PURE__*/Dual.dual(2, (self, f) => RBT.forEach(self.keyTree, f));
/**
 * @since 2.0.0
 * @category elements
 */
const has = exports.has = /*#__PURE__*/Dual.dual(2, (self, value) => RBT.has(self.keyTree, value));
/**
 * @since 2.0.0
 */
const intersection = exports.intersection = /*#__PURE__*/Dual.dual(2, (self, that) => {
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
const isSubset = exports.isSubset = /*#__PURE__*/Dual.dual(2, (self, that) => every(self, a => has(that, a)));
/**
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = /*#__PURE__*/Dual.dual(3, (self, O, f) => {
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
const partition = exports.partition = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
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
const remove = exports.remove = /*#__PURE__*/Dual.dual(2, (self, value) => fromTree(RBT.removeFirst(self.keyTree, value)));
/**
 * @since 2.0.0
 * @category getters
 */
const size = self => RBT.size(self.keyTree);
/**
 * Check if a predicate holds true for some `SortedSet` element.
 *
 * @since 2.0.0
 * @category elements
 */
exports.size = size;
const some = exports.some = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
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
const toggle = exports.toggle = /*#__PURE__*/Dual.dual(2, (self, value) => has(self, value) ? remove(self, value) : add(self, value));
/**
 * @since 2.0.0
 */
const union = exports.union = /*#__PURE__*/Dual.dual(2, (self, that) => {
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
const values = self => RBT.keys(self.keyTree);
/**
 * @since 2.0.0
 * @category equivalence
 */
exports.values = values;
const getEquivalence = () => (a, b) => isSubset(a, b) && isSubset(b, a);
exports.getEquivalence = getEquivalence;
//# sourceMappingURL=SortedSet.js.map