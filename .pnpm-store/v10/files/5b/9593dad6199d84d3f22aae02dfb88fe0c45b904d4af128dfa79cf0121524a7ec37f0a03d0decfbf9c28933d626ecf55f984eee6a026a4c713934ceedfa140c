"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.applyFastFilters = applyFastFilters;
exports.runFastFiltersAndSort = runFastFiltersAndSort;
var _orderBy2 = _interopRequireDefault(require("lodash/orderBy"));
var _query = require("../common/query");
var _indexing = require("./indexing");
var _iterable = require("../common/iterable");
var _2 = require("../");
/**
 * Creates a key for one filterCache inside FiltersCache
 */
function createFilterCacheKey(typeNames, filter) {
  // Note: while `elemMatch` is a special case, in the key it's just `elemMatch`
  // (This function is future proof for elemMatch support, won't receive it yet)
  let filterStep = filter;
  let comparator = ``;
  const paths = [];
  while (filterStep) {
    paths.push(...filterStep.path);
    if (filterStep.type === `elemMatch`) {
      const q = filterStep;
      filterStep = q.nestedQuery;
      // Make distinction between filtering `a.elemMatch.b.eq` and `a.b.eq`
      // In practice this is unlikely to be an issue, but it might
      paths.push(`elemMatch`);
    } else {
      const q = filterStep;
      comparator = q.query.comparator;
      break;
    }
  }

  // Note: the separators (`,` and `/`) are arbitrary but must be different
  return typeNames.join(`,`) + `/` + paths.join(`,`) + `/` + comparator;
}

/**
 * Given the path of a set of filters, return the sets of nodes that pass the
 * filter.
 * Only nodes of given node types will be considered
 * A fast index is created if one doesn't exist yet so cold call is slower.
 *
 * Note: Not a public API. Exported for tests.
 */
function applyFastFilters(filters, nodeTypeNames, filtersCache, sortFields, resolvedFields) {
  if (!filtersCache) {
    // If no filter cache is passed on, explicitly don't use one
    return null;
  }
  const nodesPerValueArrs = getBucketsForFilters(filters, nodeTypeNames, filtersCache, sortFields, resolvedFields);
  if (!nodesPerValueArrs) {
    return null;
  }
  if (nodesPerValueArrs.length === 0) {
    return [];
  } else {
    // Put smallest last (we'll pop it)
    nodesPerValueArrs.sort((a, b) => b.length - a.length);

    // All elements of nodesPerValueArrs should be sorted by counter and deduped
    // So if there's only one bucket in this list the next loop is skipped

    while (nodesPerValueArrs.length > 1) {
      // TS limitation: cannot guard against .pop(), so we must double cast
      const a = nodesPerValueArrs.pop();
      const b = nodesPerValueArrs.pop();
      nodesPerValueArrs.push((0, _indexing.intersectNodesByCounter)(a, b));
    }
    const result = nodesPerValueArrs[0];
    if (result.length === 0) {
      // Intersection came up empty. Not one node appeared in every bucket.
      return null;
    }
    return result;
  }
}

/**
 * If this returns undefined it means at least one cache was not found
 */
function getBucketsForFilters(filters, nodeTypeNames, filtersCache, sortFields, resolvedFields) {
  const nodesPerValueArrs = [];

  // Fail fast while trying to create and get the value-cache for each path
  const every = filters.every(filter => {
    const filterCacheKey = createFilterCacheKey(nodeTypeNames, filter);
    if (filter.type === `query`) {
      // (Let TS warn us if a new query type gets added)
      const q = filter;
      return getBucketsForQueryFilter(filterCacheKey, q, nodeTypeNames, filtersCache, nodesPerValueArrs, sortFields, resolvedFields);
    } else {
      // (Let TS warn us if a new query type gets added)
      const q = filter;
      return collectBucketForElemMatch(filterCacheKey, q, nodeTypeNames, filtersCache, nodesPerValueArrs, sortFields, resolvedFields);
    }
  });
  if (every) {
    return nodesPerValueArrs;
  }

  // "failed at least one"
  return undefined;
}

/**
 * Fetch all buckets for given query filter. That means it's not elemMatch.
 * Returns `false` if it found none.
 */
function getBucketsForQueryFilter(filterCacheKey, filter, nodeTypeNames, filtersCache, nodesPerValueArrs, sortFields, resolvedFields) {
  const {
    path: filterPath,
    query: {
      comparator,
      value: filterValue
    }
  } = filter;
  if (!filtersCache.has(filterCacheKey)) {
    // indexFields = sortFields
    (0, _indexing.ensureIndexByQuery)(comparator, filterCacheKey, filterPath, nodeTypeNames, filtersCache, sortFields, resolvedFields);
  }
  const nodesPerValue = (0, _indexing.getNodesFromCacheByValue)(filterCacheKey, filterValue, filtersCache, false);
  if (!nodesPerValue) {
    return false;
  }

  // In all other cases this must be a non-empty arr because the indexing
  // mechanism does not create an array unless there's a IGatsbyNode for it
  nodesPerValueArrs.push(nodesPerValue);
  return true;
}

/**
 * Matching node arrs are put in given array by reference
 */
function collectBucketForElemMatch(filterCacheKey, filter, nodeTypeNames, filtersCache, nodesPerValueArrs, sortFields, resolvedFields) {
  // Get comparator and target value for this elemMatch
  let comparator = `$eq`; // (Must be overridden but TS requires init)
  let targetValue = null;
  let f = filter;
  while (f) {
    if (f.type === `elemMatch`) {
      const q = f;
      f = q.nestedQuery;
    } else {
      const q = f;
      comparator = q.query.comparator;
      targetValue = q.query.value;
      break;
    }
  }
  if (!filtersCache.has(filterCacheKey)) {
    (0, _indexing.ensureIndexByElemMatch)(comparator, filterCacheKey, filter, nodeTypeNames, filtersCache, sortFields, resolvedFields);
  }
  const nodesByValue = (0, _indexing.getNodesFromCacheByValue)(filterCacheKey, targetValue, filtersCache, true);
  if (!nodesByValue) {
    return false;
  }

  // In all other cases this must be a non-empty arr because the indexing
  // mechanism does not create an array unless there's a IGatsbyNode for it
  nodesPerValueArrs.push(nodesByValue);
  return true;
}

/**
 * Filters and sorts a list of nodes using mongodb-like syntax.
 *
 * @param args raw graphql query filter/sort as an object
 * @property {{filter?: Object, sort?: Object, skip?: number, limit?: number} | undefined} args.queryArgs
 * @property {FiltersCache} args.filtersCache A cache of indexes where you can
 *   look up Nodes grouped by a FilterCacheKey, which yields a Map which holds
 *   an arr of Nodes for the value that the filter is trying to query against.
 *   This object lives in query/query-runner.js and is passed down runQuery.
 * @returns Collection of results. Collection will be sliced by `skip` and `limit`
 */
function runFastFiltersAndSort(args) {
  const {
    queryArgs: {
      filter,
      sort,
      limit,
      skip = 0
    } = {},
    resolvedFields = {},
    nodeTypeNames,
    filtersCache,
    stats
  } = args;
  const result = convertAndApplyFastFilters(filter, nodeTypeNames, filtersCache, resolvedFields, stats, sort);
  const sortedResult = sortNodes(result, sort, resolvedFields, stats);
  const totalCount = async () => sortedResult.length;
  const entries = skip || limit ? sortedResult.slice(skip, limit ? skip + (limit !== null && limit !== void 0 ? limit : 0) : undefined) : sortedResult;
  const nodeObjects = entries.map(nodeIds => (0, _2.getNode)(nodeIds.id));
  return {
    entries: new _iterable.GatsbyIterable(nodeObjects),
    totalCount
  };
}

/**
 * Return a collection of results.
 */
function convertAndApplyFastFilters(filterFields, nodeTypeNames, filtersCache, resolvedFields, stats, sort) {
  const filters = filterFields ? (0, _query.prefixResolvedFields)((0, _query.createDbQueriesFromObject)((0, _query.prepareQueryArgs)(filterFields)), resolvedFields) : [];
  if (stats) {
    filters.forEach(filter => {
      const filterStats = filterToStats(filter);
      const comparatorPath = filterStats.comparatorPath.join(`.`);
      stats.comparatorsUsed.set(comparatorPath, (stats.comparatorsUsed.get(comparatorPath) || 0) + 1);
      stats.uniqueFilterPaths.add(filterStats.filterPath.join(`.`));
    });
    if (filters.length > 1) {
      stats.totalNonSingleFilters++;
    }
  }
  if (filters.length === 0) {
    const filterCacheKey = createFilterCacheKey(nodeTypeNames, null);
    if (!filtersCache.has(filterCacheKey)) {
      (0, _indexing.ensureEmptyFilterCache)(filterCacheKey, nodeTypeNames, filtersCache, (sort === null || sort === void 0 ? void 0 : sort.fields) || [], resolvedFields);
    }

    // If there's a filter, there (now) must be an entry for this cache key
    const filterCache = filtersCache.get(filterCacheKey);
    // If there is no filter then the ensureCache step will populate this:
    const cache = filterCache.meta.orderedByCounter;
    return cache.slice(0);
  }
  const result = applyFastFilters(filters, nodeTypeNames, filtersCache, (sort === null || sort === void 0 ? void 0 : sort.fields) || [], resolvedFields);
  if (result) {
    if (stats) {
      stats.totalIndexHits++;
    }
    return result;
  }
  if (stats) {
    // to mean, "empty results"
    stats.totalSiftHits++;
  }
  return [];
}
function filterToStats(filter, filterPath = [], comparatorPath = []) {
  if (filter.type === `elemMatch`) {
    return filterToStats(filter.nestedQuery, filterPath.concat(filter.path), comparatorPath.concat([`elemMatch`]));
  } else {
    return {
      filterPath: filterPath.concat(filter.path),
      comparatorPath: comparatorPath.concat(filter.query.comparator)
    };
  }
}

/**
 * Given a list of filtered nodes and sorting parameters, sort the nodes
 * Returns same reference as input, sorted inline
 */
function sortNodes(nodes, sort, resolvedFields, stats) {
  var _sort$fields;
  if (!sort || ((_sort$fields = sort.fields) === null || _sort$fields === void 0 ? void 0 : _sort$fields.length) === 0 || !nodes || nodes.length === 0) {
    return nodes;
  }

  // create functions that return the item to compare on
  const sortFields = (0, _indexing.getSortFieldIdentifierKeys)(sort.fields, resolvedFields);
  const sortFns = sortFields.map(field => v => field in v ? v[field] : (0, _indexing.getGatsbyNodePartial)(v, sort.fields, resolvedFields)[field]);
  const sortOrder = sort.order.map(order => typeof order === `boolean` ? order : order.toLowerCase());
  if (stats) {
    sortFields.forEach(sortField => {
      stats.uniqueSorts.add(sortField);
    });
  }
  return (0, _orderBy2.default)(nodes, sortFns, sortOrder);
}
//# sourceMappingURL=run-fast-filters.js.map