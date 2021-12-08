---
id: 587d8251367417b2b2512c63
title: Rimuovi gli elementi da una lista concatenata
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

Il metodo successivo importante che ogni implementazione di una lista concatenata avrà bisogno è un metodo `remove`. Questo metodo dovrebbe prendere l'elemento che vogliamo rimuovere come un argomento, e quindi cercare l'elenco per trovare e rimuovere il nodo che contiene quell'elemento.

Ogni volta che rimuovi un nodo da una lista collegata, è importante che non orfani accidentalmente il resto della lista nel farlo. Ricorda che la proprietà `next` di ogni nodo punta al nodo che lo segue nella lista. Se stiamo rimuovendo l'elemento di mezzo, vogliamo fare in modo che c'è una connessione tra la proprietà `next` dell'elemento precedente e la proprietà `next` dell'elemento di mezzo (che è il nodo seguente nella lista!)

Questo può essere davvero confusionario, quindi ritornaimo all'esempio del trenino così abbiamo un buon modello concettuale. Immaginati in un trenino, e la persona direttamente davanti a te lascia la fila. La persona che ha appena lasciato la fina non ha più le mani sulle spalle di nessuno, e tu non hai più le mani sulle spalle della persona che se ne è andata. Fai un passo avanti e metti le mani sulle spalle della persona davanti a te.

Se l'elemento che vogliamo rimuovere è l'elemento `head`, assegniamo `head` al secondo nodo della lista concatenata.

# --instructions--

Scrivi un metodo `remove` che prende un elemento e lo rimuove dalla lista collegata.

**Nota:** La lunghezza della lista dovrebbe diminuire di uno ogni volta che un elemento viene rimosso dalla lista collegata.

# --hints--

La tua classe `LinkedList` dovrebbe avere un metodo `remove`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

Il tuo metodo `remove` dovrebbe riassegnare `head` al secondo nodo quando il primo nodo è rimosso.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.remove('cat');
    return test.head().element === 'dog';
  })()
);
```

Il tuo metodo `remove` dovrebbe diminuire `length` della lista concatenata di uno per ogni nodo rimosso.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('hamster');
    test.remove('cat');
    test.remove('fish');
    return test.size() === 2;
  })()
);
```

Il tuo metodo `remove` dovrebbe riassegnara il riferimento del nodo precedente del nodo rimosso al rifermento `next` del nodo rimosso.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('snake');
    test.add('kitten');
    test.remove('snake');
    return test.head().next.next.element === 'kitten';
  })()
);
```

Il tuo metodo `remove` non dovrebbe cambiare la lista concatenata se l'elemento non esiste nella lista concatenata.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.remove('elephant');
    return (
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

  this.remove = function(element){
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

  this.remove = function(element){
    if (head === null) {
      return;
    }
    var previous;
    var currentNode = head;

    while (currentNode.next !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.next === null && currentNode.element !== element) {
      return;
    }
    else if (previous) {
      previous.next = currentNode.next;
    } else {
      head = currentNode.next;
    }

    length--;
  };
} 
```
