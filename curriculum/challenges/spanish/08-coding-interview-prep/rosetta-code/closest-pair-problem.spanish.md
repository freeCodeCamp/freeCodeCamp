---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
challengeType: 5
videoUrl: ''
localeTitle: Problema de par más cercano
---

## Description
<section id="description"> Tarea: <p> Proporcione una función para encontrar los dos puntos más cercanos entre un conjunto de puntos dados en dos dimensiones, es decir, para resolver el problema del <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: problema de par de puntos más cercano">par de puntos más cercano</a> en el caso plano. </p><p> La solución directa es un algoritmo O (n <sup>2</sup> ) (que podemos llamar algoritmo de fuerza bruta); El pseudocódigo (utilizando índices) podría ser simplemente: </p><pre> bruteForceClosestPair de P (1), P (2), ... P (N)
si N &lt;2 entonces
  volver ∞
más
  minDistance ← | P (1) - P (2) |
  minPuntos ← {P (1), P (2)}
  foreach i ∈ [1, N-1]
    foreach j ∈ [i + 1, N]
      si | P (i) - P (j) | &lt;minDistance entonces
        MinDistance ← | P (i) - P (j) |
        minPuntos ← {P (i), P (j)}
      terminara si
    endfor
  endfor
  volver minDistance, minPoints
terminara si
</pre><p> Un mejor algoritmo se basa en el enfoque recursivo de divide y vencerás, como se explica también en <a href="https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case" title="wp: problema de par de puntos más cercano # Planar_case">el problema del par de puntos más cercanos de Wikipedia</a> , que es O (n log n); Un pseudocódigo podría ser: </p><pre> closestPair de (xP, yP)
  donde xP es P (1) ... P (N) ordenada por la coordenada x, y
  yP es P (1). P (N) ordenado por coordenada y (orden ascendente)
si N ≤ 3 entonces
  devolver los puntos más cercanos de xP utilizando el algoritmo de fuerza bruta
más
  xL ← puntos de xP de 1 a ⌈N / 2⌉
  xR ← puntos de xP de ⌈N / 2⌉ + 1 a N
  xm ← xP (⌈N / 2⌉) <sub>x</sub>
  yL ← {p ∈ yP: p <sub>x</sub> ≤ xm}
  yR ← {p ∈ yP: p <sub>x</sub> &gt; xm}
  (dL, pairL) ← closestPair de (xL, yL)
  (dR, pairR) ← closestPara de (xR, yR)
  (dmin, pairMin) ← (dR, pairR)
  si dL &lt;dR entonces
    (dmin, pairMin) ← (dL, pairL)
  terminara si
  yS ← {p ∈ yP: | xm - p <sub>x</sub> | &lt;dmin}
  nS ← número de puntos en yS
  (el más cercano, el par más cercano) ← (dmin, pairMin)
  para i de 1 a nS - 1
    k ← i + 1
    mientras que k ≤ nS y yS (k) <sub>y</sub> - yS (i) <sub>y</sub> &lt;dmin
      si | yS (k) - yS (i) | &lt;más cercano entonces
        (más cercano, par más cercano) ← (| yS (k) - yS (i) |, {yS (k), yS (i)})
      terminara si
      k ← k + 1
    al final
  endfor
  volver mas cercano, mas cercano par
terminara si
</pre> Referencias y lecturas adicionales: <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: problema de par de puntos más cercano">Par de problemas</a> <a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="enlace: http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">más cercano Par más cercano (McGill)</a> <a href="http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf" title="enlace: http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf">Par más cercano (UCSB)</a> <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="enlace: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Par más cercano (WUStL)</a> <a href="http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt" title="enlace: http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt">Par más cercano (IUPUI)</a> <p> Para la entrada, espere que el argumento sea una matriz de objetos (puntos) con los miembros <code>x</code> e <code>y</code> establecidos en números. Para la salida, devuelva un objeto que contenga los pares clave: valor para la <code>distance</code> y el <code>pair</code> (es decir, el par de dos puntos más cercanos). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getClosestPair</code> es una función.
    testString: 'assert(typeof getClosestPair === "function", "<code>getClosestPair</code> is a function.");'
  - text: La distancia debe ser la siguiente.
    testString: 'assert.equal(getClosestPair(points1).distance, answer1.distance, "Distance should be the following.");'
  - text: Los puntos deben ser los siguientes.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair, "Points should be the following.");'
  - text: La distancia debe ser la siguiente.
    testString: 'assert.equal(getClosestPair(points2).distance, answer2.distance, "Distance should be the following.");'
  - text: Los puntos deben ser los siguientes.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points2))).pair, answer2.pair, "Points should be the following.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const Point = function (x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};

function getClosestPair (pointsArr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
