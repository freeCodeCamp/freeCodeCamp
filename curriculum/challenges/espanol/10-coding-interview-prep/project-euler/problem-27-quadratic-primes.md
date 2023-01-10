---
id: 5900f3871000cf542c50fe9a
title: 'Problema 27: Primos cuadráticos'
challengeType: 1
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Euler descubrió la notable fórmula cuadrática:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

Esta fórmula genera 40 primos para todos los enteros consecutivos $0 \\le n \\le 39$. Sin embargo, cuando $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ es divisible por 41, y si $n = 41, 41^2 + 41 + 41$ también es, claramente, divisible por 41.

La increíble fórmula $n^2 - 79n + 1601$ genera 80 primos para los valores consecutivos $0 \\le n \\le 79$. El producto de los coeficientes, −79 y 1601, es −126479.

Considerando polinomios cuadráticos de la forma:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, donde $|a| < intervalo$ y $|b| \le intervalo$<br>
  donde $|n|$ es el valor absoluto de $n$<br>
  e.g. $|11| = 11$ y $|-4| = 4$<br>
</div>

Encuentra el producto de los coeficientes, $a$ and $b$, de la expresión cuadrática que genera el máximo número de primos para valores consecutivos de $n$, comenzando por $n = 0$.

# --hints--

`quadraticPrimes(200)` debe devolver un número.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` debe devolver -4925.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` debe devolver -18901.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` debe devolver -43835.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` debe devolver -59231.

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
