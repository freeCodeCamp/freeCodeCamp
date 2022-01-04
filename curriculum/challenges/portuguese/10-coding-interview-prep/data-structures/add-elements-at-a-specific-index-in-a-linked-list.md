---
id: 587d8252367417b2b2512c67
title: Adicionar elementos em um índice específico em uma lista encadeada
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

Vamos criar um método addAt(índice, elemento) que adiciona um elemento em um determinado índice. Da mesma forma como removemos os elementos em um determinado índice, precisamos saber qual é o currentIndex enquanto percorremos a lista encadeada. Quando o currentIndex corresponde ao índice dado, precisaremos reatribuir a propriedade next do nó anterior para fazer referência ao novo nó adicionado. E o novo nó deve fazer referência ao próximo nó de currentIndex. Retornando ao exemplo da fila de dançarinos de conga, uma nova pessoa quer se juntar à fila, mas ela quer entrar no meio dela. Você está no meio da fila. Então, tira as mãos da pessoa à sua frente. A nova pessoa entra na fila, coloca as mãos na pessoa que estava à sua frente e você coloca suas mãos nessa pessoa nova.

# --instructions--

Crie um método `addAt(index,element)` que adiciona um elemento em um determinado índice. Retorne false se um elemento não puder ser adicionado. **Observação:** lembre-se de verificar se o índice dado é negativo ou é maior que o tamanho da lista encadeada.

# --hints--

O método `addAt` deve reatribuir `head` com o novo nó quando o índice dado for 0.

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

O método `addAt` deve aumentar o tamanho da lista encadeada em um para cada novo nó adicionado à lista encadeada.

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

O método `addAt` deve retornar `false` se um nó não puder ser adicionado.

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
