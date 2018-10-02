---
id: 5900f3881000cf542c50fe9b
challengeType: 5
title: 'Problem 28: Number spiral diagonals'
---

## Description
<section id='description'>
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
It can be verified that the sum of the numbers on the diagonals is 101.
What is the sum of the numbers on the diagonals in a n by n spiral formed in the same way?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>spiralDiagonals(101)</code> should return 692101.
  testString: 'assert(spiralDiagonals(101) == 692101, ''<code>spiralDiagonals(101)</code> should return 692101.'');'
- text: <code>spiralDiagonals(303)</code> should return 18591725.
  testString: 'assert(spiralDiagonals(303) == 18591725, ''<code>spiralDiagonals(303)</code> should return 18591725.'');'
- text: <code>spiralDiagonals(505)</code> should return 85986601.
  testString: 'assert(spiralDiagonals(505) == 85986601, ''<code>spiralDiagonals(505)</code> should return 85986601.'');'
- text: <code>spiralDiagonals(1001)</code> should return 669171001.
  testString: 'assert(spiralDiagonals(1001) == 669171001, ''<code>spiralDiagonals(1001)</code> should return 669171001.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spiralDiagonals(n) {
  // Good luck!
  return n;
}

spiralDiagonals(1001);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const spiralDiagonals = (n) => {
  const Sn2 = (n) => {
    return n*(n+1)*(2*n+1)/6;
  };
  const Sn = (n) => {
    return n*(n+1)/2;
  };
  let sum = (Sn2(n-1) + Sn(n-1) + n-1) + (Math.floor(n/2) + Sn2(n));
  return sum;
};
```

</section>
