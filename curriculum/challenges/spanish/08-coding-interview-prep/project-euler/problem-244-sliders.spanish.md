---
id: 5900f4601000cf542c50ff72
challengeType: 5
title: 'Problem 244: Sliders'
videoUrl: ''
localeTitle: 'Problema 244: Deslizadores'
---

## Description
<section id="description"> Probablemente conozcas el juego Quince Puzzle. Aquí, en lugar de fichas numeradas, tenemos siete fichas rojas y ocho fichas azules. Un movimiento se denota mediante la inicial en mayúscula de la dirección (izquierda, derecha, arriba, abajo) en la que se desliza el mosaico, por ejemplo, a partir de la configuración (S), por la secuencia LULUR llegamos a la configuración (E): <p> (S), (E) </p><p> Para cada ruta, su suma de comprobación se calcula mediante (pseudocódigo): </p><p> suma de control = 0 suma de control = (suma de control × 243 + m1) mod 100 000 007 suma de control = (suma de control × 243 + m2) mod 100 000 007 ... suma de verificación = (suma de control × 243 + mn) mod 100 000 007 donde mk es el valor ASCII de La letra k en la secuencia de movimiento y los valores ASCII para los movimientos son: </p><p> L76R82U85D68 </p><p> Para la secuencia LULUR dada anteriormente, la suma de comprobación sería 19761398. Ahora, a partir de la configuración (S), encuentre todas las formas más cortas para alcanzar la configuración (T). </p><p> (S T) </p><p> ¿Cuál es la suma de todas las sumas de comprobación para las rutas que tienen la longitud mínima? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler244()</code> debe devolver 96356848.
    testString: 'assert.strictEqual(euler244(), 96356848, "<code>euler244()</code> should return 96356848.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler244() {
  // Good luck!
  return true;
}

euler244();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
