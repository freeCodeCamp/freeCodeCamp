---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
localeTitle: Crear cadenas usando literales de plantilla
challengeType: 1
---

## Description
<section id='description'> 
Una nueva característica de ES6 es la <dfn>plantilla literal</dfn> . Este es un tipo especial de cadena que facilita la creación de cadenas complejas. 
Los literales de plantilla le permiten crear cadenas de varias líneas y usar las funciones de interpolación de cadenas para crear cadenas. 
Considera el siguiente código: 
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Zodiac Hasbro",<br>&nbsp;&nbsp;age: 56<br>};<br><br>// Template literal with multi-line and string interpolation<br>const greeting = `Hello, my name is ${person.name}!<br>I am ${person.age} years old.`;<br><br>console.log(greeting); // prints<br>// Hello, my name is Zodiac Hasbro!<br>// I am 56 years old.<br></blockquote> 
Muchas cosas pasaron allí. 
En primer lugar, el ejemplo utiliza comillas ( <code>`</code> ), no comillas ( <code>&#39;</code> o <code>&quot;</code> ), para envolver la cadena. 
En segundo lugar, observe que la cadena es multilínea, tanto en el código como en la salida. Esto ahorra la inserción de <code>\n</code> en 
La sintaxis <code>${variable}</code> utilizada anteriormente es un marcador de posición. Básicamente, no tendrá que usar más la concatenación con el operador <code>+</code> . Para agregar variables a las cadenas, simplemente suelte la variable en una cadena de plantilla y la envuelva con <code>${</code> y <code>}</code> . De forma similar, puede incluir otras expresiones en su cadena literal, por ejemplo, <code>${a + b}</code> . 
Esta nueva forma de crear cadenas le brinda más flexibilidad para crear cadenas sólidas. 
</section>

## Instructions
<section id='instructions'> 
Use la sintaxis literal de la plantilla con comillas invertidas para mostrar cada entrada de la matriz de <code>failure</code> del objeto de <code>result</code> . Cada entrada debe incluirse dentro de un elemento <code>li</code> con el atributo de clase <code>text-warning</code> , y debe aparecer dentro de <code>resultDisplayArray</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resultDisplayArray</code> es una matriz que contiene mensajes de <code>result failure</code> .
    testString: 'assert(typeof makeList(result.failure) === "object" && resultDisplayArray.length === 3, "<code>resultDisplayArray</code> is a list containing <code>result failure</code> messages.");'
  - text: <code>resultDisplayArray</code> es el resultado deseado.
    testString: 'assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>` || v === `<li class="text-warning">${result.failure[i]}</li>`), "<code>resultDisplayArray</code> is the desired output.");'
  - text: Se utilizaron cadenas de plantilla.
    testString: 'getUserInput => assert(getUserInput("index").match(/`.*`/g), "Template strings were not used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = null;
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
