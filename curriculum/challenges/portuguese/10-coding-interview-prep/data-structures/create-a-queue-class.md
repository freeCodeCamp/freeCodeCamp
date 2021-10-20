---
id: 587d8250367417b2b2512c60
title: Criar uma classe de fila
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

Da mesma forma que ocorre com as pilhas, as filas são uma coleção de elementos. Mas, ao contrário delas, as filas seguem o princípio FIFO (First-In First-Out, o primeiro a entrar é o primeiro a sair). Elementos adicionados à fila vão empurrados para o final da fila. Apenas o elemento da frente da fila pode ser removido.

Nós poderíamos usar um array para representar uma fila, mas, assim como fizemos como as pilhas, queremos limitar a quantidade de controle que temos sobre elas.

Os dois métodos principais de uma classe de fila são os métodos enqueue (colocar na fila) e dequeue (remover da fila). O método enqueue faz um push de um elemento para o final da fila, enquanto o método dequeue remove e retorna o elemento na frente da fila. Outros métodos úteis são os métodos front, size e isEmpty.

# --instructions--

Escreva um método `enqueue` que faça o push de um elemento para o final da fila, um método `dequeue`, que remove e retorna o elemento da frente, um método `front`, que nos permite ver o elemento da frente, um método `size`, que mostra o tamanho da fila, e um método `isEmpty` para verificar se a fila está vazia.

# --hints--

A classe `Queue` deve ter o método `enqueue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

A classe `Queue` deve ter o método `dequeue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

A classe `Queue` deve ter o método `front`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

A classe `Queue` deve ter o método `size`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

A classe `Queue` deve ter o método `isEmpty`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

O método `dequeue` deve remover e retornar o elemento da frente da fila

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.dequeue() === 'Smith';
  })()
);
```

O método `front` deve retornar o valor do elemento da frente da fila

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.front() === 'Smith';
  })()
);
```

O método `size` deve retornar o tamanho da fila

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

O método `isEmpty` deve retornar `false` quando houver elementos na fila

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return !test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0 ? true : false;
    }
    // Only change code above this line
}
```
