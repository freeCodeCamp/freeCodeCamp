"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.printQueryEnginePlugins = printQueryEnginePlugins;
exports.schemaCustomizationAPIs = void 0;
var _cloneDeepWith2 = _interopRequireDefault(require("lodash/cloneDeepWith"));
var fs = _interopRequireWildcard(require("fs-extra"));
var path = _interopRequireWildcard(require("path"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _redux = require("../../redux");
var _importGatsbyPlugin = require("../../utils/import-gatsby-plugin");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint @typescript-eslint/no-unused-vars: ["error", { "ignoreRestSiblings": true }] */

const schemaCustomizationAPIs = new Set([`setFieldsOnGraphQLNodeType`, `createSchemaCustomization`, `createResolvers`]);
exports.schemaCustomizationAPIs = schemaCustomizationAPIs;
const excludePlugins = new Set([`internal-data-bridge`]);
const includePlugins = new Set([`gatsby-plugin-sharp`]);

// Emit file that imports required node APIs
const schemaCustomizationPluginsPath = process.cwd() + `/.cache/query-engine-plugins.js`;
async function printQueryEnginePlugins() {
  try {
    await fs.remove(schemaCustomizationPluginsPath);
  } catch (e) {
    // no-op
  }
  const queryEnginePlugins = await renderQueryEnginePlugins();
  return await fs.writeFile(schemaCustomizationPluginsPath, queryEnginePlugins);
}
async function renderQueryEnginePlugins() {
  const {
    flattenedPlugins
  } = _redux.store.getState();
  const usedPlugins = flattenedPlugins.filter(p => includePlugins.has(p.name) || !excludePlugins.has(p.name) && p.nodeAPIs.some(api => schemaCustomizationAPIs.has(api)));
  const usedSubPlugins = findSubPlugins(usedPlugins, flattenedPlugins);
  const result = await render(usedPlugins, usedSubPlugins);
  return result;
}
function relativePluginPath(resolve) {
  return (0, _gatsbyCoreUtils.slash)(path.relative(path.dirname(schemaCustomizationPluginsPath), resolve));
}
async function render(usedPlugins, usedSubPlugins) {
  const uniqSubPlugins = uniq(usedSubPlugins);
  const sanitizedUsedPlugins = usedPlugins.map((plugin, i) => {
    // TODO: We don't support functions in pluginOptions here
    return {
      ...plugin,
      resolve: ``,
      pluginFilepath: ``,
      subPluginPaths: undefined,
      importKey: i + 1
    };
  });
  const pluginsWithWorkers = await filterPluginsWithWorkers(usedPlugins);
  const subPluginModuleToImportNameMapping = new Map();
  const imports = [...usedPlugins.map((plugin, i) => `import * as pluginGatsbyNode${i} from "${relativePluginPath(plugin.resolve)}/gatsby-node"`), ...pluginsWithWorkers.map((plugin, i) => `import * as pluginGatsbyWorker${i} from "${relativePluginPath(plugin.resolve)}/gatsby-worker"`), ...uniqSubPlugins.map((plugin, i) => {
    const importName = `subPlugin${i}`;
    subPluginModuleToImportNameMapping.set(plugin.modulePath, importName);
    return `import * as ${importName} from "${relativePluginPath(plugin.modulePath)}"`;
  })];
  const gatsbyNodeExports = usedPlugins.map((plugin, i) => `{ name: "${plugin.name}", module: pluginGatsbyNode${i}, importKey: ${i + 1} },`);
  const gatsbyWorkerExports = pluginsWithWorkers.map((plugin, i) => `{ name: "${plugin.name}", module: pluginGatsbyWorker${i}, importKey: ${i + 1} },`);
  const output = `
${imports.join(`\n`)}

export const gatsbyNodes = [
${gatsbyNodeExports.join(`\n`)}
]

export const gatsbyWorkers = [
${gatsbyWorkerExports.join(`\n`)}
]

export const flattenedPlugins =
  ${JSON.stringify(sanitizedUsedPlugins.map(plugin => {
    return {
      ...plugin,
      pluginOptions: (0, _cloneDeepWith2.default)(plugin.pluginOptions, value => {
        if (typeof value === `object` && value !== null && value.module && value.modulePath) {
          const {
            module,
            modulePath,
            ...subPlugin
          } = value;
          return {
            ...subPlugin,
            module: `_SKIP_START_${subPluginModuleToImportNameMapping.get(modulePath)}_SKIP_END_`,
            resolve: ``,
            pluginFilepath: ``
          };
        }
        return undefined;
      })
    };
  }), null, 2).replace(/"_SKIP_START_|_SKIP_END_"/g, ``)}
`;
  return output;
}
async function filterPluginsWithWorkers(plugins) {
  const filteredPlugins = [];
  for (const plugin of plugins) {
    try {
      const pluginWithWorker = await (0, _importGatsbyPlugin.importGatsbyPlugin)(plugin, `gatsby-worker`);
      if (pluginWithWorker) {
        filteredPlugins.push(plugin);
      }
    } catch (_) {
      // Do nothing
    }
  }
  return filteredPlugins;
}
function getSubpluginsByPluginPath(parentPlugin, path) {
  const segments = path.split(`.`);
  let roots = [parentPlugin.pluginOptions];
  for (const segment of segments) {
    if (segment === `[]`) {
      roots = roots.flat();
    } else {
      roots = roots.map(root => root[segment]);
    }
  }
  roots = roots.flat();
  return roots;
}
function findSubPlugins(plugins, allFlattenedPlugins) {
  const usedSubPluginResolves = new Set(plugins.flatMap(plugin => {
    if (plugin.subPluginPaths) {
      const subPlugins = [];
      for (const subPluginPath of plugin.subPluginPaths) {
        subPlugins.push(...getSubpluginsByPluginPath(plugin, subPluginPath));
      }
      return subPlugins;
    }
    return [];
  }).map(plugin => plugin[`resolve`]).filter(p => typeof p === `string`));
  return allFlattenedPlugins.filter(p => usedSubPluginResolves.has(p.resolve) && !!p.modulePath);
}
function uniq(plugins) {
  return Array.from(new Map(plugins.map(p => [p.resolve, p])).values());
}
//# sourceMappingURL=print-plugins.js.map