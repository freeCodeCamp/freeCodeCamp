"use strict";

exports.__esModule = true;
exports.createPluginId = void 0;
var _createNodeId = require("../../../utils/create-node-id");
/**
 * Make sure key is unique to plugin options. E.g. there could
 * be multiple source-filesystem plugins, with different names
 * (docs, blogs).
 *
 * @param name Name of the plugin
 * @param pluginObject Object of the plugin
 */
const createPluginId = (name, pluginObject = null) => (0, _createNodeId.createNodeId)(name + (pluginObject ? JSON.stringify(pluginObject.options) : ``), `Plugin`);
exports.createPluginId = createPluginId;
//# sourceMappingURL=create-id.js.map