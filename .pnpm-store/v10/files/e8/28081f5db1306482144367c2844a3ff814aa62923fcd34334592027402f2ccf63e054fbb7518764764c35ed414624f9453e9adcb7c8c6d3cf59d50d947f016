"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.updateWith = exports.transformValuesSTM = exports.transformValues = exports.transformSTM = exports.transform = exports.toMap = exports.toHashMap = exports.toChunk = exports.toArray = exports.takeSomeSTM = exports.takeSome = exports.takeFirstSTM = exports.takeFirst = exports.size = exports.setIfAbsent = exports.set = exports.retainIf = exports.removeIf = exports.removeAll = exports.remove = exports.reduceSTM = exports.reduce = exports.merge = exports.make = exports.keys = exports.isEmpty = exports.has = exports.getOrElse = exports.get = exports.fromIterable = exports.forEach = exports.findSTM = exports.findAllSTM = exports.findAll = exports.find = exports.empty = exports.TMapTypeId = void 0;
var RA = _interopRequireWildcard(require("../../Array.js"));
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var HashMap = _interopRequireWildcard(require("../../HashMap.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var _Predicate = require("../../Predicate.js");
var STM = _interopRequireWildcard(require("../../STM.js"));
var core = _interopRequireWildcard(require("./core.js"));
var stm = _interopRequireWildcard(require("./stm.js"));
var tArray = _interopRequireWildcard(require("./tArray.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TMapSymbolKey = "effect/TMap";
/** @internal */
const TMapTypeId = exports.TMapTypeId = /*#__PURE__*/Symbol.for(TMapSymbolKey);
const tMapVariance = {
  /* c8 ignore next */
  _K: _ => _,
  /* c8 ignore next */
  _V: _ => _
};
/** @internal */
class TMapImpl {
  tBuckets;
  tSize;
  [TMapTypeId] = tMapVariance;
  constructor(tBuckets, tSize) {
    this.tBuckets = tBuckets;
    this.tSize = tSize;
  }
}
const isTMap = u => (0, _Predicate.hasProperty)(u, TMapTypeId);
/** @internal */
const InitialCapacity = 16;
const LoadFactor = 0.75;
/** @internal */
const nextPowerOfTwo = size => {
  const n = -1 >>> Math.clz32(size - 1);
  return n < 0 ? 1 : n + 1;
};
/** @internal */
const hash = key => {
  const h = Hash.hash(key);
  return h ^ h >>> 16;
};
/** @internal */
const indexOf = (k, capacity) => hash(k) & capacity - 1;
/** @internal */
const allocate = (capacity, data) => {
  const buckets = Array.from({
    length: capacity
  }, () => Chunk.empty());
  const distinct = new Map(data);
  let size = 0;
  for (const entry of distinct) {
    const index = indexOf(entry[0], capacity);
    buckets[index] = (0, _Function.pipe)(buckets[index], Chunk.prepend(entry));
    size = size + 1;
  }
  return (0, _Function.pipe)(tArray.fromIterable(buckets), core.flatMap(buckets => (0, _Function.pipe)(tRef.make(buckets), core.flatMap(tBuckets => (0, _Function.pipe)(tRef.make(size), core.map(tSize => new TMapImpl(tBuckets, tSize)))))));
};
/** @internal */
const empty = () => fromIterable([]);
/** @internal */
exports.empty = empty;
const find = exports.find = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => findSTM(self, (key, value) => {
  const option = pf(key, value);
  if (Option.isSome(option)) {
    return core.succeed(option.value);
  }
  return core.fail(Option.none());
}));
/** @internal */
const findSTM = exports.findSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduceSTM(self, Option.none(), (acc, value, key) => Option.isNone(acc) ? core.matchSTM(f(key, value), {
  onFailure: Option.match({
    onNone: () => stm.succeedNone,
    onSome: core.fail
  }),
  onSuccess: stm.succeedSome
}) : STM.succeed(acc)));
/** @internal */
const findAll = exports.findAll = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => findAllSTM(self, (key, value) => {
  const option = pf(key, value);
  if (Option.isSome(option)) {
    return core.succeed(option.value);
  }
  return core.fail(Option.none());
}));
/** @internal */
const findAllSTM = exports.findAllSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => core.map(reduceSTM(self, Chunk.empty(), (acc, value, key) => core.matchSTM(pf(key, value), {
  onFailure: Option.match({
    onNone: () => core.succeed(acc),
    onSome: core.fail
  }),
  onSuccess: a => core.succeed(Chunk.append(acc, a))
})), a => Array.from(a)));
/** @internal */
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduceSTM(self, void 0, (_, value, key) => stm.asVoid(f(key, value))));
/** @internal */
const fromIterable = iterable => stm.suspend(() => {
  const data = Chunk.fromIterable(iterable);
  const capacity = data.length < InitialCapacity ? InitialCapacity : nextPowerOfTwo(data.length);
  return allocate(capacity, data);
});
/** @internal */
exports.fromIterable = fromIterable;
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => core.effect(journal => {
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  const index = indexOf(key, buckets.chunk.length);
  const bucket = tRef.unsafeGet(buckets.chunk[index], journal);
  return (0, _Function.pipe)(Chunk.findFirst(bucket, entry => Equal.equals(entry[0])(key)), Option.map(entry => entry[1]));
}));
/** @internal */
const getOrElse = exports.getOrElse = /*#__PURE__*/(0, _Function.dual)(3, (self, key, fallback) => core.map(get(self, key), Option.getOrElse(fallback)));
/** @internal */
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => core.map(get(self, key), Option.isSome));
/** @internal */
const isEmpty = self => core.map(tRef.get(self.tSize), size => size === 0);
/** @internal */
exports.isEmpty = isEmpty;
const keys = self => core.map(toReadonlyArray(self), RA.map(entry => entry[0]));
/** @internal */
exports.keys = keys;
const make = (...entries) => fromIterable(entries);
/** @internal */
exports.make = make;
const merge = exports.merge = /*#__PURE__*/(0, _Function.dual)(4, (self, key, value, f) => core.flatMap(get(self, key), Option.match({
  onNone: () => stm.as(set(self, key, value), value),
  onSome: v0 => {
    const v1 = f(v0, value);
    return stm.as(set(self, key, v1), v1);
  }
})));
/** @internal */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => core.effect(journal => {
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  let result = zero;
  let index = 0;
  while (index < buckets.chunk.length) {
    const bucket = buckets.chunk[index];
    const items = tRef.unsafeGet(bucket, journal);
    result = Chunk.reduce(items, result, (acc, entry) => f(acc, entry[1], entry[0]));
    index = index + 1;
  }
  return result;
}));
/** @internal */
const reduceSTM = exports.reduceSTM = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => core.flatMap(toReadonlyArray(self), stm.reduce(zero, (acc, entry) => f(acc, entry[1], entry[0]))));
/** @internal */
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => core.effect(journal => {
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  const index = indexOf(key, buckets.chunk.length);
  const bucket = tRef.unsafeGet(buckets.chunk[index], journal);
  const [toRemove, toRetain] = Chunk.partition(bucket, entry => Equal.equals(entry[1], key));
  if (Chunk.isNonEmpty(toRemove)) {
    const currentSize = tRef.unsafeGet(self.tSize, journal);
    tRef.unsafeSet(buckets.chunk[index], toRetain, journal);
    tRef.unsafeSet(self.tSize, currentSize - 1, journal);
  }
}));
/** @internal */
const removeAll = exports.removeAll = /*#__PURE__*/(0, _Function.dual)(2, (self, keys) => core.effect(journal => {
  const iterator = keys[Symbol.iterator]();
  let next;
  while ((next = iterator.next()) && !next.done) {
    const buckets = tRef.unsafeGet(self.tBuckets, journal);
    const index = indexOf(next.value, buckets.chunk.length);
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal);
    const [toRemove, toRetain] = Chunk.partition(bucket, entry => Equal.equals(next.value)(entry[0]));
    if (Chunk.isNonEmpty(toRemove)) {
      const currentSize = tRef.unsafeGet(self.tSize, journal);
      tRef.unsafeSet(buckets.chunk[index], toRetain, journal);
      tRef.unsafeSet(self.tSize, currentSize - 1, journal);
    }
  }
}));
/** @internal */
const removeIf = exports.removeIf = /*#__PURE__*/(0, _Function.dual)(args => isTMap(args[0]), (self, predicate, options) => core.effect(journal => {
  const discard = options?.discard === true;
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  const capacity = buckets.chunk.length;
  const removed = [];
  let index = 0;
  let newSize = 0;
  while (index < capacity) {
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal);
    const iterator = bucket[Symbol.iterator]();
    let next;
    let newBucket = Chunk.empty();
    while ((next = iterator.next()) && !next.done) {
      const [k, v] = next.value;
      if (!predicate(k, v)) {
        newBucket = Chunk.prepend(newBucket, next.value);
        newSize = newSize + 1;
      } else {
        if (!discard) {
          removed.push([k, v]);
        }
      }
    }
    tRef.unsafeSet(buckets.chunk[index], newBucket, journal);
    index = index + 1;
  }
  tRef.unsafeSet(self.tSize, newSize, journal);
  if (!discard) {
    return removed;
  }
}));
/** @internal */
const retainIf = exports.retainIf = /*#__PURE__*/(0, _Function.dual)(args => isTMap(args[0]), (self, predicate, options) => removeIf(self, (key, value) => !predicate(key, value), options));
/** @internal */
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => {
  const resize = (journal, buckets) => {
    const capacity = buckets.chunk.length;
    const newCapacity = capacity << 1;
    const newBuckets = Array.from({
      length: newCapacity
    }, () => Chunk.empty());
    let index = 0;
    while (index < capacity) {
      const pairs = tRef.unsafeGet(buckets.chunk[index], journal);
      const iterator = pairs[Symbol.iterator]();
      let next;
      while ((next = iterator.next()) && !next.done) {
        const newIndex = indexOf(next.value[0], newCapacity);
        newBuckets[newIndex] = Chunk.prepend(newBuckets[newIndex], next.value);
      }
      index = index + 1;
    }
    // insert new pair
    const newIndex = indexOf(key, newCapacity);
    newBuckets[newIndex] = Chunk.prepend(newBuckets[newIndex], [key, value]);
    const newArray = [];
    index = 0;
    while (index < newCapacity) {
      newArray[index] = new tRef.TRefImpl(newBuckets[index]);
      index = index + 1;
    }
    const newTArray = new tArray.TArrayImpl(newArray);
    tRef.unsafeSet(self.tBuckets, newTArray, journal);
  };
  return core.effect(journal => {
    const buckets = tRef.unsafeGet(self.tBuckets, journal);
    const capacity = buckets.chunk.length;
    const index = indexOf(key, capacity);
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal);
    const shouldUpdate = Chunk.some(bucket, entry => Equal.equals(key)(entry[0]));
    if (shouldUpdate) {
      const newBucket = Chunk.map(bucket, entry => Equal.equals(key)(entry[0]) ? [key, value] : entry);
      tRef.unsafeSet(buckets.chunk[index], newBucket, journal);
    } else {
      const newSize = tRef.unsafeGet(self.tSize, journal) + 1;
      tRef.unsafeSet(self.tSize, newSize, journal);
      if (capacity * LoadFactor < newSize) {
        resize(journal, buckets);
      } else {
        const newBucket = Chunk.prepend(bucket, [key, value]);
        tRef.unsafeSet(buckets.chunk[index], newBucket, journal);
      }
    }
  });
});
/** @internal */
const setIfAbsent = exports.setIfAbsent = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => core.flatMap(get(self, key), Option.match({
  onNone: () => set(self, key, value),
  onSome: () => stm.void
})));
/** @internal */
const size = self => tRef.get(self.tSize);
/** @internal */
exports.size = size;
const takeFirst = exports.takeFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(core.effect(journal => {
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  const capacity = buckets.chunk.length;
  const size = tRef.unsafeGet(self.tSize, journal);
  let result = Option.none();
  let index = 0;
  while (index < capacity && Option.isNone(result)) {
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal);
    const recreate = Chunk.some(bucket, entry => Option.isSome(pf(entry[0], entry[1])));
    if (recreate) {
      const iterator = bucket[Symbol.iterator]();
      let newBucket = Chunk.empty();
      let next;
      while ((next = iterator.next()) && !next.done && Option.isNone(result)) {
        const option = pf(next.value[0], next.value[1]);
        if (Option.isSome(option) && Option.isNone(result)) {
          result = option;
        } else {
          newBucket = Chunk.prepend(newBucket, next.value);
        }
      }
      tRef.unsafeSet(buckets.chunk[index], newBucket, journal);
    }
    index = index + 1;
  }
  if (Option.isSome(result)) {
    tRef.unsafeSet(self.tSize, size - 1, journal);
  }
  return result;
}), stm.collect(option => Option.isSome(option) ? Option.some(option.value) : Option.none())));
/** @internal */
const takeFirstSTM = exports.takeFirstSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(findSTM(self, (key, value) => core.map(pf(key, value), a => [key, a])), stm.collect(option => Option.isSome(option) ? Option.some(option.value) : Option.none()), core.flatMap(entry => stm.as(remove(self, entry[0]), entry[1]))));
/** @internal */
const takeSome = exports.takeSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(core.effect(journal => {
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  const capacity = buckets.chunk.length;
  const builder = [];
  let newSize = 0;
  let index = 0;
  while (index < capacity) {
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal);
    const recreate = Chunk.some(bucket, entry => Option.isSome(pf(entry[0], entry[1])));
    if (recreate) {
      const iterator = bucket[Symbol.iterator]();
      let newBucket = Chunk.empty();
      let next;
      while ((next = iterator.next()) && !next.done) {
        const option = pf(next.value[0], next.value[1]);
        if (Option.isSome(option)) {
          builder.push(option.value);
        } else {
          newBucket = Chunk.prepend(newBucket, next.value);
          newSize = newSize + 1;
        }
      }
      tRef.unsafeSet(buckets.chunk[index], newBucket, journal);
    } else {
      newSize = newSize + bucket.length;
    }
    index = index + 1;
  }
  tRef.unsafeSet(self.tSize, newSize, journal);
  if (builder.length > 0) {
    return Option.some(builder);
  }
  return Option.none();
}), stm.collect(option => Option.isSome(option) ? Option.some(option.value) : Option.none())));
/** @internal */
const takeSomeSTM = exports.takeSomeSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(findAllSTM(self, (key, value) => core.map(pf(key, value), a => [key, a])), core.map(chunk => RA.isNonEmptyArray(chunk) ? Option.some(chunk) : Option.none()), stm.collect(option => Option.isSome(option) ? Option.some(option.value) : Option.none()), core.flatMap(entries => stm.as(removeAll(self, entries.map(entry => entry[0])), RA.map(entries, entry => entry[1])))));
const toReadonlyArray = self => core.effect(journal => {
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  const capacity = buckets.chunk.length;
  const builder = [];
  let index = 0;
  while (index < capacity) {
    const bucket = buckets.chunk[index];
    for (const entry of tRef.unsafeGet(bucket, journal)) {
      builder.push(entry);
    }
    index = index + 1;
  }
  return builder;
});
/** @internal */
const toChunk = self => reduce(self, Chunk.empty(), (acc, value, key) => Chunk.append(acc, [key, value]));
/** @internal */
exports.toChunk = toChunk;
const toHashMap = self => reduce(self, HashMap.empty(), (acc, value, key) => (0, _Function.pipe)(acc, HashMap.set(key, value)));
/** @internal */
exports.toHashMap = toHashMap;
const toArray = self => reduce(self, [], (acc, value, key) => {
  acc.unshift([key, value]);
  return acc;
});
/** @internal */
exports.toArray = toArray;
const toMap = self => reduce(self, new Map(), (acc, value, key) => acc.set(key, value));
/** @internal */
exports.toMap = toMap;
const transform = exports.transform = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.effect(journal => {
  const buckets = (0, _Function.pipe)(self.tBuckets, tRef.unsafeGet(journal));
  const capacity = buckets.chunk.length;
  const newBuckets = Array.from({
    length: capacity
  }, () => Chunk.empty());
  let newSize = 0;
  let index = 0;
  while (index < capacity) {
    const bucket = buckets.chunk[index];
    const pairs = tRef.unsafeGet(bucket, journal);
    const iterator = pairs[Symbol.iterator]();
    let next;
    while ((next = iterator.next()) && !next.done) {
      const newPair = f(next.value[0], next.value[1]);
      const index = indexOf(newPair[0], capacity);
      const newBucket = newBuckets[index];
      if (!Chunk.some(newBucket, entry => Equal.equals(entry[0], newPair[0]))) {
        newBuckets[index] = Chunk.prepend(newBucket, newPair);
        newSize = newSize + 1;
      }
    }
    index = index + 1;
  }
  index = 0;
  while (index < capacity) {
    tRef.unsafeSet(buckets.chunk[index], newBuckets[index], journal);
    index = index + 1;
  }
  tRef.unsafeSet(self.tSize, newSize, journal);
}));
/** @internal */
const transformSTM = exports.transformSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(core.flatMap(toReadonlyArray(self), stm.forEach(entry => f(entry[0], entry[1]))), core.flatMap(newData => core.effect(journal => {
  const buckets = tRef.unsafeGet(self.tBuckets, journal);
  const capacity = buckets.chunk.length;
  const newBuckets = Array.from({
    length: capacity
  }, () => Chunk.empty());
  const iterator = newData[Symbol.iterator]();
  let newSize = 0;
  let next;
  while ((next = iterator.next()) && !next.done) {
    const index = indexOf(next.value[0], capacity);
    const newBucket = newBuckets[index];
    if (!Chunk.some(newBucket, entry => Equal.equals(entry[0])(next.value[0]))) {
      newBuckets[index] = Chunk.prepend(newBucket, next.value);
      newSize = newSize + 1;
    }
  }
  let index = 0;
  while (index < capacity) {
    tRef.unsafeSet(buckets.chunk[index], newBuckets[index], journal);
    index = index + 1;
  }
  tRef.unsafeSet(self.tSize, newSize, journal);
}))));
/** @internal */
const transformValues = exports.transformValues = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => transform(self, (key, value) => [key, f(value)]));
/** @internal */
const transformValuesSTM = exports.transformValuesSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => transformSTM(self, (key, value) => core.map(f(value), value => [key, value])));
/** @internal */
const updateWith = exports.updateWith = /*#__PURE__*/(0, _Function.dual)(3, (self, key, f) => core.flatMap(get(self, key), option => Option.match(f(option), {
  onNone: () => stm.as(remove(self, key), Option.none()),
  onSome: value => stm.as(set(self, key, value), Option.some(value))
})));
/** @internal */
const values = self => core.map(toReadonlyArray(self), RA.map(entry => entry[1]));
exports.values = values;
//# sourceMappingURL=tMap.js.map