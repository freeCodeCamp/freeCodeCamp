---
id: 5
localeTitle: 5900f38b1000cf542c50fe9e
challengeType: 5
title: 'Problem 31: Coin sums'
---

## Description
<section id='description'> 
En Inglaterra, la moneda se compone de libras, £ y peniques, p, y hay ocho monedas en circulación general: 
1p, 2p, 5p, 10p, 20p, 50p, £ 1 (100p) y £ 2 (200p ). 
Es posible hacer £ 2 de la siguiente manera: 
1 × £ 1 + 1 × 50p + 2 × 20p + 1 × 5p + 1 × 2p + 3 × 1p 
¿De cuántas maneras diferentes se pueden hacer £ (n) utilizando cualquier cantidad de monedas? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>coinSums(50)</code> debe devolver 451.
    testString: 'assert(coinSums(50) == 451, "<code>coinSums(50)</code> should return 451.");'
  - text: <code>coinSums(100)</code> debe devolver 4563.
    testString: 'assert(coinSums(100) == 4563, "<code>coinSums(100)</code> should return 4563.");'
  - text: <code>coinSums(150)</code> debe devolver 21873.
    testString: 'assert(coinSums(150) == 21873, "<code>coinSums(150)</code> should return 21873.");'
  - text: <code>coinSums(200)</code> debe devolver 73682.
    testString: 'assert(coinSums(200) == 73682, "<code>coinSums(200)</code> should return 73682.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function coinSums(n) {
  // Good luck!
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
