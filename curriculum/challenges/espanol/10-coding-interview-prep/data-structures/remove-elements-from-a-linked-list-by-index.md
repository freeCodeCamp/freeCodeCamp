---
id: 587d8251367417b2b2512c65
title: Eliminar elementos de una lista vinculada por índice
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

Antes de pasar a otra estructura de datos, vamos a conseguir un par de últimas prácticas con listas enlazadas.

Escribamos un método `removeAt` que elimine el `element` en un `index` dado. El método debe llamarse `removeAt(index)`. Para eliminar un `element` en un determinado `index`, necesitaremos llevar un conteo continuo de cada nodo a medida que avanzamos en la lista enlazada.

Una técnica común utilizada para iterar a través de los elementos de una lista enlazada involucra un <dfn>'runner'</dfn>, o centinel, que 'puntos' en los nodos que está comparando el código. En nuestro caso, comenzando en el `head` de nuestra lista, comenzamos con una variable `currentIndex` que comienza en `0`. El `currentIndex` debería incrementarse por uno para cada nodo que pasamos.

Al igual que con el método `remove(element)`, que ya <a href="/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list" target="_blank" rel="noopener noreferrer nofollow">expusimos en una lección previa</a>, hay que llevar cuidado de no dejar huérfano el resto de la lista cuando eliminamos un nodo con el método `removeAt(index)`. Mantenemos nuestros nodos contiguos asegurándonos de que el nodo que tiene referencia al nodo eliminado tenga una referencia al siguiente nodo.

# --instructions--

Escriba un método `removeAt(index)` que elimine y devuelva un nodo en un `index` dado. El método debe devolver `null` si el `index` dado es negativo o mayor o igual que la `length` de la lista enlazada.

**Nota:** Recuerda mantener el recuento del `currentIndex`.

# --hints--

La clase `LinkedList` debe tener un método `removeAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

Tu método `removeAt` debería reducir la `length` de la lista enlazada en uno.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.removeAt(1);
    return test.size() === 2;
  })()
);
```

El método `removeAt` debe eliminar el elemento del índice especificado de la lista vinculada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.add('bird');
    test.removeAt(1);
    return (
      JSON.stringify(test.head()) ===
      '{"element":"cat","next":{"element":"kitten","next":{"element":"bird","next":null}}}'
    );
  })()
);
```

Cuando sólo un elemento está presente en la lista enlazada, el método `removeAt` debe eliminar y retornar el elemento en el índice especificado, y reducir la longitud de la lista vinculada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    var removedItem = test.removeAt(0);
    return test.head() === null && test.size() === 0 && removedItem === 'cat';
  })()
);
```

El método `removeAt` debe devolver el elemento del nodo eliminado.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.removeAt(1) === 'dog';
  })()
);
```

El método `removeAt` debe devolver `null` y la lista vinculada no debe cambiar si el índice dado es menor que `0`.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(-1);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
  })()
);
```

El método `removeAt` debe devolver `null` y la lista vinculada no debe cambiar si el índice dado es mayor o igual a la `length` de la lista.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(3);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.removeAt = function (index) {
    var currentNode = head;
    var previous = head;
    var count = 0;
    if (index >= length || index < 0) {
      return null;
    }
    if (index === 0) {
      var removed = head.element;
      head = currentNode.next;
    } else {
      while (count < index) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      var removed = previous.next.element;
      previous.next = currentNode.next;
    }
    length--;
    return removed;
  };
}
```
