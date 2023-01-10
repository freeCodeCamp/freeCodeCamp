---
id: 587d8251367417b2b2512c64
title: Pesquisar em uma lista encadeada
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

Vamos adicionar mais alguns métodos úteis à nossa classe de lista encadeada. Não seria útil se pudéssemos dizer se nossa lista estava vazia ou não. como em nossas classes `Stack` e `Queue`?

Deveríamos também poder encontrar elementos específicos na nossa lista encadeada. Percorrer estruturas de dados é algo que você vai querer praticar bastante! Vamos criar um método `indexOf`, que recebe um `element` como argumento, e retorna o `index` desse elemento na lista encadeada. Se o elemento não for encontrado na lista encadeada, retorne `-1`.

Vamos também implementar um método que faz o oposto: um método `elementAt`, que recebe um `index` como um argumento e retorna o `element` que está no `index` fornecido. Se nenhum `element` passar no teste, retorne `undefined`.

# --instructions--

Escreva um método `isEmpty`, que verifique se a lista está vazia, um método `indexOf`, que retorna o `index` de um determinado elemento, e um método `elementAt`, que retorna um `element` em um dado `index`.

# --hints--

A classe `LinkedList` deve ter o método `isEmpty`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

O método `isEmpty` deve retornar `false` quando houver pelo menos um elemento na lista encadeada.

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

O método `isEmpty` deve retornar `true` quando não houver elementos na lista encadeada.

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

A classe `LinkedList` deve ter o método `indexOf`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

O método `indexOf` deve retornar o índice de um determinado elemento encontrado na lista encadeada.

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

O método `indexOf` deve retornar `-1` se o elemento fornecido não for encontrado na lista encadeada

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

A classe `LinkedList` deve ter o método `elementAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

O método `elementAt` deve retornar o elemento encontrado no índice fornecido da lista encadeada.

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

O método `elementAt` deve retornar `undefined` se o elemento fornecido não for encontrado no índice fornecido na lista encadeada.

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
