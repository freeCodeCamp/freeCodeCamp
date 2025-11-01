---
id: 68f890b73bbfc9efa7379e7b
title: Debug Type Coercion Errors in a Buggy App
challengeType: 26
dashedName: debug-type-coercion-errors-in-a-buggy-app
---

# --description--

You've just joined a local web development shop, and your first assignment is to clean up some buggy code left behind by the previous developers.

They were attempting simple arithmetic operations, but something went wrong, the results don't make sense. Your task is to review, debug, and correct the code so it performs as expected and is easier to read.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab. 

**User Stories:**

1. You should have a variable named `firstResult` that correctly adds the numbers `5` and `10` to produce the value `15`.
2. You should have a variable named `secondResult` that correctly subtracts `5` from `8` to produce the value `3`.
3. You should have a variable named `thirdResult` that produces the value `6` by adding two numbers. Replace the boolean currently used in the expression with a number.
4. You should have a variable named `fourthResult` that produces the value `8` by adding two numbers. Replace the boolean currently used in the expression with a number.
5. You should have a variable named `fifthResult` that correctly multiplies two numbers to get the product `20`. Replace the string currently used in the expression with a number.
6. You should have a variable named `sixthResult` that correctly adds two numbers to produce the value `22`. Replace the `null` currently used in the expression with a number.

# --hints--

You should have a variable called `firstResult`.

```js
assert.match(code, /const\s+firstResult\s*=/);
```

`firstResult` should have the numeric value `15`.

```js
assert.strictEqual(firstResult, 15);
```

You should have a variable called `secondResult`.

```js
assert.match(code, /const\s+secondResult\s*=/);
```

`secondResult` should have the numeric value `3`.

```js
assert.strictEqual(secondResult, 3);
```

You should have a variable called `thirdResult`.

```js
assert.match(code, /const\s+thirdResult\s*=/);
```

`thirdResult` should have the numeric value `6`.

```js
assert.strictEqual(thirdResult, 6);
```

`thirdResult` should not include a boolean value (`true` or `false`).

```js
const match = code.match(/const\s+thirdResult\s*=\s*([^;]+)/);
assert.isNotNull(match);
const expression = match[1];
assert.notMatch(expression, /\btrue\b|\bfalse\b/);
```

You should have a variable called `fourthResult`.

```js
assert.match(code, /const\s+fourthResult\s*=/);
```

`fourthResult` should have the numeric value `8`.

```js
assert.strictEqual(fourthResult, 8);
```

`fourthResult` should not include a boolean value (`true` or `false`).

```js
const match = code.match(/const\s+fourthResult\s*=\s*([^;]+)/);
assert.isNotNull(match);
const expression = match[1];
assert.notMatch(expression, /\btrue\b|\bfalse\b/);
```

You should have a variable called `fifthResult`.

```js
assert.match(code, /const\s+fifthResult\s*=/);
```

`fifthResult` should have the numeric value `20`.

```js
assert.strictEqual(fifthResult, 20);
```

`fifthResult` should not include a string multiplication (e.g. "10" * 2).

```js
const match = code.match(/const\s+fifthResult\s*=\s*([^;]+)/);
assert.isNotNull(match);
const expression = match[1];
assert.notMatch(expression, /["'`].*["'`]\s*\*/);
```

You should have a variable called `sixthResult`.

```js
assert.match(code, /const\s+sixthResult\s*=/);
```

`sixthResult` should have the numeric value `22`.

```js
assert.strictEqual(sixthResult, 22);
```

`sixthResult` should not include `null` in its expression.

```js
const match = code.match(/const\s+sixthResult\s*=\s*([^;]+)/);
assert.isNotNull(match);
const expression = match[1];
assert.notMatch(expression, /\bnull\b/);
```

# --seed--

## --seed-contents--

```js
const firstResult = 5 + "10";
console.log(`5 + 10 = ${firstResult}`);

const secondResult = "Eight" - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = true + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = false + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = "10" * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = null + 22;
console.log(`0 + 22 = ${sixthResult}`);
```

# --solutions--

```js
const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);
```
