"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfigHash = getConfigHash;
exports.getConfigRequests = getConfigRequests;
exports.loadPluginConfig = loadPluginConfig;
exports.runConfigRequest = runConfigRequest;

var _serializer = require("../serializer.js");

function _logger() {
  const data = require("@parcel/logger");

  _logger = function () {
    return data;
  };

  return data;
}

var _PluginOptions = _interopRequireDefault(require("../public/PluginOptions"));

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

var _Config = _interopRequireDefault(require("../public/Config"));

var _utils = require("../utils");

var _assetUtils = require("../assetUtils");

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function loadPluginConfig(loadedPlugin, config, options) {
  let loadConfig = loadedPlugin.plugin.loadConfig;

  if (!loadConfig) {
    return;
  }

  try {
    config.result = await loadConfig({
      config: new _Config.default(config, options),
      options: new _PluginOptions.default((0, _utils.optionsProxy)(options, option => {
        config.invalidateOnOptionChange.add(option);
      })),
      logger: new (_logger().PluginLogger)({
        origin: loadedPlugin.name
      })
    });
  } catch (e) {
    throw new (_diagnostic().default)({
      diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
        origin: loadedPlugin.name
      })
    });
  }
}

async function runConfigRequest(api, configRequest) {
  let {
    invalidateOnFileChange,
    invalidateOnFileCreate,
    invalidateOnEnvChange,
    invalidateOnOptionChange,
    invalidateOnStartup,
    invalidateOnBuild
  } = configRequest; // If there are no invalidations, then no need to create a node.

  if (invalidateOnFileChange.size === 0 && invalidateOnFileCreate.length === 0 && invalidateOnOptionChange.size === 0 && !invalidateOnStartup && !invalidateOnBuild) {
    return;
  }

  await api.runRequest({
    id: 'config_request:' + configRequest.id,
    type: 'config_request',
    run: ({
      api
    }) => {
      for (let filePath of invalidateOnFileChange) {
        api.invalidateOnFileUpdate(filePath);
        api.invalidateOnFileDelete(filePath);
      }

      for (let invalidation of invalidateOnFileCreate) {
        api.invalidateOnFileCreate(invalidation);
      }

      for (let env of invalidateOnEnvChange) {
        api.invalidateOnEnvChange(env);
      }

      for (let option of invalidateOnOptionChange) {
        api.invalidateOnOptionChange(option);
      }

      if (invalidateOnStartup) {
        api.invalidateOnStartup();
      }

      if (invalidateOnBuild) {
        api.invalidateOnBuild();
      }
    },
    input: null
  });
}

async function getConfigHash(config, pluginName, options) {
  if (config.result == null) {
    return '';
  }

  let hash = new (_hash().Hash)();
  hash.writeString(config.id); // If there is no result hash set by the transformer, default to hashing the included
  // files if any, otherwise try to hash the config result itself.

  if (config.cacheKey == null) {
    if (config.invalidateOnFileChange.size > 0) {
      hash.writeString(await (0, _assetUtils.getInvalidationHash)([...config.invalidateOnFileChange].map(filePath => ({
        type: 'file',
        filePath
      })), options));
    } else if (config.result != null) {
      try {
        hash.writeBuffer((0, _serializer.serializeRaw)(config.result));
      } catch (err) {
        throw new (_diagnostic().default)({
          diagnostic: {
            message: 'Config result is not hashable because it contains non-serializable objects. Please use config.setCacheKey to set the hash manually.',
            origin: pluginName
          }
        });
      }
    }
  } else {
    var _config$cacheKey;

    hash.writeString((_config$cacheKey = config.cacheKey) !== null && _config$cacheKey !== void 0 ? _config$cacheKey : '');
  }

  return hash.finish();
}

function getConfigRequests(configs) {
  return configs.filter(config => {
    // No need to send to the graph if there are no invalidations.
    return config.invalidateOnFileChange.size > 0 || config.invalidateOnFileCreate.length > 0 || config.invalidateOnEnvChange.size > 0 || config.invalidateOnOptionChange.size > 0 || config.invalidateOnStartup || config.invalidateOnBuild;
  }).map(config => ({
    id: config.id,
    invalidateOnFileChange: config.invalidateOnFileChange,
    invalidateOnFileCreate: config.invalidateOnFileCreate,
    invalidateOnEnvChange: config.invalidateOnEnvChange,
    invalidateOnOptionChange: config.invalidateOnOptionChange,
    invalidateOnStartup: config.invalidateOnStartup,
    invalidateOnBuild: config.invalidateOnBuild
  }));
}