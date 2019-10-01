---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: Comparar los alcances de la var y dejar Palabras clave
---

## Description
<section id="description"> Cuando se declara una variable con la palabra clave <code>var</code> , se declara globalmente o localmente dependiendo de si esta se declara dentro de una función. La palabra clave <code>let</code> se comporta de una manera similar, pero con algunas características adicionales. Cuando se declara una variable con la palabra clave <code>let</code> dentro de un bloque, una declaración o una expresión, su alcance se limita a ese bloque, declaración o expresión. Por ejemplo: <blockquote> var numArray = []; <br> for(var i = 0; i &lt;3; i ++) { <br> numArray.push(i); <br> } <br> console.log(numArray); <br> // devuelve [0, 1, 2] <br> console.log(i); <br> // devuelve 3 </blockquote> Con la palabra clave <code>var</code>, <code>i</code> es declarada a nivel global. Entonces, cuando se ejecuta <code>i++</code> , se actualiza la variable global. Este código es similar al siguiente: <blockquote> var numArray = []; <br> var i; <br> for(i = 0; i &lt;3; i ++) { <br> numArray.push (i); <br> } <br> console.log (numArray); <br> // devuelve [0, 1, 2] <br> console.log(i); <br> // devuelve 3 </blockquote> Este comportamiento causaría problemas si se tuviera que crear una función y almacenarla para su uso posterior dentro de un bucle "for" que usa la variable <code>i</code> . Esto se debe a que la función almacenada siempre se referirá al valor de la variable global actualizada <code>i</code> . <blockquote> var printNumTwo; <br> for(var i = 0; i &lt;3; i ++) { <br> if(i === 2) { <br> printNumTwo = función () { <br> return i; <br> }; <br> } <br> } <br> console.log(printNumTwo ()); <br> // devuelve 3 </blockquote> Como se puede ver, <code>printNumTwo()</code> imprime 3 y no 2. Esto es porque el valor asignado a <code>i</code> se actualiza y <code>printNumTwo()</code> devuelve el valor global <code>i</code> y no el valor que<code>i</code> tenía cuando la función fue creada en el bucle. La palabra clave <code>let</code> no sigue este comportamiento: <blockquote> &#39;use strict&#39;; <br> let printNumTwo; <br> for(let i = 0; i &lt;3; i ++) { <br> if(i === 2) { <br> printNumTwo = function() { <br> return i; <br> }; <br> } <br> } <br> console.log(printNumTwo ()); <br> // devuelve 2 <br> console.log(i); <br> // devuelve &quot;i undefined&quot; </blockquote> <code>i</code> no está definido porque no se declaró en el ámbito global. Solo se declara dentro de la sentencia for loop. <code>printNumTwo()</code> devolvió el valor correcto porque se crearon tres variables <code>i</code> diferentes, con valores únicos (0, 1 y 2) mediante la palabra clave <code>let</code> dentro de la instrucción de bucle. </section>

## Instructions
<section id="instructions"> Arreglar el código para que la variable <code>i</code> declarada en la sentencia if sea una variable independiente que la variable <code>i</code> declarada en la primera línea de la función. Asegúrese de no utilizar la palabra clave <code>var</code> en ningún lugar de su código. Este ejercicio está diseñado para ilustrar la diferencia entre cómo <code>var</code> y <code>let</code> asignan un alcance distinto a la variable declarada. Cuando se programa una función similar a la utilizada en este ejercicio, a menudo es mejor usar diferentes nombres de variables para evitar confusiones. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> no existe en el código.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in code.");'
  - text: La variable <code>i</code> declaradas en la sentencia if debe ser igual a &quot;ámbito de bloque&quot;.
    testString: 'getUserInput => assert(getUserInput("index").match(/(i\s*=\s*).*\s*.*\s*.*\1("|")block\s*scope\2/g), "The variable <code>i</code> declared in the if statement should equal "block scope".");'
  - text: <code>checkScope()</code> debería devolver &quot;alcance de función&quot;
    testString: 'assert(checkScope() === "function scope", "<code>checkScope()</code> should return "function scope"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkScope() {
"use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
