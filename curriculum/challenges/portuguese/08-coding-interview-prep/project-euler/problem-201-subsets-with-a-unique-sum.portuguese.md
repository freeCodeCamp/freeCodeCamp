---
id: 5900f4361000cf542c50ff48
challengeType: 5
title: 'Problem 201: Subsets with a unique sum'
videoUrl: ''
localeTitle: 'Problema 201: Subconjuntos com uma soma única'
---

## Description
<section id="description"> Para qualquer conjunto A de números, seja soma (A) a soma dos elementos de A. Considere o conjunto B = {1,3,6,8,10,11}. Existem 20 subconjuntos de B contendo três elementos e suas somas são: <p> soma ({1,3,6}) = 10, soma ({1,3,8}) = 12, soma ({1,3,10}) = 14, soma ({1,3,11}) = 15, soma ({1,6,8}) = 15, soma ({1,6,10}) = 17, soma ({1,6,11}) = 18, soma ({1,8,10} ) = 19, soma ({1,8,11}) = 20, soma ({1,10,11}) = 22, soma ({3,6,8}) = 17, soma ({3,6, 10}) = 19, soma ({3,6,11}) = 20, soma ({3,8,10}) = 21, soma ({3,8,11}) = 22, soma ({3, 10,11}) = 24, soma ({6,8,10}) = 24, soma ({6,8,11}) = 25, soma ({6,10,11}) = 27, soma ({ 8,10,11}) = 29. </p><p> Algumas dessas somas ocorrem mais de uma vez, outras são únicas. Para um conjunto A, seja U (A, k) o conjunto de somas únicas de subconjuntos de elementos-k de A, em nosso exemplo encontramos U (B, 3) = {10,12,14,18,21,25 , 27,29} e soma (U (B, 3)) = 156. </p><p> Agora considere o conjunto de 100 elementos S = {12, 22, ..., 1002}. S tem 100891344545564193334812497256 subconjuntos de 50 elementos. </p><p> Determine a soma de todos os inteiros que são a soma de exatamente um dos subconjuntos de 50 elementos de S, isto é, encontre a soma (U (S, 50)). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler201()</code> deve retornar 115039000.
    testString: 'assert.strictEqual(euler201(), 115039000, "<code>euler201()</code> should return 115039000.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler201() {
  // Good luck!
  return true;
}

euler201();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
