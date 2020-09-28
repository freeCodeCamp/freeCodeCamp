---
id: 5900f5141000cf542c510027
challengeType: 5
title: 'Problem 423: Consecutive die throws'
forumTopicId: 302093
localeTitle: 'Задача 423: последовательные броски'
---

## Description
<section id='description'>
Let n be a positive integer.
A 6-sided die is thrown n times. Let c be the number of pairs of consecutive throws that give the same value.

For example, if n = 7 and the values of the die throws are (1,1,5,6,6,6,3), then the following pairs of consecutive throws give the same value:
(1,1,5,6,6,6,3)
(1,1,5,6,6,6,3)
(1,1,5,6,6,6,3)
Therefore, c = 3 for (1,1,5,6,6,6,3).

Define C(n) as the number of outcomes of throwing a 6-sided die n times such that c does not exceed π(n).1
For example, C(3) = 216, C(4) = 1290, C(11) = 361912500 and C(24) = 4727547363281250000.

Define S(L) as ∑ C(n) for 1 ≤ n ≤ L.
For example, S(50) mod 1 000 000 007 = 832833871.

Find S(50 000 000) mod 1 000 000 007.

1 π denotes the prime-counting function, i.e. π(n) is the number of primes ≤ n.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler423()</code> should return 653972374.
    testString: assert.strictEqual(euler423(), 653972374);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler423() {
  // Good luck!
  return true;
}

euler423();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
