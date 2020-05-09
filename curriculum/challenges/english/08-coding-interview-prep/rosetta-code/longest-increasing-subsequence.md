---
id: 5e6dd139859c290b6ab80292
title: Longest increasing subsequence
challengeType: 5
forumTopicId: 385272
---

## Description
<section id='description'>
The longest increasing subsequence problem is to find a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible. An example:
For the following array:
$\{3, 10, 2, 1, 20\}$
Longest increasing sequence is:
$\{3, 10, 20\}$
For more information on this problem please see <a href="https://en.wikipedia.org/wiki/Longest increasing subsequence" target="_blank">Wikipedia</a>.
</section>

## Instructions
<section id='instructions'>
Write a function that takes an array of numbers as a parameter and returns the longest increasing subsequence.
It is guaranteed that every array will have a longest increasing subsequence.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>findSequence</code> should be a function.
    testString: assert(typeof findSequence == 'function');
  - text: <code>findSequence([3, 10, 2, 1, 20])</code> should return a array.
    testString: assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
  - text: <code>findSequence([3, 10, 2, 1, 20])</code> should return <code>[3, 10, 20]</code>.
    testString: assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
  - text: <code>findSequence([2, 7, 3, 5, 8])</code> should return <code>[2, 3, 5, 8]</code>.
    testString: assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
  - text: <code>findSequence([2, 6, 4, 5, 1])</code> should return <code>[2, 4, 5]</code>.
    testString: assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
  - text: <code>findSequence([10, 22, 9, 33, 21, 50, 60, 80])</code> should return <code>[10, 22, 33, 50, 60, 80]</code>.
    testString: assert.deepEqual(findSequence([10, 22, 9, 33, 21, 50, 60, 80]), [10, 22, 33, 50, 60, 80]);
  - text: <code>findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])</code> should return <code>[0, 2, 6, 9, 11, 15</code>.
    testString: assert.deepEqual(findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]), [0, 2, 6, 9, 11, 15]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findSequence(input) {

}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function findSequence(input) {
    var len = input.length;
    var result = []
    for (var i = 0; i < len; i++) result.push(1)

    for (var i = 0; i < len; i++)
        for (var j = i - 1; j >= 0; j--)
            if (input[i] > input[j] && result[j] >= result[i])
                result[i] = result[j] + 1;

    var maxValue = Math.max.apply(null, result);
    var maxIndex = result.indexOf(Math.max.apply(Math, result));
    var output = [];
    output.push(input[maxIndex]);
    for (var i = maxIndex; i >= 0; i--) {
        if (maxValue == 0) break;
        if (input[maxIndex] > input[i] && result[i] == maxValue - 1) {
            output.push(input[i]);
            maxValue--;
        }
    }
    output.reverse();
    return output;
}
```

</section>
