"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LMDBCache = void 0;

function _stream() {
  const data = _interopRequireDefault(require("stream"));

  _stream = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _util() {
  const data = require("util");

  _util = function () {
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

function _fs() {
  const data = require("@parcel/fs");

  _fs = function () {
    return data;
  };

  return data;
}

var _package = _interopRequireDefault(require("../package.json"));

function _lmdb() {
  const data = _interopRequireDefault(require("lmdb"));

  _lmdb = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// flowlint-next-line untyped-import:off
// $FlowFixMe
const pipeline = (0, _util().promisify)(_stream().default.pipeline);

class LMDBCache {
  // $FlowFixMe
  constructor(cacheDir) {
    this.fs = new (_fs().NodeFS)();
    this.dir = cacheDir;
    this.store = _lmdb().default.open(cacheDir, {
      name: 'parcel-cache',
      encoding: 'binary',
      compression: true
    });
  }

  ensure() {
    return Promise.resolve();
  }

  serialize() {
    return {
      dir: this.dir
    };
  }

  static deserialize(opts) {
    return new LMDBCache(opts.dir);
  }

  has(key) {
    return Promise.resolve(this.store.get(key) != null);
  }

  get(key) {
    let data = this.store.get(key);

    if (data == null) {
      return Promise.resolve(null);
    }

    return Promise.resolve((0, _core().deserialize)(data));
  }

  async set(key, value) {
    await this.setBlob(key, (0, _core().serialize)(value));
  }

  getStream(key) {
    return this.fs.createReadStream(_path().default.join(this.dir, key));
  }

  setStream(key, stream) {
    return pipeline(stream, this.fs.createWriteStream(_path().default.join(this.dir, key)));
  }

  getBlob(key) {
    let buffer = this.store.get(key);
    return buffer != null ? Promise.resolve(buffer) : Promise.reject(new Error(`Key ${key} not found in cache`));
  }

  async setBlob(key, contents) {
    await this.store.put(key, contents);
  }

  getBuffer(key) {
    return Promise.resolve(this.store.get(key));
  }

  hasLargeBlob(key) {
    return this.fs.exists(_path().default.join(this.dir, key));
  }

  getLargeBlob(key) {
    return this.fs.readFile(_path().default.join(this.dir, key));
  }

  async setLargeBlob(key, contents) {
    await this.fs.writeFile(_path().default.join(this.dir, key), contents);
  }

}

exports.LMDBCache = LMDBCache;
(0, _core().registerSerializableClass)(`${_package.default.version}:LMDBCache`, LMDBCache);