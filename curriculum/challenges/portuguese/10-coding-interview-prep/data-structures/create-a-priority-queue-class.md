---
id: 587d8255367417b2b2512c74
title: Criar uma classe de fila de prioridade
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

Neste desafio, você criará uma fila de prioridade. Uma fila de prioridade é um tipo especial de fila, na qual os itens podem ter informações adicionais que especificam a sua prioridade. Isto poderia ser representado simplesmente por um número inteiro. A prioridade do item substituirá a ordem de colocação ao determinar a sequência na qual os itens saem da fila. Se um item com maior prioridade for colocado na fila após itens com menor prioridade, o item de maior prioridade será removido da fila antes de todos os outros.

Por exemplo, vamos imaginar que temos uma fila de prioridade com três itens:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Aqui o segundo valor (um inteiro) representa a prioridade do item. Se enfileirarmos `['human', 1]` com prioridade de `1` (assumindo que prioridades inferiores tenham precedência), ele seria então o primeiro item a ser colocado em fila. A coleção ficaria assim:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Começamos a escrever uma `PriorityQueue` no editor de código. Você precisará adicionar um método `enqueue` para adicionar itens com uma prioridade, um método `dequeue` para remover e retornar itens, um método `size` para retornar o número de itens na fila, um método `front` para retornar o elemento na frente da fila, e, finalmente, um método `isEmpty` que retornará `true` se a fila estiver vazia ou `false` se não estiver.

O método `enqueue` deve aceitar itens com o formato mostrado acima (`['human', 1]`), onde `1` representa a prioridade. `dequeue` e `front` devem retornar apenas o nome do item, não sua prioridade.

# --hints--

A classe `PriorityQueue` deve ter o método `enqueue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

A classe `PriorityQueue` deve ter o método `dequeue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

A classe `PriorityQueue` deve ter o método `size`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

A classe `PriorityQueue` deve ter o método `front`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

A classe `PriorityQueue` deve ter o método `isEmpty`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

A classe `PriorityQueue` deve acompanhar corretamente o número atual dos itens usando o método `size` à medida que os itens são colocados na fila e removidos dela.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    test.enqueue(['Jon Snow', 1]);
    var size1 = test.size();
    test.dequeue();
    var size2 = test.size();
    test.enqueue(['A', 3]);
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    return size1 === 2 && size2 === 1 && test.size() === 4;
  })()
);
```

O método `front` deve retornar o item correto na frente da fila à medida que os itens são colocados e retirados da fila.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    var front1 = test.front();
    test.enqueue(['Jon Snow', 1]);
    var front2 = test.front();
    test.dequeue();
    test.enqueue(['A', 3]);
    var front3 = test.front();
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    test.dequeue();
    var front4 = test.front();
    return (
      front1 === 'David Brown' &&
      front2 === 'Jon Snow' &&
      front3 === 'David Brown' &&
      front4 === 'A'
    );
  })()
);
```

O método `isEmpty` deve retornar `true` quando a fila estiver vazia.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 1]);
    test.enqueue(['B', 1]);
    test.dequeue();
    var first = test.isEmpty();
    test.dequeue();
    return !first && test.isEmpty();
  })()
);
```

A fila de prioridade deve retornar os itens com uma prioridade maior antes dos itens com prioridade menor e retornar os itens na ordem First-in-First-out (o primeiro a entrar é o primeiro a sair) em todos os outros casos.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 5]);
    test.enqueue(['B', 5]);
    test.enqueue(['C', 5]);
    test.enqueue(['D', 3]);
    test.enqueue(['E', 1]);
    test.enqueue(['F', 7]);
    var result = [];
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    return result.join('') === 'EDABCF';
  })()
);
```

# --seed--

## --seed-contents--

```js
function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}
```
