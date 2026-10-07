"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.writeAll = exports.startListener = exports.resetLastHash = exports.getComponents = void 0;
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _map2 = _interopRequireDefault(require("lodash/map"));
var _uniqBy2 = _interopRequireDefault(require("lodash/uniqBy"));
var _orderBy2 = _interopRequireDefault(require("lodash/orderBy"));
var _path = _interopRequireDefault(require("path"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _reachRouter = require("@gatsbyjs/reach-router");
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _redux = require("../redux/");
var _gatsbyWebpackVirtualModules = require("../utils/gatsby-webpack-virtual-modules");
var _pageMode = require("../utils/page-mode");
var _buildHtml = require("../commands/build-html");
var _rankRoute = require("../utils/rank-route");
const hasContentFilePath = componentPath => componentPath.includes(`?__contentFilePath=`);
let lastHash = null;
const resetLastHash = () => {
  lastHash = null;
};
exports.resetLastHash = resetLastHash;
const getComponents = (pages, slices, components) => {
  const pickComponentFields = page => {
    var _components$get$Head, _components$get;
    return {
      componentPath: page.componentPath,
      componentChunkName: page.componentChunkName,
      hasHeadComponent: (_components$get$Head = (_components$get = components.get(page.componentPath)) === null || _components$get === void 0 ? void 0 : _components$get.Head) !== null && _components$get$Head !== void 0 ? _components$get$Head : false
    };
  };
  return (0, _orderBy2.default)((0, _uniqBy2.default)((0, _map2.default)([...pages, ...slices.values()], pickComponentFields), c => c.componentChunkName), c => c.componentChunkName);
};

/**
 * Get all dynamic routes and sort them by most specific at the top
 * code is based on @reach/router match utility (https://github.com/reach/router/blob/152aff2352bc62cefc932e1b536de9efde6b64a5/src/lib/utils.js#L224-L254)
 */
exports.getComponents = getComponents;
const getMatchPaths = pages => {
  const createMatchPathEntry = (page, index) => {
    const {
      matchPath
    } = page;
    if (matchPath === undefined) {
      return _reporter.default.panic(`Error: matchPath property is undefined for page ${page.path}, should be a string`);
    }
    return {
      ...page,
      matchPath,
      index,
      score: (0, _rankRoute.rankRoute)(matchPath)
    };
  };
  const matchPathPages = [];
  pages.forEach((page, index) => {
    if (page.matchPath && (0, _pageMode.getPageMode)(page) === `SSG`) {
      matchPathPages.push(createMatchPathEntry(page, index));
    }
  });

  // Pages can live in matchPaths, to keep them working without doing another network request
  // we save them in matchPath. We use `@reach/router` path ranking to score paths/matchPaths
  // and sort them so more specific paths are before less specific paths.
  // More info in https://github.com/gatsbyjs/gatsby/issues/16097
  // small speedup: don't bother traversing when no matchPaths found.
  if (matchPathPages.length) {
    const newMatches = [];
    pages.forEach((page, index) => {
      const isInsideMatchPath = !!matchPathPages.find(pageWithMatchPath => !page.matchPath && (0, _reachRouter.match)(pageWithMatchPath.matchPath, page.path));
      if (isInsideMatchPath) {
        newMatches.push(createMatchPathEntry({
          ...page,
          matchPath: page.path
        }, index));
      }
    });
    // Add afterwards because the new matches are not relevant for the existing search
    matchPathPages.push(...newMatches);
  }
  return matchPathPages.sort((a, b) => {
    // The higher the score, the higher the specificity of our matchPath
    const order = b.score - a.score;
    if (order !== 0) {
      return order;
    }

    // if specificity is the same we do lexigraphic comparison of path to ensure
    // deterministic order regardless of order pages where created
    return a.matchPath.localeCompare(b.matchPath);
  }).map(({
    path,
    matchPath
  }) => {
    return {
      path,
      matchPath
    };
  });
};

// Write out pages information.
const writeAll = async state => {
  const {
    program,
    slices
  } = state;
  const pages = [...state.pages.values()];
  const matchPaths = getMatchPaths(pages);
  const components = getComponents(pages, slices, state.components);
  let cleanedSSRVisitedPageComponents = [];
  if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
    var _state$visitedPages$g;
    const ssrVisitedPageComponents = [...(((_state$visitedPages$g = state.visitedPages.get(`server`)) === null || _state$visitedPages$g === void 0 ? void 0 : _state$visitedPages$g.values()) || [])];

    // Remove any page components that no longer exist.
    cleanedSSRVisitedPageComponents = components.filter(c => ssrVisitedPageComponents.some(s => s === c.componentChunkName) || c.componentChunkName.startsWith(`slice---`));
  }
  const newHash = await (0, _gatsbyCoreUtils.md5)(JSON.stringify({
    matchPaths,
    components,
    cleanedSSRVisitedPageComponents
  }));
  if (newHash === lastHash) {
    // Nothing changed. No need to rewrite files
    return false;
  }
  lastHash = newHash;
  if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
    // Create file with sync requires of visited page components files.

    const lazySyncRequires = `exports.ssrComponents = {\n${cleanedSSRVisitedPageComponents.map(c => `  "${c.componentChunkName}": require("${(0, _gatsbyCoreUtils.joinPath)(c.componentPath)}")`).join(`,\n`)}
  }\n\n`;
    (0, _gatsbyWebpackVirtualModules.writeModule)(`$virtual/ssr-sync-requires`, lazySyncRequires);
    // if this is executed, webpack should mark it as invalid, but sometimes there is some timing race
    // so we also explicitly set flag here as well
    (0, _buildHtml.devSSRWillInvalidate)();
  }

  // Create file with sync requires of components/json files.
  let syncRequires = `
// prefer default export if available
const preferDefault = m => (m && m.default) || m
\n\n`;
  syncRequires += `exports.components = {\n${components.map(c => `  "${c.componentChunkName}": preferDefault(require("${(0, _gatsbyCoreUtils.joinPath)(c.componentPath)}"))`).join(`,\n`)}
}\n\n`;

  // Create file with async requires of components/json files.
  let asyncRequires = ``;
  if (process.env.gatsby_executing_command === `develop` || "5" === `5` && process.env.GATSBY_PARTIAL_HYDRATION) {
    asyncRequires = `exports.components = {\n${components.map(c => {
      // we need a relative import path to keep contenthash the same if directory changes
      const relativeComponentPath = _path.default.relative((0, _gatsbyWebpackVirtualModules.getAbsolutePathForVirtualModule)(`$virtual`), c.componentPath);
      const rqPrefix = hasContentFilePath(relativeComponentPath) ? `&` : `?`;
      return `  "${c.componentChunkName}": () => import("${(0, _gatsbyCoreUtils.slash)(`./${relativeComponentPath}`)}${rqPrefix}export=default" /* webpackChunkName: "${c.componentChunkName}" */)`;
    }).join(`,\n`)}
}\n\n

exports.head = {\n${components.map(c => {
      if (!c.hasHeadComponent) {
        return undefined;
      }
      // we need a relative import path to keep contenthash the same if directory changes
      const relativeComponentPath = _path.default.relative((0, _gatsbyWebpackVirtualModules.getAbsolutePathForVirtualModule)(`$virtual`), c.componentPath);
      const rqPrefix = hasContentFilePath(relativeComponentPath) ? `&` : `?`;
      return `  "${c.componentChunkName}": () => import("${(0, _gatsbyCoreUtils.slash)(`./${relativeComponentPath}`)}${rqPrefix}export=head" /* webpackChunkName: "${c.componentChunkName}head" */)`;
    }).filter(Boolean).join(`,\n`)}
}\n\n`;
  } else {
    asyncRequires = `exports.components = {\n${components.map(c => {
      // we need a relative import path to keep contenthash the same if directory changes
      const relativeComponentPath = _path.default.relative((0, _gatsbyWebpackVirtualModules.getAbsolutePathForVirtualModule)(`$virtual`), c.componentPath);
      return `  "${c.componentChunkName}": () => import("${(0, _gatsbyCoreUtils.slash)(`./${relativeComponentPath}`)}" /* webpackChunkName: "${c.componentChunkName}" */)`;
    }).join(`,\n`)}
}\n\n`;
  }
  const writeAndMove = (virtualFilePath, file, data) => {
    (0, _gatsbyWebpackVirtualModules.writeModule)(virtualFilePath, data);

    // files in .cache are not used anymore as part of webpack builds, but
    // still can be used by other tools (for example `gatsby serve` reads
    // `match-paths.json` to setup routing)
    const destination = (0, _gatsbyCoreUtils.joinPath)(program.directory, `.cache`, file);
    const tmp = `${destination}.${Date.now()}`;
    return _fsExtra.default.writeFile(tmp, data).then(() => _fsExtra.default.move(tmp, destination, {
      overwrite: true
    }));
  };
  await Promise.all([writeAndMove(`$virtual/sync-requires.js`, `sync-requires.js`, syncRequires), writeAndMove(`$virtual/async-requires.js`, `async-requires.js`, asyncRequires), writeAndMove(`$virtual/match-paths.json`, `match-paths.json`, JSON.stringify(matchPaths, null, 4))]);
  return true;
};
exports.writeAll = writeAll;
const debouncedWriteAll = (0, _debounce2.default)(async () => {
  const activity = _reporter.default.activityTimer(`write out requires`, {
    id: `requires-writer`
  });
  activity.start();
  await writeAll(_redux.store.getState());
  activity.end();
}, 500, {
  // using "leading" can cause double `writeAll` call - particularly
  // when refreshing data using `/__refresh` hook.
  leading: false
});

/**
 * Start listening to CREATE/DELETE_PAGE events so we can rewrite
 * files as required
 */
let listenerStarted = false;
const startListener = () => {
  // Only start the listener once.
  if (listenerStarted) {
    return;
  }
  listenerStarted = true;
  if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
    /**
     * Start listening to CREATE_SERVER_VISITED_PAGE events so we can rewrite
     * files as required
     */
    _redux.emitter.on(`CREATE_SERVER_VISITED_PAGE`, async () => {
      // this event only happen on new additions
      (0, _buildHtml.devSSRWillInvalidate)();
      _reporter.default.pendingActivity({
        id: `requires-writer`
      });
      debouncedWriteAll();
    });
  }
  _redux.emitter.on(`CREATE_PAGE`, () => {
    _reporter.default.pendingActivity({
      id: `requires-writer`
    });
    debouncedWriteAll();
  });
  _redux.emitter.on(`CREATE_PAGE_END`, () => {
    _reporter.default.pendingActivity({
      id: `requires-writer`
    });
    debouncedWriteAll();
  });
  _redux.emitter.on(`DELETE_PAGE`, () => {
    _reporter.default.pendingActivity({
      id: `requires-writer`
    });
    debouncedWriteAll();
  });
  _redux.emitter.on(`DELETE_PAGE_BY_PATH`, () => {
    _reporter.default.pendingActivity({
      id: `requires-writer`
    });
    debouncedWriteAll();
  });
};
exports.startListener = startListener;
//# sourceMappingURL=requires-writer.js.map