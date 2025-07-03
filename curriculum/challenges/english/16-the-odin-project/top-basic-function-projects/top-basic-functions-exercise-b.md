---
id: 661e131f068359c3ccf2f4d6
title: Basic Functions Exercise B
challengeType: 1
dashedName: top-basic-functions-exercise-b
---

# --description--

Write a function, named `multiply`, that takes two parameters and returns their product.

# --hints--

You should have a function named `multiply`.

```js
assert.isFunction(multiply);
```

Your function should take in two integers as arguments.

```js
assert.match(multiply.toString(), /\s*multiply\(\s*\w+\s*,\s*\w+\s*\)/);
```

You should return the product of the two integers.

```js
assert.strictEqual(multiply(10, 10), 100);
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js 
function multiply(a, b) {
  return a * b;
}
```
