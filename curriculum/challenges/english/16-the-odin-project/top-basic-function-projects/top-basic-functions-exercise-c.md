---
id: 661e151f068359c3ccf2f4d7
title: Basic Functions Exercise C
challengeType: 1
dashedName: top-basic-functions-exercise-c
---

# --description--

Write a function, named `capitalize`, that takes a string as an parameter and returns a new string with the first letter capitalized.

# --hints--

You should have a function named `capitalize`.

```js
assert.isFunction(capitalize);
```

Your function should take in a string as a parameter. 

```js
assert.match(capitalize.toString(), /\s*capitalize\(\s*\w+\s*\)/);
```

Your function should return a new string with the first letter capitalized.

```js
assert.strictEqual(capitalize('sem'), 'Sem');
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
```
