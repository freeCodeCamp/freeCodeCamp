"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.loadInternalPlugins = loadInternalPlugins;
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _uniqWith2 = _interopRequireDefault(require("lodash/uniqWith"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _path = _interopRequireDefault(require("path"));
var _redux = require("../../redux");
var _processPlugin = require("./process-plugin");
var _createId = require("./utils/create-id");
var _createHash = require("./utils/create-hash");
var _compileGatsbyFiles = require("../../utils/parcel/compile-gatsby-files");
const TYPESCRIPT_PLUGIN_NAME = `gatsby-plugin-typescript`;
function loadInternalPlugins(config = {}, rootDir) {
  // Instantiate plugins.
  const plugins = [];
  const configuredPluginNames = new Set();

  // Add internal plugins
  const internalPlugins = [`../../internal-plugins/dev-404-page`, `../../internal-plugins/load-babel-config`, `../../internal-plugins/internal-data-bridge`, `../../internal-plugins/prod-404-500`, `../../internal-plugins/webpack-theme-component-shadowing`, `../../internal-plugins/bundle-optimisations`, `../../internal-plugins/functions`].filter(Boolean);
  internalPlugins.forEach(relPath => {
    const absPath = _path.default.join(__dirname, relPath);
    plugins.push((0, _processPlugin.processPlugin)(absPath, rootDir));
  });

  // Add plugins from the site config.
  if (config.plugins) {
    config.plugins.forEach(plugin => {
      const processedPlugin = (0, _processPlugin.processPlugin)(plugin, rootDir);
      plugins.push(processedPlugin);
      configuredPluginNames.add(processedPlugin.name);
    });
  }

  // the order of all of these page-creators matters. The "last plugin wins",
  // so the user's site comes last, and each page-creator instance has to
  // match the plugin definition order before that. This works fine for themes
  // because themes have already been added in the proper order to the plugins
  // array
  plugins.forEach(plugin => {
    plugins.push((0, _processPlugin.processPlugin)({
      resolve: require.resolve(`gatsby-plugin-page-creator`),
      options: {
        path: (0, _gatsbyCoreUtils.slash)(_path.default.join(plugin.resolve, `src/pages`)),
        pathCheck: false
      }
    }, rootDir));
  });

  // Support Typescript by default but allow users to override it
  if (!configuredPluginNames.has(TYPESCRIPT_PLUGIN_NAME)) {
    const processedTypeScriptPlugin = (0, _processPlugin.processPlugin)({
      resolve: require.resolve(TYPESCRIPT_PLUGIN_NAME),
      options: {
        // TODO(@mxstbr): Do not hard-code these defaults but infer them from the
        // pluginOptionsSchema of gatsby-plugin-typescript
        allExtensions: false,
        isTSX: false,
        jsxPragma: `React`
      }
    }, rootDir);
    plugins.push(processedTypeScriptPlugin);
  }

  // Add the site's default "plugin" i.e. gatsby-x files in root of site.
  plugins.push({
    resolve: (0, _gatsbyCoreUtils.slash)(process.cwd()),
    id: (0, _createId.createPluginId)(`default-site-plugin`),
    name: `default-site-plugin`,
    version: (0, _createHash.createFileContentHash)(process.cwd(), `gatsby-*`),
    pluginOptions: {
      plugins: []
    },
    ...(0, _compileGatsbyFiles.getResolvedFieldsForPlugin)(rootDir, `default-site-plugin`)
  });
  const program = _redux.store.getState().program;

  // default options for gatsby-plugin-page-creator
  let pageCreatorOptions = {
    path: (0, _gatsbyCoreUtils.slash)(_path.default.join(program.directory, `src/pages`)),
    pathCheck: false
  };
  if (config.plugins) {
    const pageCreatorPlugin = config.plugins.find(plugin => typeof plugin !== `string` && plugin.resolve === `gatsby-plugin-page-creator` && (0, _gatsbyCoreUtils.slash)(plugin.options && plugin.options.path || ``) === (0, _gatsbyCoreUtils.slash)(_path.default.join(program.directory, `src/pages`)));
    if (pageCreatorPlugin) {
      // override the options if there are any user specified options
      pageCreatorOptions = pageCreatorPlugin.options;
    }
  }
  const processedPageCreatorPlugin = (0, _processPlugin.processPlugin)({
    resolve: require.resolve(`gatsby-plugin-page-creator`),
    options: pageCreatorOptions
  }, rootDir);
  plugins.push(processedPageCreatorPlugin);

  // Partytown plugin collects usage of <Script strategy={"off-main-thread"} />
  // in `wrapRootElement`, so we have to make sure it's the last one running to be able to
  // collect scripts that users might inject in their `wrapRootElement`
  plugins.push((0, _processPlugin.processPlugin)(_path.default.join(__dirname, `../../internal-plugins/partytown`), rootDir));
  const uniquePlugins = (0, _uniqWith2.default)(plugins, _isEqual2.default);
  return uniquePlugins;
}
//# sourceMappingURL=load-internal-plugins.js.map