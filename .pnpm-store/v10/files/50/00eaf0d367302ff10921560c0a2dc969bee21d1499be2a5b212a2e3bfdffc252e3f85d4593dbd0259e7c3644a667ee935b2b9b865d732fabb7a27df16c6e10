// @flow strict-local
import type {Cache} from './types';

import {Readable} from 'stream';
import {serialize, deserialize, registerSerializableClass} from '@parcel/core';
import {bufferStream} from '@parcel/utils';
// $FlowFixMe[untyped-import]
import packageJson from '../package.json';
// $FlowFixMe[untyped-import]
import {openDB} from 'idb';

const STORE_NAME = 'cache';

export class IDBCache implements Cache {
  // $FlowFixMe
  store: any;

  constructor() {
    this.store = openDB('REPL-parcel-cache', 1, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME);
      },
      blocked() {},
      blocking() {},
      terminated() {},
    });
  }

  ensure(): Promise<void> {
    return Promise.resolve();
  }

  serialize(): {||} {
    return {
      /*::...null*/
    };
  }

  static deserialize(): IDBCache {
    return new IDBCache();
  }

  has(key: string): Promise<boolean> {
    return Promise.resolve(this.store.get(key) != null);
  }

  async get<T>(key: string): Promise<?T> {
    let data = await (await this.store).get(STORE_NAME, key);
    if (data == null) {
      return null;
    }

    return Promise.resolve(deserialize(data));
  }

  async set(key: string, value: mixed): Promise<void> {
    await (await this.store).put(STORE_NAME, serialize(value), key);
  }

  getStream(key: string): Readable {
    let dataPromise = this.store
      .then(s => s.get(STORE_NAME, key))
      .then(d => Buffer.from(d))
      .catch(e => e);
    const stream = new Readable({
      // $FlowFixMe(incompatible-call)
      async read() {
        let data = await dataPromise;
        if (data instanceof Error) {
          stream.emit('error', data);
        } else {
          stream.push(Buffer.from(data));
          stream.push(null);
        }
      },
    });

    return stream;
  }

  async setStream(key: string, stream: Readable): Promise<void> {
    let buf = await bufferStream(stream);
    await (await this.store).put(STORE_NAME, buf, key);
  }

  async getBlob(key: string): Promise<Buffer> {
    let data = await (await this.store).get(STORE_NAME, key);
    if (data == null) {
      return Promise.reject(new Error(`Key ${key} not found in cache`));
    }
    return Buffer.from(data.buffer);
  }

  async setBlob(key: string, contents: Buffer | string): Promise<void> {
    let data =
      contents instanceof Uint8Array ? contents : Buffer.from(contents);
    await (await this.store).put(STORE_NAME, data, key);
  }

  async getBuffer(key: string): Promise<?Buffer> {
    let data = await (await this.store).get(STORE_NAME, key);
    if (data == null) {
      return null;
    }

    return Buffer.from(data.buffer);
  }

  hasLargeBlob(key: string): Promise<boolean> {
    return this.has(key);
  }

  getLargeBlob(key: string): Promise<Buffer> {
    return this.getBlob(key);
  }

  setLargeBlob(key: string, contents: Buffer | string): Promise<void> {
    return this.setBlob(key, contents);
  }
}

registerSerializableClass(`${packageJson.version}:IDBCache`, IDBCache);
