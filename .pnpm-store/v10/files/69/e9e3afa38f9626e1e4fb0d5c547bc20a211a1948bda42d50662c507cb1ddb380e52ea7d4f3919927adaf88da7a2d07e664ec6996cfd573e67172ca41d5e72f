"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDBCache = void 0;

function _stream() {
  const data = require("stream");

  _stream = function () {
    return data;
  };

  return data;
}

function _core() {
  const data = require("@parcel/core");

  _core = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

var _package = _interopRequireDefault(require("../package.json"));

function _idb() {
  const data = require("idb");

  _idb = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe[untyped-import]
// $FlowFixMe[untyped-import]
const STORE_NAME = 'cache';

class IDBCache {
  // $FlowFixMe
  constructor() {
    this.store = (0, _idb().openDB)('REPL-parcel-cache', 1, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME);
      },

      blocked() {},

      blocking() {},

      terminated() {}

    });
  }

  ensure() {
    return Promise.resolve();
  }

  serialize() {
    return {
      /*::...null*/
    };
  }

  static deserialize() {
    return new IDBCache();
  }

  has(key) {
    return Promise.resolve(this.store.get(key) != null);
  }

  async get(key) {
    let data = await (await this.store).get(STORE_NAME, key);

    if (data == null) {
      return null;
    }

    return Promise.resolve((0, _core().deserialize)(data));
  }

  async set(key, value) {
    await (await this.store).put(STORE_NAME, (0, _core().serialize)(value), key);
  }

  getStream(key) {
    let dataPromise = this.store.then(s => s.get(STORE_NAME, key)).then(d => Buffer.from(d)).catch(e => e);
    const stream = new (_stream().Readable)({
      // $FlowFixMe(incompatible-call)
      async read() {
        let data = await dataPromise;

        if (data instanceof Error) {
          stream.emit('error', data);
        } else {
          stream.push(Buffer.from(data));
          stream.push(null);
        }
      }

    });
    return stream;
  }

  async setStream(key, stream) {
    let buf = await (0, _utils().bufferStream)(stream);
    await (await this.store).put(STORE_NAME, buf, key);
  }

  async getBlob(key) {
    let data = await (await this.store).get(STORE_NAME, key);

    if (data == null) {
      return Promise.reject(new Error(`Key ${key} not found in cache`));
    }

    return Buffer.from(data.buffer);
  }

  async setBlob(key, contents) {
    let data = contents instanceof Uint8Array ? contents : Buffer.from(contents);
    await (await this.store).put(STORE_NAME, data, key);
  }

  async getBuffer(key) {
    let data = await (await this.store).get(STORE_NAME, key);

    if (data == null) {
      return null;
    }

    return Buffer.from(data.buffer);
  }

  hasLargeBlob(key) {
    return this.has(key);
  }

  getLargeBlob(key) {
    return this.getBlob(key);
  }

  setLargeBlob(key, contents) {
    return this.setBlob(key, contents);
  }

}

exports.IDBCache = IDBCache;
(0, _core().registerSerializableClass)(`${_package.default.version}:IDBCache`, IDBCache);