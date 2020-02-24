---
id: 5900f48d1000cf542c50ffa0
challengeType: 5
isHidden: false
title: 'Problem 289: Eulerian Cycles'
forumTopicId: 301940
---

## Description
<section id='description'>
Let C(x,y) be a circle passing through the points (x, y), (x, y+1), (x+1, y) and (x+1, y+1).

For positive integers m and n, let E(m,n) be a configuration which consists of the m·n circles:
{ C(x,y): 0 ≤ x < m, 0 ≤ y < n, x and y are integers }

An Eulerian cycle on E(m,n) is a closed path that passes through each arc exactly once.
Many such paths are possible on E(m,n), but we are only interested in those which are not self-crossing:
A non-crossing path just touches itself at lattice points, but it never crosses itself.

The image below shows E(3,3) and an example of an Eulerian non-crossing path.

Let L(m,n) be the number of Eulerian non-crossing paths on E(m,n).
For example, L(1,2) = 2, L(2,2) = 37 and L(3,3) = 104290.

Find L(6,10) mod 1010.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler289()</code> should return 6567944538.
    testString: assert.strictEqual(euler289(), 6567944538);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler289() {
  // Good luck!
  return true;
}

euler289();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
