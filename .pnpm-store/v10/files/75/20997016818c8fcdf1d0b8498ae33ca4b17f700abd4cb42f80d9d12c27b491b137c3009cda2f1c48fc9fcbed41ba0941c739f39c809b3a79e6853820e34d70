"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.updateStateAndRunQueries = exports.startWatchDeletePage = exports.extractQueries = void 0;
var _chokidar = _interopRequireDefault(require("chokidar"));
var _path = _interopRequireDefault(require("path"));
var _parseComponentPath = require("gatsby-core-utils/parse-component-path");
var _path2 = require("gatsby-core-utils/path");
var _redux = require("../redux/");
var _actions = require("../redux/actions");
var _queryCompiler = _interopRequireDefault(require("./query-compiler"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyDependents = require("../utils/gatsby-dependents");
var _nodeManifest = require("../utils/node-manifest");
/***
 * Jobs of this module
 * - Maintain the list of components in the Redux store. So monitor new components
 *   and add/remove components.
 * - Watch components for query changes and extract these and update the store.
 * - Ensure all page queries are run as part of bootstrap and report back when
 *   this is done
 * - Whenever a query changes, re-run all pages that rely on this query.
 ***/

const debug = require(`debug`)(`gatsby:query-watcher`);
const getQueriesSnapshot = () => {
  const state = _redux.store.getState();
  const componentsWithCleanFilePaths = new Set();
  state.components.forEach(c => {
    componentsWithCleanFilePaths.add((0, _parseComponentPath.getPathToLayoutComponent)(c.componentPath));
  });
  const snapshot = {
    components: new Map(state.components),
    staticQueryComponents: new Map(state.staticQueryComponents),
    componentsWithCleanFilePaths
  };
  return snapshot;
};
const handleComponentsWithRemovedQueries = ({
  staticQueryComponents
}, queries) => {
  // If a component had static query and it doesn't have it
  // anymore - update the store
  staticQueryComponents.forEach(c => {
    if (c.query !== `` && !queries.has(c.componentPath)) {
      debug(`Static query was removed from ${c.componentPath}`);
      _redux.store.dispatch({
        type: `REMOVE_STATIC_QUERY`,
        payload: c.id
      });
    }
  });
};
const handleQuery = ({
  staticQueryComponents
}, query, component) => {
  // If this is a static query
  // Add action / reducer + watch staticquery files
  if (query.isStaticQuery) {
    const oldQuery = staticQueryComponents.get(query.id);
    const isNewQuery = !oldQuery;

    // Compare query text because text is compiled query with any attached
    // fragments and we want to rerun queries if fragments are edited.
    // Compare hash because hash is used for identyfing query and
    // passing data to component in development. Hash can change if user will
    // format query text, but it doesn't mean that compiled text will change.
    if (isNewQuery || (oldQuery === null || oldQuery === void 0 ? void 0 : oldQuery.hash) !== query.hash || (oldQuery === null || oldQuery === void 0 ? void 0 : oldQuery.query) !== query.text) {
      _redux.store.dispatch(_actions.actions.replaceStaticQuery({
        name: query.name,
        componentPath: query.path,
        id: query.id,
        query: query.text,
        hash: query.hash
      }));
      debug(`Static query in ${component} ${isNewQuery ? `was added` : `has changed`}.`);
    }
    return true;
  }
  return false;
};
const filesToWatch = new Set();
let watcher;
const watch = async rootDir => {
  if (watcher) return;
  const modulesThatUseGatsby = await (0, _gatsbyDependents.getGatsbyDependents)();
  const packagePaths = modulesThatUseGatsby.map(module => {
    const filesRegex = `*.+(t|j)s?(x)`;
    const pathRegex = `/{${filesRegex},!(node_modules)/**/${filesRegex}}`;
    return (0, _path2.slash)(_path.default.join(module.path, pathRegex));
  });
  watcher = _chokidar.default.watch([(0, _path2.slash)(_path.default.join(rootDir, `/src/**/*.{js,jsx,ts,tsx}`)), ...packagePaths], {
    ignoreInitial: true,
    ignored: [`**/*.d.ts`]
  }).on(`change`, path => {
    _redux.emitter.emit(`SOURCE_FILE_CHANGED`, path);
  }).on(`add`, path => {
    _redux.emitter.emit(`SOURCE_FILE_CHANGED`, path);
  }).on(`unlink`, path => {
    _redux.emitter.emit(`SOURCE_FILE_CHANGED`, path);
  });
  filesToWatch.forEach(filePath => watcher.add(filePath));
};
const watchComponent = componentPath => {
  // We don't start watching until mid-way through the bootstrap so ignore
  // new components being added until then. This doesn't affect anything as
  // when extractQueries is called from bootstrap, we make sure that all
  // components are being watched.
  if (process.env.NODE_ENV !== `production` && !filesToWatch.has(componentPath)) {
    filesToWatch.add(componentPath);
    if (watcher) {
      watcher.add(componentPath);
    }
  }
};

/**
 * Removes components templates that aren't used by any page from redux store.
 */
const clearInactiveComponents = () => {
  const {
    components,
    pages,
    slices
  } = _redux.store.getState();
  const activeTemplates = new Set();
  pages.forEach(page => {
    // Set will guarantee uniqueness of entries
    activeTemplates.add((0, _path2.slash)(page.componentPath));
  });
  slices.forEach(slice => {
    // Set will guarantee uniqueness of entries
    activeTemplates.add((0, _path2.slash)(slice.componentPath));
  });
  components.forEach(component => {
    if (!activeTemplates.has(component.componentPath)) {
      debug(`${component.componentPath} component was removed because it isn't used by any page`);
      _redux.store.dispatch({
        type: `REMOVE_STATIC_QUERIES_BY_TEMPLATE`,
        payload: component
      });
    }
  });
};
const startWatchDeletePage = () => {
  _redux.emitter.on(`DELETE_PAGE`, action => {
    const componentPath = (0, _path2.slash)(action.payload.component);
    const {
      pages
    } = _redux.store.getState();
    let otherPageWithTemplateExists = false;
    for (const page of pages.values()) {
      if ((0, _path2.slash)(page.component) === componentPath) {
        otherPageWithTemplateExists = true;
        break;
      }
    }
    if (!otherPageWithTemplateExists) {
      _redux.store.dispatch({
        type: `REMOVE_STATIC_QUERIES_BY_TEMPLATE`,
        payload: {
          componentPath
        }
      });
    }
  });
};
exports.startWatchDeletePage = startWatchDeletePage;
const updateStateAndRunQueries = async (isFirstRun, {
  parentSpan
} = {}) => {
  const snapshot = getQueriesSnapshot();
  const queries = await (0, _queryCompiler.default)({
    parentSpan
  });
  // If there's an error while extracting queries, the queryCompiler returns false
  // or zero results.
  // Yeah, should probably be an error but don't feel like threading the error
  // all the way here.
  if (!queries || queries.size === 0) {
    return;
  }
  handleComponentsWithRemovedQueries(snapshot, queries);

  // Run action for each component
  snapshot.components.forEach(c => {
    const {
      isStaticQuery = false,
      text = ``
    } = queries.get(c.componentPath) || {};
    _redux.store.dispatch(_actions.actions.queryExtracted({
      componentPath: c.componentPath,
      query: isStaticQuery ? `` : text
    }));
  });
  let queriesWillNotRun = false;
  queries.forEach((query, component) => {
    const queryWillRun = handleQuery(snapshot, query, component);
    if (queryWillRun) {
      watchComponent(component);
      // Check if this is a page component.
      // If it is and this is our first run during bootstrap,
      // show a warning about having a query in a non-page component.
    } else if (isFirstRun && !snapshot.componentsWithCleanFilePaths.has((0, _parseComponentPath.getPathToLayoutComponent)(component))) {
      _reporter.default.warn(`The GraphQL query in the non-page component "${component}" will not be run.`);
      queriesWillNotRun = true;
    }
  });
  if (queriesWillNotRun) {
    _reporter.default.log(_reporter.default.stripIndent`

        Exported queries are only executed for page components. It's possible you're trying to create pages in your gatsby-node.js and that's failing for some reason.

        If the failing component is a regular component and not intended to be a page component, you generally want to use "useStaticQuery" (https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/) instead of exporting a page query.

        If you're more experienced with GraphQL, you can also export GraphQL fragments from components and compose the fragments in the Page component query and pass data down into the child component (https://www.gatsbyjs.com/docs/reference/graphql-data-layer/using-graphql-fragments/)

      `);
  }
  if (process.env.NODE_ENV === `development`) {
    /**
     * only process node manifests here in develop. we want this to run every time queries are updated. for gatsby build we process node manifests in src/utils/page-data.ts after all queries are run and pages are created. If we process node manifests in this location for gatsby build we wont have all the information needed to create the manifests. If we don't process manifests in this location during gatsby develop manifests will only be written once and never again when more manifests are created.
     */
    await (0, _nodeManifest.processNodeManifests)();
  }
};
exports.updateStateAndRunQueries = updateStateAndRunQueries;
const extractQueries = ({
  parentSpan
} = {}) => {
  // Remove template components that point to not existing page templates.
  // We need to do this, because components data is cached and there might
  // be changes applied when development server isn't running. This is needed
  // only in initial run, because during development state will be adjusted.
  clearInactiveComponents();
  return updateStateAndRunQueries(true, {
    parentSpan
  }).then(() => {
    // During development start watching files to recompile & run
    // queries on the fly.

    // TODO: move this into a spawned service
    if (process.env.NODE_ENV !== `production`) {
      watch(_redux.store.getState().program.directory);
    }
  });
};
exports.extractQueries = extractQueries;
//# sourceMappingURL=query-watcher.js.map