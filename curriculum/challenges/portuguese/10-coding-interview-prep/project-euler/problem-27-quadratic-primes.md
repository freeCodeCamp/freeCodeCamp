---
id: 5900f3871000cf542c50fe9a
title: 'Problema 27: Primos quadráticos'
challengeType: 1
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Euler descobriu a notável fórmula do segundo grau:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

Essa fórmula vai produzir 40 números primos para os valores inteiros consecutivos $0 \\le n \\le 39$. No entanto, quando temos $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ é divisível por 41, e certamente quando temos $n = 41, 41^2 + 41 + 41$ é claramente divisível por 41.

Uma fórmula incrível foi descoberta, $n^2 - 79n + 1601$, que produz 80 primos para os valores de $0 \\le n \\le 79$ consecutivos. O produto dos coeficientes, −79 e 1601, é -126479.

Considerando os quadráticos da fórmula:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, onde $➲ a├< range$ e $├b├\le range$<br>
  onde $├n├$ é o valor modulo/absoluto de $n$<br>
  exemplo: $➲ 11├= 11$ e $├-4^\\= 4$<br>
</div>

Encontre o produto dos coeficientes, $a$ e $b$, para a expressão do segundo grau que produz o número máximo de primos para valores consecutivos de $n$, começando com $n = 0$.

# --hints--

`quadraticPrimes(200)` deve retornar um número.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` deve retornar -4925.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` deve retornar -18901.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` deve retornar -43835.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` deve retornar -59231.

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
