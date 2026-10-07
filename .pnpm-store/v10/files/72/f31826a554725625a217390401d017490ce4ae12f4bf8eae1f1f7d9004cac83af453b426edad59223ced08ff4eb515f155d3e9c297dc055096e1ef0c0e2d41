/**
 * This module provides utility functions for working with records in TypeScript.
 *
 * @since 2.0.0
 */

import type { Either } from "./Either.js"
import * as E from "./Either.js"
import * as Equal from "./Equal.js"
import type { Equivalence } from "./Equivalence.js"
import { dual, identity } from "./Function.js"
import type { TypeLambda } from "./HKT.js"
import * as Option from "./Option.js"
import type { NoInfer } from "./Types.js"

/**
 * @category models
 * @since 2.0.0
 */
export type ReadonlyRecord<in out K extends string | symbol, out A> = {
  readonly [P in K]: A
}

/**
 * @since 2.0.0
 */
export declare namespace ReadonlyRecord {
  type IsFiniteString<T extends string> = T extends "" ? true :
    [T] extends [`${infer Head}${infer Rest}`]
      ? string extends Head ? false : `${number}` extends Head ? false : Rest extends "" ? true : IsFiniteString<Rest>
    : false

  /**
   * @since 2.0.0
   */
  export type NonLiteralKey<K extends string | symbol> = K extends string ? IsFiniteString<K> extends true ? string : K
    : symbol

  /**
   * @since 2.0.0
   */
  export type IntersectKeys<K1 extends string, K2 extends string> = [string] extends [K1 | K2] ?
    NonLiteralKey<K1> & NonLiteralKey<K2>
    : K1 & K2
}

/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface ReadonlyRecordTypeLambda<K extends string = string> extends TypeLambda {
  readonly type: ReadonlyRecord<K, this["Target"]>
}

/**
 * Creates a new, empty record.
 *
 * @category constructors
 * @since 2.0.0
 */
export const empty = <K extends string | symbol = never, V = never>(): Record<
  ReadonlyRecord.NonLiteralKey<K>,
  V
> => ({} as any)

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
export const isEmptyRecord = <K extends string, A>(self: Record<K, A>): self is Record<K, never> =>
  keys(self).length === 0

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
export const isEmptyReadonlyRecord: <K extends string, A>(
  self: ReadonlyRecord<K, A>
) => self is ReadonlyRecord<K, never> = isEmptyRecord

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
export const fromIterableWith: {
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
  <A, K extends string | symbol, B>(f: (a: A) => readonly [K, B]): (self: Iterable<A>) => Record<ReadonlyRecord.NonLiteralKey<K>, B>
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
  <A, K extends string | symbol, B>(self: Iterable<A>, f: (a: A) => readonly [K, B]): Record<ReadonlyRecord.NonLiteralKey<K>, B>
} = dual(
  2,
  <A, K extends string, B>(
    self: Iterable<A>,
    f: (a: A) => readonly [K, B]
  ): Record<ReadonlyRecord.NonLiteralKey<K>, B> => {
    const out: Record<string, B> = empty()
    for (const a of self) {
      const [k, b] = f(a)
      out[k] = b
    }
    return out
  }
)

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
export const fromIterableBy = <A, K extends string | symbol>(
  items: Iterable<A>,
  f: (a: A) => K
): Record<ReadonlyRecord.NonLiteralKey<K>, A> => fromIterableWith(items, (a) => [f(a), a])

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
export const fromEntries: <Entry extends readonly [string | symbol, any]>(
  entries: Iterable<Entry>
) => Record<ReadonlyRecord.NonLiteralKey<Entry[0]>, Entry[1]> = Object.fromEntries

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
export const collect: {
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
  <K extends string, A, B>(f: (key: K, a: A) => B): (self: ReadonlyRecord<K, A>) => Array<B>
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
  <K extends string, A, B>(self: ReadonlyRecord<K, A>, f: (key: K, a: A) => B): Array<B>
} = dual(
  2,
  <K extends string, A, B>(self: ReadonlyRecord<K, A>, f: (key: K, a: A) => B): Array<B> => {
    const out: Array<B> = []
    for (const key of keys(self)) {
      out.push(f(key, self[key]))
    }
    return out
  }
)

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
export const toEntries: <K extends string, A>(self: ReadonlyRecord<K, A>) => Array<[K, A]> = collect((
  key,
  value
) => [key, value])

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
export const size = <K extends string, A>(self: ReadonlyRecord<K, A>): number => keys(self).length

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
export const has: {
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
  <K extends string | symbol>(key: NoInfer<K>): <A>(self: ReadonlyRecord<K, A>) => boolean
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
  <K extends string | symbol, A>(self: ReadonlyRecord<K, A>, key: NoInfer<K>): boolean
} = dual(
  2,
  <K extends string | symbol, A>(
    self: ReadonlyRecord<K, A>,
    key: NoInfer<K>
  ): boolean => Object.prototype.hasOwnProperty.call(self, key)
)

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
export const get: {
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
  <K extends string | symbol>(key: NoInfer<K>): <A>(self: ReadonlyRecord<K, A>) => Option.Option<A>
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
  <K extends string | symbol, A>(self: ReadonlyRecord<K, A>, key: NoInfer<K>): Option.Option<A>
} = dual(
  2,
  <K extends string | symbol, A>(self: ReadonlyRecord<K, A>, key: NoInfer<K>): Option.Option<A> =>
    has(self, key) ? Option.some(self[key]) : Option.none()
)

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
export const modify: {
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
  <K extends string | symbol, A, B>(key: NoInfer<K>, f: (a: A) => B): (self: ReadonlyRecord<K, A>) => Record<K, A | B>
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
  <K extends string | symbol, A, B>(self: ReadonlyRecord<K, A>, key: NoInfer<K>, f: (a: A) => B): Record<K, A | B>
} = dual(
  3,
  <K extends string | symbol, A, B>(self: ReadonlyRecord<K, A>, key: NoInfer<K>, f: (a: A) => B): Record<K, A | B> => {
    if (!has(self, key)) {
      return { ...self }
    }
    return { ...self, [key]: f(self[key]) }
  }
)

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
export const modifyOption: {
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
  <K extends string | symbol, A, B>(key: NoInfer<K>, f: (a: A) => B): (self: ReadonlyRecord<K, A>) => Option.Option<Record<K, A | B>>
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
  <K extends string | symbol, A, B>(self: ReadonlyRecord<K, A>, key: NoInfer<K>, f: (a: A) => B): Option.Option<Record<K, A | B>>
} = dual(
  3,
  <K extends string | symbol, A, B>(
    self: ReadonlyRecord<K, A>,
    key: NoInfer<K>,
    f: (a: A) => B
  ): Option.Option<Record<K, A | B>> => {
    if (!has(self, key)) {
      return Option.none()
    }
    return Option.some({ ...self, [key]: f(self[key]) })
  }
)

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
export const replaceOption: {
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
  <K extends string | symbol, B>(key: NoInfer<K>, b: B): <A>(self: ReadonlyRecord<K, A>) => Option.Option<Record<K, A | B>>
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
  <K extends string | symbol, A, B>(self: ReadonlyRecord<K, A>, key: NoInfer<K>, b: B): Option.Option<Record<K, A | B>>
} = dual(
  3,
  <K extends string | symbol, A, B>(
    self: ReadonlyRecord<K, A>,
    key: NoInfer<K>,
    b: B
  ): Option.Option<Record<K, A | B>> => modifyOption(self, key, () => b)
)

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
export const remove: {
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
  <K extends string | symbol, X extends K>(key: X): <A>(self: ReadonlyRecord<K, A>) => Record<Exclude<K, X>, A>
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
  <K extends string | symbol, A, X extends K>(self: ReadonlyRecord<K, A>, key: X): Record<Exclude<K, X>, A>
} = dual(
  2,
  <K extends string | symbol, A, X extends K>(self: ReadonlyRecord<K, A>, key: X): Record<Exclude<K, X>, A> => {
    if (!has(self, key)) {
      return { ...self }
    }
    const out = { ...self }
    delete out[key]
    return out
  }
)

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
export const pop: {
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
  <K extends string | symbol, X extends K>(key: X): <A>(self: ReadonlyRecord<K, A>) => Option.Option<[A, Record<Exclude<K, X>, A>]>
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
  <K extends string | symbol, A, X extends K>(self: ReadonlyRecord<K, A>, key: X): Option.Option<[A, Record<Exclude<K, X>, A>]>
} = dual(2, <K extends string | symbol, A, X extends K>(
  self: ReadonlyRecord<K, A>,
  key: X
): Option.Option<[A, Record<Exclude<K, X>, A>]> =>
  has(self, key) ? Option.some([self[key], remove(self, key)]) : Option.none())

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
export const map: {
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
  <K extends string, A, B>(f: (a: A, key: NoInfer<K>) => B): (self: ReadonlyRecord<K, A>) => Record<K, B>
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
  <K extends string, A, B>(self: ReadonlyRecord<K, A>, f: (a: A, key: NoInfer<K>) => B): Record<K, B>
} = dual(
  2,
  <K extends string, A, B>(self: ReadonlyRecord<K, A>, f: (a: A, key: NoInfer<K>) => B): Record<K, B> => {
    const out: Record<K, B> = { ...self } as any
    for (const key of keys(self)) {
      out[key] = f(self[key], key)
    }
    return out
  }
)

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
export const mapKeys: {
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
  <K extends string, A, K2 extends string>(f: (key: K, a: A) => K2): (self: ReadonlyRecord<K, A>) => Record<K2, A>
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
  <K extends string, A, K2 extends string>(self: ReadonlyRecord<K, A>, f: (key: K, a: A) => K2): Record<K2, A>
} = dual(
  2,
  <K extends string, A, K2 extends string>(
    self: ReadonlyRecord<K, A>,
    f: (key: K, a: A) => K2
  ): Record<K2, A> => {
    const out: Record<K2, A> = {} as any
    for (const key of keys(self)) {
      const a = self[key]
      out[f(key, a)] = a
    }
    return out
  }
)

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
export const mapEntries: {
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
  <K extends string, A, K2 extends string, B>(f: (a: A, key: K) => readonly [K2, B]): (self: ReadonlyRecord<K, A>) => Record<K2, B>
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
  <K extends string, A, K2 extends string, B>(self: ReadonlyRecord<K, A>, f: (a: A, key: K) => [K2, B]): Record<K2, B>
} = dual(
  2,
  <K extends string, A, K2 extends string, B>(
    self: ReadonlyRecord<K, A>,
    f: (a: A, key: K) => [K2, B]
  ): Record<K2, B> => {
    const out = <Record<K2, B>> {}
    for (const key of keys(self)) {
      const [k, b] = f(self[key], key)
      out[k] = b
    }
    return out
  }
)

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
export const filterMap: {
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
  <K extends string, A, B>(f: (a: A, key: K) => Option.Option<B>): (self: ReadonlyRecord<K, A>) => Record<ReadonlyRecord.NonLiteralKey<K>, B>
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
  <K extends string, A, B>(self: ReadonlyRecord<K, A>, f: (a: A, key: K) => Option.Option<B>): Record<ReadonlyRecord.NonLiteralKey<K>, B>
} = dual(
  2,
  <K extends string, A, B>(
    self: ReadonlyRecord<K, A>,
    f: (a: A, key: K) => Option.Option<B>
  ): Record<ReadonlyRecord.NonLiteralKey<K>, B> => {
    const out: Record<string, B> = empty()
    for (const key of keys(self)) {
      const o = f(self[key], key)
      if (Option.isSome(o)) {
        out[key] = o.value
      }
    }
    return out
  }
)

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
export const filter: {
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
  <K extends string, A, B extends A>(refinement: (a: NoInfer<A>, key: K) => a is B): (self: ReadonlyRecord<K, A>) => Record<ReadonlyRecord.NonLiteralKey<K>, B>
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
  <K extends string, A>(predicate: (A: NoInfer<A>, key: K) => boolean): (self: ReadonlyRecord<K, A>) => Record<ReadonlyRecord.NonLiteralKey<K>, A>
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
  <K extends string, A, B extends A>(self: ReadonlyRecord<K, A>, refinement: (a: A, key: K) => a is B): Record<ReadonlyRecord.NonLiteralKey<K>, B>
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
  <K extends string, A>(self: ReadonlyRecord<K, A>, predicate: (a: A, key: K) => boolean): Record<ReadonlyRecord.NonLiteralKey<K>, A>
} = dual(
  2,
  <K extends string, A>(
    self: ReadonlyRecord<K, A>,
    predicate: (a: A, key: K) => boolean
  ): Record<ReadonlyRecord.NonLiteralKey<K>, A> => {
    const out: Record<string, A> = empty()
    for (const key of keys(self)) {
      if (predicate(self[key], key)) {
        out[key] = self[key]
      }
    }
    return out
  }
)

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
export const getSomes: <K extends string, A>(
  self: ReadonlyRecord<K, Option.Option<A>>
) => Record<ReadonlyRecord.NonLiteralKey<K>, A> = filterMap(
  identity
)

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
export const getLefts = <K extends string, R, L>(
  self: ReadonlyRecord<K, Either<R, L>>
): Record<ReadonlyRecord.NonLiteralKey<K>, L> => {
  const out: Record<string, L> = empty()
  for (const key of keys(self)) {
    const value = self[key]
    if (E.isLeft(value)) {
      out[key] = value.left
    }
  }

  return out
}

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
export const getRights = <K extends string, R, L>(
  self: ReadonlyRecord<K, Either<R, L>>
): Record<string, R> => {
  const out: Record<string, R> = empty()
  for (const key of keys(self)) {
    const value = self[key]
    if (E.isRight(value)) {
      out[key] = value.right
    }
  }

  return out
}

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
export const partitionMap: {
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
  <K extends string, A, B, C>(f: (a: A, key: K) => Either<C, B>): (
    self: ReadonlyRecord<K, A>
  ) => [left: Record<ReadonlyRecord.NonLiteralKey<K>, B>, right: Record<ReadonlyRecord.NonLiteralKey<K>, C>]
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
  <K extends string, A, B, C>(self: ReadonlyRecord<K, A>, f: (a: A, key: K) => Either<C, B>): [left: Record<ReadonlyRecord.NonLiteralKey<K>, B>, right: Record<ReadonlyRecord.NonLiteralKey<K>, C>]
} = dual(
  2,
  <K extends string, A, B, C>(
    self: ReadonlyRecord<K, A>,
    f: (a: A, key: K) => Either<C, B>
  ): [left: Record<ReadonlyRecord.NonLiteralKey<K>, B>, right: Record<ReadonlyRecord.NonLiteralKey<K>, C>] => {
    const left: Record<string, B> = empty()
    const right: Record<string, C> = empty()
    for (const key of keys(self)) {
      const e = f(self[key], key)
      if (E.isLeft(e)) {
        left[key] = e.left
      } else {
        right[key] = e.right
      }
    }
    return [left, right]
  }
)

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
export const separate: <K extends string, A, B>(
  self: ReadonlyRecord<K, Either<B, A>>
) => [Record<ReadonlyRecord.NonLiteralKey<K>, A>, Record<ReadonlyRecord.NonLiteralKey<K>, B>] = partitionMap(identity)

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
export const partition: {
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
  <K extends string, A, B extends A>(refinement: (a: NoInfer<A>, key: K) => a is B): (
    self: ReadonlyRecord<K, A>
  ) => [
    excluded: Record<ReadonlyRecord.NonLiteralKey<K>, Exclude<A, B>>,
    satisfying: Record<ReadonlyRecord.NonLiteralKey<K>, B>
  ]
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
  <K extends string, A>(predicate: (a: NoInfer<A>, key: K) => boolean): (
    self: ReadonlyRecord<K, A>
  ) => [excluded: Record<ReadonlyRecord.NonLiteralKey<K>, A>, satisfying: Record<ReadonlyRecord.NonLiteralKey<K>, A>]
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
  <K extends string, A, B extends A>(self: ReadonlyRecord<K, A>, refinement: (a: A, key: K) => a is B): [
    excluded: Record<ReadonlyRecord.NonLiteralKey<K>, Exclude<A, B>>,
    satisfying: Record<ReadonlyRecord.NonLiteralKey<K>, B>
  ]
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
  <K extends string, A>(self: ReadonlyRecord<K, A>, predicate: (a: A, key: K) => boolean): [excluded: Record<ReadonlyRecord.NonLiteralKey<K>, A>, satisfying: Record<ReadonlyRecord.NonLiteralKey<K>, A>]
} = dual(
  2,
  <K extends string, A>(
    self: ReadonlyRecord<K, A>,
    predicate: (a: A, key: K) => boolean
  ): [excluded: Record<ReadonlyRecord.NonLiteralKey<K>, A>, satisfying: Record<ReadonlyRecord.NonLiteralKey<K>, A>] => {
    const left: Record<string, A> = empty()
    const right: Record<string, A> = empty()
    for (const key of keys(self)) {
      if (predicate(self[key], key)) {
        right[key] = self[key]
      } else {
        left[key] = self[key]
      }
    }
    return [left, right]
  }
)

/**
 * Retrieve the keys of a given record as an array.
 *
 * @since 2.0.0
 */
export const keys = <K extends string | symbol, A>(self: ReadonlyRecord<K, A>): Array<K & string> =>
  Object.keys(self) as Array<K & string>

/**
 * Retrieve the values of a given record as an array.
 *
 * @since 2.0.0
 */
export const values = <K extends string, A>(self: ReadonlyRecord<K, A>): Array<A> => collect(self, (_, a) => a)

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
export const set: {
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
  <K extends string | symbol, K1 extends K | ((string | symbol) & {}), B>(key: K1, value: B): <A>(self: ReadonlyRecord<K, A>) => Record<K | K1, A | B>
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
  <K extends string | symbol, A, K1 extends K | ((string | symbol) & {}), B>(self: ReadonlyRecord<K, A>, key: K1, value: B): Record<K | K1, A | B>
} = dual(
  3,
  <K extends string | symbol, A, K1 extends K | ((string | symbol) & {}), B>(
    self: ReadonlyRecord<K, A>,
    key: K1,
    value: B
  ): Record<K | K1, A | B> => {
    return { ...self, [key]: value } as any
  }
)

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
export const replace: {
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
  <K extends string | symbol, B>(key: NoInfer<K>, value: B): <A>(self: ReadonlyRecord<K, A>) => Record<K, A | B>
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
  <K extends string | symbol, A, B>(self: ReadonlyRecord<K, A>, key: NoInfer<K>, value: B): Record<K, A | B>
} = dual(
  3,
  <K extends string | symbol, A, B>(self: ReadonlyRecord<K, A>, key: NoInfer<K>, value: B): Record<K, A | B> => {
    if (has(self, key)) {
      return { ...self, [key]: value }
    }
    return { ...self }
  }
)

/**
 * Check if all the keys and values in one record are also found in another record.
 *
 * @since 2.0.0
 */
export const isSubrecordBy = <A>(equivalence: Equivalence<A>): {
  <K extends string>(that: ReadonlyRecord<K, A>): (self: ReadonlyRecord<K, A>) => boolean
  <K extends string>(self: ReadonlyRecord<K, A>, that: ReadonlyRecord<K, A>): boolean
} =>
  dual(2, <K extends string>(self: ReadonlyRecord<K, A>, that: ReadonlyRecord<K, A>): boolean => {
    for (const key of keys(self)) {
      if (!has(that, key) || !equivalence(self[key], that[key])) {
        return false
      }
    }
    return true
  })

/**
 * Check if one record is a subrecord of another, meaning it contains all the keys and values found in the second record.
 * This comparison uses default equality checks (`Equal.equivalence()`).
 *
 * @since 2.0.0
 */
export const isSubrecord: {
  /**
   * Check if one record is a subrecord of another, meaning it contains all the keys and values found in the second record.
   * This comparison uses default equality checks (`Equal.equivalence()`).
   *
   * @since 2.0.0
   */
  <K extends string, A>(that: ReadonlyRecord<K, A>): (self: ReadonlyRecord<K, A>) => boolean
  /**
   * Check if one record is a subrecord of another, meaning it contains all the keys and values found in the second record.
   * This comparison uses default equality checks (`Equal.equivalence()`).
   *
   * @since 2.0.0
   */
  <K extends string, A>(self: ReadonlyRecord<K, A>, that: ReadonlyRecord<K, A>): boolean
} = isSubrecordBy(Equal.equivalence())

/**
 * Reduce a record to a single value by combining its entries with a specified function.
 *
 * @category folding
 * @since 2.0.0
 */
export const reduce: {
  /**
   * Reduce a record to a single value by combining its entries with a specified function.
   *
   * @category folding
   * @since 2.0.0
   */
  <Z, V, K extends string>(zero: Z, f: (accumulator: Z, value: V, key: K) => Z): (self: ReadonlyRecord<K, V>) => Z
  /**
   * Reduce a record to a single value by combining its entries with a specified function.
   *
   * @category folding
   * @since 2.0.0
   */
  <K extends string, V, Z>(
    self: ReadonlyRecord<K, V>,
    zero: Z,
    f: (accumulator: Z, value: V, key: K) => Z
  ): Z
} = dual(
  3,
  <K extends string, V, Z>(
    self: ReadonlyRecord<K, V>,
    zero: Z,
    f: (accumulator: Z, value: V, key: K) => Z
  ): Z => {
    let out: Z = zero
    for (const key of keys(self)) {
      out = f(out, self[key], key)
    }
    return out
  }
)

/**
 * Check if all entries in a record meet a specific condition.
 *
 * @since 2.0.0
 */
export const every: {
  /**
   * Check if all entries in a record meet a specific condition.
   *
   * @since 2.0.0
   */
  <A, K extends string, B extends A>(refinement: (value: A, key: K) => value is B): (self: ReadonlyRecord<K, A>) => self is ReadonlyRecord<K, B>
  /**
   * Check if all entries in a record meet a specific condition.
   *
   * @since 2.0.0
   */
  <A, K extends string>(predicate: (value: A, key: K) => boolean): (self: ReadonlyRecord<K, A>) => boolean
  /**
   * Check if all entries in a record meet a specific condition.
   *
   * @since 2.0.0
   */
  <A, K extends string, B extends A>(self: ReadonlyRecord<K, A>, refinement: (value: A, key: K) => value is B): self is ReadonlyRecord<K, B>
  /**
   * Check if all entries in a record meet a specific condition.
   *
   * @since 2.0.0
   */
  <K extends string, A>(self: ReadonlyRecord<K, A>, predicate: (value: A, key: K) => boolean): boolean
} = dual(
  2,
  <A, K extends string, B extends A>(
    self: ReadonlyRecord<K, A>,
    refinement: (value: A, key: K) => value is B
  ): self is ReadonlyRecord<K, B> => {
    for (const key of keys(self)) {
      if (!refinement(self[key], key)) {
        return false
      }
    }
    return true
  }
)

/**
 * Check if any entry in a record meets a specific condition.
 *
 * @since 2.0.0
 */
export const some: {
  /**
   * Check if any entry in a record meets a specific condition.
   *
   * @since 2.0.0
   */
  <A, K extends string>(predicate: (value: A, key: K) => boolean): (self: ReadonlyRecord<K, A>) => boolean
  /**
   * Check if any entry in a record meets a specific condition.
   *
   * @since 2.0.0
   */
  <K extends string, A>(self: ReadonlyRecord<K, A>, predicate: (value: A, key: K) => boolean): boolean
} = dual(
  2,
  <K extends string, A>(self: ReadonlyRecord<K, A>, predicate: (value: A, key: K) => boolean): boolean => {
    for (const key of keys(self)) {
      if (predicate(self[key], key)) {
        return true
      }
    }
    return false
  }
)

/**
 * Merge two records, preserving entries that exist in either of the records.
 *
 * @since 2.0.0
 */
export const union: {
  /**
   * Merge two records, preserving entries that exist in either of the records.
   *
   * @since 2.0.0
   */
  <K1 extends string, A, B, C>(that: ReadonlyRecord<K1, B>, combine: (selfValue: A, thatValue: B) => C): <K0 extends string>(self: ReadonlyRecord<K0, A>) => Record<K0 | K1, A | B | C>
  /**
   * Merge two records, preserving entries that exist in either of the records.
   *
   * @since 2.0.0
   */
  <K0 extends string, A, K1 extends string, B, C>(
    self: ReadonlyRecord<K0, A>,
    that: ReadonlyRecord<K1, B>,
    combine: (selfValue: A, thatValue: B) => C
  ): Record<K0 | K1, A | B | C>
} = dual(
  3,
  <K0 extends string, A, K1 extends string, B, C>(
    self: ReadonlyRecord<K0, A>,
    that: ReadonlyRecord<K1, B>,
    combine: (selfValue: A, thatValue: B) => C
  ): Record<K0 | K1, A | B | C> => {
    if (isEmptyRecord(self)) {
      return { ...that } as any
    }
    if (isEmptyRecord(that)) {
      return { ...self } as any
    }
    const out: Record<string, A | B | C> = empty()
    for (const key of keys(self)) {
      if (has(that, key as any)) {
        out[key] = combine(self[key], that[key as unknown as K1])
      } else {
        out[key] = self[key]
      }
    }
    for (const key of keys(that)) {
      if (!has(out, key)) {
        out[key] = that[key]
      }
    }
    return out
  }
)

/**
 * Merge two records, retaining only the entries that exist in both records.
 *
 * @since 2.0.0
 */
export const intersection: {
  /**
   * Merge two records, retaining only the entries that exist in both records.
   *
   * @since 2.0.0
   */
  <K1 extends string, A, B, C>(that: ReadonlyRecord<K1, B>, combine: (selfValue: A, thatValue: B) => C): <K0 extends string>(self: ReadonlyRecord<K0, A>) => Record<ReadonlyRecord.IntersectKeys<K0, K1>, C>
  /**
   * Merge two records, retaining only the entries that exist in both records.
   *
   * @since 2.0.0
   */
  <K0 extends string, A, K1 extends string, B, C>(
    self: ReadonlyRecord<K0, A>,
    that: ReadonlyRecord<K1, B>,
    combine: (selfValue: A, thatValue: B) => C
  ): Record<ReadonlyRecord.IntersectKeys<K0, K1>, C>
} = dual(
  3,
  <K0 extends string, A, K1 extends string, B, C>(
    self: ReadonlyRecord<K0, A>,
    that: ReadonlyRecord<K1, B>,
    combine: (selfValue: A, thatValue: B) => C
  ): Record<ReadonlyRecord.IntersectKeys<K0, K1>, C> => {
    const out: Record<string, C> = empty()
    if (isEmptyRecord(self) || isEmptyRecord(that)) {
      return out
    }
    for (const key of keys(self)) {
      if (has(that, key as any)) {
        out[key] = combine(self[key], that[key as unknown as K1])
      }
    }
    return out
  }
)

/**
 * Merge two records, preserving only the entries that are unique to each record.
 *
 * @since 2.0.0
 */
export const difference: {
  /**
   * Merge two records, preserving only the entries that are unique to each record.
   *
   * @since 2.0.0
   */
  <K1 extends string, B>(that: ReadonlyRecord<K1, B>): <K0 extends string, A>(self: ReadonlyRecord<K0, A>) => Record<K0 | K1, A | B>
  /**
   * Merge two records, preserving only the entries that are unique to each record.
   *
   * @since 2.0.0
   */
  <K0 extends string, A, K1 extends string, B>(self: ReadonlyRecord<K0, A>, that: ReadonlyRecord<K1, B>): Record<K0 | K1, A | B>
} = dual(2, <K0 extends string, A, K1 extends string, B>(
  self: ReadonlyRecord<K0, A>,
  that: ReadonlyRecord<K1, B>
): Record<K0 | K1, A | B> => {
  if (isEmptyRecord(self)) {
    return { ...that } as any
  }
  if (isEmptyRecord(that)) {
    return { ...self } as any
  }
  const out = <Record<K0 | K1, A | B>> {}
  for (const key of keys(self)) {
    if (!has(that, key as any)) {
      out[key] = self[key]
    }
  }
  for (const key of keys(that)) {
    if (!has(self, key as any)) {
      out[key] = that[key]
    }
  }
  return out
})

/**
 * Create an `Equivalence` for records using the provided `Equivalence` for values.
 *
 * @category instances
 * @since 2.0.0
 */
export const getEquivalence = <K extends string, A>(
  equivalence: Equivalence<A>
): Equivalence<ReadonlyRecord<K, A>> => {
  const is = isSubrecordBy(equivalence)
  return (self, that) => is(self, that) && is(that, self)
}

/**
 * Create a non-empty record from a single element.
 *
 * @category constructors
 * @since 2.0.0
 */
export const singleton = <K extends string | symbol, A>(key: K, value: A): Record<K, A> => ({
  [key]: value
} as any)

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
export const findFirst: {
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
  <K extends string | symbol, V, V2 extends V>(refinement: (value: NoInfer<V>, key: NoInfer<K>) => value is V2): (self: ReadonlyRecord<K, V>) => Option.Option<[K, V2]>
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
  <K extends string | symbol, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>) => boolean): (self: ReadonlyRecord<K, V>) => Option.Option<[K, V]>
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
  <K extends string | symbol, V, V2 extends V>(
    self: ReadonlyRecord<K, V>,
    refinement: (value: NoInfer<V>, key: NoInfer<K>) => value is V2
  ): Option.Option<[K, V2]>
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
  <K extends string | symbol, V>(
    self: ReadonlyRecord<K, V>,
    predicate: (value: NoInfer<V>, key: NoInfer<K>) => boolean
  ): Option.Option<[K, V]>
} = dual(
  2,
  <K extends string | symbol, V>(self: ReadonlyRecord<K, V>, f: (value: V, key: K) => boolean) => {
    const k = keys(self)
    for (let i = 0; i < k.length; i++) {
      const key = k[i]
      if (f(self[key], key)) {
        return Option.some([key, self[key]])
      }
    }
    return Option.none()
  }
)
