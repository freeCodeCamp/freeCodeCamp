const path = require('path');

/**
 * @callback MatchObject
 * @param {string} [str]
 * @returns {boolean}
 */

/**
 * @typedef {Object} InjectLoaderOptions
 * @property {MatchObject} match A function to include/exclude files to be processed.
 * @property {import('../../loader/types').ReactRefreshLoaderOptions} [options] Options passed to the loader.
 */

const resolvedLoader = require.resolve('../../loader');
const reactRefreshPath = path.dirname(require.resolve('react-refresh'));
const refreshUtilsPath = path.join(__dirname, '../runtime/RefreshUtils');

/**
 * Injects refresh loader to all JavaScript-like and user-specified files.
 * @param {*} moduleData Module factory creation data.
 * @param {InjectLoaderOptions} injectOptions Options to alter how the loader is injected.
 * @returns {*} The injected module factory creation data.
 */
function injectRefreshLoader(moduleData, injectOptions) {
  const { match, options } = injectOptions;

  // Include and exclude user-specified files
  if (!match(moduleData.matchResource || moduleData.resource)) return moduleData;
  // Include and exclude dynamically generated modules from other loaders
  if (moduleData.matchResource && !match(moduleData.request)) return moduleData;
  // Exclude files referenced as assets
  if (moduleData.type.includes('asset')) return moduleData;
  // Check to prevent double injection
  if (moduleData.loaders.find(({ loader }) => loader === resolvedLoader)) return moduleData;
  // Skip react-refresh and the plugin's runtime utils to prevent self-referencing -
  // this is useful when using the plugin as a direct dependency,
  // or when node_modules are specified to be processed.
  if (
    moduleData.resource.includes(reactRefreshPath) ||
    moduleData.resource.includes(refreshUtilsPath)
  ) {
    return moduleData;
  }

  // As we inject runtime code for each module,
  // it is important to run the injected loader after everything.
  // This way we can ensure that all code-processing have been done,
  // and we won't risk breaking tools like Flow or ESLint.
  moduleData.loaders.unshift({
    loader: resolvedLoader,
    options,
  });

  return moduleData;
}

module.exports = injectRefreshLoader;
