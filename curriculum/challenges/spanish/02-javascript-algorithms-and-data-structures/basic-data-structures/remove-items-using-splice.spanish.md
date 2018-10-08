---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
localeTitle: Quitar elementos utilizando empalme ()
challengeType: 1
---

## Description
<section id='description'> 
Bien, hemos aprendido cómo eliminar elementos del principio y el final de los arreglos usando <code>shift()</code> y <code>pop()</code> , pero ¿qué pasa si queremos eliminar un elemento de algún lugar en el medio? ¿O eliminar más de un elemento a la vez? Bueno, ahí es donde entra <code>splice()</code> . <code>splice()</code> nos permite hacer precisamente eso: <strong>eliminar cualquier número de elementos consecutivos</strong> de cualquier lugar en una matriz. 
<code>splice()</code> puede tomar hasta 3 parámetros, pero por ahora, nos enfocaremos solo en los primeros 2. Los primeros dos parámetros de <code>splice()</code> son enteros que representan índices, o posiciones, de la matriz que <code>splice()</code> es siendo llamado. Y recuerde, las matrices tienen <em>un índice de cero</em> , por lo que para indicar el primer elemento de una matriz, usaríamos <code>0</code> . El primer parámetro de <code>splice()</code> representa el índice en la matriz a partir de la cual comenzar a eliminar elementos, mientras que el segundo parámetro indica el número de elementos a eliminar. Por ejemplo: 
<blockquote>let array = ['today', 'was', 'not', 'so', 'great'];<br><br>array.splice(2, 2);<br>// remove 2 elements beginning with the 3rd element<br>// array now equals ['today', 'was', 'great']</blockquote> 
<code>splice()</code> no solo modifica la matriz en la que se llama, sino que también devuelve una nueva matriz que contiene el valor de los elementos eliminados: 
<blockquote>let array = ['I', 'am', 'feeling', 'really', 'happy'];<br><br>let newArray = array.splice(3, 2);<br>// newArray equals ['really', 'happy']</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Hemos definido una función, <code>sumOfTen</code> , que toma una matriz como argumento y devuelve la suma de los elementos de esa matriz. Modifique la función, usando <code>splice()</code> , para que devuelva un valor de <code>10</code> . 
</section>

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
