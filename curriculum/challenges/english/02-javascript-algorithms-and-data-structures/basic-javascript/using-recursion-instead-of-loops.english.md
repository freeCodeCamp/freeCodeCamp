---
id: 5cc0bd7a49b71cb96132e54c
title: Using Recursion Instead of a Loop
challengeType: 1
---

## Description
<section id='description'>
Recursion is the programming concept of using a function that calls itself in order to accomplish a task. For example: 
<blockquote>
function countToN(n) {<br>
&nbsp;&nbsp;if (n === 1) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;return [1];<br>
&nbsp;&nbsp;} else {<br>
&nbsp;&nbsp;&nbsp;&nbsp;var numbers = countToN(n - 1);<br>
&nbsp;&nbsp;&nbsp;&nbsp;numbers.push(n);<br>
&nbsp;&nbsp;&nbsp;&nbsp;return numbers;<br>
&nbsp;&nbsp;}<br>
}
</blockquote>
 This function returns an array of consecutive integers starting with <code>1</code> through the number passed to the the function.
 Recursion has two fundamental parts: the base case, and the recursive loop. The base case tells the recursive function when to stop (in this example: when <code>n</code> is equal to <code>1</code>) and the recursive loop tells the function when to call itself, and with what parameters (in this example: calling itself with <code>n - 1</code>).
</section>

## Instructions
<section id='instructions'>
We have defined a function named <code>rangeOfNumbers</code> with two parameters. The function should return an array of integers which begins a starting number represented by the <code>startNum</code> parameter and ends with an ending number represented by the <code>endNum</code> parameter.  The starting number will always be less than or equal to the ending number.  Your function must use recursion by calling itself and not use loops of any kind.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: Your function should return an array.
    testString: assert(Array.isArray(rangeOfNumbers(5, 10)));
  - text: Your code should not use any loop syntax (<code>for</code> or <code>while</code> or higher order functions such as <code>forEach</code>, <code>map</code>, <code>filter</code>, or <code>reduce</code>.
    testString: assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: <code>rangeOfNumbers</code> should use recursion (call itself) to solve this challenge.
    testString: assert(removeJSComments(rangeOfNumbers.toString()).match(/rangeOfNumbers\s*\(.+\)/));
  - text: <code>rangeOfNumbers(1, 5)</code> should return <code>[1, 2, 3, 4, 5]</code>.
    testString: assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
  - text: <code>rangeOfNumbers(6, 9)</code> should return <code>[6, 7, 8, 9]</code>.
    testString: assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
  - text: <code>rangeOfNumbers(4, 4)</code> should should return <code></code>.
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
};
```

</section>
