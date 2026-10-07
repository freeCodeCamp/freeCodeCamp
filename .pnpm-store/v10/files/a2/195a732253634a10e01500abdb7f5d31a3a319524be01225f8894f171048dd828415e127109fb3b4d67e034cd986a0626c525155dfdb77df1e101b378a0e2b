import * as Arr from "../../Array.js";
import * as Chunk from "../../Chunk.js";
import { dual, pipe } from "../../Function.js";
import * as Option from "../../Option.js";
import * as SortedMap from "../../SortedMap.js";
import * as core from "./core.js";
import * as tRef from "./tRef.js";
/** @internal */
const TPriorityQueueSymbolKey = "effect/TPriorityQueue";
/** @internal */
export const TPriorityQueueTypeId = /*#__PURE__*/Symbol.for(TPriorityQueueSymbolKey);
const tPriorityQueueVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
export class TPriorityQueueImpl {
  ref;
  [TPriorityQueueTypeId] = tPriorityQueueVariance;
  constructor(ref) {
    this.ref = ref;
  }
}
/** @internal */
export const empty = order => pipe(tRef.make(SortedMap.empty(order)), core.map(ref => new TPriorityQueueImpl(ref)));
/** @internal */
export const fromIterable = order => iterable => pipe(tRef.make(Arr.fromIterable(iterable).reduce((map, value) => pipe(map, SortedMap.set(value, pipe(map, SortedMap.get(value), Option.match({
  onNone: () => Arr.of(value),
  onSome: Arr.prepend(value)
})))), SortedMap.empty(order))), core.map(ref => new TPriorityQueueImpl(ref)));
/** @internal */
export const isEmpty = self => core.map(tRef.get(self.ref), SortedMap.isEmpty);
/** @internal */
export const isNonEmpty = self => core.map(tRef.get(self.ref), SortedMap.isNonEmpty);
/** @internal */
export const make = order => (...elements) => fromIterable(order)(elements);
/** @internal */
export const offer = /*#__PURE__*/dual(2, (self, value) => tRef.update(self.ref, map => SortedMap.set(map, value, Option.match(SortedMap.get(map, value), {
  onNone: () => Arr.of(value),
  onSome: Arr.prepend(value)
}))));
/** @internal */
export const offerAll = /*#__PURE__*/dual(2, (self, values) => tRef.update(self.ref, map => Arr.fromIterable(values).reduce((map, value) => SortedMap.set(map, value, Option.match(SortedMap.get(map, value), {
  onNone: () => Arr.of(value),
  onSome: Arr.prepend(value)
})), map)));
/** @internal */
export const peek = self => core.withSTMRuntime(runtime => {
  const map = tRef.unsafeGet(self.ref, runtime.journal);
  return Option.match(SortedMap.headOption(map), {
    onNone: () => core.retry,
    onSome: elements => core.succeed(elements[0])
  });
});
/** @internal */
export const peekOption = self => tRef.modify(self.ref, map => [Option.map(SortedMap.headOption(map), elements => elements[0]), map]);
/** @internal */
export const removeIf = /*#__PURE__*/dual(2, (self, predicate) => retainIf(self, a => !predicate(a)));
/** @internal */
export const retainIf = /*#__PURE__*/dual(2, (self, predicate) => tRef.update(self.ref, map => SortedMap.reduce(map, SortedMap.empty(SortedMap.getOrder(map)), (map, value, key) => {
  const filtered = Arr.filter(value, predicate);
  return filtered.length > 0 ? SortedMap.set(map, key, filtered) : SortedMap.remove(map, key);
})));
/** @internal */
export const size = self => tRef.modify(self.ref, map => [SortedMap.reduce(map, 0, (n, as) => n + as.length), map]);
/** @internal */
export const take = self => core.withSTMRuntime(runtime => {
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
export const takeAll = self => tRef.modify(self.ref, map => {
  const builder = [];
  for (const entry of map) {
    for (const value of entry[1]) {
      builder.push(value);
    }
  }
  return [builder, SortedMap.empty(SortedMap.getOrder(map))];
});
/** @internal */
export const takeOption = self => core.effect(journal => {
  const map = pipe(self.ref, tRef.unsafeGet(journal));
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
export const takeUpTo = /*#__PURE__*/dual(2, (self, n) => tRef.modify(self.ref, map => {
  const builder = [];
  const iterator = map[Symbol.iterator]();
  let updated = map;
  let index = 0;
  let next;
  while ((next = iterator.next()) && !next.done && index < n) {
    const [key, value] = next.value;
    const [left, right] = pipe(value, Arr.splitAt(n - index));
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
export const toChunk = self => tRef.modify(self.ref, map => {
  const builder = [];
  for (const entry of map) {
    for (const value of entry[1]) {
      builder.push(value);
    }
  }
  return [Chunk.unsafeFromArray(builder), map];
});
/** @internal */
export const toArray = self => tRef.modify(self.ref, map => {
  const builder = [];
  for (const entry of map) {
    for (const value of entry[1]) {
      builder.push(value);
    }
  }
  return [builder, map];
});
//# sourceMappingURL=tPriorityQueue.js.map