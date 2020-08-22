---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: El múltiplo común más pequeño
---

## Description
<section id="description"> Encuentre el múltiplo común más pequeño de los parámetros provistos que se pueden dividir en partes iguales por ambos, así como por todos los números secuenciales en el rango entre estos parámetros. El rango será una matriz de dos números que no necesariamente estarán en orden numérico. Por ejemplo, si le dan 1 y 3, encuentre el múltiplo común más pequeño de 1 y 3 que también sea divisible por todos los números <em>entre</em> 1 y 3. La respuesta aquí sería 6. Recuerde usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Lectura-Búsqueda-Preguntar</a> si obtiene atascado. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>smallestCommons([1, 5])</code> debe devolver un número.'
    testString: 'assert.deepEqual(typeof smallestCommons([1, 5]), "number", "<code>smallestCommons([1, 5])</code> should return a number.");'
  - text: '<code>smallestCommons([1, 5])</code> debe devolver 60.'
    testString: 'assert.deepEqual(smallestCommons([1, 5]), 60, "<code>smallestCommons([1, 5])</code> should return 60.");'
  - text: '<code>smallestCommons([5, 1])</code> debe devolver 60.'
    testString: 'assert.deepEqual(smallestCommons([5, 1]), 60, "<code>smallestCommons([5, 1])</code> should return 60.");'
  - text: '<code>smallestCommons([2, 10])</code> debe devolver 2520.'
    testString: 'assert.deepEqual(smallestCommons([2, 10]), 2520, "<code>smallestCommons([2, 10])</code> should return 2520.");'
  - text: '<code>smallestCommons([1, 13])</code> debe devolver 360360.'
    testString: 'assert.deepEqual(smallestCommons([1, 13]), 360360, "<code>smallestCommons([1, 13])</code> should return 360360.");'
  - text: '<code>smallestCommons([23, 18])</code> debe devolver 6056820.'
    testString: 'assert.deepEqual(smallestCommons([23, 18]), 6056820, "<code>smallestCommons([23, 18])</code> should return 6056820.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
