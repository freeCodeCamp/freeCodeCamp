---
id: 5a23c84252665b21eecc7e03
title: Kumulierte Standardabweichung
challengeType: 1
forumTopicId: 302240
dashedName: cumulative-standard-deviation
---

# --description--

Suppose that the entire population of interest is eight students in a particular class. For a finite set of numbers, the population standard deviation is found by taking the square root of the average of the squared deviations of the values subtracted from their average value. The marks of a class of eight students (that is, a statistical population) are the following eight values:

$2, 4, 4, 4, 5, 5, 7, 9$

Diese acht Datenpunkte haben den Mittelwert (Durchschnitt) von 5:

$$\mu ={\frac {2+4+4+4+5+5+7+9}{8}}={\frac {40}{8}}=5$$

Berechne zunächst die Abweichungen jedes Datenpunkts vom Mittelwert und quadriere das Ergebnis jedes Punktes:

| Deviations of each data | Quadriere das Ergebnis |
| ----------------------- | ---------------------- |
| $(2-5)^{2}=(-3)^{2}=9$  | $(5-5)^{2}=0^{2}=0$    |
| $(4-5)^{2}=(-1)^{2}=1$  | $(5-5)^{2}=0^{2}=0$    |
| $(4-5)^{2}=(-1)^{2}=1$  | $(7-5)^{2}=2^{2}=4$    |
| $(4-5)^{2}=(-1)^{2}=1$  | $(9-5)^{2}=4^{2}=16$   |

Die Varianz ist der Mittelwert dieser Werte:

$$\sigma ^{2}={\frac {9+1+1+1+0+0+4+16}{8}}={\frac {32}{8}}=4$$

und die Standardabweichung der Bevölkerung ist gleich der Quadratwurzel der Varianz:

$$\sigma ={\sqrt {4}}=2$$

Schreibe eine Funktion, die ein Array an Zahlen als Parameter verwendet und die <a href="https://rosettacode.org/wiki/Standard_deviation" target="_blank" rel="noopener noreferrer nofollow">Standardabweichung</a> der Reihe zurückgibt.

# --hints--

`standardDeviation` sollte eine Funktion sein.

```js
assert(typeof standardDeviation == 'function');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` sollte eine Zahl zurückgeben.

```js
assert(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) == 'number');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` sollte `2` zurückgeben.

```js
assert.equal(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
```

`standardDeviation([600, 470, 170, 430, 300])` sollte `147.323` zurückgeben.

```js
assert.equal(standardDeviation([600, 470, 170, 430, 300]), 147.323);
```

`standardDeviation([75, 83, 96, 100, 121, 125])` sollte `18.239`.

```js
assert.equal(standardDeviation([75, 83, 96, 100, 121, 125]), 18.239);
```

`standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])` sollte `16.87` zurückgeben.

```js
assert.equal(
  standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]),
  16.87
);
```

`standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])` sollte `22.631` zurückgeben.

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
