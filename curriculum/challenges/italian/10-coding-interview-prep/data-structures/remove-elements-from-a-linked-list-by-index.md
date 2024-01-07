---
id: 587d8251367417b2b2512c65
title: Rimuovere gli elementi da una lista concatenata usando l'indice
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

Prima di passare ad un'altra struttura di dati, otteniamo un altro po' di pratica con liste concatenate.

Scriviamo un metodo `removeAt` che rimuove l'elemento `element` in un dato `index`. Il metodo dovrebbe essere chiamato `removeAt(index)`. Per rimuovere un `element` a un certo `index`, avremo bisogno di mantenere un conteggio in esecuzione di ogni nodo mentre ci muoviamo lungo la lista concatenata.

Una tecnica comune utilizzata per iterare attraverso gli elementi di una lista concatenata comporta un <dfn>'runner'</dfn>, o sentinella, che 'punti' ai nodi che il tuo codice sta confrontando. Nel nostro caso, a partire dalla `head` della nostra lista, iniziamo con una variabile `currentIndex` che inizia da `0`. Il `currentIndex` dovrebbe aumentare di uno per ogni nodo che passiamo.

Proprio come il nostro metodo `remove(element)`, che <a href="/italian/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list" target="_blank" rel="noopener noreferrer nofollow">abbiamo coperto in una lezione precedente</a>, dobbiamo stare attenti a non rendere orfano il resto della nostra lista quando rimuoviamo il nodo nel nostro metodo `removeAt(index)`. Manteniamo i nostri nodi contigui assicurandoci che il nodo che fa riferimento al nodo rimosso abbia un riferimento al nodo successivo.

# --instructions--

Scrivi un metodo `removeAt(index)` che rimuove e restituisce un nodo a un certo `index`. Il metodo dovrebbe restituire `null` se l'`index` dato è o negativo, o superiore o uguale alla `length` della lista concatenata.

**Nota:** Ricordati di mantenere il conteggio del `currentIndex`.

# --hints--

La tua classe `LinkedList` dovrebbe avere un metodo `removeAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

Il tuo metodo `removeAt` dovrebbe ridurre `length` della lista collegata di uno.

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

Il tuo metodo `removeAt` dovrebbe rimuovere l'elemento all'indice specificato dalla lista collegata.

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

Quando un solo elemento è presente nell'elenco collegato, il tuo metodo `removeAt` dovrebbe rimuovere e restituire l'elemento all'indice specificato e ridurre la lunghezza della lista concatenata.

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

Il metodo `removeAt` dovrebbe restituire l'elemento del nodo rimosso.

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

Il tuo metodo `removeAt` dovrebbe restituire `null` e la lista concatenata non dovrebbe cambiare se l'indice dato è inferiore a `0`.

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

Il tuo metodo `removeAt` dovrebbe restituire `null` e la lista concatenata non dovrebbe cambiare se l'indice dato è maggiore o uguale a `length` dell'elenco.

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
