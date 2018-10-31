---
title: Circles of given radius through two points
id: 5951815dd895584b06884620
challengeType: 5
videoUrl: ''
localeTitle: Círculos de raio dado através de dois pontos
---

## Description
<section id="description"><p> Dados dois pontos em um plano e um raio, geralmente dois círculos de raio dado podem ser traçados através dos pontos. </p> Exceções: Um raio de zero deve ser tratado como nunca descrevendo círculos (exceto no caso em que os pontos são coincidentes). Se os pontos são coincidentes, então um número infinito de círculos com o ponto em sua circunferência pode ser desenhado, a menos que o raio seja igual a zero também, o que colapsa os círculos em um ponto. Se os pontos formarem um diâmetro, retorne um único círculo. Se os pontos estiverem muito distantes, nenhum círculo poderá ser desenhado. Tarefa: Implemente uma função que leve dois pontos e um raio e retorne os dois círculos através desses pontos. Para cada círculo resultante, forneça as coordenadas para o centro de cada círculo arredondado para quatro dígitos decimais. Retorne cada coordenada como uma matriz e coordene como uma matriz de matrizes. Para casos de borda, retorne o seguinte: Se os pontos estiverem no diâmetro, retorne um ponto. Se o raio também for zero, retorne <code>&quot;Radius Zero&quot;</code> . Se os pontos forem coincidentes, devolva <code>&quot;Coincident point. Infinite solutions&quot;</code> . Se os pontos estiverem mais afastados do que o diâmetro, retorne <code>&quot;No intersection. Points further apart than circle diameter&quot;</code> . Entradas de amostra: <pre> p1 p2 r
0,1234, 0,9876 0,8765, 0,2345 2,0
0,0000, 2,0000 0,0000, 0,0000 1,0
0,1234, 0,9876 0,1234, 0,9876 2,0
0,1234, 0,9876 0,8765, 0,2345 0,5
0,1234, 0,9876 0,1234, 0,9876 0,0
</pre> Ref: <a href="http://mathforum.org/library/drmath/view/53027.html" title="link: http://mathforum.org/library/drmath/view/53027.html">Encontrar o centro de um círculo de 2 pontos e raio</a> do fórum de matemática @ Drexel </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getCircles</code> é uma função.
    testString: 'assert(typeof getCircles === "function", "<code>getCircles</code> is a function.");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> deve retornar <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code> .'
    testString: 'assert.deepEqual(getCircles(...testCases[0]), answers[0], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> should return <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code>.");'
  - text: '<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> deve retornar <code>[0, 1]</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[1]), answers[1], "<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> should return <code>[0, 1]</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> deve retornar um <code>Coincident point. Infinite solutions</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[2]), answers[2], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> should return <code>Coincident point. Infinite solutions</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> deve retornar <code>No intersection. Points further apart than circle diameter</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[3]), answers[3], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> should return <code>No intersection. Points further apart than circle diameter</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> deve retornar o <code>Radius Zero</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[4]), answers[4], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> should return <code>Radius Zero</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getCircles (...args) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
