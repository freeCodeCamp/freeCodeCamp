---
id: a789b3483989747d63b0e427
title: Return Largest Numbers in Arrays
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Retornar os maiores números em matrizes
---

## Description
<section id="description"> Devolve um array que consiste no maior número de cada sub-array fornecido. Para simplificar, a matriz fornecida conterá exatamente quatro sub-matrizes. Lembre-se, você pode percorrer uma matriz com um loop for simples e acessar cada membro com a sintaxe de array <code>arr[i]</code> . Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> deve retornar uma matriz.'
    testString: 'assert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]).constructor === Array, "<code>largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return an array.");'
  - text: '<code>largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> deve retornar <code>[27, 5, 39, 1001]</code> .'
    testString: 'assert.deepEqual(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27, 5, 39, 1001], "<code>largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return <code>[27, 5, 39, 1001]</code>.");'
  - text: '<code>largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])</code> deve retornar <code>[9, 35, 97, 1000000]</code> .'
    testString: 'assert.deepEqual(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9, 35, 97, 1000000], "<code>largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])</code> should return <code>[9, 35, 97, 1000000]</code>.");'
  - text: '<code>largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])</code> retorno <code>[25, 48, 21, -3]</code> .'
    testString: 'assert.deepEqual(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]), [25, 48, 21, -3], "<code>largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])</code> should return <code>[25, 48, 21, -3]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
function largestOfFour(arr) {
  return arr.map(i => Math.max(...i));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
</section>
