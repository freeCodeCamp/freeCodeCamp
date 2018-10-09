---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
localeTitle: Agregar elementos a una matriz con push () y unshift ()
challengeType: 1
---

## Description
<section id='description'>
La longitud de una matriz, como los tipos de datos que puede contener, no es fija. Las matrices se pueden definir con una longitud de cualquier número de elementos, y los elementos se pueden agregar o eliminar con el tiempo; en otras palabras, los arreglos son <dfn>mutables</dfn> . En este desafío, veremos dos métodos con los cuales podemos modificar mediante programación una matriz: <code>Array.push()</code> y <code>Array.unshift()</code> .
Ambos métodos toman uno o más elementos como parámetros y agregan esos elementos a la matriz en la que se está utilizando el método; el método <code>push()</code> agrega elementos al final de una matriz, y <code>unshift()</code> agrega elementos al principio. Considera lo siguiente:
<blockquote>let twentyThree = 'XXIII';<br>let romanNumerals = ['XXI', 'XXII'];<br><br>romanNumerals.unshift('XIX', 'XX');<br>// now equals ['XIX', 'XX', 'XXI', 'XXII']<br><br>romanNumerals.push(twentyThree);<br>// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.
</section>

## Instructions
<section id='instructions'>
Hemos definido una función, <code>mixedNumbers</code> , a la que le estamos pasando una matriz como argumento. Modifique la función utilizando <code>push()</code> y <code>unshift()</code> para agregar <code>&#39;I&#39;, 2, &#39;three&#39;</code> al principio de la matriz y <code>7, &#39;VIII&#39;, 9</code> al final para que la matriz devuelta contenga representaciones de los números 1-9 en orden.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>mixedNumbers([&quot;IV&quot;, 5, &quot;six&quot;])</code> ahora debe devolver <code>[&quot;I&quot;, 2, &quot;three&quot;, &quot;IV&quot;, 5, &quot;six&quot;, 7, &quot;VIII&quot;, 9]</code> '
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
