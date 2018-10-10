---
id: 587d8256367417b2b2512c77
title: Adjacency List
challengeType: 1
videoUrl: ''
localeTitle: Lista de Adjacência
---

## Description
<section id="description"> Os gráficos podem ser representados de maneiras diferentes. Aqui nós descrevemos um caminho, que é chamado de <dfn>lista de adjacências</dfn> . Uma lista de adjacências é essencialmente uma lista com marcadores, onde o lado esquerdo é o nó e o lado direito lista todos os outros nós aos quais está conectado. Abaixo está uma representação de uma lista de adjacências. <blockquote> Nó1: Nó2, Nó3 <br> Nó2: Nó1 <br> Nó3: Nó1 </blockquote> Acima está um gráfico não direcionado porque o <code>Node1</code> está conectado ao <code>Node2</code> e ao <code>Node3</code> , e essa informação é consistente com as conexões <code>Node2</code> e <code>Node3</code> . Uma lista de adjacências para um gráfico direcionado significaria que cada linha da lista mostra a direção. Se o acima foi direcionado, então <code>Node2: Node1</code> significaria que a borda direcionada está apontando do <code>Node2</code> para o <code>Node1</code> . Podemos representar o grafo não direcionado acima como uma lista de adjacências, colocando-o dentro de um objeto JavaScript. <blockquote> var undirectedG = { <br> Nó1: [&quot;Nó2&quot;, &quot;Nó3&quot;], <br> Nó2: [&quot;Nó1&quot;], <br> Nó3: [&quot;Nó1&quot;] <br> }; </blockquote> Isso também pode ser mais simplesmente representado como uma matriz em que os nós apenas têm números em vez de rótulos de seqüência de caracteres. <blockquote> var undirectedGArr = [ <br> [1, 2], # Node1 <br> [0], # Node2 <br> [0] # Node3 <br> ]; </blockquote></section>

## Instructions
<section id="instructions"> Crie uma rede social como um gráfico não direcionado com 4 nós / pessoas chamados <code>James</code> , <code>Jill</code> , <code>Jenny</code> e <code>Jeff</code> . Existem arestas / relações entre James e Jeff, Jill e Jenny, e Jeff e Jenny. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> deve conter apenas quatro nós.
    testString: 'assert(Object.keys(undirectedAdjList).length === 4, "<code>undirectedAdjList</code> should only contain four nodes.");'
  - text: Deve haver uma vantagem entre <code>Jeff</code> e <code>James</code> .
    testString: 'assert(undirectedAdjList.James.indexOf("Jeff") !== -1 && undirectedAdjList.Jeff.indexOf("James") !== -1, "There should be an edge between <code>Jeff</code> and <code>James</code>.");'
  - text: Deve haver uma vantagem entre <code>Jill</code> e <code>Jenny</code> .
    testString: 'assert(undirectedAdjList.Jill.indexOf("Jenny") !== -1 && undirectedAdjList.Jill.indexOf("Jenny") !== -1, "There should be an edge between <code>Jill</code> and <code>Jenny</code>.");'
  - text: Deve haver uma vantagem entre <code>Jeff</code> e <code>Jenny</code> .
    testString: 'assert(undirectedAdjList.Jeff.indexOf("Jenny") !== -1 && undirectedAdjList.Jenny.indexOf("Jeff") !== -1, "There should be an edge between <code>Jeff</code> and <code>Jenny</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var undirectedAdjList = {
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
