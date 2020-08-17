---
id: 5900f5411000cf542c510054
challengeType: 5
isHidden: false
title: 'Problem 468: Smooth divisors of binomial coefficients'
forumTopicId: 302143
---

## Description
<section id='description'>
An integer is called B-smooth if none of its prime factors is greater than B.

Let SB(n) be the largest B-smooth divisor of n.
Examples:
S1(10) = 1
S4(2100) = 12
S17(2496144) = 5712

Define F(n) = ∑1≤B≤n ∑0≤r≤n SB(C(n,r)). Here, C(n,r) denotes the binomial coefficient.
Examples:
F(11) = 3132
F(1 111) mod 1 000 000 993 = 706036312
F(111 111) mod 1 000 000 993 = 22156169

Find F(11 111 111) mod 1 000 000 993.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler468()</code> should return 852950321.
    testString: assert.strictEqual(euler468(), 852950321);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler468() {
  // Good luck!
  return true;
}

euler468();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
