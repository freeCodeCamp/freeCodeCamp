// @flow strict-local

import type {Readable, Writable} from 'stream';
import type {FilePath} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import type {Cache} from './types';

import stream from 'stream';
import path from 'path';
import {promisify} from 'util';
import logger from '@parcel/logger';
import {serialize, deserialize, registerSerializableClass} from '@parcel/core';
// flowlint-next-line untyped-import:off
import packageJson from '../package.json';

const pipeline: (Readable, Writable) => Promise<void> = promisify(
  stream.pipeline,
);

export class FSCache implements Cache {
  fs: FileSystem;
  dir: FilePath;

  constructor(fs: FileSystem, cacheDir: FilePath) {
    this.fs = fs;
    this.dir = cacheDir;
  }

  async ensure(): Promise<void> {
    // First, create the main cache directory if necessary.
    await this.fs.mkdirp(this.dir);

    // In parallel, create sub-directories for every possible hex value
    // This speeds up large caches on many file systems since there are fewer files in a single directory.
    let dirPromises = [];
    for (let i = 0; i < 256; i++) {
      dirPromises.push(
        this.fs.mkdirp(path.join(this.dir, ('00' + i.toString(16)).slice(-2))),
      );
    }

    await Promise.all(dirPromises);
  }

  _getCachePath(cacheId: string): FilePath {
    return path.join(this.dir, cacheId.slice(0, 2), cacheId.slice(2));
  }

  getStream(key: string): Readable {
    return this.fs.createReadStream(this._getCachePath(`${key}-large`));
  }

  setStream(key: string, stream: Readable): Promise<void> {
    return pipeline(
      stream,
      this.fs.createWriteStream(this._getCachePath(`${key}-large`)),
    );
  }

  has(key: string): Promise<boolean> {
    return this.fs.exists(this._getCachePath(key));
  }

  getBlob(key: string): Promise<Buffer> {
    return this.fs.readFile(this._getCachePath(key));
  }

  async setBlob(key: string, contents: Buffer | string): Promise<void> {
    await this.fs.writeFile(this._getCachePath(key), contents);
  }

  async getBuffer(key: string): Promise<?Buffer> {
    try {
      return await this.fs.readFile(this._getCachePath(key));
    } catch (err) {
      if (err.code === 'ENOENT') {
        return null;
      } else {
        throw err;
      }
    }
  }

  hasLargeBlob(key: string): Promise<boolean> {
    return this.fs.exists(this._getCachePath(`${key}-large`));
  }

  getLargeBlob(key: string): Promise<Buffer> {
    return this.fs.readFile(this._getCachePath(`${key}-large`));
  }

  async setLargeBlob(key: string, contents: Buffer | string): Promise<void> {
    await this.fs.writeFile(this._getCachePath(`${key}-large`), contents);
  }

  async get<T>(key: string): Promise<?T> {
    try {
      let data = await this.fs.readFile(this._getCachePath(key));
      return deserialize(data);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return null;
      } else {
        throw err;
      }
    }
  }

  async set(key: string, value: mixed): Promise<void> {
    try {
      let blobPath = this._getCachePath(key);
      let data = serialize(value);

      await this.fs.writeFile(blobPath, data);
    } catch (err) {
      logger.error(err, '@parcel/cache');
    }
  }
}

registerSerializableClass(`${packageJson.version}:FSCache`, FSCache);
