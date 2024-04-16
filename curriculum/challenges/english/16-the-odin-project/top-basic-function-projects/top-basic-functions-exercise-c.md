---
id: 661e151f068359c3ccf2f4d7
title: Basic Functions Exercise C
challengeType: 1
dashedName: top-basic-functions-exercise-c
---

# --description--

Write a function, named `capatalize`, that takes a string as an argument and returns the string with the first letter capitalized.

# --hints--

You should have a function named `capatalize`.

```js
assert.strictEqual(capatalize('hello') , 'Hello');
```

Your function should take in a string as an argument. 

```js
assert.strictEqual(capatalize('world'), 'World');
```

You should return the string with the first letter capitalized.

```js
assert.strictEqual(capatalize('sem'), 'Sem');
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function capatalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
```
