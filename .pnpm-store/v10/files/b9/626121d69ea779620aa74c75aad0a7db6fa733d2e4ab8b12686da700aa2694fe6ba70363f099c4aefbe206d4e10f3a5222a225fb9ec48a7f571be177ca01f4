"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.startPluginRunner = void 0;
var _index = require("./index");
var _apiRunnerNode = _interopRequireDefault(require("../utils/api-runner-node"));
const startPluginRunner = () => {
  const plugins = _index.store.getState().flattenedPlugins;
  const pluginsImplementingOnCreatePage = plugins.filter(plugin => plugin.nodeAPIs.includes(`onCreatePage`));
  const pluginsImplementingOnCreateNode = plugins.filter(plugin => plugin.nodeAPIs.includes(`onCreateNode`));
  if (pluginsImplementingOnCreatePage.length > 0) {
    _index.emitter.on(`CREATE_PAGE`, action => {
      const page = action.payload;
      (0, _apiRunnerNode.default)(`onCreatePage`, {
        page,
        traceId: action.traceId,
        parentSpan: action.parentSpan
      }, {
        pluginSource: action.plugin.name,
        activity: action.activity
      });
    });
  }

  // We make page nodes outside of the normal action for speed so we manually
  // call onCreateNode here for SitePage nodes.
  if (pluginsImplementingOnCreateNode.length > 0) {
    _index.emitter.on(`CREATE_NODE`, action => {
      const node = action.payload;
      if (node.internal.type === `SitePage`) {
        (0, _apiRunnerNode.default)(`onCreateNode`, {
          node,
          parentSpan: action.parentSpan,
          traceTags: {
            nodeId: node.id,
            nodeType: node.internal.type
          }
        });
      }
    });
  }
};
exports.startPluginRunner = startPluginRunner;
//# sourceMappingURL=plugin-runner.js.map