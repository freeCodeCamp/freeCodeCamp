"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.collectionExtractQueryString = collectionExtractQueryString;
var _extractQuery = require("./extract-query");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _pathUtils = require("./path-utils");
var _errorUtils = require("./error-utils");
// This Function opens up the actual collection file and extracts the queryString used in the
function collectionExtractQueryString(absolutePath, reporter, nodeIds) {
  let queryString = null;
  const modelType = (0, _pathUtils.extractModel)(absolutePath);

  // This can happen if you have an invalid path and you are trying to query for that path
  // our path graphql resolution logic does not validate the path before calling this
  // so it can hit this case.
  if (!modelType) return null;

  // 1.  Read the file and scan for a use of collectionGraphql
  const fileContents = _fsExtra.default.readFileSync(absolutePath).toString();

  // 2.  If the user is using the collectionGraphql function, we have to
  //     warn that this functionality was removed
  if (fileContents.includes(`collectionGraphql`) || fileContents.includes(`unstable_collectionGraphql`)) {
    reporter.panicOnBuild({
      id: (0, _errorUtils.prefixId)(_errorUtils.CODES.CollectionGraphQL),
      context: {
        sourceMessage: `The "collectionGraphql" (or "unstable_collectionGraphql") API was removed. Please use the "createPages" API instead to filter collection routes.`
      },
      filePath: absolutePath
    });
  }

  // 3  This is important, we get the model or query, but we have to create a real graphql
  //    query from it. This generateQueryFromString call does all of that magic
  queryString = (0, _extractQuery.generateQueryFromString)(modelType, absolutePath, nodeIds);
  return queryString;
}