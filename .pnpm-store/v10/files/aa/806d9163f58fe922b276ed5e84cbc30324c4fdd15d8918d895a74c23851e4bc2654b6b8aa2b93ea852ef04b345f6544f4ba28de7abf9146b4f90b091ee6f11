"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncapitalize = exports.trimStart = exports.trimEnd = exports.trim = exports.toUpperCase = exports.toLowerCase = exports.toLocaleUpperCase = exports.toLocaleLowerCase = exports.takeRight = exports.takeLeft = exports.substring = exports.stripMarginWith = exports.stripMargin = exports.startsWith = exports.split = exports.snakeToPascal = exports.snakeToKebab = exports.snakeToCamel = exports.slice = exports.search = exports.replaceAll = exports.replace = exports.repeat = exports.pascalToSnake = exports.padStart = exports.padEnd = exports.normalize = exports.matchAll = exports.match = exports.localeCompare = exports.linesWithSeparators = exports.linesIterator = exports.length = exports.lastIndexOf = exports.kebabToSnake = exports.isString = exports.isNonEmpty = exports.isEmpty = exports.indexOf = exports.includes = exports.endsWith = exports.empty = exports.concat = exports.codePointAt = exports.charCodeAt = exports.charAt = exports.capitalize = exports.camelToSnake = exports.at = exports.Order = exports.Equivalence = void 0;
var equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var readonlyArray = _interopRequireWildcard(require("./internal/array.js"));
var number = _interopRequireWildcard(require("./Number.js"));
var Option = _interopRequireWildcard(require("./Option.js"));
var order = _interopRequireWildcard(require("./Order.js"));
var predicate = _interopRequireWildcard(require("./Predicate.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions and type class instances for working with the `string` type in TypeScript.
 * It includes functions for basic string manipulation, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @since 2.0.0
 */

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
const isString = exports.isString = predicate.isString;
/**
 * @category instances
 * @since 2.0.0
 */
const Equivalence = exports.Equivalence = equivalence.string;
/**
 * @category instances
 * @since 2.0.0
 */
const Order = exports.Order = order.string;
/**
 * The empty string `""`.
 *
 * @since 2.0.0
 */
const empty = exports.empty = "";
/**
 * Concatenates two strings at runtime.
 *
 * @since 2.0.0
 */
const concat = exports.concat = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => self + that);
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
const toUpperCase = self => self.toUpperCase();
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
exports.toUpperCase = toUpperCase;
const toLowerCase = self => self.toLowerCase();
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
exports.toLowerCase = toLowerCase;
const capitalize = self => {
  if (self.length === 0) return self;
  return toUpperCase(self[0]) + self.slice(1);
};
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
exports.capitalize = capitalize;
const uncapitalize = self => {
  if (self.length === 0) return self;
  return toLowerCase(self[0]) + self.slice(1);
};
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
exports.uncapitalize = uncapitalize;
const replace = (searchValue, replaceValue) => self => self.replace(searchValue, replaceValue);
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
exports.replace = replace;
const trim = self => self.trim();
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
exports.trim = trim;
const trimStart = self => self.trimStart();
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
exports.trimStart = trimStart;
const trimEnd = self => self.trimEnd();
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
exports.trimEnd = trimEnd;
const slice = (start, end) => self => self.slice(start, end);
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
exports.slice = slice;
const isEmpty = self => self.length === 0;
/**
 * Test whether a `string` is non empty.
 *
 * @since 2.0.0
 */
exports.isEmpty = isEmpty;
const isNonEmpty = self => self.length > 0;
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
exports.isNonEmpty = isNonEmpty;
const length = self => self.length;
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
exports.length = length;
const split = exports.split = /*#__PURE__*/(0, _Function.dual)(2, (self, separator) => {
  const out = self.split(separator);
  return readonlyArray.isNonEmptyArray(out) ? out : [self];
});
/**
 * Returns `true` if `searchString` appears as a substring of `self`, at one or more positions that are
 * greater than or equal to `position`; otherwise, returns `false`.
 *
 * @since 2.0.0
 */
const includes = (searchString, position) => self => self.includes(searchString, position);
/**
 * @since 2.0.0
 */
exports.includes = includes;
const startsWith = (searchString, position) => self => self.startsWith(searchString, position);
/**
 * @since 2.0.0
 */
exports.startsWith = startsWith;
const endsWith = (searchString, position) => self => self.endsWith(searchString, position);
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
exports.endsWith = endsWith;
const charCodeAt = exports.charCodeAt = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => Option.filter(Option.some(self.charCodeAt(index)), charCode => !isNaN(charCode)));
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
const substring = (start, end) => self => self.substring(start, end);
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
exports.substring = substring;
const at = exports.at = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => Option.fromNullable(self.at(index)));
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
const charAt = exports.charAt = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => Option.filter(Option.some(self.charAt(index)), isNonEmpty));
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
const codePointAt = exports.codePointAt = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => Option.fromNullable(self.codePointAt(index)));
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
const indexOf = searchString => self => Option.filter(Option.some(self.indexOf(searchString)), number.greaterThanOrEqualTo(0));
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
exports.indexOf = indexOf;
const lastIndexOf = searchString => self => Option.filter(Option.some(self.lastIndexOf(searchString)), number.greaterThanOrEqualTo(0));
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
exports.lastIndexOf = lastIndexOf;
const localeCompare = (that, locales, options) => self => number.sign(self.localeCompare(that, locales, options));
/**
 * It is the `pipe`-able version of the native `match` method.
 *
 * @since 2.0.0
 */
exports.localeCompare = localeCompare;
const match = regexp => self => Option.fromNullable(self.match(regexp));
/**
 * It is the `pipe`-able version of the native `matchAll` method.
 *
 * @since 2.0.0
 */
exports.match = match;
const matchAll = regexp => self => self.matchAll(regexp);
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
exports.matchAll = matchAll;
const normalize = form => self => self.normalize(form);
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
exports.normalize = normalize;
const padEnd = (maxLength, fillString) => self => self.padEnd(maxLength, fillString);
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
exports.padEnd = padEnd;
const padStart = (maxLength, fillString) => self => self.padStart(maxLength, fillString);
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
exports.padStart = padStart;
const repeat = count => self => self.repeat(count);
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
exports.repeat = repeat;
const replaceAll = (searchValue, replaceValue) => self => self.replaceAll(searchValue, replaceValue);
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
exports.replaceAll = replaceAll;
const search = exports.search = /*#__PURE__*/(0, _Function.dual)(2, (self, regexp) => Option.filter(Option.some(self.search(regexp)), number.greaterThanOrEqualTo(0)));
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
const toLocaleLowerCase = locale => self => self.toLocaleLowerCase(locale);
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
exports.toLocaleLowerCase = toLocaleLowerCase;
const toLocaleUpperCase = locale => self => self.toLocaleUpperCase(locale);
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
exports.toLocaleUpperCase = toLocaleUpperCase;
const takeLeft = exports.takeLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => self.slice(0, Math.max(n, 0)));
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
const takeRight = exports.takeRight = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => self.slice(Math.max(0, self.length - Math.floor(n)), Infinity));
const CR = 0x0d;
const LF = 0x0a;
/**
 * Returns an `IterableIterator` which yields each line contained within the
 * string, trimming off the trailing newline character.
 *
 * @since 2.0.0
 */
const linesIterator = self => linesSeparated(self, true);
/**
 * Returns an `IterableIterator` which yields each line contained within the
 * string as well as the trailing newline character.
 *
 * @since 2.0.0
 */
exports.linesIterator = linesIterator;
const linesWithSeparators = s => linesSeparated(s, false);
/**
 * For every line in this string, strip a leading prefix consisting of blanks
 * or control characters followed by the character specified by `marginChar`
 * from the line.
 *
 * @since 2.0.0
 */
exports.linesWithSeparators = linesWithSeparators;
const stripMarginWith = exports.stripMarginWith = /*#__PURE__*/(0, _Function.dual)(2, (self, marginChar) => {
  let out = "";
  for (const line of linesWithSeparators(self)) {
    let index = 0;
    while (index < line.length && line.charAt(index) <= " ") {
      index = index + 1;
    }
    const stripped = index < line.length && line.charAt(index) === marginChar ? line.substring(index + 1) : line;
    out = out + stripped;
  }
  return out;
});
/**
 * For every line in this string, strip a leading prefix consisting of blanks
 * or control characters followed by the `"|"` character from the line.
 *
 * @since 2.0.0
 */
const stripMargin = self => stripMarginWith(self, "|");
/**
 * @since 2.0.0
 */
exports.stripMargin = stripMargin;
const snakeToCamel = self => {
  let str = self[0];
  for (let i = 1; i < self.length; i++) {
    str += self[i] === "_" ? self[++i].toUpperCase() : self[i];
  }
  return str;
};
/**
 * @since 2.0.0
 */
exports.snakeToCamel = snakeToCamel;
const snakeToPascal = self => {
  let str = self[0].toUpperCase();
  for (let i = 1; i < self.length; i++) {
    str += self[i] === "_" ? self[++i].toUpperCase() : self[i];
  }
  return str;
};
/**
 * @since 2.0.0
 */
exports.snakeToPascal = snakeToPascal;
const snakeToKebab = self => self.replace(/_/g, "-");
/**
 * @since 2.0.0
 */
exports.snakeToKebab = snakeToKebab;
const camelToSnake = self => self.replace(/([A-Z])/g, "_$1").toLowerCase();
/**
 * @since 2.0.0
 */
exports.camelToSnake = camelToSnake;
const pascalToSnake = self => (self.slice(0, 1) + self.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase();
/**
 * @since 2.0.0
 */
exports.pascalToSnake = pascalToSnake;
const kebabToSnake = self => self.replace(/-/g, "_");
exports.kebabToSnake = kebabToSnake;
class LinesIterator {
  s;
  stripped;
  index;
  length;
  constructor(s, stripped = false) {
    this.s = s;
    this.stripped = stripped;
    this.index = 0;
    this.length = s.length;
  }
  next() {
    if (this.done) {
      return {
        done: true,
        value: undefined
      };
    }
    const start = this.index;
    while (!this.done && !isLineBreak(this.s[this.index])) {
      this.index = this.index + 1;
    }
    let end = this.index;
    if (!this.done) {
      const char = this.s[this.index];
      this.index = this.index + 1;
      if (!this.done && isLineBreak2(char, this.s[this.index])) {
        this.index = this.index + 1;
      }
      if (!this.stripped) {
        end = this.index;
      }
    }
    return {
      done: false,
      value: this.s.substring(start, end)
    };
  }
  [Symbol.iterator]() {
    return new LinesIterator(this.s, this.stripped);
  }
  get done() {
    return this.index >= this.length;
  }
}
/**
 * Test if the provided character is a line break character (i.e. either `"\r"`
 * or `"\n"`).
 */
const isLineBreak = char => {
  const code = char.charCodeAt(0);
  return code === CR || code === LF;
};
/**
 * Test if the provided characters combine to form a carriage return/line-feed
 * (i.e. `"\r\n"`).
 */
const isLineBreak2 = (char0, char1) => char0.charCodeAt(0) === CR && char1.charCodeAt(0) === LF;
const linesSeparated = (self, stripped) => new LinesIterator(self, stripped);
//# sourceMappingURL=String.js.map