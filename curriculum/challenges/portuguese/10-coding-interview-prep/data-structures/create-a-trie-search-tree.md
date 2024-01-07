---
id: 587d8259367417b2b2512c84
title: Criar uma árvore de busca Trie
challengeType: 1
forumTopicId: 301634
dashedName: create-a-trie-search-tree
---

# --description--

Aqui, vamos sair da busca binária e dar uma olhada em outro tipo de estrutura de árvore chamada Trie. Uma Trie é uma árvore de busca ordenada comumente usada para manter strings, ou, mais genericamente, arrays associativos ou conjuntos de dados dinâmicos em que as chaves são strings. Elas são muito boas em armazenar conjuntos de dados quando muitas chaves terão prefixos sobrepostos, como, por exemplo, as palavras de um dicionário. Ao contrário de uma árvore binária, os nós não estão associados com valores reais. Em vez disso, o caminho para um nó representa uma chave específica. Por exemplo, se quiséssemos armazenar a string "code" em uma Trie, teríamos quatro nós, um para cada letra: c — o — d — e. Seguir esse caminho através de todos esses nós, então, criará "code" como uma string — esse caminho é a chave que armazenamos. Então, se quiséssemos adicionar a string "coding", ela compartilharia os três primeiros nós de "code" antes de se ramificar após o d. Desta forma, grandes conjuntos de dados podem ser armazenados de modo bastante compacto. Além disso, a busca pode ser muito rápida porque está efetivamente limitada ao tamanho da string que você está armazenando. Além disso, ao contrário das árvores binárias, um nó pode armazenar qualquer número de nós filhos. Como você já deve ter adivinhado a partir do exemplo acima, alguns metadados são normalmente armazenados em nós que possuem o fim de uma chave para que, ao percorrer os dados posteriormente, a chave ainda possa ser recuperada. Por exemplo, se adicionarmos "codes" no nosso exemplo acima, precisaremos saber de algum modo que o "e" no código representa o final de uma chave que foi inserida anteriormente. Caso contrário, esta informação estaria, de fato, perdida quando acrescentássemos "codes".

# --instructions--

Vamos criar uma Trie para armazenar palavras. Ele vai aceitar palavras através de um método `add` e armazená-las em uma estrutura de dados de Trie. Ele também permitirá consultar se uma determinada string é uma palavra com um método `isWord`, além de recuperar todas as palavras inseridas na Trie com um método `print`. `isWord` deve retornar um valor booleano e `print` deve retornar um array com todas essas palavras como valores de string. Para que possamos verificar se esta estrutura de dados foi implementada corretamente, fornecemos uma estrutura `Node` para cada nó da árvore. Cada nó será um objeto com uma propriedade `keys`, que é um objeto Map do JavaScript. Ele guardará as letras individuais, que são as chaves válidas de cada nó. Também criamos uma propriedade `end` nos nós que pode ser definidas como `true` se o nó representar o final de uma palavra.

# --hints--

`Trie` deve ter o método `add`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

`Trie` deve ter o método `print`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

`Trie` deve ter o método `isWord`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.isWord == 'function';
  })()
);
```

O método `print` deve retornar todos os itens adicionados à Trie como strings em um array.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('jump');
    test.add('jumps');
    test.add('jumped');
    test.add('house');
    test.add('mouse');
    var added = test.print();
    return (
      added.indexOf('jump') != -1 &&
      added.indexOf('jumps') != -1 &&
      added.indexOf('jumped') != -1 &&
      added.indexOf('house') != -1 &&
      added.indexOf('mouse') != -1 &&
      added.length == 5
    );
  })()
);
```

O método `isWord` deve retornar `true` somente para os itens adicionados à Trie e `false` para itens ausentes.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('hop');
    test.add('hops');
    test.add('hopped');
    test.add('hoppy');
    test.add('hope');
    return (
      test.isWord('hop') &&
      !test.isWord('ho') &&
      test.isWord('hopped') &&
      !test.isWord('hopp') &&
      test.isWord('hoppy') &&
      !test.isWord('hoping')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
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
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
