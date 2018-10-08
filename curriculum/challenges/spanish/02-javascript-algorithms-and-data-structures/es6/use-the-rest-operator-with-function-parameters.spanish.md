---
id: 587d7b88367417b2b2512b47
title: Use the Rest Operator with Function Parameters
localeTitle: Utilice el operador de reposo con parámetros de función
challengeType: 1
---

## Description
<section id='description'> 
Para ayudarnos a crear funciones más flexibles, ES6 presenta al <dfn>operador de resto</dfn> para los parámetros de función. Con el operador resto, puede crear funciones que toman un número variable de argumentos. Estos argumentos se almacenan en una matriz a la que se puede acceder posteriormente desde dentro de la función. 
Echa un vistazo a este código: 
<blockquote>function howMany(...args) {<br>&nbsp;&nbsp;return "You have passed " + args.length + " arguments.";<br>}<br>console.log(howMany(0, 1, 2)); // You have passed 3 arguments<br>console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.</blockquote> 
El operador restante elimina la necesidad de verificar la matriz de <code>args</code> y nos permite aplicar <code>map()</code> , <code>filter()</code> y <code>reduce()</code> en la matriz de parámetros. 
</section>

## Instructions
<section id='instructions'> 
Modifique la <code>sum</code> la función para que use el operador de descanso y funcione de la misma manera con cualquier número de parámetros. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;El resultado de la <code>sum(0,1,2)</code> debe ser 3&#39;
    testString: 'assert(sum(0,1,2) === 3, "The result of <code>sum(0,1,2)</code> should be 3");'
  - text: &#39;El resultado de la <code>sum(1,2,3,4)</code> debe ser 10&#39;
    testString: 'assert(sum(1,2,3,4) === 10, "The result of <code>sum(1,2,3,4)</code> should be 10");'
  - text: El resultado de la <code>sum(5)</code> debe ser 5.
    testString: 'assert(sum(5) === 5, "The result of <code>sum(5)</code> should be 5");'
  - text: El resultado de <code>sum()</code> debe ser 0
    testString: 'assert(sum() === 0, "The result of <code>sum()</code> should be 0");'
  - text: La función de <code>sum</code> usa el operador de <code>...</code> propagación en el parámetro <code>args</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/function\s+sum\s*\(\s*...args\s*\)\s*{/g), "The <code>sum</code> function uses the <code>...</code> spread operator on the <code>args</code> parameter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
