"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSCache = void 0;

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

function _logger() {
  const data = _interopRequireDefault(require("@parcel/logger"));

  _logger = function () {
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

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// flowlint-next-line untyped-import:off
const pipeline = (0, _util().promisify)(_stream().default.pipeline);

class FSCache {
  constructor(fs, cacheDir) {
    this.fs = fs;
    this.dir = cacheDir;
  }

  async ensure() {
    // First, create the main cache directory if necessary.
    await this.fs.mkdirp(this.dir); // In parallel, create sub-directories for every possible hex value
    // This speeds up large caches on many file systems since there are fewer files in a single directory.

    let dirPromises = [];

    for (let i = 0; i < 256; i++) {
      dirPromises.push(this.fs.mkdirp(_path().default.join(this.dir, ('00' + i.toString(16)).slice(-2))));
    }

    await Promise.all(dirPromises);
  }

  _getCachePath(cacheId) {
    return _path().default.join(this.dir, cacheId.slice(0, 2), cacheId.slice(2));
  }

  getStream(key) {
    return this.fs.createReadStream(this._getCachePath(`${key}-large`));
  }

  setStream(key, stream) {
    return pipeline(stream, this.fs.createWriteStream(this._getCachePath(`${key}-large`)));
  }

  has(key) {
    return this.fs.exists(this._getCachePath(key));
  }

  getBlob(key) {
    return this.fs.readFile(this._getCachePath(key));
  }

  async setBlob(key, contents) {
    await this.fs.writeFile(this._getCachePath(key), contents);
  }

  async getBuffer(key) {
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

  hasLargeBlob(key) {
    return this.fs.exists(this._getCachePath(`${key}-large`));
  }

  getLargeBlob(key) {
    return this.fs.readFile(this._getCachePath(`${key}-large`));
  }

  async setLargeBlob(key, contents) {
    await this.fs.writeFile(this._getCachePath(`${key}-large`), contents);
  }

  async get(key) {
    try {
      let data = await this.fs.readFile(this._getCachePath(key));
      return (0, _core().deserialize)(data);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return null;
      } else {
        throw err;
      }
    }
  }

  async set(key, value) {
    try {
      let blobPath = this._getCachePath(key);

      let data = (0, _core().serialize)(value);
      await this.fs.writeFile(blobPath, data);
    } catch (err) {
      _logger().default.error(err, '@parcel/cache');
    }
  }

}

exports.FSCache = FSCache;
(0, _core().registerSerializableClass)(`${_package.default.version}:FSCache`, FSCache);