---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
localeTitle: Utilice las funciones de flecha para escribir funciones anónimas concisas
challengeType: 1
---

## Description
<section id='description'> 
En JavaScript, a menudo no necesitamos nombrar nuestras funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones en línea. No necesitamos nombrar estas funciones porque no las reutilizamos en ningún otro lugar. 
Para lograr esto, a menudo usamos la siguiente sintaxis: 
<blockquote>const myFunc = function() {<br>&nbsp;&nbsp;const myVar = "value";<br>&nbsp;&nbsp;return myVar;<br>}</blockquote> 
ES6 nos proporciona el azúcar sintáctico para no tener que escribir funciones anónimas de esta manera. En su lugar, puede utilizar la <strong>sintaxis de la función de flecha</strong> : 
<blockquote>const myFunc = () => {<br>&nbsp;&nbsp;const myVar = "value";<br>&nbsp;&nbsp;return myVar;<br>}</blockquote> 
Cuando no hay un cuerpo de función, y solo un valor de retorno, la sintaxis de la función de flecha le permite omitir el <code>return</code> la palabra clave, así como los corchetes que rodean el código. Esto ayuda a simplificar funciones más pequeñas en declaraciones de una línea: 
<blockquote>const myFunc = () => "value"</blockquote> 
Este código seguirá devolviendo <code>value</code> por defecto. 
</section>

## Instructions
<section id='instructions'> 
Reescriba la función asignada a la variable <code>magic</code> que devuelve una nueva <code>Date()</code> para usar la sintaxis de la función de flecha. También asegúrese de que no se define nada usando la palabra clave <code>var</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El usuario reemplazó la palabra clave <code>var</code> .
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: <code>magic</code> debe ser una variable constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+magic/g), "<code>magic</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>magic</code> es una <code>function</code> .
    testString: 'assert(typeof magic === "function", "<code>magic</code> is a <code>function</code>.");'
  - text: <code>magic()</code> devuelve la fecha correcta.
    testString: 'assert(magic().getDate() == new Date().getDate(), "<code>magic()</code> returns correct date.");'
  - text: <code>function</code> palabra clave de la <code>function</code> no se utilizó.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var magic = function() {
  "use strict";
  return new Date();
};
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
