---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
videoUrl: ''
localeTitle: Utilice typeof para comprobar el tipo de una variable
---

## Description
<section id="description"> Puede usar <code>typeof</code> para verificar la estructura de datos, o tipo, de una variable. Esto es útil en la depuración cuando se trabaja con múltiples tipos de datos. Si crees que estás agregando dos números, pero uno es en realidad una cadena, los resultados pueden ser inesperados. Los errores de tipo pueden estar al acecho en cálculos o llamadas de función. Tenga cuidado especialmente cuando esté accediendo y trabajando con datos externos en forma de un objeto de notación de objetos de JavaScript (JSON). Aquí hay algunos ejemplos usando <code>typeof</code> : <blockquote> console.log (typeof &quot;&quot;); // salidas &quot;cadena&quot; <br> console.log (typeof 0); // salidas &quot;número&quot; <br> console.log (typeof []); // salidas &quot;objeto&quot; <br> console.log (typeof {}); // salidas &quot;objeto&quot; </blockquote> JavaScript reconoce seis tipos de datos primitivos (inmutables): <code>Boolean</code> , <code>Null</code> , no <code>Undefined</code> , <code>Number</code> , <code>String</code> y <code>Symbol</code> (nuevo con ES6) y un tipo para elementos mutables: <code>Object</code> . Tenga en cuenta que en JavaScript, las matrices son técnicamente un tipo de objeto. </section>

## Instructions
<section id="instructions"> Añadir dos <code>console.log()</code> declaraciones para comprobar el <code>typeof</code> cada una de las dos variables de <code>seven</code> y <code>three</code> en el código. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar <code>typeof</code> en dos sentencias <code>console.log()</code> para verificar el tipo de las variables.
    testString: 'assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2, "Your code should use <code>typeof</code> in two <code>console.log()</code> statements to check the type of the variables.");'
  - text: Su código debe usar <code>typeof</code> para verificar el tipo de la variable <code>seven</code> .
    testString: 'assert(code.match(/typeof[\( ]seven\)?/g), "Your code should use <code>typeof</code> to check the type of the variable <code>seven</code>.");'
  - text: Su código debe usar <code>typeof</code> para verificar el tipo de la variable <code>three</code> .
    testString: 'assert(code.match(/typeof[\( ]three\)?/g), "Your code should use <code>typeof</code> to check the type of the variable <code>three</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
