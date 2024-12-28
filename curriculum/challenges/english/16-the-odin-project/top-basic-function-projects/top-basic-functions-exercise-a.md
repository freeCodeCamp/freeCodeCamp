---
id: 6619240f46cec8e04d77e03a
title: Basic Functions Exercise A 
challengeType: 1
dashedName: top-basic-functions-exercise-a
---

# --description--

Create a function that takes in an integer. This function should return the given `integer + 7` if the integer is less than `10`. If the integer is greater than or equal to `10`, it should return the given `integer - 3`.

The name of the function should be `addOrSubtract`.

# --hints--

You should have a function called `addOrSubtract`.

```js
assert.isFunction(addOrSubtract);
```

Your function should take in an integer as an argument.

```js
assert.match(addOrSubtract.toString(), /\s*addOrSubtract\(\s*\w+\s*\)/);
```

You should return the given integer + 7 if the integer is less than 10.

```js
assert.strictEqual(addOrSubtract(5), 12);
```

You should return the given integer - 3 if the integer is greater than or equal to 10.

```js
assert.strictEqual(addOrSubtract(10), 7);
```




# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function addOrSubtract(num) {
  if (num < 10) {
    return num + 7;
  } else {
    return num - 3;
  }
}
```
