---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
videoUrl: ''
localeTitle: Comprender la expresión de función invocada inmediatamente (IIFE)
---

## Description
<section id="description"> Un patrón común en JavaScript es ejecutar una función tan pronto como se declara: <blockquote> (función () { <br> console.log (&quot;Chirp, chirp!&quot;); <br> }) (); // esta es una expresión de función anónima que se ejecuta de inmediato <br> // Salidas &quot;¡Chirrido, chirrido!&quot; inmediatamente </blockquote> Tenga en cuenta que la función no tiene nombre y no está almacenada en una variable. Los dos paréntesis () al final de la expresión de la función hacen que se ejecute o se invoque inmediatamente. Este patrón se conoce como una <code>immediately invoked function expression</code> o <code>IIFE</code> . </section>

## Instructions
<section id="instructions"> Reescriba la función <code>makeNest</code> y elimine su llamada, por lo que es una <code>immediately invoked function expression</code> forma anónima ( <code>IIFE</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La función debe ser anónima.
    testString: 'assert(/\(\s*?function\s*?\(\s*?\)\s*?{/.test(code), "The function should be anonymous.");'
  - text: Su función debe tener paréntesis al final de la expresión para llamarla inmediatamente.
    testString: 'assert(/}\s*?\)\s*?\(\s*?\)/.test(code), "Your function should have parentheses at the end of the expression to call it immediately.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
