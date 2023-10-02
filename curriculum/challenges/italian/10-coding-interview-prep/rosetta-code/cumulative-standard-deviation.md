---
id: 5a23c84252665b21eecc7e03
title: Deviazione cumulativa standard
challengeType: 1
forumTopicId: 302240
dashedName: cumulative-standard-deviation
---

# --description--

Supponi che l'intera popolazione di interesse sia di otto studenti in una certa classe. Per un insieme finito di numeri, la deviazione standard della popolazione si trova prendendo la radice quadrata della media dei quadrati delle differenze tra i valori e il loro valore medio. I voti di una classe di otto studenti (cioè, la popolazione statistica) sono i seguenti otto valori:

$2, 4, 4, 4, 5, 5, 7, 9$

Questi otto valori hanno la media di 5:

$$\mu ={\frac {2+4+4+4+5+5+7+9}{8}}={\frac {40}{8}}=5$$

Prima, calcola le deviazioni di ogni dato dalla media e fai il quadrato del risultato di ognuno:

| Deviazione di ogni dato | Quadrato del risultato |
| ----------------------- | ---------------------- |
| $(2-5)^{2}=(-3)^{2}=9$  | $(5-5)^{2}=0^{2}=0$    |
| $(4-5)^{2}=(-1)^{2}=1$  | $(5-5)^{2}=0^{2}=0$    |
| $(4-5)^{2}=(-1)^{2}=1$  | $(7-5)^{2}=2^{2}=4$    |
| $(4-5)^{2}=(-1)^{2}=1$  | $(9-5)^{2}=4^{2}=16$   |

La varianza è la media di questi valori:

$$\sigma ^{2}={\frac {9+1+1+1+0+0+4+16}{8}}={\frac {32}{8}}=4$$

e la deviazione standard della popolazione è uguale al quadrato della varianza:

$$\sigma ={\sqrt {4}}=2$$

Scrivi una funzione che prende un array di numeri come parametro e restituisce la <a href="https://rosettacode.org/wiki/Standard_deviation" target="_blank" rel="noopener noreferrer nofollow">deviazione standard</a> della serie.

# --hints--

`standardDeviation` dovrebbe essere una funzione.

```js
assert(typeof standardDeviation == 'function');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` dovrebbe restituire un numero.

```js
assert(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) == 'number');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` dovrebbe restituire `2`.

```js
assert.equal(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
```

`standardDeviation([600, 470, 170, 430, 300])` dovrebbe restituire `147.323`.

```js
assert.equal(standardDeviation([600, 470, 170, 430, 300]), 147.323);
```

`standardDeviation([75, 83, 96, 100, 121, 125])` dovrebbe restituire `18.239`.

```js
assert.equal(standardDeviation([75, 83, 96, 100, 121, 125]), 18.239);
```

`standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])` dovrebbe restituire `16.87`.

```js
assert.equal(
  standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]),
  16.87
);
```

`standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])` dovrebbe restituire `22.631`.

```js
assert.equal(
  standardDeviation([
    271,
    354,
    296,
    301,
    333,
    326,
    285,
    298,
    327,
    316,
    287,
    314
  ]),
  22.631
);
```

# --seed--

## --seed-contents--

```js
function standardDeviation(arr) {

}
```

# --solutions--

```js
function standardDeviation(arr) {
  var sum = 0,
    sum_sq = 0,
    n = arr.length;
  arr.forEach(function(e) {
    sum += e;
    sum_sq += e * e;
  });

  var std_dev = Math.sqrt(sum_sq / n - Math.pow(sum / n, 2));
  return Math.round(std_dev * 1000) / 1000;
}
```
