"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.calcDirtyHtmlFiles = calcDirtyHtmlFiles;
exports.markHtmlDirtyIfResultOfUsedStaticQueryChanged = markHtmlDirtyIfResultOfUsedStaticQueryChanged;
exports.removePageFiles = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
var _os = require("os");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _pageData = require("../utils/page-data");
var _redux = require("../redux");
var _pageMode = require("../utils/page-mode");
const checkFolderIsEmpty = path => _fsExtra.default.existsSync(path) && !_fsExtra.default.readdirSync(path).length;
const checkAndRemoveEmptyDir = (publicDir, pagePath) => {
  const pageHtmlDirectory = _path.default.dirname((0, _gatsbyCoreUtils.generateHtmlPath)(publicDir, pagePath));
  const pageDataDirectory = _path.default.join(publicDir, `page-data`, (0, _gatsbyCoreUtils.fixedPagePath)(pagePath));
  // if page's folder is empty also remove matching page-data folder
  if (checkFolderIsEmpty(pageHtmlDirectory)) {
    _fsExtra.default.removeSync(pageHtmlDirectory);
  }
  if (checkFolderIsEmpty(pageDataDirectory)) {
    _fsExtra.default.removeSync(pageDataDirectory);
  }
};
const sortedPageKeysByNestedLevel = pageKeys => pageKeys.sort((a, b) => {
  const currentPagePathValue = a.split(`/`).length;
  const previousPagePathValue = b.split(`/`).length;
  return previousPagePathValue - currentPagePathValue;
});
const removePageFiles = async (publicDir, pageKeys) => {
  const removePages = pageKeys.map(pagePath => {
    const removePromise = (0, _gatsbyCoreUtils.remove)({
      publicDir
    }, pagePath);
    removePromise.then(() => {
      _redux.store.dispatch({
        type: `HTML_REMOVED`,
        payload: pagePath
      });
    });
    return removePromise;
  });
  const removePageDataList = pageKeys.map(pagePath => (0, _pageData.removePageData)(publicDir, pagePath));
  return Promise.all([...removePages, ...removePageDataList]).then(() => {
    // Sort removed pageKeys by nested directories and remove if empty.
    sortedPageKeysByNestedLevel(pageKeys).forEach(pagePath => {
      checkAndRemoveEmptyDir(publicDir, pagePath);
    });
  });
};
exports.removePageFiles = removePageFiles;
const FSisCaseInsensitive = process.env.TEST_FORCE_CASE_FS ? process.env.TEST_FORCE_CASE_FS === `INSENSITIVE` : (0, _os.platform)() === `win32` || (0, _os.platform)() === `darwin`;
function normalizePagePath(path) {
  if (path === `/`) {
    return `/`;
  }
  if (FSisCaseInsensitive) {
    // e.g. /TEST/ and /test/ would produce "same" artifacts on case insensitive
    // file systems
    path = path.toLowerCase();
  }
  return path.endsWith(`/`) ? path.slice(0, -1) : path;
}
const pageGenerationActionPriority = {
  // higher the number, higher the priority
  regenerate: 2,
  reuse: 1,
  delete: 0
};
function calcDirtyHtmlFiles(state) {
  const toRegenerate = new Set();
  const toDelete = new Set();
  const toCleanupFromTrackedState = new Set();
  const normalizedPagePathToAction = new Map();

  /**
   * multiple page paths can result in same html and page-data filenames
   * so we need to keep that in mind when generating list of pages
   * to regenerate and more importantly - to delete (so we don't delete html and page-data file
   * when path changes slightly but it would still result in same html and page-data filenames
   * for example adding/removing trailing slash between builds or even mid build with plugins
   * like `gatsby-plugin-remove-trailing-slashes`). Additionally similar consideration need to
   * be accounted for cases where page paths casing on case-insensitive file systems.
   */
  function markActionForPage(path, action) {
    const normalizedPagePath = normalizePagePath(path);
    const previousAction = normalizedPagePathToAction.get(normalizedPagePath);
    let overwritePreviousAction = false;
    if (previousAction) {
      const previousActionPriority = pageGenerationActionPriority[previousAction.action];
      const currentActionPriority = pageGenerationActionPriority[action];
      if (currentActionPriority > previousActionPriority) {
        overwritePreviousAction = true;
        toCleanupFromTrackedState.add(previousAction.actualPath);
        if (previousAction.action === `delete`) {
          // "reuse" or "regenerate" will take over, so we should
          // remove path from list of paths to delete
          toDelete.delete(previousAction.actualPath);
        }
      }
    }
    if (!previousAction || overwritePreviousAction) {
      normalizedPagePathToAction.set(normalizedPagePath, {
        actualPath: path,
        action
      });
      if (action === `delete`) {
        toDelete.add(path);
      } else if (action === `regenerate`) {
        toRegenerate.add(path);
      }
    }
  }
  if (state.html.unsafeBuiltinWasUsedInSSR) {
    _reporter.default.warn(`Previous build used unsafe builtin method. We need to rebuild all pages`);
  }
  state.html.trackedHtmlFiles.forEach(function (htmlFile, path) {
    const page = state.pages.get(path);
    if (htmlFile.isDeleted || !page) {
      // FIXME: checking pages state here because pages are not persisted
      // and because of that `isDeleted` might not be set ...
      markActionForPage(path, `delete`);
    } else {
      if ((0, _pageMode.getPageMode)(page, state) === `SSG`) {
        if (htmlFile.dirty || state.html.unsafeBuiltinWasUsedInSSR) {
          markActionForPage(path, `regenerate`);
        } else {
          markActionForPage(path, `reuse`);
        }
      }
    }
  });
  return {
    toRegenerate: Array.from(toRegenerate),
    toDelete: Array.from(toDelete),
    toCleanupFromTrackedState
  };
}
function markHtmlDirtyIfResultOfUsedStaticQueryChanged() {
  const state = _redux.store.getState();
  const dirtyStaticQueryResults = new Set();
  state.html.trackedStaticQueryResults.forEach(function (staticQueryResultState, staticQueryHash) {
    if (staticQueryResultState.dirty) {
      dirtyStaticQueryResults.add(staticQueryHash);
    }
  });

  // we have dirty static query hashes - now we need to find templates that use them
  const dirtyTemplates = new Set();
  state.staticQueriesByTemplate.forEach(function (staticQueryHashes, componentPath) {
    for (const dirtyStaticQueryHash of dirtyStaticQueryResults) {
      if (staticQueryHashes.includes(dirtyStaticQueryHash)) {
        dirtyTemplates.add(componentPath);
        break; // we already know this template need to rebuild, no need to check rest of queries
      }
    }
  });

  // mark html as dirty
  const dirtyPages = new Set();
  const dirtySlices = new Set();
  for (const dirtyTemplate of dirtyTemplates) {
    const component = state.components.get(dirtyTemplate);
    if (component) {
      for (const page of component.pages) {
        if (component.isSlice) {
          dirtySlices.add(page);
        } else {
          dirtyPages.add(page);
        }
      }
    }
  }
  _redux.store.dispatch({
    type: `HTML_MARK_DIRTY_BECAUSE_STATIC_QUERY_RESULT_CHANGED`,
    payload: {
      pages: dirtyPages,
      slices: dirtySlices,
      staticQueryHashes: dirtyStaticQueryResults
    }
  });
}
//# sourceMappingURL=build-utils.js.map