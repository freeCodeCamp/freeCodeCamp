---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
videoUrl: ''
localeTitle: Eliminar elementos de una matriz con pop () y shift ()
---

## Description
<section id="description"> Tanto <code>push()</code> como <code>unshift()</code> tienen métodos correspondientes que son opuestos casi funcionales: <code>pop()</code> y <code>shift()</code> . Como ya habrá adivinado, en lugar de agregar, <code>pop()</code> <em>elimina</em> un elemento del final de una matriz, mientras que <code>shift()</code> elimina un elemento desde el principio. La diferencia clave entre <code>pop()</code> y <code>shift()</code> y sus primos <code>push()</code> y <code>unshift()</code> , es que ninguno de los dos métodos toma parámetros, y cada uno solo permite que una matriz sea modificada por un solo elemento a la vez. Vamos a ver: <blockquote> dejar saludos = [&#39;¿qué hay?&#39;, &#39;hola&#39;, &#39;nos vemos&#39;]; <br><br> greetings.pop (); <br> // ahora es igual a [&#39;whats up?&#39;, &#39;hola&#39;] <br><br> saludos. cambio (); <br> // ahora es igual a [&#39;hola&#39;] </blockquote> También podemos devolver el valor del elemento eliminado con uno de estos métodos: <blockquote> vamos a popped = greetings.pop (); <br> // devuelve &#39;hola&#39; <br> // saludos ahora es igual a [] </blockquote></section>

## Instructions
<section id="instructions"> Hemos definido una función, <code>popShift</code> , que toma una matriz como argumento y devuelve una nueva matriz. Modifique la función, utilizando <code>pop()</code> y <code>shift()</code> , para eliminar el primer y último elemento de la matriz de argumentos, y asigne los elementos eliminados a sus variables correspondientes, de modo que la matriz devuelta contenga sus valores. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>popShift([&quot;challenge&quot;, &quot;is&quot;, &quot;not&quot;, &quot;complete&quot;])</code> debe devolver <code>[&quot;challenge&quot;, &quot;complete&quot;]</code>'
    testString: 'assert.deepEqual(popShift(["challenge", "is", "not", "complete"]), ["challenge", "complete"], "<code>popShift(["challenge", "is", "not", "complete"])</code> should return <code>["challenge", "complete"]</code>");'
  - text: La función <code>popShift</code> debería utilizar el método <code>pop()</code>
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1, "The <code>popShift</code> function should utilize the <code>pop()</code> method");'
  - text: La función <code>popShift</code> debería utilizar el método <code>shift()</code>
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1, "The <code>popShift</code> function should utilize the <code>shift()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
