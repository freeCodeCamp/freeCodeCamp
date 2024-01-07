---
id: 587d8251367417b2b2512c63
title: Remover elementos de uma lista encadeada
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

O próximo método importante que qualquer implementação de uma lista encadeada precisará é de um método `remove`. Este método deve receber como argumento o elemento que queremos remover, e, em seguida, procurar na lista para encontrar e remover o nó que contém esse elemento.

Sempre que removermos um nó de uma lista encadeada, é importante que não deixemos o resto da lista órfã ao fazer isso. Lembre-se de que todos os pontos de propriedade `next` dos nós apontam para o nó que os segue na lista. Se estivermos removendo o elemento do meio, digamos, vamos precisar ter certeza de que temos uma conexão com a propriedade `next` do nó anterior daquele elemento para a propriedade `next` do elemento do meio (que é o próximo nó na lista!)

Isso pode parecer muito confuso, então vamos voltar ao exemplo da fila de dançarinos de conga para que tenhamos um bom modelo conceitual. Imagine-se em uma fila de dançarinos de conga e que a pessoa diretamente à sua frente saia da fila. A pessoa que acabou de deixar a fila já não tem as mãos sobre ninguém da fila - e você já não tem as mãos sobre a pessoa que saiu. Você dá um passo para a frente e coloca as mãos na próxima pessoa que vê.

Se o elemento que queremos remover for o elemento `head`, reatribuímos a propriedade `head` para o segundo nó da lista encadeada.

# --instructions--

Escreva um método `remove` que pegue um elemento e o remova da lista encadeada.

**Observação:** o `length` da lista deve diminuir em um sempre que um elemento for removido da lista encadeada.

# --hints--

A classe `LinkedList` deve ter o método `remove`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

O método `remove` deve reatribuir `head` ao segundo nó quando o primeiro nó for removido.

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

O método `remove` deve diminuir o `length` da lista encadeada em um para cada nó removido.

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

O método `remove` deve reatribuir a referência do nó anterior ao nó removido para a referência `next` do nó removido.

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

O método `remove` não deve alterar a lista encadeada se o elemento não existir nela.

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
