"use strict";

exports.__esModule = true;
exports.getPageMode = getPageMode;
exports.materializePageMode = materializePageMode;
exports.preparePageTemplateConfigs = preparePageTemplateConfigs;
var _redux = require("../redux");
var _reportOnce = require("./report-once");
var _constants = require("../constants");
var _datastore = require("../datastore");
const pageConfigMap = new Map();

/**
 * In develop IGatsbyPage["mode"] can change at any time, so as a general rule we need to resolve it
 * every time from page component and IGatsbyPage["defer"] value.
 *
 * IGatsbyPage["mode"] is only reliable in engines and in `onPostBuild` hook.
 */
function getPageMode(page, state) {
  var _components$get;
  const {
    components
  } = state !== null && state !== void 0 ? state : _redux.store.getState();

  // assume SSG until components are actually extracted
  const component = (_components$get = components.get(page.componentPath)) !== null && _components$get !== void 0 ? _components$get : {
    serverData: false,
    config: false
  };
  return resolvePageMode(page, component);
}
function resolvePageMode(page, component) {
  let pageMode = undefined;
  if (component.serverData) {
    pageMode = `SSR`;
  } else if (component.config) {
    const pageConfigFn = pageConfigMap.get(page.componentChunkName);
    if (!pageConfigFn) {
      // This is possible in warm builds when `component.config` was persisted but
      // `preparePageTemplateConfigs` hasn't been executed yet
      // TODO: if we move `mode` away from page and persist it in the state separately,
      //  we can just return the old `mode` that should be in sync with `component.config`
      return `SSG`;
    }
    const fsRouteParams = typeof page.context[`__params`] === `object` ? page.context[`__params`] : {};
    const pageConfig = pageConfigFn({
      params: fsRouteParams
    });
    if (typeof pageConfig.defer === `boolean`) {
      pageMode = pageConfig.defer ? `DSG` : `SSG`;
    }
  }
  if (!pageMode) {
    pageMode = page.defer ? `DSG` : `SSG`;
  }
  if (pageMode !== `SSG` && (page.path === `/404.html` || page.path === `/500.html`)) {
    (0, _reportOnce.reportOnce)(`Status page "${page.path}" ignores page mode ("${pageMode}") and force sets it to SSG (this page can't be lazily rendered).`);
    pageMode = `SSG`;
  }
  return pageMode;
}

/**
 * Persist page.mode for SSR/DSG pages to ensure they work with `gatsby serve`
 *
 * TODO: ideally IGatsbyPage["mode"] should not exist at all and instead we need a different entity
 *   holding this information: an entity that is only created in the end of the build e.g. Route
 *   then materializePageMode transforms to createRoutes
 */
async function materializePageMode() {
  const {
    pages,
    components
  } = _redux.store.getState();
  let dispatchCount = 0;
  for (const page of pages.values()) {
    const component = components.get(page.componentPath);
    if (!component) {
      throw new Error(`Could not find matching component for page ${page.path}`);
    }
    const pageMode = resolvePageMode(page, component);

    // Do not materialize for SSG pages: saves some CPU time as `page.mode` === `SSG` by default when creating a page
    // and our pages are re-generated on each build, not persisted
    // (so no way to get DSG/SSR value from the previous build)
    if (pageMode !== `SSG`) {
      const action = {
        type: `MATERIALIZE_PAGE_MODE`,
        payload: {
          path: page.path,
          pageMode
        }
      };
      _redux.store.dispatch(action);
    }
    // Do not block task queue of the event loop for too long:
    if (dispatchCount++ % 100 === 0) {
      await new Promise(resolve => setImmediate(resolve));
    }
  }
  await (0, _datastore.getDataStore)().ready();
}
async function preparePageTemplateConfigs(graphql) {
  const {
    program
  } = _redux.store.getState();
  const pageRendererPath = `${program.directory}/${_constants.ROUTES_DIRECTORY}render-page.js`;
  const pageRenderer = require(pageRendererPath);
  global[`__gatsbyGraphql`] = graphql;
  await Promise.all(Array.from(_redux.store.getState().components.values()).map(async component => {
    if (component.config) {
      const componentInstance = await pageRenderer.getPageChunk({
        componentChunkName: component.componentChunkName
      });
      const pageConfigFn = await componentInstance.config();
      if (typeof pageConfigFn !== `function`) {
        throw new Error(`Unexpected result of config factory. Expected "function", got "${typeof pageConfigFn}".`);
      }
      pageConfigMap.set(component.componentChunkName, pageConfigFn);
    }
  }));
  delete global[`__gatsbyGraphql`];
}
//# sourceMappingURL=page-mode.js.map