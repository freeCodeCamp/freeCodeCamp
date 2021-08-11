---
id: 587d8255367417b2b2512c74
title: Creare una classe Coda di Priorità
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

In questa sfida creerai una Coda di Priorità. Una Coda Priorità è un tipo speciale di Coda in cui gli oggetti possono avere informazioni aggiuntive che ne specificano la priorità. Questa potrebbe essere semplicemente rappresentata con un numero intero. La priorità degli elementi sovrascriverà l'ordine di posizionamento nel determinare la sequenza di elementi rimossi dalla coda. Se un elemento con una priorità più alta viene accodato dopo gli elementi con priorità più bassa, l'elemento con priorità più alta sarà rimosso dalla coda prima di tutti gli altri.

Per esempio, immaginiamo di avere una coda di priorità con tre elementi:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Qui il secondo valore (un intero) rappresenta la priorità dell'elemento. Se accodi `['human', 1]` con una priorità di `1` (ipotizzando che le priorità più basse abbiano la precedenza) esso sarebbe il primo elemento ad essere rimosso dalla coda. La collezione assomiglierà a questa:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Abbiamo iniziato a scrivere una `PriorityQueue` nell'editor di codice. Dovrai aggiungere un metodo `enqueue` per aggiungere elementi con una priorità, un metodo `dequeue` per rimuovere e restituire gli oggetti, un metodo `size` per restituire il numero di elementi nella coda, un metodo `front` per restituire l'elemento nella parte anteriore della coda, e infine un metodo `isEmpty` che restituirà `true` se la coda è vuota o `false` se non lo è.

Il metodo `enqueue` dovrebbe accettare gli elementi con il formato mostrato sopra (`['human', 1]`) dove `1` rappresenta la priorità. `dequeue` e `front` dovrebbe restituire solo il nome dell'elemento, non la sua priorità.

# --hints--

La tua classe `PriorityQueue` dovrebbe avere un metodo `enqueue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

La tua classe `PriorityQueue` dovrebbe avere un metodo `dequeue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

La tua classe `PriorityQueue` dovrebbe avere un metodo `size`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

La tua classe `PriorityQueue` dovrebbe avere un metodo `front`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

La tua classe `PriorityQueue` dovrebbe avere un metodo `isEmpty`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

La tua classe `PriorityQueue` dovrebbe tenere correttamente traccia del numero attuale di elementi utilizzando il metodo `size` mentre gli elementi vengono accodati e rimossi.

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

Il metodo `front` dovrebbe restituire l'elemento corretto nella parte anteriore della coda mentre gli elementi vengono accodati e rimossi.

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

Il metodo `isEmpty` dovrebbe restituire `true` quando la coda è vuota.

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

La coda di priorità dovrebbe restituire gli elementi con una priorità più alta prima degli elementi con una priorità più bassa e restituire gli elementi nell'ordine first-in-first-out altrimenti.

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
