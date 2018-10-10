---
id: 5900f4d91000cf542c50ffeb
challengeType: 5
title: 'Problem 363: Bézier Curves'
videoUrl: ''
localeTitle: 'Problema 363: Curvas de Bézier'
---

## Description
<section id="description"> Una curva de Bézier cúbica se define por cuatro puntos: P0, P1, P2 y P3. <p> La curva se construye de la siguiente manera: En los segmentos P0P1, P1P2 y P2P3, los puntos Q0, Q1 y Q2 se dibujan de manera que P0Q0 / P0P1 = P1Q1 / P1P2 = P2Q2 / P2P3 = t (t en [0,1]). En los segmentos Q0Q1 y Q1Q2, los puntos R0 y R1 se dibujan de manera tal que Q0R0 / Q0Q1 = Q1R1 / Q1Q2 = t para el mismo valor de t. En el segmento R0R1, el punto B se dibuja de manera tal que R0B / R0R1 = t para el mismo valor de t. La curva de Bézier definida por los puntos P0, P1, P2, P3 es el lugar de B cuando Q0 toma todas las posiciones posibles en el segmento P0P1. (Tenga en cuenta que para todos los puntos el valor de t es el mismo.) </p><p> En esta dirección web (externa) encontrará un applet que le permite arrastrar los puntos P0, P1, P2 y P3 para ver cómo se ve la curva de Bézier (curva verde) definida por esos puntos. También puede arrastrar el punto Q0 a lo largo del segmento P0P1. </p><p> De la construcción queda claro que la curva de Bézier será tangente a los segmentos P0P1 en P0 y P2P3 en P3. </p><p> Se utiliza una curva de Bézier cúbica con P0 = (1,0), P1 = (1, v), P2 = (v, 1) y P3 = (0,1) para aproximar un cuarto de círculo. El valor v&gt; 0 se elige de modo que el área encerrada por las líneas OP0, OP3 y la curva sea igual a π / 4 (el área del cuarto de círculo). </p><p> ¿En cuánto por ciento la longitud de la curva difiere de la longitud del cuarto de círculo? Es decir, si L es la longitud de la curva, calcule 100 × L - π / 2π / 2. Dé su respuesta redondeada a 10 dígitos detrás del punto decimal. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler363()</code> debe devolver 0.0000372091.
    testString: 'assert.strictEqual(euler363(), 0.0000372091, "<code>euler363()</code> should return 0.0000372091.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler363() {
  // Good luck!
  return true;
}

euler363();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
