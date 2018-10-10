---
id: 587d825a367417b2b2512c8a
title: Insert an Element into a Max Heap
challengeType: 1
videoUrl: ''
localeTitle: Inserir um elemento em um heap máximo
---

## Description
<section id="description"> Agora vamos passar para outra estrutura de dados de árvore, o heap binário. Um heap binário é uma árvore binária parcialmente ordenada que satisfaz a propriedade heap. A propriedade heap especifica um relacionamento entre os nós pai e filho. Você pode ter um heap máximo, no qual todos os nós pai são maiores ou iguais a seus nós filhos ou um heap mínimo, em que o inverso é verdadeiro. Os montes binários também são árvores binárias completas. Isso significa que todos os níveis da árvore estão totalmente preenchidos e, se o último nível estiver parcialmente preenchido, ele será preenchido da esquerda para a direita. Enquanto heaps binários podem ser implementados como estruturas de árvore com nós que contêm referências esquerda e direita, a ordenação parcial de acordo com a propriedade heap nos permite representar o heap com um array. O relacionamento pai-filho é o que nos interessa e, com aritmética simples, podemos calcular os filhos de qualquer pai e pai de qualquer nó filho. Por exemplo, considere esta representação de array de um heap mininário binário: <code>[ 6, 22, 30, 37, 63, 48, 42, 76 ]</code> O nó raiz é o primeiro elemento, 6. Seus filhos são 22 e 30. Se olharmos no relacionamento entre os índices de matriz desses valores, para o índice i, os filhos são 2 * i + 1 e 2 * i + 2. Similarmente, o elemento no índice 0 é o pai desses dois filhos nos índices 1 e 2. Mais geralmente, podemos encontrar o pai de um nó em qualquer índice com o seguinte: (i - 1) / 2. Esses padrões permanecerão verdadeiros conforme a árvore binária cresce para qualquer tamanho. Finalmente, podemos fazer um pequeno ajuste para tornar essa aritmética ainda mais fácil, ignorando o primeiro elemento da matriz. Isso cria o seguinte relacionamento para qualquer elemento em um determinado índice i: Exemplo Array representação: <code>[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]</code> Filho de um elemento: i * 2 Filho direito de um elemento : i * 2 + 1 O pai de um elemento: i / 2 Depois de enrolar a cabeça na matemática, usar uma representação de matriz é muito útil porque os locais dos nós podem ser rapidamente determinados com essa aritmética e o uso de memória é diminuído porque você não precisa manter referências a nós filhos. Instruções: Aqui vamos criar um heap máximo. Comece apenas criando um método de inserção que adicione elementos ao nosso heap. Durante a inserção, é importante sempre manter a propriedade heap. Para um heap máximo, isso significa que o elemento raiz deve sempre ter o maior valor na árvore e que todos os nós pai devem ser maiores que seus filhos. Para uma implementação de matriz de uma pilha, isso geralmente é realizado em três etapas: Adicione o novo elemento ao final da matriz. Se o elemento for maior que seus pais, troque-os. Continue comutando até que o novo elemento seja menor que seu pai ou você alcance a raiz da árvore. Por fim, adicione um método de impressão que retorne uma matriz de todos os itens que foram adicionados ao heap. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados MaxHeap existe.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() }; return (typeof test == "object")})(), "The MaxHeap data structure exists.");'
  - text: MaxHeap tem um método chamado insert.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MaxHeap has a method called insert.");'
  - text: MaxHeap tem um método chamado print.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.print == "function")})(), "MaxHeap has a method called print.");'
  - text: O método insert adiciona elementos de acordo com a propriedade heap máximo.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; test.insert(50); test.insert(100); test.insert(700); test.insert(32); test.insert(51); let result = test.print(); return ((result.length == 5) ? result[0] == 700 : result[1] == 700) })(), "The insert method adds elements according to the max heap property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var MaxHeap = function() {
  // change code below this line
  // change code above this line
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
