"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createParcelBuildRequest;

var _BundleGraphRequest = _interopRequireDefault(require("./BundleGraphRequest"));

var _WriteBundlesRequest = _interopRequireDefault(require("./WriteBundlesRequest"));

var _utils = require("../utils");

var _dumpGraphToGraphViz = _interopRequireDefault(require("../dumpGraphToGraphViz"));

var _BundleGraph = require("../BundleGraph");

var _ReporterRunner = require("../ReporterRunner");

var _BundleGraph2 = _interopRequireDefault(require("../public/BundleGraph"));

var _Bundle = require("../public/Bundle");

var _Asset = require("../public/Asset");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createParcelBuildRequest(input) {
  return {
    type: 'parcel_build_request',
    id: 'parcel_build_request',
    run,
    input
  };
}

async function run({
  input,
  api,
  options
}) {
  let {
    optionsRef,
    requestedAssetIds,
    signal
  } = input;
  let bundleGraphRequest = (0, _BundleGraphRequest.default)({
    optionsRef,
    requestedAssetIds,
    signal
  });
  let {
    bundleGraph,
    changedAssets,
    assetRequests
  } = await api.runRequest(bundleGraphRequest, {
    force: options.shouldBuildLazily && requestedAssetIds.size > 0
  }); // $FlowFixMe Added in Flow 0.121.0 upgrade in #4381 (Windows only)

  (0, _dumpGraphToGraphViz.default)(bundleGraph._graph, 'BundleGraph', _BundleGraph.bundleGraphEdgeTypes);
  await (0, _ReporterRunner.report)({
    type: 'buildProgress',
    phase: 'bundled',
    bundleGraph: new _BundleGraph2.default(bundleGraph, (bundle, bundleGraph, options) => _Bundle.NamedBundle.get(bundle, bundleGraph, options), options),
    changedAssets: new Map(Array.from(changedAssets).map(([id, asset]) => [id, (0, _Asset.assetFromValue)(asset, options)]))
  });
  let writeBundlesRequest = (0, _WriteBundlesRequest.default)({
    bundleGraph,
    optionsRef
  });
  let bundleInfo = await api.runRequest(writeBundlesRequest);
  (0, _utils.assertSignalNotAborted)(signal);
  return {
    bundleGraph,
    bundleInfo,
    changedAssets,
    assetRequests
  };
}