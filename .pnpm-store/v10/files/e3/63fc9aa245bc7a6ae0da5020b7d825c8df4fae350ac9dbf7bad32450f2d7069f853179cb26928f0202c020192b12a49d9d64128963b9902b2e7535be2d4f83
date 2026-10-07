"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BigMap: () => BigMap,
  Hashery: () => import_hashery2.Hashery,
  Keyv: () => import_keyv2.Keyv,
  createKeyv: () => createKeyv,
  defaultHashFunction: () => defaultHashFunction
});
module.exports = __toCommonJS(index_exports);
var import_hashery = require("hashery");
var import_hookified = require("hookified");
var import_keyv = require("keyv");
var import_hashery2 = require("hashery");
var import_keyv2 = require("keyv");
function defaultHashFunction(key, storeSize) {
  return new import_hashery.Hashery().toNumberSync(key, { min: 0, max: storeSize - 1 });
}
var BigMap = class extends import_hookified.Hookified {
  _storeSize = 4;
  _store = Array.from(
    { length: this._storeSize },
    () => /* @__PURE__ */ new Map()
  );
  _storeHashFunction;
  /**
   * Creates an instance of BigMap.
   * @param {BigMapOptions<K, V>} [options] - Optional configuration options for the BigMap.
   */
  constructor(options) {
    super(options);
    if (options?.storeSize !== void 0) {
      if (options.storeSize < 1) {
        throw new Error("Store size must be at least 1.");
      }
      this.storeSize = options.storeSize;
    }
    this.initStore();
    this._storeHashFunction = options?.storeHashFunction ?? defaultHashFunction;
  }
  /**
   * Gets the number of maps in the store.
   * @returns {number} The number of maps in the store.
   */
  get storeSize() {
    return this._storeSize;
  }
  /**
   * Sets the number of maps in the store. If the size is less than 1, an error is thrown.
   * If you change the store size it will clear all entries.
   * @param {number} size - The new size of the store.
   * @throws {Error} If the size is less than 1.
   */
  set storeSize(size) {
    if (size < 1) {
      throw new Error("Store size must be at least 1.");
    }
    this._storeSize = size;
    this.clear();
    this.initStore();
  }
  /**
   * Gets the hash function used for storing keys.
   * @returns {StoreHashFunction | undefined} The hash function used for storing keys, or undefined if not set.
   */
  get storeHashFunction() {
    return this._storeHashFunction;
  }
  /**
   * Sets the hash function used for storing keys.
   * @param {StoreHashFunction} hashFunction - The hash function to use for storing keys.
   */
  set storeHashFunction(hashFunction) {
    this._storeHashFunction = hashFunction ?? defaultHashFunction;
  }
  /**
   * Gets the store, which is an array of maps.
   * @returns {Array<Map<K, V>>} The array of maps in the store.
   */
  get store() {
    return this._store;
  }
  /**
   * Gets the map at the specified index in the store.
   * @param {number} index - The index of the map to retrieve.
   * @returns {Map<K, V>} The map at the specified index.
   */
  getStoreMap(index) {
    if (index < 0 || index >= this._storeSize) {
      throw new Error(
        `Index out of bounds: ${index}. Valid range is 0 to ${this._storeSize - 1}.`
      );
    }
    return this._store[index];
  }
  /**
   * Initializes the store with empty maps.
   * This method is called when the BigMap instance is created.
   */
  initStore() {
    this._store = Array.from(
      { length: this._storeSize },
      () => /* @__PURE__ */ new Map()
    );
  }
  /**
   * Gets the store for a specific key.
   * The store is determined by applying the hash function to the key and the store size.
   * If the hash function is not set, it defaults to using the default hash function.
   * @param key - The key for which to get the store.
   * @returns The store for the specified key.
   */
  getStore(key) {
    if (this._storeSize === 1) {
      return this.getStoreMap(0);
    }
    const storeSize = this._storeSize - 1;
    const index = this._storeHashFunction ? this._storeHashFunction(String(key), storeSize) : defaultHashFunction(String(key), storeSize);
    return this.getStoreMap(index);
  }
  /**
   * Returns an iterable of key-value pairs in the map.
   * @returns {IterableIterator<[K, V]>} An iterable of key-value pairs in the map.
   */
  entries() {
    const entries = [];
    for (const store of this._store) {
      store.forEach((value, key) => entries.push([key, value]));
    }
    return entries[Symbol.iterator]();
  }
  /**
   * Returns an iterable of keys in the map.
   * @returns {IterableIterator<K>} An iterable of keys in the map.
   */
  keys() {
    const keys = [];
    for (const store of this._store) {
      store.forEach((_, key) => keys.push(key));
    }
    return keys[Symbol.iterator]();
  }
  /**
   * Returns an iterable of values in the map.
   * @returns {IterableIterator<V>} An iterable of values in the map.
   */
  values() {
    const values = [];
    for (const store of this._store) {
      store.forEach((value) => values.push(value));
    }
    return values[Symbol.iterator]();
  }
  /**
   * Returns an iterator that iterates over the key-value pairs in the map.
   * @returns {IterableIterator<[K, V]>} An iterator that iterates over the key-value pairs in the map.
   */
  [Symbol.iterator]() {
    const entries = [];
    for (const store of this._store) {
      store.forEach((value, key) => entries.push([key, value]));
    }
    return entries[Symbol.iterator]();
  }
  /**
   * Clears all entries in the map.
   * @returns {void} This method does not return a value.
   */
  clear() {
    for (const store of this._store) {
      store.clear();
    }
  }
  /**
   * Deletes a key-value pair from the map.
   * @param {K} key - The key of the entry to delete.
   * @returns {boolean} Returns true if the entry was deleted, false if the key was not found.
   */
  delete(key) {
    const store = this.getStore(key);
    const deleted = store.delete(key);
    return deleted;
  }
  /**
   * Calls a provided callback function once for each key-value pair in the map.
   * @param {function} callbackfn - The function to execute for each key-value pair.
   * @param {any} [thisArg] - An optional value to use as `this` when executing the callback.
   */
  forEach(callbackfn, thisArg) {
    this._store.forEach((store) => {
      store.forEach((value, key) => {
        callbackfn.call(thisArg, value, key, this);
      });
    });
  }
  /**
   * Gets the value associated with the specified key.
   * @param {K} key - The key of the entry to get.
   * @returns {V | undefined} The value associated with the key, or undefined if the key does not exist.
   */
  get(key) {
    const store = this.getStore(key);
    return store.get(key);
  }
  /**
   * Checks if the map contains a key.
   * @param {K} key - The key to check for existence.
   * @returns {boolean} Returns true if the key exists, false otherwise.
   */
  has(key) {
    const store = this.getStore(key);
    return store.has(key);
  }
  /**
   * Sets the value for a key in the map.
   * @param {K} key - The key of the entry to set.
   * @param {V} value - The value to set for the entry.
   * @returns {Map<K, V>} The map instance.
   */
  set(key, value) {
    const store = this.getStore(key);
    store.set(key, value);
    return store;
  }
  /**
   * Gets the number of entries in the map.
   * @returns {number} The number of entries in the map.
   */
  get size() {
    let size = 0;
    for (const store of this._store) {
      size += store.size;
    }
    return size;
  }
};
function createKeyv(options) {
  const adapter = new BigMap(options);
  const keyv = new import_keyv.Keyv({ store: adapter });
  return keyv;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BigMap,
  Hashery,
  Keyv,
  createKeyv,
  defaultHashFunction
});
