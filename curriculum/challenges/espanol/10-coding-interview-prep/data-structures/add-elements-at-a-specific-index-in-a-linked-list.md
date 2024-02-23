---
id: 587d8252367417b2b2512c67
title: Agregar un elemento a un índice específico en una lista enlazada
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

Vamos a crear un método llamado addAt(index, element) que inserte un elemento en un índice dado. Tal y como eliminamos elementos en un índice dado, tenemos que mantener el valor del índice actual mientras atravesamos la lista enlazada. Cuando el índice actual coincida con el índice dado, neceesitaríamos reasignar la propiedad siguiente del nodo anterior para referenciar el nuevo nodo añadido. Y el nuevo nodo debe referenciar al índice actual como el nodo siguiente. Regresando al ejemplo de línea conga, una nueva persona quiere ingresar a la línea, pero quiere ingresar en el medio. Tu estás en el medio de la línea, entonces quitas tus manos de la persona enfrente de tí. La nueva persona camina y pone sus manos sobre la persona en la que antes tenías tus manos, y ahora tienes tus manos sobre la nueva persona.

# --instructions--

Crea un método `addAt(index,element)` que inserte un elemento en un índice dado. Devuelva false si un elemento no pudo ser insertado. **Nota:** recuerda verificar si el índice dado es negativo o es mayor que el largo de la lista enlazada.

# --hints--

Tu método `addAt` deberá reasignar `head` al nuevo nodo cuando el índice dado es 0.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'fish');
    return test.head().element === 'fish' && test.head().next.element === 'cat';
  })()
);
```

Tu método `addAt` debe incrementar el largo de la lista enlazada en uno por cada nuevo nodo añadido en la lista enlazada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.size() === 3;
  })()
);
```

Tu método `addAt` deberá devolver `false` si un nodo no pudo ser insertado.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.addAt(4, 'cat') === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
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

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

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
    if (head === null){
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
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  }
}
```
