// src/shorthand-time.ts
var shorthandToMilliseconds = (shorthand) => {
  let milliseconds;
  if (shorthand === void 0) {
    return void 0;
  }
  if (typeof shorthand === "number") {
    milliseconds = shorthand;
  } else {
    if (typeof shorthand !== "string") {
      return void 0;
    }
    shorthand = shorthand.trim();
    if (Number.isNaN(Number(shorthand))) {
      const match = /^([\d.]+)\s*(ms|s|m|h|hr|d)$/i.exec(shorthand);
      if (!match) {
        throw new Error(
          `Unsupported time format: "${shorthand}". Use 'ms', 's', 'm', 'h', 'hr', or 'd'.`
        );
      }
      const [, value, unit] = match;
      const numericValue = Number.parseFloat(value);
      const unitLower = unit.toLowerCase();
      switch (unitLower) {
        case "ms": {
          milliseconds = numericValue;
          break;
        }
        case "s": {
          milliseconds = numericValue * 1e3;
          break;
        }
        case "m": {
          milliseconds = numericValue * 1e3 * 60;
          break;
        }
        case "h": {
          milliseconds = numericValue * 1e3 * 60 * 60;
          break;
        }
        case "hr": {
          milliseconds = numericValue * 1e3 * 60 * 60;
          break;
        }
        case "d": {
          milliseconds = numericValue * 1e3 * 60 * 60 * 24;
          break;
        }
        /* v8 ignore next -- @preserve */
        default: {
          milliseconds = Number(shorthand);
        }
      }
    } else {
      milliseconds = Number(shorthand);
    }
  }
  return milliseconds;
};
var shorthandToTime = (shorthand, fromDate) => {
  fromDate ??= /* @__PURE__ */ new Date();
  const milliseconds = shorthandToMilliseconds(shorthand);
  if (milliseconds === void 0) {
    return fromDate.getTime();
  }
  return fromDate.getTime() + milliseconds;
};

// src/coalesce-async.ts
var callbacks = /* @__PURE__ */ new Map();
function hasKey(key) {
  return callbacks.has(key);
}
function addKey(key) {
  callbacks.set(key, []);
}
function removeKey(key) {
  callbacks.delete(key);
}
function addCallbackToKey(key, callback) {
  const stash = getCallbacksByKey(key);
  stash.push(callback);
  callbacks.set(key, stash);
}
function getCallbacksByKey(key) {
  return callbacks.get(key) ?? [];
}
async function enqueue(key) {
  return new Promise((resolve, reject) => {
    const callback = { resolve, reject };
    addCallbackToKey(key, callback);
  });
}
function dequeue(key) {
  const stash = getCallbacksByKey(key);
  removeKey(key);
  return stash;
}
function coalesce(options) {
  const { key, error, result } = options;
  for (const callback of dequeue(key)) {
    if (error) {
      callback.reject(error);
    } else {
      callback.resolve(result);
    }
  }
}
async function coalesceAsync(key, fnc) {
  if (!hasKey(key)) {
    addKey(key);
    try {
      const result = await Promise.resolve(fnc());
      coalesce({ key, result });
      return result;
    } catch (error) {
      coalesce({ key, error });
      throw error;
    }
  }
  return enqueue(key);
}

// src/hash.ts
import { Hashery } from "hashery";
var HashAlgorithm = /* @__PURE__ */ ((HashAlgorithm2) => {
  HashAlgorithm2["SHA256"] = "SHA-256";
  HashAlgorithm2["SHA384"] = "SHA-384";
  HashAlgorithm2["SHA512"] = "SHA-512";
  HashAlgorithm2["DJB2"] = "djb2";
  HashAlgorithm2["FNV1"] = "fnv1";
  HashAlgorithm2["MURMER"] = "murmer";
  HashAlgorithm2["CRC32"] = "crc32";
  return HashAlgorithm2;
})(HashAlgorithm || {});
async function hash(object, options = {
  algorithm: "SHA-256" /* SHA256 */,
  serialize: JSON.stringify
}) {
  const algorithm = options?.algorithm ?? "SHA-256" /* SHA256 */;
  const serialize = options?.serialize ?? JSON.stringify;
  const objectString = serialize(object);
  const hashery = new Hashery();
  return hashery.toHash(objectString, { algorithm });
}
function hashSync(object, options = {
  algorithm: "djb2" /* DJB2 */,
  serialize: JSON.stringify
}) {
  const algorithm = options?.algorithm ?? "djb2" /* DJB2 */;
  const serialize = options?.serialize ?? JSON.stringify;
  const objectString = serialize(object);
  const hashery = new Hashery();
  return hashery.toHashSync(objectString, { algorithm });
}
async function hashToNumber(object, options = {
  min: 0,
  max: 10,
  algorithm: "SHA-256" /* SHA256 */,
  serialize: JSON.stringify
}) {
  const min = options?.min ?? 0;
  const max = options?.max ?? 10;
  const algorithm = options?.algorithm ?? "SHA-256" /* SHA256 */;
  const serialize = options?.serialize ?? JSON.stringify;
  const hashLength = options?.hashLength ?? 16;
  if (min >= max) {
    throw new Error(
      `Invalid range: min (${min}) must be less than max (${max})`
    );
  }
  const objectString = serialize(object);
  const hashery = new Hashery();
  return hashery.toNumber(objectString, {
    algorithm,
    min,
    max,
    hashLength
  });
}
function hashToNumberSync(object, options = {
  min: 0,
  max: 10,
  algorithm: "djb2" /* DJB2 */,
  serialize: JSON.stringify
}) {
  const min = options?.min ?? 0;
  const max = options?.max ?? 10;
  const algorithm = options?.algorithm ?? "djb2" /* DJB2 */;
  const serialize = options?.serialize ?? JSON.stringify;
  const hashLength = options?.hashLength ?? 16;
  if (min >= max) {
    throw new Error(
      `Invalid range: min (${min}) must be less than max (${max})`
    );
  }
  const objectString = serialize(object);
  const hashery = new Hashery();
  return hashery.toNumberSync(objectString, {
    algorithm,
    min,
    max,
    hashLength
  });
}

// src/is-keyv-instance.ts
import { Keyv } from "keyv";
function isKeyvInstance(keyv) {
  if (keyv === null || keyv === void 0) {
    return false;
  }
  if (keyv instanceof Keyv) {
    return true;
  }
  const keyvMethods = [
    "generateIterator",
    "get",
    "getMany",
    "set",
    "setMany",
    "delete",
    "deleteMany",
    "has",
    "hasMany",
    "clear",
    "disconnect",
    "serialize",
    "deserialize"
  ];
  return keyvMethods.every((method) => typeof keyv[method] === "function");
}

// src/is-object.ts
function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

// src/less-than.ts
function lessThan(number1, number2) {
  return typeof number1 === "number" && typeof number2 === "number" ? number1 < number2 : false;
}

// src/memoize.ts
function wrapSync(function_, options) {
  const { ttl, keyPrefix, cache, serialize } = options;
  return (...arguments_) => {
    let cacheKey = createWrapKey(function_, arguments_, {
      keyPrefix,
      serialize
    });
    if (options.createKey) {
      cacheKey = options.createKey(function_, arguments_, options);
    }
    let value = cache.get(cacheKey);
    if (value === void 0) {
      try {
        value = function_(...arguments_);
        cache.set(cacheKey, value, ttl);
      } catch (error) {
        cache.emit("error", error);
        if (options.cacheErrors) {
          cache.set(cacheKey, error, ttl);
        }
      }
    }
    return value;
  };
}
async function getOrSet(key, function_, options) {
  const keyString = typeof key === "function" ? key(options) : key;
  let value;
  try {
    value = await options.cache.get(keyString);
  } catch (error) {
    options.cache.emit("error", error);
    if (options.throwErrors === true || options.throwErrors === "store") {
      throw error;
    }
  }
  if (value === void 0) {
    const cacheId = options.cacheId ?? "default";
    const coalesceKey = `${cacheId}::${keyString}`;
    value = await coalesceAsync(coalesceKey, async () => {
      let result;
      try {
        try {
          result = await function_();
        } catch (error) {
          throw new ErrorEnvelope(
            error,
            "function"
          );
        }
        try {
          await options.cache.set(keyString, result, options.ttl);
        } catch (error) {
          throw new ErrorEnvelope(error, "store");
        }
        return result;
      } catch (caught) {
        const errorType = caught instanceof ErrorEnvelope ? caught.context : (
          /* c8 ignore next 1 */
          void 0
        );
        const error = caught instanceof ErrorEnvelope ? caught.error : caught;
        options.cache.emit("error", error);
        if (options.cacheErrors) {
          await options.cache.set(keyString, error, options.ttl);
        }
        if (options.throwErrors === true || options.throwErrors === errorType) {
          throw error;
        }
      }
      return result;
    });
  }
  return value;
}
function wrap(function_, options) {
  const { keyPrefix, serialize } = options;
  return async (...arguments_) => {
    let cacheKey = createWrapKey(function_, arguments_, {
      keyPrefix,
      serialize
    });
    if (options.createKey) {
      cacheKey = options.createKey(function_, arguments_, options);
    }
    return getOrSet(
      cacheKey,
      async () => function_(...arguments_),
      options
    );
  };
}
function createWrapKey(function_, arguments_, options) {
  const { keyPrefix, serialize } = options || {};
  if (!keyPrefix) {
    return `${function_.name}::${hashSync(arguments_, { serialize })}`;
  }
  return `${keyPrefix}::${function_.name}::${hashSync(arguments_, { serialize })}`;
}
var ErrorEnvelope = class {
  constructor(error, context) {
    this.error = error;
    this.context = context;
  }
};

// src/run-if-fn.ts
function runIfFn(valueOrFunction, ...arguments_) {
  return typeof valueOrFunction === "function" ? valueOrFunction(...arguments_) : valueOrFunction;
}

// src/sleep.ts
var sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// src/stats.ts
var Stats = class {
  _hits = 0;
  _misses = 0;
  _gets = 0;
  _sets = 0;
  _deletes = 0;
  _clears = 0;
  _vsize = 0;
  _ksize = 0;
  _count = 0;
  _enabled = false;
  constructor(options) {
    if (options?.enabled) {
      this._enabled = options.enabled;
    }
  }
  /**
   * @returns {boolean} - Whether the stats are enabled
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * @param {boolean} enabled - Whether to enable the stats
   */
  set enabled(enabled) {
    this._enabled = enabled;
  }
  /**
   * @returns {number} - The number of hits
   * @readonly
   */
  get hits() {
    return this._hits;
  }
  /**
   * @returns {number} - The number of misses
   * @readonly
   */
  get misses() {
    return this._misses;
  }
  /**
   * @returns {number} - The number of gets
   * @readonly
   */
  get gets() {
    return this._gets;
  }
  /**
   * @returns {number} - The number of sets
   * @readonly
   */
  get sets() {
    return this._sets;
  }
  /**
   * @returns {number} - The number of deletes
   * @readonly
   */
  get deletes() {
    return this._deletes;
  }
  /**
   * @returns {number} - The number of clears
   * @readonly
   */
  get clears() {
    return this._clears;
  }
  /**
   * @returns {number} - The vsize (value size) of the cache instance
   * @readonly
   */
  get vsize() {
    return this._vsize;
  }
  /**
   * @returns {number} - The ksize (key size) of the cache instance
   * @readonly
   */
  get ksize() {
    return this._ksize;
  }
  /**
   * @returns {number} - The count of the cache instance
   * @readonly
   */
  get count() {
    return this._count;
  }
  incrementHits() {
    if (!this._enabled) {
      return;
    }
    this._hits++;
  }
  incrementMisses() {
    if (!this._enabled) {
      return;
    }
    this._misses++;
  }
  incrementGets() {
    if (!this._enabled) {
      return;
    }
    this._gets++;
  }
  incrementSets() {
    if (!this._enabled) {
      return;
    }
    this._sets++;
  }
  incrementDeletes() {
    if (!this._enabled) {
      return;
    }
    this._deletes++;
  }
  incrementClears() {
    if (!this._enabled) {
      return;
    }
    this._clears++;
  }
  incrementVSize(value) {
    if (!this._enabled) {
      return;
    }
    this._vsize += this.roughSizeOfObject(value);
  }
  decreaseVSize(value) {
    if (!this._enabled) {
      return;
    }
    this._vsize -= this.roughSizeOfObject(value);
  }
  incrementKSize(key) {
    if (!this._enabled) {
      return;
    }
    this._ksize += this.roughSizeOfString(key);
  }
  decreaseKSize(key) {
    if (!this._enabled) {
      return;
    }
    this._ksize -= this.roughSizeOfString(key);
  }
  incrementCount() {
    if (!this._enabled) {
      return;
    }
    this._count++;
  }
  decreaseCount() {
    if (!this._enabled) {
      return;
    }
    this._count--;
  }
  setCount(count) {
    if (!this._enabled) {
      return;
    }
    this._count = count;
  }
  roughSizeOfString(value) {
    return value.length * 2;
  }
  roughSizeOfObject(object) {
    const objectList = [];
    const stack = [object];
    let bytes = 0;
    while (stack.length > 0) {
      const value = stack.pop();
      if (typeof value === "boolean") {
        bytes += 4;
      } else if (typeof value === "string") {
        bytes += value.length * 2;
      } else if (typeof value === "number") {
        bytes += 8;
      } else {
        if (value === null || value === void 0) {
          bytes += 4;
          continue;
        }
        if (objectList.includes(value)) {
          continue;
        }
        objectList.push(value);
        for (const key in value) {
          bytes += key.length * 2;
          stack.push(value[key]);
        }
      }
    }
    return bytes;
  }
  reset() {
    this._hits = 0;
    this._misses = 0;
    this._gets = 0;
    this._sets = 0;
    this._deletes = 0;
    this._clears = 0;
    this._vsize = 0;
    this._ksize = 0;
    this._count = 0;
  }
  resetStoreValues() {
    this._vsize = 0;
    this._ksize = 0;
    this._count = 0;
  }
};

// src/ttl.ts
function getTtlFromExpires(expires) {
  if (expires === void 0 || expires === null) {
    return void 0;
  }
  const now = Date.now();
  if (expires < now) {
    return void 0;
  }
  return expires - now;
}
function getCascadingTtl(cacheableTtl, primaryTtl, secondaryTtl) {
  return secondaryTtl ?? primaryTtl ?? shorthandToMilliseconds(cacheableTtl);
}
function calculateTtlFromExpiration(ttl, expires) {
  const ttlFromExpires = getTtlFromExpires(expires);
  const expiresFromTtl = ttl ? Date.now() + ttl : void 0;
  if (ttlFromExpires === void 0) {
    return ttl;
  }
  if (expiresFromTtl === void 0) {
    return ttlFromExpires;
  }
  if (expires && expires > expiresFromTtl) {
    return ttl;
  }
  return ttlFromExpires;
}
export {
  HashAlgorithm,
  Stats,
  calculateTtlFromExpiration,
  coalesceAsync,
  createWrapKey,
  getCascadingTtl,
  getOrSet,
  getTtlFromExpires,
  hash,
  hashSync,
  hashToNumber,
  hashToNumberSync,
  isKeyvInstance,
  isObject,
  lessThan,
  runIfFn,
  shorthandToMilliseconds,
  shorthandToTime,
  sleep,
  wrap,
  wrapSync
};
/* v8 ignore next -- @preserve */
