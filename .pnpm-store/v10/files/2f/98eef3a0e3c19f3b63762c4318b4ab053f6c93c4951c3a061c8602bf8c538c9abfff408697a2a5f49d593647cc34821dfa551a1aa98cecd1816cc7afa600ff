import * as RA from "../../Array.js";
import * as Chunk from "../../Chunk.js";
import { dual, pipe } from "../../Function.js";
import * as HashSet from "../../HashSet.js";
import { hasProperty } from "../../Predicate.js";
import * as STM from "../../STM.js";
import * as core from "./core.js";
import * as tMap from "./tMap.js";
/** @internal */
const TSetSymbolKey = "effect/TSet";
/** @internal */
export const TSetTypeId = /*#__PURE__*/Symbol.for(TSetSymbolKey);
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
const isTSet = u => hasProperty(u, TSetTypeId);
/** @internal */
export const add = /*#__PURE__*/dual(2, (self, value) => tMap.set(self.tMap, value, void 0));
/** @internal */
export const difference = /*#__PURE__*/dual(2, (self, other) => core.flatMap(toHashSet(other), values => removeIf(self, value => HashSet.has(values, value), {
  discard: true
})));
/** @internal */
export const empty = () => fromIterable([]);
/** @internal */
export const forEach = /*#__PURE__*/dual(2, (self, f) => reduceSTM(self, void 0, (_, value) => f(value)));
/** @internal */
export const fromIterable = iterable => core.map(tMap.fromIterable(Array.from(iterable).map(a => [a, void 0])), tMap => new TSetImpl(tMap));
/** @internal */
export const has = /*#__PURE__*/dual(2, (self, value) => tMap.has(self.tMap, value));
/** @internal */
export const intersection = /*#__PURE__*/dual(2, (self, other) => core.flatMap(toHashSet(other), values => pipe(self, retainIf(value => pipe(values, HashSet.has(value)), {
  discard: true
}))));
/** @internal */
export const isEmpty = self => tMap.isEmpty(self.tMap);
/** @internal */
export const make = (...elements) => fromIterable(elements);
/** @internal */
export const reduce = /*#__PURE__*/dual(3, (self, zero, f) => tMap.reduce(self.tMap, zero, (acc, _, key) => f(acc, key)));
/** @internal */
export const reduceSTM = /*#__PURE__*/dual(3, (self, zero, f) => tMap.reduceSTM(self.tMap, zero, (acc, _, key) => f(acc, key)));
/** @internal */
export const remove = /*#__PURE__*/dual(2, (self, value) => tMap.remove(self.tMap, value));
/** @internal */
export const removeAll = /*#__PURE__*/dual(2, (self, iterable) => tMap.removeAll(self.tMap, iterable));
/** @internal */
export const removeIf = /*#__PURE__*/dual(args => isTSet(args[0]), (self, predicate, options) => options?.discard === true ? tMap.removeIf(self.tMap, key => predicate(key), {
  discard: true
}) : pipe(tMap.removeIf(self.tMap, key => predicate(key)), core.map(RA.map(entry => entry[0]))));
/** @internal */
export const retainIf = /*#__PURE__*/dual(args => isTSet(args[0]), (self, predicate, options) => options?.discard === true ? tMap.retainIf(self.tMap, key => predicate(key), {
  discard: true
}) : pipe(tMap.retainIf(self.tMap, key => predicate(key)), core.map(RA.map(entry => entry[0]))));
/** @internal */
export const size = self => core.map(toChunk(self), chunk => chunk.length);
/** @internal */
export const takeFirst = /*#__PURE__*/dual(2, (self, pf) => tMap.takeFirst(self.tMap, key => pf(key)));
/** @internal */
export const takeFirstSTM = /*#__PURE__*/dual(2, (self, pf) => tMap.takeFirstSTM(self.tMap, key => pf(key)));
/** @internal */
export const takeSome = /*#__PURE__*/dual(2, (self, pf) => tMap.takeSome(self.tMap, key => pf(key)));
/** @internal */
export const takeSomeSTM = /*#__PURE__*/dual(2, (self, pf) => tMap.takeSomeSTM(self.tMap, key => pf(key)));
/** @internal */
export const toChunk = self => tMap.keys(self.tMap).pipe(STM.map(Chunk.unsafeFromArray));
/** @internal */
export const toHashSet = self => reduce(self, HashSet.empty(), (acc, value) => pipe(acc, HashSet.add(value)));
/** @internal */
export const toArray = self => reduce(self, [], (acc, value) => [...acc, value]);
/** @internal */
export const toReadonlySet = self => core.map(toArray(self), values => new Set(values));
/** @internal */
export const transform = /*#__PURE__*/dual(2, (self, f) => tMap.transform(self.tMap, (key, value) => [f(key), value]));
/** @internal */
export const transformSTM = /*#__PURE__*/dual(2, (self, f) => tMap.transformSTM(self.tMap, (key, value) => core.map(f(key), a => [a, value])));
/** @internal */
export const union = /*#__PURE__*/dual(2, (self, other) => forEach(other, value => add(self, value)));
//# sourceMappingURL=tSet.js.map