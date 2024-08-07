---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our `foods` object is being used in a program for a supermarket cash register. We have some function that sets the `selectedFood` and we want to check our `foods` object for the presence of that food. This might look like:

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

This code will evaluate the value stored in the `selectedFood` variable and return the value of that key in the `foods` object, or `undefined` if it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

# --instructions--

We've defined a function, `checkInventory`, which receives a scanned item as an argument. Return the current value of the `scannedItem` key in the `foods` object. You can assume that only valid keys will be provided as an argument to `checkInventory`.

# --hints--

`checkInventory` should be a function.

```js
assert.strictEqual(typeof checkInventory, 'function');
```

The `foods` object should have only the following key-value pairs: `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.

```js
assert.deepEqual(foods, {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
});
```

`checkInventory("apples")` should return `25`.

```js
assert.strictEqual(checkInventory('apples'), 25);
```

`checkInventory("bananas")` should return `13`.

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

`checkInventory("strawberries")` should return `27`.

```js
assert.strictEqual(checkInventory('strawberries'), 27);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
```
