---
id: 5900f4ba1000cf542c50ffcd
challengeType: 5
title: 'Problem 334: Spilling the beans'
videoUrl: ''
localeTitle: 'Problema 334: derramando los frijoles'
---

## Description
<section id="description"> En el cielo de Platón, existe un número infinito de tazones en una línea recta. Cada tazón contiene algunos o ninguno de un número finito de frijoles. Un niño juega un juego, que permite solo un tipo de movimiento: quitar dos frijoles de cualquier tazón y colocar uno en cada uno de los dos tazones adyacentes. El juego termina cuando cada tazón contiene uno o ninguno de los frijoles. <p> Por ejemplo, considere dos tazones adyacentes que contienen 2 y 3 frijoles respectivamente, todos los otros tazones están vacíos. Los siguientes ocho movimientos terminarán el juego: </p><p> Te dan las siguientes secuencias: t0 = 123456. </p><pre> <code> ti = ti-12 , if ti-1 is even ti-12 926252, if ti-1 is odd where ⌊x⌋ is the floor function and is the bitwise XOR operator. bi = ( ti mod 211) + 1.</code> </pre><p> Los dos primeros términos de la última secuencia son b1 = 289 y b2 = 145. Si comenzamos con frijoles b1 y b2 en dos tazones adyacentes, se necesitarían 3419100 movimientos para finalizar el juego. </p><p> Considere ahora 1500 tazones adyacentes que contienen b1, b2, ..., frijoles b1500 respectivamente, todos los otros tazones están vacíos. Encuentra cuántos movimientos se necesitan antes de que termine el juego. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler334()</code> debe devolver 150320021261690850.
    testString: 'assert.strictEqual(euler334(), 150320021261690850, "<code>euler334()</code> should return 150320021261690850.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler334() {
  // Good luck!
  return true;
}

euler334();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
