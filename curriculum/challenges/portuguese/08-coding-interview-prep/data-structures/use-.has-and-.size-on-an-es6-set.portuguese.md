---
id: 587d8255367417b2b2512c72
title: Use .has and .size on an ES6 Set
challengeType: 1
videoUrl: ''
localeTitle: Use .has e .size em um conjunto ES6
---

## Description
<section id="description"> Vamos examinar os métodos .has e .size disponíveis no objeto Conjunto ES6. Primeiro, crie um conjunto ES6 <code>var set = new Set([1,2,3]);</code> O método .has verificará se o valor está contido no conjunto. <code>var hasTwo = set.has(2);</code> O método .size retornará um inteiro representando o tamanho do Set <code>var howBig = set.size;</code> </section>

## Instructions
<section id="instructions"> Neste exercício, passaremos um array e um valor para a função checkSet (). Sua função deve criar um conjunto ES6 a partir do argumento da matriz. Encontre se o conjunto contém o argumento de valor. Encontre o tamanho do conjunto. E retorne esses dois valores em uma matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>checkSet([4, 5, 6], 3)</code> deve retornar [false, 3]'
    testString: 'assert((function(){var test = checkSet([4,5,6], 3); test === [ false, 3 ]})(), "<code>checkSet([4, 5, 6], 3)</code> should return [ false, 3 ]");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(arrToBeSet, checkValue){

   // change code below this line

   // change code above this line

}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
