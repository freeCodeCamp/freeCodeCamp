---
id: 5900f4f71000cf542c51000a
challengeType: 5
title: 'Problem 395: Pythagorean tree'
videoUrl: ''
localeTitle: 'Problema 395: Árvore Pitagórica'
---

## Description
<section id="description"> A árvore pitagórica é um fractal gerado pelo seguinte procedimento: <p> Comece com um quadrado unitário. Então, chamando uma das laterais de sua base (na animação, o lado inferior é a base): Anexe um triângulo retângulo ao lado oposto à base, com a hipotenusa coincidindo com esse lado e com os lados em um 3-4- Relação 5. Observe que o lado menor do triângulo deve estar no lado &quot;direito&quot; em relação à base (veja a animação). Anexe um quadrado a cada perna do triângulo retângulo, com um dos lados coincidindo com essa perna. Repita este procedimento para os dois quadrados, considerando como suas bases os lados tocando o triângulo. </p><p> A figura resultante, após um número infinito de iterações, é a árvore pitagórica. </p><p> Pode-se demonstrar que existe pelo menos um retângulo, cujos lados são paralelos ao maior quadrado da árvore pitagórica, o qual encerra completamente a árvore pitagórica. </p><p> Encontre a menor área possível para tal retângulo delimitador e dê sua resposta arredondada para 10 casas decimais. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler395()</code> deve retornar 28.2453753155.
    testString: 'assert.strictEqual(euler395(), 28.2453753155, "<code>euler395()</code> should return 28.2453753155.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler395() {
  // Good luck!
  return true;
}

euler395();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
