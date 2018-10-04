---
title: Department Numbers
id: 59f40b17e79dbf1ab720ed7a
challengeType: 5
---

## Description
<section id='description'>
<p>There is a highly organized city that has decided to assign a number to each of their departments:</p>
Police department
Sanitation department
Fire department 
<p>Each department can have a number between 1 and 7  (inclusive).</p><p>The three department numbers are to be unique (different from each other) and must add up to the number 12.</p><p>The Chief of the Police doesn't like odd numbers and wants to have an even number for his department.</p>
Task:
<p>Write a program which outputs all valid combinations:</p>
<p>[2, 3, 7]</p>
<p>[2, 4, 6]</p>
<p>[2, 6, 4]</p>
<p>[2, 7, 3]</p>
<p>[4, 1, 7]</p>
<p>[4, 2, 6]</p>
<p>[4, 3, 5]</p>
<p>[4, 5, 3]</p>
<p>[4, 6, 2]</p>
<p>[4, 7, 1]</p>
<p>[6, 1, 5]</p>
<p>[6, 2, 4]</p>
<p>[6, 4, 2]</p>
<p>[6, 5, 1]</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code> should be a function.
    testString: 'assert(typeof combinations === ''function'', ''<code>combinations</code> should be a function.'');'
  - text: '<code>combinations([1, 2, 3], 6)</code> should return an Array.'
    testString: 'assert(Array.isArray(combinations([1, 2, 3], 6)), ''<code>combinations([1, 2, 3], 6)</code> should return an Array.'');'
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return an array of length 14.'
    testString: 'assert(combinations(nums, total).length === len, ''<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return an array of length 14.'');'
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return all valid combinations.'
    testString: 'assert.deepEqual(combinations(nums, total), result, ''<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return all valid combinations.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations (possibleNumbers, total) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function combinations (possibleNumbers, total) {
  let firstNumber;
  let secondNumber;
  let thridNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thridNumber = total - firstNumber - secondNumber;

          if (thridNumber !== firstNumber && thridNumber !== secondNumber && possibleNumbers.includes(thridNumber)) {
            allCombinations.push([firstNumber, secondNumber, thridNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}

```

</section>
