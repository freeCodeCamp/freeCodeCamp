---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
videoUrl: ''
localeTitle: Prevenir la mutación de objetos
---

## Description
<section id="description"> Como se vio en el desafío anterior, la declaración <code>const</code> por sí sola no protege realmente sus datos de la mutación. Para garantizar que sus datos no cambien, JavaScript proporciona una función <code>Object.freeze</code> para evitar la mutación de datos. Una vez que el objeto está congelado, ya no puede agregar, actualizar o eliminar propiedades de él. Cualquier intento de cambiar el objeto será rechazado sin un error. <blockquote> vamos obj = { <br> nombre: &quot;FreeCodeCamp&quot;, <br> revisión: &quot;impresionante&quot; <br> }; <br> Object.freeze (obj); <br> obj.review = &quot;malo&quot;; // será ignorado. Mutación no permitida <br> obj.newProp = &quot;Test&quot;; // será ignorado. Mutación no permitida <br> console.log (obj); <br> // {nombre: &quot;FreeCodeCamp&quot;, revisión: &quot;Impresionante&quot;} </blockquote></section>

## Instructions
<section id="instructions"> En este desafío, <code>Object.freeze</code> para evitar que <code>Object.freeze</code> las constantes matemáticas. <code>MATH_CONSTANTS</code> congelar el objeto <code>MATH_CONSTANTS</code> para que nadie pueda alterar el valor de <code>PI</code> , agregar o eliminar propiedades. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No reemplace la palabra clave <code>const</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: <code>MATH_CONSTANTS</code> debe ser una variable constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS/g), "<code>MATH_CONSTANTS</code> should be a constant variable (by using <code>const</code>).");'
  - text: No cambie los <code>MATH_CONSTANTS</code> originales.
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g), "Do not change original <code>MATH_CONSTANTS</code>.");'
  - text: <code>PI</code> es igual a <code>3.14</code> .
    testString: 'assert(PI === 3.14, "<code>PI</code> equals <code>3.14</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
