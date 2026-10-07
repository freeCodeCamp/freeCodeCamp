"use strict";

exports.__esModule = true;
exports.GatsbyIterable = void 0;
exports.isIterable = isIterable;
exports.isNonArrayIterable = isNonArrayIterable;
var _lmdb = require("lmdb");
/**
 * Wrapper for any iterable providing chainable interface and convenience methods
 * similar to array.
 *
 * Additionally provides convenience methods for sorted iterables.
 *
 * Note: avoiding async iterables because of perf reasons, see https://github.com/nodejs/node/issues/31979
 * (fortunately lmdb can traverse stuff in sync manner very fast)
 */
class GatsbyIterable {
  constructor(source) {
    this.source = source;
  }
  *[Symbol.iterator]() {
    const source = typeof this.source === `function` ? this.source() : this.source;
    let i = 0;
    for (const val of source) {
      yield val;

      // clearKeptObjects just make it possible for WeakRefs used in any way during current
      // sync execution tick to be garbage collected. It doesn't force GC, just remove
      // internal strong references in V8.
      // see https://github.com/kriszyp/weak-lru-cache/issues/4
      if (++i % 100 === 0) {
        (0, _lmdb.clearKeptObjects)();
      }
    }
  }
  concat(other) {
    return new GatsbyIterable(() => concatSequence(this, other));
  }
  map(fn) {
    return new GatsbyIterable(() => mapSequence(this, fn));
  }
  filter(predicate) {
    return new GatsbyIterable(() => filterSequence(this, predicate));
  }
  slice(start, end) {
    if (typeof end !== `undefined` && end < start || start < 0) throw new Error(`Both arguments must not be negative and end must be greater than start`);
    return new GatsbyIterable(() => sliceSequence(this, start, end));
  }
  deduplicate(keyFn) {
    return new GatsbyIterable(() => deduplicateSequence(this, keyFn));
  }
  forEach(callback) {
    let i = 0;
    for (const value of this) {
      callback(value, i++);
    }
  }

  /**
   * Assuming both this and the other iterable are sorted
   * produces the new sorted iterable with interleaved values.
   *
   * Note: this method is not removing duplicates
   */
  mergeSorted(other, comparator) {
    return new GatsbyIterable(() => mergeSorted(this, other, comparator));
  }

  /**
   * Assuming both this and the other iterable are sorted
   * produces the new sorted iterable with values from this iterable
   * that also exist in the other iterable.
   */
  intersectSorted(other, comparator) {
    return new GatsbyIterable(() => intersectSorted(this, other, comparator));
  }

  /**
   * Assuming this iterable is sorted, removes duplicates from it
   * by applying comparator(prev, current) to sibling iterable values.
   *
   * Comparator function is expected to return 0 when items are equal,
   * similar to Array.prototype.sort() argument.
   *
   * If comparator is not set, uses strict === comparison
   */
  deduplicateSorted(comparator) {
    return new GatsbyIterable(() => deduplicateSorted(this, comparator));
  }
}

/**
 * Returns true when passed value is iterable
 */
exports.GatsbyIterable = GatsbyIterable;
function isIterable(obj) {
  if (typeof obj !== `object` || obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === `function`;
}
function isNonArrayIterable(value) {
  return isIterable(value) && !Array.isArray(value);
}
function* mapSequence(source, fn) {
  let i = 0;
  for (const value of source) {
    yield fn(value, i++);
  }
}
function* sliceSequence(source, start, end) {
  let index = -1;
  for (const item of source) {
    index++;
    if (index < start) continue;
    if (typeof end !== `undefined` && index >= end) break;
    yield item;
  }
}
function* filterSequence(source, predicate) {
  for (const value of source) {
    if (predicate(value)) {
      yield value;
    }
  }
}
function* concatSequence(first, second) {
  for (const value of first) {
    yield value;
  }
  for (const value of second) {
    yield value;
  }
}
function* deduplicateSequence(source, keyFn) {
  // TODO: this can be potentially improved by using bloom filters?
  const registered = new Set();
  for (const current of source) {
    const key = keyFn ? keyFn(current) : current;
    if (!registered.has(key)) {
      registered.add(key);
      yield current;
    }
  }
}
function* deduplicateSorted(source, comparator = defaultComparator) {
  let prev;
  for (const current of source) {
    if (typeof prev === `undefined` || comparator(prev, current) !== 0) {
      yield current;
    }
    prev = current;
  }
}

// Merge two originally sorted iterables:
function* mergeSorted(firstSorted, secondSorted, comparator = defaultComparator) {
  const iter1 = firstSorted[Symbol.iterator]();
  const iter2 = secondSorted[Symbol.iterator]();
  try {
    let a = iter1.next();
    let b = iter2.next();
    while (!a.done && !b.done) {
      if (comparator(a.value, b.value) <= 0) {
        yield a.value;
        a = iter1.next();
      } else {
        yield b.value;
        b = iter2.next();
      }
    }
    while (!a.done) {
      yield a.value;
      a = iter1.next();
    }
    while (!b.done) {
      yield b.value;
      b = iter2.next();
    }
  } finally {
    // If generator is exited early, make sure to close iterators too
    // See https://raganwald.com/2017/07/22/closing-iterables-is-a-leaky-abstraction.html#more-about-closing-iterators-explicitly
    if (typeof iter1.return === `function`) iter1.return();
    if (typeof iter2.return === `function`) iter2.return();
  }
}
function* intersectSorted(firstSorted, secondSorted, comparator = defaultComparator) {
  const iter1 = firstSorted[Symbol.iterator]();
  const iter2 = secondSorted[Symbol.iterator]();
  try {
    let a = iter1.next();
    let b = iter2.next();
    while (!a.done && !b.done) {
      const eq = comparator(a.value, b.value);
      if (eq < 0) {
        // a < b
        a = iter1.next();
      } else if (eq > 0) {
        // a > b
        b = iter2.next();
      } else {
        yield a.value;
        a = iter1.next();
      }
    }
  } finally {
    if (typeof iter1.return === `function`) iter1.return();
    if (typeof iter2.return === `function`) iter2.return();
  }
}
function defaultComparator(a, b) {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
}
//# sourceMappingURL=iterable.js.map