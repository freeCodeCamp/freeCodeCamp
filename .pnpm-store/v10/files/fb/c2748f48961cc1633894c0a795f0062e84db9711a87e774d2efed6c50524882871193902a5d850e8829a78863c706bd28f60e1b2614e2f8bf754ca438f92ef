// src/index.ts
import crypto from "crypto";
import fs from "fs";
import path from "path";
import {
  createFromFile as createFlatCacheFile,
  FlatCache
} from "flat-cache";
function createFromFile(filePath, options) {
  const fname = path.basename(filePath);
  const directory = path.dirname(filePath);
  return create(fname, directory, options);
}
function create(cacheId, cacheDirectory, options) {
  const opts = {
    ...options,
    cache: {
      cacheId,
      cacheDir: cacheDirectory
    }
  };
  const fileEntryCache = new FileEntryCache(opts);
  if (cacheDirectory) {
    const cachePath = `${cacheDirectory}/${cacheId}`;
    if (fs.existsSync(cachePath)) {
      fileEntryCache.cache = createFlatCacheFile(cachePath, opts.cache);
    }
  }
  return fileEntryCache;
}
var FileEntryDefault = class {
  static create = create;
  static createFromFile = createFromFile;
};
var FileEntryCache = class {
  _cache = new FlatCache({ useClone: false });
  _useCheckSum = false;
  _hashAlgorithm = "md5";
  _cwd = process.cwd();
  _restrictAccessToCwd = false;
  _logger;
  _useAbsolutePathAsKey = false;
  _useModifiedTime = true;
  /**
   * Create a new FileEntryCache instance
   * @param options - The options for the FileEntryCache (all properties are optional with defaults)
   */
  constructor(options) {
    if (options?.cache) {
      this._cache = new FlatCache(options.cache);
    }
    if (options?.useCheckSum) {
      this._useCheckSum = options.useCheckSum;
    }
    if (options?.hashAlgorithm) {
      this._hashAlgorithm = options.hashAlgorithm;
    }
    if (options?.cwd) {
      this._cwd = options.cwd;
    }
    if (options?.useModifiedTime !== void 0) {
      this._useModifiedTime = options.useModifiedTime;
    }
    if (options?.restrictAccessToCwd !== void 0) {
      this._restrictAccessToCwd = options.restrictAccessToCwd;
    }
    if (options?.useAbsolutePathAsKey !== void 0) {
      this._useAbsolutePathAsKey = options.useAbsolutePathAsKey;
    }
    if (options?.logger) {
      this._logger = options.logger;
    }
  }
  /**
   * Get the cache
   * @returns {FlatCache} The cache
   */
  get cache() {
    return this._cache;
  }
  /**
   * Set the cache
   * @param {FlatCache} cache - The cache to set
   */
  set cache(cache) {
    this._cache = cache;
  }
  /**
   * Get the logger
   * @returns {ILogger | undefined} The logger instance
   */
  get logger() {
    return this._logger;
  }
  /**
   * Set the logger
   * @param {ILogger | undefined} logger - The logger to set
   */
  set logger(logger) {
    this._logger = logger;
  }
  /**
   * Use the hash to check if the file has changed
   * @returns {boolean} if the hash is used to check if the file has changed (default: false)
   */
  get useCheckSum() {
    return this._useCheckSum;
  }
  /**
   * Set the useCheckSum value
   * @param {boolean} value - The value to set
   */
  set useCheckSum(value) {
    this._useCheckSum = value;
  }
  /**
   * Get the hash algorithm
   * @returns {string} The hash algorithm (default: 'md5')
   */
  get hashAlgorithm() {
    return this._hashAlgorithm;
  }
  /**
   * Set the hash algorithm
   * @param {string} value - The value to set
   */
  set hashAlgorithm(value) {
    this._hashAlgorithm = value;
  }
  /**
   * Get the current working directory
   * @returns {string} The current working directory (default: process.cwd())
   */
  get cwd() {
    return this._cwd;
  }
  /**
   * Set the current working directory
   * @param {string} value - The value to set
   */
  set cwd(value) {
    this._cwd = value;
  }
  /**
   * Get whether to use modified time for change detection
   * @returns {boolean} Whether modified time (mtime) is used for change detection (default: true)
   */
  get useModifiedTime() {
    return this._useModifiedTime;
  }
  /**
   * Set whether to use modified time for change detection
   * @param {boolean} value - The value to set
   */
  set useModifiedTime(value) {
    this._useModifiedTime = value;
  }
  /**
   * Get whether to restrict paths to cwd boundaries
   * @returns {boolean} Whether strict path checking is enabled (default: true)
   */
  get restrictAccessToCwd() {
    return this._restrictAccessToCwd;
  }
  /**
   * Set whether to restrict paths to cwd boundaries
   * @param {boolean} value - The value to set
   */
  set restrictAccessToCwd(value) {
    this._restrictAccessToCwd = value;
  }
  /**
   * Get whether to use absolute path as cache key
   * @returns {boolean} Whether cache keys use absolute paths (default: false)
   */
  get useAbsolutePathAsKey() {
    return this._useAbsolutePathAsKey;
  }
  /**
   * Set whether to use absolute path as cache key
   * @param {boolean} value - The value to set
   */
  set useAbsolutePathAsKey(value) {
    this._useAbsolutePathAsKey = value;
  }
  /**
   * Given a buffer, calculate md5 hash of its content.
   * @method getHash
   * @param  {Buffer} buffer   buffer to calculate hash on
   * @return {String}          content hash digest
   */
  getHash(buffer) {
    return crypto.createHash(this._hashAlgorithm).update(buffer).digest("hex");
  }
  /**
   * Create the key for the file path used for caching.
   * @method createFileKey
   * @param {String} filePath
   * @return {String}
   */
  createFileKey(filePath) {
    let result = filePath;
    if (this._useAbsolutePathAsKey && this.isRelativePath(filePath)) {
      result = this.getAbsolutePathWithCwd(filePath, this._cwd);
    }
    return result;
  }
  /**
   * Check if the file path is a relative path
   * @method isRelativePath
   * @param filePath - The file path to check
   * @returns {boolean} if the file path is a relative path, false otherwise
   */
  isRelativePath(filePath) {
    return !path.isAbsolute(filePath);
  }
  /**
   * Delete the cache file from the disk
   * @method deleteCacheFile
   * @return {boolean}       true if the file was deleted, false otherwise
   */
  deleteCacheFile() {
    return this._cache.removeCacheFile();
  }
  /**
   * Remove the cache from the file and clear the memory cache
   * @method destroy
   */
  destroy() {
    this._cache.destroy();
  }
  /**
   * Remove and Entry From the Cache
   * @method removeEntry
   * @param filePath - The file path to remove from the cache
   */
  removeEntry(filePath) {
    const key = this.createFileKey(filePath);
    this._cache.removeKey(key);
  }
  /**
   * Reconcile the cache
   * @method reconcile
   */
  reconcile() {
    const { items } = this._cache;
    for (const item of items) {
      const fileDescriptor = this.getFileDescriptor(item.key);
      if (fileDescriptor.notFound) {
        this._cache.removeKey(item.key);
      }
    }
    this._cache.save();
  }
  /**
   * Check if the file has changed
   * @method hasFileChanged
   * @param filePath - The file path to check
   * @returns {boolean} if the file has changed, false otherwise
   */
  hasFileChanged(filePath) {
    let result = false;
    const fileDescriptor = this.getFileDescriptor(filePath);
    if ((!fileDescriptor.err || !fileDescriptor.notFound) && fileDescriptor.changed) {
      result = true;
    }
    return result;
  }
  /**
   * Get the file descriptor for the file path
   * @method getFileDescriptor
   * @param filePath - The file path to get the file descriptor for
   * @param options - The options for getting the file descriptor
   * @returns The file descriptor
   */
  getFileDescriptor(filePath, options) {
    this._logger?.debug({ filePath, options }, "Getting file descriptor");
    let fstat;
    const result = {
      key: this.createFileKey(filePath),
      changed: false,
      meta: {}
    };
    this._logger?.trace({ key: result.key }, "Created file key");
    const metaCache = this._cache.getKey(result.key);
    if (metaCache) {
      this._logger?.trace({ metaCache }, "Found cached meta");
    } else {
      this._logger?.trace("No cached meta found");
    }
    result.meta = metaCache ? { ...metaCache } : {};
    const absolutePath = this.getAbsolutePath(filePath);
    this._logger?.trace({ absolutePath }, "Resolved absolute path");
    const useCheckSumValue = options?.useCheckSum ?? this._useCheckSum;
    this._logger?.debug(
      { useCheckSum: useCheckSumValue },
      "Using checksum setting"
    );
    const useModifiedTimeValue = options?.useModifiedTime ?? this.useModifiedTime;
    this._logger?.debug(
      { useModifiedTime: useModifiedTimeValue },
      "Using modified time (mtime) setting"
    );
    try {
      fstat = fs.statSync(absolutePath);
      result.meta.size = fstat.size;
      result.meta.mtime = fstat.mtime.getTime();
      this._logger?.trace(
        { size: result.meta.size, mtime: result.meta.mtime },
        "Read file stats"
      );
      if (useCheckSumValue) {
        const buffer = fs.readFileSync(absolutePath);
        result.meta.hash = this.getHash(buffer);
        this._logger?.trace({ hash: result.meta.hash }, "Calculated file hash");
      }
    } catch (error) {
      this._logger?.error({ filePath, error }, "Error reading file");
      this.removeEntry(filePath);
      let notFound = false;
      if (error.message.includes("ENOENT")) {
        notFound = true;
        this._logger?.debug({ filePath }, "File not found");
      }
      return {
        key: result.key,
        err: error,
        notFound,
        meta: {}
      };
    }
    if (!metaCache) {
      result.changed = true;
      this._cache.setKey(result.key, result.meta);
      this._logger?.debug({ filePath }, "File not in cache, marked as changed");
      return result;
    }
    if (useModifiedTimeValue && metaCache?.mtime !== result.meta?.mtime) {
      result.changed = true;
      this._logger?.debug(
        { filePath, oldMtime: metaCache.mtime, newMtime: result.meta.mtime },
        "File changed: mtime differs"
      );
    }
    if (metaCache?.size !== result.meta?.size) {
      result.changed = true;
      this._logger?.debug(
        { filePath, oldSize: metaCache.size, newSize: result.meta.size },
        "File changed: size differs"
      );
    }
    if (useCheckSumValue && metaCache?.hash !== result.meta?.hash) {
      result.changed = true;
      this._logger?.debug(
        { filePath, oldHash: metaCache.hash, newHash: result.meta.hash },
        "File changed: hash differs"
      );
    }
    this._cache.setKey(result.key, result.meta);
    if (result.changed) {
      this._logger?.info({ filePath }, "File has changed");
    } else {
      this._logger?.debug({ filePath }, "File unchanged");
    }
    return result;
  }
  /**
   * Get the file descriptors for the files
   * @method normalizeEntries
   * @param files?: string[] - The files to get the file descriptors for
   * @returns The file descriptors
   */
  normalizeEntries(files) {
    const result = [];
    if (files) {
      for (const file of files) {
        const fileDescriptor = this.getFileDescriptor(file);
        result.push(fileDescriptor);
      }
      return result;
    }
    const keys = this.cache.keys();
    for (const key of keys) {
      const fileDescriptor = this.getFileDescriptor(key);
      if (!fileDescriptor.notFound && !fileDescriptor.err) {
        result.push(fileDescriptor);
      }
    }
    return result;
  }
  /**
   * Analyze the files
   * @method analyzeFiles
   * @param files - The files to analyze
   * @returns {AnalyzedFiles} The analysis of the files
   */
  analyzeFiles(files) {
    const result = {
      changedFiles: [],
      notFoundFiles: [],
      notChangedFiles: []
    };
    const fileDescriptors = this.normalizeEntries(files);
    for (const fileDescriptor of fileDescriptors) {
      if (fileDescriptor.notFound) {
        result.notFoundFiles.push(fileDescriptor.key);
      } else if (fileDescriptor.changed) {
        result.changedFiles.push(fileDescriptor.key);
      } else {
        result.notChangedFiles.push(fileDescriptor.key);
      }
    }
    return result;
  }
  /**
   * Get the updated files
   * @method getUpdatedFiles
   * @param files - The files to get the updated files for
   * @returns {string[]} The updated files
   */
  getUpdatedFiles(files) {
    const result = [];
    const fileDescriptors = this.normalizeEntries(files);
    for (const fileDescriptor of fileDescriptors) {
      if (fileDescriptor.changed) {
        result.push(fileDescriptor.key);
      }
    }
    return result;
  }
  /**
   * Get the file descriptors by path prefix
   * @method getFileDescriptorsByPath
   * @param filePath - the path prefix to match
   * @returns {FileDescriptor[]} The file descriptors
   */
  getFileDescriptorsByPath(filePath) {
    const result = [];
    const keys = this._cache.keys();
    for (const key of keys) {
      if (key.startsWith(filePath)) {
        const fileDescriptor = this.getFileDescriptor(key);
        result.push(fileDescriptor);
      }
    }
    return result;
  }
  /**
   * Get the Absolute Path. If it is already absolute it will return the path as is.
   * When restrictAccessToCwd is enabled, ensures the resolved path stays within cwd boundaries.
   * @method getAbsolutePath
   * @param filePath - The file path to get the absolute path for
   * @returns {string}
   * @throws {Error} When restrictAccessToCwd is true and path would resolve outside cwd
   */
  getAbsolutePath(filePath) {
    if (this.isRelativePath(filePath)) {
      const sanitizedPath = filePath.replace(/\0/g, "");
      const resolved = path.resolve(this._cwd, sanitizedPath);
      if (this._restrictAccessToCwd) {
        const normalizedResolved = path.normalize(resolved);
        const normalizedCwd = path.normalize(this._cwd);
        const isWithinCwd = normalizedResolved === normalizedCwd || normalizedResolved.startsWith(normalizedCwd + path.sep);
        if (!isWithinCwd) {
          throw new Error(
            `Path traversal attempt blocked: "${filePath}" resolves outside of working directory "${this._cwd}"`
          );
        }
      }
      return resolved;
    }
    return filePath;
  }
  /**
   * Get the Absolute Path with a custom working directory. If it is already absolute it will return the path as is.
   * When restrictAccessToCwd is enabled, ensures the resolved path stays within the provided cwd boundaries.
   * @method getAbsolutePathWithCwd
   * @param filePath - The file path to get the absolute path for
   * @param cwd - The custom working directory to resolve relative paths from
   * @returns {string}
   * @throws {Error} When restrictAccessToCwd is true and path would resolve outside the provided cwd
   */
  getAbsolutePathWithCwd(filePath, cwd) {
    if (this.isRelativePath(filePath)) {
      const sanitizedPath = filePath.replace(/\0/g, "");
      const resolved = path.resolve(cwd, sanitizedPath);
      if (this._restrictAccessToCwd) {
        const normalizedResolved = path.normalize(resolved);
        const normalizedCwd = path.normalize(cwd);
        const isWithinCwd = normalizedResolved === normalizedCwd || normalizedResolved.startsWith(normalizedCwd + path.sep);
        if (!isWithinCwd) {
          throw new Error(
            `Path traversal attempt blocked: "${filePath}" resolves outside of working directory "${cwd}"`
          );
        }
      }
      return resolved;
    }
    return filePath;
  }
  /**
   * Rename cache keys that start with a given path prefix.
   * @method renameCacheKeys
   * @param oldPath - The old path prefix to rename
   * @param newPath - The new path prefix to rename to
   */
  renameCacheKeys(oldPath, newPath) {
    const keys = this._cache.keys();
    for (const key of keys) {
      if (key.startsWith(oldPath)) {
        const newKey = key.replace(oldPath, newPath);
        const meta = this._cache.getKey(key);
        this._cache.removeKey(key);
        this._cache.setKey(newKey, meta);
      }
    }
  }
};
export {
  FileEntryCache,
  create,
  createFromFile,
  FileEntryDefault as default
};
/* v8 ignore next -- @preserve */
