"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.loadPlugins = loadPlugins;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _redux = require("../../redux");
var nodeAPIs = _interopRequireWildcard(require("../../utils/api-node-docs"));
var browserAPIs = _interopRequireWildcard(require("../../utils/api-browser-docs"));
var _apiSsrDocs = _interopRequireDefault(require("../../../cache-dir/api-ssr-docs"));
var _loadInternalPlugins = require("./load-internal-plugins");
var _validate = require("./validate");
var _normalize = require("./utils/normalize");
var _getApi = require("./utils/get-api");
var _flattenPlugins = require("./utils/flatten-plugins");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
async function loadPlugins(rawConfig, rootDir) {
  // Turn all strings in plugins: [`...`] into the { resolve: ``, options: {} } form
  const config = (0, _normalize.normalizeConfig)(rawConfig);

  // Show errors for invalid plugin configuration
  await (0, _validate.validateConfigPluginsOptions)(config, rootDir);
  const currentAPIs = (0, _getApi.getAPI)({
    browser: browserAPIs,
    node: nodeAPIs,
    ssr: _apiSsrDocs.default
  });

  // Collate internal plugins, site config plugins, site default plugins
  const pluginInfos = (0, _loadInternalPlugins.loadInternalPlugins)(config, rootDir);

  // Create a flattened array of the plugins
  const pluginArray = (0, _flattenPlugins.flattenPlugins)(pluginInfos);
  const {
    disablePlugins
  } = _redux.store.getState().program;
  const pluginArrayWithoutDisabledPlugins = pluginArray.filter(plugin => {
    const disabledInfo = disablePlugins === null || disablePlugins === void 0 ? void 0 : disablePlugins.find(entry => entry.name === plugin.name);
    if (disabledInfo) {
      if (!process.env.GATSBY_WORKER_ID) {
        // show this warning only once in main process
        _reporter.default.warn(`Disabling plugin "${plugin.name}":\n${disabledInfo.reasons.map(line => ` - ${line}`).join(`\n`)}`);
      }
      return false;
    }
    return true;
  });

  // Work out which plugins use which APIs, including those which are not
  // valid Gatsby APIs, aka 'badExports'
  let {
    flattenedPlugins,
    badExports
  } = await (0, _validate.collatePluginAPIs)({
    currentAPIs,
    flattenedPlugins: pluginArrayWithoutDisabledPlugins,
    rootDir
  });

  // Show errors for any non-Gatsby APIs exported from plugins
  await (0, _validate.handleBadExports)({
    currentAPIs,
    badExports
  });

  // Show errors when ReplaceRenderer has been implemented multiple times
  flattenedPlugins = (0, _validate.handleMultipleReplaceRenderers)({
    flattenedPlugins
  });

  // If we get this far, everything looks good. Update the store
  _redux.store.dispatch({
    type: `SET_SITE_FLATTENED_PLUGINS`,
    payload: flattenedPlugins
  });
  return flattenedPlugins;
}
//# sourceMappingURL=index.js.map