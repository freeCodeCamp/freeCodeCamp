---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
localeTitle: Declare una variable de solo lectura con la palabra clave const
challengeType: 1
---

## Description
<section id='description'> 
<code>let</code> no es la única forma nueva de declarar variables. En ES6, también puede declarar variables usando la palabra clave <code>const</code> . 
<code>const</code> tiene todas las características increíbles que <code>let</code> tener, con la ventaja adicional de que las variables declaradas con <code>const</code> son de solo lectura. Son un valor constante, lo que significa que una vez que una variable se asigna con <code>const</code> , no se puede reasignar. 
<blockquote>"use strict"<br>const FAV_PET = "Cats";<br>FAV_PET = "Dogs"; // returns error</blockquote> 
Como puede ver, al intentar reasignar una variable declarada con <code>const</code> generará un error. Siempre debe nombrar variables que no desee reasignar utilizando la palabra clave <code>const</code> . Esto ayuda cuando intenta accidentalmente reasignar una variable que está destinada a permanecer constante. Una práctica común al nombrar constantes es usar todas las letras en mayúsculas, con palabras separadas por un guión bajo. 
</section>

## Instructions
<section id='instructions'> 
Cambie el código para que todas las variables se declaren usando <code>let</code> o <code>const</code> . Use <code>let</code> cuando quiera que la variable cambie, y <code>const</code> cuando quiera que la variable permanezca constante. Además, cambie el nombre de las variables declaradas con <code>const</code> para que se ajusten a las prácticas comunes, es decir, las constantes deben estar en mayúsculas. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> no existe en su código.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in your code.");'
  - text: <code>SENTENCE</code> debe ser una variable constante declarada con <code>const</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/(const SENTENCE)/g), "<code>SENTENCE</code> should be a constant variable declared with <code>const</code>.");'
  - text: <code>i</code> debe ser declarada con <code>let</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/(let i)/g), "<code>i</code> should be declared with <code>let</code>.");'
  - text: <code>console.log</code> debe cambiar para imprimir la variable <code>SENTENCE</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g), "<code>console.log</code> should be adjusted to print the variable <code>SENTENCE</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  var sentence = str + " is cool!";
  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
