---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
localeTitle: Crear una lista doblemente vinculada
challengeType: 1
---

## Description
<section id='description'> 
Todas las listas enlazadas que hemos creado hasta ahora son listas enlazadas individualmente. Aquí, crearemos una <dfn>lista doblemente vinculada</dfn> . Como su nombre lo indica, los nodos en una lista doblemente enlazada tienen referencias al nodo siguiente y anterior en la lista. 
Esto nos permite recorrer la lista en ambas direcciones, pero también requiere que se use más memoria porque cada nodo debe contener una referencia adicional al nodo anterior en la lista. 
</section>

## Instructions
<section id='instructions'> 
Proporcionamos un objeto <code>Node</code> y comenzamos nuestra <code>DoublyLinkedList</code> . Agreguemos dos métodos a nuestra lista doblemente enlazada llamada <code>add</code> y <code>remove</code> . El <code>add</code> método debe añadir el elemento dado de la lista, mientras que el <code>remove</code> método debe eliminar todas las ocurrencias de un elemento dado en la lista. 
Tenga cuidado de manejar cualquier posible caso de borde al escribir estos métodos, como eliminaciones del primer o último elemento. Además, eliminar cualquier elemento de una lista vacía debe devolver <code>null</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos DoublyLinkedList existe.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (typeof test == "object")})(), "The DoublyLinkedList data structure exists.");'
  - text: DoublyLinkedList tiene un método llamado agregar.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == "function")})(), "The DoublyLinkedList has a method called add.");'
  - text: DoublyLinkedList tiene un método llamado eliminar.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == "function")})(), "The DoublyLinkedList has a method called remove.");'
  - text: Al eliminar un elemento de una lista vacía, se devuelve un valor nulo.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (test.remove(100) == null); })(), "Removing an item from an empty list returns null.");'
  - text: El método add agrega elementos a la lista.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return (test.print().join("") == "56723"); })(), "The add method adds items to the list.");'
  - text: Cada nodo realiza un seguimiento del nodo anterior.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return (test.printReverse().join("") == "736850"); })(), "Each node keeps track of the previous node.");'
  - text: El primer elemento puede ser eliminado de la lista.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( test.print().join("") == "3560" ) })(), "The first item can be removed from the list.");'
  - text: El último elemento puede ser eliminado de la lista.
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
