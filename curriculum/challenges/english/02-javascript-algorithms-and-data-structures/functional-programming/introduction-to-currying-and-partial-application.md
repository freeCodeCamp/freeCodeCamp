---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

The <dfn>arity</dfn> of a function is the number of arguments it requires. <dfn>Currying</dfn> a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` would return `3`.

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

Similarly, <dfn>partial application</dfn> can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

Fill in the body of the `add` function so it uses currying to add parameters `x`, `y`, and `z`.

# --hints--

`add(10)(20)(30)` should return `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` should return `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` should return `66`.

```js
assert(add(11)(22)(33) === 66);
```

Your code should include a final statement that returns `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
