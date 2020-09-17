---
id: 5900f3a31000cf542c50feb6
challengeType: 5
title: 'Problem 55: Lychrel numbers'
forumTopicId: 302166
---

## Description
<section id='description'>

If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

<div style="margin-left: 4em;">
  349 + 943 = 1292,<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

How many Lychrel numbers are there below <code>num</code>?

**Note:** Wording was modified slightly on 24 April 2007 to emphasize the theoretical nature of Lychrel numbers.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countLychrelNumbers(1000)</code> should return a number.
    testString: assert(typeof countLychrelNumbers(1000) === 'number');
  - text: <code>countLychrelNumbers(1000)</code> should return 13.
    testString: assert.strictEqual(countLychrelNumbers(1000), 13);
  - text: <code>countLychrelNumbers(3243)</code> should return 39.
    testString: assert.strictEqual(countLychrelNumbers(3243), 39);
  - text: <code>countLychrelNumbers(5000)</code> should return 76.
    testString: assert.strictEqual(countLychrelNumbers(5000), 76);
  - text: <code>countLychrelNumbers(7654)</code> should return 140.
    testString: assert.strictEqual(countLychrelNumbers(7654), 140);
  - text: <code>countLychrelNumbers(10000)</code> should return 249.
    testString: assert.strictEqual(countLychrelNumbers(10000), 249);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countLychrelNumbers(num) {

  return true;
}

countLychrelNumbers(10000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```

</section>
