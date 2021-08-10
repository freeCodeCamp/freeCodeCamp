---
id: 587d8255367417b2b2512c75
title: Criar uma fila circular
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

Neste desafio, você criará uma fila circular. Uma fila circular é uma fila escreve até o final de uma coleção e que, então, começa a se sobrescrever no início da coleção. Este tipo de estrutura de dados é útil em certas situações. Por exemplo, uma fila circular pode ser usada para streaming de mídia. Quando a fila está cheia, os novos dados de mídia vão sobrescrever os dados antigos.

Uma boa maneira de ilustrar esse conceito é com um array de tamanho `5`:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

Aqui, a leitura e a escrita estão ambos na posição `0`. Agora, a fila recebe 3 novos registros `a`, `b`, e `c`. Nossa fila agora se parece assim:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

Como a cabeça de leitura lê, pode remover valores ou mantê-los:

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

Agora, gravamos os valores `d`, `e` e `f` na fila. Quando a gravação atinge o fim do array, ela retorna ao início:

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

Esta abordagem requer uma quantidade constante de memória, mas permite que arquivos de um tamanho muito maior sejam processados.

# --instructions--

Neste desafio, você criará uma fila circular. A fila circular deve fornecer os métodos `enqueue` e `dequeue`, que permitem que você leia e grave na fila. A classe também deve aceitar um argumento inteiro que você pode usar para especificar o tamanho da fila quando criada. Gravamos a versão inicial desta classe para você no editor de código.

Quando você incluir itens na fila, o ponteiro de gravação deve avançar para frente e retornar para o início assim que chegar ao final da fila. O método `enqueue` deve retornar o item que você colocou na fila se for bem-sucedido. Caso contrário, ele retornará `null`.

Da mesma forma, o ponteiro de leitura deve avançar enquanto você remove os itens da fila. Quando você remove um item, o item deve ser retornado. Se você não puder remover um item da fila, você deve retornar `null`.

Não deve ser permitido ao ponteiro de gravação passar pelo ponteiro de leitura (nossa classe não permitirá que você substitua dados que ainda não leu). Além disso, o ponteiro de leitura não deve ser capaz de avançar passando por dados que você gravou.

# --hints--

O método `enqueue` deve adicionar itens à fila circular.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

Você não deve enfileirar itens além do ponteiro de leitura.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    test.enqueue(13);
    test.enqueue(25);
    test.enqueue(59);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

O método `dequeue` deve remover os itens da fila.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591
    );
  })()
);
```

Depois que um item for removido da fila, sua posição na fila deve ser redefinida para `null`.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(672);
    test.dequeue();
    test.dequeue();
    var print = test.print();
    return print[0] === null && print[1] === null && print[2] === 672;
  })()
);
```

Tentando remover da fila além do ponteiro de gravação deve retornar `null` e não avançará esse ponteiro.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 &&
      test.dequeue() === 32 &&
      test.dequeue() === 591 &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.enqueue(100) === 100 &&
      test.dequeue() === 100
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    // Only change code above this line
  }
}
```

# --solutions--

```js
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    console.log(this.write, this.max);
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
        this.write = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }
}
```
