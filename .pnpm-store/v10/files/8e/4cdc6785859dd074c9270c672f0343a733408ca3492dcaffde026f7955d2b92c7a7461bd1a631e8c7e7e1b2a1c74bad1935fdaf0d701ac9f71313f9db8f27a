"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.removeExportQueryParam = exports.StaticQueryMapper = void 0;
var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _path = _interopRequireDefault(require("path"));
var _webpack = require("webpack");
var _pageData = require("../../page-data");
var _findSlices = require("../../babel/find-slices");
var _path2 = require("gatsby-core-utils/path");
/**
 * Remove the export query param from a path that can
 * a) contain only the ?export= query param
 * b) but also contain ?__contentFilePath&export=
 */
const removeExportQueryParam = path => {
  if (!(path !== null && path !== void 0 && path.includes(`?`))) {
    return path;
  }
  const [filePath, queryParams] = path.split(`?`);
  const params = new URLSearchParams(queryParams.replace(/[+]/g, `%2B`));
  params.delete(`export`);
  const paramsString = params.toString().replace(/[+]/g, `%20`);
  return `${filePath}${paramsString ? `?${decodeURIComponent(paramsString)}` : ``}`;
};

/**
 * Checks if a module matches a resourcePath
 */
exports.removeExportQueryParam = removeExportQueryParam;
function doesModuleMatchResourcePath(resourcePath, webpackModule) {
  return removeExportQueryParam(webpackModule.resource) === resourcePath;
}

/**
 * A helper to set/get path resolving
 */
function getRealPath(cache, componentPath) {
  if (!cache.has(componentPath)) {
    cache.set(componentPath, _path.default.resolve(componentPath));
  }
  return cache.get(componentPath);
}
class StaticQueryMapper {
  constructor(store) {
    this.store = store;
    this.name = `StaticQueryMapper`;
  }
  apply(compiler) {
    const {
      components,
      staticQueryComponents,
      componentsUsingSlices,
      program
    } = this.store.getState();
    compiler.hooks.done.tap(this.name, stats => {
      // In dev mode we want to write page-data when compilation succeeds
      if (!stats.hasErrors() && compiler.watchMode) {
        (0, _pageData.enqueueFlush)();
      }
    });
    compiler.hooks.finishMake.tapPromise({
      name: this.name,
      before: `PartialHydrationPlugin`
    }, async compilation => {
      if (compilation.compiler.parentCompilation) {
        return;
      }
      const entryModules = new Set();
      const gatsbyBrowserPlugins = (0, _path2.slash)(_path.default.join(program.directory, `.cache`, `api-runner-browser-plugins.js`));
      const asyncRequiresPath = (0, _path2.slash)(_path.default.join(program.directory, `.cache`, `_this_is_virtual_fs_path_`, `$virtual`, `async-requires.js`));
      for (const entry of compilation.entries.values()) {
        for (const dependency of entry.dependencies) {
          const mod = compilation.moduleGraph.getModule(dependency);
          entryModules.add(mod);
        }
      }
      const realPathCache = new Map();
      const webpackModulesByStaticQueryId = new Map();
      const webpackModulesByUsedSlicePlaceholderAlias = new Map();
      const componentModules = new Map();
      let asyncRequiresModule;
      for (const webpackModule of compilation.modules) {
        if (!(webpackModule instanceof _webpack.NormalModule)) {
          // the only other type can be CssModule at this stage, which we don't care about
          // this also acts as a type guard, providing fuller typeing for webpackModule
          continue;
        }
        if (doesModuleMatchResourcePath(asyncRequiresPath, webpackModule)) {
          asyncRequiresModule = webpackModule;
          continue;
        }
        if (doesModuleMatchResourcePath(gatsbyBrowserPlugins, webpackModule)) {
          entryModules.add(webpackModule);
          continue;
        }
        for (const staticQuery of staticQueryComponents.values()) {
          const staticQueryComponentPath = getRealPath(realPathCache, staticQuery.componentPath);
          if (!doesModuleMatchResourcePath(staticQueryComponentPath, webpackModule)) {
            continue;
          }
          let set = webpackModulesByStaticQueryId.get(staticQuery.hash);
          if (!set) {
            set = new Set();
            webpackModulesByStaticQueryId.set(staticQuery.hash, set);
          }
          set.add(webpackModule);
        }
        for (const [filePath, slices] of componentsUsingSlices) {
          const componentComponentPath = getRealPath(realPathCache, filePath);
          if (!doesModuleMatchResourcePath(componentComponentPath, webpackModule)) {
            continue;
          }
          webpackModulesByUsedSlicePlaceholderAlias.set(webpackModule, slices);
        }
        for (const component of components.values()) {
          const componentComponentPath = getRealPath(realPathCache, component.componentPath);
          if (!doesModuleMatchResourcePath(componentComponentPath, webpackModule)) {
            continue;
          }
          componentModules.set(webpackModule, component);
        }
      }
      function traverseModule(module, config, visitedModules = new Set()) {
        if (visitedModules.has(module)) {
          return;
        }
        visitedModules.add(module);
        if (module === asyncRequiresModule) {
          return;
        }
        const component = componentModules.get(module);
        if (component) {
          config.onComponent(component);
          // don't return here yet, as component might be imported by another one, and we want to traverse up until we reach async-requires
        }

        if (entryModules.has(module)) {
          config.onRoot();
          return;
        }
        const incomingConnections = compilation.moduleGraph.getIncomingConnections(module);
        for (const connection of incomingConnections) {
          if (connection.originModule instanceof _webpack.NormalModule) {
            traverseModule(connection.originModule, config, visitedModules);
          }
        }
      }
      const globalStaticQueries = new Set();
      const staticQueriesByComponents = new Map();
      for (const [staticQueryId, modules] of webpackModulesByStaticQueryId.entries()) {
        for (const module of modules) {
          traverseModule(module, {
            onComponent(component) {
              let staticQueriesForComponent = staticQueriesByComponents.get(component.componentPath);
              if (!staticQueriesForComponent) {
                staticQueriesForComponent = new Set();
                staticQueriesByComponents.set(component.componentPath, staticQueriesForComponent);
              }
              staticQueriesForComponent.add(staticQueryId);
            },
            onRoot() {
              globalStaticQueries.add(staticQueryId);
            }
          });
        }
      }
      let globalSliceUsage = {};
      const slicesByComponents = new Map();
      for (const [module, slices] of webpackModulesByUsedSlicePlaceholderAlias.entries()) {
        traverseModule(module, {
          onComponent(component) {
            slicesByComponents.set(component.componentPath, (0, _findSlices.mergePreviouslyCollectedSlices)(slices, slicesByComponents.get(component.componentPath)));
          },
          onRoot() {
            globalSliceUsage = (0, _findSlices.mergePreviouslyCollectedSlices)(slices, globalSliceUsage);
          }
        });
      }
      for (const component of components.values()) {
        var _staticQueriesByCompo, _slicesByComponents$g;
        const allStaticQueries = new Set([...globalStaticQueries, ...((_staticQueriesByCompo = staticQueriesByComponents.get(component.componentPath)) !== null && _staticQueriesByCompo !== void 0 ? _staticQueriesByCompo : [])]);
        const staticQueryHashes = Array.from(allStaticQueries).sort();
        const allSlices = (0, _findSlices.mergePreviouslyCollectedSlices)((_slicesByComponents$g = slicesByComponents.get(component.componentPath)) !== null && _slicesByComponents$g !== void 0 ? _slicesByComponents$g : {}, component.isSlice ? {} : (0, _cloneDeep2.default)(globalSliceUsage));
        const slices = Object.keys(allSlices).sort().reduce((obj, key) => {
          obj[key] = allSlices[key];
          return obj;
        }, {});
        const didSlicesChange = !(0, _isEqual2.default)(this.store.getState().slicesByTemplate.get(component.componentPath), slices);
        const didStaticQueriesChange = !(0, _isEqual2.default)(this.store.getState().staticQueriesByTemplate.get(component.componentPath), staticQueryHashes);
        if (didStaticQueriesChange || didSlicesChange) {
          if (component.isSlice) {
            this.store.dispatch({
              type: `ADD_PENDING_SLICE_TEMPLATE_DATA_WRITE`,
              payload: {
                componentPath: component.componentPath,
                sliceNames: component.pages
              }
            });
          } else {
            this.store.dispatch({
              type: `ADD_PENDING_TEMPLATE_DATA_WRITE`,
              payload: {
                componentPath: component.componentPath,
                pages: component.pages
              }
            });
          }
        }
        if (didSlicesChange) {
          this.store.dispatch({
            type: `SET_SLICES_BY_TEMPLATE`,
            payload: {
              componentPath: component.componentPath,
              slices
            }
          });
        }
        if (didStaticQueriesChange) {
          this.store.dispatch({
            type: `SET_STATIC_QUERIES_BY_TEMPLATE`,
            payload: {
              componentPath: component.componentPath,
              staticQueryHashes
            }
          });
        }
      }
    });
  }
}
exports.StaticQueryMapper = StaticQueryMapper;
//# sourceMappingURL=static-query-mapper.js.map