---
id: 5900f41c1000cf542c50ff2e
challengeType: 5
title: 'Problem 175: Fractions involving the number of different ways a number can be expressed as a sum of powers of 2'
videoUrl: ''
localeTitle: 'Problema 175: Fracciones que involucran el número de formas diferentes en que un número puede expresarse como una suma de potencias de 2'
---

## Description
<section id="description"> Defina f (0) = 1 y f (n) como el número de formas de escribir n como una suma de potencias de 2 donde no se produce potencia más de dos veces. <p> Por ejemplo, f (10) = 5 ya que hay cinco formas diferentes de expresar 10:10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1 </p><p> Se puede mostrar que para cada fracción p / q (p&gt; 0, q&gt; 0) existe al menos un entero n tal que f (n) / f (n-1) = p / q. Por ejemplo, la n más pequeña para la cual f (n) / f (n-1) = 13/17 es 241. La expansión binaria de 241 es 11110001. Al leer este número binario desde el bit más significativo hasta el bit menos significativo, hay 4 de uno, 3 ceros y 1 uno. Llamaremos a la cadena 4,3,1 la expansión binaria reducida de 241. Encuentre la expansión binaria reducida de la n más pequeña para la cual f (n) / f (n-1) = 123456789/987654321. Da tu respuesta como enteros separados por comas, sin espacios en blanco. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>euler175()</code> debe devolver 1, 13717420, 8.'
    testString: 'assert.strictEqual(euler175(), 1, 13717420, 8, "<code>euler175()</code> should return 1, 13717420, 8.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler175() {
  // Good luck!
  return true;
}

euler175();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
