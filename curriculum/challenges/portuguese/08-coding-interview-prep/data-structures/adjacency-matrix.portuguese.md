---
id: 587d8256367417b2b2512c78
title: Adjacency Matrix
challengeType: 1
videoUrl: ''
localeTitle: Matriz de adjacência
---

## Description
<section id="description"> Outra maneira de representar um gráfico é colocá-lo em uma <dfn>matriz de adjacência</dfn> . Uma <dfn>matriz de adjacência</dfn> é uma <dfn>matriz</dfn> bidimensional (2D) onde cada matriz aninhada tem o mesmo número de elementos que a matriz externa. Em outras palavras, é uma matriz ou grade de números, onde os números representam as arestas. Zeros significa que não há vantagem ou relacionamento. <blockquote> 1 2 3 <br> ------ <br> 1 | 0 1 1 <br> 2 | 1 0 0 <br> 3 | 1 0 0 </blockquote> Acima está um gráfico muito simples, não direcionado, no qual você tem três nós, onde o primeiro nó está conectado ao segundo e terceiro nó. <strong>Nota</strong> : Os números na parte superior e esquerda da matriz são apenas rótulos para os nós. Abaixo está uma implementação JavaScript da mesma coisa. <blockquote> var adjMat = [ <br> [0, 1, 1] <br> [1, 0, 0] <br> [1, 0, 0] <br> ]; </blockquote> Ao contrário de uma lista de adjacências, cada &quot;linha&quot; da matriz deve ter o mesmo número de elementos que os nós no gráfico. Aqui temos uma matriz de três por três, o que significa que temos três nós em nosso gráfico. Um gráfico direcionado seria semelhante. Abaixo está um gráfico onde o primeiro nó tem uma borda apontando para o segundo nó e, em seguida, o segundo nó tem uma borda apontando para o terceiro nó. <blockquote> var adjMatDirected = [ <br> [0, 1, 0] <br> [0, 0, 1] <br> [0, 0, 0] <br> ]; </blockquote> Gráficos também podem ter <dfn>pesos</dfn> em suas bordas. Até agora, temos arestas <dfn>não ponderadas</dfn> onde apenas a presença e a falta de aresta é binária ( <code>0</code> ou <code>1</code> ). Você pode ter pesos diferentes dependendo do seu aplicativo. </section>

## Instructions
<section id="instructions"> Crie uma matriz de adjacência de um gráfico não direcionado com cinco nós. Essa matriz deve estar em uma matriz multidimensional. Esses cinco nós têm relações entre o primeiro e o quarto nó, o primeiro e o terceiro nó, o terceiro e o quinto nó e o quarto e o quinto nó. Todos os pesos de borda são um. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> deve conter apenas cinco nós.
    testString: 'assert((adjMatUndirected.length === 5) && adjMatUndirected.map(function(x) { return x.length === 5 }).reduce(function(a, b) { return a && b }) , "<code>undirectedAdjList</code> should only contain five nodes.");'
  - text: Deve haver uma borda entre o primeiro e o quarto nó.
    testString: 'assert((adjMatUndirected[0][3] === 1) && (adjMatUndirected[3][0] === 1), "There should be an edge between the first and fourth node.");'
  - text: Deve haver uma borda entre o primeiro e o terceiro nó.
    testString: 'assert((adjMatUndirected[0][2] === 1) && (adjMatUndirected[2][0] === 1), "There should be an edge between the first and third node.");'
  - text: Deve haver uma borda entre o terceiro e o quinto nó.
    testString: 'assert((adjMatUndirected[2][4] === 1) && (adjMatUndirected[4][2] === 1), "There should be an edge between the third and fifth node.");'
  - text: Deve haver uma borda entre o quarto e o quinto nó.
    testString: 'assert((adjMatUndirected[3][4] === 1) && (adjMatUndirected[4][3] === 1), "There should be an edge between the fourth and fifth node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var adjMatUndirected = [
];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
