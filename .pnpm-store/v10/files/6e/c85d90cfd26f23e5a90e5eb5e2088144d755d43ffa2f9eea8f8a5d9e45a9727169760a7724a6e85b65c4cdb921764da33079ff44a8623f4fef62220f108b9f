// @flow

import type {FilePath, Glob} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';

import _isGlob from 'is-glob';
import fastGlob, {type FastGlobOptions} from 'fast-glob';
import {isMatch, makeRe, type Options} from 'micromatch';
import {normalizeSeparators} from './path';

export function isGlob(p: FilePath): any {
  return _isGlob(normalizeSeparators(p));
}

export function isGlobMatch(
  filePath: FilePath,
  glob: Glob | Array<Glob>,
  opts?: Options,
): any {
  glob = Array.isArray(glob)
    ? glob.map(normalizeSeparators)
    : normalizeSeparators(glob);
  return isMatch(filePath, glob, opts);
}

export function globToRegex(glob: Glob, opts?: Options): RegExp {
  return makeRe(glob, opts);
}

export function globSync(
  p: FilePath,
  fs: FileSystem,
  options?: FastGlobOptions<FilePath>,
): Array<FilePath> {
  // $FlowFixMe
  options = {
    ...options,
    fs: {
      statSync: p => {
        return fs.statSync(p);
      },
      lstatSync: p => {
        // Our FileSystem interface doesn't have lstat support at the moment,
        // but this is fine for our purposes since we follow symlinks by default.
        return fs.statSync(p);
      },
      readdirSync: (p, opts) => {
        return fs.readdirSync(p, opts);
      },
    },
  };

  // $FlowFixMe
  return fastGlob.sync(normalizeSeparators(p), options);
}

export function glob(
  p: FilePath,
  fs: FileSystem,
  options: FastGlobOptions<FilePath>,
): Promise<Array<FilePath>> {
  // $FlowFixMe
  options = {
    ...options,
    fs: {
      stat: async (p, cb) => {
        try {
          cb(null, await fs.stat(p));
        } catch (err) {
          cb(err);
        }
      },
      lstat: async (p, cb) => {
        // Our FileSystem interface doesn't have lstat support at the moment,
        // but this is fine for our purposes since we follow symlinks by default.
        try {
          cb(null, await fs.stat(p));
        } catch (err) {
          cb(err);
        }
      },
      readdir: async (p, opts, cb) => {
        if (typeof opts === 'function') {
          cb = opts;
          opts = null;
        }

        try {
          cb(null, await fs.readdir(p, opts));
        } catch (err) {
          cb(err);
        }
      },
    },
  };

  // $FlowFixMe Added in Flow 0.121.0 upgrade in #4381
  return fastGlob(normalizeSeparators(p), options);
}
