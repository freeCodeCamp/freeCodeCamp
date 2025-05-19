---
id: 681cb05adab50c87ddb2e513
title: "JavaScript Challenge 2: Base Check"
challengeType: 28
dashedName: javascript-challenge-2
---

# --description--

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

- The string may contain integers, and uppercase or lowercase characters.
- The check should be case-insensitive.
- The base can be any number 0-36.
- A number is valid if every character is a valid digit in the given base.
- Example of valid digits for bases:
  - Base 2: 0-1
  - Base 8: 0-7
  - Base 10: 0-9
  - Base 16: 0-9 and A-F
  - Base 36: 0-9 and A-Z

# --hints--

`isValidCode("10101", 2)` should return `true`.

```js
assert.isTrue(isValidNumber("10101", 2))
```

`isValidCode("10201", 2)` should return `false`.

```js
assert.isFalse(isValidNumber("10201", 2))
```

`isValidCode("76543210", 8)` should return `true`.

```js
assert.isTrue(isValidNumber("76543210", 8))
```

`isValidCode("9876543210", 8)` should return `false`.

```js
assert.isFalse(isValidNumber("9876543210", 8))
```

`isValidCode("9876543210", 10)` should return `true`.

```js
assert.isTrue(isValidNumber("9876543210", 10))
```

`isValidCode("ABC", 10)` should return `false`.

```js
assert.isFalse(isValidNumber("ABC", 10))
```

`isValidCode("ABC", 16)` should return `true`.

```js
assert.isTrue(isValidNumber("ABC", 16))
```

`isValidCode("Z", 36)` should return `true`.

```js
assert.isTrue(isValidNumber("Z", 36))
```

`isValidCode("ABC", 20)` should return `true`.

```js
assert.isTrue(isValidNumber("ABC", 20))
```

`isValidCode("4B4BA9", 16)` should return `true`.

```js
assert.isTrue(isValidNumber("4B4BA9", 16))
```

`isValidCode("5G3F8F", 16)` should return `false`.

```js
assert.isFalse(isValidNumber("5G3F8F", 16))
```

`isValidCode("5G3F8F", 17)` should return `true`.

```js
assert.isTrue(isValidNumber("5G3F8F", 17))
```

`isValidCode("abc", 10)` should return `false`.

```js
assert.isFalse(isValidNumber("abc", 10))
```

`isValidCode("abc", 16)` should return `true`.

```js
assert.isTrue(isValidNumber("abc", 16))
```

`isValidCode("AbC", 16)` should return `true`.

```js
assert.isTrue(isValidNumber("AbC", 16))
```

`isValidCode("z", 36)` should return `true`.

```js
assert.isTrue(isValidNumber("z", 36))
```

# --seed--

## --seed-contents--

```js
function isValidNumber(n, base) {

  return n;
}
```

# --solutions--

```js
function isValidNumber(n, base) {
  return new RegExp(`^[${'0123456789abcdefghijklmnopqrstuvwxyz'.substring(0, base)}]+\$`, "i").test(n);
}
```
