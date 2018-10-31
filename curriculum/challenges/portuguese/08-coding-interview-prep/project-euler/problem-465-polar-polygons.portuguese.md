---
id: 5900f53d1000cf542c510050
challengeType: 5
title: 'Problem 465: Polar polygons'
videoUrl: ''
localeTitle: 'Problema 465: Polígonos polares'
---

## Description
<section id="description"> O núcleo de um polígono é definido pelo conjunto de pontos a partir dos quais todo o limite do polígono é visível. Nós definimos um polígono polar como um polígono para o qual a origem é estritamente contida dentro de seu kernel. <p> Para este problema, um polígono pode ter vértices colineares consecutivos. No entanto, um polígono ainda não pode ter auto-interseção e não pode ter área zero. </p><p> Por exemplo, apenas o primeiro dos seguintes é um polígono polar (os núcleos do segundo, terceiro e quarto não contêm estritamente a origem e o quinto não tem um kernel): </p><p> Observe que o primeiro polígono tem três vértices colineares consecutivos. </p><p> Seja P (n) o número de polígonos polares, de modo que os vértices (x, y) tenham coordenadas inteiras cujos valores absolutos não sejam maiores que n. </p><p> Observe que os polígonos devem ser contados como diferentes se tiverem um conjunto diferente de arestas, mesmo que incluam a mesma área. Por exemplo, o polígono com vértices [(0,0), (0,3), (1,1), (3,0)] é distinto do polígono com vértices [(0,0), (0,3 ), (1,1), (3,0), (1,0)]. </p><p> Por exemplo, P (1) = 131, P (2) = 1648531, P (3) = 1099461296175 e P (343) mod. 1 000 000 007 = 937293740. </p><p> Encontre P (713) mod 1 000 000 007. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler465()</code> deve retornar 585965659.
    testString: 'assert.strictEqual(euler465(), 585965659, "<code>euler465()</code> should return 585965659.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler465() {
  // Good luck!
  return true;
}

euler465();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
