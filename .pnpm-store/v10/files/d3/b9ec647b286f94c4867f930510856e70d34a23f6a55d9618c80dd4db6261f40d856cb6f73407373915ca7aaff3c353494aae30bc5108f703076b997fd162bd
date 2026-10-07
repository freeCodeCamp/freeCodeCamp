// src/index.ts
import {
  HashAlgorithm,
  hashToNumberSync,
  shorthandToTime,
  wrapSync
} from "@cacheable/utils";
import { Hookified } from "hookified";

// src/memory-lru.ts
var ListNode = class {
  value;
  prev = void 0;
  next = void 0;
  constructor(value) {
    this.value = value;
  }
};
var DoublyLinkedList = class {
  head = void 0;
  tail = void 0;
  nodesMap = /* @__PURE__ */ new Map();
  // Add a new node to the front (most recently used)
  addToFront(value) {
    const newNode = new ListNode(value);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.nodesMap.set(value, newNode);
  }
  // Move an existing node to the front (most recently used)
  moveToFront(value) {
    const node = this.nodesMap.get(value);
    if (!node || this.head === node) {
      return;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    node.prev = void 0;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    this.tail ??= node;
  }
  // Get the oldest node (tail)
  getOldest() {
    return this.tail ? this.tail.value : void 0;
  }
  // Remove the oldest node (tail)
  removeOldest() {
    if (!this.tail) {
      return void 0;
    }
    const oldValue = this.tail.value;
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = void 0;
    } else {
      this.head = this.tail = void 0;
    }
    this.nodesMap.delete(oldValue);
    return oldValue;
  }
  // Remove a specific node by value
  remove(value) {
    const node = this.nodesMap.get(value);
    if (!node) {
      return false;
    }
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
      if (this.head) {
        this.head.prev = void 0;
      }
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
      if (this.tail) {
        this.tail.next = void 0;
      }
    }
    this.nodesMap.delete(value);
    return true;
  }
  get size() {
    return this.nodesMap.size;
  }
};

// src/index.ts
import {
  HashAlgorithm as HashAlgorithm2,
  hash,
  hashToNumber
} from "@cacheable/utils";

// src/keyv-memory.ts
import { Keyv } from "keyv";
var KeyvCacheableMemory = class {
  opts = {
    ttl: 0,
    useClone: true,
    lruSize: 0,
    checkInterval: 0
  };
  _defaultCache = new CacheableMemory();
  _nCache = /* @__PURE__ */ new Map();
  _namespace;
  constructor(options) {
    if (options) {
      this.opts = options;
      this._defaultCache = new CacheableMemory(options);
      if (options.namespace) {
        this._namespace = options.namespace;
        this._nCache.set(this._namespace, new CacheableMemory(options));
      }
    }
  }
  get namespace() {
    return this._namespace;
  }
  set namespace(value) {
    this._namespace = value;
  }
  get store() {
    return this.getStore(this._namespace);
  }
  async get(key) {
    const result = this.getStore(this._namespace).get(key);
    if (result) {
      return result;
    }
    return void 0;
  }
  async getMany(keys) {
    const result = this.getStore(this._namespace).getMany(keys);
    return result;
  }
  // biome-ignore lint/suspicious/noExplicitAny: type format
  async set(key, value, ttl) {
    this.getStore(this._namespace).set(key, value, ttl);
  }
  async setMany(values) {
    this.getStore(this._namespace).setMany(values);
  }
  async delete(key) {
    this.getStore(this._namespace).delete(key);
    return true;
  }
  async deleteMany(key) {
    this.getStore(this._namespace).deleteMany(key);
    return true;
  }
  async clear() {
    this.getStore(this._namespace).clear();
  }
  async has(key) {
    return this.getStore(this._namespace).has(key);
  }
  // biome-ignore lint/suspicious/noExplicitAny: type format
  on(event, listener) {
    this.getStore(this._namespace).on(event, listener);
    return this;
  }
  getStore(namespace) {
    if (!namespace) {
      return this._defaultCache;
    }
    if (!this._nCache.has(namespace)) {
      this._nCache.set(namespace, new CacheableMemory(this.opts));
    }
    return this._nCache.get(namespace);
  }
};
function createKeyv(options) {
  const store = new KeyvCacheableMemory(options);
  const namespace = options?.namespace;
  let ttl;
  if (options?.ttl && Number.isInteger(options.ttl)) {
    ttl = options?.ttl;
  }
  const keyv = new Keyv({ store, namespace, ttl });
  keyv.serialize = void 0;
  keyv.deserialize = void 0;
  return keyv;
}

// src/index.ts
var defaultStoreHashSize = 16;
var maximumMapSize = 16777216;
var CacheableMemory = class extends Hookified {
  _lru = new DoublyLinkedList();
  _storeHashSize = defaultStoreHashSize;
  _storeHashAlgorithm = HashAlgorithm.DJB2;
  // Default is djb2Hash
  _store = Array.from(
    { length: this._storeHashSize },
    () => /* @__PURE__ */ new Map()
  );
  _ttl;
  // Turned off by default
  _useClone = true;
  // Turned on by default
  _lruSize = 0;
  // Turned off by default
  _checkInterval = 0;
  // Turned off by default
  _interval = 0;
  // Turned off by default
  /**
   * @constructor
   * @param {CacheableMemoryOptions} [options] - The options for the CacheableMemory
   */
  constructor(options) {
    super();
    if (options?.ttl) {
      this.setTtl(options.ttl);
    }
    if (options?.useClone !== void 0) {
      this._useClone = options.useClone;
    }
    if (options?.storeHashSize && options.storeHashSize > 0) {
      this._storeHashSize = options.storeHashSize;
    }
    if (options?.lruSize) {
      if (options.lruSize > maximumMapSize) {
        this.emit(
          "error",
          new Error(
            `LRU size cannot be larger than ${maximumMapSize} due to Map limitations.`
          )
        );
      } else {
        this._lruSize = options.lruSize;
      }
    }
    if (options?.checkInterval) {
      this._checkInterval = options.checkInterval;
    }
    if (options?.storeHashAlgorithm) {
      this._storeHashAlgorithm = options.storeHashAlgorithm;
    }
    this._store = Array.from(
      { length: this._storeHashSize },
      () => /* @__PURE__ */ new Map()
    );
    this.startIntervalCheck();
  }
  /**
   * Gets the time-to-live
   * @returns {number|string|undefined} - The time-to-live in miliseconds or a human-readable format. If undefined, it will not have a time-to-live.
   */
  get ttl() {
    return this._ttl;
  }
  /**
   * Sets the time-to-live
   * @param {number|string|undefined} value - The time-to-live in miliseconds or a human-readable format (example '1s' = 1 second, '1h' = 1 hour). If undefined, it will not have a time-to-live.
   */
  set ttl(value) {
    this.setTtl(value);
  }
  /**
   * Gets whether to use clone
   * @returns {boolean} - If true, it will clone the value before returning it. If false, it will return the value directly. Default is true.
   */
  get useClone() {
    return this._useClone;
  }
  /**
   * Sets whether to use clone
   * @param {boolean} value - If true, it will clone the value before returning it. If false, it will return the value directly. Default is true.
   */
  set useClone(value) {
    this._useClone = value;
  }
  /**
   * Gets the size of the LRU cache
   * @returns {number} - The size of the LRU cache. If set to 0, it will not use LRU cache. Default is 0. If you are using LRU then the limit is based on Map() size 17mm.
   */
  get lruSize() {
    return this._lruSize;
  }
  /**
   * Sets the size of the LRU cache
   * @param {number} value - The size of the LRU cache. If set to 0, it will not use LRU cache. Default is 0. If you are using LRU then the limit is based on Map() size 17mm.
   */
  set lruSize(value) {
    if (value > maximumMapSize) {
      this.emit(
        "error",
        new Error(
          `LRU size cannot be larger than ${maximumMapSize} due to Map limitations.`
        )
      );
      return;
    }
    this._lruSize = value;
    if (this._lruSize === 0) {
      this._lru = new DoublyLinkedList();
      return;
    }
    this.lruResize();
  }
  /**
   * Gets the check interval
   * @returns {number} - The interval to check for expired items. If set to 0, it will not check for expired items. Default is 0.
   */
  get checkInterval() {
    return this._checkInterval;
  }
  /**
   * Sets the check interval
   * @param {number} value - The interval to check for expired items. If set to 0, it will not check for expired items. Default is 0.
   */
  set checkInterval(value) {
    this._checkInterval = value;
  }
  /**
   * Gets the size of the cache
   * @returns {number} - The size of the cache
   */
  get size() {
    let size = 0;
    for (const store of this._store) {
      size += store.size;
    }
    return size;
  }
  /**
   * Gets the number of hash stores
   * @returns {number} - The number of hash stores
   */
  get storeHashSize() {
    return this._storeHashSize;
  }
  /**
   * Sets the number of hash stores. This will recreate the store and all data will be cleared
   * @param {number} value - The number of hash stores
   */
  set storeHashSize(value) {
    if (value === this._storeHashSize) {
      return;
    }
    this._storeHashSize = value;
    this._store = Array.from(
      { length: this._storeHashSize },
      () => /* @__PURE__ */ new Map()
    );
  }
  /**
   * Gets the store hash algorithm
   * @returns {HashAlgorithm | StoreHashAlgorithmFunction} - The store hash algorithm
   */
  get storeHashAlgorithm() {
    return this._storeHashAlgorithm;
  }
  /**
   * Sets the store hash algorithm. This will recreate the store and all data will be cleared
   * @param {HashAlgorithm | HashAlgorithmFunction} value - The store hash algorithm
   */
  set storeHashAlgorithm(value) {
    this._storeHashAlgorithm = value;
  }
  /**
   * Gets the keys
   * @returns {IterableIterator<string>} - The keys
   */
  get keys() {
    const keys = [];
    for (const store of this._store) {
      for (const key of store.keys()) {
        const item = store.get(key);
        if (item && this.hasExpired(item)) {
          store.delete(key);
          this.lruRemove(key);
          continue;
        }
        keys.push(key);
      }
    }
    return keys.values();
  }
  /**
   * Gets the items
   * @returns {IterableIterator<CacheableStoreItem>} - The items
   */
  get items() {
    const items = [];
    for (const store of this._store) {
      for (const item of store.values()) {
        if (this.hasExpired(item)) {
          store.delete(item.key);
          this.lruRemove(item.key);
          continue;
        }
        items.push(item);
      }
    }
    return items.values();
  }
  /**
   * Gets the store
   * @returns {Array<Map<string, CacheableStoreItem>>} - The store
   */
  get store() {
    return this._store;
  }
  /**
   * Gets the value of the key
   * @param {string} key - The key to get the value
   * @returns {T | undefined} - The value of the key
   */
  get(key) {
    const store = this.getStore(key);
    const item = store.get(key);
    if (!item) {
      return void 0;
    }
    if (item.expires && Date.now() > item.expires) {
      store.delete(key);
      this.lruRemove(key);
      return void 0;
    }
    this.lruMoveToFront(key);
    if (!this._useClone) {
      return item.value;
    }
    return this.clone(item.value);
  }
  /**
   * Gets the values of the keys
   * @param {string[]} keys - The keys to get the values
   * @returns {T[]} - The values of the keys
   */
  getMany(keys) {
    const result = [];
    for (const key of keys) {
      result.push(this.get(key));
    }
    return result;
  }
  /**
   * Gets the raw value of the key
   * @param {string} key - The key to get the value
   * @returns {CacheableStoreItem | undefined} - The raw value of the key
   */
  getRaw(key) {
    const store = this.getStore(key);
    const item = store.get(key);
    if (!item) {
      return void 0;
    }
    if (item.expires && item.expires && Date.now() > item.expires) {
      store.delete(key);
      this.lruRemove(key);
      return void 0;
    }
    this.lruMoveToFront(key);
    return item;
  }
  /**
   * Gets the raw values of the keys
   * @param {string[]} keys - The keys to get the values
   * @returns {CacheableStoreItem[]} - The raw values of the keys
   */
  getManyRaw(keys) {
    const result = [];
    for (const key of keys) {
      result.push(this.getRaw(key));
    }
    return result;
  }
  /**
   * Sets the value of the key
   * @param {string} key - The key to set the value
   * @param {any} value - The value to set
   * @param {number|string|SetOptions} [ttl] - Time to Live - If you set a number it is miliseconds, if you set a string it is a human-readable.
   * If you want to set expire directly you can do that by setting the expire property in the SetOptions.
   * If you set undefined, it will use the default time-to-live. If both are undefined then it will not have a time-to-live.
   * @returns {void}
   */
  set(key, value, ttl) {
    const store = this.getStore(key);
    let expires;
    if (ttl !== void 0 || this._ttl !== void 0) {
      if (typeof ttl === "object") {
        if (ttl.expire) {
          expires = typeof ttl.expire === "number" ? ttl.expire : ttl.expire.getTime();
        }
        if (ttl.ttl) {
          const finalTtl = shorthandToTime(ttl.ttl);
          if (finalTtl !== void 0) {
            expires = finalTtl;
          }
        }
      } else {
        const finalTtl = shorthandToTime(ttl ?? this._ttl);
        if (finalTtl !== void 0) {
          expires = finalTtl;
        }
      }
    }
    if (this._lruSize > 0) {
      if (store.has(key)) {
        this.lruMoveToFront(key);
      } else {
        this.lruAddToFront(key);
        if (this._lru.size > this._lruSize) {
          const oldestKey = this._lru.getOldest();
          if (oldestKey) {
            this._lru.removeOldest();
            this.delete(oldestKey);
          }
        }
      }
    }
    const item = { key, value, expires };
    store.set(key, item);
  }
  /**
   * Sets the values of the keys
   * @param {CacheableItem[]} items - The items to set
   * @returns {void}
   */
  setMany(items) {
    for (const item of items) {
      this.set(item.key, item.value, item.ttl);
    }
  }
  /**
   * Checks if the key exists
   * @param {string} key - The key to check
   * @returns {boolean} - If true, the key exists. If false, the key does not exist.
   */
  has(key) {
    const item = this.get(key);
    return Boolean(item);
  }
  /**
   * @function hasMany
   * @param {string[]} keys - The keys to check
   * @returns {boolean[]} - If true, the key exists. If false, the key does not exist.
   */
  hasMany(keys) {
    const result = [];
    for (const key of keys) {
      const item = this.get(key);
      result.push(Boolean(item));
    }
    return result;
  }
  /**
   * Take will get the key and delete the entry from cache
   * @param {string} key - The key to take
   * @returns {T | undefined} - The value of the key
   */
  take(key) {
    const item = this.get(key);
    if (!item) {
      return void 0;
    }
    this.delete(key);
    return item;
  }
  /**
   * TakeMany will get the keys and delete the entries from cache
   * @param {string[]} keys - The keys to take
   * @returns {T[]} - The values of the keys
   */
  takeMany(keys) {
    const result = [];
    for (const key of keys) {
      result.push(this.take(key));
    }
    return result;
  }
  /**
   * Delete the key
   * @param {string} key - The key to delete
   * @returns {void}
   */
  delete(key) {
    const store = this.getStore(key);
    store.delete(key);
    this.lruRemove(key);
  }
  /**
   * Delete the keys
   * @param {string[]} keys - The keys to delete
   * @returns {void}
   */
  deleteMany(keys) {
    for (const key of keys) {
      this.delete(key);
    }
  }
  /**
   * Clear the cache
   * @returns {void}
   */
  clear() {
    this._store = Array.from(
      { length: this._storeHashSize },
      () => /* @__PURE__ */ new Map()
    );
    this._lru = new DoublyLinkedList();
  }
  /**
   * Get the store based on the key (internal use)
   * @param {string} key - The key to get the store
   * @returns {CacheableHashStore} - The store
   */
  getStore(key) {
    const hash2 = this.getKeyStoreHash(key);
    this._store[hash2] ||= /* @__PURE__ */ new Map();
    return this._store[hash2];
  }
  /**
   * Hash the key for which store to go to (internal use)
   * @param {string} key - The key to hash
   * Available algorithms are: SHA256, SHA1, MD5, and djb2Hash.
   * @returns {number} - The hashed key as a number
   */
  getKeyStoreHash(key) {
    if (this._store.length === 1) {
      return 0;
    }
    if (typeof this._storeHashAlgorithm === "function") {
      return this._storeHashAlgorithm(key, this._storeHashSize);
    }
    const storeHashSize = this._storeHashSize - 1;
    const hash2 = hashToNumberSync(key, {
      min: 0,
      max: storeHashSize,
      algorithm: this._storeHashAlgorithm
    });
    return hash2;
  }
  /**
   * Clone the value. This is for internal use
   * @param {any} value - The value to clone
   * @returns {any} - The cloned value
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  clone(value) {
    if (this.isPrimitive(value)) {
      return value;
    }
    return structuredClone(value);
  }
  /**
   * Add to the front of the LRU cache. This is for internal use
   * @param {string} key - The key to add to the front
   * @returns {void}
   */
  lruAddToFront(key) {
    if (this._lruSize === 0) {
      return;
    }
    this._lru.addToFront(key);
  }
  /**
   * Move to the front of the LRU cache. This is for internal use
   * @param {string} key - The key to move to the front
   * @returns {void}
   */
  lruMoveToFront(key) {
    if (this._lruSize === 0) {
      return;
    }
    this._lru.moveToFront(key);
  }
  /**
   * Remove a key from the LRU cache. This is for internal use
   * @param {string} key - The key to remove
   * @returns {void}
   */
  lruRemove(key) {
    if (this._lruSize === 0) {
      return;
    }
    this._lru.remove(key);
  }
  /**
   * Resize the LRU cache. This is for internal use.
   * @returns {void}
   */
  lruResize() {
    while (this._lru.size > this._lruSize) {
      const oldestKey = this._lru.getOldest();
      if (oldestKey) {
        this._lru.removeOldest();
        this.delete(oldestKey);
      }
    }
  }
  /**
   * Check for expiration. This is for internal use
   * @returns {void}
   */
  checkExpiration() {
    for (const store of this._store) {
      for (const item of store.values()) {
        if (item.expires && Date.now() > item.expires) {
          store.delete(item.key);
          this.lruRemove(item.key);
        }
      }
    }
  }
  /**
   * Start the interval check. This is for internal use
   * @returns {void}
   */
  startIntervalCheck() {
    if (this._checkInterval > 0) {
      if (this._interval) {
        clearInterval(this._interval);
      }
      this._interval = setInterval(() => {
        this.checkExpiration();
      }, this._checkInterval).unref();
    }
  }
  /**
   * Stop the interval check. This is for internal use
   * @returns {void}
   */
  stopIntervalCheck() {
    if (this._interval) {
      clearInterval(this._interval);
    }
    this._interval = 0;
    this._checkInterval = 0;
  }
  /**
   * Wrap the function for caching
   * @param {Function} function_ - The function to wrap
   * @param {Object} [options] - The options to wrap
   * @returns {Function} - The wrapped function
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  wrap(function_, options) {
    const wrapOptions = {
      ttl: options?.ttl ?? this._ttl,
      keyPrefix: options?.keyPrefix,
      createKey: options?.createKey,
      cache: this
    };
    return wrapSync(function_, wrapOptions);
  }
  // biome-ignore lint/suspicious/noExplicitAny: type format
  isPrimitive(value) {
    const result = false;
    if (value === null || value === void 0) {
      return true;
    }
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return true;
    }
    return result;
  }
  setTtl(ttl) {
    if (typeof ttl === "string" || ttl === void 0) {
      this._ttl = ttl;
    } else if (ttl > 0) {
      this._ttl = ttl;
    } else {
      this._ttl = void 0;
    }
  }
  hasExpired(item) {
    if (item.expires && Date.now() > item.expires) {
      return true;
    }
    return false;
  }
};
export {
  CacheableMemory,
  HashAlgorithm2 as HashAlgorithm,
  KeyvCacheableMemory,
  createKeyv,
  defaultStoreHashSize,
  hash,
  hashToNumber,
  maximumMapSize
};
/* v8 ignore next -- @preserve */
