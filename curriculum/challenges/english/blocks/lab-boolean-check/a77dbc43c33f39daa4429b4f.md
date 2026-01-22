---
id: a77dbc43c33f39daa4429b4f
title: Build a Boolean Check Function
challengeType: 26
dashedName: build-a-boolean-check-function
---

# --description--

In this lab, you will build a function that checks if a value is classified as a boolean primitive.

Boolean primitives are `true` and `false`.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function called `booWho` that receives one argument.
1. If the argument received is a boolean primitive, the function should return `true`.
1. If the argument is any other value, the function should return `false`.

# --hints--

You should have a `booWho` function.

```js
assert.isFunction(booWho);
```

`booWho(true)` should return `true`.

```js
assert.isTrue(booWho(true));
```

`booWho(false)` should return `true`.

```js
assert.isTrue(booWho(false));
```

`booWho([1, 2, 3])` should return `false`.

```js
assert.isFalse(booWho([1, 2, 3]));
```

`booWho([].slice)` should return `false`.

```js
assert.isFalse(booWho([].slice));
```

`booWho({ "a": 1 })` should return `false`.

```js
assert.isFalse(booWho({ a: 1 }));
```

`booWho(1)` should return `false`.

```js
assert.isFalse(booWho(1));
```

`booWho(NaN)` should return `false`.

```js
assert.isFalse(booWho(NaN));
```

`booWho("a")` should return `false`.

```js
assert.isFalse(booWho('a'));
```

`booWho("true")` should return `false`.

```js
assert.isFalse(booWho('true'));
```

`booWho("false")` should return `false`.

```js
assert.isFalse(booWho('false'));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function booWho(bool) {
  return typeof bool === 'boolean';
}

```
