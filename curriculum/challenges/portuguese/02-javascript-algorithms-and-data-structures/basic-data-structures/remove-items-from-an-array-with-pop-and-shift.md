---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

Both `push()` and `unshift()` have corresponding methods that are nearly functional opposites: `pop()` and `shift()`. As you may have guessed by now, instead of adding, `pop()` *removes* an element from the end of an array, while `shift()` removes an element from the beginning. The key difference between `pop()` and `shift()` and their cousins `push()` and `unshift()`, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

Let's take a look:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` would have the value `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` would have the value `['hello']`.

We can also return the value of the removed element with either method like this:

```js
let popped = greetings.pop();
```

`greetings` would have the value `[]`, and `popped` would have the value `hello`.

# --instructions--

We have defined a function, `popShift`, which takes an array as an argument and returns a new array. Modify the function, using `pop()` and `shift()`, to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

# --hints--

`popShift(["challenge", "is", "not", "complete"])` should return `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

The `popShift` function should utilize the `pop()` method

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

The `popShift` function should utilize the `shift()` method

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```
