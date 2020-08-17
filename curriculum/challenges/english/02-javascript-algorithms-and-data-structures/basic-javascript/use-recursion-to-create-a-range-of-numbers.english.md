---
id: 5cc0bd7a49b71cb96132e54c
title: Use Recursion to Create a Range of Numbers
challengeType: 1
isHidden: false
forumTopicId: 301180
---

## Description
<section id='description'>

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

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
  - text: <code>rangeOfNumbers(4, 4)</code> should return <code>[4]</code>.
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
