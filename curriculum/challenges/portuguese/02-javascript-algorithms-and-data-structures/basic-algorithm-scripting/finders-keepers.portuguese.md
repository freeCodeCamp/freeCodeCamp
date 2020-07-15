---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Achado não é roubado
---

## Description
<section id="description"> Crie uma função que examine uma matriz (primeiro argumento) e retorne o primeiro elemento da matriz que passa por um teste de verdade (segundo argumento). Se nenhum elemento passar no teste, retorne indefinido. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente programação em par. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> deve retornar 8.'
    testString: 'assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, "<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.");'
  - text: '<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> deve retornar indefinido.'
    testString: 'assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined, "<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> should return undefined.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
