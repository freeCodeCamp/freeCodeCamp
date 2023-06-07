---
id: 5900f38b1000cf542c50fe9e
title: 'Problema 31: Soma de moedas'
challengeType: 1
forumTopicId: 301965
dashedName: problem-31-coin-sums
---

# --description--

Na Inglaterra, a moeda é composta pela libra (£) e pelos pence. No geral, há oito valores em circulação:

<div style='margin-left: 4em;'>1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) e £2 (200p).</div>

É possível fazer £2 da seguinte maneira:

<div style='margin-left: 4em;'>1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p</div>

De quantas maneiras `n` pence podem ser feitos utilizando os valores mencionados?

# --hints--

`coinSums(50)` deve retornar um número.

```js
assert(typeof coinSums(50) === 'number');
```

`coinSums(50)` deve retornar 451.

```js
assert(coinSums(50) == 451);
```

`coinSums(100)` deve retornar 4563.

```js
assert(coinSums(100) == 4563);
```

`coinSums(150)` deve retornar 21873.

```js
assert(coinSums(150) == 21873);
```

`coinSums(200)` deve retornar 73682.

```js
assert(coinSums(200) == 73682);
```

# --seed--

## --seed-contents--

```js
function coinSums(n) {

  return n;
}

coinSums(200);
```

# --solutions--

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
