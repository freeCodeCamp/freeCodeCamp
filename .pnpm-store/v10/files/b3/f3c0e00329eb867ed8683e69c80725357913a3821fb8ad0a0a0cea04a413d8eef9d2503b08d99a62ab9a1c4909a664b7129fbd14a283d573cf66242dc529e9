"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ensureEmptyFilterCache = ensureEmptyFilterCache;
exports.getNodesFromCacheByValue = exports.getGatsbyNodePartial = exports.ensureIndexByQuery = exports.ensureIndexByElemMatch = void 0;
exports.getSortFieldIdentifierKeys = getSortFieldIdentifierKeys;
exports.intersectNodesByCounter = intersectNodesByCounter;
exports.postIndexingMetaSetup = postIndexingMetaSetup;
exports.unionNodesByCounter = unionNodesByCounter;
var _every2 = _interopRequireDefault(require("lodash/every"));
var _query = require("../common/query");
var _2 = require("../");
var _getValueAt = require("../../utils/get-value-at");
var _utils = require("../../schema/utils");
const nodeIdToIdentifierMap = new Map();

/**
 * Grabs an instance of IGatsbyNodePartial for the given node.
 * This accepts an IGatsbyNode or IGatsbyNodePartial as input, which allows
 * us to conditionally store index fields on the partial if we encounter
 * one that hasn't been stored on the partial yet.
 */
const getGatsbyNodePartial = (node, indexFields, resolvedFields) => {
  // first, check if we have the partial in the cache
  const cacheKey = `${node.id}_____${node.internal.counter}`;
  let derefPartial = undefined;
  if (nodeIdToIdentifierMap.has(cacheKey)) {
    var _nodeIdToIdentifierMa;
    derefPartial = (_nodeIdToIdentifierMa = nodeIdToIdentifierMap.get(cacheKey)) === null || _nodeIdToIdentifierMa === void 0 ? void 0 : _nodeIdToIdentifierMa.deref();

    // now check if we have it in memory and it has all the fields we need
    if (derefPartial && (0, _every2.default)(indexFields.map(field => derefPartial.gatsbyNodePartialInternalData.indexFields.has(field)))) {
      return derefPartial;
    }
  }

  // find all the keys of fields and store them and their values on the partial
  // if we've already passed this partial, merge both sets of index fields
  const dottedFields = {};
  const fieldsToStore = derefPartial ? new Set([...derefPartial.gatsbyNodePartialInternalData.indexFields, ...indexFields]) : new Set(indexFields);
  const sortFieldIds = getSortFieldIdentifierKeys([...fieldsToStore], resolvedFields);
  let fullNodeObject = node.gatsbyNodePartialInternalData ? undefined : node;
  let resolvedNodeFields;
  for (const dottedField of sortFieldIds) {
    if (dottedField in node) {
      dottedFields[dottedField] = node[dottedField];
    } else {
      if (dottedField.startsWith(`__gatsby_resolved.`)) {
        if (!resolvedNodeFields) {
          resolvedNodeFields = (0, _utils.getResolvedFields)(node);
        }
        dottedFields[dottedField] = (0, _getValueAt.getValueAt)(resolvedNodeFields, dottedField.slice(`__gatsby_resolved.`.length));
      } else {
        // if we haven't gotten the full node object, fetch it once
        // use the full node object to fetch the value
        if (!fullNodeObject) {
          fullNodeObject = (0, _2.getNode)(node.id);
        }
        dottedFields[dottedField] = (0, _getValueAt.getValueAt)(fullNodeObject, dottedField);
      }
    }
  }

  // create the partial object
  const partial = Object.assign(dottedFields, {
    id: node.id,
    internal: {
      counter: node.internal.counter,
      type: node.internal.type
    },
    gatsbyNodePartialInternalData: {
      indexFields: fieldsToStore
    }
  });

  // set the object in the cache for later fetching
  nodeIdToIdentifierMap.set(cacheKey, new WeakRef(partial));
  return partial;
};
exports.getGatsbyNodePartial = getGatsbyNodePartial;
const sortByIds = (a, b) => a.internal.counter - b.internal.counter;
function postIndexingMetaSetup(filterCache, op) {
  // Loop through byValue and make sure the buckets are sorted by counter
  // Since we don't do insertion sort, we have to do it afterwards
  for (const bucket of filterCache.byValue) {
    bucket[1].sort(sortByIds);
  }
  if (op === `$ne` || op === `$nin`) {
    postIndexingMetaSetupNeNin(filterCache);
  } else if ([`$lt`, `$lte`, `$gt`, `$gte`].includes(op)) {
    postIndexingMetaSetupLtLteGtGte(filterCache, op);
  }
}
function postIndexingMetaSetupNeNin(filterCache) {
  // Note: edge cases regarding `null` and `undefined`. Here `undefined` signals
  // that the property did not exist as the filters do not support actual
  // `undefined` values.
  // For $ne, `null` only returns nodes that actually have the property
  // and in that case the property cannot be `null` either. For any other value,
  // $ne will return all nodes where the value is not actually the needle,
  // including nodes where the value is null.
  // A $nin does the same as an $ne except it filters multiple values instead
  // of just one.
  // For `$ne` we will take the list of all targeted nodes and eliminate the
  // bucket of nodes with a particular value, if it exists at all..

  const arr = [];
  filterCache.meta.nodesUnordered = arr;
  filterCache.byValue.forEach(v => {
    v.forEach(nodeId => {
      arr.push(nodeId);
    });
  });
}
function postIndexingMetaSetupLtLteGtGte(filterCache, op) {
  // Create an ordered array of individual nodes, ordered (grouped) by the
  // value to which the filter resolves. Nodes per value are ordered by
  // internal.counter, asc.
  // This way non-eq ops can simply slice the array to get a range.

  const entriesNullable = [...filterCache.byValue.entries()];

  // These range checks never return `null` or `undefined` so filter those out
  // By filtering them out early, the sort should be faster. Could be ...
  const entries = entriesNullable.filter(([v]) => v != null);

  // Sort all arrays by its value, asc. Ignore/allow potential type casting.
  // Note: while `<` is the inverse of `>=`, the ordering might coerce values.
  // This coercion makes the op no longer idempotent (normally the result of
  // `a < b` is the opposite of `b >= a` for any a or b of the same type). The
  // exception is a number that is `NaN`, which we're ignoring here as it's most
  // likely a bug in the user code. However, when coercing the ops may end up
  // comparing against `NaN`, too. For example: `("abc" <= 12) !== (12 > "abc")`
  // which ends up doing `NaN <= 12` and `NaN > "abc"`, which will both yield
  // false.
  // So instead we potentially track two ordered lists; ascending and descending
  // and the only difference when comparing the inverse of one to the other
  // should be how these `NaN` cases end up getting ordered.
  // It's fine for `lt` and `lte` to use the same ordered list. Same for gt/gte.
  if (op === `$lt` || op === `$lte`) {
    // Order ascending; first value is lowest
    entries.sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
  } else if (op === `$gt` || op === `$gte`) {
    // Order descending; first value is highest
    entries.sort(([a], [b]) => a > b ? -1 : a < b ? 1 : 0);
  }
  const orderedNodes = [];
  const orderedValues = [];
  const offsets = new Map();
  entries.forEach(([v, bucket]) => {
    // Record the range containing all nodes with as filter value v
    // The last value of the range should be the offset of the next value
    // (So you should be able to do `nodes.slice(start, stop)` to get them)
    offsets.set(v, [orderedNodes.length, orderedNodes.length + bucket.length]);
    // We could do `arr.push(...bucket)` here but that's not safe with very
    // large sets, so we use a regular loop
    bucket.forEach(node => orderedNodes.push(node));
    orderedValues.push(v);
  });
  if (op === `$lt` || op === `$lte`) {
    filterCache.meta.valuesAsc = orderedValues;
    filterCache.meta.nodesByValueAsc = orderedNodes;
    // The nodesByValueAsc is ordered by value, but multiple nodes per value are
    // not ordered. To make lt as fast as lte, we must know the start and stop
    // index for each value. Similarly useful for for `ne`.
    filterCache.meta.valueRangesAsc = offsets;
  } else if (op === `$gt` || op === `$gte`) {
    filterCache.meta.valuesDesc = orderedValues;
    filterCache.meta.nodesByValueDesc = orderedNodes;
    // The nodesByValueDesc is ordered by value, but multiple nodes per value are
    // not ordered. To make gt as fast as gte, we must know the start and stop
    // index for each value. Similarly useful for for `ne`.
    filterCache.meta.valueRangesDesc = offsets;
  }
}

/**
 * Given a single non-elemMatch filter path, a list of node types, and a
 * cache, create a cache that for each resulting value of the filter contains
 * all the Nodes in a list.
 * This cache is used for applying the filter and is a massive improvement over
 * looping over all the nodes, when the number of pages (/nodes) scales up.
 */
const ensureIndexByQuery = (op, filterCacheKey, filterPath, nodeTypeNames, filtersCache, indexFields, resolvedFields) => {
  const filterCache = {
    op,
    byValue: new Map(),
    meta: {}
  };
  filtersCache.set(filterCacheKey, filterCache);

  // We cache the subsets of nodes by type, but only one type. So if searching
  // through one node type we can prevent a search through all nodes, otherwise
  // it's probably faster to loop through all nodes. Perhaps. Maybe.

  if (nodeTypeNames.length === 1) {
    (0, _2.getDataStore)().iterateNodesByType(nodeTypeNames[0]).forEach(node => {
      addNodeToFilterCache({
        node,
        chain: filterPath,
        filterCache,
        indexFields,
        resolvedFields
      });
    });
  } else {
    // Here we must first filter for the node type
    // This loop is expensive at scale (!)
    (0, _2.getDataStore)().iterateNodes().forEach(node => {
      if (!nodeTypeNames.includes(node.internal.type)) {
        return;
      }
      addNodeToFilterCache({
        node,
        chain: filterPath,
        filterCache,
        indexFields,
        resolvedFields
      });
    });
  }
  postIndexingMetaSetup(filterCache, op);
};
exports.ensureIndexByQuery = ensureIndexByQuery;
function ensureEmptyFilterCache(filterCacheKey, nodeTypeNames, filtersCache, indexFields, resolvedFields) {
  // This is called for queries without any filters
  // We want to cache the result since it's basically a list of nodes by type(s)
  // There are sites that have multiple queries which are empty

  const orderedByCounter = [];
  filtersCache.set(filterCacheKey, {
    op: `$eq`,
    // Ignore.
    byValue: new Map(),
    meta: {
      orderedByCounter // This is what we want
    }
  });

  if (nodeTypeNames.length === 1) {
    (0, _2.getDataStore)().iterateNodesByType(nodeTypeNames[0]).forEach(node => {
      orderedByCounter.push(getGatsbyNodePartial(node, indexFields, resolvedFields));
    });
  } else {
    // Here we must first filter for the node type
    // This loop is expensive at scale (!)
    (0, _2.getDataStore)().iterateNodes().forEach(node => {
      if (nodeTypeNames.includes(node.internal.type)) {
        orderedByCounter.push(getGatsbyNodePartial(node, indexFields, resolvedFields));
      }
    });
  }

  // Since each node can only have one type, we shouldn't have to be concerned
  // about duplicates in this array. Just make sure they're sorted.
  orderedByCounter.sort(sortByIds);
}
function addNodeToFilterCache({
  node,
  chain,
  filterCache,
  indexFields,
  resolvedFields,
  valueOffset = node
}) {
  // - for plain query, valueOffset === node
  // - for elemMatch, valueOffset is sub-tree of the node to continue matching
  let v = valueOffset;
  let i = 0;
  while (i < chain.length && v) {
    const nextProp = chain[i++];
    if (i === 1 && nextProp === `__gatsby_resolved`) {
      v = (0, _utils.getResolvedFields)(v);
    } else {
      v = v[nextProp];
    }
  }
  if (typeof v !== `string` && typeof v !== `number` && typeof v !== `boolean` && v !== null || i !== chain.length) {
    if (i === chain.length && Array.isArray(v)) {
      // The op resolved to an array
      // Add an entry for each element of the array. This would work for ops
      // like eq and ne, but not sure about range ops like lt,lte,gt,gte.

      v.forEach(v => markNodeForValue(filterCache, node, v, indexFields, resolvedFields));
      return;
    }

    // This means that either
    // - The filter resolved to `undefined`, or
    // - The filter resolved to something other than a primitive
    // Set the value to `undefined` to mark "path does not (fully) exist"
    v = undefined;
  }
  markNodeForValue(filterCache, node, v, indexFields, resolvedFields);
}
function markNodeForValue(filterCache, node, value, indexFields, resolvedFields) {
  let arr = filterCache.byValue.get(value);
  if (!arr) {
    arr = [];
    filterCache.byValue.set(value, arr);
  }
  const partial = getGatsbyNodePartial(node, indexFields, resolvedFields);
  if (!arr.includes(partial)) {
    arr.push(partial);
  }
}
const ensureIndexByElemMatch = (op, filterCacheKey, filter, nodeTypeNames, filtersCache, indexFields, resolvedFields) => {
  // Given an elemMatch filter, generate the cache that contains all nodes that
  // matches a given value for that sub-query

  const filterCache = {
    op,
    byValue: new Map(),
    meta: {}
  };
  filtersCache.set(filterCacheKey, filterCache);
  if (nodeTypeNames.length === 1) {
    (0, _2.getDataStore)().iterateNodesByType(nodeTypeNames[0]).forEach(node => {
      addNodeToBucketWithElemMatch({
        node,
        valueAtCurrentStep: node,
        filter,
        filterCache,
        indexFields,
        resolvedFields
      });
    });
  } else {
    // Expensive at scale
    (0, _2.getDataStore)().iterateNodes().forEach(node => {
      if (!nodeTypeNames.includes(node.internal.type)) {
        return;
      }
      addNodeToBucketWithElemMatch({
        node,
        valueAtCurrentStep: node,
        filter,
        filterCache,
        indexFields,
        resolvedFields
      });
    });
  }
  postIndexingMetaSetup(filterCache, op);
};
exports.ensureIndexByElemMatch = ensureIndexByElemMatch;
function addNodeToBucketWithElemMatch({
  node,
  valueAtCurrentStep,
  // Arbitrary step on the path inside the node
  filter,
  filterCache,
  indexFields,
  resolvedFields
}) {
  const {
    path,
    nestedQuery
  } = filter;

  // Find the value to apply elemMatch to
  let i = 0;
  while (i < path.length && valueAtCurrentStep) {
    const nextProp = path[i++];
    if (i === 1 && nextProp === `__gatsby_resolved`) {
      valueAtCurrentStep = (0, _utils.getResolvedFields)(valueAtCurrentStep);
    } else {
      valueAtCurrentStep = valueAtCurrentStep[nextProp];
    }
  }
  if (path.length !== i) {
    // Found undefined before the end of the path
    return;
  }

  // `v` should now be an elemMatch target, probably an array (but maybe not)
  if (!Array.isArray(valueAtCurrentStep)) {
    // It's possible to `elemMatch` on a non-array so let's support that too
    valueAtCurrentStep = [valueAtCurrentStep];
  }

  // Note: We need to check all elements because the node may need to be added
  // to multiple buckets (`{a:[{b:3},{b:4}]}`, for `a.elemMatch.b/eq` that
  // node ends up in buckets for value 3 and 4. This may lead to duplicate
  // work when elements resolve to the same value, but that can't be helped.
  valueAtCurrentStep.forEach(elem => {
    if (nestedQuery.type === `elemMatch`) {
      addNodeToBucketWithElemMatch({
        node,
        valueAtCurrentStep: elem,
        filter: nestedQuery,
        filterCache,
        indexFields,
        resolvedFields
      });
    } else {
      // Now take same route as non-elemMatch filters would take
      addNodeToFilterCache({
        node,
        chain: nestedQuery.path,
        filterCache,
        indexFields,
        resolvedFields,
        valueOffset: elem
      });
    }
  });
}
const binarySearchAsc = (values, needle) => {
  let min = 0;
  let max = values.length - 1;
  let pivot = Math.floor(values.length / 2);
  while (min <= max) {
    const value = values[pivot];
    if (needle < value) {
      // Move pivot to middle of nodes left of current pivot
      // assert pivot < max
      max = pivot;
    } else if (needle > value) {
      // Move pivot to middle of nodes right of current pivot
      // assert pivot > min
      min = pivot;
    } else {
      // This means needle === value
      // TODO: except for NaN ... and potentially certain type casting cases
      return [pivot, pivot];
    }
    if (max - min <= 1) {
      // End of search. Needle not found (as expected). Use pivot as index.
      // If the needle was not found, max-min==1 and max is returned.
      return [min, max];
    }
    pivot = min + Math.floor((max - min) / 2);
  }

  // Shouldn't be reachable
  return undefined;
};
const binarySearchDesc = (values, needle) => {
  let min = 0;
  let max = values.length - 1;
  let pivot = Math.floor(values.length / 2);
  while (min <= max) {
    const value = values[pivot];
    if (needle < value) {
      // Move pivot to middle of nodes right of current pivot
      // assert pivot < min
      min = pivot;
    } else if (needle > value) {
      // Move pivot to middle of nodes left of current pivot
      // assert pivot > max
      max = pivot;
    } else {
      // This means needle === value
      // TODO: except for NaN ... and potentially certain type casting cases
      return [pivot, pivot];
    }
    if (max - min <= 1) {
      // End of search. Needle not found (as expected). Use pivot as index.
      // If the needle was not found, max-min==1 and max is returned.
      return [min, max];
    }
    pivot = min + Math.floor((max - min) / 2);
  }

  // Shouldn't be reachable
  return undefined;
};

/**
 * Given the cache key for a filter and a target value return the list of nodes
 * that resolve to this value. The returned array should be ordered by id.
 * This returns `undefined` if there is no such node
 *
 * Basically if the filter was {a: {b: {slug: {eq: "foo/bar"}}}} then it will
 * return all the nodes that have `node.slug === "foo/bar"`. That usually (but
 * not always) at most one node for slug, but this filter can apply to anything.
 *
 * Arrays returned by this function must be ordered by internal.counter and
 * not contain duplicate nodes (!)
 */
const getNodesFromCacheByValue = (filterCacheKey, filterValue, filtersCache, wasElemMatch) => {
  const filterCache = filtersCache.get(filterCacheKey);
  if (!filterCache) {
    return undefined;
  }
  const op = filterCache.op;
  if (op === `$eq`) {
    // Arrays in byValue are assumed to be ordered by counter

    if (filterValue == null) {
      var _filterCache$byValue$, _filterCache$byValue$2;
      // Edge case for null; fetch all nodes for `null` and `undefined` because
      // `$eq` also returns nodes without the path when searching for `null`.
      // Not all ops do so, so we map non-existing paths to `undefined`.

      const arrNull = (_filterCache$byValue$ = filterCache.byValue.get(null)) !== null && _filterCache$byValue$ !== void 0 ? _filterCache$byValue$ : [];
      const arrUndef = (_filterCache$byValue$2 = filterCache.byValue.get(undefined)) !== null && _filterCache$byValue$2 !== void 0 ? _filterCache$byValue$2 : [];

      // Merge the two (ordered) arrays and return an ordered deduped array
      // TODO: is there a reason left why we cant just cache this merged list?
      return unionNodesByCounter(arrNull, arrUndef);
    }
    return filterCache.byValue.get(filterValue);
  }
  if (op === `$in`) {
    if (!Array.isArray(filterValue)) {
      throw new Error("The argument to the `in` comparator should be an array");
    }
    const filterValueArr = filterValue;
    const set = new Set();

    // TODO: we can also mergeSort for every step. this may perform worse because of how memory in js works.
    // For every value in the needle array, find the bucket of nodes for
    // that value, add this bucket of nodes to one list, return the list.
    filterValueArr.forEach(v => {
      var _filterCache$byValue$3;
      return (_filterCache$byValue$3 = filterCache.byValue.get(v)) === null || _filterCache$byValue$3 === void 0 ? void 0 : _filterCache$byValue$3.forEach(v => set.add(v));
    });
    const arr = [...set]; // this is bad for perf but will guarantee us a unique set :(
    arr.sort(sortByIds);

    // Note: it's very unlikely that the list of filter values is big so .includes should be fine here
    if (filterValueArr.includes(null)) {
      // Like all other ops, `in: [null]` behaves weirdly, allowing all nodes
      // that do not actually have a (complete) path (v=undefined)
      const nodes = filterCache.byValue.get(undefined);
      if (nodes) {
        // This will also dedupe so don't do that immediately
        return unionNodesByCounter(nodes, arr);
      }
    }

    // elemMatch can cause a node to appear in multiple buckets so we must dedupe first
    if (wasElemMatch) {
      expensiveDedupeInline(arr);
    }
    return arr;
  }
  if (op === `$nin`) {
    // This is essentially the same as the $ne operator, just with multiple
    // values to exclude.

    if (!Array.isArray(filterValue)) {
      throw new Error(`The $nin operator expects an array as value`);
    }
    const values = new Set(filterValue);
    const set = new Set(filterCache.meta.nodesUnordered);

    // Do the action for "$ne" for each element in the set of values
    values.forEach(filterValue => {
      removeBucketFromSet(filterValue, filterCache, set);
    });

    // TODO: there's probably a more efficient algorithm to do set
    //       subtraction in such a way that we don't have to re-sort
    return [...set].sort(sortByIds);
  }
  if (op === `$ne`) {
    const set = new Set(filterCache.meta.nodesUnordered);
    removeBucketFromSet(filterValue, filterCache, set);

    // TODO: there's probably a more efficient algorithm to do set
    //       subtraction in such a way that we don't have to resort here
    return [...set].sort(sortByIds);
  }
  if (op === `$regex`) {
    // Note: $glob is converted to $regex so $glob filters go through here, too
    // Aside from the input pattern format, further behavior is exactly the same.

    // The input to the filter must be a string (including leading/trailing slash and regex flags)
    // By the time the filter reaches this point, the filterValue has to be a regex.

    if (!(filterValue instanceof RegExp)) {
      throw new Error(`The value for the $regex comparator must be an instance of RegExp`);
    }
    const regex = filterValue;
    const arr = [];
    filterCache.byValue.forEach((nodes, value) => {
      // TODO: does the value have to be a string for $regex? Can we auto-ignore any non-strings? Or does it coerce.
      // Note: for legacy reasons partial paths should also be included for regex
      if (value !== undefined && regex.test(String(value))) {
        nodes.forEach(node => arr.push(node));
      }
    });

    // TODO: we _can_ cache this list as well. Might make sense if it turns out that $regex is mostly used with literals
    // TODO: it may make sense to first collect all buckets and then to .concat them, or merge sort them

    arr.sort(sortByIds);

    // elemMatch can cause a node to appear in multiple buckets so we must dedupe
    if (wasElemMatch) {
      expensiveDedupeInline(arr);
    }
    return arr;
  }
  if (filterValue == null) {
    if (op === `$lt` || op === `$gt`) {
      // Nothing is lt/gt null
      return undefined;
    }

    // This is an edge case and this value should be directly indexed
    // For `lte`/`gte` this should only return nodes for `null`, not a "range"
    return filterCache.byValue.get(filterValue);
  }
  if (Array.isArray(filterValue)) {
    throw new Error("Array is an invalid filter value for the `" + op + "` comparator");
  }
  if (filterValue instanceof RegExp) {
    // This is most likely an internal error, although it is possible for
    // users to talk to this API more directly.
    throw new Error(`A RegExp instance is only valid for $regex and $glob comparators`);
  }
  if (op === `$lt`) {
    // First try a direct approach. If a value is queried that also exists then
    // we can prevent a binary search through the whole list, O(1) vs O(log n)

    const ranges = filterCache.meta.valueRangesAsc;
    const nodes = filterCache.meta.nodesByValueAsc;
    const range = ranges.get(filterValue);
    if (range) {
      const arr = nodes.slice(0, range[0]);
      arr.sort(sortByIds);
      // elemMatch can cause a node to appear in multiple buckets so we must dedupe
      if (wasElemMatch) {
        expensiveDedupeInline(arr);
      }
      return arr;
    }

    // Query may ask for a value that doesn't appear in the list, like if the
    // list is [1, 2, 5, 6] and the query is <= 3. In that case we have to
    // apply a search (we'll do binary) to determine the offset to slice from.

    // Note: for lte, the valueAsc array must be list at this point
    const values = filterCache.meta.valuesAsc;
    // It shouldn't find the targetValue (but it might) and return the index of
    // the two value between which targetValue sits, or first/last element.
    const point = binarySearchAsc(values, filterValue);
    if (!point) {
      return undefined;
    }
    const [pivotMin, pivotMax] = point;

    // Each pivot index must have a value and a range
    // The returned min/max index may include the lower/upper bound, so we still
    // have to do lte checks for both values.
    let pivotValue = values[pivotMax];
    if (pivotValue > filterValue) {
      pivotValue = values[pivotMin];
    }

    // Note: the pivot value _shouldnt_ match the filter value because that
    // means the value was actually found, but those should have been indexed
    // so should have yielded a result in the .get() above.

    const [exclPivot, inclPivot] = ranges.get(pivotValue);

    // Note: technically, `5 <= "5" === true` but `5` would not be cached.
    // So we have to consider weak comparison and may have to include the pivot
    const until = pivotValue < filterValue ? inclPivot : exclPivot;
    const arr = nodes.slice(0, until);
    arr.sort(sortByIds);
    // elemMatch can cause a node to appear in multiple buckets so we must dedupe
    if (wasElemMatch) {
      expensiveDedupeInline(arr);
    }
    return arr;
  }
  if (op === `$lte`) {
    // First try a direct approach. If a value is queried that also exists then
    // we can prevent a binary search through the whole list, O(1) vs O(log n)

    const ranges = filterCache.meta.valueRangesAsc;
    const nodes = filterCache.meta.nodesByValueAsc;
    const range = ranges.get(filterValue);
    if (range) {
      const arr = nodes.slice(0, range[1]);
      arr.sort(sortByIds);
      // elemMatch can cause a node to appear in multiple buckets so we must dedupe
      if (wasElemMatch) {
        expensiveDedupeInline(arr);
      }
      return arr;
    }

    // Query may ask for a value that doesn't appear in the list, like if the
    // list is [1, 2, 5, 6] and the query is <= 3. In that case we have to
    // apply a search (we'll do binary) to determine the offset to slice from.

    // Note: for lte, the valueAsc array must be list at this point
    const values = filterCache.meta.valuesAsc;
    // It shouldn't find the targetValue (but it might) and return the index of
    // the two value between which targetValue sits, or first/last element.
    const point = binarySearchAsc(values, filterValue);
    if (!point) {
      return undefined;
    }
    const [pivotMin, pivotMax] = point;

    // Each pivot index must have a value and a range
    // The returned min/max index may include the lower/upper bound, so we still
    // have to do lte checks for both values.
    let pivotValue = values[pivotMax];
    if (pivotValue > filterValue) {
      pivotValue = values[pivotMin];
    }

    // Note: the pivot value _shouldnt_ match the filter value because that
    // means the value was actually found, but those should have been indexed
    // so should have yielded a result in the .get() above.

    const [exclPivot, inclPivot] = ranges.get(pivotValue);

    // Note: technically, `5 <= "5" === true` but `5` would not be cached.
    // So we have to consider weak comparison and may have to include the pivot
    const until = pivotValue <= filterValue ? inclPivot : exclPivot;
    const arr = nodes.slice(0, until);
    arr.sort(sortByIds);
    // elemMatch can cause a node to appear in multiple buckets so we must dedupe
    if (wasElemMatch) {
      expensiveDedupeInline(arr);
    }
    return arr;
  }
  if (op === `$gt`) {
    // First try a direct approach. If a value is queried that also exists then
    // we can prevent a binary search through the whole list, O(1) vs O(log n)

    const ranges = filterCache.meta.valueRangesDesc;
    const nodes = filterCache.meta.nodesByValueDesc;
    const range = ranges.get(filterValue);
    if (range) {
      const arr = nodes.slice(0, range[0]).reverse();
      arr.sort(sortByIds);
      // elemMatch can cause a node to appear in multiple buckets so we must dedupe
      if (wasElemMatch) {
        expensiveDedupeInline(arr);
      }
      return arr;
    }

    // Query may ask for a value that doesn't appear in the list, like if the
    // list is [1, 2, 5, 6] and the query is <= 3. In that case we have to
    // apply a search (we'll do binary) to determine the offset to slice from.

    // Note: for gte, the valueDesc array must be list at this point
    const values = filterCache.meta.valuesDesc;
    // It shouldn't find the targetValue (but it might) and return the index of
    // the two value between which targetValue sits, or first/last element.
    const point = binarySearchDesc(values, filterValue);
    if (!point) {
      return undefined;
    }
    const [pivotMin, pivotMax] = point;

    // Each pivot index must have a value and a range
    // The returned min/max index may include the lower/upper bound, so we still
    // have to do gte checks for both values.
    let pivotValue = values[pivotMax];
    if (pivotValue < filterValue) {
      pivotValue = values[pivotMin];
    }

    // Note: the pivot value _shouldnt_ match the filter value because that
    // means the value was actually found, but those should have been indexed
    // so should have yielded a result in the .get() above.

    const [exclPivot, inclPivot] = ranges.get(pivotValue);

    // Note: technically, `5 >= "5" === true` but `5` would not be cached.
    // So we have to consider weak comparison and may have to include the pivot
    const until = pivotValue > filterValue ? inclPivot : exclPivot;
    const arr = nodes.slice(0, until).reverse();
    arr.sort(sortByIds);
    // elemMatch can cause a node to appear in multiple buckets so we must dedupe
    if (wasElemMatch) {
      expensiveDedupeInline(arr);
    }
    return arr;
  }
  if (op === `$gte`) {
    // First try a direct approach. If a value is queried that also exists then
    // we can prevent a binary search through the whole list, O(1) vs O(log n)

    const ranges = filterCache.meta.valueRangesDesc;
    const nodes = filterCache.meta.nodesByValueDesc;
    const range = ranges.get(filterValue);
    if (range) {
      const arr = nodes.slice(0, range[1]).reverse();
      arr.sort(sortByIds);
      // elemMatch can cause a node to appear in multiple buckets so we must dedupe
      if (wasElemMatch) {
        expensiveDedupeInline(arr);
      }
      return arr;
    }

    // Query may ask for a value that doesn't appear in the list, like if the
    // list is [1, 2, 5, 6] and the query is <= 3. In that case we have to
    // apply a search (we'll do binary) to determine the offset to slice from.

    // Note: for gte, the valueDesc array must be list at this point
    const values = filterCache.meta.valuesDesc;
    // It shouldn't find the targetValue (but it might) and return the index of
    // the two value between which targetValue sits, or first/last element.
    const point = binarySearchDesc(values, filterValue);
    if (!point) {
      return undefined;
    }
    const [pivotMin, pivotMax] = point;

    // Each pivot index must have a value and a range
    // The returned min/max index may include the lower/upper bound, so we still
    // have to do gte checks for both values.
    let pivotValue = values[pivotMax];
    if (pivotValue < filterValue) {
      pivotValue = values[pivotMin];
    }

    // Note: the pivot value _shouldnt_ match the filter value because that
    // means the value was actually found, but those should have been indexed
    // so should have yielded a result in the .get() above.

    const [exclPivot, inclPivot] = ranges.get(pivotValue);

    // Note: technically, `5 >= "5" === true` but `5` would not be cached.
    // So we have to consider weak comparison and may have to include the pivot
    const until = pivotValue >= filterValue ? inclPivot : exclPivot;
    const arr = nodes.slice(0, until).reverse();
    arr.sort(sortByIds);
    // elemMatch can cause a node to appear in multiple buckets so we must dedupe
    if (wasElemMatch) {
      expensiveDedupeInline(arr);
    }
    return arr;
  }

  // Unreachable because we checked all values of FilterOp (which op is)
  return undefined;
};
exports.getNodesFromCacheByValue = getNodesFromCacheByValue;
function removeBucketFromSet(filterValue, filterCache, set) {
  if (filterValue === null) {
    // Edge case: $ne with `null` returns only the nodes that contain the full
    // path and that don't resolve to null, so drop `undefined` as well.
    let cache = filterCache.byValue.get(undefined);
    if (cache) cache.forEach(node => set.delete(node));
    cache = filterCache.byValue.get(null);
    if (cache) cache.forEach(node => set.delete(node));
  } else {
    // Not excluding null so it should include undefined leafs or leafs where
    // only the partial path exists for whatever reason.
    const cache = filterCache.byValue.get(filterValue);
    if (cache) cache.forEach(node => set.delete(node));
  }
}

/**
 * Finds the intersection of two arrays in O(n) with n = min(a.length, b.length)
 * The returned set should not contain duplicate nodes.
 *
 * The input should be ordered by node.internal.counter and it will return a
 * list that is also ordered by node.internal.counter
 */
function intersectNodesByCounter(a, b) {
  let pointerA = 0;
  let pointerB = 0;
  // TODO: perf check: is it helpful to init the array to min(maxA,maxB) items?
  const result = [];
  const maxA = a.length;
  const maxB = b.length;
  let lastAdded = undefined; // Used to dedupe the list

  while (pointerA < maxA && pointerB < maxB) {
    const counterA = a[pointerA].internal.counter;
    const counterB = b[pointerB].internal.counter;
    if (counterA < counterB) {
      pointerA++;
    } else if (counterA > counterB) {
      pointerB++;
    } else {
      if (a[pointerA].id !== b[pointerB].id) {
        throw new Error(`Invariant violation: inconsistent node counters detected`);
      }
      // nodeA===nodeB. Make sure we didn't just add this node already.
      // Since input arrays are sorted, the same node should be grouped
      // back to back, so even if both input arrays contained the same node
      // twice, this check would prevent the result from getting duplicate nodes
      if (lastAdded !== a[pointerA]) {
        result.push(a[pointerA]);
        lastAdded = a[pointerA];
      }
      pointerA++;
      pointerB++;
    }
  }
  return result;
}

/**
 * Merge two lists of nodes.
 * The returned set should not contain duplicate nodes.
 *
 * The input should be ordered by node.internal.counter and it will return a
 * list that is also ordered by node.internal.counter
 */
function unionNodesByCounter(a, b) {
  // TODO: perf check: is it helpful to init the array to max(maxA,maxB) items?
  const arr = [];
  let lastAdded = undefined; // Used to dedupe the list

  let pointerA = 0;
  let pointerB = 0;
  const maxA = a.length;
  const maxB = b.length;
  while (pointerA < maxA && pointerB < maxB) {
    const counterA = a[pointerA].internal.counter;
    const counterB = b[pointerB].internal.counter;
    if (counterA < counterB) {
      if (lastAdded !== a[pointerA]) {
        arr.push(a[pointerA]);
        lastAdded = a[pointerA];
      }
      pointerA++;
    } else if (counterA > counterB) {
      if (lastAdded !== b[pointerB]) {
        arr.push(b[pointerB]);
        lastAdded = b[pointerB];
      }
      pointerB++;
    } else {
      if (lastAdded !== a[pointerA]) {
        arr.push(a[pointerA]);
        lastAdded = a[pointerA];
      }
      pointerA++;
      pointerB++;
    }
  }
  while (pointerA < maxA) {
    if (lastAdded !== a[pointerA]) {
      arr.push(a[pointerA]);
      lastAdded = a[pointerA];
    }
    pointerA++;
  }
  while (pointerB < maxB) {
    if (lastAdded !== b[pointerB]) {
      arr.push(b[pointerB]);
      lastAdded = b[pointerB];
    }
    pointerB++;
  }
  return arr;
}
function expensiveDedupeInline(arr) {
  // An elemMatch filter may cause duplicates to appear in a bucket.
  // Since the bucket is sorted those should now be back to back
  // Worst case this is a fast O(n) loop that does nothing.
  let prev = undefined;

  // We copy-on-find because a splice is expensive and we can't use Sets

  let j = 0;
  for (let i = 0; i < arr.length; ++i) {
    const node = arr[i];
    if (node !== prev) {
      // Only start copying the remainder of the list once a dupe is found
      if (i !== j) {
        arr[j] = node;
      }
      ++j;
      prev = node;
    }
  }
  arr.length = j;
}
function getSortFieldIdentifierKeys(indexFields, resolvedFields) {
  const dottedFields = (0, _query.objectToDottedField)(resolvedFields);
  const dottedFieldKeys = Object.keys(dottedFields);
  const fieldKeys = indexFields.map(field => {
    if (dottedFields[field] || dottedFieldKeys.some(key => field.startsWith(key))) {
      return `__gatsby_resolved.${field}`;
    } else {
      return field;
    }
  });
  return fieldKeys;
}
//# sourceMappingURL=indexing.js.map