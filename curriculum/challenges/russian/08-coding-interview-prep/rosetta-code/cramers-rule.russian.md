---
title: Cramer's rule
id: 59713da0a428c1a62d7db430
challengeType: 5
videoUrl: ''
localeTitle: Правило Крамера
---

## Description
<section id="description"><p> В <a href="https://en.wikipedia.org/wiki/linear algebra" title="wp: линейная алгебра">линейной алгебре</a> <a href="https://en.wikipedia.org/wiki/Cramer&#x27;s rule" title="wp: правило Крамера">правило Крамера</a> является явной формулой для решения <a href="https://en.wikipedia.org/wiki/system of linear equations" title="wp: система линейных уравнений">системы линейных уравнений</a> с таким количеством уравнений, как неизвестные, действительные всякий раз, когда система имеет единственное решение. Он выражает решение в терминах детерминантов матрицы (квадратного) коэффициента и полученных из нее матриц путем замены одного столбца на вектор правых частей уравнений. </p><p> Данный </p><p><big></big></p><p> <big>$ \ left \ {\ begin {matrix} a_1x + b_1y + c_1z &amp; = {\ color {red} d_1} \\ a_2x + b_2y + c_2z &amp; = {\ color {red} d_2} \\ a_3x + b_3y + c_3z &amp; = {\ цвет {красный} D_3} \ конец {матрица} \ правом. $</big> </p><p> который в матричном формате </p><p><big></big></p><p> <big>$ \ begin {bmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {bmatrix} \ begin {bmatrix} x \\ y \\ z \ end {bmatrix} = \ begin {bmatrix} {\ color {red} d_1} \\ {\ color {red} d_2} \\ {\ color {red} d_3} \ end {bmatrix}. $</big> </p><p> Тогда значения $ x, y $ и $ z $ можно найти следующим образом: </p><p><big></big></p><p> <big>$ x = \ frac {\ begin {vmatrix} {\ color {red} d_1} &amp; b_1 &amp; c_1 \\ {\ color {red} d_2} &amp; b_2 &amp; c_2 \\ {\ color {red} d_3} &amp; b_3 &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ quad y = \ frac {\ begin {vmatrix} } a_1 &amp; {\ color {red} d_1} &amp; c_1 \\ a_2 &amp; {\ color {red} d_2} &amp; c_2 \\ a_3 &amp; {\ color {red} d_3} &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ text {и} z = \ frac {\ begin {vmatrix} a_1 &amp; b_1 &amp; {\ color {red} d_1} \\ a_2 &amp; b_2 &amp; {\ color {red} d_2} \\ a_3 &amp; b_3 &amp; {\ color {red} d_3} \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}. $</big> </p> задача <p> Учитывая следующую систему уравнений: </p><p> <big>$ \ begin {cases} 2w-x + 5y + z = -3 \\ 3w + 2x + 2y-6z = -32 \ w + 3x + 3y-z = -47 \\ 5w-2x-3y + 3z = 49 \\ \ end {cases} $</big> </p><p> решаем для <big>$ w $, $ x $, $ y $</big> и <big>$ z $</big> , используя правило Крамера. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>cramersRule</code> - это функция.
    testString: 'assert(typeof cramersRule === "function", "<code>cramersRule</code> is a function.");'
  - text: '<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> должны возвращать <code>[2, -12, -4, 1]</code> .'
    testString: 'assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0], "<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> should return <code>[2, -12, -4, 1]</code>.");'
  - text: '<code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> должны возвращать <code>[1, 1, -1]</code> .'
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
