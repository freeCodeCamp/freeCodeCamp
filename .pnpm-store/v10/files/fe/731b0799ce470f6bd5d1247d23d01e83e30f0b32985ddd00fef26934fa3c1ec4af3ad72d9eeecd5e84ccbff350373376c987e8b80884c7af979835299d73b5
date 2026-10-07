"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DbComparator = void 0;
exports.createDbQueriesFromObject = createDbQueriesFromObject;
exports.dbQueryToDottedField = dbQueryToDottedField;
exports.getFilterStatement = getFilterStatement;
exports.objectToDottedField = objectToDottedField;
exports.prefixResolvedFields = prefixResolvedFields;
exports.prepareQueryArgs = prepareQueryArgs;
exports.sortBySpecificity = sortBySpecificity;
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _flatMap2 = _interopRequireDefault(require("lodash/flatMap"));
var _prepareRegex = require("../../utils/prepare-regex");
var _micromatch = require("micromatch");
let DbComparator; // TODO: merge with DbComparatorValue
exports.DbComparator = DbComparator;
(function (DbComparator) {
  DbComparator["EQ"] = "$eq";
  DbComparator["NE"] = "$ne";
  DbComparator["GT"] = "$gt";
  DbComparator["GTE"] = "$gte";
  DbComparator["LT"] = "$lt";
  DbComparator["LTE"] = "$lte";
  DbComparator["IN"] = "$in";
  DbComparator["NIN"] = "$nin";
  DbComparator["REGEX"] = "$regex";
  DbComparator["GLOB"] = "$glob";
})(DbComparator || (exports.DbComparator = DbComparator = {}));
const DB_COMPARATOR_VALUES = new Set(Object.values(DbComparator));
function isDbComparator(value) {
  return DB_COMPARATOR_VALUES.has(value);
}
/**
 * Converts a nested mongo args object into array of DbQuery objects,
 * structured representation of each distinct path of the query. We convert
 * nested objects with multiple keys to separate instances.
 */
function createDbQueriesFromObject(filter) {
  return createDbQueriesFromObjectNested(filter);
}
function createDbQueriesFromObjectNested(filter, path = []) {
  const keys = Object.getOwnPropertyNames(filter);
  return (0, _flatMap2.default)(keys, key => {
    if (key === `$elemMatch`) {
      const queries = createDbQueriesFromObjectNested(filter[key]);
      return queries.map(query => {
        return {
          type: `elemMatch`,
          path: path,
          nestedQuery: query
        };
      });
    } else if (isDbComparator(key)) {
      return [{
        type: `query`,
        path,
        query: {
          comparator: key,
          value: filter[key]
        }
      }];
    } else {
      return createDbQueriesFromObjectNested(filter[key], path.concat([key]));
    }
  });
}

/**
 * Takes a DbQuery structure and returns a dotted representation of a field referenced in this query.
 *
 * Example:
 * ```js
 *   const query = createDbQueriesFromObject({
 *     foo: { $elemMatch: { id: { $eq: 5 }, test: { $gt: 42 } } },
 *     bar: { $in: [`bar`] }
 *   })
 *   const result = query.map(dbQueryToDottedField)
 * ```
 * Returns:
 *   [`foo.id`, `foo.test`, `bar`]
 */
function dbQueryToDottedField(query) {
  const path = [...query.path];
  let currentQuery = query;
  while (currentQuery.type === `elemMatch`) {
    currentQuery = currentQuery.nestedQuery;
    path.push(...currentQuery.path);
  }
  return path.join(`.`);
}
function getFilterStatement(dbQuery) {
  let currentQuery = dbQuery;
  while (currentQuery.type !== `query`) {
    currentQuery = currentQuery.nestedQuery;
  }
  return currentQuery.query;
}
function prefixResolvedFields(queries, resolvedFields) {
  const dottedFields = objectToDottedField(resolvedFields);
  const dottedFieldKeys = Object.getOwnPropertyNames(dottedFields);
  queries.forEach(query => {
    const prefixPath = query.path.join(`.`);
    if (dottedFields[prefixPath] || dottedFieldKeys.some(dottedKey => dottedKey.startsWith(prefixPath)) && query.type === `elemMatch` || dottedFieldKeys.some(dottedKey => prefixPath.startsWith(dottedKey))) {
      query.path.unshift(`__gatsby_resolved`);
    }
  });
  return queries;
}

/**
 * Transforms filters coming from input GraphQL query to mongodb-compatible format
 * (by prefixing comparators with "$").
 *
 * Example:
 *   { foo: { eq: 5 } } -> { foo: { $eq: 5 }}
 */
function prepareQueryArgs(filterFields = {}) {
  const filters = {};
  Object.keys(filterFields).forEach(key => {
    const value = filterFields[key];
    if ((0, _isPlainObject2.default)(value)) {
      filters[key === `elemMatch` ? `$elemMatch` : key] = prepareQueryArgs(value);
    } else {
      switch (key) {
        case `regex`:
          if (typeof value !== `string`) {
            throw new Error(`The $regex comparator is expecting the regex as a string, not an actual regex or anything else`);
          }
          filters[`$regex`] = (0, _prepareRegex.prepareRegex)(value);
          break;
        case `glob`:
          filters[`$regex`] = (0, _micromatch.makeRe)(value);
          break;
        default:
          filters[`$${key}`] = value;
      }
    }
  });
  return filters;
}

// Converts a nested mongo args object into a dotted notation. acc
// (accumulator) must be a reference to an empty object. The converted
// fields will be added to it. E.g
//
// {
//   internal: {
//     type: {
//       $eq: "TestNode"
//     },
//     content: {
//       $regex: new MiniMatch(v)
//     }
//   },
//   id: {
//     $regex: newMiniMatch(v)
//   }
// }
//
// After execution, acc would be:
//
// {
//   "internal.type": {
//     $eq: "TestNode"
//   },
//   "internal.content": {
//     $regex: new MiniMatch(v)
//   },
//   "id": {
//     $regex: // as above
//   }
// }

// Like above, but doesn't handle $elemMatch
function objectToDottedField(obj, path = []) {
  let result = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if ((0, _isPlainObject2.default)(value)) {
      const pathResult = objectToDottedField(value, path.concat(key));
      result = {
        ...result,
        ...pathResult
      };
    } else {
      result[path.concat(key).join(`.`)] = value;
    }
  });
  return result;
}
const comparatorSpecificity = {
  [DbComparator.EQ]: 80,
  [DbComparator.IN]: 70,
  [DbComparator.GTE]: 60,
  [DbComparator.LTE]: 50,
  [DbComparator.GT]: 40,
  [DbComparator.LT]: 30,
  [DbComparator.NIN]: 20,
  [DbComparator.NE]: 10
};
function sortBySpecificity(all) {
  return [...all].sort(compareBySpecificityDesc);
}
function compareBySpecificityDesc(a, b) {
  const aComparator = getFilterStatement(a).comparator;
  const bComparator = getFilterStatement(b).comparator;
  if (aComparator === bComparator) {
    return 0;
  }
  const aSpecificity = comparatorSpecificity[aComparator];
  const bSpecificity = comparatorSpecificity[bComparator];
  if (!aSpecificity || !bSpecificity) {
    throw new Error(`Unexpected comparator pair: ${aComparator}, ${bComparator}`);
  }
  return aSpecificity > bSpecificity ? -1 : 1;
}
//# sourceMappingURL=query.js.map