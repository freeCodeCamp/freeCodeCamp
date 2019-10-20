---
title: Zeckendorf number representation
id: 594810f028c0303b75339ad6
challengeType: 5
videoUrl: ''
localeTitle: Representación de número de pueblo
---

## Description
<section id="description"><p> Del mismo modo que los números se pueden representar en una notación posicional como sumas de múltiplos de las potencias de diez (decimal) o dos (binario); todos los enteros positivos se pueden representar como la suma de uno o cero veces los miembros distintos de la serie de Fibonacci. </p><p> Recuerde que los primeros seis números distintos de Fibonacci son: <code>1, 2, 3, 5, 8, 13</code> . El número decimal once se puede escribir como <code>0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1</code> o <code>010100</code> en notación posicional donde las columnas representan la multiplicación por un miembro particular de la secuencia. Los ceros iniciales se eliminan para que el decimal 11 se convierta en <code>10100</code> . </p><p> 10100 no es la única forma de hacer 11 a partir de los números de Fibonacci; sin embargo, <code>0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1</code> o 010011 también representaría el decimal 11. Para un verdadero número de Zeckendorf existe la restricción añadida de que &quot;no se pueden usar dos números de Fibonacci consecutivos&quot;, lo que lleva a la solución única anterior. </p><p> Tarea: escriba una función que genere y devuelva una matriz de los primeros N números de Zeckendorf en orden. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: zeckendorf debe ser función
    testString: 'assert.equal(typeof zeckendorf, "function", "zeckendorf must be function");'
  - text: Tu función <code>zeckendorf</code> debería devolver la respuesta correcta
    testString: 'assert.deepEqual(answer, solution20, "Your <code>zeckendorf</code> function should return the correct answer");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeckendorf(n) {
  // good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
