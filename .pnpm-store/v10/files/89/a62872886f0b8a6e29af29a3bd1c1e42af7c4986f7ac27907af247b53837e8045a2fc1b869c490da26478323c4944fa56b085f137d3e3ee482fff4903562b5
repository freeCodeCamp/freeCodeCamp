"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readFileSync = fp => {
  return _fs.default.readFileSync(fp, 'utf8');
};

const pathExists = fp => new Promise(resolve => {
  _fs.default.access(fp, err => {
    resolve(!err);
  });
});

const pathExistsSync = _fs.default.existsSync;

class JoyCon {
  constructor({
    files,
    cwd = process.cwd(),
    stopDir,
    packageKey,
    parseJSON = JSON.parse
  } = {}) {
    this.options = {
      files,
      cwd,
      stopDir,
      packageKey,
      parseJSON
    };
    this.existsCache = new Map();
    this.loaders = new Set();
    this.packageJsonCache = new Map();
    this.loadCache = new Map();
  }

  addLoader(loader) {
    this.loaders.add(loader);
    return this;
  }

  removeLoader(name) {
    for (const loader of this.loaders) {
      if (name && loader.name === name) {
        this.loaders.delete(loader);
      }
    }

    return this;
  }

  async recusivelyResolve(options) {
    if (options.cwd === options.stopDir || _path.default.basename(options.cwd) === 'node_modules') {
      return null;
    }

    for (const filename of options.files) {
      const file = _path.default.resolve(options.cwd, filename);

      const exists = process.env.NODE_ENV !== 'test' && this.existsCache.has(file) ? this.existsCache.get(file) : await pathExists(file);
      this.existsCache.set(file, exists);

      if (exists) {
        if (!options.packageKey || _path.default.basename(file) !== 'package.json') {
          return file;
        }

        const data = require(file);

        delete require.cache[file];
        const hasPackageKey = Object.prototype.hasOwnProperty.call(data, options.packageKey);

        if (hasPackageKey) {
          this.packageJsonCache.set(file, data);
          return file;
        }
      }

      continue;
    }

    return this.recusivelyResolve(Object.assign({}, options, {
      cwd: _path.default.dirname(options.cwd)
    }));
  }

  recusivelyResolveSync(options) {
    if (options.cwd === options.stopDir || _path.default.basename(options.cwd) === 'node_modules') {
      return null;
    }

    for (const filename of options.files) {
      const file = _path.default.resolve(options.cwd, filename);

      const exists = process.env.NODE_ENV !== 'test' && this.existsCache.has(file) ? this.existsCache.get(file) : pathExistsSync(file);
      this.existsCache.set(file, exists);

      if (exists) {
        if (!options.packageKey || _path.default.basename(file) !== 'package.json') {
          return file;
        }

        const data = require(file);

        delete require.cache[file];
        const hasPackageKey = Object.prototype.hasOwnProperty.call(data, options.packageKey);

        if (hasPackageKey) {
          this.packageJsonCache.set(file, data);
          return file;
        }
      }

      continue;
    }

    return this.recusivelyResolveSync(Object.assign({}, options, {
      cwd: _path.default.dirname(options.cwd)
    }));
  }

  async resolve(...args) {
    const options = this.normalizeOptions(args);
    return this.recusivelyResolve(options);
  }

  resolveSync(...args) {
    const options = this.normalizeOptions(args);
    return this.recusivelyResolveSync(options);
  }

  runLoaderSync(loader, filepath) {
    return loader.loadSync(filepath);
  }

  runLoader(loader, filepath) {
    if (!loader.load) return loader.loadSync(filepath);
    return loader.load(filepath);
  }

  async load(...args) {
    const options = this.normalizeOptions(args);
    const filepath = await this.recusivelyResolve(options);

    if (filepath) {
      const defaultLoader = {
        test: /\.+/,
        loadSync: filepath => {
          const extname = _path.default.extname(filepath).slice(1);

          if (extname === 'js' || extname === 'cjs') {
            delete require.cache[filepath];
            return require(filepath);
          }

          if (this.packageJsonCache.has(filepath)) {
            return this.packageJsonCache.get(filepath)[options.packageKey];
          }

          const data = this.options.parseJSON(readFileSync(filepath));
          return data;
        }
      };
      const loader = this.findLoader(filepath) || defaultLoader;
      let data;

      if (this.loadCache.has(filepath)) {
        data = this.loadCache.get(filepath);
      } else {
        data = await this.runLoader(loader, filepath);
        this.loadCache.set(filepath, data);
      }

      return {
        path: filepath,
        data
      };
    }

    return {};
  }

  loadSync(...args) {
    const options = this.normalizeOptions(args);
    const filepath = this.recusivelyResolveSync(options);

    if (filepath) {
      const defaultLoader = {
        test: /\.+/,
        loadSync: filepath => {
          const extname = _path.default.extname(filepath).slice(1);

          if (extname === 'js' || extname === 'cjs') {
            delete require.cache[filepath];
            return require(filepath);
          }

          if (this.packageJsonCache.has(filepath)) {
            return this.packageJsonCache.get(filepath)[options.packageKey];
          }

          const data = this.options.parseJSON(readFileSync(filepath));
          return data;
        }
      };
      const loader = this.findLoader(filepath) || defaultLoader;
      let data;

      if (this.loadCache.has(filepath)) {
        data = this.loadCache.get(filepath);
      } else {
        data = this.runLoaderSync(loader, filepath);
        this.loadCache.set(filepath, data);
      }

      return {
        path: filepath,
        data
      };
    }

    return {};
  }

  findLoader(filepath) {
    for (const loader of this.loaders) {
      if (loader.test && loader.test.test(filepath)) {
        return loader;
      }
    }

    return null;
  }

  clearCache() {
    this.existsCache.clear();
    this.packageJsonCache.clear();
    this.loadCache.clear();
    return this;
  }

  normalizeOptions(args) {
    const options = Object.assign({}, this.options);

    if (Object.prototype.toString.call(args[0]) === '[object Object]') {
      Object.assign(options, args[0]);
    } else {
      if (args[0]) {
        options.files = args[0];
      }

      if (args[1]) {
        options.cwd = args[1];
      }

      if (args[2]) {
        options.stopDir = args[2];
      }
    }

    options.cwd = _path.default.resolve(options.cwd);
    options.stopDir = options.stopDir ? _path.default.resolve(options.stopDir) : _path.default.parse(options.cwd).root;

    if (!options.files || options.files.length === 0) {
      throw new Error('[joycon] files must be an non-empty array!');
    }

    options.__normalized__ = true;
    return options;
  }

}

exports.default = JoyCon;
module.exports = JoyCon;
module.exports.default = JoyCon;