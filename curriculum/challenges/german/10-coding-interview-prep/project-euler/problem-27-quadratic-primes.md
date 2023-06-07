---
id: 5900f3871000cf542c50fe9a
title: 'Problem 27: Quadratische Primzahlen'
challengeType: 1
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Euler entdeckte die bemerkenswerte quadratische Formel:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

Er stellt sich heraus, dass die Formel 40 Primzahlen für die aufeinanderfolgenden ganzzahligen Werte $0 \\le n \\le 39$ ergibt. Wenn $n = 40 ist, ist jedoch 40^2 + 40 + 41 = 40(40 + 1) + 41$ durch 41 teilbar, und wenn $n = 41 ist, ist 41^2 + 41 + 41$ eindeutig durch 41 teilbar.

Die unglaubliche Formel $n^2 - 79n + 1601$ wurde entdeckt, die 80 Primzahlen für die aufeinanderfolgenden Werte $0 \\le n \\le 79$ liefert. Das Produkt der Koeffizienten -79 und 1601 ist -126479.

Betrachtet man Quadratzahlen der Form:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, wobei $|a| < range$ and $|b| \le range$<br>
  wobei $|n|$ der Modulus/Absolutwert von $n$ ist<br>
  e.g. $|11| = 11$ and $|-4| = 4$<br>
</div>

Finde das Produkt der Koeffizienten $a$ und $b$ für den quadratischen Ausdruck, der die maximale Anzahl von Primzahlen für aufeinanderfolgende Werte von $n$, beginnend mit $n = 0$, ergibt.

# --hints--

`quadraticPrimes(200)` sollte eine Zahl zurückgeben.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` sollte -4925 zurückgeben.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` sollte -18901 zurückgeben.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` sollte -43835 zurückgeben.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` sollte -59231 zurückgeben.

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
