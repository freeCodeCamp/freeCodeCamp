---
id: 5cd9a70215d3c4e65518328f
title: Use Recursion to Create a Countdown
challengeType: 1
---

## Description
<section id='description'>

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

</section>

## Instructions
<section id='instructions'>

We have defined a function called <code>countdown</code> with two parameters.  The function should take an array in the <code>myArray</code> parameter and append the numbers n through 1 based on the <code>n</code> parameter.  
For example, calling this function with <code>n = 5</code> will pad the array with the numbers <code>[5, 4, 3, 2, 1]</code> inside of it.
Your function must use recursion by calling itself and must not use loops of any kind.

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: After calling <code>countdown(myArray, -1)</code>, myArray should be empty.
    testString: assert.isEmpty(padArray([], -1));
  - text: After calling <code>countdown(myArray, 10)</code>, myArray should contain <code>[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]</code>
    testString: assert.deepStrictEqual(padArray([], 10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  - text: After calling <code>countdown(myArray, 5)</code>, myArray should contain <code>[5, 4, 3, 2, 1]</code>
    testString: assert.deepStrictEqual(padArray([], 5), [5, 4, 3, 2, 1]);
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
function countdown(myArray, n){
  return;
}

```

</div>

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
function padArray(arr, n){
  countdown(arr, n);
  return arr;
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
//Only change code below this line
function countdown(myArray, n){
  if(n <= 0){
    return;
  }
  else{
    myArray.push(n);
    countdown(myArray, n - 1);
  }
}
```

</section>
