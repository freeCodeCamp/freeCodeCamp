---
title: Department Numbers
id: 59f40b17e79dbf1ab720ed7a
challengeType: 5
videoUrl: ''
localeTitle: Números de departamento
---

## Description
<section id="description"><p> Existe uma cidade altamente organizada que decidiu atribuir um número a cada um dos seus departamentos: </p> Departamento de polícia Departamento de saneamento Corpo de bombeiros <p> Cada departamento pode ter um número entre 1 e 7 (inclusive). </p><p> Os três números de departamento devem ser únicos (diferentes uns dos outros) e devem somar o número 12. </p><p> O chefe da polícia não gosta de números ímpares e quer ter um número par para o seu departamento. </p> Tarefa: <p> Escreva um programa que produza todas as combinações válidas: </p><p> [2, 3, 7] </p><p> [2, 4, 6] </p><p> [2, 6, 4] </p><p> [2, 7, 3] </p><p> [4, 1, 7] </p><p> [4, 2, 6] </p><p> [4, 3, 5] </p><p> [4, 5, 3] </p><p> [4, 6, 2] </p><p> [4, 7, 1] </p><p> [6, 1, 5] </p><p> [6, 2, 4] </p><p> [6, 4, 2] </p><p> [6, 5, 1] </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code> devem ser uma função.
    testString: 'assert(typeof combinations === "function", "<code>combinations</code> should be a function.");'
  - text: '<code>combinations([1, 2, 3], 6)</code> devem retornar um Array.'
    testString: 'assert(Array.isArray(combinations([1, 2, 3], 6)), "<code>combinations([1, 2, 3], 6)</code> should return an Array.");'
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> devem retornar uma matriz de comprimento 14.'
    testString: 'assert(combinations(nums, total).length === len, "<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return an array of length 14.");'
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> devem retornar todas as combinações válidas.'
    testString: 'assert.deepEqual(combinations(nums, total), result, "<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return all valid combinations.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations (possibleNumbers, total) {
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
