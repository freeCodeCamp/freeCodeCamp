"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createPage = createPage;
var _gatsbyPageUtils = require("gatsby-page-utils");
var _createClientOnlyPage = require("./create-client-only-page");
var _createPagesFromCollectionBuilder = require("./create-pages-from-collection-builder");
var _path = _interopRequireDefault(require("path"));
function pathIsCollectionBuilder(path) {
  return path.includes(`{`);
}
function pathIsClientOnlyRoute(path) {
  return path.includes(`[`);
}
function createPage(filePath, pagesDirectory, actions, graphql, reporter, trailingSlash, pagesPath, ignore, slugifyOptions) {
  // Filter out special components that shouldn't be made into
  // pages.
  if (!(0, _gatsbyPageUtils.validatePath)(filePath)) {
    return;
  }

  // Filter out anything matching the given ignore patterns and options
  if ((0, _gatsbyPageUtils.ignorePath)(filePath, ignore)) {
    return;
  }
  const absolutePath = _path.default.join(pagesDirectory, filePath);

  // If the page includes a `{}` in it, then we create it as a collection builder
  if (pathIsCollectionBuilder(absolutePath)) {
    (0, _createPagesFromCollectionBuilder.createPagesFromCollectionBuilder)({
      filePath,
      absolutePath,
      pagesPath,
      actions,
      graphql,
      reporter,
      trailingSlash,
      slugifyOptions
    });
    return;
  }

  // If the path includes a `[]` in it, then we create it as a client only route
  if (pathIsClientOnlyRoute(absolutePath)) {
    (0, _createClientOnlyPage.createClientOnlyPage)(filePath, absolutePath, actions, trailingSlash);
    return;
  }

  // Create page object
  const createdPath = (0, _gatsbyPageUtils.createPath)(filePath);
  const modifiedPath = (0, _gatsbyPageUtils.applyTrailingSlashOption)(createdPath, trailingSlash);
  const page = {
    path: modifiedPath,
    component: absolutePath,
    context: {}
  };

  // Add page
  actions.createPage(page);
}