"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
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

function _logger() {
  const data = _interopRequireWildcard(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

var _ParcelConfig = _interopRequireDefault(require("./ParcelConfig"));

var _UncommittedAsset = _interopRequireDefault(require("./UncommittedAsset"));

var _assetUtils = require("./assetUtils");

var _Asset = require("./public/Asset");

var _PluginOptions = _interopRequireDefault(require("./public/PluginOptions"));

var _summarizeRequest = _interopRequireDefault(require("./summarizeRequest"));

var _projectPath = require("./projectPath");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Validation {
  allAssets = {};
  allValidators = {};

  constructor({
    config,
    dedicatedThread,
    options,
    requests,
    report,
    workerApi
  }) {
    this.dedicatedThread = dedicatedThread !== null && dedicatedThread !== void 0 ? dedicatedThread : false;
    this.options = options;
    this.parcelConfig = config;
    this.report = report;
    this.requests = requests;
    this.workerApi = workerApi;
  }

  async run() {
    let pluginOptions = new _PluginOptions.default(this.options);
    await this.buildAssetsAndValidators();
    await Promise.all(Object.keys(this.allValidators).map(async validatorName => {
      let assets = this.allAssets[validatorName];

      if (assets) {
        let plugin = this.allValidators[validatorName];
        let validatorLogger = new (_logger().PluginLogger)({
          origin: validatorName
        });
        let validatorResults = [];

        try {
          // If the plugin supports the single-threading validateAll method, pass all assets to it.
          if (plugin.validateAll && this.dedicatedThread) {
            validatorResults = await plugin.validateAll({
              assets: assets.map(asset => new _Asset.Asset(asset)),
              options: pluginOptions,
              logger: validatorLogger,
              resolveConfigWithPath: (configNames, assetFilePath) => (0, _utils().resolveConfig)(this.options.inputFS, assetFilePath, configNames, this.options.projectRoot)
            });
          } // Otherwise, pass the assets one-at-a-time
          else if (plugin.validate && !this.dedicatedThread) {
            await Promise.all(assets.map(async input => {
              let config = null;
              let publicAsset = new _Asset.Asset(input);

              if (plugin.getConfig) {
                config = await plugin.getConfig({
                  asset: publicAsset,
                  options: pluginOptions,
                  logger: validatorLogger,
                  resolveConfig: configNames => (0, _utils().resolveConfig)(this.options.inputFS, publicAsset.filePath, configNames, this.options.projectRoot)
                });
              }

              let validatorResult = await plugin.validate({
                asset: publicAsset,
                options: pluginOptions,
                config,
                logger: validatorLogger
              });
              validatorResults.push(validatorResult);
            }));
          }

          this.handleResults(validatorResults);
        } catch (e) {
          throw new (_diagnostic().default)({
            diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
              origin: validatorName
            })
          });
        }
      }
    }));
  }

  async buildAssetsAndValidators() {
    // Figure out what validators need to be run, and group the assets by the relevant validators.
    await Promise.all(this.requests.map(async request => {
      this.report({
        type: 'validation',
        filePath: (0, _projectPath.fromProjectPath)(this.options.projectRoot, request.filePath)
      });
      let asset = await this.loadAsset(request);
      let validators = await this.parcelConfig.getValidators(request.filePath);

      for (let validator of validators) {
        this.allValidators[validator.name] = validator.plugin;

        if (this.allAssets[validator.name]) {
          this.allAssets[validator.name].push(asset);
        } else {
          this.allAssets[validator.name] = [asset];
        }
      }
    }));
  }

  handleResults(validatorResults) {
    let warnings = [];
    let errors = [];
    validatorResults.forEach(result => {
      if (result) {
        warnings.push(...result.warnings);
        errors.push(...result.errors);
      }
    });

    if (errors.length > 0) {
      throw new (_diagnostic().default)({
        diagnostic: errors
      });
    }

    if (warnings.length > 0) {
      _logger().default.warn(warnings);
    }
  }

  async loadAsset(request) {
    let {
      filePath,
      env,
      code,
      sideEffects,
      query
    } = request;
    let {
      content,
      size,
      hash,
      isSource
    } = await (0, _summarizeRequest.default)(this.options.inputFS, {
      filePath: (0, _projectPath.fromProjectPath)(this.options.projectRoot, request.filePath)
    }); // If the transformer request passed code rather than a filename,
    // use a hash as the base for the id to ensure it is unique.

    let idBase = code != null ? hash : (0, _projectPath.fromProjectPathRelative)(filePath);
    return new _UncommittedAsset.default({
      idBase,
      value: (0, _assetUtils.createAsset)(this.options.projectRoot, {
        idBase,
        filePath: filePath,
        isSource,
        type: _path().default.extname((0, _projectPath.fromProjectPathRelative)(filePath)).slice(1),
        hash,
        query,
        env: env,
        stats: {
          time: 0,
          size
        },
        sideEffects: sideEffects
      }),
      options: this.options,
      content
    });
  }

}

exports.default = Validation;