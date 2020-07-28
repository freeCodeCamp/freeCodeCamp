---
id: 5cd9a70215d3c4e65518328f
title: Use Recursion to Create a Countdown
challengeType: 1
forumTopicId: 305925
---

## Description
<section id='description'>

In a [previous challenge](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion), you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with <code>1</code> through the number passed to the function.

As mentioned in the previous challenge, there will be a <dfn>base case</dfn>.  The base case tells the recursive function when it no longer needs to call itself.  It is a simple case where the return value is already known. There will also be a <dfn>recursive call</dfn> which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers <code>1</code> through <code>n</code>.  This function will need to accept an argument, <code>n</code>, representing the final number. Then it will need to call itself with progressively smaller values of <code>n</code> until it reaches <code>1</code>. You could write the function as follows:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
```

At first, this seems counterintuitive since the value of `n` <em>decreases</em>, but the values in the final array are <em>increasing</em>.  This happens because the push happens last, after the recursive call has returned.  At the point where `n` is pushed into the array, `countup(n - 1)` has already been evaluated and returned `[1, 2, ..., n - 1]`.

</section>

## Instructions
<section id='instructions'>

We have defined a function called <code>countdown</code> with one parameter (<code>n</code>).  The function should use recursion to return an array containing the integers <code>n</code> through <code>1</code> based on the <code>n</code> parameter. If the function is called with a number less than 1, the function should return an empty array. 
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
  - text: <code>countdown(5)</code> should return <code>[5, 4, 3, 2, 1]</code>
    testString: assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
  - text: Your code should not rely on any kind of loops (<code>for</code>, <code>while</code> or higher order functions such as <code>forEach</code>, <code>map</code>, <code>filter</code>, and <code>reduce</code>).
    testString: assert(!__helpers.removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: You should use recursion to solve this problem.
    testString: assert(__helpers.removeJSComments(countdown.toString()).match(/countdown\s*\(.+\)/));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js


// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

</div>

</section>

## Solution
<section id='solution'>

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```

</section>
