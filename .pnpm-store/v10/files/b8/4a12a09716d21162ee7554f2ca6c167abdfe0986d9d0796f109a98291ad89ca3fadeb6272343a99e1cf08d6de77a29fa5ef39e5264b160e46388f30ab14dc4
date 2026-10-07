// src/index.ts
import fs from "fs";
import path from "path";
import { CacheableMemory } from "cacheable";
import { parse, stringify } from "flatted";
import { Hookified } from "hookified";
var FlatCacheEvents = /* @__PURE__ */ ((FlatCacheEvents2) => {
  FlatCacheEvents2["SAVE"] = "save";
  FlatCacheEvents2["LOAD"] = "load";
  FlatCacheEvents2["DELETE"] = "delete";
  FlatCacheEvents2["CLEAR"] = "clear";
  FlatCacheEvents2["DESTROY"] = "destroy";
  FlatCacheEvents2["ERROR"] = "error";
  FlatCacheEvents2["EXPIRED"] = "expired";
  return FlatCacheEvents2;
})(FlatCacheEvents || {});
var FlatCache = class extends Hookified {
  _cache = new CacheableMemory();
  _cacheDir = ".cache";
  _cacheId = "cache1";
  _persistInterval = 0;
  _persistTimer;
  _changesSinceLastSave = false;
  _parse = parse;
  _stringify = stringify;
  constructor(options) {
    super();
    if (options) {
      this._cache = new CacheableMemory({
        ttl: options.ttl,
        useClone: options.useClone,
        lruSize: options.lruSize,
        checkInterval: options.expirationInterval
      });
    }
    if (options?.cacheDir) {
      this._cacheDir = options.cacheDir;
    }
    if (options?.cacheId) {
      this._cacheId = options.cacheId;
    }
    if (options?.persistInterval) {
      this._persistInterval = options.persistInterval;
      this.startAutoPersist();
    }
    if (options?.deserialize) {
      this._parse = options.deserialize;
    }
    if (options?.serialize) {
      this._stringify = options.serialize;
    }
  }
  /**
   * The cache object
   * @property cache
   * @type {CacheableMemory}
   */
  get cache() {
    return this._cache;
  }
  /**
   * The cache directory
   * @property cacheDir
   * @type {String}
   * @default '.cache'
   */
  get cacheDir() {
    return this._cacheDir;
  }
  /**
   * Set the cache directory
   * @property cacheDir
   * @type {String}
   * @default '.cache'
   */
  set cacheDir(value) {
    this._cacheDir = value;
  }
  /**
   * The cache id
   * @property cacheId
   * @type {String}
   * @default 'cache1'
   */
  get cacheId() {
    return this._cacheId;
  }
  /**
   * Set the cache id
   * @property cacheId
   * @type {String}
   * @default 'cache1'
   */
  set cacheId(value) {
    this._cacheId = value;
  }
  /**
   * The flag to indicate if there are changes since the last save
   * @property changesSinceLastSave
   * @type {Boolean}
   * @default false
   */
  get changesSinceLastSave() {
    return this._changesSinceLastSave;
  }
  /**
   * The interval to persist the cache to disk. 0 means no timed persistence
   * @property persistInterval
   * @type {Number}
   * @default 0
   */
  get persistInterval() {
    return this._persistInterval;
  }
  /**
   * Set the interval to persist the cache to disk. 0 means no timed persistence
   * @property persistInterval
   * @type {Number}
   * @default 0
   */
  set persistInterval(value) {
    this._persistInterval = value;
  }
  /**
   * Load a cache identified by the given Id. If the element does not exists, then initialize an empty
   * cache storage. If specified `cacheDir` will be used as the directory to persist the data to. If omitted
   * then the cache module directory `.cacheDir` will be used instead
   *
   * @method load
   * @param cacheId {String} the id of the cache, would also be used as the name of the file cache
   * @param cacheDir {String} directory for the cache entry
   */
  load(cacheId, cacheDir) {
    try {
      const filePath = path.resolve(
        `${cacheDir ?? this._cacheDir}/${cacheId ?? this._cacheId}`
      );
      this.loadFile(filePath);
      this.emit("load" /* LOAD */);
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
  }
  /**
   * Load the cache from the provided file
   * @method loadFile
   * @param  {String} pathToFile the path to the file containing the info for the cache
   */
  loadFile(pathToFile) {
    if (fs.existsSync(pathToFile)) {
      const data = fs.readFileSync(pathToFile, "utf8");
      const items = this._parse(data);
      if (Array.isArray(items)) {
        for (const item of items) {
          if (item && typeof item === "object" && "key" in item) {
            if (item.expires) {
              this._cache.set(item.key, item.value, { expire: item.expires });
            } else if (item.timestamp) {
              this._cache.set(item.key, item.value, { expire: item.timestamp });
            } else {
              this._cache.set(item.key, item.value);
            }
          }
        }
      } else {
        for (const key of Object.keys(items)) {
          const item = items[key];
          if (item && typeof item === "object" && "key" in item) {
            this._cache.set(item.key, item.value, {
              expire: item.expires
            });
          } else {
            if (item && typeof item === "object" && item.timestamp) {
              this._cache.set(key, item, { expire: item.timestamp });
            } else {
              this._cache.set(key, item);
            }
          }
        }
      }
      this._changesSinceLastSave = true;
    }
  }
  loadFileStream(pathToFile, onProgress, onEnd, onError) {
    if (fs.existsSync(pathToFile)) {
      const stats = fs.statSync(pathToFile);
      const total = stats.size;
      let loaded = 0;
      let streamData = "";
      const readStream = fs.createReadStream(pathToFile, { encoding: "utf8" });
      readStream.on("data", (chunk) => {
        loaded += chunk.length;
        streamData += chunk;
        onProgress(loaded, total);
      });
      readStream.on("end", () => {
        const items = this._parse(streamData);
        for (const key of Object.keys(items)) {
          this._cache.set(items[key].key, items[key].value, {
            expire: items[key].expires
          });
        }
        this._changesSinceLastSave = true;
        onEnd();
      });
      readStream.on("error", (error) => {
        this.emit("error" /* ERROR */, error);
        if (onError) {
          onError(error);
        }
      });
    } else {
      const error = new Error(`Cache file ${pathToFile} does not exist`);
      this.emit("error" /* ERROR */, error);
      if (onError) {
        onError(error);
      }
    }
  }
  /**
   * Returns the entire persisted object
   * @method all
   * @returns {*}
   */
  all() {
    const result = {};
    const items = [...this._cache.items];
    for (const item of items) {
      result[item.key] = item.value;
    }
    return result;
  }
  /**
   * Returns an array with all the items in the cache { key, value, expires }
   * @method items
   * @returns {Array}
   */
  // biome-ignore lint/suspicious/noExplicitAny: cache items can store any value
  get items() {
    return [...this._cache.items];
  }
  /**
   * Returns the path to the file where the cache is persisted
   * @method cacheFilePath
   * @returns {String}
   */
  get cacheFilePath() {
    return path.resolve(`${this._cacheDir}/${this._cacheId}`);
  }
  /**
   * Returns the path to the cache directory
   * @method cacheDirPath
   * @returns {String}
   */
  get cacheDirPath() {
    return path.resolve(this._cacheDir);
  }
  /**
   * Returns an array with all the keys in the cache
   * @method keys
   * @returns {Array}
   */
  keys() {
    return [...this._cache.keys];
  }
  /**
   * (Legacy) set key method. This method will be deprecated in the future
   * @method setKey
   * @param key {string} the key to set
   * @param value {object} the value of the key. Could be any object that can be serialized with JSON.stringify
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  setKey(key, value, ttl) {
    this.set(key, value, ttl);
  }
  /**
   * Sets a key to a given value
   * @method set
   * @param key {string} the key to set
   * @param value {object} the value of the key. Could be any object that can be serialized with JSON.stringify
   * @param [ttl] {number} the time to live in milliseconds
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  set(key, value, ttl) {
    this._cache.set(key, value, ttl);
    this._changesSinceLastSave = true;
  }
  /**
   * (Legacy) Remove a given key from the cache. This method will be deprecated in the future
   * @method removeKey
   * @param key {String} the key to remove from the object
   */
  removeKey(key) {
    this.delete(key);
  }
  /**
   * Remove a given key from the cache
   * @method delete
   * @param key {String} the key to remove from the object
   */
  delete(key) {
    this._cache.delete(key);
    this._changesSinceLastSave = true;
    this.emit("delete" /* DELETE */, key);
  }
  /**
   * (Legacy) Return the value of the provided key. This method will be deprecated in the future
   * @method getKey<T>
   * @param key {String} the name of the key to retrieve
   * @returns {*} at T the value from the key
   */
  getKey(key) {
    return this.get(key);
  }
  /**
   * Return the value of the provided key
   * @method get<T>
   * @param key {String} the name of the key to retrieve
   * @returns {*} at T the value from the key
   */
  get(key) {
    return this._cache.get(key);
  }
  /**
   * Clear the cache and save the state to disk
   * @method clear
   */
  clear() {
    try {
      this._cache.clear();
      this._changesSinceLastSave = true;
      this.save();
      this.emit("clear" /* CLEAR */);
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
  }
  /**
   * Save the state of the cache identified by the docId to disk
   * as a JSON structure
   * @method save
   */
  save(force = false) {
    try {
      if (this._changesSinceLastSave || force) {
        const filePath = this.cacheFilePath;
        const items = [...this._cache.items];
        const data = this._stringify(items);
        if (!fs.existsSync(this._cacheDir)) {
          fs.mkdirSync(this._cacheDir, { recursive: true });
        }
        fs.writeFileSync(filePath, data);
        this._changesSinceLastSave = false;
        this.emit("save" /* SAVE */);
      }
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
  }
  /**
   * Remove the file where the cache is persisted
   * @method removeCacheFile
   * @return {Boolean} true or false if the file was successfully deleted
   */
  removeCacheFile() {
    try {
      if (fs.existsSync(this.cacheFilePath)) {
        fs.rmSync(this.cacheFilePath);
        return true;
      }
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
    return false;
  }
  /**
   * Destroy the cache. This will remove the directory, file, and memory cache
   * @method destroy
   * @param [includeCacheDir=false] {Boolean} if true, the cache directory will be removed
   * @return {undefined}
   */
  destroy(includeCacheDirectory = false) {
    try {
      this._cache.clear();
      this.stopAutoPersist();
      if (includeCacheDirectory) {
        fs.rmSync(this.cacheDirPath, { recursive: true, force: true });
      } else {
        fs.rmSync(this.cacheFilePath, { recursive: true, force: true });
      }
      this._changesSinceLastSave = false;
      this.emit("destroy" /* DESTROY */);
    } catch (error) {
      this.emit("error" /* ERROR */, error);
    }
  }
  /**
   * Start the auto persist interval
   * @method startAutoPersist
   */
  startAutoPersist() {
    if (this._persistInterval > 0) {
      if (this._persistTimer) {
        clearInterval(this._persistTimer);
        this._persistTimer = void 0;
      }
      this._persistTimer = setInterval(() => {
        this.save();
      }, this._persistInterval);
    }
  }
  /**
   * Stop the auto persist interval
   * @method stopAutoPersist
   */
  stopAutoPersist() {
    if (this._persistTimer) {
      clearInterval(this._persistTimer);
      this._persistTimer = void 0;
    }
  }
};
var FlatCacheDefault = class {
  static create = create;
  static createFromFile = createFromFile;
  static clearCacheById = clearCacheById;
  static clearAll = clearAll;
};
function create(options) {
  const cache = new FlatCache(options);
  cache.load();
  return cache;
}
function createFromFile(filePath, options) {
  const cache = new FlatCache(options);
  cache.loadFile(filePath);
  return cache;
}
function clearCacheById(cacheId, cacheDirectory) {
  const cache = new FlatCache({ cacheId, cacheDir: cacheDirectory });
  cache.destroy();
}
function clearAll(cacheDirectory) {
  fs.rmSync(cacheDirectory ?? ".cache", { recursive: true, force: true });
}
export {
  FlatCache,
  FlatCacheEvents,
  clearAll,
  clearCacheById,
  create,
  createFromFile,
  FlatCacheDefault as default
};
/* v8 ignore next -- @preserve */
