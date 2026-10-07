"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.generateQueryFromString = generateQueryFromString;
exports.reverseLookupParams = reverseLookupParams;
var _get2 = _interopRequireDefault(require("lodash/get"));
var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));
var _gatsbyPluginUtils = require("gatsby-plugin-utils");
var _path = _interopRequireDefault(require("path"));
var _pathUtils = require("./path-utils");
// Input queryStringParent could be a Model or a full graphql query
// End result should be something like { allProducts { nodes { id }}}
function generateQueryFromString(queryOrModel, fileAbsolutePath, nodeIds) {
  // TODO: 'fields' possibly contains duplicate fields, e.g. field{name},field{description} that should be merged to field{name,description}
  const fields = extractUrlParamsForQuery(fileAbsolutePath);

  // In case queryOrModel is not capitalized
  const connectionQuery = (0, _camelCase2.default)(`all ${queryOrModel}`);
  const connectionArgs = nodeIds ? `(filter: { id: { in: ${JSON.stringify(nodeIds)} } })` : ``;
  return `{${connectionQuery}${connectionArgs}{nodes{${fields}}}}`;
}

// Takes a query result of something like `{ fields: { value: 'foo' }}` with a filepath of `/fields__value` and
// translates the object into `{ fields__value: 'foo' }`. This is necassary to pass the value
// into a query function for each individual page.
function reverseLookupParams(queryResults, absolutePath) {
  const reversedParams = {
    // We always include id
    id: (queryResults.nodes ? queryResults.nodes[0] : queryResults).id
  };
  absolutePath.split(_path.default.sep).forEach(part => {
    const extracted = (0, _pathUtils.extractFieldWithoutUnion)(part);
    extracted.forEach(extract => {
      if (extract === ``) return;
      const results = (0, _get2.default)(queryResults.nodes ? queryResults.nodes[0] : queryResults,
      // replace __ with accessors '.'
      (0, _pathUtils.switchToPeriodDelimiters)(extract));
      reversedParams[extract] = results;
    });
  });
  return reversedParams;
}

// Changes something like `/Users/site/src/pages/foo/{Model.id}/{Model.baz}` to `id,baz,internal{contentFilePath}`.
// Also supports prefixes/postfixes, e.g. `/foo/prefix-{Model.id}` to `id`
function extractUrlParamsForQuery(createdPath) {
  const parts = createdPath.split(_path.default.sep);

  // always add `id` to queries
  if (parts.some(s => s.includes(`.id}`)) === false) {
    parts.push(`{Model.id}`);
  }

  // Always add internal { contentFilePath } if feature is available
  if ((0, _gatsbyPluginUtils.hasFeature)(`content-file-path`)) {
    parts.push(`{Model.internal__contentFilePath}`);
  }
  return parts.reduce((queryParts, part) => {
    if (part.includes(`{`) && part.includes(`}`)) {
      const fields = (0, _pathUtils.extractField)(part);
      const derived = fields.map(f => deriveNesting(f));
      return queryParts.concat(derived);
    }
    return queryParts;
  }, []).join(`,`);
}

// pulls out nesting from file names with the special __ syntax
// src/pages/{Model.fields__baz}.js => `fields{baz}`
// src/pages/{Model.fields__(File)__baz}.js => `fields{... on File {baz}}`
function deriveNesting(part) {
  if (part.includes(`__`)) {
    return part.split(`__`).reverse().reduce((path, part) => {
      // This adds support for Unions
      path = (0, _pathUtils.convertUnionSyntaxToGraphql)(path);
      if (path) {
        return `${part}{${path}}`;
      }
      return `${part}${path}`;
    }, ``);
  }
  return part;
}