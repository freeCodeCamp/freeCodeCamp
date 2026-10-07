"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAsset = createAsset;
exports.createAssetIdFromOptions = createAssetIdFromOptions;
exports.generateFromAST = generateFromAST;
exports.getInvalidationHash = getInvalidationHash;
exports.getInvalidationId = getInvalidationId;

function _stream() {
  const data = require("stream");

  _stream = function () {
    return data;
  };

  return data;
}

function _logger() {
  const data = require("@parcel/logger");

  _logger = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _CommittedAsset = _interopRequireDefault(require("./CommittedAsset"));

var _UncommittedAsset = _interopRequireDefault(require("./UncommittedAsset"));

var _loadParcelPlugin = _interopRequireDefault(require("./loadParcelPlugin"));

var _Asset = require("./public/Asset");

var _PluginOptions = _interopRequireDefault(require("./public/PluginOptions"));

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

var _utils2 = require("./utils");

var _buildCache = require("./buildCache");

var _projectPath = require("./projectPath");

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAssetIdFromOptions(options) {
  var _options$uniqueKey, _options$pipeline, _options$query;

  let uniqueKey = (_options$uniqueKey = options.uniqueKey) !== null && _options$uniqueKey !== void 0 ? _options$uniqueKey : '';
  let idBase = options.idBase != null ? options.idBase : (0, _projectPath.fromProjectPathRelative)(options.filePath);
  return (0, _hash().hashString)(idBase + options.type + options.env.id + uniqueKey + ':' + ((_options$pipeline = options.pipeline) !== null && _options$pipeline !== void 0 ? _options$pipeline : '') + ':' + ((_options$query = options.query) !== null && _options$query !== void 0 ? _options$query : ''));
}

function createAsset(projectRoot, options) {
  var _options$committed, _options$isBundleSpli, _options$sideEffects;

  return {
    id: options.id != null ? options.id : createAssetIdFromOptions(options),
    committed: (_options$committed = options.committed) !== null && _options$committed !== void 0 ? _options$committed : false,
    hash: options.hash,
    filePath: options.filePath,
    query: options.query,
    bundleBehavior: options.bundleBehavior ? _types.BundleBehavior[options.bundleBehavior] : null,
    isBundleSplittable: (_options$isBundleSpli = options.isBundleSplittable) !== null && _options$isBundleSpli !== void 0 ? _options$isBundleSpli : true,
    type: options.type,
    contentKey: options.contentKey,
    mapKey: options.mapKey,
    astKey: options.astKey,
    astGenerator: options.astGenerator,
    dependencies: options.dependencies || new Map(),
    isSource: options.isSource,
    outputHash: options.outputHash,
    pipeline: options.pipeline,
    env: options.env,
    meta: options.meta || {},
    stats: options.stats,
    symbols: options.symbols && new Map([...options.symbols].map(([k, v]) => [k, {
      local: v.local,
      meta: v.meta,
      loc: (0, _utils2.toInternalSourceLocation)(projectRoot, v.loc)
    }])),
    sideEffects: (_options$sideEffects = options.sideEffects) !== null && _options$sideEffects !== void 0 ? _options$sideEffects : true,
    uniqueKey: options.uniqueKey,
    plugin: options.plugin,
    configPath: options.configPath,
    configKeyPath: options.configKeyPath
  };
}

const generateResults = new WeakMap();

function generateFromAST(asset) {
  let output = generateResults.get(asset.value);

  if (output == null) {
    output = _generateFromAST(asset);
    generateResults.set(asset.value, output);
  }

  return output;
}

async function _generateFromAST(asset) {
  var _plugin$generate;

  let ast = await asset.getAST();

  if (ast == null) {
    throw new Error('Asset has no AST');
  }

  let pluginName = (0, _nullthrows().default)(asset.value.plugin);
  let {
    plugin
  } = await (0, _loadParcelPlugin.default)(pluginName, (0, _projectPath.fromProjectPath)(asset.options.projectRoot, (0, _nullthrows().default)(asset.value.configPath)), (0, _nullthrows().default)(asset.value.configKeyPath), asset.options);
  let generate = (_plugin$generate = plugin.generate) === null || _plugin$generate === void 0 ? void 0 : _plugin$generate.bind(plugin);

  if (!generate) {
    throw new Error(`${pluginName} does not have a generate method`);
  }

  let {
    content,
    map
  } = await generate({
    asset: new _Asset.Asset(asset),
    ast,
    options: new _PluginOptions.default(asset.options),
    logger: new (_logger().PluginLogger)({
      origin: pluginName
    })
  });
  let mapBuffer = map === null || map === void 0 ? void 0 : map.toBuffer(); // Store the results in the cache so we can avoid generating again next time

  await Promise.all([asset.options.cache.setStream((0, _nullthrows().default)(asset.value.contentKey), (0, _utils().blobToStream)(content)), mapBuffer != null && asset.options.cache.setBlob((0, _nullthrows().default)(asset.value.mapKey), mapBuffer)]);
  return {
    content: content instanceof _stream().Readable ? asset.options.cache.getStream((0, _nullthrows().default)(asset.value.contentKey)) : content,
    map
  };
}

function getInvalidationId(invalidation) {
  switch (invalidation.type) {
    case 'file':
      return 'file:' + (0, _projectPath.fromProjectPathRelative)(invalidation.filePath);

    case 'env':
      return 'env:' + invalidation.key;

    case 'option':
      return 'option:' + invalidation.key;

    default:
      throw new Error('Unknown invalidation type: ' + invalidation.type);
  }
}

const hashCache = (0, _buildCache.createBuildCache)();

async function getInvalidationHash(invalidations, options) {
  if (invalidations.length === 0) {
    return '';
  }

  let sortedInvalidations = invalidations.slice().sort((a, b) => getInvalidationId(a) < getInvalidationId(b) ? -1 : 1);
  let hashes = '';

  for (let invalidation of sortedInvalidations) {
    switch (invalidation.type) {
      case 'file':
        {
          // Only recompute the hash of this file if we haven't seen it already during this build.
          let fileHash = hashCache.get(invalidation.filePath);

          if (fileHash == null) {
            fileHash = (0, _utils().hashFile)(options.inputFS, (0, _projectPath.fromProjectPath)(options.projectRoot, invalidation.filePath));
            hashCache.set(invalidation.filePath, fileHash);
          }

          hashes += await fileHash;
          break;
        }

      case 'env':
        hashes += invalidation.key + ':' + (options.env[invalidation.key] || '');
        break;

      case 'option':
        hashes += invalidation.key + ':' + (0, _utils2.hashFromOption)(options[invalidation.key]);
        break;

      default:
        throw new Error('Unknown invalidation type: ' + invalidation.type);
    }
  }

  return (0, _hash().hashString)(hashes);
}