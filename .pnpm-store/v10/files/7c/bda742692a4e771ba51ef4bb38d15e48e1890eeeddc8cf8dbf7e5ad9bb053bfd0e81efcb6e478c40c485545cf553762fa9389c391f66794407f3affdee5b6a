"use strict";

exports.__esModule = true;
exports.statefulSourcePluginsReducer = void 0;
/**
 * Flags a source plugin as being "stateful" which means it manages its own data updates and Gatsby doesn't look for "stale" nodes after each `sourceNodes` run.
 */
const statefulSourcePluginsReducer = (statefulSourcePlugins = new Set(), action) => {
  switch (action.type) {
    case `ENABLE_STATEFUL_SOURCE_PLUGIN`:
      {
        statefulSourcePlugins.add(action.plugin.name);
        return statefulSourcePlugins;
      }
    default:
      return statefulSourcePlugins;
  }
};
exports.statefulSourcePluginsReducer = statefulSourcePluginsReducer;
//# sourceMappingURL=stateful-source-plugins.js.map