---
id: 5900f4d91000cf542c50ffeb
challengeType: 5
title: 'Problem 363: Bézier Curves'
videoUrl: ''
localeTitle: 'Problema 363: Curvas de Bézier'
---

## Description
<section id="description"> Uma curva cúbica de Bézier é definida por quatro pontos: P0, P1, P2 e P3. <p> A curva é construída da seguinte forma: Nos segmentos P0P1, P1P2 e P2P3 os pontos Q0, Q1 e Q2 são desenhados de tal forma que P0Q0 / P0P1 = P1Q1 / P1P2 = P2Q2 / P2P3 = t (t em [0,1]). Nos segmentos Q0Q1 e Q1Q2, os pontos R0 e R1 são sorteados de tal forma que Q0R0 / Q0Q1 = Q1R1 / Q1Q2 = t para o mesmo valor de t. No segmento R0R1, o ponto B é desenhado de tal forma que R0B / R0R1 = t para o mesmo valor de t. A curva de Bézier definida pelos pontos P0, P1, P2, P3 é o locus de B, já que Q0 toma todas as posições possíveis no segmento P0P1. (Por favor, note que para todos os pontos o valor de t é o mesmo.) </p><p> Neste endereço web (externo), você encontrará um applet que permite arrastar os pontos P0, P1, P2 e P3 para ver como é a curva de Bézier (curva verde) definida por esses pontos. Você também pode arrastar o ponto Q0 ao longo do segmento P0P1. </p><p> A partir da construção, fica claro que a curva de Bézier será tangente aos segmentos P0P1 em P0 e P2P3 em P3. </p><p> Uma curva cúbica de Bézier com P0 = (1,0), P1 = (1, v), P2 = (v, 1) e P3 = (0,1) é usada para aproximar um quarto de círculo. O valor v&gt; 0 é escolhido de forma que a área delimitada pelas linhas OP0, OP3 e a curva seja igual a π / 4 (a área do quarto círculo). </p><p> Por quantos por cento o comprimento da curva difere do comprimento do quarto círculo? Isto é, se L é o comprimento da curva, calcule 100 × L - π / 2π / 2 Dê sua resposta arredondada para 10 dígitos atrás do ponto decimal. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>euler363()</code> deve retornar 0,0000372091.'
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
