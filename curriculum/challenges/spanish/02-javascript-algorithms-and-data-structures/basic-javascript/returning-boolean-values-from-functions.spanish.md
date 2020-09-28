---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1
videoUrl: ''
localeTitle: Devolviendo valores booleanos desde funciones
---

## Description
<section id="description"> De la <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">comparación con el operador de igualdad</a> puede recordar que todos los operadores de comparación devuelven un valor booleano <code>true</code> o <code>false</code> . A veces las personas usan una declaración if / else para hacer una comparación, como esta: <blockquote> función isEqual (a, b) { <br> si (a === b) { <br> devuelve verdadero <br> } else { <br> falso retorno; <br> } <br> } </blockquote> Pero hay una mejor manera de hacer esto. Como <code>===</code> devuelve <code>true</code> o <code>false</code> , podemos devolver el resultado de la comparación: <blockquote> función isEqual (a, b) { <br> devuelve a === b; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Arreglar la función <code>isLess</code> permite eliminar las sentencias <code>if/else</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>isLess(10,15)</code> debe devolver <code>true</code>'
    testString: 'assert(isLess(10,15) === true, "<code>isLess(10,15)</code> should return <code>true</code>");'
  - text: '<code>isLess(15,10)</code> debe devolver <code>false</code>'
    testString: 'assert(isLess(15, 10) === false, "<code>isLess(15,10)</code> should return <code>false</code>");'
  - text: No debes usar ninguna declaración <code>if</code> o <code>else</code>
    testString: 'assert(!/if|else/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
