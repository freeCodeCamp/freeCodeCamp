---
id: 5cc0bd7a49b71cb96132e54c
title: Use Recursion to Create a Range of Numbers
challengeType: 1
forumTopicId: 301180
---

## Description
<section id='description'>

In a [previous challenge](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion), you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with <code>1</code> through the number passed to the function.

As mentioned in the previous challenge, there will be a <dfn>base case</dfn>.  The base case tells the recursive function when it no longer needs to call itself.  It is a simple case where the return value is already known. There will also be a <dfn>recursive call</dfn> which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n.  This function will need to accept an argument <code>n</code> representing the final number. Then it will need to call itself with progressively smaller values of <code>n</code> until it reaches 1. You could write the function as follows:

```js
function count(n) {
  if (n === 1) {
    return [1];
  } else {
    var numbers = count(n - 1); 
    numbers.push(n);
    return numbers;
  }
}
```

At first this is counterintuitive since the value of `n` <em>decreases</em>, but the values in the final array are <em>increasing</em>.  This happens because the push happens last, after the recursive call has returned.  At the point where `n` is pushed into the array, `count(n - 1)` has already been evaluated and returned `[1, 2, ..., n - 1]`.

</section>

## Instructions
<section id='instructions'>
We have defined a function named <code>rangeOfNumbers</code> with two parameters. The function should return an array of integers which begins with a number represented by the <code>startNum</code> parameter and ends with a number represented by the <code>endNum</code> parameter.  The starting number will always be less than or equal to the ending number.  Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both <code>startNum</code> and <code>endNum</code> are the same.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: Your function should return an array.
    testString: assert(Array.isArray(rangeOfNumbers(5, 10)));
  - text: Your code should not use any loop syntax (<code>for</code> or <code>while</code> or higher order functions such as <code>forEach</code>, <code>map</code>, <code>filter</code>, or <code>reduce</code>).
    testString: assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: <code>rangeOfNumbers</code> should use recursion (call itself) to solve this challenge.
    testString: assert(removeJSComments(rangeOfNumbers.toString()).match(/rangeOfNumbers\s*\(.+\)/));
  - text: <code>rangeOfNumbers(1, 5)</code> should return <code>[1, 2, 3, 4, 5]</code>.
    testString: assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
  - text: <code>rangeOfNumbers(6, 9)</code> should return <code>[6, 7, 8, 9]</code>.
    testString: assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
  - text: <code>rangeOfNumbers(4, 4)</code> should should return <code>[4]</code>.
    testString: assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
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
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```

</section>
