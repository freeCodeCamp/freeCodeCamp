# nth-check [![Build Status](https://travis-ci.org/fb55/nth-check.svg)](https://travis-ci.org/fb55/nth-check)

Parses and compiles CSS nth-checks to highly optimized functions.

### About

This module can be used to parse & compile nth-checks, as they are found in CSS 3's `nth-child()` and `nth-last-of-type()`. It can be used to check if a given index matches a given nth-rule, or to generate a sequence of indices matching a given nth-rule.

`nth-check` focusses on speed, providing optimized functions for different kinds of nth-child formulas, while still following the [spec](http://www.w3.org/TR/css3-selectors/#nth-child-pseudo).

### API

```js
import nthCheck, { parse, compile } from "nth-check";
```

##### `nthCheck(formula)`

Parses and compiles a formula to a highly optimized function. Combination of `parse` and `compile`.

If the formula doesn't match any elements, it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`. Otherwise, a function accepting an _index_ is returned, which returns whether or not the passed _index_ matches the formula.

**Note**: The nth-rule starts counting at `1`, the returned function at `0`.

**Example:**

```js
const check = nthCheck("2n+3");

check(0); // `false`
check(1); // `false`
check(2); // `true`
check(3); // `false`
check(4); // `true`
check(5); // `false`
check(6); // `true`
```

##### `parse(formula)`

Parses the expression, throws an `Error` if it fails. Otherwise, returns an array containing the integer step size and the integer offset of the nth rule.

**Example:**

```js
parse("2n+3"); // [2, 3]
```

##### `compile([a, b])`

Takes an array with two elements (as returned by `.parse`) and returns a highly optimized function.

**Example:**

```js
const check = compile([2, 3]);

check(0); // `false`
check(1); // `false`
check(2); // `true`
check(3); // `false`
check(4); // `true`
check(5); // `false`
check(6); // `true`
```

##### `generate([a, b])`

Returns a function that produces a monotonously increasing sequence of indices.

If the sequence has an end, the returned function will return `null` after the last index in the sequence.

**Example:** An always increasing sequence

```js
const gen = nthCheck.generate([2, 3]);

gen(); // `1`
gen(); // `3`
gen(); // `5`
gen(); // `8`
gen(); // `11`
```

**Example:** With an end value

```js
const gen = nthCheck.generate([-2, 5]);

gen(); // 0
gen(); // 2
gen(); // 4
gen(); // null
```

##### `sequence(formula)`

Parses and compiles a formula to a generator that produces a sequence of indices. Combination of `parse` and `generate`.

**Example:** An always increasing sequence

```js
const gen = nthCheck.sequence("2n+3");

gen(); // `1`
gen(); // `3`
gen(); // `5`
gen(); // `8`
gen(); // `11`
```

**Example:** With an end value

```js
const gen = nthCheck.sequence("-2n+5");

gen(); // 0
gen(); // 2
gen(); // 4
gen(); // null
```

---

License: BSD-2-Clause

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure.

## `nth-check` for enterprise

Available as part of the Tidelift Subscription

The maintainers of `nth-check` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-nth-check?utm_source=npm-nth-check&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
