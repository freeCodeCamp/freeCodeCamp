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
  Keyv: () => Keyv,
  KeyvHooks: () => KeyvHooks,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_serialize = require("@keyv/serialize");

// src/event-manager.ts
var EventManager = class {
  _eventListeners;
  _maxListeners;
  constructor() {
    this._eventListeners = /* @__PURE__ */ new Map();
    this._maxListeners = 100;
  }
  maxListeners() {
    return this._maxListeners;
  }
  // Add an event listener
  addListener(event, listener) {
    this.on(event, listener);
  }
  on(event, listener) {
    if (!this._eventListeners.has(event)) {
      this._eventListeners.set(event, []);
    }
    const listeners = this._eventListeners.get(event);
    if (listeners) {
      if (listeners.length >= this._maxListeners) {
        console.warn(
          `MaxListenersExceededWarning: Possible event memory leak detected. ${listeners.length + 1} ${event} listeners added. Use setMaxListeners() to increase limit.`
        );
      }
      listeners.push(listener);
    }
    return this;
  }
  // Remove an event listener
  removeListener(event, listener) {
    this.off(event, listener);
  }
  off(event, listener) {
    const listeners = this._eventListeners.get(event) ?? [];
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    if (listeners.length === 0) {
      this._eventListeners.delete(event);
    }
  }
  once(event, listener) {
    const onceListener = (...arguments_) => {
      listener(...arguments_);
      this.off(event, onceListener);
    };
    this.on(event, onceListener);
  }
  // Emit an event
  // biome-ignore lint/suspicious/noExplicitAny: type format
  emit(event, ...arguments_) {
    const listeners = this._eventListeners.get(event);
    if (listeners && listeners.length > 0) {
      for (const listener of listeners) {
        listener(...arguments_);
      }
    }
  }
  // Get all listeners for a specific event
  listeners(event) {
    return this._eventListeners.get(event) ?? [];
  }
  // Remove all listeners for a specific event
  removeAllListeners(event) {
    if (event) {
      this._eventListeners.delete(event);
    } else {
      this._eventListeners.clear();
    }
  }
  // Set the maximum number of listeners for a single event
  setMaxListeners(n) {
    this._maxListeners = n;
  }
};
var event_manager_default = EventManager;

// src/hooks-manager.ts
var HooksManager = class extends event_manager_default {
  _hookHandlers;
  constructor() {
    super();
    this._hookHandlers = /* @__PURE__ */ new Map();
  }
  // Adds a handler function for a specific event
  addHandler(event, handler) {
    const eventHandlers = this._hookHandlers.get(event);
    if (eventHandlers) {
      eventHandlers.push(handler);
    } else {
      this._hookHandlers.set(event, [handler]);
    }
  }
  // Removes a specific handler function for a specific event
  removeHandler(event, handler) {
    const eventHandlers = this._hookHandlers.get(event);
    if (eventHandlers) {
      const index = eventHandlers.indexOf(handler);
      if (index !== -1) {
        eventHandlers.splice(index, 1);
      }
    }
  }
  // Triggers all handlers for a specific event with provided data
  // biome-ignore lint/suspicious/noExplicitAny: type format
  trigger(event, data) {
    const eventHandlers = this._hookHandlers.get(event);
    if (eventHandlers) {
      for (const handler of eventHandlers) {
        try {
          handler(data);
        } catch (error) {
          this.emit(
            "error",
            new Error(
              `Error in hook handler for event "${event}": ${error.message}`
            )
          );
        }
      }
    }
  }
  // Provides read-only access to the current handlers
  get handlers() {
    return new Map(this._hookHandlers);
  }
};
var hooks_manager_default = HooksManager;

// src/stats-manager.ts
var StatsManager = class extends event_manager_default {
  enabled = true;
  hits = 0;
  misses = 0;
  sets = 0;
  deletes = 0;
  errors = 0;
  constructor(enabled) {
    super();
    if (enabled !== void 0) {
      this.enabled = enabled;
    }
    this.reset();
  }
  hit() {
    if (this.enabled) {
      this.hits++;
    }
  }
  miss() {
    if (this.enabled) {
      this.misses++;
    }
  }
  set() {
    if (this.enabled) {
      this.sets++;
    }
  }
  delete() {
    if (this.enabled) {
      this.deletes++;
    }
  }
  hitsOrMisses(array) {
    for (const item of array) {
      if (item === void 0) {
        this.miss();
      } else {
        this.hit();
      }
    }
  }
  reset() {
    this.hits = 0;
    this.misses = 0;
    this.sets = 0;
    this.deletes = 0;
    this.errors = 0;
  }
};
var stats_manager_default = StatsManager;

// src/index.ts
var KeyvHooks = /* @__PURE__ */ ((KeyvHooks2) => {
  KeyvHooks2["PRE_SET"] = "preSet";
  KeyvHooks2["POST_SET"] = "postSet";
  KeyvHooks2["PRE_GET"] = "preGet";
  KeyvHooks2["POST_GET"] = "postGet";
  KeyvHooks2["PRE_GET_MANY"] = "preGetMany";
  KeyvHooks2["POST_GET_MANY"] = "postGetMany";
  KeyvHooks2["PRE_GET_RAW"] = "preGetRaw";
  KeyvHooks2["POST_GET_RAW"] = "postGetRaw";
  KeyvHooks2["PRE_GET_MANY_RAW"] = "preGetManyRaw";
  KeyvHooks2["POST_GET_MANY_RAW"] = "postGetManyRaw";
  KeyvHooks2["PRE_DELETE"] = "preDelete";
  KeyvHooks2["POST_DELETE"] = "postDelete";
  return KeyvHooks2;
})(KeyvHooks || {});
var iterableAdapters = [
  "sqlite",
  "postgres",
  "mysql",
  "mongo",
  "redis",
  "valkey",
  "etcd"
];
var Keyv = class extends event_manager_default {
  opts;
  iterator;
  hooks = new hooks_manager_default();
  stats = new stats_manager_default(false);
  /**
   * Time to live in milliseconds
   */
  _ttl;
  /**
   * Namespace
   */
  _namespace;
  /**
   * Store
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  _store = /* @__PURE__ */ new Map();
  _serialize = import_serialize.defaultSerialize;
  _deserialize = import_serialize.defaultDeserialize;
  _compression;
  _useKeyPrefix = true;
  _throwOnErrors = false;
  /**
   * Keyv Constructor
   * @param {KeyvStoreAdapter | KeyvOptions} store
   * @param {Omit<KeyvOptions, 'store'>} [options] if you provide the store you can then provide the Keyv Options
   */
  constructor(store, options) {
    super();
    options ??= {};
    store ??= {};
    this.opts = {
      namespace: "keyv",
      serialize: import_serialize.defaultSerialize,
      deserialize: import_serialize.defaultDeserialize,
      emitErrors: true,
      // @ts-expect-error - Map is not a KeyvStoreAdapter
      store: /* @__PURE__ */ new Map(),
      ...options
    };
    if (store && store.get) {
      this.opts.store = store;
    } else {
      this.opts = {
        ...this.opts,
        ...store
      };
    }
    this._store = this.opts.store ?? /* @__PURE__ */ new Map();
    this._compression = this.opts.compression;
    this._serialize = this.opts.serialize;
    this._deserialize = this.opts.deserialize;
    if (this.opts.namespace) {
      this._namespace = this.opts.namespace;
    }
    if (this._store) {
      if (!this._isValidStorageAdapter(this._store)) {
        throw new Error("Invalid storage adapter");
      }
      if (typeof this._store.on === "function") {
        this._store.on("error", (error) => this.emit("error", error));
      }
      this._store.namespace = this._namespace;
      if (typeof this._store[Symbol.iterator] === "function" && this._store instanceof Map) {
        this.iterator = this.generateIterator(
          this._store
        );
      } else if ("iterator" in this._store && this._store.opts && this._checkIterableAdapter()) {
        this.iterator = this.generateIterator(
          // biome-ignore lint/style/noNonNullAssertion: need to fix
          this._store.iterator.bind(this._store)
        );
      }
    }
    if (this.opts.stats) {
      this.stats.enabled = this.opts.stats;
    }
    if (this.opts.ttl) {
      this._ttl = this.opts.ttl;
    }
    if (this.opts.useKeyPrefix !== void 0) {
      this._useKeyPrefix = this.opts.useKeyPrefix;
    }
    if (this.opts.throwOnErrors !== void 0) {
      this._throwOnErrors = this.opts.throwOnErrors;
    }
  }
  /**
   * Get the current store
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  get store() {
    return this._store;
  }
  /**
   * Set the current store. This will also set the namespace, event error handler, and generate the iterator. If the store is not valid it will throw an error.
   * @param {KeyvStoreAdapter | Map<any, any> | any} store the store to set
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  set store(store) {
    if (this._isValidStorageAdapter(store)) {
      this._store = store;
      this.opts.store = store;
      if (typeof store.on === "function") {
        store.on("error", (error) => this.emit("error", error));
      }
      if (this._namespace) {
        this._store.namespace = this._namespace;
      }
      if (typeof store[Symbol.iterator] === "function" && store instanceof Map) {
        this.iterator = this.generateIterator(
          store
        );
      } else if ("iterator" in store && store.opts && this._checkIterableAdapter()) {
        this.iterator = this.generateIterator(store.iterator?.bind(store));
      }
    } else {
      throw new Error("Invalid storage adapter");
    }
  }
  /**
   * Get the current compression function
   * @returns {CompressionAdapter} The current compression function
   */
  get compression() {
    return this._compression;
  }
  /**
   * Set the current compression function
   * @param {CompressionAdapter} compress The compression function to set
   */
  set compression(compress) {
    this._compression = compress;
  }
  /**
   * Get the current namespace.
   * @returns {string | undefined} The current namespace.
   */
  get namespace() {
    return this._namespace;
  }
  /**
   * Set the current namespace.
   * @param {string | undefined} namespace The namespace to set.
   */
  set namespace(namespace) {
    this._namespace = namespace;
    this.opts.namespace = namespace;
    this._store.namespace = namespace;
    if (this.opts.store) {
      this.opts.store.namespace = namespace;
    }
  }
  /**
   * Get the current TTL.
   * @returns {number} The current TTL in milliseconds.
   */
  get ttl() {
    return this._ttl;
  }
  /**
   * Set the current TTL.
   * @param {number} ttl The TTL to set in milliseconds.
   */
  set ttl(ttl) {
    this.opts.ttl = ttl;
    this._ttl = ttl;
  }
  /**
   * Get the current serialize function.
   * @returns {Serialize} The current serialize function.
   */
  get serialize() {
    return this._serialize;
  }
  /**
   * Set the current serialize function.
   * @param {Serialize} serialize The serialize function to set.
   */
  set serialize(serialize) {
    this.opts.serialize = serialize;
    this._serialize = serialize;
  }
  /**
   * Get the current deserialize function.
   * @returns {Deserialize} The current deserialize function.
   */
  get deserialize() {
    return this._deserialize;
  }
  /**
   * Set the current deserialize function.
   * @param {Deserialize} deserialize The deserialize function to set.
   */
  set deserialize(deserialize) {
    this.opts.deserialize = deserialize;
    this._deserialize = deserialize;
  }
  /**
   * Get the current useKeyPrefix value. This will enable or disable key prefixing.
   * @returns {boolean} The current useKeyPrefix value.
   * @default true
   */
  get useKeyPrefix() {
    return this._useKeyPrefix;
  }
  /**
   * Set the current useKeyPrefix value. This will enable or disable key prefixing.
   * @param {boolean} value The useKeyPrefix value to set.
   */
  set useKeyPrefix(value) {
    this._useKeyPrefix = value;
    this.opts.useKeyPrefix = value;
  }
  /**
   * Get the current throwErrors value. This will enable or disable throwing errors on methods in addition to emitting them.
   * @return {boolean} The current throwOnErrors value.
   */
  get throwOnErrors() {
    return this._throwOnErrors;
  }
  /**
   * Set the current throwOnErrors value. This will enable or disable throwing errors on methods in addition to emitting them.
   * @param {boolean} value The throwOnErrors value to set.
   */
  set throwOnErrors(value) {
    this._throwOnErrors = value;
    this.opts.throwOnErrors = value;
  }
  generateIterator(iterator) {
    const function_ = async function* () {
      for await (const [key, raw] of typeof iterator === "function" ? iterator(this._store.namespace) : iterator) {
        const data = await this.deserializeData(raw);
        if (this._useKeyPrefix && this._store.namespace && !key.includes(this._store.namespace)) {
          continue;
        }
        if (typeof data.expires === "number" && Date.now() > data.expires) {
          await this.delete(key);
          continue;
        }
        yield [this._getKeyUnprefix(key), data.value];
      }
    };
    return function_.bind(this);
  }
  _checkIterableAdapter() {
    return iterableAdapters.includes(this._store.opts.dialect) || iterableAdapters.some(
      (element) => this._store.opts.url.includes(element)
    );
  }
  _getKeyPrefix(key) {
    if (!this._useKeyPrefix) {
      return key;
    }
    if (!this._namespace) {
      return key;
    }
    if (key.startsWith(`${this._namespace}:`)) {
      return key;
    }
    return `${this._namespace}:${key}`;
  }
  _getKeyPrefixArray(keys) {
    if (!this._useKeyPrefix) {
      return keys;
    }
    if (!this._namespace) {
      return keys;
    }
    return keys.map((key) => `${this._namespace}:${key}`);
  }
  _getKeyUnprefix(key) {
    if (!this._useKeyPrefix) {
      return key;
    }
    return key.split(":").splice(1).join(":");
  }
  // biome-ignore lint/suspicious/noExplicitAny: type format
  _isValidStorageAdapter(store) {
    return store instanceof Map || typeof store.get === "function" && typeof store.set === "function" && typeof store.delete === "function" && typeof store.clear === "function";
  }
  // eslint-disable-next-line @stylistic/max-len
  async get(key, options) {
    const { store } = this.opts;
    const isArray = Array.isArray(key);
    const keyPrefixed = isArray ? this._getKeyPrefixArray(key) : this._getKeyPrefix(key);
    const isDataExpired = (data) => typeof data.expires === "number" && Date.now() > data.expires;
    if (isArray) {
      if (options?.raw === true) {
        return this.getMany(key, { raw: true });
      }
      return this.getMany(key, { raw: false });
    }
    this.hooks.trigger("preGet" /* PRE_GET */, { key: keyPrefixed });
    let rawData;
    try {
      rawData = await store.get(keyPrefixed);
    } catch (error) {
      if (this.throwOnErrors) {
        throw error;
      }
    }
    const deserializedData = typeof rawData === "string" || this.opts.compression ? await this.deserializeData(rawData) : rawData;
    if (deserializedData === void 0 || deserializedData === null) {
      this.hooks.trigger("postGet" /* POST_GET */, {
        key: keyPrefixed,
        value: void 0
      });
      this.stats.miss();
      return void 0;
    }
    if (isDataExpired(deserializedData)) {
      await this.delete(key);
      this.hooks.trigger("postGet" /* POST_GET */, {
        key: keyPrefixed,
        value: void 0
      });
      this.stats.miss();
      return void 0;
    }
    this.hooks.trigger("postGet" /* POST_GET */, {
      key: keyPrefixed,
      value: deserializedData
    });
    this.stats.hit();
    return options?.raw ? deserializedData : deserializedData.value;
  }
  async getMany(keys, options) {
    const { store } = this.opts;
    const keyPrefixed = this._getKeyPrefixArray(keys);
    const isDataExpired = (data) => typeof data.expires === "number" && Date.now() > data.expires;
    this.hooks.trigger("preGetMany" /* PRE_GET_MANY */, { keys: keyPrefixed });
    if (store.getMany === void 0) {
      const promises = keyPrefixed.map(async (key) => {
        const rawData2 = await store.get(key);
        const deserializedRow = typeof rawData2 === "string" || this.opts.compression ? await this.deserializeData(rawData2) : rawData2;
        if (deserializedRow === void 0 || deserializedRow === null) {
          return void 0;
        }
        if (isDataExpired(deserializedRow)) {
          await this.delete(key);
          return void 0;
        }
        return options?.raw ? deserializedRow : deserializedRow.value;
      });
      const deserializedRows = await Promise.allSettled(promises);
      const result2 = deserializedRows.map(
        // biome-ignore lint/suspicious/noExplicitAny: type format
        (row) => row.value
      );
      this.hooks.trigger("postGetMany" /* POST_GET_MANY */, result2);
      if (result2.length > 0) {
        this.stats.hit();
      }
      return result2;
    }
    const rawData = await store.getMany(keyPrefixed);
    const result = [];
    const expiredKeys = [];
    for (const index in rawData) {
      let row = rawData[index];
      if (typeof row === "string") {
        row = await this.deserializeData(row);
      }
      if (row === void 0 || row === null) {
        result.push(void 0);
        continue;
      }
      if (isDataExpired(row)) {
        expiredKeys.push(keys[index]);
        result.push(void 0);
        continue;
      }
      const value = options?.raw ? row : row.value;
      result.push(value);
    }
    if (expiredKeys.length > 0) {
      await this.deleteMany(expiredKeys);
    }
    this.hooks.trigger("postGetMany" /* POST_GET_MANY */, result);
    if (result.length > 0) {
      this.stats.hit();
    }
    return result;
  }
  /**
   * Get the raw value of a key. This is the replacement for setting raw to true in the get() method.
   * @param {string} key the key to get
   * @returns {Promise<StoredDataRaw<Value> | undefined>} will return a StoredDataRaw<Value> or undefined if the key does not exist or is expired.
   */
  async getRaw(key) {
    const { store } = this.opts;
    const keyPrefixed = this._getKeyPrefix(key);
    this.hooks.trigger("preGetRaw" /* PRE_GET_RAW */, { key: keyPrefixed });
    const rawData = await store.get(keyPrefixed);
    if (rawData === void 0 || rawData === null) {
      this.hooks.trigger("postGetRaw" /* POST_GET_RAW */, {
        key: keyPrefixed,
        value: void 0
      });
      this.stats.miss();
      return void 0;
    }
    const deserializedData = typeof rawData === "string" || this.opts.compression ? await this.deserializeData(rawData) : rawData;
    if (deserializedData !== void 0 && deserializedData.expires !== void 0 && deserializedData.expires !== null && // biome-ignore lint/style/noNonNullAssertion: need to fix
    deserializedData.expires < Date.now()) {
      this.hooks.trigger("postGetRaw" /* POST_GET_RAW */, {
        key: keyPrefixed,
        value: void 0
      });
      this.stats.miss();
      await this.delete(key);
      return void 0;
    }
    this.stats.hit();
    this.hooks.trigger("postGetRaw" /* POST_GET_RAW */, {
      key: keyPrefixed,
      value: deserializedData
    });
    return deserializedData;
  }
  /**
   * Get the raw values of many keys. This is the replacement for setting raw to true in the getMany() method.
   * @param {string[]} keys the keys to get
   * @returns {Promise<Array<StoredDataRaw<Value>>>} will return an array of StoredDataRaw<Value> or undefined if the key does not exist or is expired.
   */
  async getManyRaw(keys) {
    const { store } = this.opts;
    const keyPrefixed = this._getKeyPrefixArray(keys);
    if (keys.length === 0) {
      const result2 = Array.from({ length: keys.length }).fill(
        void 0
      );
      this.stats.misses += keys.length;
      this.hooks.trigger("postGetManyRaw" /* POST_GET_MANY_RAW */, {
        keys: keyPrefixed,
        values: result2
      });
      return result2;
    }
    let result = [];
    if (store.getMany === void 0) {
      const promises = keyPrefixed.map(async (key) => {
        const rawData = await store.get(key);
        if (rawData !== void 0 && rawData !== null) {
          return this.deserializeData(rawData);
        }
        return void 0;
      });
      const deserializedRows = await Promise.allSettled(promises);
      result = deserializedRows.map(
        // biome-ignore lint/suspicious/noExplicitAny: type format
        (row) => row.value
      );
    } else {
      const rawData = await store.getMany(keyPrefixed);
      for (const row of rawData) {
        if (row !== void 0 && row !== null) {
          result.push(await this.deserializeData(row));
        } else {
          result.push(void 0);
        }
      }
    }
    const expiredKeys = [];
    const isDataExpired = (data) => typeof data.expires === "number" && Date.now() > data.expires;
    for (const [index, row] of result.entries()) {
      if (row !== void 0 && isDataExpired(row)) {
        expiredKeys.push(keyPrefixed[index]);
        result[index] = void 0;
      }
    }
    if (expiredKeys.length > 0) {
      await this.deleteMany(expiredKeys);
    }
    this.stats.hitsOrMisses(result);
    this.hooks.trigger("postGetManyRaw" /* POST_GET_MANY_RAW */, {
      keys: keyPrefixed,
      values: result
    });
    return result;
  }
  /**
   * Set an item to the store
   * @param {string | Array<KeyvEntry>} key the key to use. If you pass in an array of KeyvEntry it will set many items
   * @param {Value} value the value of the key
   * @param {number} [ttl] time to live in milliseconds
   * @returns {boolean} if it sets then it will return a true. On failure will return false.
   */
  async set(key, value, ttl) {
    const data = { key, value, ttl };
    this.hooks.trigger("preSet" /* PRE_SET */, data);
    const keyPrefixed = this._getKeyPrefix(data.key);
    data.ttl ??= this._ttl;
    if (data.ttl === 0) {
      data.ttl = void 0;
    }
    const { store } = this.opts;
    const expires = typeof data.ttl === "number" ? Date.now() + data.ttl : void 0;
    if (typeof data.value === "symbol") {
      this.emit("error", "symbol cannot be serialized");
      throw new Error("symbol cannot be serialized");
    }
    const formattedValue = { value: data.value, expires };
    const serializedValue = await this.serializeData(formattedValue);
    let result = true;
    try {
      const value2 = await store.set(keyPrefixed, serializedValue, data.ttl);
      if (typeof value2 === "boolean") {
        result = value2;
      }
    } catch (error) {
      result = false;
      this.emit("error", error);
      if (this._throwOnErrors) {
        throw error;
      }
    }
    this.hooks.trigger("postSet" /* POST_SET */, {
      key: keyPrefixed,
      value: serializedValue,
      ttl
    });
    this.stats.set();
    return result;
  }
  /**
   * Set many items to the store
   * @param {Array<KeyvEntry>} entries the entries to set
   * @returns {boolean[]} will return an array of booleans if it sets then it will return a true. On failure will return false.
   */
  // biome-ignore lint/correctness/noUnusedVariables: type format
  async setMany(entries) {
    let results = [];
    try {
      if (this._store.setMany === void 0) {
        const promises = [];
        for (const entry of entries) {
          promises.push(this.set(entry.key, entry.value, entry.ttl));
        }
        const promiseResults = await Promise.all(promises);
        results = promiseResults;
      } else {
        const serializedEntries = await Promise.all(
          entries.map(async ({ key, value, ttl }) => {
            ttl ??= this._ttl;
            if (ttl === 0) {
              ttl = void 0;
            }
            const expires = typeof ttl === "number" ? Date.now() + ttl : void 0;
            if (typeof value === "symbol") {
              this.emit("error", "symbol cannot be serialized");
              throw new Error("symbol cannot be serialized");
            }
            const formattedValue = { value, expires };
            const serializedValue = await this.serializeData(formattedValue);
            const keyPrefixed = this._getKeyPrefix(key);
            return { key: keyPrefixed, value: serializedValue, ttl };
          })
        );
        results = await this._store.setMany(serializedEntries);
      }
    } catch (error) {
      this.emit("error", error);
      if (this._throwOnErrors) {
        throw error;
      }
      results = entries.map(() => false);
    }
    return results;
  }
  /**
   * Delete an Entry
   * @param {string | string[]} key the key to be deleted. if an array it will delete many items
   * @returns {boolean} will return true if item or items are deleted. false if there is an error
   */
  async delete(key) {
    const { store } = this.opts;
    if (Array.isArray(key)) {
      return this.deleteMany(key);
    }
    const keyPrefixed = this._getKeyPrefix(key);
    this.hooks.trigger("preDelete" /* PRE_DELETE */, { key: keyPrefixed });
    let result = true;
    try {
      const value = await store.delete(keyPrefixed);
      if (typeof value === "boolean") {
        result = value;
      }
    } catch (error) {
      result = false;
      this.emit("error", error);
      if (this._throwOnErrors) {
        throw error;
      }
    }
    this.hooks.trigger("postDelete" /* POST_DELETE */, {
      key: keyPrefixed,
      value: result
    });
    this.stats.delete();
    return result;
  }
  /**
   * Delete many items from the store
   * @param {string[]} keys the keys to be deleted
   * @returns {boolean} will return true if item or items are deleted. false if there is an error
   */
  async deleteMany(keys) {
    try {
      const { store } = this.opts;
      const keyPrefixed = this._getKeyPrefixArray(keys);
      this.hooks.trigger("preDelete" /* PRE_DELETE */, { key: keyPrefixed });
      if (store.deleteMany !== void 0) {
        return await store.deleteMany(keyPrefixed);
      }
      const promises = keyPrefixed.map(async (key) => store.delete(key));
      const results = await Promise.all(promises);
      const returnResult = results.every(Boolean);
      this.hooks.trigger("postDelete" /* POST_DELETE */, {
        key: keyPrefixed,
        value: returnResult
      });
      return returnResult;
    } catch (error) {
      this.emit("error", error);
      if (this._throwOnErrors) {
        throw error;
      }
      return false;
    }
  }
  /**
   * Clear the store
   * @returns {void}
   */
  async clear() {
    this.emit("clear");
    const { store } = this.opts;
    try {
      await store.clear();
    } catch (error) {
      this.emit("error", error);
      if (this._throwOnErrors) {
        throw error;
      }
    }
  }
  async has(key) {
    if (Array.isArray(key)) {
      return this.hasMany(key);
    }
    const keyPrefixed = this._getKeyPrefix(key);
    const { store } = this.opts;
    if (store.has !== void 0 && !(store instanceof Map)) {
      return store.has(keyPrefixed);
    }
    let rawData;
    try {
      rawData = await store.get(keyPrefixed);
    } catch (error) {
      this.emit("error", error);
      if (this._throwOnErrors) {
        throw error;
      }
      return false;
    }
    if (rawData) {
      const data = await this.deserializeData(rawData);
      if (data) {
        if (data.expires === void 0 || data.expires === null) {
          return true;
        }
        return data.expires > Date.now();
      }
    }
    return false;
  }
  /**
   * Check if many keys exist
   * @param {string[]} keys the keys to check
   * @returns {boolean[]} will return an array of booleans if the keys exist
   */
  async hasMany(keys) {
    const keyPrefixed = this._getKeyPrefixArray(keys);
    const { store } = this.opts;
    if (store.hasMany !== void 0) {
      return store.hasMany(keyPrefixed);
    }
    const results = [];
    for (const key of keys) {
      results.push(await this.has(key));
    }
    return results;
  }
  /**
   * Will disconnect the store. This is only available if the store has a disconnect method
   * @returns {Promise<void>}
   */
  async disconnect() {
    const { store } = this.opts;
    this.emit("disconnect");
    if (typeof store.disconnect === "function") {
      return store.disconnect();
    }
  }
  // biome-ignore lint/suspicious/noExplicitAny: type format
  emit(event, ...arguments_) {
    if (event === "error" && !this.opts.emitErrors) {
      return;
    }
    super.emit(event, ...arguments_);
  }
  async serializeData(data) {
    if (!this._serialize) {
      return data;
    }
    if (this._compression?.compress) {
      return this._serialize({
        value: await this._compression.compress(data.value),
        expires: data.expires
      });
    }
    return this._serialize(data);
  }
  async deserializeData(data) {
    if (!this._deserialize) {
      return data;
    }
    if (this._compression?.decompress && typeof data === "string") {
      const result = await this._deserialize(data);
      return {
        value: await this._compression.decompress(result?.value),
        expires: result?.expires
      };
    }
    if (typeof data === "string") {
      return this._deserialize(data);
    }
    return void 0;
  }
};
var index_default = Keyv;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Keyv,
  KeyvHooks
});
/* v8 ignore next -- @preserve */
