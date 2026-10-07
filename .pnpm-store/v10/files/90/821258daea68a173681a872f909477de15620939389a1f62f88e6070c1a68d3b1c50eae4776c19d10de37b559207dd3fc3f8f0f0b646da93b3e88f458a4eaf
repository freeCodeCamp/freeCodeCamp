/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const Profiler = require('../core/GraphQLCompilerProfiler');

const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');

/**
 * A file backed cache. Values are JSON encoded on disk, so only JSON
 * serializable values should be used.
 */
class RelayCompilerCache<T> {
  _name: string;
  _cacheBreaker: string;
  _dir: ?string = null;

  /**
   * @param name         Human readable identifier for the cache
   * @param cacheBreaker This should be changed in order to invalidate existing
   *                     caches.
   */
  constructor(name: string, cacheBreaker: string) {
    this._name = name;
    this._cacheBreaker = cacheBreaker;
  }

  _getFile(key: string): string {
    if (this._dir == null) {
      // Include username in the cache dir to avoid issues with directories being
      // owned by a different user.
      const username = os.userInfo().username;
      const cacheID = crypto
        .createHash('md5')
        .update(this._cacheBreaker)
        .update(username)
        .digest('hex');
      const dir = path.join(os.tmpdir(), `${this._name}-${cacheID}`);
      if (!fs.existsSync(dir)) {
        try {
          fs.mkdirSync(dir);
        } catch (error) {
          if (error.code !== 'EEXIST') {
            throw error;
          }
        }
      }
      this._dir = dir;
    }
    return path.join(this._dir, key);
  }

  getOrCompute(key: string, compute: () => T): T {
    return Profiler.run('RelayCompilerCache.getOrCompute', () => {
      const cacheFile = this._getFile(key);
      if (fs.existsSync(cacheFile)) {
        try {
          return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
        } catch {
          // ignore
        }
      }
      const value = compute();
      try {
        // $FlowFixMe[incompatible-call] JSON.stringify can return undefined
        fs.writeFileSync(cacheFile, JSON.stringify(value), 'utf8');
      } catch {
        // ignore
      }
      return value;
    });
  }
}

module.exports = RelayCompilerCache;
