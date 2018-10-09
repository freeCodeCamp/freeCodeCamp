---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
localeTitle: Devuelva una matriz ordenada sin cambiar la matriz original
challengeType: 1
---

## Description
<section id='description'>
Un efecto secundario del método de <code>sort</code> es que cambia el orden de los elementos en la matriz original. En otras palabras, muta la matriz en su lugar. Una forma de evitar esto es primero concatenar una matriz vacía con la ordenada (recuerde que <code>concat</code> devuelve una nueva matriz), luego ejecute el método de <code>sort</code> .
</section>

## Instructions
<section id='instructions'>
Utilice el método de <code>sort</code> en la función <code>nonMutatingSort</code> para ordenar los elementos de una matriz en orden ascendente. La función debe devolver una nueva matriz y no mutar la variable <code>globalArray</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>sort</code> .
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: Su código debe utilizar el método <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: La variable <code>globalArray</code> no debe cambiar.
    testString: 'assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]), "The <code>globalArray</code> variable should not change.");'
  - text: ' <code>nonMutatingSort(globalArray)</code> debe devolver <code>[2, 3, 5, 6, 9]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]), "<code>nonMutatingSort(globalArray)</code> should return <code>[2, 3, 5, 6, 9]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line


  // Add your code above this line
}
nonMutatingSort(globalArray);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
