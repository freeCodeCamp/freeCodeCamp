---
id: 5900f4761000cf542c50ff88
challengeType: 5
isHidden: false
title: 'Problem 265: Binary Circles'
forumTopicId: 301914
---

## Description
<section id='description'>
2N binary digits can be placed in a circle so that all the N-digit clockwise subsequences are distinct.

For N=3, two such circular arrangements are possible, ignoring rotations:


For the first arrangement, the 3-digit subsequences, in clockwise order, are: 000, 001, 010, 101, 011, 111, 110 and 100.

Each circular arrangement can be encoded as a number by concatenating the binary digits starting with the subsequence of all zeros as the most significant bits and proceeding clockwise. The two arrangements for N=3 are thus represented as 23 and 29:
00010111 2 = 23
00011101 2 = 29

Calling S(N) the sum of the unique numeric representations, we can see that S(3) = 23 + 29 = 52.

Find S(5).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler265()</code> should return 209110240768.
    testString: assert.strictEqual(euler265(), 209110240768);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler265() {
  // Good luck!
  return true;
}

euler265();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
