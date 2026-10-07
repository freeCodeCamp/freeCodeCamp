"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Explorer = void 0;

var _path = _interopRequireDefault(require("path"));

var _ExplorerBase = require("./ExplorerBase");

var _readFile = require("./readFile");

var _cacheWrapper = require("./cacheWrapper");

var _getDirectory = require("./getDirectory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

class Explorer extends _ExplorerBase.ExplorerBase {
  constructor(options) {
    super(options);
  }

  async search(searchFrom = process.cwd()) {
    const startDirectory = await (0, _getDirectory.getDirectory)(searchFrom);
    const result = await this.searchFromDirectory(startDirectory);
    return result;
  }

  async searchFromDirectory(dir) {
    const absoluteDir = _path.default.resolve(process.cwd(), dir);

    const run = async () => {
      const result = await this.searchDirectory(absoluteDir);
      const nextDir = this.nextDirectoryToSearch(absoluteDir, result);

      if (nextDir) {
        return this.searchFromDirectory(nextDir);
      }

      const transformResult = await this.config.transform(result);
      return transformResult;
    };

    if (this.searchCache) {
      return (0, _cacheWrapper.cacheWrapper)(this.searchCache, absoluteDir, run);
    }

    return run();
  }

  async searchDirectory(dir) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(this.config.searchPlaces), _step, _value; _step = await _iterator.next(), _iteratorNormalCompletion = _step.done, _value = await _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        const place = _value;
        const placeResult = await this.loadSearchPlace(dir, place);

        if (this.shouldSearchStopWithResult(placeResult) === true) {
          return placeResult;
        }
      } // config not found

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          await _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return null;
  }

  async loadSearchPlace(dir, place) {
    const filepath = _path.default.join(dir, place);

    const fileContents = await (0, _readFile.readFile)(filepath);
    const result = await this.createCosmiconfigResult(filepath, fileContents);
    return result;
  }

  async loadFileContent(filepath, content) {
    if (content === null) {
      return null;
    }

    if (content.trim() === '') {
      return undefined;
    }

    const loader = this.getLoaderEntryForFile(filepath);
    const loaderResult = await loader(filepath, content);
    return loaderResult;
  }

  async createCosmiconfigResult(filepath, content) {
    const fileContent = await this.loadFileContent(filepath, content);
    const result = this.loadedContentToCosmiconfigResult(filepath, fileContent);
    return result;
  }

  async load(filepath) {
    this.validateFilePath(filepath);

    const absoluteFilePath = _path.default.resolve(process.cwd(), filepath);

    const runLoad = async () => {
      const fileContents = await (0, _readFile.readFile)(absoluteFilePath, {
        throwNotFound: true
      });
      const result = await this.createCosmiconfigResult(absoluteFilePath, fileContents);
      const transformResult = await this.config.transform(result);
      return transformResult;
    };

    if (this.loadCache) {
      return (0, _cacheWrapper.cacheWrapper)(this.loadCache, absoluteFilePath, runLoad);
    }

    return runLoad();
  }

}

exports.Explorer = Explorer;
//# sourceMappingURL=Explorer.js.map