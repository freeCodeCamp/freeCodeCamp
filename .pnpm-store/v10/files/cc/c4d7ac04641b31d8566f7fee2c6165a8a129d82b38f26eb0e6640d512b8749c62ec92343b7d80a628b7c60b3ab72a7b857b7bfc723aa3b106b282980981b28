"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExtensionDescription = getExtensionDescription;
exports.ExplorerBase = void 0;

var _path = _interopRequireDefault(require("path"));

var _loaders = require("./loaders");

var _getPropertyByPath = require("./getPropertyByPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExplorerBase {
  constructor(options) {
    if (options.cache === true) {
      this.loadCache = new Map();
      this.searchCache = new Map();
    }

    this.config = options;
    this.validateConfig();
  }

  clearLoadCache() {
    if (this.loadCache) {
      this.loadCache.clear();
    }
  }

  clearSearchCache() {
    if (this.searchCache) {
      this.searchCache.clear();
    }
  }

  clearCaches() {
    this.clearLoadCache();
    this.clearSearchCache();
  }

  validateConfig() {
    const config = this.config;
    config.searchPlaces.forEach(place => {
      const loaderKey = _path.default.extname(place) || 'noExt';
      const loader = config.loaders[loaderKey];

      if (!loader) {
        throw new Error(`No loader specified for ${getExtensionDescription(place)}, so searchPlaces item "${place}" is invalid`);
      }

      if (typeof loader !== 'function') {
        throw new Error(`loader for ${getExtensionDescription(place)} is not a function (type provided: "${typeof loader}"), so searchPlaces item "${place}" is invalid`);
      }
    });
  }

  shouldSearchStopWithResult(result) {
    if (result === null) return false;
    if (result.isEmpty && this.config.ignoreEmptySearchPlaces) return false;
    return true;
  }

  nextDirectoryToSearch(currentDir, currentResult) {
    if (this.shouldSearchStopWithResult(currentResult)) {
      return null;
    }

    const nextDir = nextDirUp(currentDir);

    if (nextDir === currentDir || currentDir === this.config.stopDir) {
      return null;
    }

    return nextDir;
  }

  loadPackageProp(filepath, content) {
    const parsedContent = _loaders.loaders.loadJson(filepath, content);

    const packagePropValue = (0, _getPropertyByPath.getPropertyByPath)(parsedContent, this.config.packageProp);
    return packagePropValue || null;
  }

  getLoaderEntryForFile(filepath) {
    if (_path.default.basename(filepath) === 'package.json') {
      const loader = this.loadPackageProp.bind(this);
      return loader;
    }

    const loaderKey = _path.default.extname(filepath) || 'noExt';
    const loader = this.config.loaders[loaderKey];

    if (!loader) {
      throw new Error(`No loader specified for ${getExtensionDescription(filepath)}`);
    }

    return loader;
  }

  loadedContentToCosmiconfigResult(filepath, loadedContent) {
    if (loadedContent === null) {
      return null;
    }

    if (loadedContent === undefined) {
      return {
        filepath,
        config: undefined,
        isEmpty: true
      };
    }

    return {
      config: loadedContent,
      filepath
    };
  }

  validateFilePath(filepath) {
    if (!filepath) {
      throw new Error('load must pass a non-empty string');
    }
  }

}

exports.ExplorerBase = ExplorerBase;

function nextDirUp(dir) {
  return _path.default.dirname(dir);
}

function getExtensionDescription(filepath) {
  const ext = _path.default.extname(filepath);

  return ext ? `extension "${ext}"` : 'files without extensions';
}
//# sourceMappingURL=ExplorerBase.js.map