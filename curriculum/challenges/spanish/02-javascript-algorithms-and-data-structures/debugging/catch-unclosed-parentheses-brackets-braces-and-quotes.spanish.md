---
id: 587d7b84367417b2b2512b36
title: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes'
localeTitle: 'Captura paréntesis, corchetes, llaves y citas'
challengeType: 1
---

## Description
<section id='description'>
Otro error de sintaxis a tener en cuenta es que todos los paréntesis de apertura, paréntesis, llaves y comillas tienen un par de cierre. El olvido de una pieza suele suceder cuando edita el código existente e inserta elementos con uno de los tipos de pares. Además, tenga cuidado al anidar bloques de código en otros, como agregar una función de devolución de llamada como un argumento a un método.
Una forma de evitar este error es tan pronto como se escribe el carácter de apertura, incluya inmediatamente la coincidencia de cierre, luego mueva el cursor entre ellos y continúe la codificación. Afortunadamente, la mayoría de los editores de código modernos generan la segunda mitad del par automáticamente.
</section>

## Instructions
<section id='instructions'>
Arreglar los errores de dos pares en el código.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu código debería arreglar la pieza faltante de la matriz.
    testString: 'assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g), "Your code should fix the missing piece of the array.");'
  - text: 'Su código debe arreglar la pieza faltante del método <code clase = "notranslate">. Reduce () </code>. La salida de la consola debería mostrar que "la suma de los valores de la matriz es: 6."
    testString: 'assert(arraySum === 6, "Your code should fix the missing piece of the <code>.reduce()</code> method. The console output should show that "Sum of array values is: 6".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
