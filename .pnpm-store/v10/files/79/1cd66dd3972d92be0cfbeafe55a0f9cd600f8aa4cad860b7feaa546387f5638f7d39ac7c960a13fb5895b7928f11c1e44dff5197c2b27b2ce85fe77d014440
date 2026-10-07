"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
// Initial file from https://github.com/rolandstarke/node-cache-manager-fs-hash @ af52d2d
/* eslint-disable @babel/no-invalid-this, no-useless-catch */
/* !
The MIT License (MIT)

Copyright (c) 2017 Roland Starke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const fs = require(`fs`);
const crypto = require(`crypto`);
const path = require(`path`);
const promisify = require(`util`).promisify;
const jsonFileStore = require(`./json-file-store`);
const wrapCallback = require(`./wrap-callback`);
// Cache read/writes are async. This locking attempts to prevent race conditions.
// It's not ideal and locks timeout after 10s. It's mostly a port from when this
// mechanism was using fs-based locks. Doing it in-memory reduces IO pressure and
// we currently don't support two concurrent builds at the same time anyways.
const globalGatsbyCacheLock = new Map();
let showLockTimeoutWarning = true; // Only show this once

/**
 * construction of the disk storage
 * @param {object} [args] options of disk store
 * @param {string} [args.path] path for cached files
 * @param {number} [args.ttl] time to life in seconds
 * @param {boolean} [args.zip] zip content to save diskspace
 * @todo {number} [args.maxsize] max size in bytes on disk
 * @param {boolean} [args.subdirs] create subdirectories
 * @returns {DiskStore}
 */
exports.create = function (args) {
  return new DiskStore(args && args.options ? args.options : args);
};
function DiskStore(options) {
  options = options || {};
  this.options = {
    path: options.path || `./cache` /* path for cached files  */,
    ttl: options.ttl >= 0 ? +options.ttl : 60 * 60 /* time before expiring in seconds */,
    maxsize: options.maxsize || Infinity /* max size in bytes on disk */,
    subdirs: options.subdirs || false,
    zip: options.zip || false,
    lockFile: {
      // check lock at 0ms 50ms 100ms ... 400ms 1400ms 1450ms... up to 10 seconds, after that just assume the lock is staled
      wait: 400,
      pollPeriod: 50,
      stale: 10 * 1000,
      retries: 10,
      retryWait: 600
    }
  };

  // check storage directory for existence (or create it)
  if (!fs.existsSync(this.options.path)) {
    fs.mkdirSync(this.options.path);
  }
}

/**
 * save an entry in store
 * @param {string} key
 * @param {*} val
 * @param {object} [options]
 * @param {number} options.ttl time to life in seconds
 * @param {function} [cb]
 * @returns {Promise}
 */
DiskStore.prototype.set = wrapCallback(async function (key, val, options) {
  key = key + ``;
  const filePath = this._getFilePathByKey(key);
  const ttl = options && options.ttl >= 0 ? +options.ttl : this.options.ttl;
  const data = {
    expireTime: Date.now() + ttl * 1000,
    key: key,
    val: val
  };
  if (this.options.subdirs) {
    // check if subdir exists or create it
    const dir = path.dirname(filePath);
    await promisify(fs.access)(dir, fs.constants.W_OK).catch(function () {
      return promisify(fs.mkdir)(dir).catch(err => {
        if (err.code !== `EEXIST`) throw err;
      });
    });
  }
  try {
    await this._lock(filePath);
    await jsonFileStore.write(filePath, data, this.options);
  } catch (err) {
    throw err;
  } finally {
    await this._unlock(filePath);
  }
});

/**
 * get an entry from store
 * @param {string} key
 * @param {function} [cb]
 * @returns {Promise}
 */
DiskStore.prototype.get = wrapCallback(async function (key) {
  key = key + ``;
  const filePath = this._getFilePathByKey(key);
  try {
    const data = await jsonFileStore.read(filePath, this.options).catch(async err => {
      if (err.code === `ENOENT`) {
        throw err;
      }
      // maybe the file is currently written to, lets lock it and read again
      try {
        await this._lock(filePath);
        return await jsonFileStore.read(filePath, this.options);
      } catch (err2) {
        throw err2;
      } finally {
        await this._unlock(filePath);
      }
    });
    if (data.expireTime <= Date.now()) {
      // cache expired
      this.del(key).catch(() => 0 /* ignore */);
      return undefined;
    }
    if (data.key !== key) {
      // hash collision
      return undefined;
    }
    return data.val;
  } catch (err) {
    // file does not exist lets return a cache miss
    if (err.code === `ENOENT`) {
      return undefined;
    } else {
      throw err;
    }
  }
});

/**
 * delete entry from cache
 */
DiskStore.prototype.del = wrapCallback(async function (key) {
  const filePath = this._getFilePathByKey(key);
  try {
    if (this.options.subdirs) {
      // check if the folder exists to fail faster
      const dir = path.dirname(filePath);
      await promisify(fs.access)(dir, fs.constants.W_OK);
    }
    await this._lock(filePath);
    await jsonFileStore.delete(filePath, this.options);
  } catch (err) {
    // ignore deleting non existing keys
    if (err.code !== `ENOENT`) {
      throw err;
    }
  } finally {
    await this._unlock(filePath);
  }
});

/**
 * cleanup cache on disk -> delete all files from the cache
 */
DiskStore.prototype.reset = wrapCallback(async function () {
  const readdir = promisify(fs.readdir);
  const stat = promisify(fs.stat);
  const unlink = promisify(fs.unlink);
  return await deletePath(this.options.path, 2);
  async function deletePath(fileOrDir, maxDeep) {
    if (maxDeep < 0) {
      return;
    }
    const stats = await stat(fileOrDir);
    if (stats.isDirectory()) {
      const files = await readdir(fileOrDir);
      for (let i = 0; i < files.length; i++) {
        await deletePath(path.join(fileOrDir, files[i]), maxDeep - 1);
      }
    } else if (stats.isFile() && /[/\\]diskstore-[0-9a-fA-F/\\]+(\.json|-\d\.bin)/.test(fileOrDir)) {
      // delete the file if it is a diskstore file
      await unlink(fileOrDir);
    }
  }
});

/**
 * locks a file so other forks that want to use the same file have to wait
 * @param {string} filePath
 * @returns {Promise}
 * @private
 */
DiskStore.prototype._lock = function _lock(filePath) {
  return new Promise((resolve, reject) => innerLock(resolve, reject, filePath));
};
function innerLock(resolve, reject, filePath) {
  try {
    var _globalGatsbyCacheLoc;
    let lockTime = (_globalGatsbyCacheLoc = globalGatsbyCacheLock.get(filePath)) !== null && _globalGatsbyCacheLoc !== void 0 ? _globalGatsbyCacheLoc : 0;
    if (lockTime > 0 && Date.now() - lockTime > 10 * 1000) {
      if (showLockTimeoutWarning) {
        showLockTimeoutWarning = false;
        _reporter.default.verbose(`Warning: lock file older than 10s, ignoring it... There is a possibility this leads to caching problems later. This warning will only be shown once.`);
      }
      lockTime = 0;
      globalGatsbyCacheLock.delete(filePath);
    }
    if (lockTime > 0) {
      setTimeout(() => {
        innerLock(resolve, reject, filePath);
      }, 50);
    } else {
      // set sync
      globalGatsbyCacheLock.set(filePath, Date.now());
      resolve();
    }
  } catch (e) {
    reject(e);
  }
}

/**
 * unlocks a file path
 * @type {Function}
 * @param {string} filePath
 * @returns {void}
 * @private
 */
DiskStore.prototype._unlock = function _unlock(filePath) {
  globalGatsbyCacheLock.delete(filePath);
};

/**
 * returns the location where the value should be stored
 * @param {string} key
 * @returns {string}
 * @private
 */
DiskStore.prototype._getFilePathByKey = function (key) {
  const hash = crypto.createHash(`md5`).update(key + ``).digest(`hex`);
  if (this.options.subdirs) {
    // create subdirs with the first 3 chars of the hash
    return path.join(this.options.path, `diskstore-` + hash.slice(0, 3), hash.slice(3));
  } else {
    return path.join(this.options.path, `diskstore-` + hash);
  }
};
//# sourceMappingURL=cache-fs.js.map