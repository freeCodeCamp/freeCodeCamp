---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

The `every` method works with arrays to check if *every* element passes a particular test. It returns a Boolean value - `true` if all values meet the criteria, `false` if not.

For example, the following code would check if every element in the `numbers` array is less than 10:

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

The `every` method would return `false` here.

# --instructions--

Use the `every` method inside the `checkPositive` function to check if every element in `arr` is positive. The function should return a Boolean value.

# --hints--

Your code should use the `every` method.

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` should return `false`.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` should return `true`.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` should return `false`.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  // Only change code below this line
  return arr.every(num => num > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```
