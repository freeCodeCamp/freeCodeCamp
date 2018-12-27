---
id: 587d8255367417b2b2512c72
title: Use .has and .size on an ES6 Set
challengeType: 1
videoUrl: ''
localeTitle: Utilice .has y .size en un conjunto ES6
---

## Description
<section id="description"> Veamos los métodos .has y .size disponibles en el objeto Set de ES6. En primer lugar, cree un conjunto <code>var set = new Set([1,2,3]);</code> ES6 <code>var set = new Set([1,2,3]);</code> El método .has comprobará si el valor está contenido dentro del conjunto. <code>var hasTwo = set.has(2);</code> El método .size devolverá un número entero que representa el tamaño de Set <code>var howBig = set.size;</code> </section>

## Instructions
<section id="instructions"> En este ejercicio pasaremos una matriz y un valor a la función checkSet (). Su función debe crear un conjunto ES6 a partir del argumento de la matriz. Encuentra si el conjunto contiene el argumento de valor. Encuentra el tamaño del conjunto. Y devuelve esos dos valores en una matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>checkSet([4, 5, 6], 3)</code> debe devolver [false, 3]'
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
