---
id: 5cd9a70215d3c4e65518328f
title: Use Recursion to Create a Countdown
challengeType: 1
forumTopicId: 305925
---

## Description
<section id='description'>

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

</section>

## Instructions
<section id='instructions'>

We have defined a function called <code>countdown</code> with one parameter <code>n</code>.  The function should use recurion to return an array containing the integers n through 1 based on the <code>n</code> parameter. If the function is called with a number less than 1, the function should return an empty array. 
For example, calling this function with <code>n = 5</code> should return the array <code>[5, 4, 3, 2, 1]</code>.
Your function must use recursion by calling itself and must not use loops of any kind.

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>countdown(-1)</code> should return an empty array.
    testString: assert.isEmpty(countdown(-1));
  - text: <code>countdown(10)</code> should return <code>[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]</code>
    testString: assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  - text: <code>countdown(5)</code>, should return <code>[5, 4, 3, 2, 1]</code>
    testString: assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
  - text: Your code should not rely on any kind of loops (<code>for</code> or <code>while</code> or higher order functions such as <code>forEach</code>, <code>map</code>, <code>filter</code>, or <code>reduce</code>.).
    testString: assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: You should use recursion to solve this problem.
    testString: assert(removeJSComments(countdown.toString()).match(/countdown\s*\(.+\)\;/));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js


//Only change code below this line
function countdown(n){
  return;
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
```

</div>

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
```

</div>

</section>

## Solution
<section id='solution'>

```js
//Only change code below this line
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```

</section>
