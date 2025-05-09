---
id: af2170cad53daa0770fabdea
title: Implement the Mutations Algorithm
challengeType: 26
dashedName: implement-the-mutations-algorithm
---

# --description--

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Create a function named `mutation` that takes an array as its argument.
1. `mutation` should return `true` if the string in the first element of the array contains all of the letters of the string in the second element of the array, and `false` otherwise. For example:
    - `mutation(["hello", "Hello"])`, should return `true` because all of the letters in the second string are present in the first, ignoring case.
    - `mutation(["hello", "hey"])` should return `false` because the string `hello` does not contain a `y`.
    - `mutation(["Alien", "line"])`, should return `true` because all of the letters in `line` are present in `Alien`.

# --hints--

`mutation(["hello", "hey"])` should return `false`.

```js
assert.isFalse(mutation(['hello', 'hey']));
```

`mutation(["hello", "Hello"])` should return `true`.

```js
assert.isTrue(mutation(['hello', 'Hello']));
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` should return `true`.

```js
assert.isTrue(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
```

`mutation(["Mary", "Army"])` should return `true`.

```js
assert.isTrue(mutation(['Mary', 'Army']));
```

`mutation(["Mary", "Aarmy"])` should return `true`.

```js
assert.isTrue(mutation(['Mary', 'Aarmy']));
```

`mutation(["Alien", "line"])` should return `true`.

```js
assert.isTrue(mutation(['Alien', 'line']));
```

`mutation(["floor", "for"])` should return `true`.

```js
assert.isTrue(mutation(['floor', 'for']));
```

`mutation(["hello", "neo"])` should return `false`.

```js
assert.isFalse(mutation(['hello', 'neo']));
```

`mutation(["voodoo", "no"])` should return `false`.

```js
assert.isFalse(mutation(['voodoo', 'no']));
```

`mutation(["ate", "date"])` should return `false`.

```js
assert.isFalse(mutation(['ate', 'date']));
```

`mutation(["Tiger", "Zebra"])` should return `false`.

```js
assert.isFalse(mutation(['Tiger', 'Zebra']));
```

`mutation(["Noel", "Ole"])` should return `true`.

```js
assert.isTrue(mutation(['Noel', 'Ole']));
```

# --seed--

## --seed-contents--

```js
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0]
    .toLowerCase()
    .split('')
    .forEach(c => (hash[c] = true));

  return !arr[1]
    .toLowerCase()
    .split('')
    .filter(c => !hash[c]).length;
}

mutation(['hello', 'hey']);
```
