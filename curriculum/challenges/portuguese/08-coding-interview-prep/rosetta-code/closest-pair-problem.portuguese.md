---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
challengeType: 5
videoUrl: ''
localeTitle: Problema de par mais próximo
---

## Description
<section id="description"> Tarefa: <p> Forneça uma função para encontrar os dois pontos mais próximos entre um conjunto de pontos dados em duas dimensões, ou seja, para resolver o problema do <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Problema de par de pontos mais próximo">par de pontos mais Próximo</a> no caso planar. </p><p> A solução direta é um algoritmo O (n <sup>2</sup> ) (que podemos chamar de algoritmo de força bruta); o pseudo-código (usando índices) poderia ser simplesmente: </p><pre> bruteForceClosestPair de P (1), P (2), ... P (N)
se N &lt;2 então
  retorno ∞
outro
  minDistância ← | P (1) - P (2) |
  minPoints ← {P (1), P (2)}
  foreach i ∈ [1, N-1]
    foreach j ∈ [i + 1, N]
      if | P (i) - P (j) | &lt;minDistance então
        minDistância ← | P (i) - P (j) |
        minPoints ← {P (i), P (j)}
      fim se
    endfor
  endfor
  return minDistance, minPoints
fim se
</pre><p> Um algoritmo melhor é baseado na abordagem recursiva divide &amp; conquer, como explicado também no <a href="https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case" title="wp: Problema de par de pontos mais próximo # Planar_case">par de pontos mais próximo da Wikipedia</a> , que é O (n log n); um pseudo-código poderia ser: </p><pre> paradeiro de (xP, yP)
  onde xP é P (1). P (N) ordenada por coordenada xe
  yP é P (1) .. P (N) classificado por coordenada y (ordem crescente)
se N ≤ 3 então
  Retorna os pontos mais próximos do xP usando o algoritmo de força bruta
outro
  xL ← pontos de xP de 1 a ⌈N / 2⌉
  xR ← pontos de xP de ⌈N / 2⌉ + 1 a N
  xm ← xP (⌈N / 2⌉) <sub>x</sub>
  yL ← {p yp: p <sub>x</sub> ≤ xm}
  y r ← {p yp: p <sub>x</sub> &gt; xm}
  (dL, parL) ← mais próximoPara de (xL, yL)
  (dR, pairR) ← mais proximoPara (xR, yR)
  (dmin, parMin) ← (dR, pairR)
  se d &lt;dR então
    (dmin, parMin) ← (dL, parL)
  fim se
  yS ← {p yp: | xm - p <sub>x</sub> | &lt;dmin}
  nS ← número de pontos em yS
  (mais próximo, mais próximo) ← (dmin, pairMin)
  para i de 1 a ns - 1
    k ← i + 1
    enquanto k ≤ nS e yS (k) <sub>y</sub> - yS (i) <sub>y</sub> &lt;dmin
      if | yS (k) - yS (i) | &lt;mais próximo então
        (mais próximo, mais próximo) ← (| yS (k) - yS (i) |, {yS (k), yS (i)})
      fim se
      k ← k + 1
    ao final
  endfor
  voltar mais próximo, mais próximo
fim se
</pre> Referências e outras leituras: <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Problema de par de pontos mais próximo">Problema de par de pontos</a> <a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="link: http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">mais próximo Par mais próximo (McGill)</a> <a href="http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf" title="link: http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf">Par mais próximo (UCSB)</a> <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="link: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Par mais próximo (WUStL)</a> <a href="http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt" title="link: http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt">Par mais próximo (IUPUI)</a> <p> Para a entrada, esperar o argumento a ser uma matriz de pontos (objectos) com <code>x</code> e <code>y</code> membros do conjunto de números. Para a saída, retorne um objeto contendo os pares chave: valor para <code>distance</code> e <code>pair</code> (isto é, o par de dois pontos mais próximos). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getClosestPair</code> é uma função.
    testString: 'assert(typeof getClosestPair === "function", "<code>getClosestPair</code> is a function.");'
  - text: Distância deve ser o seguinte.
    testString: 'assert.equal(getClosestPair(points1).distance, answer1.distance, "Distance should be the following.");'
  - text: Pontos devem ser os seguintes.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair, "Points should be the following.");'
  - text: Distância deve ser o seguinte.
    testString: 'assert.equal(getClosestPair(points2).distance, answer2.distance, "Distance should be the following.");'
  - text: Pontos devem ser os seguintes.
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
