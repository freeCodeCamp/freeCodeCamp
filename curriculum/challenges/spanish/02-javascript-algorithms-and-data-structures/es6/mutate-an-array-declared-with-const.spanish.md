---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
localeTitle: Mutar una matriz declarada con const
challengeType: 1
---

## Description
<section id='description'>
La declaración <code>const</code> tiene muchos casos de uso en JavaScript moderno.
Algunos desarrolladores prefieren asignar todas sus variables usando <code>const</code> de forma predeterminada, a menos que sepan que deberán reasignar el valor. Solo en ese caso, usan <code>let</code> .
Sin embargo, es importante comprender que los objetos (incluidas las matrices y las funciones) asignados a una variable que usa <code>const</code> todavía son mutables. El uso de la declaración <code>const</code> solo evita la reasignación del identificador de variable.
<blockquote>"use strict";<br>const s = [5, 6, 7];<br>s = [1, 2, 3]; // throws error, trying to assign a const<br>s[2] = 45; // works just as it would with an array declared with var or let<br>console.log(s); // returns [5, 6, 45]</blockquote>
Como puede ver, puede mutar el objeto <code>[5, 6, 7]</code> sí mismo y la variable <code>s</code> seguirá apuntando a la matriz alterada <code>[5, 6, 45]</code> . Al igual que todas las matrices, los elementos de la matriz en <code>s</code> son mutables, pero debido a que se utilizó <code>const</code> , no puede usar el identificador de la variable <code>s</code> para apuntar a una matriz diferente mediante el operador de asignación.
</section>

## Instructions
<section id='instructions'>
Una matriz se declara como <code>const s = [5, 7, 2]</code> . Cambie la matriz a <code>[2, 5, 7]</code> usando varias asignaciones de elementos.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No reemplace la palabra clave <code>const</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: <code>s</code> debe ser una variable constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s/g), "<code>s</code> should be a constant variable (by using <code>const</code>).");'
  - text: No cambie la declaración original de la matriz.
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g), "Do not change the original array declaration.");'
  - text: ' <code>s</code> debe ser igual a <code>[2, 5, 7]</code> .'
    testString: 'assert.deepEqual(s, [2, 5, 7], "<code>s</code> should be equal to <code>[2, 5, 7]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
