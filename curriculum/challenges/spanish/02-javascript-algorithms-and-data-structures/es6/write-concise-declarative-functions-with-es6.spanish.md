---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
localeTitle: Escribir funciones declarativas concisas con ES6
challengeType: 1
---

## Description
<section id='description'> 
Al definir funciones dentro de objetos en ES5, tenemos que usar la <code>function</code> palabra clave de la siguiente manera: 
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Taylor",<br>&nbsp;&nbsp;sayHello: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return `Hello! My name is ${this.name}.`;<br>&nbsp;&nbsp;}<br>};</blockquote> 
Con ES6, puede eliminar la palabra clave de <code>function</code> y los dos puntos por completo al definir funciones en objetos. Aquí hay un ejemplo de esta sintaxis: 
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Taylor",<br>&nbsp;&nbsp;sayHello() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return `Hello! My name is ${this.name}.`;<br>&nbsp;&nbsp;}<br>};</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Refactorice la función <code>setGear</code> dentro de la <code>bicycle</code> objeto para usar la sintaxis abreviada descrita anteriormente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No se usó la expresión de función tradicional.
    testString: 'assert(!getUserInput("index").match(/function/),"Traditional <code>function</code> expression was not used.");'
  - text: <code class = "notranslate"> setGear </code> es una función declarativa.
    testString: 'assert(typeof bicycle.setGear === "function" && getUserInput("index").match(/setGear\s*\(.+\)\s*\{/), "<code>setGear</code> is a declarative function.");'
  - text: <code class = "notranslate"> bicycle.setGear (48) </code> cambia el valor de <code class = "notranslate"> gear </code> a 48.
    testString: 'assert((new bicycle.setGear(48)).gear === 48, "<code>bicycle.setGear(48)</code> changes the <code>gear</code> value to 48.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
