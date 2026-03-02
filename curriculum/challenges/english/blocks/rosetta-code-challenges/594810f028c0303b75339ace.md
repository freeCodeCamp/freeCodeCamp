---
id: 594810f028c0303b75339ace
title: Accumulator factory
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).

# --instructions--

Create a function that takes a number $n$ and generates accumulator functions that return the sum of every number ever passed to them.

**Rules:**

Do not use global variables.

**Hint:**

Closures save outer state.

# --hints--

`accumulator` should be a function.

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` should return a function.

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` should return a number.

```js
assert(typeof accumulator(0)(2) === 'number');
```

Passing in the values 3, -4, 1.5, and 5 should return 5.5.

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```
