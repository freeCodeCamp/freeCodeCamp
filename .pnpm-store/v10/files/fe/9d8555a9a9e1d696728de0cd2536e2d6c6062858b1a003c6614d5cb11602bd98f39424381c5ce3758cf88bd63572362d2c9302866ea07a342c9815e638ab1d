"use strict";

exports.__esModule = true;
exports.flattenPlugins = void 0;
// Create a "flattened" array of plugins with all subplugins
// brought to the top-level. This simplifies running gatsby-* files
// for subplugins.
const flattenPlugins = plugins => {
  const flattened = [];
  const extractPlugins = plugin => {
    if (plugin.subPluginPaths) {
      for (const subPluginPath of plugin.subPluginPaths) {
        // @pieh:
        // subPluginPath can look like someOption.randomFieldThatIsMarkedAsSubplugins
        // Reason for doing stringified path with . separator was that it was just easier to prevent duplicates
        // in subPluginPaths array (as each subplugin in the gatsby-config would add subplugin path).
        const segments = subPluginPath.split(`.`);
        let roots = [plugin.pluginOptions];
        for (const segment of segments) {
          if (segment === `[]`) {
            roots = roots.flat();
          } else {
            roots = roots.map(root => root[segment]);
          }
        }
        roots = roots.flat();
        roots.forEach(subPlugin => {
          flattened.push(subPlugin);
          extractPlugins(subPlugin);
        });
      }
    }
  };
  plugins.forEach(plugin => {
    flattened.push(plugin);
    extractPlugins(plugin);
  });
  return flattened;
};
exports.flattenPlugins = flattenPlugins;
//# sourceMappingURL=flatten-plugins.js.map