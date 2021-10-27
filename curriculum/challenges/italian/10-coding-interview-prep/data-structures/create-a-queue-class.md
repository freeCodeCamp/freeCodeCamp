---
id: 587d8250367417b2b2512c60
title: Creare una classe Queue
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

Come gli stack, le code sono una raccolta di elementi. Ma a differenza degli stack, le code seguono il principio FIFO (First-In First-Out). Gli elementi aggiunti ad una coda vengono spinti in fondo, o alla fine, della coda, e solo l'elemento nella parte anteriore della coda può essere rimosso.

Potremmo usare un array per rappresentare una coda, ma proprio come per gli stack, vogliamo limitare la quantità di controllo che abbiamo sulle nostre code.

I due metodi principali di una classe coda sono il metodo di accodamento e il metodo di rimozione. Il metodo di accodamento spinge un elemento in fondo alla coda, e il metodo di rimozione rimuove e restituisce l'elemento in testa alla coda. Altri metodi utili sono front, size e isEmpty.

# --instructions--

Scrivi un metodo `enqueue` che spinge un elemento in fondo alla coda, un metodo `dequeue` che rimuove e restituisce l'elemento in testa alla coda, un metodo `front` che permette di vedere l'elemento in testa alla coda, un metodo `size` che ne mostra la lunghezza, e un metodo `isEmpty` per controllare se la coda è vuota.

# --hints--

La tua classe `Queue` dovrebbe avere un metodo `enqueue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

La tua classe `Queue` dovrebbe avere un metodo `dequeue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

La tua classe `Queue` dovrebbe avere un metodo `front`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

La tua classe `Queue` dovrebbe avere un metodo `size`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

La classe `Queue` dovrebbe avere un metodo `isEmpty`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

Il metodo `dequeue` dovrebbe rimuovere e restituire l'elemento in testa alla coda

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

Il metodo `front` dovrebbe restituire il valore dell'elemento in testa alla coda

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

Il metodo `size` dovrebbe restituire la lunghezza della coda

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

Il metodo `isEmpty` dovrebbe restituire `false` se ci sono elementi nella coda

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
