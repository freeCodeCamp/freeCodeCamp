---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
videoUrl: ''
localeTitle: Use cada método para verificar que cada elemento de una matriz cumple con los criterios
---

## Description
<section id="description"> <code>every</code> método funciona con matrices para verificar si <em>cada</em> elemento pasa una prueba en particular. Devuelve un valor booleano: <code>true</code> si todos los valores cumplen los criterios, <code>false</code> si no. Por ejemplo, el siguiente código verificará si cada elemento de la matriz de <code>numbers</code> es menor que 10: <blockquote> números var = [1, 5, 8, 0, 10, 11]; <br> numbers.every (function (currentValue) { <br> return currentValue &lt;10; <br> }); <br> // Devuelve falso </blockquote></section>

## Instructions
<section id="instructions"> Use <code>every</code> método dentro de la función <code>checkPositive</code> para verificar si cada elemento en <code>arr</code> es positivo. La función debe devolver un valor booleano. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar <code>every</code> métodos.
    testString: 'assert(code.match(/\.every/g), "Your code should use the <code>every</code> method.");'
  - text: '<code>checkPositive([1, 2, 3, -4, 5])</code> debe devolver <code>false</code> .'
    testString: 'assert(!checkPositive([1, 2, 3, -4, 5]), "<code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>false</code>.");'
  - text: '<code>checkPositive([1, 2, 3, 4, 5])</code> debe devolver <code>true</code> .'
    testString: 'assert(checkPositive([1, 2, 3, 4, 5]), "<code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.");'
  - text: '<code>checkPositive([1, -2, 3, -4, 5])</code> debe devolver <code>false</code> .'
    testString: 'assert(!checkPositive([1, -2, 3, -4, 5]), "<code>checkPositive([1, -2, 3, -4, 5])</code> should return <code>false</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkPositive(arr) {
  // Add your code below this line


  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
