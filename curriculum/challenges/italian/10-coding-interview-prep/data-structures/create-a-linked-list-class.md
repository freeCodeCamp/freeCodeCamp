---
id: 587d8251367417b2b2512c62
title: Creare una classe Lista Collegata
challengeType: 1
forumTopicId: 301628
dashedName: create-a-linked-list-class
---

# --description--

Creiamo una classe `linked list`. Ogni lista collegata dovrebbe iniziare con alcune proprietà di base: una testa `head` (il primo elemento nella tua lista) e una lunghezza `length` (numero di elementi nella tua lista). A volte vedrai implementazioni di liste collegate che incorporano una coda `tail` per l'ultimo elemento dell'elenco, ma per ora rimarremo solo con queste due. Ogni volta che aggiungiamo un elemento alla lista collegata, la nostra proprietà `length` dovrebbe essere incrementata di uno.

Vogliamo avere un modo per aggiungere elementi alla nostra lista collegata, quindi il primo metodo che vorremo creare è il metodo `add`.

Se la nostra lista è vuota, aggiungere un elemento alla nostra lista collegata è abbastanza semplice: basta che avvolgiamo quell'elemento in una classe `Node`, e assegnamo quel nodo alla testa (`head`) della nostra lista collegata.

Ma cosa succede se la nostra lista ha già uno o più membri? Come aggiungiamo un elemento alla lista? Ricorda che ogni nodo in una lista collegata ha una proprietà `next`. Per aggiungere un nodo all'elenco, trova l'ultimo nodo nell'elenco, e punta la proprietà `next` dell'ultimo nodo al nuovo nodo. (Suggerimento: saprai che hai raggiunto la fine di una lista collegata quando la proprietà `next` di un nodo sarà `null`.)

# --instructions--

Scrivi un metodo di aggiunta add che assegna il primo nodo che inserisci nella lista collegata alla testa `head`; dopo, ogni volta che aggiungerai un nodo, esso dovrebbe essere referenziato dalla proprietà `next` del nodo precedente.

Nota

La lunghezza `length` della tua lista dovrebbe aumentare di uno ogni volta che un elemento viene aggiunto alla lista collegata.

# --hints--

La tua classe `LinkedList` dovrebbe avere un metodo `add`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

La tua classe `LinkedList` dovrebbe assegnare `head` al primo nodo aggiunto.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

Il `node` precedente nella tua classe `LinkedList` dovrebbe avere riferimento al nodo più recente creato.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('fish');
    return test.head().next.element === 'dog' && test.head().next.next.element === 'fish';
  })()
);
```

La dimensione (`size`) della tua classe `LinkedList` dovrebbe essere uguale alla quantità di nodi nella lista collegata.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.size() === 2;
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    if (head == null) {
      head = new Node(element);
    } 
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        // currentNode.next will be last node of linked list after loop
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // Only change code above this line
  };
}
```
