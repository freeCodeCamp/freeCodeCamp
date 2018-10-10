---
id: 5900f3ec1000cf542c50feff
challengeType: 5
title: 'Problem 128: Hexagonal tile differences'
videoUrl: ''
localeTitle: 'Problema 128: diferencias de tejas hexagonales'
---

## Description
<section id="description"> Una baldosa hexagonal con el número 1 está rodeada por un anillo de seis baldosas hexagonales, comenzando en &quot;12 en punto&quot; y numerando las baldosas 2 a 7 en sentido contrario a las agujas del reloj. Los nuevos anillos se agregan de la misma manera, con los siguientes anillos numerados del 8 al 19, del 20 al 37, del 38 al 61, y así sucesivamente. El siguiente diagrama muestra los tres primeros anillos. <p> Al encontrar la diferencia entre la baldosa n y cada uno de sus seis vecinos, definiremos PD (n) como el número de esas diferencias que son primos. Por ejemplo, trabajando en el sentido de las manecillas del reloj alrededor de la baldosa 8, las diferencias son 12, 29, 11, 6, 1 y 13. Entonces, PD (8) = 3. Del mismo modo, las diferencias alrededor de la baldosa 17 son 1, 17, 16, 1 , 11 y 10, por lo tanto, PD (17) = 2. Se puede mostrar que el valor máximo de PD (n) es 3. Si todas las fichas para las cuales PD (n) = 3 se enumeran en orden ascendente para formar una secuencia, el décimo mosaico sería 271. Encuentra el mosaico 2000 en esta secuencia. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler128()</code> debe devolver 14516824220.
    testString: 'assert.strictEqual(euler128(), 14516824220, "<code>euler128()</code> should return 14516824220.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler128() {
  // Good luck!
  return true;
}

euler128();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
