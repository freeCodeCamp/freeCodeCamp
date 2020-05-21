---
id: 5900f4db1000cf542c50ffee
challengeType: 5
isHidden: false
title: 'Problem 367: Bozo sort'
forumTopicId: 302028
---

## Description
<section id='description'>
Bozo sort, not to be confused with the slightly less efficient bogo sort, consists out of checking if the input sequence is sorted and if not swapping randomly two elements. This is repeated until eventually the sequence is sorted.


If we consider all permutations of the first 4 natural numbers as input the expectation value of the number of swaps, averaged over all 4! input sequences is 24.75.
The already sorted sequence takes 0 steps.


In this problem we consider the following variant on bozo sort.
If the sequence is not in order we pick three elements at random and shuffle these three elements randomly.
All 3!=6 permutations of those three elements are equally likely.
The already sorted sequence will take 0 steps.
If we consider all permutations of the first 4 natural numbers as input the expectation value of the number of shuffles, averaged over all 4! input sequences is 27.5.
Consider as input sequences the permutations of the first 11 natural numbers.
Averaged over all 11! input sequences, what is the expected number of shuffles this sorting algorithm will perform?


Give your answer rounded to the nearest integer.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler367()</code> should return 48271207.
    testString: assert.strictEqual(euler367(), 48271207);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler367() {
  // Good luck!
  return true;
}

euler367();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
