---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
localeTitle: Establecer parámetros predeterminados para sus funciones
challengeType: 1
---

## Description
<section id='description'> 
Para ayudarnos a crear funciones más flexibles, ES6 introduce <dfn>parámetros predeterminados</dfn> para las funciones. 
Echa un vistazo a este código: 
<blockquote>function greeting(name = "Anonymous") {<br>&nbsp;&nbsp;return "Hello " + name;<br>}<br>console.log(greeting("John")); // Hello John<br>console.log(greeting()); // Hello Anonymous</blockquote> 
El parámetro predeterminado se activa cuando el argumento no está especificado (no está definido). Como puede ver en el ejemplo anterior, el <code>name</code> del parámetro recibirá su valor predeterminado <code>&quot;Anonymous&quot;</code> cuando no proporcione un valor para el parámetro. Puede agregar valores predeterminados para tantos parámetros como desee. 
</section>

## Instructions
<section id='instructions'> 
Modifique el <code>increment</code> la función agregando parámetros predeterminados para que agregue 1 al <code>number</code> si no se especifica el <code>value</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;El resultado del <code>increment(5, 2)</code> debe ser <code>7</code> &#39;.
    testString: 'assert(increment(5, 2) === 7, "The result of <code>increment(5, 2)</code> should be <code>7</code>.");'
  - text: El resultado del <code>increment(5)</code> debe ser <code>6</code> .
    testString: 'assert(increment(5) === 6, "The result of <code>increment(5)</code> should be <code>6</code>.");'
  - text: se usó el parámetro por defecto <code>1</code> para el <code>value</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/value\s*=\s*1/g), "default parameter <code>1</code> was used for <code>value</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
