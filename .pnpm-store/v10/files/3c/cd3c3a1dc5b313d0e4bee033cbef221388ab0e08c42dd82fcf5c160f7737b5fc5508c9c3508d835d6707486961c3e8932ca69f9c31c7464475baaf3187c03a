"use strict";

exports.__esModule = true;
exports.createPagesFromChangedNodes = createPagesFromChangedNodes;
var _trackedNodesState = require("./tracked-nodes-state");
async function createPagesFromChangedNodes({
  actions
}, pluginOptions) {
  // Loop over deleted/created nodes and delete nodes and create nodes
  // we haven't seen before and then reset arrays.
  const pluginInstance = (0, _trackedNodesState.getPluginInstance)(pluginOptions);
  if (pluginInstance.trackedTypes.size === 0) {
    return;
  }
  if (!pluginInstance.createAPageFromNode) {
    throw new Error(`Expected pluginInstance.createAPageFromNode to be defined`);
  }
  if (!pluginInstance.deletePagesCreateFromNode) {
    throw new Error(`Expected pluginInstance.deletePagesCreateFromNode to be defined`);
  }
  if (!pluginInstance.resolveFields) {
    throw new Error(`Expected pluginInstance.resolveFields to be defined`);
  }
  if (!pluginInstance.getPathFromAResolvedNode) {
    throw new Error(`Expected pluginInstance.getPathFromAResolvedNode to be defined`);
  }
  for (const {
    id
  } of pluginInstance.changedNodesSinceLastPageCreation.deleted.values()) {
    pluginInstance.deletePagesCreateFromNode(id);
  }
  const nodesToResolve = new Map();
  for (const {
    id,
    type
  } of pluginInstance.changedNodesSinceLastPageCreation.created.values()) {
    if (pluginInstance.trackedTypes.has(type)) {
      const absolutePaths = pluginInstance.trackedTypes.get(type);
      if (absolutePaths) {
        for (const absolutePath of absolutePaths) {
          let nodeIdsForTemplate = nodesToResolve.get(absolutePath);
          if (!nodeIdsForTemplate) {
            nodeIdsForTemplate = new Set();
            nodesToResolve.set(absolutePath, nodeIdsForTemplate);
          }
          nodeIdsForTemplate.add(id);
        }
      }
    }
  }
  for (const [absolutePath, nodeIds] of nodesToResolve.entries()) {
    const resolvedNodes = await pluginInstance.resolveFields(Array.from(nodeIds), absolutePath);
    for (const node of resolvedNodes) {
      var _pluginInstance$nodeI;
      const path = await pluginInstance.getPathFromAResolvedNode({
        node,
        absolutePath
      });
      const previousPath = (_pluginInstance$nodeI = pluginInstance.nodeIdToPagePath.get(node.id)) === null || _pluginInstance$nodeI === void 0 ? void 0 : _pluginInstance$nodeI.get(absolutePath);
      if (previousPath !== path) {
        if (previousPath) {
          var _pluginInstance$nodeI2;
          actions.deletePage({
            path: previousPath,
            component: absolutePath
          });
          (_pluginInstance$nodeI2 = pluginInstance.nodeIdToPagePath.get(node.id)) === null || _pluginInstance$nodeI2 === void 0 ? void 0 : _pluginInstance$nodeI2.delete(absolutePath);
          pluginInstance.knownPagePaths.delete(previousPath);
        }
        pluginInstance.createAPageFromNode({
          node,
          absolutePath
        });
      }
    }
  }

  // clear changed nodes
  pluginInstance.changedNodesSinceLastPageCreation = {
    created: new Map(),
    deleted: new Map()
  };
}