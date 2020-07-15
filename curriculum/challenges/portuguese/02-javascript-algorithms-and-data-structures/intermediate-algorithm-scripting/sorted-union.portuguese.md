---
id: a105e963526e7de52b219be9
title: Sorted Union
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: União ordenada
---

## Description
<section id="description"> Escreva uma função que usa dois ou mais arrays e retorna um novo array de valores exclusivos na ordem dos arrays fornecidos originalmente. Em outras palavras, todos os valores presentes em todos os arrays devem ser incluídos em sua ordem original, mas sem duplicatas no array final. Os números únicos devem ser classificados por ordem original, mas o array final não deve ser classificado em ordem numérica. Verifique os testes de asserção para exemplos. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> deve retornar <code>[1, 3, 2, 5, 4]</code> .'
    testString: 'assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], "<code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> should return <code>[1, 3, 2, 5, 4]</code>.");'
  - text: '<code>uniteUnique([1, 2, 3], [5, 2, 1])</code> deve retornar <code>[1, 2, 3, 5]</code> .'
    testString: 'assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5], "<code>uniteUnique([1, 2, 3], [5, 2, 1])</code> should return <code>[1, 2, 3, 5]</code>.");'
  - text: '<code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> deve retornar <code>[1, 2, 3, 5, 4, 6, 7, 8]</code> .'
    testString: 'assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8], "<code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> should return <code>[1, 2, 3, 5, 4, 6, 7, 8]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
