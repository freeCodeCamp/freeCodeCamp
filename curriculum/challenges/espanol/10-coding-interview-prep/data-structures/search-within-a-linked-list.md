---
id: 587d8251367417b2b2512c64
title: Buscar dentro de una lista vinculada
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

Añadamos algunos métodos más útiles a nuestra clase de lista vinculada. ¿No sería útil si pudiéramos saber si nuestra lista está vacía o no, como con nuestras clases `Stack` y `Queue`?

También deberíamos ser capaces de encontrar elementos específicos en nuestra lista vinculada. ¡Recorrer estructuras de datos es algo con lo que querrás conseguir mucha práctica! Vamos a crear un método `indexOf` que tome un `element` como argumento y devuelva el `index` de ese elemento en la lista enlazada. Si el elemento no se encuentra en la lista enlazada, devuelve `-1`.

Implementemos también un método que haga lo contrario: un método `elementAt` que toma un `index` como argumento y devuelve el `element` en el `index` dado. Si no se encuentra ningún `element`, devuelve `undefined`.

# --instructions--

Escribe un método `isEmpty` que compruebe si la lista está vacía, un método `indexOf` que devuelva el `index` de un elemento dado, y un método `elementAt` que devuelva el `element` en el `index` dado.

# --hints--

La clase `LinkedList` debe tener un método `isEmpty`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

El método `isEmpty` debe retornar `false` cuando haya al menos un elemento en la lista enlazada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.isEmpty() === false;
  })()
);
```

El método `isEmpty` debe devolver `true` cuando no hay elementos en la lista enlazada.

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

La clase `LinkedList` debe tener un método `indexOf`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

El método `indexOf` debe devolver el índice de un elemento determinado encontrado en la lista enlazada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('cat') === 0;
  })()
);
```

El método `indexOf` debe retornar `-1` si el elemento dado no se encuentra en la lista vinculada

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('pony') === -1;
  })()
);
```

La clase `LinkedList` debe tener un método `elementAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

El método `elementAt` debe devolver el elemento encontrado en un índice determinado en la lista vinculada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(1) === 'dog';
  })()
);
```

El método `elementAt` debe devolver `undefined` si el elemento dado no se encuentra en un índice dado en la lista enlazada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(5) === undefined;
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

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
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

  this.size = function() {
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
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf = function(element) {
    if (head === null) return -1

    let current = head;
    let index = 0;

    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }

    if (current.element !== element && current.next === null) {
      return -1
    }

    return index;
  }

  this.elementAt = function(index) {
    if (head === null) return undefined;

    let current = head;
    let currentIndex = 0;

    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }

    if (currentIndex !== index && current.next === null) {
      return undefined;
    }

    return current.element;
  }

  this.isEmpty = function() {
    return length === 0;
  }
}
```
