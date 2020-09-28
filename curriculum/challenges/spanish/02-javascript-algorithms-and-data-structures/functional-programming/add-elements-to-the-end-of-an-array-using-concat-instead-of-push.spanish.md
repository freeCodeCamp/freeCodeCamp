---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
videoUrl: ''
localeTitle: Agregue elementos al final de una matriz usando concat en lugar de empujar
---

## Description
<section id="description"> La programación funcional tiene que ver con la creación y el uso de funciones no mutantes. El último desafío introdujo el método <code>concat</code> como una forma de combinar arreglos en uno nuevo sin mutar los arreglos originales. Comparar <code>concat</code> con el método de <code>push</code> . <code>Push</code> agrega un elemento al final de la misma matriz a la que se llama, lo que muta esa matriz. Aquí hay un ejemplo: <blockquote> var arr = [1, 2, 3]; <br> arr.push ([4, 5, 6]); <br> // arr se cambia a [1, 2, 3, [4, 5, 6]] <br> // No es la forma de programación funcional </blockquote> <code>Concat</code> ofrece una forma de agregar nuevos elementos al final de una matriz sin efectos secundarios mutantes. </section>

## Instructions
<section id="instructions"> Cambie la función <code>nonMutatingPush</code> para que use <code>concat</code> para agregar <code>newItem</code> al final del <code>original</code> en lugar de <code>push</code> . La función debe devolver una matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: Su código no debe utilizar el método de <code>push</code> .
    testString: 'assert(!code.match(/\.push/g), "Your code should not use the <code>push</code> method.");'
  - text: La <code>first</code> matriz no debe cambiar.
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: La <code>second</code> matriz no debe cambiar.
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingPush([1, 2, 3], [4, 5])</code> debe devolver <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingPush([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.push(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
