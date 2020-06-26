---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Buscadores guardianes
---

## Description
<section id="description"> Cree una función que examine una matriz (primer argumento) y devuelva el primer elemento de la matriz que pase una prueba de verdad (segundo argumento). Si ningún elemento pasa la prueba, devuelva indefinido. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> debe devolver 8.'
    testString: 'assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, "<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.");'
  - text: '<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> debe devolver undefined.'
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
