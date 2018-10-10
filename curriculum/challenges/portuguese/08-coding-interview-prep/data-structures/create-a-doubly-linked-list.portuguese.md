---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
challengeType: 1
videoUrl: ''
localeTitle: Criar uma lista duplamente vinculada
---

## Description
<section id="description"> Todas as listas vinculadas que criamos até agora são listas vinculadas individualmente. Aqui, criaremos uma <dfn>lista duplamente vinculada</dfn> . Como o nome indica, os nós em uma lista duplamente vinculada têm referências ao nó seguinte e anterior na lista. Isso nos permite percorrer a lista em ambas as direções, mas também requer mais memória a ser usada, porque cada nó deve conter uma referência adicional ao nó anterior na lista. </section>

## Instructions
<section id="instructions"> Nós fornecemos um objeto <code>Node</code> e iniciamos o nosso <code>DoublyLinkedList</code> . Vamos adicionar dois métodos à nossa lista duplamente vinculada chamada <code>add</code> e <code>remove</code> . O <code>add</code> método deve adicionar o elemento dado à lista, enquanto a <code>remove</code> método deve remover todas as ocorrências de um determinado elemento da lista. Tenha cuidado para lidar com possíveis casos de borda ao escrever esses métodos, como exclusões para o primeiro ou último elemento. Além disso, remover qualquer item em uma lista vazia deve retornar <code>null</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados DoublyLinkedList existe.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (typeof test == "object")})(), "The DoublyLinkedList data structure exists.");'
  - text: O DoublyLinkedList possui um método chamado add.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == "function")})(), "The DoublyLinkedList has a method called add.");'
  - text: O DoublyLinkedList possui um método chamado remove.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == "function")})(), "The DoublyLinkedList has a method called remove.");'
  - text: Remover um item de uma lista vazia retorna null.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (test.remove(100) == null); })(), "Removing an item from an empty list returns null.");'
  - text: O método add adiciona itens à lista.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return (test.print().join("") == "56723"); })(), "The add method adds items to the list.");'
  - text: Cada nó mantém o controle do nó anterior.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return (test.printReverse().join("") == "736850"); })(), "Each node keeps track of the previous node.");'
  - text: O primeiro item pode ser removido da lista.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( test.print().join("") == "3560" ) })(), "The first item can be removed from the list.");'
  - text: O último item pode ser removido da lista.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(60); return ( test.print().join("") == "2535" ) })(), "The last item can be removed from the list.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  // change code above this line
};

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
