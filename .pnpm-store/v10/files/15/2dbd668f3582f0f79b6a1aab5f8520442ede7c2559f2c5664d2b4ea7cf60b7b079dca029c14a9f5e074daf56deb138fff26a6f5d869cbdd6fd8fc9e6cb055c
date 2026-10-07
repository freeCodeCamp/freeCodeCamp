"use strict";

exports.__esModule = true;
exports.BinaryInfinityPositive = exports.BinaryInfinityNegative = void 0;
exports.countUsingIndexOnly = countUsingIndexOnly;
exports.filterUsingIndex = filterUsingIndex;
exports.getIndexRanges = getIndexRanges;
var _iterable = require("../../common/iterable");
var _query = require("../../common/query");
var _createIndex = require("./create-index");
var _common = require("./common");
var _util = require("util");
// JS values encoded by ordered-binary never start with 0 or 255 byte
const BinaryInfinityNegative = Buffer.from([0]);
exports.BinaryInfinityNegative = BinaryInfinityNegative;
const BinaryInfinityPositive = String.fromCharCode(255).repeat(4);
exports.BinaryInfinityPositive = BinaryInfinityPositive;
var ValueEdges;
(function (ValueEdges) {
  ValueEdges[ValueEdges["BEFORE"] = -1] = "BEFORE";
  ValueEdges[ValueEdges["EQ"] = 0] = "EQ";
  ValueEdges[ValueEdges["AFTER"] = 1] = "AFTER";
})(ValueEdges || (ValueEdges = {}));
function filterUsingIndex(args) {
  const context = createFilteringContext(args);
  const ranges = getIndexRanges(context);
  let entries = ranges.length > 0 ? performRangeScan(context, ranges) : performFullScan(context);
  if (context.usedQueries.size !== args.dbQueries.length) {
    // Try to additionally filter out results using data stored in index
    entries = narrowResultsIfPossible(context, entries);
  }
  if (isMultiKeyIndex(context) && needsDeduplication(context)) {
    entries = entries.deduplicate(getIdentifier);
  }
  return {
    entries,
    usedQueries: context.usedQueries,
    usedLimit: context.usedLimit,
    usedSkip: context.usedSkip
  };
}
function countUsingIndexOnly(args) {
  const context = createFilteringContext(args);
  const {
    databases: {
      indexes
    },
    dbQueries,
    indexMetadata: {
      keyPrefix
    }
  } = args;
  const ranges = getIndexRanges(context);
  if (context.usedQueries.size !== dbQueries.length) {
    throw new Error(`Cannot count using index only`);
  }
  if (isMultiKeyIndex(context) && needsDeduplication(context)) {
    throw new Error(`Cannot count using MultiKey index.`);
  }
  if (ranges.length === 0) {
    const range = {
      start: [keyPrefix],
      end: [getValueEdgeAfter(keyPrefix)],
      snapshot: false
    };
    return indexes.getKeysCount(range);
  }
  let count = 0;
  for (let {
    start,
    end
  } of ranges) {
    start = [keyPrefix, ...start];
    end = [keyPrefix, ...end];
    // Assuming ranges are not overlapping
    const range = {
      start,
      end,
      snapshot: false
    };
    count += indexes.getKeysCount(range);
  }
  return count;
}
function createFilteringContext(args) {
  return {
    ...args,
    usedLimit: undefined,
    usedSkip: 0,
    usedQueries: new Set()
  };
}
function isMultiKeyIndex(context) {
  return context.indexMetadata.multiKeyFields.length > 0;
}
function needsDeduplication(context) {
  if (!isMultiKeyIndex(context)) {
    return false;
  }
  // Deduplication is not needed if all multiKeyFields have applied `eq` filters
  const fieldsWithAppliedEq = new Set();
  context.usedQueries.forEach(q => {
    const filter = (0, _query.getFilterStatement)(q);
    if (filter.comparator === _query.DbComparator.EQ) {
      fieldsWithAppliedEq.add((0, _query.dbQueryToDottedField)(q));
    }
  });
  return context.indexMetadata.multiKeyFields.some(fieldName => !fieldsWithAppliedEq.has(fieldName));
}
function performRangeScan(context, ranges) {
  const {
    indexMetadata: {
      keyPrefix,
      stats
    },
    reverse
  } = context;
  let {
    limit,
    skip: offset = 0
  } = context;
  if (context.dbQueries.length !== context.usedQueries.size) {
    // Since this query is not fully satisfied by the index, we can't use limit/skip
    limit = undefined;
    offset = 0;
  }
  if (ranges.length > 1) {
    // e.g. { in: [1, 2] }
    // Cannot use offset: we will run several range queries and it's not clear which one to offset
    // TODO: assuming ranges are sorted and not overlapping it should be possible to use offsets in this case
    //   by running first range query, counting results while lazily iterating and
    //   running the next range query when the previous iterator is done (and count is known)
    //   with offset = offset - previousRangeCount, limit = limit - previousRangeCount
    limit = typeof limit !== `undefined` ? offset + limit : undefined;
    offset = 0;
  }
  if (limit && isMultiKeyIndex(context) && needsDeduplication(context)) {
    // Cannot use limit:
    // MultiKey index may contain duplicates - we can only set a safe upper bound
    limit *= stats.maxKeysPerItem;
  }

  // Assuming ranges are sorted and not overlapping, we can yield results sequentially
  const lmdbRanges = [];
  for (let {
    start,
    end
  } of ranges) {
    start = [keyPrefix, ...start];
    end = [keyPrefix, ...end];
    const range = !reverse ? {
      start,
      end,
      limit,
      offset,
      snapshot: false
    } : {
      start: end,
      end: start,
      limit,
      offset,
      reverse,
      snapshot: false
    };
    lmdbRanges.push(range);
  }
  context.usedLimit = limit;
  context.usedSkip = offset;
  return new _iterable.GatsbyIterable(() => traverseRanges(context, lmdbRanges));
}
function performFullScan(context) {
  // *Caveat*: our old query implementation was putting undefined and null values at the end
  //   of the list when ordered ascending. But lmdb-store keeps them at the top.
  //   So in LMDB case, need to concat two ranges to conform to our old format:
  //     concat(undefinedToEnd, topToUndefined)
  const {
    reverse,
    indexMetadata: {
      keyPrefix
    }
  } = context;
  let start = [keyPrefix, getValueEdgeAfter(_createIndex.undefinedSymbol)];
  let end = [getValueEdgeAfter(keyPrefix)];
  let range = !reverse ? {
    start,
    end,
    snapshot: false
  } : {
    start: end,
    end: start,
    reverse,
    snapshot: false
  };
  const undefinedToEnd = range;

  // Concat null/undefined values
  end = start;
  start = [keyPrefix, null];
  range = !reverse ? {
    start,
    end,
    snapshot: false
  } : {
    start: end,
    end: start,
    reverse,
    snapshot: false
  };
  const topToUndefined = range;
  const ranges = !reverse ? [undefinedToEnd, topToUndefined] : [topToUndefined, undefinedToEnd];
  return new _iterable.GatsbyIterable(() => traverseRanges(context, ranges));
}
function* traverseRanges(context, ranges) {
  const {
    databases: {
      indexes
    }
  } = context;
  for (const range of ranges) {
    // @ts-ignore
    yield* indexes.getRange(range);
  }
}

/**
 * Takes results after the index scan and tries to filter them additionally with unused parts of the query.
 *
 * This is O(N) but the advantage is that it uses data available in the index.
 * So it effectively bypasses the `getNode()` call for such filters (with all associated deserialization complexity).
 *
 * Example:
 *   Imagine the index is: { foo: 1, bar: 1 }
 *
 * Now we run the query:
 *   sort: [`foo`]
 *   filter: { bar: { eq: `test` }}
 *
 * Initial filtering pass will have to perform a full index scan (because `bar` is the last field in the index).
 *
 * But we still have values of `bar` stored in the index itself,
 * so can filter by this value without loading the full node contents.
 */
function narrowResultsIfPossible(context, entries) {
  const {
    indexMetadata,
    dbQueries,
    usedQueries
  } = context;
  const indexFields = new Map();
  indexMetadata.keyFields.forEach(([fieldName], positionInKey) => {
    // Every index key is [indexId, field1, field2, ...] and `indexMetadata.keyFields` contains [field1, field2, ...]
    // As `indexId` is in the first column the fields need to be offset by +1 for correct addressing
    indexFields.set(fieldName, positionInKey + 1);
  });
  const filtersToApply = [];
  for (const query of dbQueries) {
    const fieldName = (0, _query.dbQueryToDottedField)(query);
    const positionInKey = indexFields.get(fieldName);
    if (typeof positionInKey === `undefined`) {
      // No data for this field in index
      continue;
    }
    if (usedQueries.has(query)) {
      // Filter is already applied
      continue;
    }
    if (isMultiKeyIndex(context) && isNegatedQuery(query)) {
      // NE/NIN not supported with MultiKey indexes:
      //   MultiKey indexes include duplicates; negated queries will only filter some of those
      //   but may still incorrectly include others in final results
      continue;
    }
    const filter = (0, _query.getFilterStatement)(query);
    filtersToApply.push([filter, positionInKey]);
    usedQueries.add(query);
  }
  return filtersToApply.length === 0 ? entries : entries.filter(({
    key
  }) => {
    for (const [filter, fieldPositionInIndex] of filtersToApply) {
      const value = key[fieldPositionInIndex] === _createIndex.undefinedSymbol ? undefined : key[fieldPositionInIndex];
      if (!(0, _common.matchesFilter)(filter, value)) {
        // Mimic AND semantics
        return false;
      }
    }
    return true;
  });
}

/**
 * Returns query clauses that can potentially use index.
 * Returned list is sorted by query specificity
 */
function getSupportedQueries(context, dbQueries) {
  const isSupported = new Set([_query.DbComparator.EQ, _query.DbComparator.IN, _query.DbComparator.GTE, _query.DbComparator.LTE, _query.DbComparator.GT, _query.DbComparator.LT, _query.DbComparator.NIN, _query.DbComparator.NE]);
  let supportedQueries = dbQueries.filter(query => isSupported.has((0, _query.getFilterStatement)(query).comparator));
  if (isMultiKeyIndex(context)) {
    // Note:
    // NE and NIN are not supported by multi-key indexes. Why?
    //   Imagine a node { id: 1, field: [`foo`, `bar`] }
    //   Then the filter { field: { ne: `foo` } } should completely remove this node from results.
    //   But multikey index contains separate entries for `foo` and `bar` values.
    //   Final range will exclude entry "foo" but it will still include entry for "bar" hence
    //   will incorrectly include our node in results.
    supportedQueries = supportedQueries.filter(query => !isNegatedQuery(query));
  }
  return (0, _query.sortBySpecificity)(supportedQueries);
}
function isEqualityQuery(query) {
  const filter = (0, _query.getFilterStatement)(query);
  return filter.comparator === _query.DbComparator.EQ || filter.comparator === _query.DbComparator.IN;
}
function isNegatedQuery(query) {
  const filter = (0, _query.getFilterStatement)(query);
  return filter.comparator === _query.DbComparator.NE || filter.comparator === _query.DbComparator.NIN;
}
function getIndexRanges(context) {
  const {
    dbQueries,
    indexMetadata: {
      keyFields
    }
  } = context;
  const rangeStarts = [];
  const rangeEndings = [];
  const supportedQueries = getSupportedQueries(context, dbQueries);
  for (const indexFieldInfo of new Map(keyFields)) {
    const query = getMostSpecificQuery(supportedQueries, indexFieldInfo);
    if (!query) {
      // Use index prefix, not all index fields
      break;
    }
    const result = resolveIndexFieldRanges(context, query, indexFieldInfo);
    rangeStarts.push(result.rangeStarts);
    rangeEndings.push(result.rangeEndings);
    if (!isEqualityQuery(query)) {
      // Compound index { a: 1, b: 1, c: 1 } supports only one non-eq (range) operator. E.g.:
      //  Supported: { a: { eq: `foo` }, b: { eq: 8 }, c: { gt: 5 } }
      //  Not supported: { a: { eq: `foo` }, b: { gt: 5 }, c: { eq: 5 } }
      //  (or to be precise, can do a range scan only for { a: { eq: `foo` }, b: { gt: 5 } })
      break;
    }
  }
  if (!rangeStarts.length) {
    return [];
  }
  // Only the last segment encloses the whole range.
  // For example, given an index { a: 1, b: 1 } and a filter { a: { eq: `foo` }, b: { eq: `bar` } },
  // It should produce this range:
  // {
  //   start: [`foo`, `bar`],
  //   end: [`foo`, [`bar`, BinaryInfinityPositive]]
  // }
  //
  // Not this:
  // {
  //   start: [`foo`, `bar`],
  //   end: [[`foo`, BinaryInfinityPositive], [`bar`, BinaryInfinityPositive]]
  // }
  for (let i = 0; i < rangeStarts.length - 1; i++) {
    rangeEndings[i] = rangeStarts[i];
  }

  // Example:
  //   rangeStarts: [
  //     [field1Start1, field1Start2],
  //     [field2Start1],
  //   ]
  //   rangeEnds: [
  //     [field1End1, field1End2],
  //     [field2End1],
  //   ]
  // Need:
  //   rangeStartsProduct: [
  //     [field1Start1, field2Start1],
  //     [field1Start2, field2Start1],
  //   ]
  //   rangeEndingsProduct: [
  //     [field1End1, field2End1],
  //     [field1End2, field2End1],
  //   ]
  const rangeStartsProduct = (0, _common.cartesianProduct)(...rangeStarts);
  const rangeEndingsProduct = (0, _common.cartesianProduct)(...rangeEndings);
  const ranges = [];
  for (let i = 0; i < rangeStartsProduct.length; i++) {
    ranges.push({
      start: rangeStartsProduct[i],
      end: rangeEndingsProduct[i]
    });
  }
  // TODO: sort and intersect ranges. Also, we may want this at some point:
  //   https://docs.mongodb.com/manual/core/multikey-index-bounds/
  return ranges;
}
function getFieldQueries(queries, fieldName) {
  return queries.filter(q => (0, _query.dbQueryToDottedField)(q) === fieldName);
}
function getMostSpecificQuery(queries, [indexField]) {
  const fieldQueries = getFieldQueries(queries, indexField);
  // Assuming queries are sorted by specificity, the best bet is to pick the first query
  return fieldQueries[0];
}
function resolveIndexFieldRanges(context, query, [field, sortDirection]) {
  // Tracking starts and ends separately instead of doing Array<[start, end]>
  //  to simplify cartesian product creation later
  const rangeStarts = [];
  const rangeEndings = [];
  const filter = (0, _query.getFilterStatement)(query);
  if (filter.comparator === _query.DbComparator.IN && !Array.isArray(filter.value)) {
    throw new Error("The argument to the `in` predicate should be an array");
  }
  context.usedQueries.add(query);
  switch (filter.comparator) {
    case _query.DbComparator.EQ:
    case _query.DbComparator.IN:
      {
        const arr = Array.isArray(filter.value) ? [...filter.value] : [filter.value];

        // Sort ranges by index sort direction
        arr.sort((a, b) => {
          if (a === b) return 0;
          if (sortDirection === 1) return a > b ? 1 : -1;
          return a < b ? 1 : -1;
        });
        let hasNull = false;
        for (const item of new Set(arr)) {
          const value = toIndexFieldValue(item, filter);
          if (value === null) hasNull = true;
          rangeStarts.push(value);
          rangeEndings.push(getValueEdgeAfter(value));
        }
        // Special case: { eq: null } or { in: [null, `any`]} must also include values for undefined!
        if (hasNull) {
          rangeStarts.push(_createIndex.undefinedSymbol);
          rangeEndings.push(getValueEdgeAfter(_createIndex.undefinedSymbol));
        }
        break;
      }
    case _query.DbComparator.LT:
    case _query.DbComparator.LTE:
      {
        var _resolveRangeEdge;
        if (Array.isArray(filter.value)) throw new Error(`${filter.comparator} value must not be an array`);
        const value = toIndexFieldValue(filter.value, filter);
        const end = filter.comparator === _query.DbComparator.LT ? value : getValueEdgeAfter(value);

        // Try to find matching GTE/GT filter
        const start = (_resolveRangeEdge = resolveRangeEdge(context, field, _query.DbComparator.GTE)) !== null && _resolveRangeEdge !== void 0 ? _resolveRangeEdge : resolveRangeEdge(context, field, _query.DbComparator.GT, ValueEdges.AFTER);

        // Do not include null or undefined in results unless null was requested explicitly
        //
        // Index ordering:
        //  BinaryInfinityNegative
        //  null
        //  Symbol(`undef`)
        //  -10
        //  10
        //  `Hello`
        //  [`Hello`]
        //  BinaryInfinityPositive
        const rangeHead = value === null ? BinaryInfinityNegative : getValueEdgeAfter(_createIndex.undefinedSymbol);
        rangeStarts.push(start !== null && start !== void 0 ? start : rangeHead);
        rangeEndings.push(end);
        break;
      }
    case _query.DbComparator.GT:
    case _query.DbComparator.GTE:
      {
        var _resolveRangeEdge2;
        if (Array.isArray(filter.value)) throw new Error(`${filter.comparator} value must not be an array`);
        const value = toIndexFieldValue(filter.value, filter);
        const start = filter.comparator === _query.DbComparator.GTE ? value : getValueEdgeAfter(value);

        // Try to find matching LT/LTE
        const end = (_resolveRangeEdge2 = resolveRangeEdge(context, field, _query.DbComparator.LTE, ValueEdges.AFTER)) !== null && _resolveRangeEdge2 !== void 0 ? _resolveRangeEdge2 : resolveRangeEdge(context, field, _query.DbComparator.LT);
        const rangeTail = value === null ? getValueEdgeAfter(null) : BinaryInfinityPositive;
        rangeStarts.push(start);
        rangeEndings.push(end !== null && end !== void 0 ? end : rangeTail);
        break;
      }
    case _query.DbComparator.NE:
    case _query.DbComparator.NIN:
      {
        const arr = Array.isArray(filter.value) ? [...filter.value] : [filter.value];

        // Sort ranges by index sort direction
        arr.sort((a, b) => {
          if (a === b) return 0;
          if (sortDirection === 1) return a > b ? 1 : -1;
          return a < b ? 1 : -1;
        });
        const hasNull = arr.some(value => value === null);
        if (hasNull) {
          rangeStarts.push(getValueEdgeAfter(_createIndex.undefinedSymbol));
        } else {
          rangeStarts.push(BinaryInfinityNegative);
        }
        for (const item of new Set(arr)) {
          const value = toIndexFieldValue(item, filter);
          if (value === null) continue; // already handled via hasNull case above
          rangeEndings.push(value);
          rangeStarts.push(getValueEdgeAfter(value));
        }
        rangeEndings.push(BinaryInfinityPositive);
        break;
      }
    default:
      throw new Error(`Unsupported predicate: ${filter.comparator}`);
  }
  return {
    rangeStarts,
    rangeEndings
  };
}
function resolveRangeEdge(context, indexField, predicate, edge = ValueEdges.EQ) {
  const fieldQueries = getFieldQueries(context.dbQueries, indexField);
  for (const dbQuery of fieldQueries) {
    if (context.usedQueries.has(dbQuery)) {
      continue;
    }
    const filterStatement = (0, _query.getFilterStatement)(dbQuery);
    if (filterStatement.comparator !== predicate) {
      continue;
    }
    context.usedQueries.add(dbQuery);
    const value = filterStatement.value;
    if (Array.isArray(value)) {
      throw new Error(`Range filter ${predicate} should not have array value`);
    }
    if (typeof value === `object` && value !== null) {
      throw new Error(`Range filter ${predicate} should not have value of type ${typeof value}`);
    }
    if (edge === 0) {
      return value;
    }
    return edge < 0 ? getValueEdgeBefore(value) : getValueEdgeAfter(value);
  }
  return undefined;
}

/**
 * Returns the edge after the given value, suitable for lmdb range queries.
 *
 * Example:
 * Get all items from index starting with ["foo"] prefix up to the next existing prefix:
 *
 * ```js
 *   db.getRange({ start: ["foo"], end: [getValueEdgeAfter("foo")] })
 * ```
 *
 * This method relies on ordered-binary format used by lmdb-store to persist keys
 * and assumes keys are composite and represented as arrays.
 *
 * Implementation detail: ordered-binary treats `null` as multipart separator within binary sequence
 */
function getValueEdgeAfter(value) {
  return [value, BinaryInfinityPositive];
}
function getValueEdgeBefore(value) {
  return [_createIndex.undefinedSymbol, value];
}
function toIndexFieldValue(filterValue, filter) {
  if (typeof filterValue === `object` && filterValue !== null) {
    throw new Error(`Bad filter value for predicate ${filter.comparator}: ${(0, _util.inspect)(filter.value)}`);
  }
  return filterValue;
}
function getIdentifier(entry) {
  const id = entry.key[entry.key.length - 1];
  if (typeof id !== `number` && typeof id !== `string`) {
    const out = (0, _util.inspect)(id);
    throw new Error(`Last element of index key is expected to be numeric or string id, got ${out}`);
  }
  return id;
}
//# sourceMappingURL=filter-using-index.js.map