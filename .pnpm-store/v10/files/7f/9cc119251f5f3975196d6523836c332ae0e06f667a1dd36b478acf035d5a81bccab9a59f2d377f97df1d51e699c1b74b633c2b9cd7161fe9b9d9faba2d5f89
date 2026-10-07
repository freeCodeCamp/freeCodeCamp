"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.size = exports.set = exports.remove = exports.modifyAt = exports.modify = exports.make = exports.keys = exports.isEmpty = exports.has = exports.get = exports.fromIterable = exports.forEach = exports.empty = exports.clear = void 0;
var Equal = _interopRequireWildcard(require("./Equal.js"));
var _Function = require("./Function.js");
var Hash = _interopRequireWildcard(require("./Hash.js"));
var _Inspectable = require("./Inspectable.js");
var Option = _interopRequireWildcard(require("./Option.js"));
var _Pipeable = require("./Pipeable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const TypeId = /*#__PURE__*/Symbol.for("effect/MutableHashMap");
const MutableHashMapProto = {
  [TypeId]: TypeId,
  [Symbol.iterator]() {
    return new MutableHashMapIterator(this);
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
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
const empty = () => {
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
exports.empty = empty;
const make = (...entries) => fromIterable(entries);
/**
 * Creates a new `MutableHashMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.make = make;
const fromIterable = entries => {
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
exports.fromIterable = fromIterable;
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
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
const keys = self => {
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
exports.keys = keys;
const values = self => {
  const values = Array.from(self.referential.values());
  for (const bucket of self.buckets.values()) {
    for (let i = 0, len = bucket.length; i < len; i++) {
      values.push(bucket[i][1]);
    }
  }
  return values;
};
exports.values = values;
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
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => Option.isSome(get(self, key)));
/**
 * @since 2.0.0
 */
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => {
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
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(3, (self, key, f) => {
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
const modifyAt = exports.modifyAt = /*#__PURE__*/(0, _Function.dual)(3, (self, key, f) => {
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
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
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
const clear = self => {
  self.referential.clear();
  self.buckets.clear();
  self.bucketsSize = 0;
  return self;
};
/**
 * @since 2.0.0
 * @category elements
 */
exports.clear = clear;
const size = self => {
  return self.referential.size + self.bucketsSize;
};
/**
 * @since 2.0.0
 */
exports.size = size;
const isEmpty = self => size(self) === 0;
/**
 * @since 2.0.0
 */
exports.isEmpty = isEmpty;
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  self.referential.forEach(f);
  for (const bucket of self.buckets.values()) {
    for (const [key, value] of bucket) {
      f(value, key);
    }
  }
});
//# sourceMappingURL=MutableHashMap.js.map