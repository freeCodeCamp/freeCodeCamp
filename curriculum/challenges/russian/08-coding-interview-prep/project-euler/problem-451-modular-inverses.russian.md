---
id: 5900f5311000cf542c510042
challengeType: 5
title: 'Problem 451: Modular inverses'
forumTopicId: 302124
localeTitle: 'Задача 451: Модульные инверсии'
---

## Description
<section id='description'>
Consider the number 15.
There are eight positive numbers less than 15 which are coprime to 15: 1, 2, 4, 7, 8, 11, 13, 14.
The modular inverses of these numbers modulo 15 are: 1, 8, 4, 13, 2, 11, 7, 14
because
1*1 mod 15=1
2*8=16 mod 15=1
4*4=16 mod 15=1
7*13=91 mod 15=1
11*11=121 mod 15=1
14*14=196 mod 15=1

Let I(n) be the largest positive number m smaller than n-1 such that the modular inverse of m modulo n equals m itself.
So I(15)=11.
Also I(100)=51 and I(7)=1.

Find ∑I(n) for 3≤n≤2·107
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler451()</code> should return 153651073760956.
    testString: assert.strictEqual(euler451(), 153651073760956);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler451() {
  // Good luck!
  return true;
}

euler451();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
