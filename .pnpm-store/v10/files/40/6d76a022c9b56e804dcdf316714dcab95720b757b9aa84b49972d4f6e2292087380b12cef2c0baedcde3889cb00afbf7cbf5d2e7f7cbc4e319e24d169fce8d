/**
 * This module provides utility functions and type class instances for working with the `string` type in TypeScript.
 * It includes functions for basic string manipulation, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @since 2.0.0
 */
import type { NonEmptyArray } from "./Array.js";
import * as equivalence from "./Equivalence.js";
import * as Option from "./Option.js";
import * as order from "./Order.js";
import type * as Ordering from "./Ordering.js";
import type { Refinement } from "./Predicate.js";
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
export declare const isString: Refinement<unknown, string>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Equivalence: equivalence.Equivalence<string>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Order: order.Order<string>;
/**
 * The empty string `""`.
 *
 * @since 2.0.0
 */
export declare const empty: "";
/**
 * Concatenates two strings at the type level.
 *
 * @since 2.0.0
 */
export type Concat<A extends string, B extends string> = `${A}${B}`;
/**
 * Concatenates two strings at runtime.
 *
 * @since 2.0.0
 */
export declare const concat: {
    /**
     * Concatenates two strings at runtime.
     *
     * @since 2.0.0
     */
    <B extends string>(that: B): <A extends string>(self: A) => Concat<A, B>;
    /**
     * Concatenates two strings at runtime.
     *
     * @since 2.0.0
     */
    <A extends string, B extends string>(self: A, that: B): Concat<A, B>;
};
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
export declare const toUpperCase: <S extends string>(self: S) => Uppercase<S>;
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
export declare const toLowerCase: <T extends string>(self: T) => Lowercase<T>;
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
export declare const capitalize: <T extends string>(self: T) => Capitalize<T>;
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
export declare const uncapitalize: <T extends string>(self: T) => Uncapitalize<T>;
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
export declare const replace: (searchValue: string | RegExp, replaceValue: string) => (self: string) => string;
/**
 * @since 2.0.0
 */
export type Trim<A extends string> = TrimEnd<TrimStart<A>>;
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
export declare const trim: <A extends string>(self: A) => Trim<A>;
/**
 * @since 2.0.0
 */
export type TrimStart<A extends string> = A extends `${" " | "\n" | "\t" | "\r"}${infer B}` ? TrimStart<B> : A;
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
export declare const trimStart: <A extends string>(self: A) => TrimStart<A>;
/**
 * @since 2.0.0
 */
export type TrimEnd<A extends string> = A extends `${infer B}${" " | "\n" | "\t" | "\r"}` ? TrimEnd<B> : A;
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
export declare const trimEnd: <A extends string>(self: A) => TrimEnd<A>;
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
export declare const slice: (start?: number, end?: number) => (self: string) => string;
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
export declare const isEmpty: (self: string) => self is "";
/**
 * Test whether a `string` is non empty.
 *
 * @since 2.0.0
 */
export declare const isNonEmpty: (self: string) => boolean;
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
export declare const length: (self: string) => number;
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
export declare const split: {
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
    (separator: string | RegExp): (self: string) => NonEmptyArray<string>;
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
    (self: string, separator: string | RegExp): NonEmptyArray<string>;
};
/**
 * Returns `true` if `searchString` appears as a substring of `self`, at one or more positions that are
 * greater than or equal to `position`; otherwise, returns `false`.
 *
 * @since 2.0.0
 */
export declare const includes: (searchString: string, position?: number) => (self: string) => boolean;
/**
 * @since 2.0.0
 */
export declare const startsWith: (searchString: string, position?: number) => (self: string) => boolean;
/**
 * @since 2.0.0
 */
export declare const endsWith: (searchString: string, position?: number) => (self: string) => boolean;
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
export declare const charCodeAt: {
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
    (index: number): (self: string) => Option.Option<number>;
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
    (self: string, index: number): Option.Option<number>;
};
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
export declare const substring: (start: number, end?: number) => (self: string) => string;
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
export declare const at: {
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
    (index: number): (self: string) => Option.Option<string>;
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
    (self: string, index: number): Option.Option<string>;
};
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
export declare const charAt: {
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
    (index: number): (self: string) => Option.Option<string>;
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
    (self: string, index: number): Option.Option<string>;
};
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
export declare const codePointAt: {
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
    (index: number): (self: string) => Option.Option<number>;
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
    (self: string, index: number): Option.Option<number>;
};
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
export declare const indexOf: (searchString: string) => (self: string) => Option.Option<number>;
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
export declare const lastIndexOf: (searchString: string) => (self: string) => Option.Option<number>;
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
export declare const localeCompare: (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions) => (self: string) => Ordering.Ordering;
/**
 * It is the `pipe`-able version of the native `match` method.
 *
 * @since 2.0.0
 */
export declare const match: (regexp: RegExp | string) => (self: string) => Option.Option<RegExpMatchArray>;
/**
 * It is the `pipe`-able version of the native `matchAll` method.
 *
 * @since 2.0.0
 */
export declare const matchAll: (regexp: RegExp) => (self: string) => IterableIterator<RegExpMatchArray>;
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
export declare const normalize: (form?: "NFC" | "NFD" | "NFKC" | "NFKD") => (self: string) => string;
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
export declare const padEnd: (maxLength: number, fillString?: string) => (self: string) => string;
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
export declare const padStart: (maxLength: number, fillString?: string) => (self: string) => string;
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
export declare const repeat: (count: number) => (self: string) => string;
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
export declare const replaceAll: (searchValue: string | RegExp, replaceValue: string) => (self: string) => string;
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
export declare const search: {
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
    (regexp: RegExp | string): (self: string) => Option.Option<number>;
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
    (self: string, regexp: RegExp | string): Option.Option<number>;
};
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
export declare const toLocaleLowerCase: (locale?: Intl.LocalesArgument) => (self: string) => string;
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
export declare const toLocaleUpperCase: (locale?: Intl.LocalesArgument) => (self: string) => string;
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
export declare const takeLeft: {
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
    (n: number): (self: string) => string;
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
    (self: string, n: number): string;
};
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
export declare const takeRight: {
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
    (n: number): (self: string) => string;
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
    (self: string, n: number): string;
};
/**
 * Returns an `IterableIterator` which yields each line contained within the
 * string, trimming off the trailing newline character.
 *
 * @since 2.0.0
 */
export declare const linesIterator: (self: string) => LinesIterator;
/**
 * Returns an `IterableIterator` which yields each line contained within the
 * string as well as the trailing newline character.
 *
 * @since 2.0.0
 */
export declare const linesWithSeparators: (s: string) => LinesIterator;
/**
 * For every line in this string, strip a leading prefix consisting of blanks
 * or control characters followed by the character specified by `marginChar`
 * from the line.
 *
 * @since 2.0.0
 */
export declare const stripMarginWith: {
    /**
     * For every line in this string, strip a leading prefix consisting of blanks
     * or control characters followed by the character specified by `marginChar`
     * from the line.
     *
     * @since 2.0.0
     */
    (marginChar: string): (self: string) => string;
    /**
     * For every line in this string, strip a leading prefix consisting of blanks
     * or control characters followed by the character specified by `marginChar`
     * from the line.
     *
     * @since 2.0.0
     */
    (self: string, marginChar: string): string;
};
/**
 * For every line in this string, strip a leading prefix consisting of blanks
 * or control characters followed by the `"|"` character from the line.
 *
 * @since 2.0.0
 */
export declare const stripMargin: (self: string) => string;
/**
 * @since 2.0.0
 */
export declare const snakeToCamel: (self: string) => string;
/**
 * @since 2.0.0
 */
export declare const snakeToPascal: (self: string) => string;
/**
 * @since 2.0.0
 */
export declare const snakeToKebab: (self: string) => string;
/**
 * @since 2.0.0
 */
export declare const camelToSnake: (self: string) => string;
/**
 * @since 2.0.0
 */
export declare const pascalToSnake: (self: string) => string;
/**
 * @since 2.0.0
 */
export declare const kebabToSnake: (self: string) => string;
declare class LinesIterator implements IterableIterator<string> {
    readonly s: string;
    readonly stripped: boolean;
    private index;
    private readonly length;
    constructor(s: string, stripped?: boolean);
    next(): IteratorResult<string>;
    [Symbol.iterator](): IterableIterator<string>;
    private get done();
}
export {};
//# sourceMappingURL=String.d.ts.map