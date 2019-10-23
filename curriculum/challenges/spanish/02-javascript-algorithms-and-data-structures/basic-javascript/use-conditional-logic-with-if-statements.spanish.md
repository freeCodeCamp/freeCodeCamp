---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
videoUrl: ''
localeTitle: Usa lógica condicional con sentencias if
---

## Description
<section id="description"> <code>If</code> se usan sentencias para tomar decisiones en código. La palabra clave <code>if</code> le dice a JavaScript que ejecute el código entre llaves en ciertas condiciones, definidas entre paréntesis. Estas condiciones se conocen como condiciones <code>Boolean</code> y solo pueden ser <code>true</code> o <code>false</code> . Cuando la condición se evalúa como <code>true</code> , el programa ejecuta la instrucción dentro de las llaves. Cuando la condición booleana se evalúa como <code>false</code> , la instrucción dentro de las llaves no se ejecutará. <strong>Pseudocódigo</strong> <blockquote> si (la <i>condición es verdadera</i> ) { <br> <i>declaración se ejecuta</i> <br> } </blockquote> <strong>Ejemplo</strong> <blockquote> prueba de función (myCondition) { <br> si (miCondición) { <br> volver &quot;era verdad&quot;; <br> } <br> volver &quot;fue falso&quot;; <br> } <br> prueba (verdadero); // devuelve &quot;fue verdad&quot; <br> prueba (falso); // devuelve &quot;fue falso&quot; </blockquote> Cuando se llama a la <code>test</code> con un valor <code>true</code> , la sentencia <code>if</code> evalúa <code>myCondition</code> para ver si es <code>true</code> o no. Dado que es <code>true</code> , la función devuelve <code>&quot;It was true&quot;</code> . Cuando llamamos a <code>test</code> con un valor de <code>false</code> , <code>myCondition</code> <em>no</em> es <code>true</code> y la instrucción entre llaves no se ejecuta y la función devuelve <code>&quot;It was false&quot;</code> . </section>

## Instructions
<section id="instructions"> Cree una instrucción <code>if</code> dentro de la función para devolver <code>&quot;Yes, that was true&quot;</code> si el parámetro <code>wasThatTrue</code> es <code>true</code> y devuelva <code>&quot;No, that was false&quot;</code> contrario. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>trueOrFalse</code> debe ser una función
    testString: 'assert(typeof trueOrFalse === "function", "<code>trueOrFalse</code> should be a function");'
  - text: <code>trueOrFalse(true)</code> debe devolver una cadena
    testString: 'assert(typeof trueOrFalse(true) === "string", "<code>trueOrFalse(true)</code> should return a string");'
  - text: <code>trueOrFalse(false)</code> debe devolver una cadena
    testString: 'assert(typeof trueOrFalse(false) === "string", "<code>trueOrFalse(false)</code> should return a string");'
  - text: '<code>trueOrFalse(true)</code> debe devolver &quot;Sí, eso fue cierto&quot;'
    testString: 'assert(trueOrFalse(true) === "Yes, that was true", "<code>trueOrFalse(true)</code> should return "Yes, that was true"");'
  - text: '<code>trueOrFalse(false)</code> debe devolver &quot;No, eso fue falso&quot;'
    testString: 'assert(trueOrFalse(false) === "No, that was false", "<code>trueOrFalse(false)</code> should return "No, that was false"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.



  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
