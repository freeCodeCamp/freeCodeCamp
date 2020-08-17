---
id: 5900f4f81000cf542c51000b
challengeType: 5
isHidden: false
title: 'Problem 396: Weak Goodstein sequence'
forumTopicId: 302061
---

## Description
<section id='description'>
For any positive integer n, the nth weak Goodstein sequence {g1, g2, g3, ...} is defined as:
 g1 = n
 for k > 1, gk is obtained by writing gk-1 in base k, interpreting it as a base k + 1 number, and subtracting 1.

The sequence terminates when gk becomes 0.


For example, the 6th weak Goodstein sequence is {6, 11, 17, 25, ...}:
 g1 = 6.
 g2 = 11 since 6 = 1102, 1103 = 12, and 12 - 1 = 11.
 g3 = 17 since 11 = 1023, 1024 = 18, and 18 - 1 = 17.
 g4 = 25 since 17 = 1014, 1015 = 26, and 26 - 1 = 25.

and so on.


It can be shown that every weak Goodstein sequence terminates.


Let G(n) be the number of nonzero elements in the nth weak Goodstein sequence.
It can be verified that G(2) = 3, G(4) = 21 and G(6) = 381.
It can also be verified that ΣG(n) = 2517 for 1 ≤ n < 8.


Find the last 9 digits of ΣG(n) for 1 ≤ n < 16.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler396()</code> should return 173214653.
    testString: assert.strictEqual(euler396(), 173214653);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler396() {
  // Good luck!
  return true;
}

euler396();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
