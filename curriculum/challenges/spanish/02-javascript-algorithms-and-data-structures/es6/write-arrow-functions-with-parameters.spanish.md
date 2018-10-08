---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
localeTitle: Escribir funciones de flecha con parámetros
challengeType: 1
---

## Description
<section id='description'> 
Al igual que una función normal, puede pasar argumentos a las funciones de flecha. 
<blockquote>// doubles input value and returns it<br>const doubler = (item) => item * 2;</blockquote> 
También puede pasar más de un argumento a las funciones de flecha. 
</section>

## Instructions
<section id='instructions'> 
Vuelva a <code>myConcat</code> función <code>myConcat</code> que agrega el contenido de <code>arr2</code> a <code>arr1</code> para que la función utilice la sintaxis de la función de flecha. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El usuario reemplazó la palabra clave <code>var</code> .
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: <code>myConcat</code> debe ser una variable constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+myConcat/g), "<code>myConcat</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>myConcat</code> debería ser una función
    testString: 'assert(typeof myConcat === "function", "<code>myConcat</code> should be a function");'
  - text: <code>myConcat()</code> devuelve la <code>array</code> correcta
    testString: 'assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; }, "<code>myConcat()</code> returns the correct <code>array</code>");'
  - text: <code>function</code> palabra clave de la <code>function</code> no se utilizó.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
