---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Menor Múltiplo Comum
---

## Description
<section id="description"> Encontre o menor múltiplo comum dos parâmetros fornecidos que podem ser divididos igualmente por ambos, bem como por todos os números seqüenciais no intervalo entre esses parâmetros. O intervalo será uma matriz de dois números que não estarão necessariamente em ordem numérica. Por exemplo, se tiver 1 e 3, encontre o menor múltiplo comum de 1 e 3 que também é divisível por todos os números <em>entre</em> 1 e 3. A resposta aqui seria 6. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você obtiver preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>smallestCommons([1, 5])</code> deve retornar um número.'
    testString: 'assert.deepEqual(typeof smallestCommons([1, 5]), "number", "<code>smallestCommons([1, 5])</code> should return a number.");'
  - text: '<code>smallestCommons([1, 5])</code> deve retornar 60.'
    testString: 'assert.deepEqual(smallestCommons([1, 5]), 60, "<code>smallestCommons([1, 5])</code> should return 60.");'
  - text: '<code>smallestCommons([5, 1])</code> deve retornar 60.'
    testString: 'assert.deepEqual(smallestCommons([5, 1]), 60, "<code>smallestCommons([5, 1])</code> should return 60.");'
  - text: '<code>smallestCommons([2, 10])</code> deve retornar 2520.'
    testString: 'assert.deepEqual(smallestCommons([2, 10]), 2520, "<code>smallestCommons([2, 10])</code> should return 2520.");'
  - text: '<code>smallestCommons([1, 13])</code> deve retornar 360360.'
    testString: 'assert.deepEqual(smallestCommons([1, 13]), 360360, "<code>smallestCommons([1, 13])</code> should return 360360.");'
  - text: '<code>smallestCommons([23, 18])</code> deve retornar 6056820.'
    testString: 'assert.deepEqual(smallestCommons([23, 18]), 6056820, "<code>smallestCommons([23, 18])</code> should return 6056820.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
