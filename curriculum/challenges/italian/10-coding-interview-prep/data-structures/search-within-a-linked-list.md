---
id: 587d8251367417b2b2512c64
title: Cercare in una lista concatenata
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

Aggiungiamo alcuni altri metodi utili alla nostra classe di lista concatenata. Non sarebbe utile se potessimo dire se la nostra lista sia vuota o no, come con le nostre classi `Stack` e `Queue`?

Dovremmo anche essere in grado di trovare elementi specifici nella nostra lista concatenata. Traversare strutture di dati è qualcosa con cui vorrai fare un sacco di pratica! Creiamo un metodo `indexOf` che prende `element` coem argomento, e restituisce l'`index` di quell'elemento nella lista concatenata. Se l'elemento non è trovato nella lista collegata, restituisci `-1`.

Implementiamo pure un metodo che fa l'opposto: un metodo `elementAt` che accetta un `index` come argomento e restituisce `element` al dato `index`. Se nessun elemento `element` è trovato, restituisci `undefined`.

# --instructions--

Scrivi un metodo `isEmpty` che verifica se la lista concatenata è vuota, un metodo `indexOf` che restituisce l'`index` di un dato elemento, e un metodo `elementAt` che restituisce l'`element` al dato `index`.

# --hints--

La tua classe `LinkedList` dovrebbe avere un metodo `isEmpty`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

Il tuo metodo `isEmpty` dovrebbe restituire `false` quando c'è almeno un elemento nella lista concatenata.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.isEmpty() === false;
  })()
);
```

Il tuo metodo `isEmpty` dovrebbe restituire `true` quando non ci sono elementi nella lista concatenata.

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

La tua classe `LinkedList` dovrebbe avere un metodo `indexOf`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

Il tuo metodo `indexOf` dovrebbe restituire l'indice di un dato elemento trovato nella lista concatenata.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('cat') === 0;
  })()
);
```

Il tuo metodo `indexOf` dovrebbe restituire `-1` se l'elemento dato non è trovato nella lista concatenata

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('pony') === -1;
  })()
);
```

La tua classe `LinkedList` dovrebbe avere un metodo `elementAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

Il tuo metodo `elementAt` dovrebbe restituire l'elemento trovato in un dato indice nella lista concatenata.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(1) === 'dog';
  })()
);
```

Il tuo `elementAt` metodo dovrebbe restituire `undefined` se l'elemento dato non è trovato in un dato indice nella lista concatenata.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(5) === undefined;
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

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
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

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf = function(element) {
    if (head === null) return -1

    let current = head;
    let index = 0;

    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }

    if (current.element !== element && current.next === null) {
      return -1
    }

    return index;
  }

  this.elementAt = function(index) {
    if (head === null) return undefined;

    let current = head;
    let currentIndex = 0;

    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }

    if (currentIndex !== index && current.next === null) {
      return undefined;
    }

    return current.element;
  }

  this.isEmpty = function() {
    return length === 0;
  }
}
```
