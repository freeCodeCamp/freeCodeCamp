---
id: 661e17c6068359c3ccf2f4d8
title: Basic Functions Exercise D
challengeType: 1
dashedName: top-basic-functions-exercise-d
---

# --description--

Write a function, named `lastLetter`, that takes a string as a parameter and returns the last letter of the string.

# --hints--

You should have a function named `lastLetter`.

```js
assert.isFunction(lastLetter);
```

Your function should take in a string as a parameter. 

```js
assert.match(lastLetter.toString(), /\s*lastLetter\(\s*\w+\s*\)/);
```

You should return the last letter of the string.

```js
assert.strictEqual(lastLetter('Sem'), 'm');
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function lastLetter(str) {
  return str[str.length - 1];
}
```
