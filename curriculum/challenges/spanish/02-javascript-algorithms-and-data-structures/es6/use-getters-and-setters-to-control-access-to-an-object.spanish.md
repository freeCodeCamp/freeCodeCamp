---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
localeTitle: Usar getters y setters para controlar el acceso a un objeto
challengeType: 1
---

## Description
<section id='description'> 
Puede obtener valores de un objeto y establecer un valor de una propiedad dentro de un objeto. 
Estos se llaman clásicamente <dfn>getters</dfn> y <dfn>setters</dfn> . 
funciones de Getter están destinadas a simplemente devolver (obtener) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada. 
funciones de Setter están destinadas a modificar (establecer) el valor de la variable privada de un objeto en función del valor pasado a la función de establecimiento. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior. 
<blockquote>class Book {<br>&nbsp;&nbsp;constructor(author) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this._author = author;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;// getter<br>&nbsp;&nbsp;get writer(){<br>&nbsp;&nbsp;&nbsp;&nbsp;return this._author;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;// setter<br>&nbsp;&nbsp;set writer(updatedAuthor){<br>&nbsp;&nbsp;&nbsp;&nbsp;this._author = updatedAuthor;<br>&nbsp;&nbsp;}<br>}<br>const lol = new Book('anonymous');<br>console.log(lol.writer);&nbsp;&nbsp;// anonymous<br>lol.writer = 'wut';<br>console.log(lol.writer);&nbsp;&nbsp;// wut</blockquote> 
Observe la sintaxis que estamos utilizando para invocar al captador y al configurador, como si no fueran siquiera funciones. 
Getters y setters son importantes, ya que ocultan los detalles de la implementación interna. 
</section>

## Instructions
<section id='instructions'> 
Use <code>class</code> palabra clave de la <code>class</code> para crear una clase de termostato. El constructor acepta la temperatura Fahrenheit. 
Ahora cree el <code>getter</code> y el <code>setter</code> en la clase, para obtener la temperatura en la escala Celsius. 
Recuerde que <code>C = 5/9 * (F - 32)</code> y <code>F = C * 9.0 / 5 + 32</code> , donde F es el valor de la temperatura en la escala Fahrenheit, y C es el valor de la misma temperatura en la escala Celsius 
Nota 
Cuando implementes esto, estarás siguiendo la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius. 
Este es el poder de getter o setter: está creando una API para otro usuario, que obtendría el resultado correcto, sin importar de cuál sea el seguimiento. 
En otras palabras, está abstrayendo los detalles de implementación del consumidor. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code> debe ser una <code>class</code> con un método <code>constructor</code> definido.
    testString: 'assert(typeof Thermostat === "function" && typeof Thermostat.constructor === "function","<code>Thermostat</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: Se usó la palabra clave de <code>class</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Thermostat</code> puede ser instanciado.
    testString: 'assert(() => {const t = new Thermostat(32); return typeof t === "object" && t.temperature === 0;}, "<code>Thermostat</code> can be instantiated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
