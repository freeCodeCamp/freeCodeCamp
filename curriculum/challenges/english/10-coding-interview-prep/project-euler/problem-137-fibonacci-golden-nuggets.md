---
id: 5900f3f51000cf542c50ff08
challengeType: 5
title: 'Problem 137: Fibonacci golden nuggets'
forumTopicId: 301765
---

## Description
<section id='description'>
Consider the infinite polynomial series AF(x) = xF1 + x2F2 + x3F3 + ..., where Fk is the kth term in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ... ; that is, Fk = Fk−1 + Fk−2, F1 = 1 and F2 = 1.
For this problem we shall be interested in values of x for which AF(x) is a positive integer.
Surprisingly AF(1/2)
 = 
(1/2).1 + (1/2)2.1 + (1/2)3.2 + (1/2)4.3 + (1/2)5.5 + ...

 = 
1/2 + 1/4 + 2/8 + 3/16 + 5/32 + ...

 = 
2
The corresponding values of x for the first five natural numbers are shown below.

xAF(x)
√2−11
1/22
(√13−2)/33
(√89−5)/84
(√34−3)/55

We shall call AF(x) a golden nugget if x is rational, because they become increasingly rarer; for example, the 10th golden nugget is 74049690.
Find the 15th golden nugget.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler137()</code> should return 1120149658760.
    testString: assert.strictEqual(euler137(), 1120149658760);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler137() {

  return true;
}

euler137();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
