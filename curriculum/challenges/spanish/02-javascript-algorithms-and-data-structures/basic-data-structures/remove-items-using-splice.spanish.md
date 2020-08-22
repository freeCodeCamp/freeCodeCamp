---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: Quitar elementos utilizando empalme ()
---

## Description
<section id="description"> Bien, hemos aprendido cómo eliminar elementos del principio y el final de las matrices con <code>shift()</code> y <code>pop()</code>, pero ¿qué pasa si queremos eliminar un elemento de algún lugar en el medio? ¿O eliminar más de un elemento a la vez? Bueno, ahí es donde entra <code>splice()</code> . <code>splice()</code> nos permite hacer precisamente eso: <strong>eliminar cualquier número de elementos consecutivos</strong> de cualquier lugar en una matriz. <code>splice()</code> puede tomar hasta 3 parámetros, pero por ahora, nos enfocaremos solo en los primeros 2. Los primeros dos parámetros de <code>splice()</code> son enteros que representan índices, o posiciones, de la matriz que <code>splice()</code> está siendo exhortó a. Y recuerde, las matrices tienen <em>un índice de cero</em>, por lo que para indicar el primer elemento de una matriz, usaríamos <code>0</code>. El primer parámetro de <code>splice()</code> representa el índice en la matriz a partir de la cual comenzar a eliminar elementos, mientras que el segundo parámetro indica el número de elementos a eliminar. Por ejemplo: <blockquote> let array = [&#39;today&#39;, &#39;was&#39;, &#39;not&#39;, &#39;so&#39;, &#39;great&#39;]; <br><br> array.splice (2, 2); <br> // eliminar 2 elementos comenzando con el 3er elemento <br> // array ahora es igual a [&#39;today&#39;, &#39;was&#39;, &#39;great&#39;] </blockquote> <code>splice()</code> no solo modifica la matriz, sino que también devuelve una nueva matriz que contiene el valor de los elementos eliminados: <blockquote> dejar array = [&#39;I&#39;, &#39;am&#39;, &#39;feeling&#39;, &#39;really&#39;, &#39;happy&#39;]; <br><br> deja newArray = array.splice (3, 2); <br> // newArray es igual a [&#39;really&#39;, &#39;happy&#39;] </blockquote></section>

## Instructions
<section id="instructions"> Hemos definido una función, <code>sumOfTen</code> , que toma una matriz como argumento y devuelve la suma de los elementos de esa matriz. Modifique la función, usando <code>splice()</code> , para que devuelva un valor de <code>10</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfTen</code> debe devolver 10
    testString: 'assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10, "<code>sumOfTen</code> should return 10");'
  - text: La función <code>sumOfTen</code> debe utilizar el método <code>splice()</code>
    testString: 'assert.notStrictEqual(sumOfTen.toString().search(/\.splice\(/), -1, "The <code>sumOfTen</code> function should utilize the <code>splice()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfTen(arr) {
  // change code below this line

  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
