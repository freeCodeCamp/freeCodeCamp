"use strict";

exports.__esModule = true;
exports.suggestIndex = suggestIndex;
var _query = require("../../common/query");
var _common = require("./common");
/**
 * Suggest index fields for this combination of filter and sort.
 *
 * Prioritizes sort fields over filter fields when can't use index
 * for both because sorting is expensive both CPU and memory-wise.
 */
function suggestIndex({
  filter,
  sort,
  maxFields = 6
}) {
  const filterQueries = (0, _query.createDbQueriesFromObject)((0, _query.prepareQueryArgs)(filter));
  const filterQueriesThatCanUseIndex = getQueriesThatCanUseIndex(filterQueries);
  const sortFields = getSortFieldsThatCanUseIndex(sort);
  if (!sortFields.length && !filterQueriesThatCanUseIndex.length) {
    return [];
  }
  if (!filterQueriesThatCanUseIndex.length) {
    return dedupeAndTrim(sortFields, maxFields);
  }
  if (!sortFields.length) {
    return dedupeAndTrim(toIndexFields(filterQueriesThatCanUseIndex), maxFields);
  }

  // Combined index for filter+sort only makes sense when all prefix fields have `eq` predicate
  // Same as https://docs.mongodb.com/manual/tutorial/sort-results-with-indexes/#sort-and-non-prefix-subset-of-an-index
  const sortDirection = sortFields[0][1];
  const eqFilterQueries = getEqQueries(filterQueriesThatCanUseIndex);
  const eqFilterFields = toIndexFields(eqFilterQueries, sortDirection);

  // Index prefix should not contain eq filters overlapping with sort fields
  const overlap = findOverlappingFields(eqFilterQueries, sortFields);
  return dedupeAndTrim([...eqFilterFields.filter(([name]) => !overlap.has(name)), ...sortFields,
  // Still append other filter fields to the tail of the index to leverage additional filtering
  //  of results using data stored in the index (without loading full node object)
  //  Note: fields previously listed in eqFilterFields and sortFields will be removed in dedupeAndTrim
  ...toIndexFields(filterQueriesThatCanUseIndex, sortDirection)], maxFields);
}
const canUseIndex = new Set([_query.DbComparator.EQ, _query.DbComparator.IN, _query.DbComparator.GTE, _query.DbComparator.LTE, _query.DbComparator.GT, _query.DbComparator.LT, _query.DbComparator.NIN, _query.DbComparator.NE]);

/**
 * Returns queries that can potentially use index.
 * Returned list is sorted by query specificity
 */
function getQueriesThatCanUseIndex(all) {
  return (0, _query.sortBySpecificity)(all.filter(q => canUseIndex.has((0, _query.getFilterStatement)(q).comparator)));
}
function getSortFieldsThatCanUseIndex(querySortArg) {
  const sort = querySortArg || {
    fields: [],
    order: []
  };
  const initialOrder = (0, _common.isDesc)(sort === null || sort === void 0 ? void 0 : sort.order[0]) ? -1 : 1;
  const sortFields = [];
  for (let i = 0; i < sort.fields.length; i++) {
    const field = sort.fields[i];
    const order = (0, _common.isDesc)(sort.order[i]) ? -1 : 1;
    if (order !== initialOrder) {
      // Mixed sort order is not supported by our indexes yet :/
      // See https://github.com/DoctorEvidence/lmdb-store/discussions/62#discussioncomment-898949
      break;
    }
    sortFields.push([field, order]);
  }
  return sortFields;
}
function findOverlappingFields(filterQueries, sortFields) {
  const overlap = new Set();
  for (const [fieldName] of sortFields) {
    const filterQuery = filterQueries.find(q => (0, _query.dbQueryToDottedField)(q) === fieldName);
    if (!filterQuery) {
      break;
    }
    overlap.add(fieldName);
  }
  return overlap;
}
function getEqQueries(filterQueries) {
  return filterQueries.filter(filterQuery => (0, _query.getFilterStatement)(filterQuery).comparator === _query.DbComparator.EQ);
}
function toIndexFields(queries, sortDirection = 1) {
  return queries.map(q => [(0, _query.dbQueryToDottedField)(q), sortDirection]);
}
function dedupeAndTrim(fields, maxFields) {
  return [...new Map(fields)].slice(0, maxFields);
}
//# sourceMappingURL=suggest-index.js.map