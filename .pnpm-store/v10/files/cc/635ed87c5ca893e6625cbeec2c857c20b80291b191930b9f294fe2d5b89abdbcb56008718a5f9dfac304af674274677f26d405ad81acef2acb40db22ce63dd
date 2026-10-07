"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = exports.transformSTM = exports.transform = exports.toReadonlySet = exports.toHashSet = exports.toChunk = exports.toArray = exports.takeSomeSTM = exports.takeSome = exports.takeFirstSTM = exports.takeFirst = exports.size = exports.retainIf = exports.removeIf = exports.removeAll = exports.remove = exports.reduceSTM = exports.reduce = exports.make = exports.isEmpty = exports.intersection = exports.has = exports.fromIterable = exports.forEach = exports.empty = exports.difference = exports.add = exports.TSetTypeId = void 0;
var RA = _interopRequireWildcard(require("../../Array.js"));
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var _Function = require("../../Function.js");
var HashSet = _interopRequireWildcard(require("../../HashSet.js"));
var _Predicate = require("../../Predicate.js");
var STM = _interopRequireWildcard(require("../../STM.js"));
var core = _interopRequireWildcard(require("./core.js"));
var tMap = _interopRequireWildcard(require("./tMap.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TSetSymbolKey = "effect/TSet";
/** @internal */
const TSetTypeId = exports.TSetTypeId = /*#__PURE__*/Symbol.for(TSetSymbolKey);
const tSetVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class TSetImpl {
  tMap;
  [TSetTypeId] = tSetVariance;
  constructor(tMap) {
    this.tMap = tMap;
  }
}
const isTSet = u => (0, _Predicate.hasProperty)(u, TSetTypeId);
/** @internal */
const add = exports.add = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => tMap.set(self.tMap, value, void 0));
/** @internal */
const difference = exports.difference = /*#__PURE__*/(0, _Function.dual)(2, (self, other) => core.flatMap(toHashSet(other), values => removeIf(self, value => HashSet.has(values, value), {
  discard: true
})));
/** @internal */
const empty = () => fromIterable([]);
/** @internal */
exports.empty = empty;
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduceSTM(self, void 0, (_, value) => f(value)));
/** @internal */
const fromIterable = iterable => core.map(tMap.fromIterable(Array.from(iterable).map(a => [a, void 0])), tMap => new TSetImpl(tMap));
/** @internal */
exports.fromIterable = fromIterable;
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => tMap.has(self.tMap, value));
/** @internal */
const intersection = exports.intersection = /*#__PURE__*/(0, _Function.dual)(2, (self, other) => core.flatMap(toHashSet(other), values => (0, _Function.pipe)(self, retainIf(value => (0, _Function.pipe)(values, HashSet.has(value)), {
  discard: true
}))));
/** @internal */
const isEmpty = self => tMap.isEmpty(self.tMap);
/** @internal */
exports.isEmpty = isEmpty;
const make = (...elements) => fromIterable(elements);
/** @internal */
exports.make = make;
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => tMap.reduce(self.tMap, zero, (acc, _, key) => f(acc, key)));
/** @internal */
const reduceSTM = exports.reduceSTM = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => tMap.reduceSTM(self.tMap, zero, (acc, _, key) => f(acc, key)));
/** @internal */
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => tMap.remove(self.tMap, value));
/** @internal */
const removeAll = exports.removeAll = /*#__PURE__*/(0, _Function.dual)(2, (self, iterable) => tMap.removeAll(self.tMap, iterable));
/** @internal */
const removeIf = exports.removeIf = /*#__PURE__*/(0, _Function.dual)(args => isTSet(args[0]), (self, predicate, options) => options?.discard === true ? tMap.removeIf(self.tMap, key => predicate(key), {
  discard: true
}) : (0, _Function.pipe)(tMap.removeIf(self.tMap, key => predicate(key)), core.map(RA.map(entry => entry[0]))));
/** @internal */
const retainIf = exports.retainIf = /*#__PURE__*/(0, _Function.dual)(args => isTSet(args[0]), (self, predicate, options) => options?.discard === true ? tMap.retainIf(self.tMap, key => predicate(key), {
  discard: true
}) : (0, _Function.pipe)(tMap.retainIf(self.tMap, key => predicate(key)), core.map(RA.map(entry => entry[0]))));
/** @internal */
const size = self => core.map(toChunk(self), chunk => chunk.length);
/** @internal */
exports.size = size;
const takeFirst = exports.takeFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => tMap.takeFirst(self.tMap, key => pf(key)));
/** @internal */
const takeFirstSTM = exports.takeFirstSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => tMap.takeFirstSTM(self.tMap, key => pf(key)));
/** @internal */
const takeSome = exports.takeSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => tMap.takeSome(self.tMap, key => pf(key)));
/** @internal */
const takeSomeSTM = exports.takeSomeSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => tMap.takeSomeSTM(self.tMap, key => pf(key)));
/** @internal */
const toChunk = self => tMap.keys(self.tMap).pipe(STM.map(Chunk.unsafeFromArray));
/** @internal */
exports.toChunk = toChunk;
const toHashSet = self => reduce(self, HashSet.empty(), (acc, value) => (0, _Function.pipe)(acc, HashSet.add(value)));
/** @internal */
exports.toHashSet = toHashSet;
const toArray = self => reduce(self, [], (acc, value) => [...acc, value]);
/** @internal */
exports.toArray = toArray;
const toReadonlySet = self => core.map(toArray(self), values => new Set(values));
/** @internal */
exports.toReadonlySet = toReadonlySet;
const transform = exports.transform = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => tMap.transform(self.tMap, (key, value) => [f(key), value]));
/** @internal */
const transformSTM = exports.transformSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => tMap.transformSTM(self.tMap, (key, value) => core.map(f(key), a => [a, value])));
/** @internal */
const union = exports.union = /*#__PURE__*/(0, _Function.dual)(2, (self, other) => forEach(other, value => add(self, value)));
//# sourceMappingURL=tSet.js.map