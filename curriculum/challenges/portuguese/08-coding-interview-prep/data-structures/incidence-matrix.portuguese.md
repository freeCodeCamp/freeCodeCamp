---
id: 587d8256367417b2b2512c79
title: Incidence Matrix
challengeType: 1
videoUrl: ''
localeTitle: Matriz de Incidência
---

## Description
<section id="description"> Ainda outra maneira de representar um gráfico é colocá-lo em uma <dfn>matriz de incidência.</dfn> Uma <dfn>matriz de incidência</dfn> é uma <dfn>matriz</dfn> bidimensional (2D). De um modo geral, uma matriz de incidência relaciona duas classes diferentes de objetos entre suas duas dimensões. Este tipo de matriz é semelhante a uma matriz de adjacência. No entanto, as linhas e colunas significam outra coisa aqui. Nos gráficos, temos arestas e nós. Estas serão nossas &quot;duas classes diferentes de objetos&quot;. Essa matriz terá as linhas como os nós e as colunas como as arestas. Isso significa que podemos ter um número ímpar de linhas e colunas. Cada coluna representará uma borda exclusiva. Além disso, cada borda conecta dois nós. Para mostrar que há uma aresta entre dois nós, você colocará um 1 nas duas linhas de uma coluna específica. Abaixo está um gráfico de 3 nós com uma borda entre o nó 1 e o nó 3. <blockquote> 1 <br> --- <br> 1 | 1 <br> 2 | 0 <br> 3 | 1 </blockquote> Aqui está um exemplo de uma <code>incidence matrix</code> com 4 arestas e 4 nós. Lembre-se, as colunas são as arestas e as linhas são os próprios nós. <blockquote> 1 2 3 4 <br> -------- <br> 1 | 0 1 1 1 <br> 2 | 1 1 0 0 <br> 3 | 1 0 0 1 <br> 4 | 0 0 1 0 </blockquote> Abaixo está uma implementação JavaScript da mesma coisa. <blockquote> var incMat = [ <br> [0, 1, 1, 1], <br> [1, 1, 0, 0], <br> [1, 0, 0, 1] <br> [0, 0, 1, 0] <br> ]; </blockquote> Para fazer um gráfico direcionado, use <code>-1</code> para uma aresta deixando um determinado nó e <code>1</code> para uma aresta entrando em um nó. <blockquote> var incMatDirected = [ <br> [0, -1, 1, -1] <br> [-1, 1, 0, 0], <br> [1, 0, 0, 1] <br> [0, 0, -1, 0] <br> ]; </blockquote> Gráficos também podem ter <dfn>pesos</dfn> em suas bordas. Até agora, temos arestas <dfn>não ponderadas</dfn> onde apenas a presença e a falta de aresta é binária ( <code>0</code> ou <code>1</code> ). Você pode ter pesos diferentes dependendo do seu aplicativo. Um peso diferente é representado como números maiores que 1. </section>

## Instructions
<section id="instructions"> Crie uma matriz de incidência de um gráfico não direcionado com cinco nós e quatro arestas. Essa matriz deve estar em uma matriz multidimensional. Esses cinco nós têm relacionamentos após os relacionamentos. A primeira aresta está entre o primeiro e o segundo nó. A segunda aresta fica entre o segundo e o terceiro nó. A terceira borda está entre o terceiro e o quinto nó. E quatro arestas estão entre o quarto e o segundo nó. Todos os pesos das arestas são um e a ordem das arestas é importante. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>incMatUndirected</code> deve conter apenas cinco nós.
    testString: 'assert((incMatUndirected.length === 5) && incMatUndirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) , "<code>incMatUndirected</code> should only contain five nodes.");'
  - text: Deve haver uma primeira borda entre o primeiro e o segundo nó.
    testString: 'assert((incMatUndirected[0][0] === 1) && (incMatUndirected[1][0] === 1), "There should be a first edge between the first and second node.");'
  - text: Deve haver uma segunda borda entre o segundo e o terceiro nó.
    testString: 'assert((incMatUndirected[1][1] === 1) && (incMatUndirected[2][1] === 1), "There should be a second edge between the second and third node.");'
  - text: Deve haver uma terceira borda entre o terceiro e o quinto nó.
    testString: 'assert((incMatUndirected[2][2] === 1) && (incMatUndirected[4][2] === 1), "There should be a third edge between the third and fifth node.");'
  - text: Deve haver uma quarta borda entre o segundo e o quarto nó.
    testString: 'assert((incMatUndirected[1][3] === 1) && (incMatUndirected[3][3] === 1), "There should be a fourth edge between the second and fourth node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var incMatUndirected = [

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
