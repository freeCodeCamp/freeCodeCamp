---
id: 5cfa3679138e7d9595b9d9d4
title: Replace Loops using Recursion
challengeType: 1
videoUrl: 'https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/'
forumTopicId: 301175
---

## Description
<section id='description'>
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first <code>n</code> elements of an array to create the product of those elements. Using a <code>for</code> loop, you could do this:

```js
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

However, notice that <code>multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]</code>. That means you can rewrite <code>multiply</code> in terms of itself and never need to use a loop.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

The recursive version of <code>multiply</code> breaks down like this. In the <dfn>base case</dfn>, where <code>n <= 0</code>, it returns 1. For larger values of <code>n</code>, it calls itself, but with <code>n - 1</code>. That function call is evaluated in the same way, calling <code>multiply</code> again until <code>n <= 0</code>.  At this point, all the functions can return and the original <code>multiply</code> returns the answer.

<strong>Note:</strong> Recursive functions must have a base case when they return without calling the function again (in this example, when <code>n <= 0</code>), otherwise they can never finish executing.

</section>

## Instructions
<section id='instructions'>

Write a recursive function, <code>sum(arr, n)</code>, that returns the sum of the first <code>n</code> elements of an array <code>arr</code>.

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>sum([1], 0)</code> should equal 0.
    testString: assert.equal(sum([1], 0), 0);
  - text: <code>sum([2, 3, 4], 1)</code> should equal 2.
    testString: assert.equal(sum([2, 3, 4], 1), 2);
  - text: <code>sum([2, 3, 4, 5], 3)</code> should equal 9.
    testString: assert.equal(sum([2, 3, 4, 5], 3), 9);
  - text: Your code should not rely on any kind of loops (<code>for</code> or <code>while</code> or higher order functions such as <code>forEach</code>, <code>map</code>, <code>filter</code>, or <code>reduce</code>.).
    testString: assert(!__helpers.removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: You should use recursion to solve this problem.
    testString: assert(__helpers.removeJSComments(sum.toString()).match(/sum\(.*\)/g).length > 1);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}

```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
