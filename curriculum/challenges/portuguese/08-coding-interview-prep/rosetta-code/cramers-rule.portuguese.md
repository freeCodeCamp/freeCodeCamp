---
title: Cramer's rule
id: 59713da0a428c1a62d7db430
challengeType: 5
videoUrl: ''
localeTitle: Regra de Cramer
---

## Description
<section id="description"><p> Na <a href="https://en.wikipedia.org/wiki/linear algebra" title="wp: álgebra linear">álgebra linear</a> , <a href="https://en.wikipedia.org/wiki/Cramer&#x27;s rule" title="wp: regra de Cramer">a regra de Cramer</a> é uma fórmula explícita para a solução de um <a href="https://en.wikipedia.org/wiki/system of linear equations" title="wp: sistema de equações lineares">sistema de equações lineares</a> com tantas equações quanto as incógnitas, válidas sempre que o sistema tiver uma solução única. Ele expressa a solução em termos dos determinantes da matriz de coeficientes (quadrados) e das matrizes obtidas a partir dela substituindo uma coluna pelo vetor dos lados direitos das equações. </p><p> Dado </p><p><big></big></p><p> <big>$ \ left \ {\ begin {matrix} a_1x + b_1y + c_1z &amp; = {\ color {red} d_1} \\ a_2x + b_2y + c_2z &amp; = {\ color {red} d_2} \\ a_3x + b_3y + c_3z &amp; = {\ cor {vermelho} d_3} \ end {matrix} \ right. $</big> </p><p> que em formato de matriz é </p><p><big></big></p><p> <big>$ \ begin {bmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ final {bmatrix} \ begin {bmatrix} x \\ y \\ z \ end {bmatrix} = \ begin {bmatrix} {\ color {red} d_1} \\ {\ color {red} d_2} \\ {\ color {red} d_3} \ end {bmatrix}. $</big> </p><p> Em seguida, os valores de $ x, y $ e $ z $ podem ser encontrados da seguinte forma: </p><p><big></big></p><p> <big>$ x = \ frac {\ begin {vmatrix} {\ color {red} d_1} &amp; b_1 &amp; c_1 \\ {\ color {red} d_2} &amp; b_2 &amp; c_2 \\ {\ color {red} d_3} &amp; b_3 &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ fim {vmatrix}}, \ quad y = \ frac {\ begin {vmatrix } a_1 &amp; {\ color {red} d_1} &amp; c_1 \\ a_2 &amp; {\ color {red} d_2} &amp; c_2 \\ a_3 &amp; {\ color {red} d_3} &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ final {vmatrix}}, \ text {e} z = \ frac {\ begin {vmatrix} a_1 &amp; b_1 &amp; {\ cor {vermelho} d_1} \\ a_2 &amp; b_2 &amp; {\ color {red} d_2} \\ a_3 &amp; b_3 &amp; {\ color {red} d_3} \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}.</big> </p> Tarefa <p> Dado o seguinte sistema de equações: </p><p> <big>$ \ begin {casos} 2w-x + 5y + z = -3 \\ 3w + 2x + 2y-6z = -32 \\ w + 3x + 3y-z = -47 \\ 5w-2x-3y + 3z = 49 \\ \ end {casos} $</big> </p><p> resolva por <big>$ w $, $ x $, $ y $</big> e <big>$ z $</big> , usando a regra de Cramer. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>cramersRule</code> é uma função.
    testString: 'assert(typeof cramersRule === "function", "<code>cramersRule</code> is a function.");'
  - text: '<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> deve retornar <code>[2, -12, -4, 1]</code> .'
    testString: 'assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0], "<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> should return <code>[2, -12, -4, 1]</code>.");'
  - text: '<code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> deve retornar <code>[1, 1, -1]</code> .'
    testString: 'assert.deepEqual(cramersRule(matrices[1], freeTerms[1]), answers[1], "<code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> should return <code>[1, 1, -1]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function cramersRule (matrix, freeTerms) {
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
