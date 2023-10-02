---
id: 5a23c84252665b21eecc7e03
title: Desviación estándar acumulada
challengeType: 1
forumTopicId: 302240
dashedName: cumulative-standard-deviation
---

# --description--

Suponiendo que la población total de interés es de ocho estudiantes de una clase en particular. Para un conjunto finito de números, la desviación del estándar de población se encuentra tomando la raíz cuadrada del promedio de las desviaciones cuadradas de los valores restados de su valor medio. Las marcas de una clase de ocho estudiantes (es decir, una población estadística) son los siguientes ocho valores:

$2, 4, 4, 4, 5, 5, 7, 9$

Estos ocho puntos de datos tienen la media (media) de 5:

$$\mu ={\frac {2+4+4+4+5+5+7+9}{8}}={\frac {40}{8}}=5$$

Primero, calcular las desviaciones de cada punto de datos de la media y cuadra el resultado de cada una:

| Desviaciones de cada dato | Cuadra el resultado  |
| ------------------------- | -------------------- |
| $(2-5)^{2}=(-3)^{2}=9$    | $(5-5)^{2}=0^{2}=0$  |
| $(4-5)^{2}=(-1)^{2}=1$    | $(5-5)^{2}=0^{2}=0$  |
| $(4-5)^{2}=(-1)^{2}=1$    | $(7-5)^{2}=2^{2}=4$  |
| $(4-5)^{2}=(-1)^{2}=1$    | $(9-5)^{2}=4^{2}=16$ |

La variación es la media de estos valores:

$$\sigma ^{2}={\frac {9+1+1+1+0+0+4+16}{8}}={\frac {32}{8}}=4$$

y la desviación del estándar de población es igual a la raíz cuadrada de la varianza:

$$\sigma ={\sqrt {4}}=2$$

Escriba una función que tome una matríz de números como parámetros y devuelva la <a href="https://rosettacode.org/wiki/Standard_deviation" target="_blank" rel="noopener noreferrer nofollow"> desviación estándar</a> de las series.

# --hints--

`standardDeviation` debe ser una función.

```js
assert(typeof standardDeviation == 'function');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` debe devolver un número.

```js
assert(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) == 'number');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` debe devolver `2`.

```js
assert.equal(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
```

`standardDeviation([600, 470, 170, 430, 300])` debe devolver `147.323`.

```js
assert.equal(standardDeviation([600, 470, 170, 430, 300]), 147.323);
```

`standardDeviation([75, 83, 96, 100, 121, 125])` debe devolver `18.239`.

```js
assert.equal(standardDeviation([75, 83, 96, 100, 121, 125]), 18.239);
```

`standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])` debe devolver `16.87`.

```js
assert.equal(
  standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]),
  16.87
);
```

`standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])` debe devolver `22.631`.

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
