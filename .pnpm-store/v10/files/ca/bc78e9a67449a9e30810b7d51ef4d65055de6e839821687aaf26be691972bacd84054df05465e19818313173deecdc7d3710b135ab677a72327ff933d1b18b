"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.loadThemes = loadThemes;
var _uniqWith2 = _interopRequireDefault(require("lodash/uniqWith"));
var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _flattenDeep2 = _interopRequireDefault(require("lodash/flattenDeep"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var path = _interopRequireWildcard(require("path"));
var _mergeGatsbyConfig = require("../../utils/merge-gatsby-config");
var _bluebird = require("bluebird");
var _debug = _interopRequireDefault(require("debug"));
var _preferDefault = require("../prefer-default");
var _getConfigFile = require("../get-config-file");
var _resolvePlugin = require("../load-plugins/resolve-plugin");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const debug = (0, _debug.default)(`gatsby:load-themes`);
// get the gatsby-config file for a theme
const resolveTheme = async (themeSpec, configFileThatDeclaredTheme, isMainConfig = false, rootDir) => {
  const themeName = typeof themeSpec === `string` ? themeSpec : themeSpec.resolve;
  let themeDir;
  try {
    const scopedRequire = (0, _gatsbyCoreUtils.createRequireFromPath)(`${rootDir}/:internal:`);
    // theme is an node-resolvable module
    themeDir = path.dirname(scopedRequire.resolve(themeName));
  } catch (e) {
    let pathToLocalTheme;

    // only try to look for local theme in main site
    // local themes nested in other themes is potential source of problems:
    // because those are not hosted by npm, there is potential for multiple
    // local themes with same name that do different things and name being
    // main identifier that Gatsby uses right now, it's safer not to support it for now.
    if (isMainConfig) {
      pathToLocalTheme = path.join(rootDir, `plugins`, themeName);
      // is a local plugin OR it doesn't exist
      try {
        const {
          resolve
        } = (0, _resolvePlugin.resolvePlugin)(themeName, rootDir);
        themeDir = resolve;
      } catch (localErr) {
        _reporter.default.panic(`Failed to resolve ${themeName}`, localErr);
      }
    }
    if (!themeDir) {
      const nodeResolutionPaths = module.paths.map(p => path.join(p, themeName));
      _reporter.default.panic({
        id: `10226`,
        context: {
          themeName,
          configFilePath: configFileThatDeclaredTheme,
          pathToLocalTheme,
          nodeResolutionPaths
        }
      });
    }
  }
  const {
    configModule,
    configFilePath
  } = await (0, _getConfigFile.getConfigFile)(themeDir, `gatsby-config`);
  const theme = (0, _preferDefault.preferDefault)(configModule);

  // if theme is a function, call it with the themeConfig
  const themeConfig = (0, _isFunction2.default)(theme) ? theme(typeof themeSpec === `string` ? {} : themeSpec.options) : theme;
  return {
    themeName,
    themeConfig,
    themeSpec,
    themeDir,
    parentDir: rootDir,
    configFilePath
  };
};

// single iteration of a recursive function that resolve parent themes
// It's recursive because we support child themes declaring parents and
// have to resolve all the way `up the tree` of parent/children relationships
//
// Theoretically, there could be an infinite loop here but in practice there is
// no use case for a loop so I expect that to only happen if someone is very
// off track and creating their own set of themes
const processTheme = ({
  themeName,
  themeConfig,
  themeSpec,
  themeDir,
  configFilePath
}, {
  rootDir
}) => {
  const themesList = themeConfig && themeConfig.plugins;
  // Gatsby themes don't have to specify a gatsby-config.js (they might only use gatsby-node, etc)
  // in this case they're technically plugins, but we should support it anyway
  // because we can't guarantee which files theme creators create first
  if (themeConfig && themesList) {
    // for every parent theme a theme defines, resolve the parent's
    // gatsby config and return it in order [parentA, parentB, child]
    return (0, _bluebird.mapSeries)(themesList, async spec => {
      const themeObj = await resolveTheme(spec, configFilePath, false, themeDir);
      return processTheme(themeObj, {
        rootDir: themeDir
      });
    }).then(arr => (0, _flattenDeep2.default)(arr.concat([{
      themeName,
      themeConfig,
      themeSpec,
      themeDir,
      parentDir: rootDir
    }])));
  } else {
    // if a theme doesn't define additional themes, return the original theme
    return Promise.resolve([{
      themeName,
      themeConfig,
      themeSpec,
      themeDir,
      parentDir: rootDir
    }]);
  }
};
function normalizePluginEntry(plugin, parentDir) {
  return {
    resolve: typeof plugin === `string` ? plugin : plugin.resolve,
    options: typeof plugin === `string` ? {} : plugin.options || {},
    parentDir
  };
}
async function loadThemes(config, {
  configFilePath,
  rootDir
}) {
  const themesA = await (0, _bluebird.mapSeries)(config.plugins || [], async themeSpec => {
    const themeObj = await resolveTheme(themeSpec, configFilePath, true, rootDir);
    return processTheme(themeObj, {
      rootDir
    });
  }).then(arr => (0, _flattenDeep2.default)(arr));

  // log out flattened themes list to aid in debugging
  debug(themesA);

  // map over each theme, adding the theme itself to the plugins
  // list in the config for the theme. This enables the usage of
  // gatsby-node, etc in themes.
  return (0, _bluebird.mapSeries)(themesA, ({
    themeName,
    themeConfig = {},
    themeSpec,
    themeDir,
    parentDir
  }) => {
    return {
      ...themeConfig,
      plugins: [...(themeConfig.plugins || []).map(plugin => normalizePluginEntry(plugin, themeDir)),
      // theme plugin is last so it's gatsby-node, etc can override it's declared plugins, like a normal site.
      {
        resolve: themeName,
        options: typeof themeSpec === `string` ? {} : themeSpec.options,
        parentDir
      }]
    };
  })
  /**
   * themes resolve to a gatsby-config, so here we merge all of the configs
   * into a single config, making sure to maintain the order in which
   * they were defined so that later configs, like the user's site and
   * children, can override functionality in earlier themes.
   */.reduce(_mergeGatsbyConfig.mergeGatsbyConfig, {}).then(newConfig => {
    const mergedConfig = (0, _mergeGatsbyConfig.mergeGatsbyConfig)(newConfig, {
      ...config,
      plugins: [...(config.plugins || []).map(plugin => normalizePluginEntry(plugin, rootDir))]
    });
    mergedConfig.plugins = (0, _uniqWith2.default)(mergedConfig.plugins, _isEqual2.default);
    return {
      config: mergedConfig,
      themes: themesA
    };
  });
}
//# sourceMappingURL=index.js.map