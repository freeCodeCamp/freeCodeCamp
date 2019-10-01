---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
videoUrl: ''
localeTitle: Agregar elementos a un array con push () y unshift ()
---

## Descripción
<section id="description"> La longitud de un array, como los tipos de datos que puede contener, no es fija. Los arrays se pueden definir con una longitud de cualquier número de elementos, y los elementos se pueden agregar o eliminar con el tiempo; en otras palabras, los arrays son <dfn>mutables</dfn> . En este desafío, veremos dos métodos con los cuales podemos modificar mediante programación un array: <code>Array.push()</code> y <code>Array.unshift()</code> . Ambos métodos toman uno o más elementos como parámetros y agregan esos elementos al array en el que se está utilizando el método; el método <code>push()</code> agrega elementos al final de un array, y <code>unshift()</code> agrega elementos al principio. Considera lo siguiente: <blockquote> let veintitres = &#39;XXIII&#39;; <br> let romanNumerals = [&#39;XXI&#39;, &#39;XXII&#39;]; <br><br> romanNumerals.unshift (&#39;XIX&#39;, &#39;XX&#39;); <br> // ahora es igual a [&#39;XIX&#39;, &#39;XX&#39;, &#39;XXI&#39;, &#39;XXII&#39;] <br><br> romanNumerals.push (veintitrés); <br> // ahora es igual a [&#39;XIX&#39;, &#39;XX&#39;, &#39;XXI&#39;, &#39;XXII&#39;, &#39;XXIII&#39;] Tenga en cuenta que también podemos pasar variables, lo que nos permite una mayor flexibilidad en la modificación dinámica de los datos de nuestro array. </blockquote></section>

## Instrucciones
<section id="instructions"> Hemos definido una función, <code>mixedNumbers</code> , a la que le estamos pasando un array como argumento. Modifique la función utilizando <code>push()</code> y <code>unshift()</code> para agregar <code>&#39;I&#39;, 2, &#39;three&#39;</code> al principio del array y <code>7, &#39;VIII&#39;, 9</code> al final para que el array devuelto contenga representaciones de los números 1-9 en orden. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mixedNumbers([&quot;IV&quot;, 5, &quot;six&quot;])</code> ahora deben devolver <code>[&quot;I&quot;, 2, &quot;three&quot;, &quot;IV&quot;, 5, &quot;six&quot;, 7, &quot;VIII&quot;, 9]</code>'
    testString: 'assert.deepEqual(mixedNumbers(["IV", 5, "six"]), ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9], "<code>mixedNumbers(["IV", 5, "six"])</code> should now return <code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>");'
  - text: La función <code>mixedNumbers</code> debe utilizar el método <code>push()</code>
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.push\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>push()</code> method");'
  - text: La función <code>mixedNumbers</code> debe utilizar el método <code>unshift()</code>
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.unshift\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
