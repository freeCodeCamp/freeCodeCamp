---
id: 587d7b8a367417b2b2512b4c
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
localeTitle: Utilice la asignación de destrucción con el operador de reposo para reasignar elementos de matriz
challengeType: 1
---

## Description
<section id='description'>
En algunas situaciones que involucran la desestructuración de matrices, podríamos querer recopilar el resto de los elementos en una matriz separada.
El resultado es similar a <code>Array.prototype.slice()</code> , como se muestra a continuación:
<blockquote>const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];<br>console.log(a, b); // 1, 2<br>console.log(arr); // [3, 4, 5, 7]</blockquote>
Las variables <code>a</code> y <code>b</code> toman los valores primero y segundo de la matriz. Después de eso, debido a la presencia del operador en reposo, <code>arr</code> obtiene el resto de los valores en forma de una matriz.
El elemento resto solo funciona correctamente como la última variable en la lista. Como en, no puede usar el operador de descanso para capturar un subarreglo que omita el último elemento de la matriz original.
</section>

## Instructions
<section id='instructions'>
Use la asignación de desestructuración con el operador de descanso para realizar un <code>Array.prototype.slice()</code> efectivo de manera que <code>arr</code> sea ​​una sub-matriz de la <code>source</code> de la matriz original con los dos primeros elementos omitidos.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>arr</code> debería ser <code>[3,4,5,6,7,8,9,10]</code> '
    testString: 'assert(arr.every((v, i) => v === i + 3) && arr.length === 8,"<code>arr</code> should be <code>[3,4,5,6,7,8,9,10]</code>");'
  - text: Se debe utilizar la destrucción.
    testString: 'getUserInput => assert(getUserInput("index").match(/\[\s*\w*\s*,\s*\w*\s*,\s*...\w+\s*\]/g),"Destructuring should be used.");'
  - text: <code>Array.slice()</code> no debe utilizarse.
    testString: 'getUserInput => assert(!getUserInput("index").match(/slice/g), "<code>Array.slice()</code> should not be used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  arr = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
