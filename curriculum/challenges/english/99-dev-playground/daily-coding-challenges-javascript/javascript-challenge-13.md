---
id: 6821ebc9237de8297eaee78f
title: "JavaScript Challenge 13: Unnatural Prime"
challengeType: 28
dashedName: javascript-challenge-13
---

# --description--

Given an integer, determine if that number is a prime number or a negative prime number.

- A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
- A negative prime number is the negative version of a positive prime number.

# --hints--

`isUnnaturalPrime(1)` should return `false`.

```js
assert.isFalse(isUnnaturalPrime(1));
```

`isUnnaturalPrime(-1)` should return `false`.

```js
assert.isFalse(isUnnaturalPrime(-1));
```

`isUnnaturalPrime(19)` should return `true`.

```js
assert.isTrue(isUnnaturalPrime(19));
```

`isUnnaturalPrime(-23)` should return `true`.

```js
assert.isTrue(isUnnaturalPrime(-23));
```

`isUnnaturalPrime(0)` should return `false`.

```js
assert.isFalse(isUnnaturalPrime(0));
```

`isUnnaturalPrime(97)` should return `true`.

```js
assert.isTrue(isUnnaturalPrime(97));
```

`isUnnaturalPrime(-61)` should return `true`.

```js
assert.isTrue(isUnnaturalPrime(-61));
```

`isUnnaturalPrime(99)` should return `false`.

```js
assert.isFalse(isUnnaturalPrime(99));
```

`isUnnaturalPrime(-44)` should return `false`.

```js
assert.isFalse(isUnnaturalPrime(-44));
```

# --seed--

## --seed-contents--

```js
function isUnnaturalPrime(n) {

  return n;
}
```

# --solutions--

```js
function isUnnaturalPrime(n) {
  const abs = Math.abs(n);

  if (abs <= 1) return false;

  for (let i = 2; i <= Math.sqrt(abs); i++) {
    if (abs % i === 0) return false;
  }

  return true;
}
```
