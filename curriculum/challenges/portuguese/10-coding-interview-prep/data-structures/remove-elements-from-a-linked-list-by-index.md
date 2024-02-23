---
id: 587d8251367417b2b2512c65
title: Remover elementos de uma lista encadeada por índice
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

Antes de avançarmos para outra estrutura de dados, vamos aprender algumas práticas finais com listas encadeadas.

Vamos escrever um método `removeAt`, que remove o `element` em um determinado `index`. O método deve ser chamado `removeAt(index)`. Para remover um `element` em um certo `index`, precisaremos manter uma contagem em execução de cada nó enquanto percorremos a lista encadeada.

Uma técnica comum usada para iterar através dos elementos de uma lista encadeada envolve um <dfn>'percorredor'</dfn>, ou sentinela, que 'aponte' para os nós que o seu código está comparando. Em nosso caso, começando com a `head` de nossa lista, iniciamos com uma variável `currentIndex` com o valor `0`. O `currentIndex` deve incrementar de um em um para cada nó que percorrermos.

Assim como nosso método `remove(element)`, que <a href="/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list" target="_blank" rel="noopener noreferrer nofollow">abordamos em uma aula anterior</a>, precisamos ser cuidadosos para não deixar órfã o resto de nossa lista quando removermos o nó em nosso método `removeAt(index)`. Manteremos nossos nós um após o outro, garantindo que o nó que possui a referência ao nó removido tenha uma referência ao próximo nó.

# --instructions--

Escreva um método `removeAt(index)`, que remove e retorna um nó em um determinado `index`. O método deve retornar `null` se o dado `index` for negativo, maior que ou igual ao `length` da lista encadeada.

**Observação:** lembre-se de manter a contagem do `currentIndex`.

# --hints--

A classe `LinkedList` deve ter o método `removeAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

O método `removeAt` deve diminuir o `length` da lista encadeada em um.

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

O método `removeAt` deve remover o elemento no índice especificado da lista encadeada.

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

Quando apenas um elemento está presente na lista encadeada, o método `removeAt` deve remover e retornar o elemento no índice especificado e reduzir o tamanho da lista encadeada.

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

O método `removeAt` deve retornar o elemento do nó removido.

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

O método `removeAt` deve retornar `null` e a lista encadeada não deve mudar se o índice dado for menor que `0`.

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

O método `removeAt` deve retornar `null` e a lista encadeada não deve mudar se o índice dado for maior que ou igual ao `length` da lista.

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
