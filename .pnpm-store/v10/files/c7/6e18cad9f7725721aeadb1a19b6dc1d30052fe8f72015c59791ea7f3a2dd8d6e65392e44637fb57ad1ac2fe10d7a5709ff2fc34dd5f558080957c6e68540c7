"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.size = exports.set = exports.remove = exports.reduce = exports.partition = exports.map = exports.make = exports.lastOption = exports.keys = exports.isSortedMap = exports.isNonEmpty = exports.isEmpty = exports.headOption = exports.has = exports.getOrder = exports.get = exports.fromIterable = exports.entries = exports.empty = void 0;
var Equal = _interopRequireWildcard(require("./Equal.js"));
var _Function = _interopRequireWildcard(require("./Function.js"));
var Dual = _Function;
var Hash = _interopRequireWildcard(require("./Hash.js"));
var _Inspectable = require("./Inspectable.js");
var Option = _interopRequireWildcard(require("./Option.js"));
var _Pipeable = require("./Pipeable.js");
var _Predicate = require("./Predicate.js");
var RBT = _interopRequireWildcard(require("./RedBlackTree.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const TypeId = /*#__PURE__*/Symbol.for("effect/SortedMap");
const SortedMapProto = {
  [TypeId]: {
    _K: _ => _,
    _V: _ => _
  },
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(this.tree), Hash.combine(Hash.hash("effect/SortedMap")), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isSortedMap(that) && Equal.equals(this.tree, that.tree);
  },
  [Symbol.iterator]() {
    return this.tree[Symbol.iterator]();
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "SortedMap",
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
const makeImpl = tree => {
  const self = Object.create(SortedMapProto);
  self.tree = tree;
  return self;
};
/**
 * @since 2.0.0
 * @category refinements
 */
const isSortedMap = u => (0, _Predicate.hasProperty)(u, TypeId);
/**
 * @since 2.0.0
 * @category constructors
 */
exports.isSortedMap = isSortedMap;
const empty = ord => makeImpl(RBT.empty(ord));
/**
 * Creates a new `SortedMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.empty = empty;
const fromIterable = exports.fromIterable = /*#__PURE__*/Dual.dual(2, (iterable, ord) => makeImpl(RBT.fromIterable(iterable, ord)));
/**
 * @since 2.0.0
 * @category constructors
 */
const make = ord => (...entries) => fromIterable(ord)(entries);
/**
 * @since 2.0.0
 * @category predicates
 */
exports.make = make;
const isEmpty = self => size(self) === 0;
/**
 * @since 2.0.0
 * @category predicates
 */
exports.isEmpty = isEmpty;
const isNonEmpty = self => size(self) > 0;
/**
 * @since 2.0.0
 * @category elements
 */
exports.isNonEmpty = isNonEmpty;
const get = exports.get = /*#__PURE__*/Dual.dual(2, (self, key) => RBT.findFirst(self.tree, key));
/**
 * Gets the `Order<K>` that the `SortedMap<K, V>` is using.
 *
 * @since 2.0.0
 * @category getters
 */
const getOrder = self => RBT.getOrder(self.tree);
/**
 * @since 2.0.0
 * @category elements
 */
exports.getOrder = getOrder;
const has = exports.has = /*#__PURE__*/Dual.dual(2, (self, key) => Option.isSome(get(self, key)));
/**
 * @since 2.0.0
 * @category elements
 */
const headOption = self => RBT.first(self.tree);
/**
 * @since 2.0.0
 * @category mapping
 */
exports.headOption = headOption;
const map = exports.map = /*#__PURE__*/Dual.dual(2, (self, f) => reduce(self, empty(RBT.getOrder(self.tree)), (acc, v, k) => set(acc, k, f(v, k))));
/**
 * @since 2.0.0
 * @category folding
 */
const reduce = exports.reduce = /*#__PURE__*/Dual.dual(3, (self, zero, f) => RBT.reduce(self.tree, zero, f));
/**
 * @since 2.0.0
 * @category elements
 */
const remove = exports.remove = /*#__PURE__*/Dual.dual(2, (self, key) => makeImpl(RBT.removeFirst(self.tree, key)));
/**
 * @since 2.0.0
 * @category elements
 */
const set = exports.set = /*#__PURE__*/Dual.dual(3, (self, key, value) => RBT.has(self.tree, key) ? makeImpl(RBT.insert(RBT.removeFirst(self.tree, key), key, value)) : makeImpl(RBT.insert(self.tree, key, value)));
/**
 * @since 2.0.0
 * @category getters
 */
const size = self => RBT.size(self.tree);
/**
 * @since 2.0.0
 * @category getters
 */
exports.size = size;
const keys = self => RBT.keys(self.tree);
/**
 * @since 2.0.0
 * @category getters
 */
exports.keys = keys;
const values = self => RBT.values(self.tree);
/**
 * @since 2.0.0
 * @category getters
 */
exports.values = values;
const entries = self => {
  const iterator = self.tree[Symbol.iterator]();
  iterator[Symbol.iterator] = () => entries(self);
  return iterator;
};
/**
 * @since 3.1.0
 * @category elements
 */
exports.entries = entries;
const lastOption = self => RBT.last(self.tree);
/**
 * @since 3.1.0
 * @category filtering
 */
exports.lastOption = lastOption;
const partition = exports.partition = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
  const ord = RBT.getOrder(self.tree);
  let right = empty(ord);
  let left = empty(ord);
  for (const value of self) {
    if (predicate(value[0])) {
      right = set(right, value[0], value[1]);
    } else {
      left = set(left, value[0], value[1]);
    }
  }
  return [left, right];
});
//# sourceMappingURL=SortedMap.js.map