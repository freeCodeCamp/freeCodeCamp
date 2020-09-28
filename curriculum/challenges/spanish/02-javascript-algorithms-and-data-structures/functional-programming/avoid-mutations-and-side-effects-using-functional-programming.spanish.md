---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: Evite las mutaciones y los efectos secundarios utilizando la programación funcional
---

## Description
<section id="description"> Si aún no lo ha resuelto, el problema en el desafío anterior fue con la llamada de <code>splice</code> en la función <code>tabClose()</code> . Desafortunadamente, el <code>splice</code> cambia la matriz original a la que se llama, por lo que la segunda llamada a esta usó una matriz modificada y dio resultados inesperados. Este es un pequeño ejemplo de un patrón mucho más grande: se llama una función en una variable, una matriz o un objeto, y la función cambia la variable o algo en el objeto. Uno de los principios básicos de la programación funcional es no cambiar las cosas. Los cambios conducen a errores. Es más fácil prevenir errores sabiendo que sus funciones no cambian nada, incluidos los argumentos de la función o cualquier variable global. El ejemplo anterior no tenía operaciones complicadas, pero el método de <code>splice</code> cambió la matriz original y dio como resultado un error. Recuerde que en la programación funcional, el cambio o la alteración de las cosas se denomina <code>mutation</code> y el resultado se denomina <code>side effect</code> . Una función, idealmente, debería ser una <code>pure function</code> , lo que significa que no causa ningún efecto secundario. Intentemos dominar esta disciplina y no alteremos ninguna variable u objeto en nuestro código. </section>

## Instructions
<section id="instructions"> Rellene el código de la función <code>incrementer</code>  para que devuelva el valor de la variable global <code>fixedValue</code> incrementado en uno. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su <code>incrementer</code> funciones no debe cambiar el valor de <code>fixedValue</code> .
    testString: 'assert(fixedValue === 4, "Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.");'
  - text: Su función <code>incrementer</code> debe devolver un valor que sea mayor que el valor de valor <code>fixedValue</code> .
    testString: 'assert(newValue === 5, "Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line


  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
