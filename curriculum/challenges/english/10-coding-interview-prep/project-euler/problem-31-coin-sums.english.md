---
id: 5900f38b1000cf542c50fe9e
challengeType: 5
title: 'Problem 31: Coin sums'
forumTopicId: 301965
---

## Description
<section id='description'>

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

<div style='margin-left: 4em;'>1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).</div>

It is possible to make £2 in the following way:

<div style='margin-left: 4em;'>1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p</div>

How many different ways can `n` pence be made using any number of coins?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>coinSums(50)</code> should return a number.
    testString: assert(typeof coinSums(50) === 'number');
  - text: <code>coinSums(50)</code> should return 451.
    testString: assert(coinSums(50) == 451);
  - text: <code>coinSums(100)</code> should return 4563.
    testString: assert(coinSums(100) == 4563);
  - text: <code>coinSums(150)</code> should return 21873.
    testString: assert(coinSums(150) == 21873);
  - text: <code>coinSums(200)</code> should return 73682.
    testString: assert(coinSums(200) == 73682);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function coinSums(n) {

  return n;
}

coinSums(200);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const coinSums = (n) => {
  const getWays = (n, m=8, c=[1, 2, 5, 10, 20, 50, 100, 200]) => {
    if (n === 0) return 1;
    if (m === 0 || n < 0) return 0;
    return getWays(n - c[m - 1], m, c) + getWays(n, m - 1, c);
  };
  return getWays(n);
};
```

</section>
