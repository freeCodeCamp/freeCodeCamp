---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

Remember in the last challenge we mentioned that `splice()` can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

The second occurrence of `12` is removed, and we add `13` and `14` at the same index. The `numbers` array would now be `[ 10, 11, 12, 13, 14, 15 ]`.

Here, we begin with an array of numbers. Then, we pass the following to `splice()`: The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the remaining arguments (13, 14) will be inserted starting at that same index. Note that there can be any number of elements (separated by commas) following `amountToDelete`, each of which gets inserted.

# --instructions--

We have defined a function, `htmlColorNames`, which takes an array of HTML colors as an argument. Modify the function using `splice()` to remove the first two elements of the array and add `'DarkSalmon'` and `'BlanchedAlmond'` in their respective places.

# --hints--

`htmlColorNames` should return `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

The `htmlColorNames` function should utilize the `splice()` method

```js
assert(/.splice/.test(__helpers.removeJSComments(code)));
```

You should not use `shift()` or `unshift()`.

```js
assert(!/shift|unshift/.test(__helpers.removeJSComments(code)));
```

You should not use array bracket notation.

```js
assert(!/\[\d\]\s*=/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
