---
id: 5900f49d1000cf542c50ffaf
challengeType: 5
title: 'Problem 304: Primonacci'
forumTopicId: 301958
---

## Description
<section id='description'>
For any positive integer n the function next_prime(n) returns the smallest prime p  such that p>n.


The sequence a(n) is defined by:
a(1)=next_prime(1014) and a(n)=next_prime(a(n-1)) for n>1.


The fibonacci sequence f(n) is defined by:
f(0)=0, f(1)=1 and f(n)=f(n-1)+f(n-2) for n>1.


The sequence b(n) is defined as f(a(n)).


Find ∑b(n) for 1≤n≤100 000.
Give your answer mod 1234567891011.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler304()</code> should return 283988410192.
    testString: assert.strictEqual(euler304(), 283988410192);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler304() {

  return true;
}

euler304();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
