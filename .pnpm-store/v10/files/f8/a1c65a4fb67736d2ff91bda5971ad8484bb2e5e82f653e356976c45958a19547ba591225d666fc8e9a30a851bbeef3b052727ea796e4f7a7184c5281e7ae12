import * as Equal from "./Equal.js";
import { dual } from "./Function.js";
import * as Hash from "./Hash.js";
import { format, NodeInspectSymbol, toJSON } from "./Inspectable.js";
import * as Option from "./Option.js";
import { pipeArguments } from "./Pipeable.js";
const TypeId = /*#__PURE__*/Symbol.for("effect/MutableHashMap");
const MutableHashMapProto = {
  [TypeId]: TypeId,
  [Symbol.iterator]() {
    return new MutableHashMapIterator(this);
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
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
class MutableHashMapIterator {
  self;
  referentialIterator;
  bucketIterator;
  constructor(self) {
    this.self = self;
    this.referentialIterator = self.referential[Symbol.iterator]();
  }
  next() {
    if (this.bucketIterator !== undefined) {
      return this.bucketIterator.next();
    }
    const result = this.referentialIterator.next();
    if (result.done) {
      this.bucketIterator = new BucketIterator(this.self.buckets.values());
      return this.next();
    }
    return result;
  }
  [Symbol.iterator]() {
    return new MutableHashMapIterator(this.self);
  }
}
class BucketIterator {
  backing;
  constructor(backing) {
    this.backing = backing;
  }
  currentBucket;
  next() {
    if (this.currentBucket === undefined) {
      const result = this.backing.next();
      if (result.done) {
        return result;
      }
      this.currentBucket = result.value[Symbol.iterator]();
    }
    const result = this.currentBucket.next();
    if (result.done) {
      this.currentBucket = undefined;
      return this.next();
    }
    return result;
  }
}
/**
 * @since 2.0.0
 * @category constructors
 */
export const empty = () => {
  const self = Object.create(MutableHashMapProto);
  self.referential = new Map();
  self.buckets = new Map();
  self.bucketsSize = 0;
  return self;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = (...entries) => fromIterable(entries);
/**
 * Creates a new `MutableHashMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable = entries => {
  const self = empty();
  for (const [key, value] of entries) {
    set(self, key, value);
  }
  return self;
};
/**
 * @since 2.0.0
 * @category elements
 */
export const get = /*#__PURE__*/dual(2, (self, key) => {
  if (Equal.isEqual(key) === false) {
    return self.referential.has(key) ? Option.some(self.referential.get(key)) : Option.none();
  }
  const hash = key[Hash.symbol]();
  const bucket = self.buckets.get(hash);
  if (bucket === undefined) {
    return Option.none();
  }
  return getFromBucket(self, bucket, key);
});
/**
 * @since 3.8.0
 * @category elements
 */
export const keys = self => {
  const keys = Array.from(self.referential.keys());
  for (const bucket of self.buckets.values()) {
    for (let i = 0, len = bucket.length; i < len; i++) {
      keys.push(bucket[i][0]);
    }
  }
  return keys;
};
/**
 * @since 3.8.0
 * @category elements
 */
export const values = self => {
  const values = Array.from(self.referential.values());
  for (const bucket of self.buckets.values()) {
    for (let i = 0, len = bucket.length; i < len; i++) {
      values.push(bucket[i][1]);
    }
  }
  return values;
};
const getFromBucket = (self, bucket, key, remove = false) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[Equal.symbol](bucket[i][0])) {
      const value = bucket[i][1];
      if (remove) {
        bucket.splice(i, 1);
        self.bucketsSize--;
      }
      return Option.some(value);
    }
  }
  return Option.none();
};
/**
 * @since 2.0.0
 * @category elements
 */
export const has = /*#__PURE__*/dual(2, (self, key) => Option.isSome(get(self, key)));
/**
 * @since 2.0.0
 */
export const set = /*#__PURE__*/dual(3, (self, key, value) => {
  if (Equal.isEqual(key) === false) {
    self.referential.set(key, value);
    return self;
  }
  const hash = key[Hash.symbol]();
  const bucket = self.buckets.get(hash);
  if (bucket === undefined) {
    self.buckets.set(hash, [[key, value]]);
    self.bucketsSize++;
    return self;
  }
  removeFromBucket(self, bucket, key);
  bucket.push([key, value]);
  self.bucketsSize++;
  return self;
});
const removeFromBucket = (self, bucket, key) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[Equal.symbol](bucket[i][0])) {
      bucket.splice(i, 1);
      self.bucketsSize--;
      return;
    }
  }
};
/**
 * Updates the value of the specified key within the `MutableHashMap` if it exists.
 *
 * @since 2.0.0
 */
export const modify = /*#__PURE__*/dual(3, (self, key, f) => {
  if (Equal.isEqual(key) === false) {
    if (self.referential.has(key)) {
      self.referential.set(key, f(self.referential.get(key)));
    }
    return self;
  }
  const hash = key[Hash.symbol]();
  const bucket = self.buckets.get(hash);
  if (bucket === undefined) {
    return self;
  }
  const value = getFromBucket(self, bucket, key, true);
  if (Option.isNone(value)) {
    return self;
  }
  bucket.push([key, f(value.value)]);
  self.bucketsSize++;
  return self;
});
/**
 * Set or remove the specified key in the `MutableHashMap` using the specified
 * update function.
 *
 * @since 2.0.0
 */
export const modifyAt = /*#__PURE__*/dual(3, (self, key, f) => {
  if (Equal.isEqual(key) === false) {
    const result = f(get(self, key));
    if (Option.isSome(result)) {
      set(self, key, result.value);
    } else {
      remove(self, key);
    }
    return self;
  }
  const hash = key[Hash.symbol]();
  const bucket = self.buckets.get(hash);
  if (bucket === undefined) {
    const result = f(Option.none());
    return Option.isSome(result) ? set(self, key, result.value) : self;
  }
  const result = f(getFromBucket(self, bucket, key, true));
  if (Option.isNone(result)) {
    if (bucket.length === 0) {
      self.buckets.delete(hash);
    }
    return self;
  }
  bucket.push([key, result.value]);
  self.bucketsSize++;
  return self;
});
/**
 * @since 2.0.0
 */
export const remove = /*#__PURE__*/dual(2, (self, key) => {
  if (Equal.isEqual(key) === false) {
    self.referential.delete(key);
    return self;
  }
  const hash = key[Hash.symbol]();
  const bucket = self.buckets.get(hash);
  if (bucket === undefined) {
    return self;
  }
  removeFromBucket(self, bucket, key);
  if (bucket.length === 0) {
    self.buckets.delete(hash);
  }
  return self;
});
/**
 * @since 2.0.0
 */
export const clear = self => {
  self.referential.clear();
  self.buckets.clear();
  self.bucketsSize = 0;
  return self;
};
/**
 * @since 2.0.0
 * @category elements
 */
export const size = self => {
  return self.referential.size + self.bucketsSize;
};
/**
 * @since 2.0.0
 */
export const isEmpty = self => size(self) === 0;
/**
 * @since 2.0.0
 */
export const forEach = /*#__PURE__*/dual(2, (self, f) => {
  self.referential.forEach(f);
  for (const bucket of self.buckets.values()) {
    for (const [key, value] of bucket) {
      f(value, key);
    }
  }
});
//# sourceMappingURL=MutableHashMap.js.map