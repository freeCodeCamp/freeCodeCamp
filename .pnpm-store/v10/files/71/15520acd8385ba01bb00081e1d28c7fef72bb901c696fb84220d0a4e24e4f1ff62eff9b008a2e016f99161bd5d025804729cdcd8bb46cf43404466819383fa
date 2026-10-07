"use strict";

exports.__esModule = true;
exports.compareByKeySuffix = compareByKeySuffix;
exports.doRunQuery = doRunQuery;
var _iterable = require("../../common/iterable");
var _query = require("../../common/query");
var _createIndex = require("./create-index");
var _filterUsingIndex = require("./filter-using-index");
var _redux = require("../../../redux");
var _common = require("./common");
var _suggestIndex = require("./suggest-index");
async function doRunQuery(args) {
  // Note: Keeping doRunQuery method the only async method in chain for perf
  const context = createQueryContext(args);
  const totalCount = async () => runCountOnce({
    ...context,
    limit: undefined,
    skip: 0
  });
  if (canUseIndex(context)) {
    await Promise.all(context.nodeTypeNames.map(typeName => (0, _createIndex.createIndex)(context, typeName, context.suggestedIndexFields)));
    return {
      entries: performIndexScan(context),
      totalCount
    };
  }
  return {
    entries: performFullTableScan(context),
    totalCount
  };
}
function performIndexScan(context) {
  const {
    suggestedIndexFields,
    sortFields
  } = context;
  const filterContext = context.nodeTypeNames.length === 1 ? context : {
    ...context,
    skip: 0,
    limit: typeof context.limit === `undefined` ? undefined : context.skip + context.limit
  };
  let result = new _iterable.GatsbyIterable([]);
  let resultOffset = filterContext.skip;
  for (const typeName of context.nodeTypeNames) {
    const indexMetadata = (0, _createIndex.getIndexMetadata)(context, typeName, suggestedIndexFields);
    if (!needsSorting(context)) {
      const {
        nodes,
        usedSkip
      } = filterNodes(filterContext, indexMetadata);
      result = result.concat(nodes);
      resultOffset = usedSkip;
      continue;
    }
    if (canUseIndexForSorting(indexMetadata, sortFields)) {
      const {
        nodes,
        usedSkip
      } = filterNodes(filterContext, indexMetadata);
      // Interleave nodes of different types (not expensive for already sorted chunks)
      result = result.mergeSorted(nodes, createNodeSortComparator(sortFields));
      resultOffset = usedSkip;
      continue;
    }
    // The sad part - unlimited filter + in-memory sort
    const unlimited = {
      ...context,
      skip: 0,
      limit: undefined
    };
    const {
      nodes,
      usedSkip
    } = filterNodes(unlimited, indexMetadata);
    const sortedNodes = sortNodesInMemory(context, nodes);
    resultOffset = usedSkip;
    result = result.mergeSorted(sortedNodes, createNodeSortComparator(sortFields));
  }
  const {
    limit,
    skip = 0
  } = context;
  const actualSkip = skip - resultOffset;
  if (limit || actualSkip) {
    result = result.slice(actualSkip, limit ? actualSkip + limit : undefined);
  }
  return result;
}
function runCountOnce(context) {
  if (typeof context.totalCount === `undefined`) {
    context.totalCount = runCount(context);
  }
  return context.totalCount;
}
function runCount(context) {
  let count = 0;
  if (!needsFiltering(context)) {
    for (const typeName of context.nodeTypeNames) {
      count += context.datastore.countNodes(typeName);
    }
    return count;
  }
  if (!canUseIndex(context)) {
    for (const typeName of context.nodeTypeNames) {
      const nodes = completeFiltering(context, new _iterable.GatsbyIterable(context.datastore.iterateNodesByType(typeName)));
      for (const _ of nodes) count++;
    }
    return count;
  }
  for (const typeName of context.nodeTypeNames) {
    const indexMetadata = (0, _createIndex.getIndexMetadata)(context, typeName, context.suggestedIndexFields);
    try {
      count += (0, _filterUsingIndex.countUsingIndexOnly)({
        ...context,
        indexMetadata
      });
    } catch (e) {
      // We cannot reliably count using index - fallback to full iteration :/
      for (const _ of filterNodes(context, indexMetadata).nodes) count++;
    }
  }
  return count;
}
function performFullTableScan(context) {
  // console.warn(`Fallback to full table scan :/`)

  const {
    datastore,
    nodeTypeNames
  } = context;
  let result = new _iterable.GatsbyIterable([]);
  for (const typeName of nodeTypeNames) {
    let nodes = new _iterable.GatsbyIterable(datastore.iterateNodesByType(typeName));
    nodes = completeFiltering(context, nodes);
    if (needsSorting(context)) {
      nodes = sortNodesInMemory(context, nodes);
      result = result.mergeSorted(nodes, createNodeSortComparator(context.sortFields));
    } else {
      result = result.concat(nodes);
    }
  }
  const {
    limit,
    skip = 0
  } = context;
  if (limit || skip) {
    result = result.slice(skip, limit ? skip + limit : undefined);
  }
  return result;
}
function filterNodes(context, indexMetadata) {
  const {
    entries,
    usedQueries,
    usedSkip
  } = (0, _filterUsingIndex.filterUsingIndex)({
    ...context,
    indexMetadata,
    reverse: Array.from(context.sortFields.values())[0] === -1
  });
  const nodes = entries.map(({
    value
  }) => context.datastore.getNode(value)).filter(Boolean);
  return {
    nodes: completeFiltering(context, nodes, usedQueries),
    usedSkip
  };
}

/**
 * Takes intermediate result and applies any remaining filterQueries.
 *
 * If result is already fully filtered - simply returns.
 */
function completeFiltering(context, intermediateResult, usedQueries = new Set()) {
  const {
    dbQueries
  } = context;
  if (isFullyFiltered(dbQueries, usedQueries)) {
    return intermediateResult;
  }
  // Apply remaining filter operations directly (last resort: slow)
  const resolvedNodes = _redux.store.getState().resolvedNodesCache;
  const filtersToApply = dbQueries.filter(q => !usedQueries.has(q)).map(q => [(0, _query.dbQueryToDottedField)(q), (0, _query.getFilterStatement)(q)]);
  return intermediateResult.filter(node => {
    var _resolvedNodes$get;
    const resolvedFields = resolvedNodes === null || resolvedNodes === void 0 ? void 0 : (_resolvedNodes$get = resolvedNodes.get(node.internal.type)) === null || _resolvedNodes$get === void 0 ? void 0 : _resolvedNodes$get.get(node.id);
    for (const [dottedField, filter] of filtersToApply) {
      const tmp = (0, _common.resolveFieldValue)(dottedField, node, resolvedFields);
      const value = Array.isArray(tmp) ? tmp : [tmp];
      if (value.some(v => !(0, _common.matchesFilter)(filter, v))) {
        // Mimic AND semantics
        return false;
      }
    }
    return true;
  });
}
function sortNodesInMemory(context, nodes) {
  // TODO: Sort using index data whenever possible (maybe store data needed for sorting in index values)
  // TODO: Nodes can be partially sorted by index prefix - we can (and should) exploit this
  return new _iterable.GatsbyIterable(() => {
    const arr = Array.from(nodes);
    arr.sort(createNodeSortComparator(context.sortFields));
    return arr;
  });
}
function createQueryContext(args) {
  const {
    queryArgs: {
      filter,
      sort,
      limit,
      skip = 0
    } = {},
    firstOnly
  } = args;
  return {
    datastore: args.datastore,
    databases: args.databases,
    nodeTypeNames: args.nodeTypeNames,
    dbQueries: (0, _query.createDbQueriesFromObject)((0, _query.prepareQueryArgs)(filter)),
    sortFields: new Map(sort === null || sort === void 0 ? void 0 : sort.fields.map((field, i) => [field, (0, _common.isDesc)(sort === null || sort === void 0 ? void 0 : sort.order[i]) ? -1 : 1])),
    suggestedIndexFields: new Map((0, _suggestIndex.suggestIndex)({
      filter,
      sort
    })),
    limit: firstOnly ? 1 : limit,
    skip
  };
}
function canUseIndex(context) {
  return context.suggestedIndexFields.size > 0;
}
function needsFiltering(context) {
  return context.dbQueries.length > 0;
}
function needsSorting(context) {
  return context.sortFields.size > 0;
}

/**
 * Based on assumption that if all sort fields exist in index
 * then any result received from this index is fully sorted
 */
function canUseIndexForSorting(index, sortFields) {
  const indexKeyFields = new Map(index.keyFields);
  for (const [field, sortOrder] of sortFields) {
    if (indexKeyFields.get(field) !== sortOrder) {
      return false;
    }
  }
  return true;
}
function isFullyFiltered(dbQueries, usedQueries) {
  return dbQueries.length === usedQueries.size;
}
function createNodeSortComparator(sortFields) {
  const resolvedNodesCache = _redux.store.getState().resolvedNodesCache;
  return function nodeComparator(a, b) {
    var _resolvedNodesCache$g, _resolvedNodesCache$g2;
    const resolvedAFields = resolvedNodesCache === null || resolvedNodesCache === void 0 ? void 0 : (_resolvedNodesCache$g = resolvedNodesCache.get(a.internal.type)) === null || _resolvedNodesCache$g === void 0 ? void 0 : _resolvedNodesCache$g.get(a.id);
    const resolvedBFields = resolvedNodesCache === null || resolvedNodesCache === void 0 ? void 0 : (_resolvedNodesCache$g2 = resolvedNodesCache.get(b.internal.type)) === null || _resolvedNodesCache$g2 === void 0 ? void 0 : _resolvedNodesCache$g2.get(b.id);
    for (const [field, direction] of sortFields) {
      const valueA = (0, _common.resolveFieldValue)(field, a, resolvedAFields);
      const valueB = (0, _common.resolveFieldValue)(field, b, resolvedBFields);
      if (valueA > valueB) {
        return direction === 1 ? 1 : -1;
      } else if (valueA < valueB) {
        return direction === 1 ? -1 : 1;
      }
    }
    return 0;
  };
}
function compareByKeySuffix(prefixLength) {
  return function (a, b) {
    const aSuffix = a.key.slice(prefixLength);
    const bSuffix = b.key.slice(prefixLength);
    // @ts-ignore
    return (0, _common.compareKey)(aSuffix, bSuffix);
  };
}
//# sourceMappingURL=run-query.js.map