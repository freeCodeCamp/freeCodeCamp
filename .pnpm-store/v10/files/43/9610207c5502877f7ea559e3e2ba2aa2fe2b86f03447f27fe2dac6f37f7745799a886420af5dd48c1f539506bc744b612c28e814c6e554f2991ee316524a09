"use strict";

exports.__esModule = true;
exports.getPluginInstance = getPluginInstance;
var _pathUtils = require("./path-utils");
const pluginInstances = new Map();
function getPluginInstance(pluginOptions) {
  let pluginInstance = pluginInstances.get(pluginOptions.path);
  if (!pluginInstance) {
    pluginInstance = {
      changedNodesSinceLastPageCreation: {
        created: new Map(),
        deleted: new Map()
      },
      trackedTypes: new Map(),
      nodeIdToPagePath: new Map(),
      knownPagePaths: new Set(),
      templateFileRemoved(absolutePath) {
        const nodeType = (0, _pathUtils.extractModel)(absolutePath);
        if (nodeType) {
          const absolutePaths = this.trackedTypes.get(nodeType);
          if (absolutePaths) {
            absolutePaths.delete(absolutePath);
            if (absolutePaths.size === 0) {
              this.trackedTypes.delete(nodeType);
            }
          }
        }
        for (const [nodeId, templatesToPagePaths] of this.nodeIdToPagePath.entries()) {
          const pagePaths = templatesToPagePaths.get(absolutePath);
          if (pagePaths) {
            for (const pagePath of pagePaths) {
              this.knownPagePaths.delete(pagePath);
            }
            templatesToPagePaths.delete(absolutePath);
            if (templatesToPagePaths.size === 0) {
              this.nodeIdToPagePath.delete(nodeId);
            }
          }
        }
      }
    };
    pluginInstances.set(pluginOptions.path, pluginInstance);
  }
  return pluginInstance;
}