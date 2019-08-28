---
id: 5900f37a1000cf542c50fe8d
challengeType: 5
title: 'Problem 14: Longest Collatz sequence'
forumTopicId: 301768
localeTitle: 'Задача 14: Самая длинная последовательность Collatz'
---

## Description
<section id='description'>
The following iterative sequence is defined for the set of positive integers:
<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> is even)</div>
<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> is odd)</div>
Using the rule above and starting with 13, we generate the following sequence:
<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under the given <code>limit</code>, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>longestCollatzSequence(14)</code> should return 9.
    testString: assert.strictEqual(longestCollatzSequence(14), 9);
  - text: <code>longestCollatzSequence(5847)</code> should return 3711.
    testString: assert.strictEqual(longestCollatzSequence(5847), 3711);
  - text: <code>longestCollatzSequence(46500)</code> should return 35655.
    testString: assert.strictEqual(longestCollatzSequence(46500), 35655);
  - text: <code>longestCollatzSequence(54512)</code> should return 52527.
    testString: assert.strictEqual(longestCollatzSequence(54512), 52527);
  - text: <code>longestCollatzSequence(1000000)</code> should return 837799.
    testString: assert.strictEqual(longestCollatzSequence(1000000), 837799);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function longestCollatzSequence(limit) {
  // Good luck!
  return true;
}

longestCollatzSequence(14);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function longestCollatzSequence(limit) {
  let longestSequenceLength = 0;
  let startingNum = 0;

  function sequenceLength(num) {
    let length = 1;

    while (num >= 1) {
      if (num === 1) {        break;
      } else if (num % 2 === 0) {
        num = num / 2;
        length++;
      } else {
        num = num * 3 + 1;
        length++;
      }
    }
    return length;
  }

  for (let i = 2; i < limit; i++) {
    let currSequenceLength = sequenceLength(i);
    if (currSequenceLength > longestSequenceLength) {
      longestSequenceLength = currSequenceLength;
      startingNum = i;
    }
  }
  return startingNum;
}
```

</section>
