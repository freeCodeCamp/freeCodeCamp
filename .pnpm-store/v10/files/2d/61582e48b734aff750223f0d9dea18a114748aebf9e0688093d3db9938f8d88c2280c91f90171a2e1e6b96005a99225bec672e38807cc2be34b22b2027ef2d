"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
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

var _Environment = _interopRequireDefault(require("./Environment"));

var _projectPath = require("../projectPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const internalConfigToConfig = new (_utils().DefaultWeakMap)(() => new WeakMap());

class PublicConfig {
  #config
  /*: Config */
  ;
  #pkg
  /*: ?PackageJSON */
  ;
  #pkgFilePath
  /*: ?FilePath */
  ;
  #options
  /*: ParcelOptions */
  ;

  constructor(config, options) {
    let existing = internalConfigToConfig.get(options).get(config);

    if (existing != null) {
      return existing;
    }

    this.#config = config;
    this.#options = options;
    internalConfigToConfig.get(options).set(config, this);
    return this;
  }

  get env() {
    return new _Environment.default(this.#config.env, this.#options);
  }

  get searchPath() {
    return (0, _projectPath.fromProjectPath)(this.#options.projectRoot, this.#config.searchPath);
  }

  get result() {
    return this.#config.result;
  }

  get isSource() {
    return this.#config.isSource;
  } // $FlowFixMe


  setResult(result) {
    this.#config.result = result;
  }

  setCacheKey(cacheKey) {
    this.#config.cacheKey = cacheKey;
  }

  invalidateOnFileChange(filePath) {
    this.#config.invalidateOnFileChange.add((0, _projectPath.toProjectPath)(this.#options.projectRoot, filePath));
  }

  addDevDependency(devDep) {
    var _devDep$additionalInv;

    this.#config.devDeps.push({ ...devDep,
      resolveFrom: (0, _projectPath.toProjectPath)(this.#options.projectRoot, devDep.resolveFrom),
      additionalInvalidations: (_devDep$additionalInv = devDep.additionalInvalidations) === null || _devDep$additionalInv === void 0 ? void 0 : _devDep$additionalInv.map(i => ({ ...i,
        resolveFrom: (0, _projectPath.toProjectPath)(this.#options.projectRoot, i.resolveFrom)
      }))
    });
  }

  invalidateOnFileCreate(invalidation) {
    if (invalidation.glob != null) {
      // $FlowFixMe
      this.#config.invalidateOnFileCreate.push(invalidation);
    } else if (invalidation.filePath != null) {
      this.#config.invalidateOnFileCreate.push({
        filePath: (0, _projectPath.toProjectPath)(this.#options.projectRoot, invalidation.filePath)
      });
    } else {
      (0, _assert().default)(invalidation.aboveFilePath != null);
      this.#config.invalidateOnFileCreate.push({
        // $FlowFixMe
        fileName: invalidation.fileName,
        aboveFilePath: (0, _projectPath.toProjectPath)(this.#options.projectRoot, invalidation.aboveFilePath)
      });
    }
  }

  invalidateOnEnvChange(env) {
    this.#config.invalidateOnEnvChange.add(env);
  }

  invalidateOnStartup() {
    this.#config.invalidateOnStartup = true;
  }

  invalidateOnBuild() {
    this.#config.invalidateOnBuild = true;
  }

  async getConfigFrom(searchPath, fileNames, options) {
    let packageKey = options === null || options === void 0 ? void 0 : options.packageKey;

    if (packageKey != null) {
      let pkg = await this.getConfigFrom(searchPath, ['package.json']);

      if (pkg && pkg.contents[packageKey]) {
        return {
          contents: pkg.contents[packageKey],
          filePath: pkg.filePath
        };
      }
    }

    if (fileNames.length === 0) {
      return null;
    } // Invalidate when any of the file names are created above the search path.


    for (let fileName of fileNames) {
      this.invalidateOnFileCreate({
        fileName,
        aboveFilePath: searchPath
      });
    }

    let parse = options && options.parse;
    let conf = await (0, _utils().loadConfig)(this.#options.inputFS, searchPath, fileNames, this.#options.projectRoot, parse == null ? null : {
      parse
    });

    if (conf == null) {
      return null;
    }

    let configFilePath = conf.files[0].filePath;

    if (!options || !options.exclude) {
      this.invalidateOnFileChange(configFilePath);
    }

    return {
      contents: conf.config,
      filePath: configFilePath
    };
  }

  getConfig(filePaths, options) {
    return this.getConfigFrom(this.searchPath, filePaths, options);
  }

  async getPackage() {
    if (this.#pkg) {
      return this.#pkg;
    }

    let pkgConfig = await this.getConfig(['package.json']);

    if (!pkgConfig) {
      return null;
    }

    this.#pkg = pkgConfig.contents;
    this.#pkgFilePath = pkgConfig.filePath;
    return this.#pkg;
  }

}

exports.default = PublicConfig;