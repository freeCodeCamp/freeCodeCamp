---
id: 5cfa3679138e7d9595b9d9d4
title: Replace Loops using Recursion
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first `n` elements of an array to create the product of those elements. Using a `for` loop, you could do this:

```js
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

However, notice that `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. That means you can rewrite `multiply` in terms of itself and never need to use a loop.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

The recursive version of `multiply` breaks down like this. In the <dfn>base case</dfn>, where `n <= 0`, it returns 1. For larger values of `n`, it calls itself, but with `n - 1`. That function call is evaluated in the same way, calling `multiply` again until `n <= 0`. At this point, all the functions can return and the original `multiply` returns the answer.

**Note:** Recursive functions must have a base case when they return without calling the function again (in this example, when `n <= 0`), otherwise they can never finish executing.

# --instructions--

Write a recursive function, `sum(arr, n)`, that returns the sum of the first `n` elements of an array `arr`.

# --hints--

`sum([1], 0)` should equal 0.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` should equal 2.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` should equal 9.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

Your code should not rely on any kind of loops (`for` or `while` or higher order functions such as `forEach`, `map`, `filter`, or `reduce`.).

```js
assert(
  !__helpers
    .removeJSComments(code)
    .match(/for|while|forEach|map|filter|reduce/g)
);
```

You should use recursion to solve this problem.

```js
assert(
  __helpers.removeJSComments(sum.toString()).match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
