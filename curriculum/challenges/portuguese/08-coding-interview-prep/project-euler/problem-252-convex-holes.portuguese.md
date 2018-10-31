---
id: 5900f4691000cf542c50ff7b
challengeType: 5
title: 'Problem 252: Convex Holes'
videoUrl: ''
localeTitle: 'Problema 252: Orifícios Convexos'
---

## Description
<section id="description"> Dado um conjunto de pontos em um plano, definimos um buraco convexo para ser um polígono convexo tendo como vértices qualquer um dos pontos dados e não contendo nenhum dos pontos dados em seu interior (além dos vértices, outros pontos podem no perímetro do polígono). <p> Como exemplo, a imagem abaixo mostra um conjunto de vinte pontos e alguns desses buracos convexos. O buraco convexo mostrado como um heptágono vermelho tem uma área igual a 1049694,5 unidades quadradas, que é a área mais alta possível para um buraco convexo no conjunto de pontos dado. </p><p> Para nosso exemplo, usamos os primeiros 20 pontos (T2k − 1, T2k), para k = 1,2,…, 20, produzidos com o gerador de números pseudo-aleatórios: </p><p> S0 = 290797 Sn + 1 = Sn2 mod 50515093 Tn = (mod. Sn 2000) - 1000 </p><p> ie (527, 144), (−488, 732), (−454, −947),… </p><p> Qual é a área máxima para um buraco convexo no conjunto contendo os primeiros 500 pontos na sequência pseudo-aleatória? Especifique sua resposta, incluindo um dígito após o ponto decimal. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler252()</code> deve retornar 104924.
    testString: 'assert.strictEqual(euler252(), 104924, "<code>euler252()</code> should return 104924.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler252() {
  // Good luck!
  return true;
}

euler252();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
