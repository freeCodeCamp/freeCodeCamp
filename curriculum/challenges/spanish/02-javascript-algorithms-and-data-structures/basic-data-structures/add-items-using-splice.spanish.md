---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: Agregar elementos usando splice ()
---

## Description
<section id="description"> ¿Recuerda que en el último desafío mencionamos que <code>splice()</code> puede tomar hasta tres parámetros? Bueno, podemos ir un paso más allá con <code>splice()</code> ; además de eliminar elementos, podemos usar ese tercer parámetro, que representa uno o más elementos, para <em>agregarlos</em> también. Esto puede ser increíblemente útil para cambiar rápidamente un elemento, o un conjunto de elementos, por otro. Por ejemplo, digamos que está almacenando una combinación de colores para un conjunto de elementos DOM en un array, y desea cambiar dinámicamente un color en función de alguna acción: <blockquote> function colorCambiar (arr, index, newColor) { <br> arr.splice (index, 1, newColor); <br> volver arr; <br> } <br><br> vamos colorScheme = [&#39;# 878787&#39;, &#39;# a08794&#39;, &#39;# bb7e8c&#39;, &#39;# c9b6be&#39;, &#39;# d1becf&#39;]; <br><br> colorScheme = colorChange (colorScheme, 2, &#39;# 332327&#39;); <br> // eliminamos &#39;# bb7e8c&#39; y agregamos &#39;# 332327&#39; en su lugar <br> // colorScheme ahora es igual a [&#39;# 878787&#39;, &#39;# a08794&#39;, &#39;# 332327&#39;, &#39;# c9b6be&#39;, &#39;# d1becf&#39;] </blockquote> Esta función toma un array de valores hexadecimales, un índice para eliminar un elemento y el nuevo color para reemplazar el elemento eliminado. El valor de retorno es un array que contiene un esquema de color recién modificado. Si bien este ejemplo está un poco simplificado, podemos ver el valor que puede tener el uso de <code>splice()</code> en su potencial máximo. </section>

## Instructions
<section id="instructions"> Hemos definido una función, <code>htmlColorNames</code> , que toma un array de colores HTML como un argumento. Modifique la función utilizando <code>splice()</code> para eliminar los dos primeros elementos del array y agregue <code>&#39;DarkSalmon&#39;</code> y <code>&#39;BlanchedAlmond&#39;</code> en sus respectivos lugares. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>htmlColorNames</code> debería devolver <code>[&quot;DarkSalmon&quot;, &quot;BlanchedAlmond&quot;, &quot;LavenderBlush&quot;, &quot;PaleTurqoise&quot;, &quot;FireBrick&quot;]</code>'
    testString: 'assert.deepEqual(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurqoise", "FireBrick"]), ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"], "<code>htmlColorNames</code> should return <code>["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]</code>");'
  - text: La función <code>htmlColorNames</code> debe utilizar el método <code>splice()</code>
    testString: 'assert(/.splice/.test(code), "The <code>htmlColorNames</code> function should utilize the <code>splice()</code> method");'
  - text: No debes usar <code>shift()</code> o <code>unshift()</code> .
    testString: 'assert(!/shift|unshift/.test(code), "You should not use <code>shift()</code> or <code>unshift()</code>.");'
  - text: No debe utilizar la notación de soporte de matriz.
    testString: 'assert(!/\[\d\]\s*=/.test(code), "You should not use array bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function htmlColorNames(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
