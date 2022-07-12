---
id: 5900f3871000cf542c50fe9a
title: 'Problema 27: Primi quadratici'
challengeType: 1
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Eulero ha scoperto la notevole formula quadratica:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

Si scopre che la formula produrrà 40 primi per i valori interi consecutivi $0 \\le n \\le 39$. Tuttavia, quando $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ è divisibile per 41, e quando $n = 41, 41^2 + 41 + 41 $ è chiaramente divisibile per 41.

Si è scoperta l'incredibile formula $n^2 - 79n + 1601$ che produce 80 primi per i valori consecutivi $0 \\le n \\le 79$. Il prodotto dei coefficienti, −79 e 1601, è −126479.

Considerando le quadratiche della forma:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, dove $|a| < range$ e $|b| \le range$<br>
  dove $|n|$ è il valore assoluto di $n$<br>
  ad esempio $|11| = 11$ e $|-4| = 4$<br>
</div>

Trova il prodotto dei coefficienti, $a$ e $b$ per l'espressione quadratica che produce il numero massimo di primi per valori consecutivi di $n$, a partire da $n = 0$.

# --hints--

`quadraticPrimes(200)` dovrebbe restituire un numero.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` dovrebbe restituire -4925.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` dovrebbe restituire -18901.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` dovrebbe restituire -43835.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` dovrebbe restituire -59231.

```js
assert(quadraticPrimes(1000) == -59231);
```

# --seed--

## --seed-contents--

```js
function quadraticPrimes(range) {

  return range;
}

quadraticPrimes(1000);
```

# --solutions--

```js
// solution required
```
