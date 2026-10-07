"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExplorerSync = void 0;

var _path = _interopRequireDefault(require("path"));

var _ExplorerBase = require("./ExplorerBase");

var _readFile = require("./readFile");

var _cacheWrapper = require("./cacheWrapper");

var _getDirectory = require("./getDirectory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExplorerSync extends _ExplorerBase.ExplorerBase {
  constructor(options) {
    super(options);
  }

  searchSync(searchFrom = process.cwd()) {
    const startDirectory = (0, _getDirectory.getDirectorySync)(searchFrom);
    const result = this.searchFromDirectorySync(startDirectory);
    return result;
  }

  searchFromDirectorySync(dir) {
    const absoluteDir = _path.default.resolve(process.cwd(), dir);

    const run = () => {
      const result = this.searchDirectorySync(absoluteDir);
      const nextDir = this.nextDirectoryToSearch(absoluteDir, result);

      if (nextDir) {
        return this.searchFromDirectorySync(nextDir);
      }

      const transformResult = this.config.transform(result);
      return transformResult;
    };

    if (this.searchCache) {
      return (0, _cacheWrapper.cacheWrapperSync)(this.searchCache, absoluteDir, run);
    }

    return run();
  }

  searchDirectorySync(dir) {
    for (const place of this.config.searchPlaces) {
      const placeResult = this.loadSearchPlaceSync(dir, place);

      if (this.shouldSearchStopWithResult(placeResult) === true) {
        return placeResult;
      }
    } // config not found


    return null;
  }

  loadSearchPlaceSync(dir, place) {
    const filepath = _path.default.join(dir, place);

    const content = (0, _readFile.readFileSync)(filepath);
    const result = this.createCosmiconfigResultSync(filepath, content);
    return result;
  }

  loadFileContentSync(filepath, content) {
    if (content === null) {
      return null;
    }

    if (content.trim() === '') {
      return undefined;
    }

    const loader = this.getLoaderEntryForFile(filepath);
    const loaderResult = loader(filepath, content);
    return loaderResult;
  }

  createCosmiconfigResultSync(filepath, content) {
    const fileContent = this.loadFileContentSync(filepath, content);
    const result = this.loadedContentToCosmiconfigResult(filepath, fileContent);
    return result;
  }

  loadSync(filepath) {
    this.validateFilePath(filepath);

    const absoluteFilePath = _path.default.resolve(process.cwd(), filepath);

    const runLoadSync = () => {
      const content = (0, _readFile.readFileSync)(absoluteFilePath, {
        throwNotFound: true
      });
      const cosmiconfigResult = this.createCosmiconfigResultSync(absoluteFilePath, content);
      const transformResult = this.config.transform(cosmiconfigResult);
      return transformResult;
    };

    if (this.loadCache) {
      return (0, _cacheWrapper.cacheWrapperSync)(this.loadCache, absoluteFilePath, runLoadSync);
    }

    return runLoadSync();
  }

}

exports.ExplorerSync = ExplorerSync;
//# sourceMappingURL=ExplorerSync.js.map