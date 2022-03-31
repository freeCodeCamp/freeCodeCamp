---
id: 587d825b367417b2b2512c8e
title: Creare una tabella hash
challengeType: 1
forumTopicId: 301627
dashedName: create-a-hash-table
---

# --description--

In questa sfida conosceremo le tabelle hash. Una tabella hash viene utilizzata per implementare array associativi, o mappature di coppie chiave-valore, come gli oggetti e le mappe che abbiamo appena studiato. Un oggetto JavaScript ad esempio potrebbe essere implementato come una tabella hash (la sua effettiva implementazione dipenderà dall'ambiente in esecuzione). Il modo in cui funziona una tabella di hash è che richiede un input chiave e fa hash di questa chiave in modo deterministico ad un certo valore numerico. Questo valore numerico viene quindi utilizzato come chiave reale con cui viene memorizzato il valore associato. Quindi, se si tenta di accedere di nuovo alla stessa chiave, la funzione di hash elaborerà la chiave, restituirà lo stesso risultato numerico, che verrà poi utilizzato per cercare il valore associato. Questo fornisce un tempo di ricerca O(1) molto efficiente in media.

Le tabelle di hash possono essere implementate come array con funzioni di hash che producono indici array all'interno di un intervallo specificato. In questo metodo, la scelta della dimensione dell'array è importante, così come la funzione di hashing. Per esempio, cosa succede se la funzione di hashing produce lo stesso valore per due chiavi diverse? Questa si chiama collisione. Un modo per gestire le collisioni è quello di semplicemente memorizzare entrambe le coppie chiave-valore in quell'indice. Poi, alla ricerca di entrambi, si dovrebbe iterare attraverso il gruppo di oggetti per trovare la chiave che stai cercando. Una buona funzione di hashing minimizzerà le collisioni per mantenere il tempo di ricerca efficiente.

Risultati della traduzione Qui non ci occuperemo dei dettagli dell'hashing o dell'implementazione della tabella hash, cercheremo solo di avere un'idea generale di come funzionano.

# --instructions--

Creiamo la funzionalità di base di una tabella di hash. Abbiamo creato una funzione di hashing ingenua da usare. Puoi passare un valore di stringa alla funzione `hash` e restituirà un valore hashed che puoi usare come chiave per l'archiviazione. Memorizza gli oggetti in base a questo valore hashed nell'oggetto `this.collection`. Crea questi tre metodi: `add`, `remove` e `lookup`. Il primo dovrebbe accettare una coppia di valori chiave da aggiungere alla tabella hash. Il secondo dovrebbe rimuovere una coppia chiave-valore quando riceve una chiave. Il terzo dovrebbe accettare una chiave e restituire il valore associato o `null` se la chiave non è presente.

Assicurati di scrivere il tuo codice per gestire le collisioni!

**Nota:** I test del metodo `remove` non passeranno fino a quando i metodi `add` e `lookup` non saranno correttamente implementati.

# --hints--

La struttura di dati `HashTable` dovrebbe esistere.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test === 'object';
  })()
);
```

La tua classe `HashTable` dovrebbe avere un metodo `add`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.add === 'function';
  })()
);
```

La tua classe `HashTable` dovrebbe avere un metodo `lookup`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.lookup === 'function';
  })()
);
```

La tua classe `HashTable` dovrebbe avere un metodo `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.remove === 'function';
  })()
);
```

Il metodo `add` dovrebbe aggiungere coppie chiave-valore e il metodo `lookup` dovrebbe restituire i valori associati con una determinata chiave.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    return test.lookup('key') === 'value';
  })()
);
```

Il metodo `remove` dovrebbe accettare una chiave come input e rimuovere la coppia chiave-valore associata.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');

    test.remove('key');
    return !test.collection.hasOwnProperty(hashValue);
  })()
);
```

Il metodo `remove` dovrebbe rimuovere solo la coppia chiave-valore corretta.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    test.add('yek', 'value');
    test.add('altKey', 'value');

    test.remove('yek');
    if (test.lookup('yek') || !test.lookup('key') || !test.lookup('altKey')) {
      return false;
    }

    test.remove('key');

    return !test.collection.hasOwnProperty(hashValue) && test.lookup('altKey');
  })()
);
```

Gli elementi devono essere aggiunti usando la funzione hash.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('key2', 'value2');
    test.add('key3', 'value3');
    return called >= 3 && called % 3 === 0;
  })()
);
```

La tabella di hash dovrebbe gestire le collisioni.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('1key', 'value2');
    test.add('ke1y', 'value3');
    return (
      test.lookup('key1') === 'value1' &&
      test.lookup('1key') == 'value2' &&
      test.lookup('ke1y') == 'value3'
    );
  })()
);
```

# --seed--

## --before-user-code--

```js
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
```

## --seed-contents--

```js
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var theHash = hash(key);
    var hashedObj = this.collection[theHash];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[theHash];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // Only change code above this line
};
```
