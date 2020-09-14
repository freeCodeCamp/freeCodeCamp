---
id: 5900f4c41000cf542c50ffd6
challengeType: 5
title: 'Problem 343: Fractional Sequences'
forumTopicId: 302002
---

## Description
<section id='description'>
For any positive integer k, a finite sequence ai of fractions xi/yi is defined by:
a1 = 1/k and
ai = (xi-1+1)/(yi-1-1) reduced to lowest terms for i>1.
When ai reaches some integer n, the sequence stops. (That is, when yi=1.)
Define f(k) = n.
For example, for k = 20:



1/20 → 2/19 → 3/18 = 1/6 → 2/5 → 3/4 → 4/3 → 5/2 → 6/1 = 6



So f(20) = 6.



Also f(1) = 1, f(2) = 2, f(3) = 1 and Σf(k3) = 118937 for 1 ≤ k ≤ 100.



Find Σf(k3) for 1 ≤ k ≤ 2×106.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler343()</code> should return 269533451410884200.
    testString: assert.strictEqual(euler343(), 269533451410884200);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler343() {

  return true;
}

euler343();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
