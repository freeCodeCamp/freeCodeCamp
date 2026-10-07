"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.collatePluginAPIs = collatePluginAPIs;
exports.handleBadExports = handleBadExports;
exports.handleMultipleReplaceRenderers = void 0;
exports.validateConfigPluginsOptions = validateConfigPluginsOptions;
exports.warnOnIncompatiblePeerDependency = warnOnIncompatiblePeerDependency;
var _get2 = _interopRequireDefault(require("lodash/get"));
var _intersection2 = _interopRequireDefault(require("lodash/intersection"));
var _toPairs2 = _interopRequireDefault(require("lodash/toPairs"));
var _difference2 = _interopRequireDefault(require("lodash/difference"));
var _path = _interopRequireDefault(require("path"));
var semver = _interopRequireWildcard(require("semver"));
var stringSimilarity = _interopRequireWildcard(require("string-similarity"));
var _package = require("gatsby/package.json");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyPluginUtils = require("gatsby-plugin-utils");
var _commonTags = require("common-tags");
var _gatsbyWorker = require("gatsby-worker");
var _resolveModuleExports = require("../resolve-module-exports");
var _getLatestGatsbyFiles = require("../../utils/get-latest-gatsby-files");
var _resolvePlugin = require("./resolve-plugin");
var _preferDefault = require("../prefer-default");
var _importGatsbyPlugin = require("../../utils/import-gatsby-plugin");
var _resolveJsFilePath = require("../resolve-js-file-path");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const getGatsbyUpgradeVersion = entries => entries.reduce((version, entry) => {
  if (entry.api && entry.api.version) {
    return semver.gt(entry.api.version, version || `0.0.0`) ? entry.api.version : version;
  }
  return version;
}, ``);

// Given a plugin object, an array of the API names it exports and an
// array of valid API names, return an array of invalid API exports.
function getBadExports(plugin, pluginAPIKeys, apis) {
  let badExports = [];
  // Discover any exports from plugins which are not "known"
  badExports = badExports.concat((0, _difference2.default)(pluginAPIKeys, apis).map(e => {
    return {
      exportName: e,
      pluginName: plugin.name,
      pluginVersion: plugin.version
    };
  }));
  return badExports;
}
function getErrorContext(badExports, exportType, currentAPIs, latestAPIs) {
  const entries = badExports.map(ex => {
    return {
      ...ex,
      api: latestAPIs[exportType][ex.exportName]
    };
  });
  const gatsbyUpgradeVersion = getGatsbyUpgradeVersion(entries);
  const errors = [];
  const fixes = gatsbyUpgradeVersion ? [`npm install gatsby@^${gatsbyUpgradeVersion}`] : [];
  entries.forEach(entry => {
    const similarities = stringSimilarity.findBestMatch(entry.exportName, currentAPIs[exportType]);
    const isDefaultPlugin = entry.pluginName == `default-site-plugin`;
    const message = entry.api ? entry.api.version ? `was introduced in gatsby@${entry.api.version}` : `is not available in your version of Gatsby` : `is not a known API`;
    if (isDefaultPlugin) {
      errors.push(`- Your local gatsby-${exportType}.js is using the API "${entry.exportName}" which ${message}.`);
    } else {
      errors.push(`- The plugin ${entry.pluginName}@${entry.pluginVersion} is using the API "${entry.exportName}" which ${message}.`);
    }
    if (similarities.bestMatch.rating > 0.5) {
      fixes.push(`Rename "${entry.exportName}" -> "${similarities.bestMatch.target}"`);
    }
  });
  return {
    errors,
    entries,
    exportType,
    fixes,
    // note: this is a fallback if gatsby-cli is not updated with structured error
    sourceMessage: [`Your plugins must export known APIs from their gatsby-node.js.`].concat(errors).concat(fixes.length > 0 ? [`\n`, `Some of the following may help fix the error(s):`, ...fixes] : []).filter(Boolean).join(`\n`)
  };
}
async function handleBadExports({
  currentAPIs,
  badExports
}) {
  const hasBadExports = Object.keys(badExports).find(api => badExports[api].length > 0);
  if (hasBadExports) {
    const latestAPIs = await (0, _getLatestGatsbyFiles.getLatestAPIs)();
    // Output error messages for all bad exports
    (0, _toPairs2.default)(badExports).forEach(badItem => {
      const [exportType, entries] = badItem;
      if (entries.length > 0) {
        const context = getErrorContext(entries, exportType, currentAPIs, latestAPIs);
        _reporter.default.error({
          id: `11329`,
          context
        });
      }
    });
  }
}
const addModuleImportAndValidateOptions = (rootDir, incErrors) => async value => {
  for (const plugin of value) {
    if (plugin.modulePath) {
      const importedModule = await import((0, _resolveJsFilePath.maybeAddFileProtocol)(plugin.modulePath));
      const pluginModule = (0, _preferDefault.preferDefault)(importedModule);
      plugin.module = pluginModule;
    }
  }
  const {
    errors: subErrors,
    plugins: subPlugins
  } = await validatePluginsOptions(value, rootDir);
  incErrors(subErrors);
  return subPlugins;
};
async function validatePluginsOptions(plugins, rootDir) {
  let errors = 0;
  const newPlugins = await Promise.all(plugins.map(async plugin => {
    let gatsbyNode;
    try {
      const resolvedPlugin = (0, _resolvePlugin.resolvePlugin)(plugin, rootDir);
      gatsbyNode = await (0, _importGatsbyPlugin.importGatsbyPlugin)(resolvedPlugin, `gatsby-node`);
    } catch (err) {
      gatsbyNode = {};
    }
    if (!gatsbyNode.pluginOptionsSchema) return plugin;
    const subPluginPaths = new Set();
    let optionsSchema = gatsbyNode.pluginOptionsSchema({
      Joi: _gatsbyPluginUtils.Joi.extend(joi => {
        return {
          type: `subPlugins`,
          base: joi.array().items(joi.alternatives(joi.string(), joi.object({
            resolve: _gatsbyPluginUtils.Joi.string(),
            options: _gatsbyPluginUtils.Joi.object({}).unknown(true)
          }))).custom((arrayValue, helpers) => {
            const entry = helpers.schema._flags.entry;
            return arrayValue.map(value => {
              if (typeof value === `string`) {
                value = {
                  resolve: value
                };
              }
              try {
                const resolvedPlugin = (0, _resolvePlugin.resolvePlugin)(value, rootDir);
                const modulePath = require.resolve(`${resolvedPlugin.resolve}${entry ? `/${entry}` : ``}`);
                value.modulePath = modulePath;
                const normalizedPath = helpers.state.path.map((key, index) => {
                  // if subplugin is part of an array - swap concrete index key with `[]`
                  if (typeof key === `number` && Array.isArray(helpers.state.ancestors[helpers.state.path.length - index - 1])) {
                    if (index !== helpers.state.path.length - 1) {
                      throw new Error(`No support for arrays not at the end of path`);
                    }
                    return `[]`;
                  }
                  return key;
                }).join(`.`);
                subPluginPaths.add(normalizedPath);
              } catch (err) {
                console.log(err);
              }
              return value;
            });
          }, `Gatsby specific subplugin validation`).default([]).external(addModuleImportAndValidateOptions(rootDir, inc => {
            errors += inc;
          }), `add module key to subplugin`),
          args: (schema, args) => {
            if (args !== null && args !== void 0 && args.entry && schema && typeof schema === `object` && schema.$_setFlag) {
              return schema.$_setFlag(`entry`, args.entry, {
                clone: true
              });
            }
            return schema;
          }
        };
      })
    });

    // If rootDir and plugin.parentDir are the same, i.e. if this is a plugin a user configured in their gatsby-config.js (and not a sub-theme that added it), this will be ""
    // Otherwise, this will contain (and show) the relative path
    const configDir = plugin.parentDir && rootDir && _path.default.relative(rootDir, plugin.parentDir) || null;
    if (!_gatsbyPluginUtils.Joi.isSchema(optionsSchema) || optionsSchema.type !== `object`) {
      // Validate correct usage of pluginOptionsSchema
      _reporter.default.warn(`Plugin "${plugin.resolve}" has an invalid options schema so we cannot verify your configuration for it.`);
      return plugin;
    }
    try {
      var _plugin$options;
      if (!optionsSchema.describe().keys.plugins) {
        // All plugins have "plugins: []"" added to their options in load.ts, even if they
        // do not have subplugins. We add plugins to the schema if it does not exist already
        // to make sure they pass validation.
        optionsSchema = optionsSchema.append({
          plugins: _gatsbyPluginUtils.Joi.array().length(0)
        });
      }
      const {
        value,
        warning
      } = await (0, _gatsbyPluginUtils.validateOptionsSchema)(optionsSchema, plugin.options || {});
      plugin.options = value;

      // Handle unknown key warnings
      const validationWarnings = warning === null || warning === void 0 ? void 0 : warning.details;
      if ((validationWarnings === null || validationWarnings === void 0 ? void 0 : validationWarnings.length) > 0) {
        _reporter.default.warn((0, _commonTags.stripIndent)(`
        Warning: there are unknown plugin options for "${plugin.resolve}"${configDir ? `, configured by ${configDir}` : ``}: ${validationWarnings.map(error => error.path.join(`.`)).join(`, `)}
        Please open an issue at https://ghub.io/${plugin.resolve} if you believe this option is valid.
      `));
        // We do not increment errors++ here as we do not want to process.exit if there are only warnings
      }

      // Validate subplugins if they weren't handled already
      if (!subPluginPaths.has(`plugins`) && (_plugin$options = plugin.options) !== null && _plugin$options !== void 0 && _plugin$options.plugins) {
        const {
          errors: subErrors,
          plugins: subPlugins
        } = await validatePluginsOptions(plugin.options.plugins, rootDir);
        plugin.options.plugins = subPlugins;
        if (subPlugins.length > 0) {
          subPluginPaths.add(`plugins`);
        }
        errors += subErrors;
      }
      if (subPluginPaths.size > 0) {
        plugin.subPluginPaths = Array.from(subPluginPaths);
      }
    } catch (error) {
      if (error instanceof _gatsbyPluginUtils.Joi.ValidationError) {
        const validationErrors = error.details;
        if (validationErrors.length > 0) {
          _reporter.default.error({
            id: `11331`,
            context: {
              configDir,
              validationErrors,
              pluginName: plugin.resolve
            }
          });
          errors++;
        }
        return plugin;
      }
      throw error;
    }
    return plugin;
  }));
  return {
    errors,
    plugins: newPlugins
  };
}
async function validateConfigPluginsOptions(config = {}, rootDir) {
  if (!config.plugins) return;
  const {
    errors,
    plugins
  } = await validatePluginsOptions(config.plugins, rootDir);
  config.plugins = plugins;
  if (errors > 0) {
    process.exit(1);
  }
}

/**
 * Identify which APIs each plugin exports
 */
async function collatePluginAPIs({
  currentAPIs,
  flattenedPlugins,
  rootDir
}) {
  // Get a list of bad exports
  const badExports = {
    node: [],
    browser: [],
    ssr: []
  };
  for (const plugin of flattenedPlugins) {
    var _plugin$resolvedCompi;
    plugin.nodeAPIs = [];
    plugin.browserAPIs = [];
    plugin.ssrAPIs = [];

    // Discover which APIs this plugin implements and store an array against
    // the plugin node itself *and* in an API to plugins map for faster lookups
    // later.
    const pluginNodeExports = await (0, _resolveModuleExports.resolveModuleExports)((_plugin$resolvedCompi = plugin.resolvedCompiledGatsbyNode) !== null && _plugin$resolvedCompi !== void 0 ? _plugin$resolvedCompi : `${plugin.resolve}/gatsby-node`, {
      mode: `import`,
      rootDir
    });
    const pluginBrowserExports = await (0, _resolveModuleExports.resolveModuleExports)(`${plugin.resolve}/gatsby-browser`, {
      rootDir
    });
    const pluginSSRExports = await (0, _resolveModuleExports.resolveModuleExports)(`${plugin.resolve}/gatsby-ssr`, {
      rootDir
    });
    if (pluginNodeExports.length > 0) {
      plugin.nodeAPIs = (0, _intersection2.default)(pluginNodeExports, currentAPIs.node);
      badExports.node = badExports.node.concat(getBadExports(plugin, pluginNodeExports, currentAPIs.node)); // Collate any bad exports
    }

    if (pluginBrowserExports.length > 0) {
      plugin.browserAPIs = (0, _intersection2.default)(pluginBrowserExports, currentAPIs.browser);
      badExports.browser = badExports.browser.concat(getBadExports(plugin, pluginBrowserExports, currentAPIs.browser)); // Collate any bad exports
    }

    if (pluginSSRExports.length > 0) {
      plugin.ssrAPIs = (0, _intersection2.default)(pluginSSRExports, currentAPIs.ssr);
      badExports.ssr = badExports.ssr.concat(getBadExports(plugin, pluginSSRExports, currentAPIs.ssr)); // Collate any bad exports
    }
  }

  return {
    flattenedPlugins: flattenedPlugins,
    badExports
  };
}
const handleMultipleReplaceRenderers = ({
  flattenedPlugins
}) => {
  // multiple replaceRenderers may cause problems at build time
  const rendererPlugins = flattenedPlugins.filter(plugin => plugin.ssrAPIs.includes(`replaceRenderer`)).map(plugin => plugin.name);
  if (rendererPlugins.length > 1) {
    if (rendererPlugins.includes(`default-site-plugin`)) {
      _reporter.default.warn(`replaceRenderer API found in these plugins:`);
      _reporter.default.warn(rendererPlugins.join(`, `));
      _reporter.default.warn(`This might be an error, see: https://www.gatsbyjs.com/docs/debugging-replace-renderer-api/`);
    } else {
      console.log(``);
      _reporter.default.error(`Gatsby's replaceRenderer API is implemented by multiple plugins:`);
      _reporter.default.error(rendererPlugins.join(`, `));
      _reporter.default.error(`This will break your build`);
      _reporter.default.error(`See: https://www.gatsbyjs.com/docs/debugging-replace-renderer-api/`);
      if (process.env.NODE_ENV === `production`) process.exit(1);
    }

    // Now update plugin list so only final replaceRenderer will run
    const ignorable = rendererPlugins.slice(0, -1);

    // For each plugin in ignorable, set a skipSSR flag to true
    // This prevents apiRunnerSSR() from attempting to run it later
    const messages = [];
    flattenedPlugins.forEach((fp, i) => {
      if (ignorable.includes(fp.name)) {
        messages.push(`Duplicate replaceRenderer found, skipping gatsby-ssr.js for plugin: ${fp.name}`);
        flattenedPlugins[i].skipSSR = true;
      }
    });
    if (messages.length > 0) {
      console.log(``);
      messages.forEach(m => _reporter.default.warn(m));
      console.log(``);
    }
  }
  return flattenedPlugins;
};
exports.handleMultipleReplaceRenderers = handleMultipleReplaceRenderers;
function warnOnIncompatiblePeerDependency(name, packageJSON) {
  // Note: In the future the peer dependency should be enforced for all plugins.
  const gatsbyPeerDependency = (0, _get2.default)(packageJSON, `peerDependencies.gatsby`);
  if (!_gatsbyWorker.isWorker && gatsbyPeerDependency && !semver.satisfies(_package.version, gatsbyPeerDependency, {
    includePrerelease: true
  })) {
    _reporter.default.warn(`Plugin ${name} is not compatible with your gatsby version ${_package.version} - It requires gatsby@${gatsbyPeerDependency}`);
  }
}
//# sourceMappingURL=validate.js.map