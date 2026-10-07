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
  CRC: () => CRC,
  Cache: () => Cache,
  DJB2: () => DJB2,
  FNV1: () => FNV1,
  HashProviders: () => HashProviders,
  Hashery: () => Hashery,
  Murmur: () => Murmur,
  WebCrypto: () => WebCrypto
});
module.exports = __toCommonJS(index_exports);
var import_hookified = require("hookified");

// src/cache.ts
var Cache = class {
  _enabled = true;
  _maxSize = 4e3;
  _store = /* @__PURE__ */ new Map();
  _keys = [];
  constructor(options) {
    if (options?.enabled !== void 0) {
      this._enabled = options.enabled;
    }
    if (options?.maxSize !== void 0) {
      this._maxSize = options.maxSize;
    }
  }
  /**
   * Gets whether the cache is enabled.
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Sets whether the cache is enabled.
   */
  set enabled(value) {
    this._enabled = value;
  }
  /**
   * Gets the maximum number of items the cache can hold.
   */
  get maxSize() {
    return this._maxSize;
  }
  /**
   * Sets the maximum number of items the cache can hold.
   */
  set maxSize(value) {
    this._maxSize = value;
  }
  /**
   * Gets the underlying Map store.
   */
  get store() {
    return this._store;
  }
  /**
   * Gets the current number of items in the cache.
   */
  get size() {
    return this._store.size;
  }
  /**
   * Gets a value from the cache.
   * @param key - The cache key
   * @returns The cached value, or undefined if not found
   */
  get(key) {
    return this._store.get(key);
  }
  /**
   * Sets a value in the cache with FIFO eviction.
   * If the cache is disabled, this method does nothing.
   * If the cache is at capacity, the oldest entry is removed before adding the new one.
   * @param key - The cache key
   * @param value - The value to cache
   */
  set(key, value) {
    if (!this._enabled) {
      return;
    }
    if (this._store.has(key)) {
      this._store.set(key, value);
      return;
    }
    if (this._store.size >= this._maxSize) {
      const oldestKey = this._keys.shift();
      if (oldestKey) {
        this._store.delete(oldestKey);
      }
    }
    this._keys.push(key);
    this._store.set(key, value);
  }
  /**
   * Checks if a key exists in the cache.
   * @param key - The cache key
   * @returns True if the key exists, false otherwise
   */
  has(key) {
    return this._store.has(key);
  }
  /**
   * Clears all entries from the cache.
   */
  clear() {
    this._store.clear();
    this._keys = [];
  }
};

// src/providers/crc.ts
var CRC = class {
  get name() {
    return "crc32";
  }
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    const CRC32_POLYNOMIAL = 3988292384;
    let crc = 4294967295;
    for (let i = 0; i < bytes.length; i++) {
      crc = crc ^ bytes[i];
      for (let j = 0; j < 8; j++) {
        crc = crc >>> 1 ^ CRC32_POLYNOMIAL & -(crc & 1);
      }
    }
    crc = (crc ^ 4294967295) >>> 0;
    const hashHex = crc.toString(16).padStart(8, "0");
    return hashHex;
  }
  async toHash(data) {
    return this.toHashSync(data);
  }
};

// src/providers/crypto.ts
var WebCrypto = class {
  _algorithm = "SHA-256";
  constructor(options) {
    if (options?.algorithm) {
      this._algorithm = options?.algorithm;
    }
  }
  get name() {
    return this._algorithm;
  }
  async toHash(data) {
    const hashBuffer = await crypto.subtle.digest(this._algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }
};

// src/providers/djb2.ts
var DJB2 = class {
  /**
   * The name identifier for this hash provider.
   */
  get name() {
    return "djb2";
  }
  /**
   * Computes the DJB2 hash of the provided data synchronously.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns An 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const djb2 = new DJB2();
   * const data = new TextEncoder().encode('hello');
   * const hash = djb2.toHashSync(data);
   * console.log(hash); // "7c9df5ea"
   * ```
   */
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    let hash = 5381;
    for (let i = 0; i < bytes.length; i++) {
      hash = (hash << 5) + hash + bytes[i];
      hash = hash >>> 0;
    }
    const hashHex = hash.toString(16).padStart(8, "0");
    return hashHex;
  }
  /**
   * Computes the DJB2 hash of the provided data.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns A Promise resolving to an 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const djb2 = new DJB2();
   * const data = new TextEncoder().encode('hello');
   * const hash = await djb2.toHash(data);
   * console.log(hash); // "7c9df5ea"
   * ```
   */
  async toHash(data) {
    return this.toHashSync(data);
  }
};

// src/providers/fnv1.ts
var FNV1 = class {
  /**
   * The name identifier for this hash provider.
   */
  get name() {
    return "fnv1";
  }
  /**
   * Computes the FNV-1 hash of the provided data synchronously.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns An 8-character lowercase hexadecimal string
   */
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    const FNV_OFFSET_BASIS = 2166136261;
    const FNV_PRIME = 16777619;
    let hash = FNV_OFFSET_BASIS;
    for (let i = 0; i < bytes.length; i++) {
      hash = hash * FNV_PRIME;
      hash = hash ^ bytes[i];
      hash = hash >>> 0;
    }
    const hashHex = hash.toString(16).padStart(8, "0");
    return hashHex;
  }
  /**
   * Computes the FNV-1 hash of the provided data.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns A Promise resolving to an 8-character lowercase hexadecimal string
   */
  async toHash(data) {
    return this.toHashSync(data);
  }
};

// src/providers/murmur.ts
var Murmur = class {
  _seed;
  /**
   * Creates a new Murmur instance.
   *
   * @param seed - Optional seed value for the hash (default: 0)
   */
  constructor(seed = 0) {
    this._seed = seed >>> 0;
  }
  /**
   * The name identifier for this hash provider.
   */
  get name() {
    return "murmur";
  }
  /**
   * Gets the current seed value used for hashing.
   */
  get seed() {
    return this._seed;
  }
  /**
   * Computes the Murmur 32-bit hash of the provided data synchronously.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns An 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const murmur = new Murmur();
   * const data = new TextEncoder().encode('hello');
   * const hash = murmur.toHashSync(data);
   * console.log(hash); // "248bfa47"
   * ```
   */
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    const c1 = 3432918353;
    const c2 = 461845907;
    const length = bytes.length;
    const nblocks = Math.floor(length / 4);
    let h1 = this._seed;
    for (let i = 0; i < nblocks; i++) {
      const index = i * 4;
      let k12 = bytes[index] & 255 | (bytes[index + 1] & 255) << 8 | (bytes[index + 2] & 255) << 16 | (bytes[index + 3] & 255) << 24;
      k12 = this._imul(k12, c1);
      k12 = this._rotl32(k12, 15);
      k12 = this._imul(k12, c2);
      h1 ^= k12;
      h1 = this._rotl32(h1, 13);
      h1 = this._imul(h1, 5) + 3864292196;
    }
    const tail = nblocks * 4;
    let k1 = 0;
    switch (length & 3) {
      case 3:
        k1 ^= (bytes[tail + 2] & 255) << 16;
      // fallthrough
      case 2:
        k1 ^= (bytes[tail + 1] & 255) << 8;
      // fallthrough
      case 1:
        k1 ^= bytes[tail] & 255;
        k1 = this._imul(k1, c1);
        k1 = this._rotl32(k1, 15);
        k1 = this._imul(k1, c2);
        h1 ^= k1;
    }
    h1 ^= length;
    h1 ^= h1 >>> 16;
    h1 = this._imul(h1, 2246822507);
    h1 ^= h1 >>> 13;
    h1 = this._imul(h1, 3266489909);
    h1 ^= h1 >>> 16;
    h1 = h1 >>> 0;
    const hashHex = h1.toString(16).padStart(8, "0");
    return hashHex;
  }
  /**
   * Computes the Murmur 32-bit hash of the provided data.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns A Promise resolving to an 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const murmur = new Murmur();
   * const data = new TextEncoder().encode('hello');
   * const hash = await murmur.toHash(data);
   * console.log(hash); // "248bfa47"
   * ```
   */
  async toHash(data) {
    return this.toHashSync(data);
  }
  /**
   * 32-bit integer multiplication with proper overflow handling.
   * @private
   */
  _imul(a, b) {
    if (Math.imul) {
      return Math.imul(a, b);
    }
    const ah = a >>> 16 & 65535;
    const al = a & 65535;
    const bh = b >>> 16 & 65535;
    const bl = b & 65535;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  }
  /**
   * Left rotate a 32-bit integer.
   * @private
   */
  _rotl32(x, r) {
    return x << r | x >>> 32 - r;
  }
};

// src/providers.ts
var HashProviders = class {
  _providers = /* @__PURE__ */ new Map();
  _getFuzzy = true;
  /**
   * Creates a new HashProviders instance.
   * @param options - Optional configuration including initial providers to load
   * @example
   * ```ts
   * const providers = new HashProviders({
   *   providers: [{ name: 'custom', toHash: async (data) => '...' }]
   * });
   * ```
   */
  constructor(options) {
    if (options?.providers) {
      this.loadProviders(options?.providers);
    }
    if (options?.getFuzzy !== void 0) {
      this._getFuzzy = Boolean(options?.getFuzzy);
    }
  }
  /**
   * Loads multiple hash providers at once.
   * Each provider is added to the internal map using its name as the key.
   * @param providers - Array of HashProvider objects to load
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.loadProviders([
   *   { name: 'md5', toHash: async (data) => '...' },
   *   { name: 'sha1', toHash: async (data) => '...' }
   * ]);
   * ```
   */
  loadProviders(providers) {
    for (const provider of providers) {
      this._providers.set(provider.name, provider);
    }
  }
  /**
   * Gets the internal Map of all registered hash providers.
   * @returns Map of provider names to HashProvider objects
   */
  get providers() {
    return this._providers;
  }
  /**
   * Sets the internal Map of hash providers, replacing all existing providers.
   * @param providers - Map of provider names to HashProvider objects
   */
  set providers(providers) {
    this._providers = providers;
  }
  /**
   * Gets an array of all provider names.
   * @returns Array of provider names
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({ name: 'sha256', toHash: async (data) => '...' });
   * providers.add({ name: 'md5', toHash: async (data) => '...' });
   * console.log(providers.names); // ['sha256', 'md5']
   * ```
   */
  get names() {
    return Array.from(this._providers.keys());
  }
  /**
   * Gets a hash provider by name with optional fuzzy matching.
   *
   * Fuzzy matching (enabled by default) attempts to find providers by:
   * 1. Exact match (after trimming whitespace)
   * 2. Case-insensitive match (lowercase)
   * 3. Dash-removed match (e.g., "SHA-256" matches "sha256")
   *
   * @param name - The name of the provider to retrieve
   * @param options - Optional configuration for the get operation
   * @param options.fuzzy - Enable/disable fuzzy matching (overrides constructor setting)
   * @returns The HashProvider if found, undefined otherwise
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({ name: 'sha256', toHash: async (data) => '...' });
   *
   * // Exact match
   * const provider = providers.get('sha256');
   *
   * // Fuzzy match (case-insensitive)
   * const provider2 = providers.get('SHA256');
   *
   * // Fuzzy match (with dash)
   * const provider3 = providers.get('SHA-256');
   *
   * // Disable fuzzy matching
   * const provider4 = providers.get('SHA256', { fuzzy: false }); // returns undefined
   * ```
   */
  get(name, options) {
    const getFuzzy = options?.fuzzy ?? this._getFuzzy;
    name = name.trim();
    let result = this._providers.get(name);
    if (result === void 0 && getFuzzy === true) {
      name = name.toLowerCase();
      result = this._providers.get(name);
    }
    if (result === void 0 && getFuzzy === true) {
      name = name.replaceAll("-", "");
      result = this._providers.get(name);
    }
    return result;
  }
  /**
   * Adds a single hash provider to the collection.
   * If a provider with the same name already exists, it will be replaced.
   * @param provider - The HashProvider object to add
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({
   *   name: 'custom-hash',
   *   toHash: async (data) => {
   *     // Custom hashing logic
   *     return 'hash-result';
   *   }
   * });
   * ```
   */
  add(provider) {
    this._providers.set(provider.name, provider);
  }
  /**
   * Removes a hash provider from the collection by name.
   * @param name - The name of the provider to remove
   * @returns true if the provider was found and removed, false otherwise
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({ name: 'custom', toHash: async (data) => '...' });
   * const removed = providers.remove('custom'); // returns true
   * const removed2 = providers.remove('nonexistent'); // returns false
   * ```
   */
  remove(name) {
    return this._providers.delete(name);
  }
};

// src/index.ts
var Hashery = class extends import_hookified.Hookified {
  _parse = JSON.parse;
  _stringify = JSON.stringify;
  _providers = new HashProviders();
  _defaultAlgorithm = "SHA-256";
  _defaultAlgorithmSync = "djb2";
  _cache;
  constructor(options) {
    super(options);
    if (options?.parse) {
      this._parse = options.parse;
    }
    if (options?.stringify) {
      this._stringify = options.stringify;
    }
    if (options?.defaultAlgorithm) {
      this._defaultAlgorithm = options.defaultAlgorithm;
    }
    if (options?.defaultAlgorithmSync) {
      this._defaultAlgorithmSync = options.defaultAlgorithmSync;
    }
    this._cache = new Cache(options?.cache);
    this.loadProviders(options?.providers, {
      includeBase: options?.includeBase ?? true
    });
  }
  /**
   * Gets the parse function used to deserialize stored values.
   * @returns The current parse function (defaults to JSON.parse)
   */
  get parse() {
    return this._parse;
  }
  /**
   * Sets the parse function used to deserialize stored values.
   * @param value - The parse function to use for deserialization
   */
  set parse(value) {
    this._parse = value;
  }
  /**
   * Gets the stringify function used to serialize values for storage.
   * @returns The current stringify function (defaults to JSON.stringify)
   */
  get stringify() {
    return this._stringify;
  }
  /**
   * Sets the stringify function used to serialize values for storage.
   * @param value - The stringify function to use for serialization
   */
  set stringify(value) {
    this._stringify = value;
  }
  /**
   * Gets the HashProviders instance used to manage hash providers.
   * @returns The current HashProviders instance
   */
  get providers() {
    return this._providers;
  }
  /**
   * Sets the HashProviders instance used to manage hash providers.
   * @param value - The HashProviders instance to use
   */
  set providers(value) {
    this._providers = value;
  }
  /**
   * Gets the names of all registered hash algorithm providers.
   * @returns An array of provider names (e.g., ['SHA-256', 'SHA-384', 'SHA-512'])
   */
  get names() {
    return this._providers.names;
  }
  /**
   * Gets the default hash algorithm used when none is specified.
   * @returns The current default algorithm (defaults to 'SHA-256')
   */
  get defaultAlgorithm() {
    return this._defaultAlgorithm;
  }
  /**
   * Sets the default hash algorithm to use when none is specified.
   * @param value - The default algorithm to use (e.g., 'SHA-256', 'SHA-512', 'djb2')
   * @example
   * ```ts
   * const hashery = new Hashery();
   * hashery.defaultAlgorithm = 'SHA-512';
   *
   * // Now toHash will use SHA-512 by default
   * const hash = await hashery.toHash({ data: 'example' });
   * ```
   */
  set defaultAlgorithm(value) {
    this._defaultAlgorithm = value;
  }
  /**
   * Gets the default synchronous hash algorithm used when none is specified.
   * @returns The current default synchronous algorithm (defaults to 'djb2')
   */
  get defaultAlgorithmSync() {
    return this._defaultAlgorithmSync;
  }
  /**
   * Sets the default synchronous hash algorithm to use when none is specified.
   * @param value - The default synchronous algorithm to use (e.g., 'djb2', 'fnv1', 'murmur', 'crc32')
   * @example
   * ```ts
   * const hashery = new Hashery();
   * hashery.defaultAlgorithmSync = 'fnv1';
   *
   * // Now synchronous operations will use fnv1 by default
   * ```
   */
  set defaultAlgorithmSync(value) {
    this._defaultAlgorithmSync = value;
  }
  /**
   * Gets the cache instance used to store computed hash values.
   * @returns The Cache instance
   * @example
   * ```ts
   * const hashery = new Hashery({ cache: { enabled: true } });
   *
   * // Access the cache
   * hashery.cache.enabled; // true
   * hashery.cache.size; // number of cached items
   * hashery.cache.clear(); // clear all cached items
   * ```
   */
  get cache() {
    return this._cache;
  }
  /**
   * Generates a cryptographic hash of the provided data using the Web Crypto API.
   * The data is first stringified using the configured stringify function, then hashed.
   *
   * If an invalid algorithm is provided, a 'warn' event is emitted and the method falls back
   * to the default algorithm. You can listen to these warnings:
   * ```ts
   * hashery.on('warn', (message) => console.log(message));
   * ```
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Optional configuration object
   * @param options.algorithm - The hash algorithm to use (defaults to 'SHA-256')
   * @param options.maxLength - Optional maximum length for the hash output
   * @returns A Promise that resolves to the hexadecimal string representation of the hash
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const hash = await hashery.toHash({ name: 'John', age: 30 });
   * console.log(hash); // "a1b2c3d4..."
   *
   * // Using a different algorithm
   * const hash512 = await hashery.toHash({ name: 'John' }, { algorithm: 'SHA-512' });
   * ```
   */
  async toHash(data, options) {
    const context = {
      data,
      algorithm: options?.algorithm ?? this._defaultAlgorithm,
      maxLength: options?.maxLength
    };
    await this.beforeHook("toHash", context);
    const stringified = this._stringify(context.data);
    const cacheKey = `${context.algorithm}:${stringified}`;
    if (this._cache.enabled) {
      const cached = this._cache.get(cacheKey);
      if (cached !== void 0) {
        let cachedHash = cached;
        if (options?.maxLength && cachedHash.length > options.maxLength) {
          cachedHash = cachedHash.substring(0, options.maxLength);
        }
        const result2 = {
          hash: cachedHash,
          data: context.data,
          algorithm: context.algorithm
        };
        await this.afterHook("toHash", result2);
        return result2.hash;
      }
    }
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(stringified);
    let provider = this._providers.get(context.algorithm);
    if (!provider) {
      this.emit(
        "warn",
        `Invalid algorithm '${context.algorithm}' not found. Falling back to default algorithm '${this._defaultAlgorithm}'.`
      );
      provider = new WebCrypto({
        algorithm: this._defaultAlgorithm
      });
    }
    let hash = await provider.toHash(dataBuffer);
    if (this._cache.enabled) {
      this._cache.set(cacheKey, hash);
    }
    if (options?.maxLength && hash.length > options?.maxLength) {
      hash = hash.substring(0, options.maxLength);
    }
    const result = { hash, data: context.data, algorithm: context.algorithm };
    await this.afterHook("toHash", result);
    return result.hash;
  }
  /**
   * Generates a deterministic number within a specified range based on the hash of the provided data.
   * This method uses the toHash function to create a consistent hash, then maps it to a number
   * between min and max (inclusive).
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Configuration options (optional, defaults to min: 0, max: 100)
   * @param options.min - The minimum value of the range (inclusive, defaults to 0)
   * @param options.max - The maximum value of the range (inclusive, defaults to 100)
   * @param options.algorithm - The hash algorithm to use (defaults to 'SHA-256')
   * @param options.hashLength - Number of characters from hash to use for conversion (defaults to 16)
   * @returns A Promise that resolves to a number between min and max (inclusive)
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const num = await hashery.toNumber({ user: 'john' }); // Uses default min: 0, max: 100
   * console.log(num); // Always returns the same number for the same input, e.g., 42
   *
   * // Using custom range
   * const num2 = await hashery.toNumber({ user: 'john' }, { min: 1, max: 100 });
   *
   * // Using a different algorithm
   * const num512 = await hashery.toNumber({ user: 'john' }, { min: 0, max: 255, algorithm: 'SHA-512' });
   * ```
   */
  async toNumber(data, options = {}) {
    const {
      min = 0,
      max = 100,
      algorithm = this._defaultAlgorithm,
      hashLength = 16
    } = options;
    if (min > max) {
      throw new Error("min cannot be greater than max");
    }
    const hash = await this.toHash(data, { algorithm, maxLength: hashLength });
    const hashNumber = Number.parseInt(hash, 16);
    const range = max - min + 1;
    const mapped = min + hashNumber % range;
    return mapped;
  }
  /**
   * Generates a hash of the provided data synchronously using a non-cryptographic hash algorithm.
   * The data is first stringified using the configured stringify function, then hashed.
   *
   * Note: This method only works with synchronous hash providers (djb2, fnv1, murmur, crc32).
   * WebCrypto algorithms (SHA-256, SHA-384, SHA-512) are not supported and will throw an error.
   *
   * If an invalid algorithm is provided, a 'warn' event is emitted and the method falls back
   * to the default synchronous algorithm. You can listen to these warnings:
   * ```ts
   * hashery.on('warn', (message) => console.log(message));
   * ```
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Optional configuration object
   * @param options.algorithm - The hash algorithm to use (defaults to 'djb2')
   * @param options.maxLength - Optional maximum length for the hash output
   * @returns The hexadecimal string representation of the hash
   *
   * @throws {Error} If the specified algorithm does not support synchronous hashing
   * @throws {Error} If the default algorithm is not found
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const hash = hashery.toHashSync({ name: 'John', age: 30 });
   * console.log(hash); // "7c9df5ea..." (djb2 hash)
   *
   * // Using a different algorithm
   * const hashFnv1 = hashery.toHashSync({ name: 'John' }, { algorithm: 'fnv1' });
   * ```
   */
  toHashSync(data, options) {
    const context = {
      data,
      algorithm: options?.algorithm ?? this._defaultAlgorithmSync,
      maxLength: options?.maxLength
    };
    this.hookSync("before:toHashSync", context);
    const algorithm = context.algorithm;
    const stringified = this._stringify(context.data);
    const cacheKey = `${algorithm}:${stringified}`;
    if (this._cache.enabled) {
      const cached = this._cache.get(cacheKey);
      if (cached !== void 0) {
        let cachedHash = cached;
        if (options?.maxLength && cachedHash.length > options.maxLength) {
          cachedHash = cachedHash.substring(0, options.maxLength);
        }
        const result2 = {
          hash: cachedHash,
          data: context.data,
          algorithm
        };
        this.hookSync("after:toHashSync", result2);
        return result2.hash;
      }
    }
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(stringified);
    let provider = this._providers.get(algorithm);
    if (!provider) {
      this.emit(
        "warn",
        `Invalid algorithm '${algorithm}' not found. Falling back to default algorithm '${this._defaultAlgorithmSync}'.`
      );
      provider = this._providers.get(this._defaultAlgorithmSync);
      if (!provider) {
        throw new Error(
          `Hash provider '${this._defaultAlgorithmSync}' (default) not found`
        );
      }
    }
    if (!provider.toHashSync) {
      throw new Error(
        `Hash provider '${algorithm}' does not support synchronous hashing. Use toHash() instead or choose a different algorithm (djb2, fnv1, murmur, crc32).`
      );
    }
    let hash = provider.toHashSync(dataBuffer);
    if (this._cache.enabled) {
      this._cache.set(cacheKey, hash);
    }
    if (options?.maxLength && hash.length > options?.maxLength) {
      hash = hash.substring(0, options.maxLength);
    }
    const result = { hash, data: context.data, algorithm: context.algorithm };
    this.hookSync("after:toHashSync", result);
    return result.hash;
  }
  /**
   * Generates a deterministic number within a specified range based on the hash of the provided data synchronously.
   * This method uses the toHashSync function to create a consistent hash, then maps it to a number
   * between min and max (inclusive).
   *
   * Note: This method only works with synchronous hash providers (djb2, fnv1, murmur, crc32).
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Configuration options (optional, defaults to min: 0, max: 100)
   * @param options.min - The minimum value of the range (inclusive, defaults to 0)
   * @param options.max - The maximum value of the range (inclusive, defaults to 100)
   * @param options.algorithm - The hash algorithm to use (defaults to 'djb2')
   * @param options.hashLength - Number of characters from hash to use for conversion (defaults to 16)
   * @returns A number between min and max (inclusive)
   *
   * @throws {Error} If the specified algorithm does not support synchronous hashing
   * @throws {Error} If min is greater than max
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const num = hashery.toNumberSync({ user: 'john' }); // Uses default min: 0, max: 100
   * console.log(num); // Always returns the same number for the same input, e.g., 42
   *
   * // Using custom range
   * const num2 = hashery.toNumberSync({ user: 'john' }, { min: 1, max: 100 });
   *
   * // Using a different algorithm
   * const numFnv1 = hashery.toNumberSync({ user: 'john' }, { min: 0, max: 255, algorithm: 'fnv1' });
   * ```
   */
  toNumberSync(data, options = {}) {
    const {
      min = 0,
      max = 100,
      algorithm = this._defaultAlgorithmSync,
      hashLength = 16
    } = options;
    if (min > max) {
      throw new Error("min cannot be greater than max");
    }
    const hash = this.toHashSync(data, { algorithm, maxLength: hashLength });
    const hashNumber = Number.parseInt(hash, 16);
    const range = max - min + 1;
    const mapped = min + hashNumber % range;
    return mapped;
  }
  loadProviders(providers, options = { includeBase: true }) {
    if (providers) {
      for (const provider of providers) {
        this._providers.add(provider);
      }
    }
    if (options.includeBase) {
      this.providers.add(new WebCrypto({ algorithm: "SHA-256" }));
      this.providers.add(new WebCrypto({ algorithm: "SHA-384" }));
      this.providers.add(new WebCrypto({ algorithm: "SHA-512" }));
      this.providers.add(new CRC());
      this.providers.add(new DJB2());
      this.providers.add(new FNV1());
      this.providers.add(new Murmur());
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CRC,
  Cache,
  DJB2,
  FNV1,
  HashProviders,
  Hashery,
  Murmur,
  WebCrypto
});
/* v8 ignore next -- @preserve */
