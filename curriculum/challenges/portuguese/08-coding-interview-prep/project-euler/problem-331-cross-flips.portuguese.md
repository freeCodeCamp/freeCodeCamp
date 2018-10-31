---
id: 5900f4b71000cf542c50ffca
challengeType: 5
title: 'Problem 331: Cross flips'
videoUrl: ''
localeTitle: 'Problema 331: Cross Flips'
---

## Description
<section id="description"> N × N discos são colocados em um tabuleiro de jogo quadrado. Cada disco tem um lado preto e um lado branco. <p> Em cada turno, você pode escolher um disco e virar todos os discos na mesma linha e na mesma coluna que este disco: assim, os discos 2 × N-1 são invertidos. O jogo termina quando todos os discos mostram seu lado branco. O exemplo a seguir mostra um jogo em uma placa de 5 × 5. </p><p> Pode ser provado que 3 é o número mínimo de turnos para terminar este jogo. </p><p> O disco inferior esquerdo na placa N × N tem coordenadas (0,0); o disco inferior direito tem coordenadas (N-1,0) e o disco superior esquerdo tem coordenadas (0, N-1). </p><p> Seja CN a seguinte configuração de uma placa com discos N × N: Um disco em (x, y) satisfazendo, mostra seu lado preto; caso contrário, mostra seu lado branco. C5 é mostrado acima. </p><p> Seja T (N) o número mínimo de turnos para terminar um jogo a partir da configuração CN ou 0 se a configuração CN for insolúvel. Nós mostramos que T (5) = 3. Você também é dado que T (10) = 29 e T (1 000) = 395253. </p><p> Encontrar . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler331()</code> deve retornar 467178235146843500.
    testString: 'assert.strictEqual(euler331(), 467178235146843500, "<code>euler331()</code> should return 467178235146843500.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler331() {
  // Good luck!
  return true;
}

euler331();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
