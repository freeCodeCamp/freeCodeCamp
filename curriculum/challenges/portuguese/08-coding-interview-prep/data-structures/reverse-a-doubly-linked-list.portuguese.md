---
id: 587d825a367417b2b2512c88
title: Reverse a Doubly Linked List
challengeType: 1
videoUrl: ''
localeTitle: Reverse uma lista duplamente vinculada
---

## Description
<section id="description"> Vamos criar mais um método para nossa lista duplamente vinculada chamada reverse, que inverte a lista no lugar. Uma vez que o método é executado, a cabeça deve apontar para a cauda anterior e a cauda deve apontar para a cabeça anterior. Agora, se atravessarmos a lista da cabeça para a cauda, ​​devemos encontrar os nós em ordem inversa em relação à lista original. Tentando reverter uma lista vazia deve retornar null. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados DoublyLinkedList existe.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (typeof test == "object")})(), "The DoublyLinkedList data structure exists.");'
  - text: O DoublyLinkedList possui um método chamado add.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == "function")})(), "The DoublyLinkedList has a method called add.");'
  - text: O DoublyLinkedList tem um método chamado reverso.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == "function")})(), "The DoublyLinkedList has a method called reverse.");'
  - text: Invertendo uma lista vazia retorna null.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (test.reverse() == null); })(), "Reversing an empty list returns null.");'
  - text: O método inverso inverte a lista.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join("") == "326158"); })(), "The reverse method reverses the list.");'
  - text: As referências seguinte e anterior são mantidas corretamente quando uma lista é invertida.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(11); test.add(22); test.add(33); test.reverse(); return (test.printReverse().join("") == "112233"); })(), "The next and previous references are correctly maintained when a list is reversed.");'

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
