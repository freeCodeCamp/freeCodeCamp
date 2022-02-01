---
id: 587d8251367417b2b2512c62
title: Criar uma classe de lista encadeada
challengeType: 1
forumTopicId: 301628
dashedName: create-a-linked-list-class
---

# --description--

Vamos criar uma classe `linked list`. Cada lista encadeada deve começar com algumas propriedades básicas: uma `head` (o primeiro item da lista) e um `length` (o número de itens na lista). Às vezes, você verá implementações de listas encadeadas que incorporam uma `tail` para o último elemento da lista, mas, por enquanto, vamos nos manter com estes dois. Sempre que adicionarmos um elemento à lista encadeada, a propriedade `length` deve ser incrementada em mais uma.

Queremos ter uma maneira de adicionar itens à nossa lista encadeada, então o primeiro método que devemos criar é o método `add`.

Se a lista estiver vazia, adicionar um elemento nela é bastante direto: apenas encapsulamos esse elemento em uma classe `Node` e atribuímos esse nó à `head` de nossa lista encadeada.

Mas e se a lista já tiver um ou mais membros? Como adicionamos um elemento à lista? Lembre-se de que cada nó de uma lista encadeada tem uma propriedade `next`. Para adicionar um nó à lista, encontre o último nó na lista e aponte esse último nó para a propriedade `next` do novo nó. (Dica: você sabe que chegou ao final de uma lista vinculada quando a propriedade `next` de um nó é `null`.)

# --instructions--

Escreva um método add que atribui `head` ao primeiro nó que você insere na lista encadeada. Depois disso, sempre que adicionar um nó, cada nó deve ser referenciado pela propriedade `next` do nó anterior.

Observação

A propriedade `length` da lista encadeada deve aumentar de um em um sempre que um elemento for adicionado a ela.

# --hints--

A classe `LinkedList` deve ter o método `add`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

A classe `LinkedList` deve atribuir `head` ao primeiro nó adicionado.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

O `node` anterior na sua classe `LinkedList` deve ter referência ao nó criado mais recentemente.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('fish');
    return test.head().next.element === 'dog' && test.head().next.next.element === 'fish';
  })()
);
```

O  `size` da sua classe `LinkedList` deve ser igual à quantidade de nós da lista encadeada.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.size() === 2;
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    if (head == null) {
      head = new Node(element);
    } 
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        // currentNode.next will be last node of linked list after loop
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // Only change code above this line
  };
}
```
