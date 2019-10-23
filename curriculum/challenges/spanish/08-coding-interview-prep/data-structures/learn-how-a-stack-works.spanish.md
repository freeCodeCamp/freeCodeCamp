---
id: 587d8250367417b2b2512c5e
title: Learn how a Stack Works
challengeType: 1
videoUrl: ''
localeTitle: Aprende cómo funciona una pila
---

## Description
<section id="description"> Probablemente esté familiarizado con la pila de libros en su mesa. Es probable que haya utilizado la función de deshacer de un editor de texto. También es probable que esté acostumbrado a presionar el botón Atrás de su teléfono para volver a la vista anterior en su aplicación. ¿Sabes lo que todos tienen en común? Todos ellos almacenan los datos de una manera que puede desplazarse hacia atrás. El libro más alto de la pila fue el que se colocó allí por última vez. Si quita ese libro de la parte superior de su pila, expondría el libro que se colocó allí antes del último libro y así sucesivamente. Si lo piensa, en todos los ejemplos anteriores, está recibiendo el tipo de servicio de <dfn>último en</dfn> entrar <dfn>, primero en salir</dfn> . Intentaremos imitar esto con nuestro código. Este esquema de almacenamiento de datos se llama una <dfn>pila</dfn> . En particular, tendríamos que implementar el método <code>push()</code> que empuja los objetos JavaScript en la parte superior de la pila; y el método <code>pop()</code> , que elimina el objeto JavaScript que está en la parte superior de la pila en el momento actual. </section>

## Instructions
<section id="instructions"> Aquí tenemos una pila de asignaciones de tareas representadas como una matriz: <code>&quot;BIO12&quot;</code> está en la base, y <code>&quot;PSY44&quot;</code> está en la parte superior de la pila. Modifique la matriz dada y trátela como una <code>stack</code> usando los métodos de JavaScript mencionados anteriormente. Retire el elemento superior <code>&quot;PSY44&quot;</code> de la pila. Luego agrega <code>&quot;CS50&quot;</code> para que sea el nuevo elemento superior de la pila. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>homeworkStack</code> solo debe contener 4 elementos.
    testString: 'assert(homeworkStack.length === 4, "<code>homeworkStack</code> should only contain 4 elements.");'
  - text: El último elemento en <code>homeworkStack</code> debería ser <code>&quot;CS50&quot;</code> .
    testString: 'assert(homeworkStack[3] === "CS50", "The last element in <code>homeworkStack</code> should be <code>"CS50"</code>.");'
  - text: <code>homeworkStack</code> no debe contener <code>&quot;PSY44&quot;</code> .
    testString: 'assert(homeworkStack.indexOf("PSY44") === -1, "<code>homeworkStack</code> should not contain <code>"PSY44"</code>.");'
  - text: La declaración inicial de <code>homeworkStack</code> no debe ser cambiada.
    testString: 'assert(code.match(/=/g).length === 1 && /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(code), "The initial declaration of the <code>homeworkStack</code> should not be changed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
