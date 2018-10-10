---
id: 587d8256367417b2b2512c7a
title: Find the Minimum and Maximum Value in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Encontre o valor mínimo e máximo em uma árvore de pesquisa binária
---

## Description
<section id="description"> Esta série de desafios introduzirá a estrutura de dados da árvore. As árvores são uma estrutura de dados importante e versátil na ciência da computação. É claro, o nome deles vem do fato de que, quando visualizados, eles se parecem muito com as árvores com as quais estamos familiarizados no mundo natural. Uma estrutura de dados em árvore começa com um nó, geralmente chamado de raiz, e daqui ramifica-se para nós adicionais, cada um dos quais pode ter mais nós filhos, e assim por diante. A estrutura de dados é geralmente visualizada com o nó raiz no topo; você pode pensar nisso como uma árvore natural virada de cabeça para baixo. Primeiro, vamos descrever algumas terminologias comuns que encontraremos com as árvores. O nó raiz é o topo da árvore. Pontos de dados na árvore são chamados nós. Os nós com ramificações que levam a outros nós são referidos como o pai do nó ao qual o desvio leva (o filho). Outros termos familiares mais complicados se aplicam como você poderia esperar. Uma subárvore refere-se a todos os descendentes de um nó específico, ramos podem ser referidos como arestas e nós de folha são nós no final da árvore que não têm filhos. Finalmente, observe que as árvores são estruturas de dados inerentemente recursivas. Ou seja, quaisquer filhos de um nó são pais de sua própria subárvore e assim por diante. A natureza recursiva das árvores é importante para entender ao projetar algoritmos para operações de árvore comuns. Para começar, discutiremos um tipo específico de árvore, a árvore binária. Na verdade, discutiremos uma árvore binária em particular, uma árvore de busca binária. Vamos descrever o que isso significa. Enquanto a estrutura de dados em árvore pode ter qualquer número de ramificações em um único nó, uma árvore binária pode ter apenas duas ramificações para cada nó. Além disso, uma árvore de pesquisa binária é ordenada com relação às subárvores filho, de modo que o valor de cada nó na subárvore esquerda seja menor ou igual ao valor do nó pai, e o valor de cada nó na subárvore direita seja maior que ou igual ao valor do nó pai. É muito útil visualizar essa relação para entender melhor: <div style="width: 100%; display: flex; justify-content: center; align-items: center;"><img style="width: 100%; max-width: 350px;" src="https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png"></div> Agora, esse relacionamento ordenado é muito fácil de ver. Observe que cada valor à esquerda de 8, o nó raiz, é menor que 8 e todo valor à direita é maior que 8. Observe também que essa relação também se aplica a cada uma das subárvores. Por exemplo, o primeiro filho à esquerda é uma subárvore. 3 é o nó pai, e tem exatamente dois nós filhos - pelas regras que governam as árvores de busca binária, sabemos sem sequer ver que o filho esquerdo deste nó (e qualquer um de seus filhos) será menor que 3, e o direito filho (e qualquer um de seus filhos) será maior que 3 (mas também menor que o valor de raiz da estrutura) e assim por diante. As árvores de pesquisa binária são estruturas de dados muito comuns e úteis, pois fornecem tempo logarítmico, no caso médio, para várias operações comuns, como pesquisa, inserção e exclusão. Instruções: vamos começar simples. Definimos o esqueleto de uma estrutura de árvore de pesquisa binária aqui, além de uma função para criar nós para nossa árvore. Observe que cada nó pode ter um valor para a esquerda e para a direita. Estas serão atribuídas subtrees filho, se existirem. Em nossa árvore de pesquisa binária, defina dois métodos, <code>findMin</code> e <code>findMax</code> . Esses métodos devem retornar os valores mínimo e máximo mantidos na árvore de pesquisa binária (não se preocupe em adicionar valores à árvore por enquanto, adicionamos alguns em segundo plano). Se você ficar preso, reflita sobre a invariante que deve ser verdadeira para árvores de busca binária: cada subárvore esquerda é menor ou igual a seu pai e cada subárvore direita é maior que ou igual a seu pai. Digamos também que nossa árvore só pode armazenar valores inteiros. Se a árvore estiver vazia, o método deve retornar <code>null</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>findMin</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMin == "function")})(), "The binary search tree has a method called <code>findMin</code>.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>findMax</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMax == "function")})(), "The binary search tree has a method called <code>findMax</code>.");'
  - text: O método <code>findMin</code> retorna o valor mínimo na árvore de pesquisa binária.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMin() == 1; })(), "The <code>findMin</code> method returns the minimum value in the binary search tree.");'
  - text: O método <code>findMax</code> retorna o valor máximo na árvore de pesquisa binária.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMax !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMax() == 87; })(), "The <code>findMax</code> method returns the maximum value in the binary search tree.");'
  - text: Os <code>findMin</code> e <code>findMax</code> métodos retornam <code>null</code> para uma árvore vazia.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== "function") { return false; }; if (typeof test.findMax !== "function") { return false; }; return (test.findMin() == null && test.findMax() == null) })(), "The <code>findMin</code> and <code>findMax</code> methods return <code>null</code> for an empty tree.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    // change code above this line
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
