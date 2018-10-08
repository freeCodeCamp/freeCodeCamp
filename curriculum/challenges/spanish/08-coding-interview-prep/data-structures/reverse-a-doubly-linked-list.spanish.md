---
id: 587d825a367417b2b2512c88
title: Reverse a Doubly Linked List
localeTitle: Invertir una lista doblemente vinculada
challengeType: 1
---

## Description
<section id='description'> 
Creemos un método más para nuestra lista doblemente enlazada llamada reversa que invierte la lista en su lugar. Una vez que se ejecuta el método, la cabeza debe apuntar a la cola anterior y la cola debe apuntar a la cabeza anterior. Ahora, si recorremos la lista de principio a fin, deberíamos encontrar los nodos en orden inverso en comparación con la lista original. Intentar revertir una lista vacía debe devolver nulo. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos DoublyLinkedList existe.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (typeof test == "object")})(), "The DoublyLinkedList data structure exists.");'
  - text: DoublyLinkedList tiene un método llamado agregar.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == "function")})(), "The DoublyLinkedList has a method called add.");'
  - text: El DoublyLinkedList tiene un método llamado reversa.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == "function")})(), "The DoublyLinkedList has a method called reverse.");'
  - text: Invertir una lista vacía devuelve nulo.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (test.reverse() == null); })(), "Reversing an empty list returns null.");'
  - text: El método inverso invierte la lista.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join("") == "326158"); })(), "The reverse method reverses the list.");'
  - text: Las referencias siguientes y anteriores se mantienen correctamente cuando se invierte una lista.
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
