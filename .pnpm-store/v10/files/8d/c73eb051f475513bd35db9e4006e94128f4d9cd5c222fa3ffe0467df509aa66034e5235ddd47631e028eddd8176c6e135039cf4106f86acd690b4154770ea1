"use strict";

exports.__esModule = true;
exports.hasNodeChanged = exports.getNodeAndSavePathDependency = void 0;
exports.loadNodeContent = loadNodeContent;
var _addPageDependency = require("../redux/actions/add-page-dependency");
var _datastore = require("../datastore");
var _redux = require("../redux");
/**
 * Determine if node has changed.
 */
const hasNodeChanged = (id, digest) => {
  const node = (0, _datastore.getNode)(id);
  if (!node) {
    return true;
  } else {
    return node.internal.contentDigest !== digest;
  }
};

/**
 * Get node and save path dependency.
 */
exports.hasNodeChanged = hasNodeChanged;
const getNodeAndSavePathDependency = (id, path) => {
  const node = (0, _datastore.getNode)(id);
  if (!node) {
    console.error(`getNodeAndSavePathDependency failed for node id: ${id} as it was not found in cache`);
    return undefined;
  }
  (0, _addPageDependency.createPageDependency)({
    path,
    nodeId: id
  });
  return node;
};

/**
 * Get content for a node from the plugin that created it.
 */
exports.getNodeAndSavePathDependency = getNodeAndSavePathDependency;
async function loadNodeContent(node) {
  if (typeof node.internal.content === `string`) {
    return node.internal.content;
  }

  // Load plugin's loader function
  const plugin = _redux.store.getState().flattenedPlugins.find(plug => plug.name === node.internal.owner);
  if (!plugin) {
    throw new Error(`Could not find owner plugin of node for loadNodeContent with owner \`${node.internal.owner}\``);
  }
  const {
    loadNodeContent
  } = require(plugin.resolve);
  if (!loadNodeContent) {
    throw new Error(`Could not find function loadNodeContent for plugin ${plugin.name}`);
  }
  const content = await loadNodeContent(node);
  node.internal.content = content;
  return content;
}
//# sourceMappingURL=nodes.js.map