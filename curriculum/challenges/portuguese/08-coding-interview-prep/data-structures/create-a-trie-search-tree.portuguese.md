---
id: 587d8259367417b2b2512c84
title: Create a Trie Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Criar uma árvore de pesquisa Trie
---

## Description
<section id="description"> Aqui vamos nos mover a partir de árvores de busca binária e dar uma olhada em outro tipo de estrutura de árvore chamada trie. A trie é uma árvore de pesquisa ordenada geralmente usada para armazenar cadeias de caracteres, ou matrizes mais genericamente associativas ou conjuntos de dados dinâmicos nos quais as chaves são cadeias de caracteres. Eles são muito bons em armazenar conjuntos de dados quando muitas chaves terão prefixos sobrepostos, por exemplo, todas as palavras em um dicionário. Ao contrário de uma árvore binária, os nós não estão associados a valores reais. Em vez disso, o caminho para um nó representa uma chave específica. Por exemplo, se quiséssemos armazenar o código da string em um trie, teríamos quatro nós, um para cada letra: c - o - d - e. Seguir esse caminho por todos esses nós criará o código como uma string - esse caminho é a chave que armazenamos. Então, se quiséssemos adicionar a codificação de string, ela compartilharia os três primeiros nós do código antes de ramificar depois do d. Desta forma, grandes conjuntos de dados podem ser armazenados de forma compacta. Além disso, a pesquisa pode ser muito rápida, pois é efetivamente limitada ao tamanho da string que você está armazenando. Além disso, ao contrário das árvores binárias, um nó pode armazenar qualquer número de nós filhos. Como você deve ter adivinhado no exemplo acima, alguns metadados são comumente armazenados em nós que contêm o fim de uma chave, de modo que, em travessias posteriores, essa chave ainda possa ser recuperada. Por exemplo, se adicionarmos códigos em nosso exemplo acima, precisaríamos de alguma forma de saber que o código e representa o final de uma chave que foi inserida anteriormente. Caso contrário, essas informações seriam efetivamente perdidas quando adicionarmos códigos. Instruções: Vamos criar um trie para armazenar palavras. Ele aceita palavras através de um método add e as armazena em uma estrutura de dados trie. Ele também nos permitirá consultar se uma determinada string é uma palavra com um método isWord, e recuperar todas as palavras inseridas na trie com um método print. isWord deve retornar um valor booleano e imprimir deve retornar uma matriz de todas essas palavras como valores de string. Para que possamos verificar se essa estrutura de dados está implementada corretamente, fornecemos uma estrutura de nó para cada nó na árvore. Cada nó será um objeto com uma propriedade keys, que é um objeto Map do JavaScript. Isto irá conter as letras individuais que são chaves válidas de cada nó. Também criamos uma propriedade final nos nós que podem ser configurados como true se o nó representar a terminação de uma palavra. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O Trie tem um método add.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.add == "function") }()), "The Trie has an add method.");'
  - text: O Trie tem um método de impressão.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.print == "function") }()), "The Trie has a print method.");'
  - text: O Trie tem um método isWord.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.isWord == "function") }()), "The Trie has an isWord method.");'
  - text: O método print retorna todos os itens adicionados ao trie como strings em um array.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("jump"); test.add("jumps"); test.add("jumped"); test.add("house"); test.add("mouse"); var added = test.print(); return (added.indexOf("jump") != -1 && added.indexOf("jumps") != -1 && added.indexOf("jumped") != -1 && added.indexOf("house") != -1 && added.indexOf("mouse") != -1 && added.length == 5); }()), "The print method returns all items added to the trie as strings in an array.");'
  - text: O método isWord retorna true apenas para palavras adicionadas ao trie e false para todas as outras palavras.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("hop"); test.add("hops"); test.add("hopped"); test.add("hoppy"); test.add("hope"); return (test.isWord("hop") && !test.isWord("ho") && test.isWord("hopped") && !test.isWord("hopp") && test.isWord("hoppy") && !test.isWord("hoping")); }()), "The isWord method returns true only for words added to the trie and false for all other words.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
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
