"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toChunk = exports.toArray = exports.takeUpTo = exports.takeOption = exports.takeAll = exports.take = exports.size = exports.retainIf = exports.removeIf = exports.peekOption = exports.peek = exports.offerAll = exports.offer = exports.make = exports.isNonEmpty = exports.isEmpty = exports.fromIterable = exports.empty = exports.TPriorityQueueTypeId = exports.TPriorityQueueImpl = void 0;
var Arr = _interopRequireWildcard(require("../../Array.js"));
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var SortedMap = _interopRequireWildcard(require("../../SortedMap.js"));
var core = _interopRequireWildcard(require("./core.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TPriorityQueueSymbolKey = "effect/TPriorityQueue";
/** @internal */
const TPriorityQueueTypeId = exports.TPriorityQueueTypeId = /*#__PURE__*/Symbol.for(TPriorityQueueSymbolKey);
const tPriorityQueueVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class TPriorityQueueImpl {
  ref;
  [TPriorityQueueTypeId] = tPriorityQueueVariance;
  constructor(ref) {
    this.ref = ref;
  }
}
/** @internal */
exports.TPriorityQueueImpl = TPriorityQueueImpl;
const empty = order => (0, _Function.pipe)(tRef.make(SortedMap.empty(order)), core.map(ref => new TPriorityQueueImpl(ref)));
/** @internal */
exports.empty = empty;
const fromIterable = order => iterable => (0, _Function.pipe)(tRef.make(Arr.fromIterable(iterable).reduce((map, value) => (0, _Function.pipe)(map, SortedMap.set(value, (0, _Function.pipe)(map, SortedMap.get(value), Option.match({
  onNone: () => Arr.of(value),
  onSome: Arr.prepend(value)
})))), SortedMap.empty(order))), core.map(ref => new TPriorityQueueImpl(ref)));
/** @internal */
exports.fromIterable = fromIterable;
const isEmpty = self => core.map(tRef.get(self.ref), SortedMap.isEmpty);
/** @internal */
exports.isEmpty = isEmpty;
const isNonEmpty = self => core.map(tRef.get(self.ref), SortedMap.isNonEmpty);
/** @internal */
exports.isNonEmpty = isNonEmpty;
const make = order => (...elements) => fromIterable(order)(elements);
/** @internal */
exports.make = make;
const offer = exports.offer = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => tRef.update(self.ref, map => SortedMap.set(map, value, Option.match(SortedMap.get(map, value), {
  onNone: () => Arr.of(value),
  onSome: Arr.prepend(value)
}))));
/** @internal */
const offerAll = exports.offerAll = /*#__PURE__*/(0, _Function.dual)(2, (self, values) => tRef.update(self.ref, map => Arr.fromIterable(values).reduce((map, value) => SortedMap.set(map, value, Option.match(SortedMap.get(map, value), {
  onNone: () => Arr.of(value),
  onSome: Arr.prepend(value)
})), map)));
/** @internal */
const peek = self => core.withSTMRuntime(runtime => {
  const map = tRef.unsafeGet(self.ref, runtime.journal);
  return Option.match(SortedMap.headOption(map), {
    onNone: () => core.retry,
    onSome: elements => core.succeed(elements[0])
  });
});
/** @internal */
exports.peek = peek;
const peekOption = self => tRef.modify(self.ref, map => [Option.map(SortedMap.headOption(map), elements => elements[0]), map]);
/** @internal */
exports.peekOption = peekOption;
const removeIf = exports.removeIf = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => retainIf(self, a => !predicate(a)));
/** @internal */
const retainIf = exports.retainIf = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => tRef.update(self.ref, map => SortedMap.reduce(map, SortedMap.empty(SortedMap.getOrder(map)), (map, value, key) => {
  const filtered = Arr.filter(value, predicate);
  return filtered.length > 0 ? SortedMap.set(map, key, filtered) : SortedMap.remove(map, key);
})));
/** @internal */
const size = self => tRef.modify(self.ref, map => [SortedMap.reduce(map, 0, (n, as) => n + as.length), map]);
/** @internal */
exports.size = size;
const take = self => core.withSTMRuntime(runtime => {
  const map = tRef.unsafeGet(self.ref, runtime.journal);
  return Option.match(SortedMap.headOption(map), {
    onNone: () => core.retry,
    onSome: values => {
      const head = values[1][0];
      const tail = values[1].slice(1);
      tRef.unsafeSet(self.ref, tail.length > 0 ? SortedMap.set(map, head, tail) : SortedMap.remove(map, head), runtime.journal);
      return core.succeed(head);
    }
  });
});
/** @internal */
exports.take = take;
const takeAll = self => tRef.modify(self.ref, map => {
  const builder = [];
  for (const entry of map) {
    for (const value of entry[1]) {
      builder.push(value);
    }
  }
  return [builder, SortedMap.empty(SortedMap.getOrder(map))];
});
/** @internal */
exports.takeAll = takeAll;
const takeOption = self => core.effect(journal => {
  const map = (0, _Function.pipe)(self.ref, tRef.unsafeGet(journal));
  return Option.match(SortedMap.headOption(map), {
    onNone: () => Option.none(),
    onSome: ([key, value]) => {
      const tail = value.slice(1);
      tRef.unsafeSet(self.ref, tail.length > 0 ? SortedMap.set(map, key, tail) : SortedMap.remove(map, key), journal);
      return Option.some(value[0]);
    }
  });
});
/** @internal */
exports.takeOption = takeOption;
const takeUpTo = exports.takeUpTo = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => tRef.modify(self.ref, map => {
  const builder = [];
  const iterator = map[Symbol.iterator]();
  let updated = map;
  let index = 0;
  let next;
  while ((next = iterator.next()) && !next.done && index < n) {
    const [key, value] = next.value;
    const [left, right] = (0, _Function.pipe)(value, Arr.splitAt(n - index));
    for (const value of left) {
      builder.push(value);
    }
    if (right.length > 0) {
      updated = SortedMap.set(updated, key, right);
    } else {
      updated = SortedMap.remove(updated, key);
    }
    index = index + left.length;
  }
  return [builder, updated];
}));
/** @internal */
const toChunk = self => tRef.modify(self.ref, map => {
  const builder = [];
  for (const entry of map) {
    for (const value of entry[1]) {
      builder.push(value);
    }
  }
  return [Chunk.unsafeFromArray(builder), map];
});
/** @internal */
exports.toChunk = toChunk;
const toArray = self => tRef.modify(self.ref, map => {
  const builder = [];
  for (const entry of map) {
    for (const value of entry[1]) {
      builder.push(value);
    }
  }
  return [builder, map];
});
exports.toArray = toArray;
//# sourceMappingURL=tPriorityQueue.js.map