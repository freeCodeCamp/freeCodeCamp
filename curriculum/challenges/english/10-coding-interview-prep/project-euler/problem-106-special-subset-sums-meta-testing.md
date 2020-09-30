---
id: 5900f3d71000cf542c50fee9
challengeType: 5
title: 'Problem 106: Special subset sums: meta-testing'
forumTopicId: 301730
---

## Description
<section id='description'>
Let S(A) represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:
S(B) ≠ S(C); that is, sums of subsets cannot be equal.
If B contains more elements than C then S(B) > S(C).
For this problem we shall assume that a given set contains n strictly increasing elements and it already satisfies the second rule.
Surprisingly, out of the 25 possible subset pairs that can be obtained from a set for which n = 4, only 1 of these pairs need to be tested for equality (first rule). Similarly, when n = 7, only 70 out of the 966 subset pairs need to be tested.
For n = 12, how many of the 261625 subset pairs that can be obtained need to be tested for equality?
NOTE: This problem is related to Problem 103 and Problem 105.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler106()</code> should return 21384.
    testString: assert.strictEqual(euler106(), 21384);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler106() {

  return true;
}

euler106();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
