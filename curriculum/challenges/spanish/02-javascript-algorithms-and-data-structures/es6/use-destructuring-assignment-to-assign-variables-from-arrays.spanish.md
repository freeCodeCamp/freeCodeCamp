---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
videoUrl: ''
localeTitle: Utilice la asignación de destrucción para asignar variables de matrices
---

## Description
<section id="description"> ES6 hace que la desestructuración de matrices sea tan fácil como desestructurar objetos. Una diferencia clave entre el operador de propagación y la desestructuración de la matriz es que el operador de propagación desempaqueta todo el contenido de una matriz en una lista separada por comas. Por consiguiente, no puede seleccionar o elegir qué elementos desea asignar a las variables. La destrucción de una matriz nos permite hacer exactamente eso: <blockquote> const [a, b] = [1, 2, 3, 4, 5, 6]; <br> console.log (a, b); // 1, 2 </blockquote> A la variable <code>a</code> se le asigna el primer valor de la matriz, <code>b</code> se le asigna el segundo valor de la matriz. También podemos acceder al valor en cualquier índice en una matriz con desestructuración utilizando comas para alcanzar el índice deseado: <blockquote> const [a, b ,,, c] = [1, 2, 3, 4, 5, 6]; <br> console.log (a, b, c); // 1, 2, 5 </blockquote></section>

## Instructions
<section id="instructions"> Utilice la asignación de desestructuración para intercambiar los valores de <code>a</code> y <code>b</code> modo que <code>a</code> reciba el valor almacenado en <code>b</code> , y <code>b</code> reciba el valor almacenado en <code>a</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El valor de <code>a</code> debe ser 6, después del intercambio.'
    testString: 'assert(a === 6, "Value of <code>a</code> should be 6, after swapping.");'
  - text: 'El valor de <code>b</code> debe ser 8, después del intercambio.'
    testString: 'assert(b === 8, "Value of <code>b</code> should be 8, after swapping.");'
  - text: Utilice la desestructuración de matrices para intercambiar a y b.
    testString: '// assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code), "Use array destructuring to swap a and b.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
