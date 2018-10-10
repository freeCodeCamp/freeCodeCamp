---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
videoUrl: ''
localeTitle: Eliminar espacios en blanco de inicio y fin
---

## Description
<section id="description"> A veces, los caracteres de espacios en blanco alrededor de las cadenas no son deseados pero están ahí. El procesamiento típico de las cadenas es eliminar el espacio en blanco al principio y al final. </section>

## Instructions
<section id="instructions"> Escriba una expresión regular y use los métodos de cadena apropiados para eliminar los espacios en blanco al principio y al final de las cadenas. <strong>Nota</strong> <br> El método <code>.trim()</code> funcionaría aquí, pero necesitarás completar este desafío usando expresiones regulares. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>result</code> debe ser igual a <code>&quot;Hello, World!&quot;</code>'
    testString: 'assert(result == "Hello, World!", "<code>result</code> should equal to <code>"Hello, World!"</code>");'
  - text: No debes usar el método <code>.trim()</code> .
    testString: 'assert(!code.match(/\.trim\(.*?\)/), "You should not use the <code>.trim()</code> method.");'
  - text: La variable de <code>result</code> no debe ser igual a una cadena.
    testString: 'assert(!code.match(/result\s*=\s*".*?"/), "The <code>result</code> variable should not be set equal to a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
