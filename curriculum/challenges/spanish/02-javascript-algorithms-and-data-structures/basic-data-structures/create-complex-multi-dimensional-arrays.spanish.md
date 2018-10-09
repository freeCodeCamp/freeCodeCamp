---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
localeTitle: Crear complejos arreglos multidimensionales.
challengeType: 1
---

## Description
<section id='description'>
impresionante! ¡Acabas de aprender un montón de arreglos! Este ha sido un resumen de nivel bastante alto, y hay mucho más que aprender sobre el trabajo con matrices, muchas de las cuales veremos en secciones posteriores. Pero antes de pasar a mirar <dfn>Objetos</dfn> , echemos un vistazo más y veamos cómo los arreglos pueden volverse un poco más complejos de lo que hemos visto en desafíos anteriores.
Una de las características más poderosas cuando se piensa en los arreglos como estructuras de datos, es que los arreglos pueden contener, o incluso estar completamente compuestos de otros arreglos. Hemos visto matrices que contienen matrices en desafíos anteriores, pero bastante simples. Sin embargo, las matrices pueden contener una profundidad infinita de matrices que pueden contener otras matrices, cada una con sus propios niveles arbitrarios de profundidad, y así sucesivamente. De esta manera, una matriz puede convertirse muy rápidamente en una estructura de datos muy compleja, conocida como una matriz <dfn>multidimensional</dfn> o anidada. Considera el siguiente ejemplo:
<blockquote>let nestedArray = [ // top, or first level - the outer most array<br>&nbsp;&nbsp;['deep'], // an array within an array, 2 levels of depth<br>&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;['deeper'], ['deeper'] // 2 arrays nested 3 levels deep<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['deepest'], ['deepest'] // 2 arrays nested 4 levels deep<br>&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['deepest-est?'] // an array nested 5 levels deep<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;]<br>];</blockquote>
Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es inaudito, o incluso inusual, cuando se trata de grandes cantidades de datos.
Sin embargo, aún podemos acceder fácilmente a los niveles más profundos de una matriz de este complejo con notación de corchete:
<blockquote>console.log(nestedArray[2][1][0][0][0]);<br>// logs: deepest-est?</blockquote>
Y ahora que sabemos dónde está ese dato, podemos restablecerlo si necesitamos:
<blockquote>nestedArray[2][1][0][0][0] = 'deeper still';<br><br>console.log(nestedArray[2][1][0][0][0]);<br>// now logs: deeper still</blockquote>
</section>

## Instructions
<section id='instructions'>
Hemos definido una variable, <code>myNestedArray</code> , igual a una matriz. Modifique <code>myNestedArray</code> , utilizando cualquier combinación de <dfn>cadenas</dfn> , <dfn>números</dfn> y <dfn>valores booleanos</dfn> para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerde, la matriz más externa es el nivel 1). En algún lugar en el tercer nivel, incluye la cadena <code>&#39;deep&#39;</code> , en el cuarto nivel, incluyen la cadena <code>&#39;deeper&#39;</code> , y en el quinto nivel, incluyen la cadena <code>&#39;deepest&#39;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>myNestedArray</code> debe contener solo números, booleanos y cadenas como elementos de datos'
    testString: 'assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== "number" && typeof flattened[i] !== "string" && typeof flattened[i] !== "boolean") { return false } } return true })(myNestedArray), true, "<code>myNestedArray</code> should contain only numbers, booleans, and strings as data elements");'
  - text: <code>myNestedArray</code> debe tener exactamente 5 niveles de profundidad
    testString: 'assert.strictEqual((function(arr) {let depth = 0;function arrayDepth(array, i, d) { if (Array.isArray(array[i])) {  arrayDepth(array[i], 0, d + 1);} else {  depth = (d > depth) ? d : depth;}if (i < array.length) {  arrayDepth(array, i + 1, d);}  }arrayDepth(arr, 0, 0);return depth;})(myNestedArray), 4, "<code>myNestedArray</code> should have exactly 5 levels of depth");'
  - text: <code>myNestedArray</code> debe contener exactamente una aparición de la cadena <code>&quot;deep&quot;</code> en una matriz anidada con 3 niveles de profundidad
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep")[0] === 2, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deep"</code> on an array nested 3 levels deep");'
  - text: <code>myNestedArray</code> debe contener exactamente una aparición de la cadena <code>&quot;deeper&quot;</code> deep <code>&quot;deeper&quot;</code> en una matriz anidada con 4 niveles de profundidad
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper")[0] === 3, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deeper"</code> on an array nested 4 levels deep");'
  - text: <code>myNestedArray</code> debe contener exactamente una aparición de la cadena <code>&quot;deepest&quot;</code> en una matriz anidada a 5 niveles de profundidad
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest")[0] === 4, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deepest"</code> on an array nested 5 levels deep");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
