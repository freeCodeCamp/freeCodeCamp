---
id: 587d8251367417b2b2512c63
title: Eliminar Elementos de una Lista Enlazada
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

El siguiente método importante que necesitará cualquier implementación de una lista enlazada es el método `remove`. Este método debe recibir como argumento el elemento que se quiera eliminar, para a continuación realizar una búsqueda en la lista con el objetivo de encontrar y eliminar el nodo que contiene dicho elemento.

Siempre que eliminemos un nodo de una lista enlazada, es importante que no dejemos huérfano el resto de la lista. Recordar que la propiedad `next` de cualquier nodo apunta al nodo que lo sigue en la lista. Si estamos eliminando el elemento central, por ejemplo, debemos asegurarnos de establecer una conexión desde la propiedad `next` del nodo previo a dicho elemento central, hasta el nodo al que apunta la propiedad `next` (¡el cual es el siguiente nodo en la lista!) del elemento central

Esto puede parecer realmente confuso, así que volvamos al ejemplo de la conga de manera que tengamos un buen modelo conceptual. Imagínate en una conga, y la persona que está directamente enfrente de tí la abandona. La persona que acaba de dejar la línea ya no tiene las manos sobre nadie de la conga--y tú ya tampoco tienes las manos sobre él. Das un paso adelante y las pones sobre la siguiente persona que ves.

Si el elemento que queremos eliminar es el elemento `head`, reasignamos `head` al segundo nodo de la lista enlazada.

# --instructions--

Escribe un método `remove` que recibe un elemento y lo elimina de la lista enlazada.

**Nota:** La propiedad `length` de la lista debe disminuir en uno cada vez que se elimine un elemento.

# --hints--

Tu clase `LinkedList` debe tener un método `remove`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

Tu método `remove` debe reasignar `head` al segundo nodo cuando se elimina el primer nodo.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.remove('cat');
    return test.head().element === 'dog';
  })()
);
```

Tu método `remove` debe disminuir en uno la propiedad `length` de la lista enlazada por cada nodo eliminado.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('hamster');
    test.remove('cat');
    test.remove('fish');
    return test.size() === 2;
  })()
);
```

Tu método `remove` debe reasignar la referencia del nodo previo al nodo eliminado a la referencia `next` del nodo eliminado.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('snake');
    test.add('kitten');
    test.remove('snake');
    return test.head().next.next.element === 'kitten';
  })()
);
```

Tu método `remove` no debe cambiar la lista enlazada si el elemento no existe en dicha lista.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.remove('elephant');
    return (
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

  this.remove = function(element){
    // Only change code below this line

    // Only change code above this line
  };
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

  this.remove = function(element){
    if (head === null) {
      return;
    }
    var previous;
    var currentNode = head;

    while (currentNode.next !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.next === null && currentNode.element !== element) {
      return;
    }
    else if (previous) {
      previous.next = currentNode.next;
    } else {
      head = currentNode.next;
    }

    length--;
  };
} 
```
