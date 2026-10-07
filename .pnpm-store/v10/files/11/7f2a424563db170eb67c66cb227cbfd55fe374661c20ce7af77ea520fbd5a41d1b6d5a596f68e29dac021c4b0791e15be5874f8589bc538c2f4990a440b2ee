/**
 * @since 2.0.0
 */
import * as RA from "./Array.js";
import * as Equal from "./Equal.js";
import * as Equivalence from "./Equivalence.js";
import { dual, identity, pipe } from "./Function.js";
import * as Hash from "./Hash.js";
import { format, NodeInspectSymbol, toJSON } from "./Inspectable.js";
import * as O from "./Option.js";
import * as Order from "./Order.js";
import { pipeArguments } from "./Pipeable.js";
import { hasProperty } from "./Predicate.js";
const TypeId = /*#__PURE__*/Symbol.for("effect/Chunk");
function copy(src, srcPos, dest, destPos, len) {
  for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) {
    dest[destPos + i - srcPos] = src[i];
  }
  return dest;
}
const emptyArray = [];
/**
 * Compares the two chunks of equal length using the specified function
 *
 * @category equivalence
 * @since 2.0.0
 */
export const getEquivalence = isEquivalent => Equivalence.make((self, that) => self.length === that.length && toReadonlyArray(self).every((value, i) => isEquivalent(value, unsafeGet(that, i))));
const _equivalence = /*#__PURE__*/getEquivalence(Equal.equals);
const ChunkProto = {
  [TypeId]: {
    _A: _ => _
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Chunk",
      values: toReadonlyArray(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [Equal.symbol](that) {
    return isChunk(that) && _equivalence(this, that);
  },
  [Hash.symbol]() {
    return Hash.cached(this, Hash.array(toReadonlyArray(this)));
  },
  [Symbol.iterator]() {
    switch (this.backing._tag) {
      case "IArray":
        {
          return this.backing.array[Symbol.iterator]();
        }
      case "IEmpty":
        {
          return emptyArray[Symbol.iterator]();
        }
      default:
        {
          return toReadonlyArray(this)[Symbol.iterator]();
        }
    }
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeChunk = backing => {
  const chunk = Object.create(ChunkProto);
  chunk.backing = backing;
  switch (backing._tag) {
    case "IEmpty":
      {
        chunk.length = 0;
        chunk.depth = 0;
        chunk.left = chunk;
        chunk.right = chunk;
        break;
      }
    case "IConcat":
      {
        chunk.length = backing.left.length + backing.right.length;
        chunk.depth = 1 + Math.max(backing.left.depth, backing.right.depth);
        chunk.left = backing.left;
        chunk.right = backing.right;
        break;
      }
    case "IArray":
      {
        chunk.length = backing.array.length;
        chunk.depth = 0;
        chunk.left = _empty;
        chunk.right = _empty;
        break;
      }
    case "ISingleton":
      {
        chunk.length = 1;
        chunk.depth = 0;
        chunk.left = _empty;
        chunk.right = _empty;
        break;
      }
    case "ISlice":
      {
        chunk.length = backing.length;
        chunk.depth = backing.chunk.depth + 1;
        chunk.left = _empty;
        chunk.right = _empty;
        break;
      }
  }
  return chunk;
};
/**
 * Checks if `u` is a `Chunk<unknown>`
 *
 * @category constructors
 * @since 2.0.0
 */
export const isChunk = u => hasProperty(u, TypeId);
const _empty = /*#__PURE__*/makeChunk({
  _tag: "IEmpty"
});
/**
 * @category constructors
 * @since 2.0.0
 */
export const empty = () => _empty;
/**
 * Builds a `NonEmptyChunk` from an non-empty collection of elements.
 *
 * @category constructors
 * @since 2.0.0
 */
export const make = (...as) => unsafeFromNonEmptyArray(as);
/**
 * Builds a `NonEmptyChunk` from a single element.
 *
 * @category constructors
 * @since 2.0.0
 */
export const of = a => makeChunk({
  _tag: "ISingleton",
  a
});
/**
 * Creates a new `Chunk` from an iterable collection of values.
 *
 * @category constructors
 * @since 2.0.0
 */
export const fromIterable = self => isChunk(self) ? self : unsafeFromArray(RA.fromIterable(self));
const copyToArray = (self, array, initial) => {
  switch (self.backing._tag) {
    case "IArray":
      {
        copy(self.backing.array, 0, array, initial, self.length);
        break;
      }
    case "IConcat":
      {
        copyToArray(self.left, array, initial);
        copyToArray(self.right, array, initial + self.left.length);
        break;
      }
    case "ISingleton":
      {
        array[initial] = self.backing.a;
        break;
      }
    case "ISlice":
      {
        let i = 0;
        let j = initial;
        while (i < self.length) {
          array[j] = unsafeGet(self, i);
          i += 1;
          j += 1;
        }
        break;
      }
  }
};
const toArray_ = self => toReadonlyArray(self).slice();
/**
 * Converts a `Chunk` into an `Array`. If the provided `Chunk` is non-empty
 * (`NonEmptyChunk`), the function will return a `NonEmptyArray`, ensuring the
 * non-empty property is preserved.
 *
 * @category conversions
 * @since 2.0.0
 */
export const toArray = toArray_;
const toReadonlyArray_ = self => {
  switch (self.backing._tag) {
    case "IEmpty":
      {
        return emptyArray;
      }
    case "IArray":
      {
        return self.backing.array;
      }
    default:
      {
        const arr = new Array(self.length);
        copyToArray(self, arr, 0);
        self.backing = {
          _tag: "IArray",
          array: arr
        };
        self.left = _empty;
        self.right = _empty;
        self.depth = 0;
        return arr;
      }
  }
};
/**
 * Converts a `Chunk` into a `ReadonlyArray`. If the provided `Chunk` is
 * non-empty (`NonEmptyChunk`), the function will return a
 * `NonEmptyReadonlyArray`, ensuring the non-empty property is preserved.
 *
 * @category conversions
 * @since 2.0.0
 */
export const toReadonlyArray = toReadonlyArray_;
const reverseChunk = self => {
  switch (self.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return self;
    case "IArray":
      {
        return makeChunk({
          _tag: "IArray",
          array: RA.reverse(self.backing.array)
        });
      }
    case "IConcat":
      {
        return makeChunk({
          _tag: "IConcat",
          left: reverse(self.backing.right),
          right: reverse(self.backing.left)
        });
      }
    case "ISlice":
      return unsafeFromArray(RA.reverse(toReadonlyArray(self)));
  }
};
/**
 * Reverses the order of elements in a `Chunk`.
 * Importantly, if the input chunk is a `NonEmptyChunk`, the reversed chunk will also be a `NonEmptyChunk`.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const chunk = Chunk.make(1, 2, 3)
 * const result = Chunk.reverse(chunk)
 *
 * console.log(result)
 * // { _id: 'Chunk', values: [ 3, 2, 1 ] }
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export const reverse = reverseChunk;
/**
 * This function provides a safe way to read a value at a particular index from a `Chunk`.
 *
 * @category elements
 * @since 2.0.0
 */
export const get = /*#__PURE__*/dual(2, (self, index) => index < 0 || index >= self.length ? O.none() : O.some(unsafeGet(self, index)));
/**
 * Wraps an array into a chunk without copying, unsafe on mutable arrays
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeFromArray = self => self.length === 0 ? empty() : self.length === 1 ? of(self[0]) : makeChunk({
  _tag: "IArray",
  array: self
});
/**
 * Wraps an array into a chunk without copying, unsafe on mutable arrays
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeFromNonEmptyArray = self => unsafeFromArray(self);
/**
 * Gets an element unsafely, will throw on out of bounds
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeGet = /*#__PURE__*/dual(2, (self, index) => {
  switch (self.backing._tag) {
    case "IEmpty":
      {
        throw new Error(`Index out of bounds`);
      }
    case "ISingleton":
      {
        if (index !== 0) {
          throw new Error(`Index out of bounds`);
        }
        return self.backing.a;
      }
    case "IArray":
      {
        if (index >= self.length || index < 0) {
          throw new Error(`Index out of bounds`);
        }
        return self.backing.array[index];
      }
    case "IConcat":
      {
        return index < self.left.length ? unsafeGet(self.left, index) : unsafeGet(self.right, index - self.left.length);
      }
    case "ISlice":
      {
        return unsafeGet(self.backing.chunk, index + self.backing.offset);
      }
  }
});
/**
 * Appends the specified element to the end of the `Chunk`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const append = /*#__PURE__*/dual(2, (self, a) => appendAll(self, of(a)));
/**
 * Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const prepend = /*#__PURE__*/dual(2, (self, elem) => appendAll(of(elem), self));
/**
 * Takes the first up to `n` elements from the chunk
 *
 * @since 2.0.0
 */
export const take = /*#__PURE__*/dual(2, (self, n) => {
  if (n <= 0) {
    return _empty;
  } else if (n >= self.length) {
    return self;
  } else {
    switch (self.backing._tag) {
      case "ISlice":
        {
          return makeChunk({
            _tag: "ISlice",
            chunk: self.backing.chunk,
            length: n,
            offset: self.backing.offset
          });
        }
      case "IConcat":
        {
          if (n > self.left.length) {
            return makeChunk({
              _tag: "IConcat",
              left: self.left,
              right: take(self.right, n - self.left.length)
            });
          }
          return take(self.left, n);
        }
      default:
        {
          return makeChunk({
            _tag: "ISlice",
            chunk: self,
            offset: 0,
            length: n
          });
        }
    }
  }
});
/**
 * Drops the first up to `n` elements from the chunk
 *
 * @since 2.0.0
 */
export const drop = /*#__PURE__*/dual(2, (self, n) => {
  if (n <= 0) {
    return self;
  } else if (n >= self.length) {
    return _empty;
  } else {
    switch (self.backing._tag) {
      case "ISlice":
        {
          return makeChunk({
            _tag: "ISlice",
            chunk: self.backing.chunk,
            offset: self.backing.offset + n,
            length: self.backing.length - n
          });
        }
      case "IConcat":
        {
          if (n > self.left.length) {
            return drop(self.right, n - self.left.length);
          }
          return makeChunk({
            _tag: "IConcat",
            left: drop(self.left, n),
            right: self.right
          });
        }
      default:
        {
          return makeChunk({
            _tag: "ISlice",
            chunk: self,
            offset: n,
            length: self.length - n
          });
        }
    }
  }
});
/**
 * Drops the last `n` elements.
 *
 * @since 2.0.0
 */
export const dropRight = /*#__PURE__*/dual(2, (self, n) => take(self, Math.max(0, self.length - n)));
/**
 * Drops all elements so long as the predicate returns true.
 *
 * @since 2.0.0
 */
export const dropWhile = /*#__PURE__*/dual(2, (self, predicate) => {
  const arr = toReadonlyArray(self);
  const len = arr.length;
  let i = 0;
  while (i < len && predicate(arr[i])) {
    i++;
  }
  return drop(self, i);
});
/**
 * Prepends the specified prefix chunk to the beginning of the specified chunk.
 * If either chunk is non-empty, the result is also a non-empty chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
 *
 * console.log(result)
 * // [ "a", "b", 1, 2 ]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export const prependAll = /*#__PURE__*/dual(2, (self, that) => appendAll(that, self));
/**
 * Concatenates two chunks, combining their elements.
 * If either chunk is non-empty, the result is also a non-empty chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
 *
 * console.log(result)
 * // [ 1, 2, "a", "b" ]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export const appendAll = /*#__PURE__*/dual(2, (self, that) => {
  if (self.backing._tag === "IEmpty") {
    return that;
  }
  if (that.backing._tag === "IEmpty") {
    return self;
  }
  const diff = that.depth - self.depth;
  if (Math.abs(diff) <= 1) {
    return makeChunk({
      _tag: "IConcat",
      left: self,
      right: that
    });
  } else if (diff < -1) {
    if (self.left.depth >= self.right.depth) {
      const nr = appendAll(self.right, that);
      return makeChunk({
        _tag: "IConcat",
        left: self.left,
        right: nr
      });
    } else {
      const nrr = appendAll(self.right.right, that);
      if (nrr.depth === self.depth - 3) {
        const nr = makeChunk({
          _tag: "IConcat",
          left: self.right.left,
          right: nrr
        });
        return makeChunk({
          _tag: "IConcat",
          left: self.left,
          right: nr
        });
      } else {
        const nl = makeChunk({
          _tag: "IConcat",
          left: self.left,
          right: self.right.left
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: nrr
        });
      }
    }
  } else {
    if (that.right.depth >= that.left.depth) {
      const nl = appendAll(self, that.left);
      return makeChunk({
        _tag: "IConcat",
        left: nl,
        right: that.right
      });
    } else {
      const nll = appendAll(self, that.left.left);
      if (nll.depth === that.depth - 3) {
        const nl = makeChunk({
          _tag: "IConcat",
          left: nll,
          right: that.left.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: that.right
        });
      } else {
        const nr = makeChunk({
          _tag: "IConcat",
          left: that.left.right,
          right: that.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nll,
          right: nr
        });
      }
    }
  }
});
/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterMap = /*#__PURE__*/dual(2, (self, f) => unsafeFromArray(RA.filterMap(self, f)));
/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filter = /*#__PURE__*/dual(2, (self, predicate) => unsafeFromArray(RA.filter(self, predicate)));
/**
 * Transforms all elements of the chunk for as long as the specified function returns some value
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterMapWhile = /*#__PURE__*/dual(2, (self, f) => unsafeFromArray(RA.filterMapWhile(self, f)));
/**
 * Filter out optional values
 *
 * @since 2.0.0
 * @category filtering
 */
export const compact = self => filterMap(self, identity);
/**
 * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => {
  if (self.backing._tag === "ISingleton") {
    return f(self.backing.a, 0);
  }
  let out = _empty;
  let i = 0;
  for (const k of self) {
    out = appendAll(out, f(k, i++));
  }
  return out;
});
/**
 * Iterates over each element of a `Chunk` and applies a function to it.
 *
 * **Details**
 *
 * This function processes every element of the given `Chunk`, calling the
 * provided function `f` on each element. It does not return a new value;
 * instead, it is primarily used for side effects, such as logging or
 * accumulating data in an external variable.
 *
 * @since 2.0.0
 * @category combinators
 */
export const forEach = /*#__PURE__*/dual(2, (self, f) => toReadonlyArray(self).forEach(f));
/**
 * Flattens a chunk of chunks into a single chunk by concatenating all chunks.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatten = /*#__PURE__*/flatMap(identity);
/**
 * Groups elements in chunks of up to `n` elements.
 *
 * @since 2.0.0
 * @category elements
 */
export const chunksOf = /*#__PURE__*/dual(2, (self, n) => {
  const gr = [];
  let current = [];
  toReadonlyArray(self).forEach(a => {
    current.push(a);
    if (current.length >= n) {
      gr.push(unsafeFromArray(current));
      current = [];
    }
  });
  if (current.length > 0) {
    gr.push(unsafeFromArray(current));
  }
  return unsafeFromArray(gr);
});
/**
 * Creates a Chunk of unique values that are included in all given Chunks.
 *
 * The order and references of result values are determined by the Chunk.
 *
 * @since 2.0.0
 * @category elements
 */
export const intersection = /*#__PURE__*/dual(2, (self, that) => unsafeFromArray(RA.intersection(toReadonlyArray(self), toReadonlyArray(that))));
/**
 * Determines if the chunk is empty.
 *
 * @since 2.0.0
 * @category elements
 */
export const isEmpty = self => self.length === 0;
/**
 * Determines if the chunk is not empty.
 *
 * @since 2.0.0
 * @category elements
 */
export const isNonEmpty = self => self.length > 0;
/**
 * Returns the first element of this chunk if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export const head = /*#__PURE__*/get(0);
/**
 * Returns the first element of this chunk.
 *
 * It will throw an error if the chunk is empty.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeHead = self => unsafeGet(self, 0);
/**
 * Returns the first element of this non empty chunk.
 *
 * @since 2.0.0
 * @category elements
 */
export const headNonEmpty = unsafeHead;
/**
 * Returns the last element of this chunk if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export const last = self => get(self, self.length - 1);
/**
 * Returns the last element of this chunk.
 *
 * It will throw an error if the chunk is empty.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeLast = self => unsafeGet(self, self.length - 1);
/**
 * Returns the last element of this non empty chunk.
 *
 * @since 3.4.0
 * @category elements
 */
export const lastNonEmpty = unsafeLast;
/**
 * Transforms the elements of a chunk using the specified mapping function.
 * If the input chunk is non-empty, the resulting chunk will also be non-empty.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
 *
 * console.log(result)
 * // { _id: 'Chunk', values: [ 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = /*#__PURE__*/dual(2, (self, f) => self.backing._tag === "ISingleton" ? of(f(self.backing.a, 0)) : unsafeFromArray(pipe(toReadonlyArray(self), RA.map((a, i) => f(a, i)))));
/**
 * Statefully maps over the chunk, producing new elements of type `B`.
 *
 * @since 2.0.0
 * @category folding
 */
export const mapAccum = /*#__PURE__*/dual(3, (self, s, f) => {
  const [s1, as] = RA.mapAccum(self, s, f);
  return [s1, unsafeFromArray(as)];
});
/**
 * Separate elements based on a predicate that also exposes the index of the element.
 *
 * @category filtering
 * @since 2.0.0
 */
export const partition = /*#__PURE__*/dual(2, (self, predicate) => pipe(RA.partition(toReadonlyArray(self), predicate), ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]));
/**
 * Partitions the elements of this chunk into two chunks using f.
 *
 * @category filtering
 * @since 2.0.0
 */
export const partitionMap = /*#__PURE__*/dual(2, (self, f) => pipe(RA.partitionMap(toReadonlyArray(self), f), ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]));
/**
 * Partitions the elements of this chunk into two chunks.
 *
 * @category filtering
 * @since 2.0.0
 */
export const separate = self => pipe(RA.separate(toReadonlyArray(self)), ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]);
/**
 * Retireves the size of the chunk
 *
 * @since 2.0.0
 * @category elements
 */
export const size = self => self.length;
/**
 * Sort the elements of a Chunk in increasing order, creating a new Chunk.
 *
 * @since 2.0.0
 * @category sorting
 */
export const sort = /*#__PURE__*/dual(2, (self, O) => unsafeFromArray(RA.sort(toReadonlyArray(self), O)));
/**
 * @since 2.0.0
 * @category sorting
 */
export const sortWith = /*#__PURE__*/dual(3, (self, f, order) => sort(self, Order.mapInput(order, f)));
/**
 *  Returns two splits of this chunk at the specified index.
 *
 * @since 2.0.0
 * @category splitting
 */
export const splitAt = /*#__PURE__*/dual(2, (self, n) => [take(self, n), drop(self, n)]);
/**
 * Splits a `NonEmptyChunk` into two segments, with the first segment containing a maximum of `n` elements.
 * The value of `n` must be `>= 1`.
 *
 * @category splitting
 * @since 2.0.0
 */
export const splitNonEmptyAt = /*#__PURE__*/dual(2, (self, n) => {
  const _n = Math.max(1, Math.floor(n));
  return _n >= self.length ? [self, empty()] : [take(self, _n), drop(self, _n)];
});
/**
 * Splits this chunk into `n` equally sized chunks.
 *
 * @since 2.0.0
 * @category splitting
 */
export const split = /*#__PURE__*/dual(2, (self, n) => chunksOf(self, Math.ceil(self.length / Math.floor(n))));
/**
 * Splits this chunk on the first element that matches this predicate.
 * Returns a tuple containing two chunks: the first one is before the match, and the second one is from the match onward.
 *
 * @category splitting
 * @since 2.0.0
 */
export const splitWhere = /*#__PURE__*/dual(2, (self, predicate) => {
  let i = 0;
  for (const a of toReadonlyArray(self)) {
    if (predicate(a)) {
      break;
    } else {
      i++;
    }
  }
  return splitAt(self, i);
});
/**
 * Returns every elements after the first.
 *
 * @since 2.0.0
 * @category elements
 */
export const tail = self => self.length > 0 ? O.some(drop(self, 1)) : O.none();
/**
 * Returns every elements after the first.
 *
 * @since 2.0.0
 * @category elements
 */
export const tailNonEmpty = self => drop(self, 1);
/**
 * Takes the last `n` elements.
 *
 * @since 2.0.0
 * @category elements
 */
export const takeRight = /*#__PURE__*/dual(2, (self, n) => drop(self, self.length - n));
/**
 * Takes all elements so long as the predicate returns true.
 *
 * @since 2.0.0
 * @category elements
 */
export const takeWhile = /*#__PURE__*/dual(2, (self, predicate) => {
  const out = [];
  for (const a of toReadonlyArray(self)) {
    if (predicate(a)) {
      out.push(a);
    } else {
      break;
    }
  }
  return unsafeFromArray(out);
});
/**
 * Creates a Chunks of unique values, in order, from all given Chunks.
 *
 * @since 2.0.0
 * @category elements
 */
export const union = /*#__PURE__*/dual(2, (self, that) => unsafeFromArray(RA.union(toReadonlyArray(self), toReadonlyArray(that))));
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @since 2.0.0
 * @category elements
 */
export const dedupe = self => unsafeFromArray(RA.dedupe(toReadonlyArray(self)));
/**
 * Deduplicates adjacent elements that are identical.
 *
 * @since 2.0.0
 * @category filtering
 */
export const dedupeAdjacent = self => unsafeFromArray(RA.dedupeAdjacent(self));
/**
 * Takes a `Chunk` of pairs and return two corresponding `Chunk`s.
 *
 * Note: The function is reverse of `zip`.
 *
 * @since 2.0.0
 * @category elements
 */
export const unzip = self => {
  const [left, right] = RA.unzip(self);
  return [unsafeFromArray(left), unsafeFromArray(right)];
};
/**
 * Zips this chunk pointwise with the specified chunk using the specified combiner.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith = /*#__PURE__*/dual(3, (self, that, f) => unsafeFromArray(RA.zipWith(self, that, f)));
/**
 * Zips this chunk pointwise with the specified chunk.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip = /*#__PURE__*/dual(2, (self, that) => zipWith(self, that, (a, b) => [a, b]));
/**
 * Delete the element at the specified index, creating a new `Chunk`.
 *
 * @since 2.0.0
 */
export const remove = /*#__PURE__*/dual(2, (self, i) => {
  if (i < 0 || i >= self.length) return self;
  return unsafeFromArray(RA.remove(toReadonlyArray(self), i));
});
/**
 * @since 3.16.0
 */
export const removeOption = /*#__PURE__*/dual(2, (self, i) => {
  if (i < 0 || i >= self.length) return O.none();
  return O.some(unsafeFromArray(RA.remove(toReadonlyArray(self), i)));
});
/**
 * @since 2.0.0
 */
export const modifyOption = /*#__PURE__*/dual(3, (self, i, f) => {
  if (i < 0 || i >= self.length) return O.none();
  return O.some(unsafeFromArray(RA.modify(toReadonlyArray(self), i, f)));
});
/**
 * Apply a function to the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @since 2.0.0
 */
export const modify = /*#__PURE__*/dual(3, (self, i, f) => O.getOrElse(modifyOption(self, i, f), () => self));
/**
 * Change the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @since 2.0.0
 */
export const replace = /*#__PURE__*/dual(3, (self, i, b) => modify(self, i, () => b));
/**
 * @since 2.0.0
 */
export const replaceOption = /*#__PURE__*/dual(3, (self, i, b) => modifyOption(self, i, () => b));
/**
 * Return a Chunk of length n with element i initialized with f(i).
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @category constructors
 * @since 2.0.0
 */
export const makeBy = /*#__PURE__*/dual(2, (n, f) => fromIterable(RA.makeBy(n, f)));
/**
 * Create a non empty `Chunk` containing a range of integers, including both endpoints.
 *
 * @category constructors
 * @since 2.0.0
 */
export const range = (start, end) => start <= end ? makeBy(end - start + 1, i => start + i) : of(start);
// -------------------------------------------------------------------------------------
// re-exports from ReadonlyArray
// -------------------------------------------------------------------------------------
/**
 * Returns a function that checks if a `Chunk` contains a given value using the default `Equivalence`.
 *
 * @category elements
 * @since 2.0.0
 */
export const contains = RA.contains;
/**
 * Returns a function that checks if a `Chunk` contains a given value using a provided `isEquivalent` function.
 *
 * @category elements
 * @since 2.0.0
 */
export const containsWith = RA.containsWith;
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
export const findFirst = RA.findFirst;
/**
 * Return the first index for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export const findFirstIndex = RA.findFirstIndex;
/**
 * Find the last element for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export const findLast = RA.findLast;
/**
 * Return the last index for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export const findLastIndex = RA.findLastIndex;
/**
 * Check if a predicate holds true for every `Chunk` element.
 *
 * @category elements
 * @since 2.0.0
 */
export const every = /*#__PURE__*/dual(2, (self, refinement) => RA.fromIterable(self).every(refinement));
/**
 * Check if a predicate holds true for some `Chunk` element.
 *
 * @category elements
 * @since 2.0.0
 */
export const some = /*#__PURE__*/dual(2, (self, predicate) => RA.fromIterable(self).some(predicate));
/**
 * Joins the elements together with "sep" in the middle.
 *
 * @category folding
 * @since 2.0.0
 */
export const join = RA.join;
/**
 * @category folding
 * @since 2.0.0
 */
export const reduce = RA.reduce;
/**
 * @category folding
 * @since 2.0.0
 */
export const reduceRight = RA.reduceRight;
/**
 * Creates a `Chunk` of values not included in the other given `Chunk` using the provided `isEquivalent` function.
 * The order and references of result values are determined by the first `Chunk`.
 *
 * @since 3.2.0
 */
export const differenceWith = isEquivalent => {
  return dual(2, (self, that) => unsafeFromArray(RA.differenceWith(isEquivalent)(that, self)));
};
/**
 * Creates a `Chunk` of values not included in the other given `Chunk`.
 * The order and references of result values are determined by the first `Chunk`.
 *
 * @since 3.2.0
 */
export const difference = /*#__PURE__*/dual(2, (self, that) => unsafeFromArray(RA.difference(that, self)));
//# sourceMappingURL=Chunk.js.map