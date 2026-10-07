/**
 * This module provides utility functions for working with records in TypeScript.
 *
 * @since 2.0.0
 */
import * as E from "./Either.js";
import * as Equal from "./Equal.js";
import { dual, identity } from "./Function.js";
import * as Option from "./Option.js";
/**
 * Creates a new, empty record.
 *
 * @category constructors
 * @since 2.0.0
 */
export const empty = () => ({});
/**
 * Determine if a record is empty.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isEmptyRecord } from "effect/Record"
 *
 * assert.deepStrictEqual(isEmptyRecord({}), true);
 * assert.deepStrictEqual(isEmptyRecord({ a: 3 }), false);
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export const isEmptyRecord = self => keys(self).length === 0;
/**
 * Determine if a record is empty.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isEmptyReadonlyRecord } from "effect/Record"
 *
 * assert.deepStrictEqual(isEmptyReadonlyRecord({}), true);
 * assert.deepStrictEqual(isEmptyReadonlyRecord({ a: 3 }), false);
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export const isEmptyReadonlyRecord = isEmptyRecord;
/**
 * Takes an iterable and a projection function and returns a record.
 * The projection function maps each value of the iterable to a tuple of a key and a value, which is then added to the resulting record.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { fromIterableWith } from "effect/Record"
 *
 * const input = [1, 2, 3, 4]
 *
 * assert.deepStrictEqual(
 *   fromIterableWith(input, a => [String(a), a * 2]),
 *   { '1': 2, '2': 4, '3': 6, '4': 8 }
 * )
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export const fromIterableWith = /*#__PURE__*/dual(2, (self, f) => {
  const out = empty();
  for (const a of self) {
    const [k, b] = f(a);
    out[k] = b;
  }
  return out;
});
/**
 * Creates a new record from an iterable, utilizing the provided function to determine the key for each element.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { fromIterableBy } from "effect/Record"
 *
 * const users = [
 *   { id: "2", name: "name2" },
 *   { id: "1", name: "name1" }
 * ]
 *
 * assert.deepStrictEqual(
 *   fromIterableBy(users, user => user.id),
 *   {
 *     "2": { id: "2", name: "name2" },
 *     "1": { id: "1", name: "name1" }
 *   }
 * )
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export const fromIterableBy = (items, f) => fromIterableWith(items, a => [f(a), a]);
/**
 * Builds a record from an iterable of key-value pairs.
 *
 * If there are conflicting keys when using `fromEntries`, the last occurrence of the key/value pair will overwrite the
 * previous ones. So the resulting record will only have the value of the last occurrence of each key.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { fromEntries } from "effect/Record"
 *
 * const input: Array<[string, number]> = [["a", 1], ["b", 2]]
 *
 * assert.deepStrictEqual(fromEntries(input), { a: 1, b: 2 })
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEntries = Object.fromEntries;
/**
 * Transforms the values of a record into an `Array` with a custom mapping function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { collect } from "effect/Record"
 *
 * const x = { a: 1, b: 2, c: 3 }
 * assert.deepStrictEqual(collect(x, (key, n) => [key, n]), [["a", 1], ["b", 2], ["c", 3]])
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
export const collect = /*#__PURE__*/dual(2, (self, f) => {
  const out = [];
  for (const key of keys(self)) {
    out.push(f(key, self[key]));
  }
  return out;
});
/**
 * Takes a record and returns an array of tuples containing its keys and values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { toEntries } from "effect/Record"
 *
 * const x = { a: 1, b: 2, c: 3 }
 * assert.deepStrictEqual(toEntries(x), [["a", 1], ["b", 2], ["c", 3]])
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
export const toEntries = /*#__PURE__*/collect((key, value) => [key, value]);
/**
 * Returns the number of key/value pairs in a record.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { size } from "effect/Record";
 *
 * assert.deepStrictEqual(size({ a: "a", b: 1, c: true }), 3);
 * ```
 *
 * @since 2.0.0
 */
export const size = self => keys(self).length;
/**
 * Check if a given `key` exists in a record.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { empty, has } from "effect/Record"
 *
 * assert.deepStrictEqual(has({ a: 1, b: 2 }, "a"), true);
 * assert.deepStrictEqual(has(empty<string>(), "c"), false);
 * ```
 *
 * @since 2.0.0
 */
export const has = /*#__PURE__*/dual(2, (self, key) => Object.prototype.hasOwnProperty.call(self, key));
/**
 * Retrieve a value at a particular key from a record, returning it wrapped in an `Option`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record as R, Option } from "effect"
 *
 * const person: Record<string, unknown> = { name: "John Doe", age: 35 }
 *
 * assert.deepStrictEqual(R.get(person, "name"), Option.some("John Doe"))
 * assert.deepStrictEqual(R.get(person, "email"), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const get = /*#__PURE__*/dual(2, (self, key) => has(self, key) ? Option.some(self[key]) : Option.none());
/**
 * Apply a function to the element at the specified key, creating a new record.
 * If the key does not exist, the record is returned unchanged.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record as R } from "effect"
 *
 * const f = (x: number) => x * 2
 *
 * assert.deepStrictEqual(
 *  R.modify({ a: 3 }, 'a', f),
 *  { a: 6 }
 * )
 * assert.deepStrictEqual(
 *  R.modify({ a: 3 } as Record<string, number>, 'b', f),
 *  { a: 3 }
 * )
 * ```
 *
 * @since 2.0.0
 */
export const modify = /*#__PURE__*/dual(3, (self, key, f) => {
  if (!has(self, key)) {
    return {
      ...self
    };
  }
  return {
    ...self,
    [key]: f(self[key])
  };
});
/**
 * Apply a function to the element at the specified key, creating a new record,
 * or return `None` if the key doesn't exist.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record as R, Option } from "effect"
 *
 * const f = (x: number) => x * 2
 *
 * assert.deepStrictEqual(
 *  R.modifyOption({ a: 3 }, 'a', f),
 *  Option.some({ a: 6 })
 * )
 * assert.deepStrictEqual(
 *  R.modifyOption({ a: 3 } as Record<string, number>, 'b', f),
 *  Option.none()
 * )
 * ```
 *
 * @since 2.0.0
 */
export const modifyOption = /*#__PURE__*/dual(3, (self, key, f) => {
  if (!has(self, key)) {
    return Option.none();
  }
  return Option.some({
    ...self,
    [key]: f(self[key])
  });
});
/**
 * Replaces a value in the record with the new value passed as parameter.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record, Option } from "effect"
 *
 * assert.deepStrictEqual(
 *   Record.replaceOption({ a: 1, b: 2, c: 3 }, 'a', 10),
 *   Option.some({ a: 10, b: 2, c: 3 })
 * )
 * assert.deepStrictEqual(Record.replaceOption(Record.empty<string>(), 'a', 10), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const replaceOption = /*#__PURE__*/dual(3, (self, key, b) => modifyOption(self, key, () => b));
/**
 * If the given key exists in the record, returns a new record with the key removed,
 * otherwise returns a copy of the original record.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { remove } from "effect/Record"
 *
 * assert.deepStrictEqual(remove({ a: 1, b: 2 }, "a"), { b: 2 })
 * ```
 *
 * @since 2.0.0
 */
export const remove = /*#__PURE__*/dual(2, (self, key) => {
  if (!has(self, key)) {
    return {
      ...self
    };
  }
  const out = {
    ...self
  };
  delete out[key];
  return out;
});
/**
 * Retrieves the value of the property with the given `key` from a record and returns an `Option`
 * of a tuple with the value and the record with the removed property.
 * If the key is not present, returns `O.none`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record as R, Option } from "effect"
 *
 * assert.deepStrictEqual(R.pop({ a: 1, b: 2 }, "a"), Option.some([1, { b: 2 }]))
 * assert.deepStrictEqual(R.pop({ a: 1, b: 2 } as Record<string, number>, "c"), Option.none())
 * ```
 *
 * @category record
 * @since 2.0.0
 */
export const pop = /*#__PURE__*/dual(2, (self, key) => has(self, key) ? Option.some([self[key], remove(self, key)]) : Option.none());
/**
 * Maps a record into another record by applying a transformation function to each of its values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { map } from "effect/Record"
 *
 * const f = (n: number) => `-${n}`
 *
 * assert.deepStrictEqual(map({ a: 3, b: 5 }, f), { a: "-3", b: "-5" })
 *
 * const g = (n: number, key: string) => `${key.toUpperCase()}-${n}`
 *
 * assert.deepStrictEqual(map({ a: 3, b: 5 }, g), { a: "A-3", b: "B-5" })
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
export const map = /*#__PURE__*/dual(2, (self, f) => {
  const out = {
    ...self
  };
  for (const key of keys(self)) {
    out[key] = f(self[key], key);
  }
  return out;
});
/**
 * Maps the keys of a `ReadonlyRecord` while preserving the corresponding values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapKeys } from "effect/Record"
 *
 * assert.deepStrictEqual(mapKeys({ a: 3, b: 5 }, (key) => key.toUpperCase()), { A: 3, B: 5 })
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
export const mapKeys = /*#__PURE__*/dual(2, (self, f) => {
  const out = {};
  for (const key of keys(self)) {
    const a = self[key];
    out[f(key, a)] = a;
  }
  return out;
});
/**
 * Maps entries of a `ReadonlyRecord` using the provided function, allowing modification of both keys and corresponding values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapEntries } from "effect/Record"
 *
 * assert.deepStrictEqual(mapEntries({ a: 3, b: 5 }, (a, key) => [key.toUpperCase(), a + 1]), { A: 4, B: 6 })
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
export const mapEntries = /*#__PURE__*/dual(2, (self, f) => {
  const out = {};
  for (const key of keys(self)) {
    const [k, b] = f(self[key], key);
    out[k] = b;
  }
  return out;
});
/**
 * Transforms a record into a record by applying the function `f` to each key and value in the original record.
 * If the function returns `Some`, the key-value pair is included in the output record.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record, Option } from "effect"
 *
 * const x = { a: 1, b: 2, c: 3 }
 * const f = (a: number, key: string) => a > 2 ? Option.some(a * 2) : Option.none()
 * assert.deepStrictEqual(Record.filterMap(x, f), { c: 6 })
 * ```
 *
 * @since 2.0.0
 */
export const filterMap = /*#__PURE__*/dual(2, (self, f) => {
  const out = empty();
  for (const key of keys(self)) {
    const o = f(self[key], key);
    if (Option.isSome(o)) {
      out[key] = o.value;
    }
  }
  return out;
});
/**
 * Selects properties from a record whose values match the given predicate.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { filter } from "effect/Record"
 *
 * const x = { a: 1, b: 2, c: 3, d: 4 }
 * assert.deepStrictEqual(filter(x, (n) => n > 2), { c: 3, d: 4 })
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export const filter = /*#__PURE__*/dual(2, (self, predicate) => {
  const out = empty();
  for (const key of keys(self)) {
    if (predicate(self[key], key)) {
      out[key] = self[key];
    }
  }
  return out;
});
/**
 * Given a record with `Option` values, returns a new record containing only the `Some` values, preserving the original keys.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record, Option } from "effect"
 *
 * assert.deepStrictEqual(
 *   Record.getSomes({ a: Option.some(1), b: Option.none(), c: Option.some(2) }),
 *   { a: 1, c: 2 }
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export const getSomes = /*#__PURE__*/filterMap(identity);
/**
 * Given a record with `Either` values, returns a new record containing only the `Left` values, preserving the original keys.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record, Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Record.getLefts({ a: Either.right(1), b: Either.left("err"), c: Either.right(2) }),
 *   { b: "err" }
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export const getLefts = self => {
  const out = empty();
  for (const key of keys(self)) {
    const value = self[key];
    if (E.isLeft(value)) {
      out[key] = value.left;
    }
  }
  return out;
};
/**
 * Given a record with `Either` values, returns a new record containing only the `Right` values, preserving the original keys.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record, Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Record.getRights({ a: Either.right(1), b: Either.left("err"), c: Either.right(2) }),
 *   { a: 1, c: 2 }
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export const getRights = self => {
  const out = empty();
  for (const key of keys(self)) {
    const value = self[key];
    if (E.isRight(value)) {
      out[key] = value.right;
    }
  }
  return out;
};
/**
 * Partitions the elements of a record into two groups: those that match a predicate, and those that don't.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record, Either } from "effect"
 *
 * const x = { a: 1, b: 2, c: 3 }
 * const f = (n: number) => (n % 2 === 0 ? Either.right(n) : Either.left(n))
 * assert.deepStrictEqual(Record.partitionMap(x, f), [{ a: 1, c: 3 }, { b: 2}])
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export const partitionMap = /*#__PURE__*/dual(2, (self, f) => {
  const left = empty();
  const right = empty();
  for (const key of keys(self)) {
    const e = f(self[key], key);
    if (E.isLeft(e)) {
      left[key] = e.left;
    } else {
      right[key] = e.right;
    }
  }
  return [left, right];
});
/**
 * Partitions a record of `Either` values into two separate records,
 * one with the `Left` values and one with the `Right` values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record, Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Record.separate({ a: Either.left("e"), b: Either.right(1) }),
 *   [{ a: "e" }, { b: 1 }]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export const separate = /*#__PURE__*/partitionMap(identity);
/**
 * Partitions a record into two separate records based on the result of a predicate function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { partition } from "effect/Record"
 *
 * assert.deepStrictEqual(
 *   partition({ a: 1, b: 3 }, (n) => n > 2),
 *   [{ a: 1 }, { b: 3 }]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export const partition = /*#__PURE__*/dual(2, (self, predicate) => {
  const left = empty();
  const right = empty();
  for (const key of keys(self)) {
    if (predicate(self[key], key)) {
      right[key] = self[key];
    } else {
      left[key] = self[key];
    }
  }
  return [left, right];
});
/**
 * Retrieve the keys of a given record as an array.
 *
 * @since 2.0.0
 */
export const keys = self => Object.keys(self);
/**
 * Retrieve the values of a given record as an array.
 *
 * @since 2.0.0
 */
export const values = self => collect(self, (_, a) => a);
/**
 * Add a new key-value pair or update an existing key's value in a record.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { set } from "effect/Record"
 *
 * assert.deepStrictEqual(set("a", 5)({ a: 1, b: 2 }), { a: 5, b: 2 });
 * assert.deepStrictEqual(set("c", 5)({ a: 1, b: 2 }), { a: 1, b: 2, c: 5 });
 * ```
 *
 * @since 2.0.0
 */
export const set = /*#__PURE__*/dual(3, (self, key, value) => {
  return {
    ...self,
    [key]: value
  };
});
/**
 * Replace a key's value in a record and return the updated record.
 * If the key does not exist in the record, a copy of the original record is returned.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Record } from "effect"
 *
 * assert.deepStrictEqual(Record.replace("a", 3)({ a: 1, b: 2 }), { a: 3, b: 2 });
 * assert.deepStrictEqual(Record.replace("c", 3)({ a: 1, b: 2 }), { a: 1, b: 2 });
 * ```
 *
 * @since 2.0.0
 */
export const replace = /*#__PURE__*/dual(3, (self, key, value) => {
  if (has(self, key)) {
    return {
      ...self,
      [key]: value
    };
  }
  return {
    ...self
  };
});
/**
 * Check if all the keys and values in one record are also found in another record.
 *
 * @since 2.0.0
 */
export const isSubrecordBy = equivalence => dual(2, (self, that) => {
  for (const key of keys(self)) {
    if (!has(that, key) || !equivalence(self[key], that[key])) {
      return false;
    }
  }
  return true;
});
/**
 * Check if one record is a subrecord of another, meaning it contains all the keys and values found in the second record.
 * This comparison uses default equality checks (`Equal.equivalence()`).
 *
 * @since 2.0.0
 */
export const isSubrecord = /*#__PURE__*/isSubrecordBy(/*#__PURE__*/Equal.equivalence());
/**
 * Reduce a record to a single value by combining its entries with a specified function.
 *
 * @category folding
 * @since 2.0.0
 */
export const reduce = /*#__PURE__*/dual(3, (self, zero, f) => {
  let out = zero;
  for (const key of keys(self)) {
    out = f(out, self[key], key);
  }
  return out;
});
/**
 * Check if all entries in a record meet a specific condition.
 *
 * @since 2.0.0
 */
export const every = /*#__PURE__*/dual(2, (self, refinement) => {
  for (const key of keys(self)) {
    if (!refinement(self[key], key)) {
      return false;
    }
  }
  return true;
});
/**
 * Check if any entry in a record meets a specific condition.
 *
 * @since 2.0.0
 */
export const some = /*#__PURE__*/dual(2, (self, predicate) => {
  for (const key of keys(self)) {
    if (predicate(self[key], key)) {
      return true;
    }
  }
  return false;
});
/**
 * Merge two records, preserving entries that exist in either of the records.
 *
 * @since 2.0.0
 */
export const union = /*#__PURE__*/dual(3, (self, that, combine) => {
  if (isEmptyRecord(self)) {
    return {
      ...that
    };
  }
  if (isEmptyRecord(that)) {
    return {
      ...self
    };
  }
  const out = empty();
  for (const key of keys(self)) {
    if (has(that, key)) {
      out[key] = combine(self[key], that[key]);
    } else {
      out[key] = self[key];
    }
  }
  for (const key of keys(that)) {
    if (!has(out, key)) {
      out[key] = that[key];
    }
  }
  return out;
});
/**
 * Merge two records, retaining only the entries that exist in both records.
 *
 * @since 2.0.0
 */
export const intersection = /*#__PURE__*/dual(3, (self, that, combine) => {
  const out = empty();
  if (isEmptyRecord(self) || isEmptyRecord(that)) {
    return out;
  }
  for (const key of keys(self)) {
    if (has(that, key)) {
      out[key] = combine(self[key], that[key]);
    }
  }
  return out;
});
/**
 * Merge two records, preserving only the entries that are unique to each record.
 *
 * @since 2.0.0
 */
export const difference = /*#__PURE__*/dual(2, (self, that) => {
  if (isEmptyRecord(self)) {
    return {
      ...that
    };
  }
  if (isEmptyRecord(that)) {
    return {
      ...self
    };
  }
  const out = {};
  for (const key of keys(self)) {
    if (!has(that, key)) {
      out[key] = self[key];
    }
  }
  for (const key of keys(that)) {
    if (!has(self, key)) {
      out[key] = that[key];
    }
  }
  return out;
});
/**
 * Create an `Equivalence` for records using the provided `Equivalence` for values.
 *
 * @category instances
 * @since 2.0.0
 */
export const getEquivalence = equivalence => {
  const is = isSubrecordBy(equivalence);
  return (self, that) => is(self, that) && is(that, self);
};
/**
 * Create a non-empty record from a single element.
 *
 * @category constructors
 * @since 2.0.0
 */
export const singleton = (key, value) => ({
  [key]: value
});
/**
 * Returns the first entry that satisfies the specified
 * predicate, or `None` if no such entry exists.
 *
 * @example
 * ```ts
 * import { Record, Option } from "effect"
 *
 * const record = { a: 1, b: 2, c: 3 }
 * const result = Record.findFirst(record, (value, key) => value > 1 && key !== "b")
 * console.log(result) // Option.Some(["c", 3])
 * ```
 *
 * @category elements
 * @since 3.14.0
 */
export const findFirst = /*#__PURE__*/dual(2, (self, f) => {
  const k = keys(self);
  for (let i = 0; i < k.length; i++) {
    const key = k[i];
    if (f(self[key], key)) {
      return Option.some([key, self[key]]);
    }
  }
  return Option.none();
});
//# sourceMappingURL=Record.js.map