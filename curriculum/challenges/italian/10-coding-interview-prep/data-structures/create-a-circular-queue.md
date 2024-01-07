---
id: 587d8255367417b2b2512c75
title: Creare una coda circolare
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

In questa sfida creerai una coda circolare. Una coda circolare è una coda che scrive alla fine di una collezione, poi inizia a sovrascrivere sè stessa all'inizio della collezione. Questo tipo di struttura dati è utile in determinate situazioni. Ad esempio, una coda circolare può essere utilizzata per lo streaming media. Una volta che la coda è piena, i nuovi dati multimediali sovrascriveranno i vecchi dati.

Un buon modo per illustrare questo concetto è con un array di lunghezza `5`:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

Qui la lettura e la scrittura sono entrambe in posizione `0`. Ora la coda ottiene 3 nuovi record `a`, `b`e `c`. La nostra coda ora assomiglia a:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

Come la testa di lettura legge, può remove valori o conservarli:

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

Ora scriviamo i valori `d`, `e` e `f` nella coda. Una volta che la scrittura raggiunge la fine dell'array si riprende dall'inizio:

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

Questo approccio richiede una quantità costante di memoria, ma consente di elaborare file di dimensioni molto più grandi.

# --instructions--

In questa sfida implementeremo una coda circolare. La coda circolare dovrebbe fornire i metodi `enqueue` e `dequeue` che ti consentono di leggere e scrivere nella coda. La classe stessa dovrebbe anche accettare un argomento intero che puoi usare per specificare la dimensione della coda quando viene creata. Abbiamo scritto per te la versione iniziale di questa classe nell'editor di codice.

Quando accodi gli elementi alla coda, il puntatore di scrittura dovrebbe andare in avanti e tornare all'inizio una volta che ha raggiunto la fine della coda. Il metodo `enqueue` dovrebbe restituire l'elemento che hai accodato se ha avuto successo; altrimenti restituirà `null`.

Allo stesso modo, il puntatore di lettura dovrebbe avanzare come rimuovi oggetti dalla coda. Quando rimuovi un oggetto dalla coda, quell'oggetto dovrebbe essere restituito. Se non puoi rimuovere un oggetto dalla coda, dovresti restituire `null`.

Al puntatore di scrittura non dovrebbe essere permesso di muovere oltre il puntatore di lettura (la nostra classe non ti permetterà di sovrascrivere dati che non sono ancora stati letti) e il puntatore di lettura non dovrebbe eessere in grado di andare oltre i dati che hai scritto.

# --hints--

Il metodo `enqueue` dovrebbe aggiungere elementi alla coda circolare.

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

Non dovresti accodare gli elementi oltre il puntatore di lettura.

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

Il metodo `dequeue` dovrebbe rimuovere elementi dalla coda.

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

Dopo che un elemento è stato rimosso dalla coda, la sua posizione nella coda dovrebbe essere resettata su `null`.

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

Tentare di rimuovere oggetti dalla coda oltre il puntatore di scrittura dovrebbe restituire `null` e non far avanzare il puntatore di scrittura.

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
