---
id: 587d8252367417b2b2512c67
title: Aggiungere elementi ad un indice specifico in una lista collegata
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

Creiamo un metodo addAt(index,element) che aggiunge un elemento ad un dato indice. Proprio come come quando rimuoviamo gli elementi in un dato indice, dobbiamo tenere traccia del currentIndex mentre attraversiamo la lista collegata. Quando l'indice corrente corrisponde all'indice dato, dovremmo riassegnare la proprietà next del nodo precedente per fare riferimento al nuovo nodo aggiunto. E il nuovo nodo dovrebbe fare riferimento al nodo successivo in currentIndex. Tornando all'esempio della linea conga, una nuova persona vuole unirsi alla linea, ma vuole unirsi nel mezzo. Tu sei in mezzo alla linea, così togli le mani dalla persona che ti sta davanti. La nuova persona si inserisce e mette le mani sulla persona sulla quale prima avevi le tue mani, e tu ora metti le mani sulla nuova persona.

# --instructions--

Crea un metodo `addAt(index,element)` che aggiunge un elemento ad un dato indice. Restituisce falso se un elemento non può essere aggiunto. **Nota:** Ricordati di controllare se l'indice fornito è negativo o è più lungo della lunghezza dell'elenco.

# --hints--

Il tuo metodo `addAt` dovrebbe riassegnare `head` al nuovo nodo quando l'indice dato è 0.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'fish');
    return test.head().element === 'fish' && test.head().next.element === 'cat';
  })()
);
```

Il tuo metodo `addAt` dovrebbe aumentare di uno la lunghezza della lista collegata per ogni nuovo nodo aggiunto alla lista.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.size() === 3;
  })()
);
```

Il tuo metodo `addAt` dovrebbe restituire `false` se non è stato possibile aggiungere un nodo.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.addAt(4, 'cat') === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
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

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if (head === null){
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
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  }
}
```
