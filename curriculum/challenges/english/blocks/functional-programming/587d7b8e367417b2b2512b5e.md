---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

If you haven't already figured it out, the issue in the previous challenge was with the `splice` call in the `tabClose()` function. Unfortunately, `splice` changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the `splice` method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called <dfn>mutation</dfn>, and the outcome is called a <dfn>side effect</dfn>. A function, ideally, should be a <dfn>pure function</dfn>, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

# --instructions--

Fill in the code for the function `incrementer` so it returns the value of the global variable `fixedValue` increased by one.

# --hints--

Your function `incrementer` should not change the value of `fixedValue` (which is `4`).

```js
incrementer();
assert(fixedValue === 4);
```

Your `incrementer` function should return a value that is one larger than the `fixedValue` value.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

Your `incrementer` function should return a value based on the global `fixedValue` variable value.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
