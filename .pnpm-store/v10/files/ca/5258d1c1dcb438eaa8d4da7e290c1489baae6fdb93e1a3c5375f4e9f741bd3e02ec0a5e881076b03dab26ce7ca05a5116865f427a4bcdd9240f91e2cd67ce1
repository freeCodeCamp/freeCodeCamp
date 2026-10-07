"use strict";

exports.__esModule = true;
exports.cartesianProduct = cartesianProduct;
exports.compareKey = compareKey;
exports.isDesc = isDesc;
exports.matchesFilter = matchesFilter;
exports.resolveFieldValue = resolveFieldValue;
var _query = require("../../common/query");
var _getValueAt = require("../../../utils/get-value-at");
function isDesc(sortOrder) {
  return sortOrder === `desc` || sortOrder === `DESC` || sortOrder === false;
}

/**
 * Given dotted field selector (e.g. `foo.bar`) returns a plain list of values matching this selector.
 * It is possible that the path maps to several values when one of the intermediate values is an array.
 *
 * Example node:
 * {
 *   foo: [{ bar: `bar1`}, { bar: `bar2` }]
 * }
 *
 * In this case resolveFieldValue([`foo`, `bar`], node) returns [`bar1`, `bar2`]
 *
 * When `resolvedNodeFields` argument is passed the function first looks for values in this object
 * and only looks in the node if the value is not found in `resolvedNodeFields`
 */
function resolveFieldValue(dottedFieldPath, nodeOrThunk, resolvedNodeFields) {
  let result;
  if (resolvedNodeFields) {
    result = (0, _getValueAt.getValueAt)(resolvedNodeFields, dottedFieldPath);
  }
  if (typeof result !== `undefined`) {
    return result;
  }
  const node = typeof nodeOrThunk === `function` ? nodeOrThunk() : nodeOrThunk;
  return (0, _getValueAt.getValueAt)(node, dottedFieldPath);
}
function matchesFilter(filter, fieldValue) {
  switch (filter.comparator) {
    case _query.DbComparator.EQ:
      return filter.value === null ? filter.value == fieldValue : filter.value === fieldValue;
    case _query.DbComparator.IN:
      {
        const arr = Array.isArray(filter.value) ? filter.value : [filter.value];
        return arr.some(v => v === null ? v == fieldValue : v === fieldValue);
      }
    case _query.DbComparator.GT:
      return compareKey(fieldValue, filter.value) > 0;
    case _query.DbComparator.GTE:
      return compareKey(fieldValue, filter.value) >= 0;
    case _query.DbComparator.LT:
      return compareKey(fieldValue, filter.value) < 0;
    case _query.DbComparator.LTE:
      return compareKey(fieldValue, filter.value) <= 0;
    case _query.DbComparator.NE:
    case _query.DbComparator.NIN:
      {
        const arr = Array.isArray(filter.value) ? filter.value : [filter.value];
        return arr.every(v => v === null ? v != fieldValue : v !== fieldValue);
      }
    case _query.DbComparator.REGEX:
      {
        if (typeof fieldValue !== `undefined` && filter.value instanceof RegExp) {
          return filter.value.test(String(fieldValue));
        }
        return false;
      }
  }
  return false;
}
function cartesianProduct(...arr) {
  return arr.reduce((a, b) => a.flatMap(d => b.map(e => [...d, e])), [[]]);
}
const typeOrder = {
  symbol: 0,
  undefined: 1,
  boolean: 2,
  number: 3,
  string: 4
};

// Note: this is a copy of this function from lmdb-store:
// https://github.com/DoctorEvidence/lmdb-store/blob/e1e53d6d2012ec22071a8fb7fa3b47f8886b22d2/index.js#L1259-L1300
// We need it here to avoid imports from "lmdb-store" while it is not a direct dependency
// FIXME: replace with an import in v4
function compareKey(a, b) {
  // compare with type consistency that matches ordered-binary
  if (typeof a == `object`) {
    if (!a) {
      return b == null ? 0 : -1;
    }
    if (a[`compare`]) {
      if (b == null) {
        return 1;
      } else if (typeof b === `object` && b !== null && b[`compare`]) {
        return a[`compare`](b);
      } else {
        return -1;
      }
    }
    let arrayComparison;
    if (b instanceof Array) {
      let i = 0;
      while ((arrayComparison = compareKey(a[i], b[i])) == 0 && i <= a[`length`]) {
        i++;
      }
      return arrayComparison;
    }
    arrayComparison = compareKey(a[0], b);
    if (arrayComparison == 0 && a[`length`] > 1) return 1;
    return arrayComparison;
  } else if (typeof a == typeof b) {
    if (typeof a === `symbol` && typeof b === `symbol`) {
      a = Symbol.keyFor(a);
      b = Symbol.keyFor(b);
    }
    return a < b ? -1 : a === b ? 0 : 1;
  } else if (typeof b == `object`) {
    if (b instanceof Array) return -compareKey(b, a);
    return 1;
  } else {
    return typeOrder[typeof a] < typeOrder[typeof b] ? -1 : 1;
  }
}
//# sourceMappingURL=common.js.map