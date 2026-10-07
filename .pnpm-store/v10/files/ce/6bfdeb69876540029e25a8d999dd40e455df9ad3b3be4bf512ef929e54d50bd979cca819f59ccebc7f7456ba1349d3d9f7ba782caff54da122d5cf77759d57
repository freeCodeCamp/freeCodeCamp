"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAssetRequest;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireDefault(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

var _ParcelConfigRequest = _interopRequireDefault(require("./ParcelConfigRequest"));

var _DevDepRequest = require("./DevDepRequest");

var _ConfigRequest = require("./ConfigRequest");

var _projectPath = require("../projectPath");

var _ReporterRunner = require("../ReporterRunner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAssetRequest(input) {
  return {
    type: 'asset_request',
    id: getId(input),
    run,
    input
  };
}

const type = 'asset_request';

function getId(input) {
  var _input$code, _input$pipeline, _input$query;

  // eslint-disable-next-line no-unused-vars
  let {
    optionsRef,
    ...hashInput
  } = input;
  return (0, _hash().hashString)(type + (0, _projectPath.fromProjectPathRelative)(input.filePath) + input.env.id + String(input.isSource) + String(input.sideEffects) + ((_input$code = input.code) !== null && _input$code !== void 0 ? _input$code : '') + ':' + ((_input$pipeline = input.pipeline) !== null && _input$pipeline !== void 0 ? _input$pipeline : '') + ':' + ((_input$query = input.query) !== null && _input$query !== void 0 ? _input$query : ''));
}

async function run({
  input,
  api,
  farm,
  invalidateReason,
  options
}) {
  (0, _ReporterRunner.report)({
    type: 'buildProgress',
    phase: 'transforming',
    filePath: (0, _projectPath.fromProjectPath)(options.projectRoot, input.filePath)
  });
  api.invalidateOnFileUpdate(input.filePath);
  let start = Date.now();
  let {
    optionsRef,
    ...rest
  } = input;
  let {
    cachePath
  } = (0, _nullthrows().default)(await api.runRequest((0, _ParcelConfigRequest.default)()));
  let previousDevDepRequests = new Map(await Promise.all(api.getSubRequests().filter(req => req.type === 'dev_dep_request').map(async req => [req.id, (0, _nullthrows().default)(await api.getRequestResult(req.id))])));
  let request = { ...rest,
    invalidateReason,
    // Add invalidations to the request if a node already exists in the graph.
    // These are used to compute the cache key for assets during transformation.
    invalidations: api.getInvalidations().filter(invalidation => {
      // Filter out invalidation node for the input file itself.
      return invalidation.type !== 'file' || invalidation.filePath !== input.filePath;
    }),
    devDeps: new Map([...previousDevDepRequests.entries()].filter(([id]) => api.canSkipSubrequest(id)).map(([, req]) => [`${req.specifier}:${(0, _projectPath.fromProjectPathRelative)(req.resolveFrom)}`, req.hash])),
    invalidDevDeps: await Promise.all([...previousDevDepRequests.entries()].filter(([id]) => !api.canSkipSubrequest(id)).flatMap(([, req]) => {
      var _req$additionalInvali;

      return [{
        specifier: req.specifier,
        resolveFrom: req.resolveFrom
      }, ...((_req$additionalInvali = req.additionalInvalidations) !== null && _req$additionalInvali !== void 0 ? _req$additionalInvali : []).map(i => ({
        specifier: i.specifier,
        resolveFrom: i.resolveFrom
      }))];
    }))
  };
  let {
    assets,
    configRequests,
    error,
    invalidations,
    invalidateOnFileCreate,
    devDepRequests
  } = await farm.createHandle('runTransform', input.isSingleChangeRebuild)({
    configCachePath: cachePath,
    optionsRef,
    request
  });
  let time = Date.now() - start;

  if (assets) {
    for (let asset of assets) {
      asset.stats.time = time;
    }
  }

  for (let invalidation of invalidateOnFileCreate) {
    api.invalidateOnFileCreate(invalidation);
  }

  for (let invalidation of invalidations) {
    switch (invalidation.type) {
      case 'file':
        api.invalidateOnFileUpdate(invalidation.filePath);
        api.invalidateOnFileDelete(invalidation.filePath);
        break;

      case 'env':
        api.invalidateOnEnvChange(invalidation.key);
        break;

      case 'option':
        api.invalidateOnOptionChange(invalidation.key);
        break;

      default:
        throw new Error(`Unknown invalidation type: ${invalidation.type}`);
    }
  }

  for (let devDepRequest of devDepRequests) {
    await (0, _DevDepRequest.runDevDepRequest)(api, devDepRequest);
  }

  for (let configRequest of configRequests) {
    await (0, _ConfigRequest.runConfigRequest)(api, configRequest);
  }

  if (error != null) {
    throw new (_diagnostic().default)({
      diagnostic: error
    });
  } else {
    return (0, _nullthrows().default)(assets);
  }
}