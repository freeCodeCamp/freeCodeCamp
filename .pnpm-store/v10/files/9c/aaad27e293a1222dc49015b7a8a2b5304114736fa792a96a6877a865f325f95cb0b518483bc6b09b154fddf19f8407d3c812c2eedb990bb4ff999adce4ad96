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
  Cacheable: () => Cacheable,
  CacheableEvents: () => CacheableEvents,
  CacheableHooks: () => CacheableHooks,
  CacheableMemory: () => import_memory2.CacheableMemory,
  CacheableStats: () => import_utils2.Stats,
  CacheableSync: () => CacheableSync,
  CacheableSyncEvents: () => CacheableSyncEvents,
  HashAlgorithm: () => import_utils2.HashAlgorithm,
  Keyv: () => import_keyv2.Keyv,
  KeyvCacheableMemory: () => import_memory2.KeyvCacheableMemory,
  KeyvHooks: () => import_keyv2.KeyvHooks,
  calculateTtlFromExpiration: () => import_utils2.calculateTtlFromExpiration,
  createKeyv: () => import_memory2.createKeyv,
  getCascadingTtl: () => import_utils2.getCascadingTtl,
  getOrSet: () => import_utils2.getOrSet,
  hash: () => import_utils2.hash,
  shorthandToMilliseconds: () => import_utils2.shorthandToMilliseconds,
  shorthandToTime: () => import_utils2.shorthandToTime,
  wrap: () => import_utils2.wrap,
  wrapSync: () => import_utils2.wrapSync
});
module.exports = __toCommonJS(index_exports);
var import_memory = require("@cacheable/memory");
var import_utils = require("@cacheable/utils");
var import_hookified2 = require("hookified");
var import_keyv = require("keyv");

// src/enums.ts
var CacheableHooks = /* @__PURE__ */ ((CacheableHooks2) => {
  CacheableHooks2["BEFORE_SET"] = "BEFORE_SET";
  CacheableHooks2["AFTER_SET"] = "AFTER_SET";
  CacheableHooks2["BEFORE_SET_MANY"] = "BEFORE_SET_MANY";
  CacheableHooks2["AFTER_SET_MANY"] = "AFTER_SET_MANY";
  CacheableHooks2["BEFORE_GET"] = "BEFORE_GET";
  CacheableHooks2["AFTER_GET"] = "AFTER_GET";
  CacheableHooks2["BEFORE_GET_MANY"] = "BEFORE_GET_MANY";
  CacheableHooks2["AFTER_GET_MANY"] = "AFTER_GET_MANY";
  CacheableHooks2["BEFORE_SECONDARY_SETS_PRIMARY"] = "BEFORE_SECONDARY_SETS_PRIMARY";
  return CacheableHooks2;
})(CacheableHooks || {});
var CacheableEvents = /* @__PURE__ */ ((CacheableEvents2) => {
  CacheableEvents2["ERROR"] = "error";
  CacheableEvents2["CACHE_HIT"] = "cache:hit";
  CacheableEvents2["CACHE_MISS"] = "cache:miss";
  return CacheableEvents2;
})(CacheableEvents || {});

// src/sync.ts
var import_hookified = require("hookified");
var import_qified = require("qified");
var CacheableSyncEvents = /* @__PURE__ */ ((CacheableSyncEvents2) => {
  CacheableSyncEvents2["ERROR"] = "error";
  CacheableSyncEvents2["SET"] = "cache:set";
  CacheableSyncEvents2["DELETE"] = "cache:delete";
  return CacheableSyncEvents2;
})(CacheableSyncEvents || {});
var CacheableSync = class extends import_hookified.Hookified {
  _qified = new import_qified.Qified();
  _namespace;
  _storage;
  _cacheId;
  /**
   * Creates an instance of CacheableSync
   * @param options - Configuration options for CacheableSync
   */
  constructor(options) {
    super(options);
    this._namespace = options.namespace;
    this._qified = this.createQified(options.qified);
  }
  /**
   * Gets the Qified instance used for synchronization
   * @returns The Qified instance
   */
  get qified() {
    return this._qified;
  }
  /**
   * Sets the Qified instance used for synchronization
   * @param value - Either an existing Qified instance or MessageProvider(s)
   */
  set qified(value) {
    this._qified = this.createQified(value);
  }
  /**
   * Gets the namespace for sync events
   * @returns The namespace or undefined if not set
   */
  get namespace() {
    return this._namespace;
  }
  /**
   * Sets the namespace for sync events and resubscribes if needed
   * @param namespace - The namespace string or function
   */
  set namespace(namespace) {
    if (this._storage && this._cacheId) {
      const oldSetEvent = this.getPrefixedEvent("cache:set" /* SET */);
      const oldDeleteEvent = this.getPrefixedEvent("cache:delete" /* DELETE */);
      void this._qified.unsubscribe(oldSetEvent);
      void this._qified.unsubscribe(oldDeleteEvent);
    }
    this._namespace = namespace;
    if (this._storage && this._cacheId) {
      this.subscribe(this._storage, this._cacheId);
    }
  }
  /**
   * Publishes a cache event to all the cache instances
   * @param data - The cache item data containing cacheId, key, value, and optional ttl
   */
  async publish(event, data) {
    const eventName = this.getPrefixedEvent(event);
    await this._qified.publish(eventName, {
      id: crypto.randomUUID(),
      data
    });
  }
  /**
   * Subscribes to sync events and updates the provided storage
   * @param storage - The Keyv storage instance to update
   * @param cacheId - The cache ID to identify this instance
   */
  subscribe(storage, cacheId) {
    this._storage = storage;
    this._cacheId = cacheId;
    const setEvent = this.getPrefixedEvent("cache:set" /* SET */);
    const deleteEvent = this.getPrefixedEvent("cache:delete" /* DELETE */);
    this._qified.subscribe(setEvent, {
      handler: async (message) => {
        const data = message.data;
        if (data.cacheId !== cacheId) {
          await storage.set(data.key, data.value, data.ttl);
        }
      }
    });
    this._qified.subscribe(deleteEvent, {
      handler: async (message) => {
        const data = message.data;
        if (data.cacheId !== cacheId) {
          await storage.delete(data.key);
        }
      }
    });
  }
  /**
   * Creates or returns a Qified instance from the provided value
   * @param value - Either an existing Qified instance or MessageProvider(s)
   * @returns A Qified instance configured with the provided message provider(s)
   */
  createQified(value) {
    if (value instanceof import_qified.Qified) {
      return value;
    }
    const providers = Array.isArray(value) ? value : [value];
    return new import_qified.Qified({ messageProviders: providers });
  }
  /**
   * Gets the namespace prefix to use for event names
   * @returns The resolved namespace string or undefined
   */
  getNamespace() {
    if (typeof this._namespace === "function") {
      return this._namespace();
    }
    return this._namespace;
  }
  /**
   * Prefixes an event name with the namespace if one is set
   * @param event - The event to prefix
   * @returns The prefixed event name or the original event
   */
  getPrefixedEvent(event) {
    const ns = this.getNamespace();
    return ns ? `${ns}::${event}` : event;
  }
};

// src/index.ts
var import_memory2 = require("@cacheable/memory");
var import_utils2 = require("@cacheable/utils");
var import_keyv2 = require("keyv");
var Cacheable = class extends import_hookified2.Hookified {
  _primary = (0, import_memory.createKeyv)();
  _secondary;
  _nonBlocking = false;
  _ttl;
  _stats = new import_utils.Stats({ enabled: false });
  _namespace;
  _cacheId = Math.random().toString(36).slice(2);
  _sync;
  /**
   * Creates a new cacheable instance
   * @param {CacheableOptions} [options] The options for the cacheable instance
   */
  constructor(options) {
    super();
    if (options?.primary) {
      this.setPrimary(options.primary);
    }
    if (options?.secondary) {
      this.setSecondary(options.secondary);
    }
    if (options?.nonBlocking) {
      this._nonBlocking = options.nonBlocking;
    }
    if (options?.stats) {
      this._stats.enabled = options.stats;
    }
    if (options?.ttl) {
      this.setTtl(options.ttl);
    }
    if (options?.cacheId) {
      this._cacheId = options.cacheId;
    }
    if (options?.namespace) {
      this._namespace = options.namespace;
      this._primary.namespace = this.getNameSpace();
      if (this._secondary) {
        this._secondary.namespace = this.getNameSpace();
      }
    }
    if (options?.sync) {
      this._sync = options.sync instanceof CacheableSync ? options.sync : new CacheableSync({
        ...options.sync,
        namespace: options.namespace
      });
      this._sync.subscribe(this._primary, this._cacheId);
    }
  }
  /**
   * The namespace for the cacheable instance
   * @returns {string | (() => string) | undefined} The namespace for the cacheable instance
   */
  get namespace() {
    return this._namespace;
  }
  /**
   * Sets the namespace for the cacheable instance
   * @param {string | (() => string) | undefined} namespace The namespace for the cacheable instance
   * @returns {void}
   */
  set namespace(namespace) {
    this._namespace = namespace;
    this._primary.namespace = this.getNameSpace();
    if (this._secondary) {
      this._secondary.namespace = this.getNameSpace();
    }
    if (this._sync) {
      this._sync.namespace = namespace;
    }
  }
  /**
   * The statistics for the cacheable instance
   * @returns {CacheableStats} The statistics for the cacheable instance
   */
  get stats() {
    return this._stats;
  }
  /**
   * The primary store for the cacheable instance
   * @returns {Keyv} The primary store for the cacheable instance
   */
  get primary() {
    return this._primary;
  }
  /**
   * Sets the primary store for the cacheable instance
   * @param {Keyv} primary The primary store for the cacheable instance
   */
  set primary(primary) {
    this._primary = primary;
  }
  /**
   * The secondary store for the cacheable instance
   * @returns {Keyv | undefined} The secondary store for the cacheable instance
   */
  get secondary() {
    return this._secondary;
  }
  /**
   * Sets the secondary store for the cacheable instance. If it is set to undefined then the secondary store is disabled.
   * @param {Keyv | undefined} secondary The secondary store for the cacheable instance
   * @returns {void}
   */
  set secondary(secondary) {
    this._secondary = secondary;
  }
  /**
   * Gets whether the secondary store is non-blocking mode. It is set to false by default.
   * If it is set to true then the secondary store will not block the primary store.
   *
   * [Learn more about non-blocking mode](https://cacheable.org/docs/cacheable/#non-blocking-operations).
   *
   * @returns {boolean} Whether the cacheable instance is non-blocking
   */
  get nonBlocking() {
    return this._nonBlocking;
  }
  /**
   * Sets whether the secondary store is non-blocking mode. It is set to false by default.
   * If it is set to true then the secondary store will not block the primary store.
   *
   * [Learn more about non-blocking mode](https://cacheable.org/docs/cacheable/#non-blocking-operations).
   *
   * @param {boolean} nonBlocking Whether the cacheable instance is non-blocking
   * @returns {void}
   */
  set nonBlocking(nonBlocking) {
    this._nonBlocking = nonBlocking;
  }
  /**
   * The time-to-live for the cacheable instance and will be used as the default value.
   * can be a number in milliseconds or a human-readable format such as `1s` for 1 second or `1h` for 1 hour
   * or undefined if there is no time-to-live.
   *
   * [Learn more about time-to-live](https://cacheable.org/docs/cacheable/#shorthand-for-time-to-live-ttl).
   *
   * @returns {number | string | undefined} The time-to-live for the cacheable instance in milliseconds, human-readable format or undefined
   * @example
   * ```typescript
   * const cacheable = new Cacheable({ ttl: '1h' });
   * console.log(cacheable.ttl); // 1h
   * ```
   */
  get ttl() {
    return this._ttl;
  }
  /**
   * Sets the time-to-live for the cacheable instance and will be used as the default value.
   * If you set a number it is miliseconds, if you set a string it is a human-readable
   * format such as `1s` for 1 second or `1h` for 1 hour. Setting undefined means that
   * there is no time-to-live.
   *
   * [Learn more about time-to-live](https://cacheable.org/docs/cacheable/#shorthand-for-time-to-live-ttl).
   *
   * @param {number | string | undefined} ttl The time-to-live for the cacheable instance
   * @example
   * ```typescript
   * const cacheable = new Cacheable();
   * cacheable.ttl = '1h'; // Set the time-to-live to 1 hour
   * ```
   * or setting the time-to-live in milliseconds
   * ```typescript
   * const cacheable = new Cacheable();
   * cacheable.ttl = 3600000; // Set the time-to-live to 1 hour
   * ```
   */
  set ttl(ttl) {
    this.setTtl(ttl);
  }
  /**
   * The cacheId for the cacheable instance. This is primarily used for the wrap function to not have conflicts.
   * If it is not set then it will be a random string that is generated
   * @returns {string} The cacheId for the cacheable instance
   */
  get cacheId() {
    return this._cacheId;
  }
  /**
   * Sets the cacheId for the cacheable instance. This is primarily used for the wrap function to not have conflicts.
   * If it is not set then it will be a random string that is generated
   * @param {string} cacheId The cacheId for the cacheable instance
   */
  set cacheId(cacheId) {
    this._cacheId = cacheId;
  }
  /**
   * Gets the sync instance for the cacheable instance
   * @returns {CacheableSync | undefined} The sync instance for the cacheable instance
   */
  get sync() {
    return this._sync;
  }
  /**
   * Sets the sync instance for the cacheable instance
   * @param {CacheableSync | undefined} sync The sync instance for the cacheable instance
   */
  set sync(sync) {
    this._sync = sync;
    if (this._sync) {
      this._sync.subscribe(this._primary, this._cacheId);
    }
  }
  /**
   * Sets the primary store for the cacheable instance
   * @param {Keyv | KeyvStoreAdapter} primary The primary store for the cacheable instance
   * @returns {void}
   */
  setPrimary(primary) {
    if ((0, import_utils.isKeyvInstance)(primary)) {
      this._primary = primary;
    } else {
      this._primary = new import_keyv.Keyv(primary);
    }
    this._primary.on("error", (error) => {
      this.emit("error" /* ERROR */, error);
    });
  }
  /**
   * Sets the secondary store for the cacheable instance. If it is set to undefined then the secondary store is disabled.
   * @param {Keyv | KeyvStoreAdapter} secondary The secondary store for the cacheable instance
   * @returns {void}
   */
  setSecondary(secondary) {
    if ((0, import_utils.isKeyvInstance)(secondary)) {
      this._secondary = secondary;
    } else {
      this._secondary = new import_keyv.Keyv(secondary);
    }
    this._secondary.on("error", (error) => {
      this.emit("error" /* ERROR */, error);
    });
  }
  getNameSpace() {
    if (typeof this._namespace === "function") {
      return this._namespace();
    }
    return this._namespace;
  }
  /**
   * Retrieves an entry from the cache.
   *
   * Checks the primary store first; if not found and a secondary store is configured,
   * it will fetch from the secondary, repopulate the primary, and return the result.
   *
   * @typeParam T - The expected type of the stored value.
   * @param {string} key - The cache key to retrieve.
   * @param {GetOptions} - options such as to bypass `nonBlocking` for this call
   * @returns {Promise<T | undefined>}
   *   A promise that resolves to the cached value if found, or `undefined`.
   */
  async get(key, options) {
    const result = await this.getRaw(key, options);
    return result?.value;
  }
  /**
   * Retrieves the raw entry from the cache including metadata like expiration.
   *
   * Checks the primary store first; if not found and a secondary store is configured,
   * it will fetch from the secondary, repopulate the primary, and return the result.
   *
   * @typeParam T - The expected type of the stored value.
   * @param {string} key - The cache key to retrieve.
   * @param {GetOptions} - options such as to bypass `nonBlocking` for this call
   * @returns {Promise<StoredDataRaw<T>>}
   *   A promise that resolves to the full raw data object if found, or undefined.
   */
  async getRaw(key, options) {
    let result;
    try {
      await this.hook("BEFORE_GET" /* BEFORE_GET */, key);
      result = await this._primary.getRaw(key);
      let ttl;
      if (result) {
        this.emit("cache:hit" /* CACHE_HIT */, {
          key,
          value: result.value,
          store: "primary"
        });
      } else {
        this.emit("cache:miss" /* CACHE_MISS */, { key, store: "primary" });
      }
      const nonBlocking = options?.nonBlocking ?? this._nonBlocking;
      if (!result && this._secondary) {
        let secondaryProcessResult;
        if (nonBlocking) {
          secondaryProcessResult = await this.processSecondaryForGetRawNonBlocking(
            this._primary,
            this._secondary,
            key
          );
        } else {
          secondaryProcessResult = await this.processSecondaryForGetRaw(
            this._primary,
            this._secondary,
            key
          );
        }
        if (secondaryProcessResult) {
          result = secondaryProcessResult.result;
          ttl = secondaryProcessResult.ttl;
        }
      }
      await this.hook("AFTER_GET" /* AFTER_GET */, { key, result, ttl });
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
    if (this.stats.enabled) {
      if (result) {
        this._stats.incrementHits();
      } else {
        this._stats.incrementMisses();
      }
      this.stats.incrementGets();
    }
    return result;
  }
  /**
   * Retrieves multiple raw entries from the cache including metadata like expiration.
   *
   * Checks the primary store for each key; if a key is missing and a secondary store is configured,
   * it will fetch from the secondary store, repopulate the primary store, and return the results.
   *
   * @typeParam T - The expected type of the stored values.
   * @param {string[]} keys - The cache keys to retrieve.
   * @param {GetOptions} - options such as to bypass `nonBlocking` on this call
   * @returns {Promise<Array<StoredDataRaw<T>>>}
   *   A promise that resolves to an array of raw data objects.
   */
  async getManyRaw(keys, options) {
    let result = [];
    try {
      await this.hook("BEFORE_GET_MANY" /* BEFORE_GET_MANY */, keys);
      result = await this._primary.getManyRaw(keys);
      for (const [i, key] of keys.entries()) {
        if (result[i]) {
          this.emit("cache:hit" /* CACHE_HIT */, {
            key,
            value: result[i].value,
            store: "primary"
          });
        } else {
          this.emit("cache:miss" /* CACHE_MISS */, { key, store: "primary" });
        }
      }
      const nonBlocking = options?.nonBlocking ?? this._nonBlocking;
      if (this._secondary) {
        if (nonBlocking) {
          await this.processSecondaryForGetManyRawNonBlocking(
            this._primary,
            this._secondary,
            keys,
            result
          );
        } else {
          await this.processSecondaryForGetManyRaw(
            this._primary,
            this._secondary,
            keys,
            result
          );
        }
      }
      await this.hook("AFTER_GET_MANY" /* AFTER_GET_MANY */, { keys, result });
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
    if (this.stats.enabled) {
      for (const item of result) {
        if (item) {
          this._stats.incrementHits();
        } else {
          this._stats.incrementMisses();
        }
      }
      this.stats.incrementGets();
    }
    return result;
  }
  /**
   * Retrieves multiple entries from the cache.
   * Checks the primary store for each key; if a key is missing and a secondary store is configured,
   * it will fetch from the secondary store, repopulate the primary store, and return the results.
   *
   * @typeParam T - The expected type of the stored values.
   * @param {string[]} keys - The cache keys to retrieve.
   * @param {GetOptions} - options such as to bypass `nonBlocking` on this call
   * @returns {Promise<Array<T | undefined>>}
   *   A promise that resolves to an array of cached values or `undefined` for misses.
   */
  async getMany(keys, options) {
    const result = await this.getManyRaw(keys, options);
    return result.map((item) => item?.value);
  }
  /**
   * Sets the value of the key. If the secondary store is set then it will also set the value in the secondary store.
   * @param {string} key the key to set the value of
   * @param {T} value The value to set
   * @param {number | string} [ttl] set a number it is miliseconds, set a string it is a human-readable
   * format such as `1s` for 1 second or `1h` for 1 hour. Setting undefined means that it will use the default time-to-live.
   * @returns {boolean} Whether the value was set
   */
  async set(key, value, ttl) {
    let result = false;
    const finalTtl = (0, import_utils.shorthandToMilliseconds)(ttl ?? this._ttl);
    try {
      const item = { key, value, ttl: finalTtl };
      await this.hook("BEFORE_SET" /* BEFORE_SET */, item);
      const promises = [];
      promises.push(this._primary.set(item.key, item.value, item.ttl));
      if (this._secondary) {
        promises.push(this._secondary.set(item.key, item.value, item.ttl));
      }
      if (this._nonBlocking) {
        result = await Promise.race(promises);
        for (const promise of promises) {
          promise.catch((error) => {
            this.emit("error" /* ERROR */, error);
          });
        }
      } else {
        const results = await Promise.all(promises);
        result = results[0];
      }
      await this.hook("AFTER_SET" /* AFTER_SET */, item);
      if (this._sync && result) {
        await this._sync.publish("cache:set" /* SET */, {
          cacheId: this._cacheId,
          key: item.key,
          value: item.value,
          ttl: item.ttl
        });
      }
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
    if (this.stats.enabled) {
      this.stats.incrementKSize(key);
      this.stats.incrementCount();
      this.stats.incrementVSize(value);
      this.stats.incrementSets();
    }
    return result;
  }
  /**
   * Sets the values of the keys. If the secondary store is set then it will also set the values in the secondary store.
   * @param {CacheableItem[]} items The items to set
   * @returns {boolean} Whether the values were set
   */
  async setMany(items) {
    let result = false;
    try {
      await this.hook("BEFORE_SET_MANY" /* BEFORE_SET_MANY */, items);
      result = await this.setManyKeyv(this._primary, items);
      if (this._secondary) {
        if (this._nonBlocking) {
          this.setManyKeyv(this._secondary, items).catch((error) => {
            this.emit("error" /* ERROR */, error);
          });
        } else {
          await this.setManyKeyv(this._secondary, items);
        }
      }
      await this.hook("AFTER_SET_MANY" /* AFTER_SET_MANY */, items);
      if (this._sync && result) {
        for (const item of items) {
          await this._sync.publish("cache:set" /* SET */, {
            cacheId: this._cacheId,
            key: item.key,
            value: item.value,
            ttl: (0, import_utils.shorthandToMilliseconds)(item.ttl)
          });
        }
      }
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
    if (this.stats.enabled) {
      for (const item of items) {
        this.stats.incrementKSize(item.key);
        this.stats.incrementCount();
        this.stats.incrementVSize(item.value);
      }
    }
    return result;
  }
  /**
   * Takes the value of the key and deletes the key. If the key does not exist then it will return undefined.
   * @param {string} key The key to take the value of
   * @returns {Promise<T | undefined>} The value of the key or undefined if the key does not exist
   */
  async take(key) {
    const result = await this.get(key);
    await this.delete(key);
    return result;
  }
  /**
   * Takes the values of the keys and deletes the keys. If the key does not exist then it will return undefined.
   * @param {string[]} keys The keys to take the values of
   * @returns {Promise<Array<T | undefined>>} The values of the keys or undefined if the key does not exist
   */
  async takeMany(keys) {
    const result = await this.getMany(keys);
    await this.deleteMany(keys);
    return result;
  }
  /**
   * Checks if the key exists in the primary store. If it does not exist then it will check the secondary store.
   * @param {string} key The key to check
   * @returns {Promise<boolean>} Whether the key exists
   */
  async has(key) {
    const promises = [];
    promises.push(this._primary.has(key));
    if (this._secondary) {
      promises.push(this._secondary.has(key));
    }
    const resultAll = await Promise.all(promises);
    for (const result of resultAll) {
      if (result) {
        return true;
      }
    }
    return false;
  }
  /**
   * Checks if the keys exist in the primary store. If it does not exist then it will check the secondary store.
   * @param {string[]} keys The keys to check
   * @returns {Promise<boolean[]>} Whether the keys exist
   */
  async hasMany(keys) {
    const result = await this._primary.hasMany(keys);
    const missingKeys = [];
    for (const [i, key] of keys.entries()) {
      if (!result[i] && this._secondary) {
        missingKeys.push(key);
      }
    }
    if (missingKeys.length > 0 && this._secondary) {
      const secondary = await this._secondary.hasMany(keys);
      for (const [i, _key] of keys.entries()) {
        if (!result[i] && secondary[i]) {
          result[i] = secondary[i];
        }
      }
    }
    return result;
  }
  /**
   * Deletes the key from the primary store. If the secondary store is set then it will also delete the key from the secondary store.
   * @param {string} key The key to delete
   * @returns {Promise<boolean>} Whether the key was deleted
   */
  async delete(key) {
    let result = false;
    const promises = [];
    if (this.stats.enabled) {
      const statResult = await this._primary.get(key);
      if (statResult) {
        this.stats.decreaseKSize(key);
        this.stats.decreaseVSize(statResult);
        this.stats.decreaseCount();
        this.stats.incrementDeletes();
      }
    }
    promises.push(this._primary.delete(key));
    if (this._secondary) {
      promises.push(this._secondary.delete(key));
    }
    if (this.nonBlocking) {
      result = await Promise.race(promises);
      for (const promise of promises) {
        promise.catch((error) => {
          this.emit("error" /* ERROR */, error);
        });
      }
    } else {
      const resultAll = await Promise.all(promises);
      result = resultAll[0];
    }
    if (this._sync && result) {
      await this._sync.publish("cache:delete" /* DELETE */, {
        cacheId: this._cacheId,
        key
      });
    }
    return result;
  }
  /**
   * Deletes the keys from the primary store. If the secondary store is set then it will also delete the keys from the secondary store.
   * @param {string[]} keys The keys to delete
   * @returns {Promise<boolean>} Whether the keys were deleted
   */
  async deleteMany(keys) {
    if (this.stats.enabled) {
      const statResult = await this._primary.get(keys);
      for (const key of keys) {
        this.stats.decreaseKSize(key);
        this.stats.decreaseVSize(statResult);
        this.stats.decreaseCount();
        this.stats.incrementDeletes();
      }
    }
    const result = await this._primary.deleteMany(keys);
    if (this._secondary) {
      if (this._nonBlocking) {
        this._secondary.deleteMany(keys).catch((error) => {
          this.emit("error" /* ERROR */, error);
        });
      } else {
        await this._secondary.deleteMany(keys);
      }
    }
    if (this._sync && result) {
      for (const key of keys) {
        await this._sync.publish("cache:delete" /* DELETE */, {
          cacheId: this._cacheId,
          key
        });
      }
    }
    return result;
  }
  /**
   * Clears the primary store. If the secondary store is set then it will also clear the secondary store.
   * @returns {Promise<void>}
   */
  async clear() {
    const promises = [];
    promises.push(this._primary.clear());
    if (this._secondary) {
      promises.push(this._secondary.clear());
    }
    await (this._nonBlocking ? Promise.race(promises) : Promise.all(promises));
    if (this.stats.enabled) {
      this._stats.resetStoreValues();
      this._stats.incrementClears();
    }
  }
  /**
   * Disconnects the primary store. If the secondary store is set then it will also disconnect the secondary store.
   * @returns {Promise<void>}
   */
  async disconnect() {
    const promises = [];
    promises.push(this._primary.disconnect());
    if (this._secondary) {
      promises.push(this._secondary.disconnect());
    }
    promises.push(this._sync?.qified.disconnect());
    await (this._nonBlocking ? Promise.race(promises) : Promise.all(promises));
  }
  /**
   * Wraps a function with caching
   *
   * [Learn more about wrapping functions](https://cacheable.org/docs/cacheable/#wrap--memoization-for-sync-and-async-functions).
   * @param {Function} function_ The function to wrap
   * @param {WrapOptions} [options] The options for the wrap function
   * @returns {Function} The wrapped function
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  wrap(function_, options) {
    const cacheAdapter = {
      get: async (key) => this.get(key),
      /* v8 ignore next -- @preserve */
      has: async (key) => this.has(key),
      set: async (key, value, ttl) => {
        await this.set(key, value, ttl);
      },
      /* v8 ignore next -- @preserve */
      on: (event, listener) => {
        this.on(event, listener);
      },
      /* v8 ignore next -- @preserve */
      emit: (event, ...args) => this.emit(event, ...args)
    };
    const wrapOptions = {
      ttl: options?.ttl ?? this._ttl,
      keyPrefix: options?.keyPrefix,
      createKey: options?.createKey,
      cacheErrors: options?.cacheErrors,
      cache: cacheAdapter,
      cacheId: this._cacheId,
      serialize: options?.serialize
    };
    return (0, import_utils.wrap)(function_, wrapOptions);
  }
  /**
   * Retrieves the value associated with the given key from the cache. If the key is not found,
   * invokes the provided function to calculate the value, stores it in the cache, and then returns it.
   *
   * @param {GetOrSetKey} key - The key to retrieve or set in the cache. This can also be a function that returns a string key.
   * If a function is provided, it will be called with the cache options to generate the key.
   * @param {() => Promise<T>} function_ - The asynchronous function that computes the value to be cached if the key does not exist.
   * @param {GetOrSetFunctionOptions} [options] - Optional settings for caching, such as the time to live (TTL) or whether to cache errors.
   * @return {Promise<T | undefined>} - A promise that resolves to the cached or newly computed value, or undefined if an error occurs and caching is not configured for errors.
   */
  async getOrSet(key, function_, options) {
    const getOptions = options?.nonBlocking === void 0 ? void 0 : { nonBlocking: options.nonBlocking };
    const cacheAdapter = {
      get: async (key2) => this.get(key2, getOptions),
      /* v8 ignore next -- @preserve */
      has: async (key2) => this.has(key2),
      set: async (key2, value, ttl) => {
        await this.set(key2, value, ttl);
      },
      /* v8 ignore next -- @preserve */
      on: (event, listener) => {
        this.on(event, listener);
      },
      emit: (event, ...args) => this.emit(event, ...args)
    };
    const getOrSetOptions = {
      cache: cacheAdapter,
      cacheId: this._cacheId,
      ttl: options?.ttl ?? this._ttl,
      cacheErrors: options?.cacheErrors,
      throwErrors: options?.throwErrors,
      nonBlocking: options?.nonBlocking
    };
    return (0, import_utils.getOrSet)(key, function_, getOrSetOptions);
  }
  /**
   * Will hash an object asynchronously using the specified cryptographic algorithm.
   * Use this for cryptographic algorithms (SHA-256, SHA-384, SHA-512).
   * For non-cryptographic algorithms, use hashSync() for better performance.
   * @param {any} object the object to hash
   * @param {string} algorithm the hash algorithm to use. The default is 'SHA-256'
   * @returns {Promise<string>} the hash of the object
   */
  async hash(object, algorithm = import_utils.HashAlgorithm.SHA256) {
    return (0, import_utils.hash)(object, { algorithm });
  }
  /**
   * Will hash an object synchronously using the specified non-cryptographic algorithm.
   * Use this for non-cryptographic algorithms (DJB2, FNV1, MURMER, CRC32).
   * For cryptographic algorithms, use hash() instead.
   * @param {any} object the object to hash
   * @param {string} algorithm the hash algorithm to use. The default is 'djb2'
   * @returns {string} the hash of the object
   */
  hashSync(object, algorithm = import_utils.HashAlgorithm.DJB2) {
    return (0, import_utils.hashSync)(object, { algorithm });
  }
  async setManyKeyv(keyv, items) {
    const entries = [];
    for (const item of items) {
      const finalTtl = (0, import_utils.shorthandToMilliseconds)(item.ttl ?? this._ttl);
      entries.push({ key: item.key, value: item.value, ttl: finalTtl });
    }
    await keyv.setMany(entries);
    return true;
  }
  /**
   * Processes a single key from secondary store for getRaw operation
   * @param primary - the primary store to use
   * @param secondary - the secondary store to use
   * @param key - The key to retrieve from secondary store
   * @returns Promise containing the result and TTL information
   */
  async processSecondaryForGetRaw(primary, secondary, key) {
    const secondaryResult = await secondary.getRaw(key);
    if (secondaryResult?.value) {
      this.emit("cache:hit" /* CACHE_HIT */, {
        key,
        value: secondaryResult.value,
        store: "secondary"
      });
      const cascadeTtl = (0, import_utils.getCascadingTtl)(this._ttl, this._primary.ttl);
      const expires = secondaryResult.expires ?? void 0;
      const ttl = (0, import_utils.calculateTtlFromExpiration)(cascadeTtl, expires);
      const setItem = { key, value: secondaryResult.value, ttl };
      await this.hook("BEFORE_SECONDARY_SETS_PRIMARY" /* BEFORE_SECONDARY_SETS_PRIMARY */, setItem);
      await primary.set(setItem.key, setItem.value, setItem.ttl);
      return { result: secondaryResult, ttl };
    } else {
      this.emit("cache:miss" /* CACHE_MISS */, { key, store: "secondary" });
      return void 0;
    }
  }
  /**
   * Processes a single key from secondary store for getRaw operation in non-blocking mode
   * Non-blocking mode means we don't wait for secondary operations that update primary store
   * @param primary - the primary store to use
   * @param secondary - the secondary store to use
   * @param key - The key to retrieve from secondary store
   * @returns Promise containing the result and TTL information
   */
  async processSecondaryForGetRawNonBlocking(primary, secondary, key) {
    const secondaryResult = await secondary.getRaw(key);
    if (secondaryResult?.value) {
      this.emit("cache:hit" /* CACHE_HIT */, {
        key,
        value: secondaryResult.value,
        store: "secondary"
      });
      const cascadeTtl = (0, import_utils.getCascadingTtl)(this._ttl, this._primary.ttl);
      const expires = secondaryResult.expires ?? void 0;
      const ttl = (0, import_utils.calculateTtlFromExpiration)(cascadeTtl, expires);
      const setItem = { key, value: secondaryResult.value, ttl };
      this.hook("BEFORE_SECONDARY_SETS_PRIMARY" /* BEFORE_SECONDARY_SETS_PRIMARY */, setItem).then(async () => {
        await primary.set(setItem.key, setItem.value, setItem.ttl);
      }).catch((error) => {
        this.emit("error" /* ERROR */, error);
      });
      return { result: secondaryResult, ttl };
    } else {
      this.emit("cache:miss" /* CACHE_MISS */, { key, store: "secondary" });
      return void 0;
    }
  }
  /**
   * Processes missing keys from secondary store for getManyRaw operation
   * @param primary - the primary store to use
   * @param secondary - the secondary store to use
   * @param keys - The original array of keys requested
   * @param result - The result array from primary store (will be modified)
   * @returns Promise<void>
   */
  async processSecondaryForGetManyRaw(primary, secondary, keys, result) {
    const missingKeys = [];
    for (const [i, key] of keys.entries()) {
      if (!result[i]) {
        missingKeys.push(key);
      }
    }
    const secondaryResults = await secondary.getManyRaw(missingKeys);
    let secondaryIndex = 0;
    for await (const [i, key] of keys.entries()) {
      if (!result[i]) {
        const secondaryResult = secondaryResults[secondaryIndex];
        if (secondaryResult && secondaryResult.value !== void 0) {
          result[i] = secondaryResult;
          this.emit("cache:hit" /* CACHE_HIT */, {
            key,
            value: secondaryResult.value,
            store: "secondary"
          });
          const cascadeTtl = (0, import_utils.getCascadingTtl)(this._ttl, this._primary.ttl);
          let { expires } = secondaryResult;
          if (expires === null) {
            expires = void 0;
          }
          const ttl = (0, import_utils.calculateTtlFromExpiration)(cascadeTtl, expires);
          const setItem = { key, value: secondaryResult.value, ttl };
          await this.hook(
            "BEFORE_SECONDARY_SETS_PRIMARY" /* BEFORE_SECONDARY_SETS_PRIMARY */,
            setItem
          );
          await primary.set(setItem.key, setItem.value, setItem.ttl);
        } else {
          this.emit("cache:miss" /* CACHE_MISS */, {
            key,
            store: "secondary"
          });
        }
        secondaryIndex++;
      }
    }
  }
  /**
   * Processes missing keys from secondary store for getManyRaw operation in non-blocking mode
   * Non-blocking mode means we don't wait for secondary operations that update primary store
   * @param secondary - the secondary store to use
   * @param keys - The original array of keys requested
   * @param result - The result array from primary store (will be modified)
   * @returns Promise<void>
   */
  async processSecondaryForGetManyRawNonBlocking(primary, secondary, keys, result) {
    const missingKeys = [];
    for (const [i, key] of keys.entries()) {
      if (!result[i]) {
        missingKeys.push(key);
      }
    }
    const secondaryResults = await secondary.getManyRaw(missingKeys);
    let secondaryIndex = 0;
    for await (const [i, key] of keys.entries()) {
      if (!result[i]) {
        const secondaryResult = secondaryResults[secondaryIndex];
        if (secondaryResult && secondaryResult.value !== void 0) {
          result[i] = secondaryResult;
          this.emit("cache:hit" /* CACHE_HIT */, {
            key,
            value: secondaryResult.value,
            store: "secondary"
          });
          const cascadeTtl = (0, import_utils.getCascadingTtl)(this._ttl, this._primary.ttl);
          let { expires } = secondaryResult;
          if (expires === null) {
            expires = void 0;
          }
          const ttl = (0, import_utils.calculateTtlFromExpiration)(cascadeTtl, expires);
          const setItem = { key, value: secondaryResult.value, ttl };
          this.hook("BEFORE_SECONDARY_SETS_PRIMARY" /* BEFORE_SECONDARY_SETS_PRIMARY */, setItem).then(async () => {
            await primary.set(setItem.key, setItem.value, setItem.ttl);
          }).catch((error) => {
            this.emit("error" /* ERROR */, error);
          });
        } else {
          this.emit("cache:miss" /* CACHE_MISS */, {
            key,
            store: "secondary"
          });
        }
        secondaryIndex++;
      }
    }
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
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cacheable,
  CacheableEvents,
  CacheableHooks,
  CacheableMemory,
  CacheableStats,
  CacheableSync,
  CacheableSyncEvents,
  HashAlgorithm,
  Keyv,
  KeyvCacheableMemory,
  KeyvHooks,
  calculateTtlFromExpiration,
  createKeyv,
  getCascadingTtl,
  getOrSet,
  hash,
  shorthandToMilliseconds,
  shorthandToTime,
  wrap,
  wrapSync
});
/* v8 ignore next -- @preserve */
