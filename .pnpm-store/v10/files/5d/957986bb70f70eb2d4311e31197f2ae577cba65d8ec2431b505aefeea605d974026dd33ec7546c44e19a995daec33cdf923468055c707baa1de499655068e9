"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.filterTargetDefinitions = filterTargetDefinitions;
exports.sortDefinitions = sortDefinitions;
exports.stabilizeSchema = stabilizeSchema;
var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));
var _slugify = _interopRequireDefault(require("slugify"));
var _graphql = require("graphql");
/**
 * Makes the schema deterministic by sorting it (so on new saves the whole file doesn't change, only the change that was made). It can be used for e.g. tests when two schema diffs should be compared.
 */
function stabilizeSchema(schema) {
  return (0, _graphql.lexicographicSortSchema)(schema);
}
function sortDefinitions(a, b) {
  return a.name.localeCompare(b.name);
}

/**
 * Internally in Gatsby we use the function generateQueryName:
 * packages/gatsby/src/query/file-parser.js
 * This function re-implements this partially to guess if a query is unnamed
 */
function guessIfUnnnamedQuery({
  isStaticQuery,
  name,
  filePath
}) {
  const queryType = isStaticQuery ? `static` : `page`;
  const generatedQueryName = (0, _slugify.default)(filePath, {
    replacement: ` `,
    lower: false
  });
  const pattern = (0, _camelCase2.default)(`${queryType}-${generatedQueryName}`);
  return name.startsWith(pattern);
}
function guessIfThirdpartyDefinition({
  filePath
}) {
  return /(node_modules|\.yarn|\.cache)/.test(filePath);
}
function isFragmentDefinition(def) {
  return def.isFragment;
}
function isThirdpartyFragment(def) {
  return isFragmentDefinition(def) && guessIfThirdpartyDefinition(def);
}

/**
 * We don't want third-party definitions/queries unless it's a fragment.
 * We also don't want unnamed queries ending up in the TS types.
 */
function isTargetDefinition(def) {
  if (isThirdpartyFragment(def)) {
    return true;
  }
  return !(guessIfThirdpartyDefinition(def) || guessIfUnnnamedQuery(def));
}
function filterTargetDefinitions(defMap) {
  const defs = [];
  for (const [name, def] of defMap) {
    if (isTargetDefinition(def)) {
      defs.push([name, def]);
    }
  }
  return new Map(defs);
}
//# sourceMappingURL=utils.js.map