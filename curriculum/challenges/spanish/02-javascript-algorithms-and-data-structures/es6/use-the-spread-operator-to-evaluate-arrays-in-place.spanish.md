---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
localeTitle: Utilice el operador de propagación para evaluar matrices en el lugar
challengeType: 1
---

## Description
<section id='description'> 
ES6 presenta el <dfn>operador de propagación</dfn> , que nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos. 
El siguiente código de ES5 utiliza <code>apply()</code> para calcular el valor máximo en una matriz: 
<blockquote>var arr = [6, 89, 3, 45];<br>var maximus = Math.max.apply(null, arr); // returns 89</blockquote> 
Tuvimos que usar <code>Math.max.apply(null, arr)</code> porque <code>Math.max(arr)</code> devuelve <code>NaN</code> . <code>Math.max()</code> espera argumentos separados por comas, pero no una matriz. 
El operador de difusión hace que esta sintaxis sea mucho mejor para leer y mantener. 
<blockquote>const arr = [6, 89, 3, 45];<br>const maximus = Math.max(...arr); // returns 89</blockquote> 
<code>...arr</code> devuelve una matriz desempaquetada. En otras palabras, se <em>propaga</em> la matriz. 
Sin embargo, el operador de difusión solo funciona en el lugar, como en un argumento a una función o en un literal de matriz. El siguiente código no funcionará: 
<blockquote>const spreaded = ...arr; // will throw a syntax error</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Copie todos los contenidos de <code>arr1</code> en otra matriz <code>arr2</code> utilizando el operador de propagación. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr2</code> es la copia correcta de <code>arr1</code> .
    testString: 'assert(arr2.every((v, i) => v === arr1[i]), "<code>arr2</code> is correct copy of <code>arr1</code>.");'
  - text: <code>...</code> se usó el operador spread para duplicar <code>arr1</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/\[\s*...arr1\s*\]/g),"<code>...</code> spread operator was used to duplicate <code>arr1</code>.");'
  - text: <code>arr2</code> permanece sin cambios cuando se cambia <code>arr1</code> .
    testString: 'assert((arr1, arr2) => {arr1.push("JUN"); return arr2.length < arr1.length},"<code>arr2</code> remains unchanged when <code>arr1</code> is changed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
