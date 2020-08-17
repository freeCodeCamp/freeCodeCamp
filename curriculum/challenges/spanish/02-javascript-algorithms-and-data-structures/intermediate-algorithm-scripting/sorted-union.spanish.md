---
id: a105e963526e7de52b219be9
title: Sorted Union
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Unión ordenada
---

## Description
<section id="description"> Escriba una función que tome dos o más matrices y devuelva una nueva matriz de valores únicos en el orden de las matrices originales proporcionadas. En otras palabras, todos los valores presentes de todas las matrices deben incluirse en su orden original, pero sin duplicados en la matriz final. Los números únicos deben ordenarse según su orden original, pero la matriz final no debe ordenarse en orden numérico. Verifique las pruebas de aserción para ver ejemplos. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> debe devolver <code>[1, 3, 2, 5, 4]</code> .'
    testString: 'assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], "<code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> should return <code>[1, 3, 2, 5, 4]</code>.");'
  - text: '<code>uniteUnique([1, 2, 3], [5, 2, 1])</code> debe devolver <code>[1, 2, 3, 5]</code> .'
    testString: 'assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5], "<code>uniteUnique([1, 2, 3], [5, 2, 1])</code> should return <code>[1, 2, 3, 5]</code>.");'
  - text: '<code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> debe devolver <code>[1, 2, 3, 5, 4, 6, 7, 8]</code> .'
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
