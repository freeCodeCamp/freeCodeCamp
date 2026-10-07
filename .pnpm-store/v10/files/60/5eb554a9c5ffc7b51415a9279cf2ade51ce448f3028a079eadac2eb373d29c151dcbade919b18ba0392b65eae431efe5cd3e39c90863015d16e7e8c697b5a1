/**
 * This module provides utility functions and type class instances for working with the `string` type in TypeScript.
 * It includes functions for basic string manipulation, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @since 2.0.0
 */

import type { NonEmptyArray } from "./Array.js"
import * as equivalence from "./Equivalence.js"
import { dual } from "./Function.js"
import * as readonlyArray from "./internal/array.js"
import * as number from "./Number.js"
import * as Option from "./Option.js"
import * as order from "./Order.js"
import type * as Ordering from "./Ordering.js"
import type { Refinement } from "./Predicate.js"
import * as predicate from "./Predicate.js"

/**
 * Tests if a value is a `string`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.isString("a"), true)
 * assert.deepStrictEqual(String.isString(1), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export const isString: Refinement<unknown, string> = predicate.isString

/**
 * @category instances
 * @since 2.0.0
 */
export const Equivalence: equivalence.Equivalence<string> = equivalence.string

/**
 * @category instances
 * @since 2.0.0
 */
export const Order: order.Order<string> = order.string

/**
 * The empty string `""`.
 *
 * @since 2.0.0
 */
export const empty: "" = "" as const

/**
 * Concatenates two strings at the type level.
 *
 * @since 2.0.0
 */
export type Concat<A extends string, B extends string> = `${A}${B}`

/**
 * Concatenates two strings at runtime.
 *
 * @since 2.0.0
 */
export const concat: {
  /**
   * Concatenates two strings at runtime.
   *
   * @since 2.0.0
   */
  <B extends string>(that: B): <A extends string>(self: A) => Concat<A, B>
  /**
   * Concatenates two strings at runtime.
   *
   * @since 2.0.0
   */
  <A extends string, B extends string>(self: A, that: B): Concat<A, B>
} = dual(2, (self: string, that: string): string => self + that)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe('a', String.toUpperCase), 'A')
 * ```
 *
 * @since 2.0.0
 */
export const toUpperCase = <S extends string>(self: S): Uppercase<S> => self.toUpperCase() as Uppercase<S>

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe('A', String.toLowerCase), 'a')
 * ```
 *
 * @since 2.0.0
 */
export const toLowerCase = <T extends string>(self: T): Lowercase<T> => self.toLowerCase() as Lowercase<T>

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe('abc', String.capitalize), 'Abc')
 * ```
 *
 * @since 2.0.0
 */
export const capitalize = <T extends string>(self: T): Capitalize<T> => {
  if (self.length === 0) return self as Capitalize<T>

  return (toUpperCase(self[0]) + self.slice(1)) as Capitalize<T>
}

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe('ABC', String.uncapitalize), 'aBC')
 * ```
 *
 * @since 2.0.0
 */
export const uncapitalize = <T extends string>(self: T): Uncapitalize<T> => {
  if (self.length === 0) return self as Uncapitalize<T>

  return (toLowerCase(self[0]) + self.slice(1)) as Uncapitalize<T>
}

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe('abc', String.replace('b', 'd')), 'adc')
 * ```
 *
 * @since 2.0.0
 */
export const replace = (searchValue: string | RegExp, replaceValue: string) => (self: string): string =>
  self.replace(searchValue, replaceValue)

/**
 * @since 2.0.0
 */
export type Trim<A extends string> = TrimEnd<TrimStart<A>>

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.trim(' a '), 'a')
 * ```
 *
 * @since 2.0.0
 */
export const trim = <A extends string>(self: A): Trim<A> => self.trim() as Trim<A>

/**
 * @since 2.0.0
 */
export type TrimStart<A extends string> = A extends `${" " | "\n" | "\t" | "\r"}${infer B}` ? TrimStart<B> : A

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.trimStart(' a '), 'a ')
 * ```
 *
 * @since 2.0.0
 */
export const trimStart = <A extends string>(self: A): TrimStart<A> => self.trimStart() as TrimStart<A>

/**
 * @since 2.0.0
 */
export type TrimEnd<A extends string> = A extends `${infer B}${" " | "\n" | "\t" | "\r"}` ? TrimEnd<B> : A

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.trimEnd(' a '), ' a')
 * ```
 *
 * @since 2.0.0
 */
export const trimEnd = <A extends string>(self: A): TrimEnd<A> => self.trimEnd() as TrimEnd<A>

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe('abcd', String.slice(1, 3)), 'bc')
 * ```
 *
 * @since 2.0.0
 */
export const slice = (start?: number, end?: number) => (self: string): string => self.slice(start, end)

/**
 * Test whether a `string` is empty.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.isEmpty(''), true)
 * assert.deepStrictEqual(String.isEmpty('a'), false)
 * ```
 *
 * @since 2.0.0
 */
export const isEmpty = (self: string): self is "" => self.length === 0

/**
 * Test whether a `string` is non empty.
 *
 * @since 2.0.0
 */
export const isNonEmpty = (self: string): boolean => self.length > 0

/**
 * Calculate the number of characters in a `string`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.length('abc'), 3)
 * ```
 *
 * @since 2.0.0
 */
export const length = (self: string): number => self.length

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe('abc', String.split('')), ['a', 'b', 'c'])
 * assert.deepStrictEqual(pipe('', String.split('')), [''])
 * ```
 *
 * @since 2.0.0
 */
export const split: {
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String } from "effect"
   *
   * assert.deepStrictEqual(pipe('abc', String.split('')), ['a', 'b', 'c'])
   * assert.deepStrictEqual(pipe('', String.split('')), [''])
   * ```
   *
   * @since 2.0.0
   */
  (separator: string | RegExp): (self: string) => NonEmptyArray<string>
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String } from "effect"
   *
   * assert.deepStrictEqual(pipe('abc', String.split('')), ['a', 'b', 'c'])
   * assert.deepStrictEqual(pipe('', String.split('')), [''])
   * ```
   *
   * @since 2.0.0
   */
  (self: string, separator: string | RegExp): NonEmptyArray<string>
} = dual(2, (self: string, separator: string | RegExp): NonEmptyArray<string> => {
  const out = self.split(separator)
  return readonlyArray.isNonEmptyArray(out) ? out : [self]
})

/**
 * Returns `true` if `searchString` appears as a substring of `self`, at one or more positions that are
 * greater than or equal to `position`; otherwise, returns `false`.
 *
 * @since 2.0.0
 */
export const includes = (searchString: string, position?: number) => (self: string): boolean =>
  self.includes(searchString, position)

/**
 * @since 2.0.0
 */
export const startsWith = (searchString: string, position?: number) => (self: string): boolean =>
  self.startsWith(searchString, position)

/**
 * @since 2.0.0
 */
export const endsWith = (searchString: string, position?: number) => (self: string): boolean =>
  self.endsWith(searchString, position)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("abc", String.charCodeAt(1)), Option.some(98))
 * assert.deepStrictEqual(pipe("abc", String.charCodeAt(4)), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const charCodeAt: {
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.charCodeAt(1)), Option.some(98))
   * assert.deepStrictEqual(pipe("abc", String.charCodeAt(4)), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (index: number): (self: string) => Option.Option<number>
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.charCodeAt(1)), Option.some(98))
   * assert.deepStrictEqual(pipe("abc", String.charCodeAt(4)), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (self: string, index: number): Option.Option<number>
} = dual(
  2,
  (self: string, index: number): Option.Option<number> =>
    Option.filter(Option.some(self.charCodeAt(index)), (charCode) => !isNaN(charCode))
)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("abcd", String.substring(1)), "bcd")
 * assert.deepStrictEqual(pipe("abcd", String.substring(1, 3)), "bc")
 * ```
 *
 * @since 2.0.0
 */
export const substring = (start: number, end?: number) => (self: string): string => self.substring(start, end)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("abc", String.at(1)), Option.some("b"))
 * assert.deepStrictEqual(pipe("abc", String.at(4)), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const at: {
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.at(1)), Option.some("b"))
   * assert.deepStrictEqual(pipe("abc", String.at(4)), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (index: number): (self: string) => Option.Option<string>
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.at(1)), Option.some("b"))
   * assert.deepStrictEqual(pipe("abc", String.at(4)), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (self: string, index: number): Option.Option<string>
} = dual(2, (self: string, index: number): Option.Option<string> => Option.fromNullable(self.at(index)))

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("abc", String.charAt(1)), Option.some("b"))
 * assert.deepStrictEqual(pipe("abc", String.charAt(4)), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const charAt: {
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.charAt(1)), Option.some("b"))
   * assert.deepStrictEqual(pipe("abc", String.charAt(4)), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (index: number): (self: string) => Option.Option<string>
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.charAt(1)), Option.some("b"))
   * assert.deepStrictEqual(pipe("abc", String.charAt(4)), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (self: string, index: number): Option.Option<string>
} = dual(
  2,
  (self: string, index: number): Option.Option<string> => Option.filter(Option.some(self.charAt(index)), isNonEmpty)
)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("abc", String.codePointAt(1)), Option.some(98))
 * ```
 *
 * @since 2.0.0
 */
export const codePointAt: {
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.codePointAt(1)), Option.some(98))
   * ```
   *
   * @since 2.0.0
   */
  (index: number): (self: string) => Option.Option<number>
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("abc", String.codePointAt(1)), Option.some(98))
   * ```
   *
   * @since 2.0.0
   */
  (self: string, index: number): Option.Option<number>
} = dual(2, (self: string, index: number): Option.Option<number> => Option.fromNullable(self.codePointAt(index)))

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("abbbc", String.indexOf("b")), Option.some(1))
 * ```
 *
 * @since 2.0.0
 */
export const indexOf = (searchString: string) => (self: string): Option.Option<number> =>
  Option.filter(Option.some(self.indexOf(searchString)), number.greaterThanOrEqualTo(0))

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("abbbc", String.lastIndexOf("b")), Option.some(3))
 * assert.deepStrictEqual(pipe("abbbc", String.lastIndexOf("d")), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const lastIndexOf = (searchString: string) => (self: string): Option.Option<number> =>
  Option.filter(Option.some(self.lastIndexOf(searchString)), number.greaterThanOrEqualTo(0))

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe("a", String.localeCompare("b")), -1)
 * assert.deepStrictEqual(pipe("b", String.localeCompare("a")), 1)
 * assert.deepStrictEqual(pipe("a", String.localeCompare("a")), 0)
 * ```
 *
 * @since 2.0.0
 */
export const localeCompare =
  (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions) => (self: string): Ordering.Ordering =>
    number.sign(self.localeCompare(that, locales, options))

/**
 * It is the `pipe`-able version of the native `match` method.
 *
 * @since 2.0.0
 */
export const match = (regexp: RegExp | string) => (self: string): Option.Option<RegExpMatchArray> =>
  Option.fromNullable(self.match(regexp))

/**
 * It is the `pipe`-able version of the native `matchAll` method.
 *
 * @since 2.0.0
 */
export const matchAll = (regexp: RegExp) => (self: string): IterableIterator<RegExpMatchArray> => self.matchAll(regexp)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * const str = "\u1E9B\u0323";
 * assert.deepStrictEqual(pipe(str, String.normalize()), "\u1E9B\u0323")
 * assert.deepStrictEqual(pipe(str, String.normalize("NFC")), "\u1E9B\u0323")
 * assert.deepStrictEqual(pipe(str, String.normalize("NFD")), "\u017F\u0323\u0307")
 * assert.deepStrictEqual(pipe(str, String.normalize("NFKC")), "\u1E69")
 * assert.deepStrictEqual(pipe(str, String.normalize("NFKD")), "\u0073\u0323\u0307")
 * ```
 *
 * @since 2.0.0
 */
export const normalize = (form?: "NFC" | "NFD" | "NFKC" | "NFKD") => (self: string): string => self.normalize(form)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe("a", String.padEnd(5)), "a    ")
 * assert.deepStrictEqual(pipe("a", String.padEnd(5, "_")), "a____")
 * ```
 *
 * @since 2.0.0
 */
export const padEnd = (maxLength: number, fillString?: string) => (self: string): string =>
  self.padEnd(maxLength, fillString)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe("a", String.padStart(5)), "    a")
 * assert.deepStrictEqual(pipe("a", String.padStart(5, "_")), "____a")
 * ```
 *
 * @since 2.0.0
 */
export const padStart = (maxLength: number, fillString?: string) => (self: string): string =>
  self.padStart(maxLength, fillString)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe("a", String.repeat(5)), "aaaaa")
 * ```
 *
 * @since 2.0.0
 */
export const repeat = (count: number) => (self: string): string => self.repeat(count)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * assert.deepStrictEqual(pipe("ababb", String.replaceAll("b", "c")), "acacc")
 * assert.deepStrictEqual(pipe("ababb", String.replaceAll(/ba/g, "cc")), "accbb")
 * ```
 *
 * @since 2.0.0
 */
export const replaceAll = (searchValue: string | RegExp, replaceValue: string) => (self: string): string =>
  self.replaceAll(searchValue, replaceValue)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String, Option } from "effect"
 *
 * assert.deepStrictEqual(pipe("ababb", String.search("b")), Option.some(1))
 * assert.deepStrictEqual(pipe("ababb", String.search(/abb/)), Option.some(2))
 * assert.deepStrictEqual(pipe("ababb", String.search("d")), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const search: {
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("ababb", String.search("b")), Option.some(1))
   * assert.deepStrictEqual(pipe("ababb", String.search(/abb/)), Option.some(2))
   * assert.deepStrictEqual(pipe("ababb", String.search("d")), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (regexp: RegExp | string): (self: string) => Option.Option<number>
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, String, Option } from "effect"
   *
   * assert.deepStrictEqual(pipe("ababb", String.search("b")), Option.some(1))
   * assert.deepStrictEqual(pipe("ababb", String.search(/abb/)), Option.some(2))
   * assert.deepStrictEqual(pipe("ababb", String.search("d")), Option.none())
   * ```
   *
   * @since 2.0.0
   */
  (self: string, regexp: RegExp | string): Option.Option<number>
} = dual(
  2,
  (self: string, regexp: RegExp | string): Option.Option<number> =>
    Option.filter(Option.some(self.search(regexp)), number.greaterThanOrEqualTo(0))
)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * const str = "\u0130"
 * assert.deepStrictEqual(pipe(str, String.toLocaleLowerCase("tr")), "i")
 * ```
 *
 * @since 2.0.0
 */
export const toLocaleLowerCase = (locale?: Intl.LocalesArgument) => (self: string): string =>
  self.toLocaleLowerCase(locale)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, String } from "effect"
 *
 * const str = "i\u0307"
 * assert.deepStrictEqual(pipe(str, String.toLocaleUpperCase("lt-LT")), "I")
 * ```
 *
 * @since 2.0.0
 */
export const toLocaleUpperCase = (locale?: Intl.LocalesArgument) => (self: string): string =>
  self.toLocaleUpperCase(locale)

/**
 * Keep the specified number of characters from the start of a string.
 *
 * If `n` is larger than the available number of characters, the string will
 * be returned whole.
 *
 * If `n` is not a positive number, an empty string will be returned.
 *
 * If `n` is a float, it will be rounded down to the nearest integer.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.takeLeft("Hello World", 5), "Hello")
 * ```
 *
 * @since 2.0.0
 */
export const takeLeft: {
  /**
   * Keep the specified number of characters from the start of a string.
   *
   * If `n` is larger than the available number of characters, the string will
   * be returned whole.
   *
   * If `n` is not a positive number, an empty string will be returned.
   *
   * If `n` is a float, it will be rounded down to the nearest integer.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { String } from "effect"
   *
   * assert.deepStrictEqual(String.takeLeft("Hello World", 5), "Hello")
   * ```
   *
   * @since 2.0.0
   */
  (n: number): (self: string) => string
  /**
   * Keep the specified number of characters from the start of a string.
   *
   * If `n` is larger than the available number of characters, the string will
   * be returned whole.
   *
   * If `n` is not a positive number, an empty string will be returned.
   *
   * If `n` is a float, it will be rounded down to the nearest integer.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { String } from "effect"
   *
   * assert.deepStrictEqual(String.takeLeft("Hello World", 5), "Hello")
   * ```
   *
   * @since 2.0.0
   */
  (self: string, n: number): string
} = dual(2, (self: string, n: number): string => self.slice(0, Math.max(n, 0)))

/**
 * Keep the specified number of characters from the end of a string.
 *
 * If `n` is larger than the available number of characters, the string will
 * be returned whole.
 *
 * If `n` is not a positive number, an empty string will be returned.
 *
 * If `n` is a float, it will be rounded down to the nearest integer.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { String } from "effect"
 *
 * assert.deepStrictEqual(String.takeRight("Hello World", 5), "World")
 * ```
 *
 * @since 2.0.0
 */
export const takeRight: {
  /**
   * Keep the specified number of characters from the end of a string.
   *
   * If `n` is larger than the available number of characters, the string will
   * be returned whole.
   *
   * If `n` is not a positive number, an empty string will be returned.
   *
   * If `n` is a float, it will be rounded down to the nearest integer.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { String } from "effect"
   *
   * assert.deepStrictEqual(String.takeRight("Hello World", 5), "World")
   * ```
   *
   * @since 2.0.0
   */
  (n: number): (self: string) => string
  /**
   * Keep the specified number of characters from the end of a string.
   *
   * If `n` is larger than the available number of characters, the string will
   * be returned whole.
   *
   * If `n` is not a positive number, an empty string will be returned.
   *
   * If `n` is a float, it will be rounded down to the nearest integer.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { String } from "effect"
   *
   * assert.deepStrictEqual(String.takeRight("Hello World", 5), "World")
   * ```
   *
   * @since 2.0.0
   */
  (self: string, n: number): string
} = dual(
  2,
  (self: string, n: number): string => self.slice(Math.max(0, self.length - Math.floor(n)), Infinity)
)

const CR = 0x0d
const LF = 0x0a

/**
 * Returns an `IterableIterator` which yields each line contained within the
 * string, trimming off the trailing newline character.
 *
 * @since 2.0.0
 */
export const linesIterator = (self: string): LinesIterator => linesSeparated(self, true)

/**
 * Returns an `IterableIterator` which yields each line contained within the
 * string as well as the trailing newline character.
 *
 * @since 2.0.0
 */
export const linesWithSeparators = (s: string): LinesIterator => linesSeparated(s, false)

/**
 * For every line in this string, strip a leading prefix consisting of blanks
 * or control characters followed by the character specified by `marginChar`
 * from the line.
 *
 * @since 2.0.0
 */
export const stripMarginWith: {
  /**
   * For every line in this string, strip a leading prefix consisting of blanks
   * or control characters followed by the character specified by `marginChar`
   * from the line.
   *
   * @since 2.0.0
   */
  (marginChar: string): (self: string) => string
  /**
   * For every line in this string, strip a leading prefix consisting of blanks
   * or control characters followed by the character specified by `marginChar`
   * from the line.
   *
   * @since 2.0.0
   */
  (self: string, marginChar: string): string
} = dual(2, (self: string, marginChar: string): string => {
  let out = ""

  for (const line of linesWithSeparators(self)) {
    let index = 0

    while (index < line.length && line.charAt(index) <= " ") {
      index = index + 1
    }

    const stripped = index < line.length && line.charAt(index) === marginChar
      ? line.substring(index + 1)
      : line

    out = out + stripped
  }

  return out
})

/**
 * For every line in this string, strip a leading prefix consisting of blanks
 * or control characters followed by the `"|"` character from the line.
 *
 * @since 2.0.0
 */
export const stripMargin = (self: string): string => stripMarginWith(self, "|")

/**
 * @since 2.0.0
 */
export const snakeToCamel = (self: string): string => {
  let str = self[0]
  for (let i = 1; i < self.length; i++) {
    str += self[i] === "_" ? self[++i].toUpperCase() : self[i]
  }
  return str
}

/**
 * @since 2.0.0
 */
export const snakeToPascal = (self: string): string => {
  let str = self[0].toUpperCase()
  for (let i = 1; i < self.length; i++) {
    str += self[i] === "_" ? self[++i].toUpperCase() : self[i]
  }
  return str
}

/**
 * @since 2.0.0
 */
export const snakeToKebab = (self: string): string => self.replace(/_/g, "-")

/**
 * @since 2.0.0
 */
export const camelToSnake = (self: string): string => self.replace(/([A-Z])/g, "_$1").toLowerCase()

/**
 * @since 2.0.0
 */
export const pascalToSnake = (self: string): string =>
  (self.slice(0, 1) + self.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase()

/**
 * @since 2.0.0
 */
export const kebabToSnake = (self: string): string => self.replace(/-/g, "_")

class LinesIterator implements IterableIterator<string> {
  private index: number
  private readonly length: number

  constructor(readonly s: string, readonly stripped: boolean = false) {
    this.index = 0
    this.length = s.length
  }

  next(): IteratorResult<string> {
    if (this.done) {
      return { done: true, value: undefined }
    }
    const start = this.index
    while (!this.done && !isLineBreak(this.s[this.index]!)) {
      this.index = this.index + 1
    }
    let end = this.index
    if (!this.done) {
      const char = this.s[this.index]!
      this.index = this.index + 1
      if (!this.done && isLineBreak2(char, this.s[this.index]!)) {
        this.index = this.index + 1
      }
      if (!this.stripped) {
        end = this.index
      }
    }
    return { done: false, value: this.s.substring(start, end) }
  }

  [Symbol.iterator](): IterableIterator<string> {
    return new LinesIterator(this.s, this.stripped)
  }

  private get done(): boolean {
    return this.index >= this.length
  }
}

/**
 * Test if the provided character is a line break character (i.e. either `"\r"`
 * or `"\n"`).
 */
const isLineBreak = (char: string): boolean => {
  const code = char.charCodeAt(0)
  return code === CR || code === LF
}

/**
 * Test if the provided characters combine to form a carriage return/line-feed
 * (i.e. `"\r\n"`).
 */
const isLineBreak2 = (char0: string, char1: string): boolean => char0.charCodeAt(0) === CR && char1.charCodeAt(0) === LF

const linesSeparated = (self: string, stripped: boolean): LinesIterator => new LinesIterator(self, stripped)
