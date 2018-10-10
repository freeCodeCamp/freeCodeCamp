---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
videoUrl: ''
localeTitle: Combina dos matrices usando el método concat
---

## Description
<section id="description"> <code>Concatenation</code> significa unir artículos de extremo a extremo. JavaScript ofrece el método <code>concat</code> para cadenas y matrices que funcionan de la misma manera. Para las matrices, el método se llama en una, luego se proporciona otra matriz como el argumento a <code>concat</code> , que se agrega al final de la primera matriz. Devuelve una nueva matriz y no muta ninguna de las matrices originales. Aquí hay un ejemplo: <blockquote> [1, 2, 3] .concat ([4, 5, 6]); <br> // Devuelve una nueva matriz [1, 2, 3, 4, 5, 6] </blockquote></section>

## Instructions
<section id="instructions"> Utilice el método <code>concat</code> en la función <code>nonMutatingConcat</code> para concatenar <code>attach</code> al final del <code>original</code> . La función debe devolver la matriz concatenada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: La <code>first</code> matriz no debe cambiar.
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: La <code>second</code> matriz no debe cambiar.
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> debe devolver <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line


  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
