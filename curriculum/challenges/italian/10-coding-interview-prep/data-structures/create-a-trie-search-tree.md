---
id: 587d8259367417b2b2512c84
title: Crea un albero di ricerca Trie
challengeType: 1
forumTopicId: 301634
dashedName: create-a-trie-search-tree
---

# --description--

Qui ci muoveremo dagli alberi di ricerca binari e daremo un'occhiata ad un altro tipo di struttura ad albero chiamato trie. Un trie è un albero di ricerca ordinato comunemente usato per contenere stringhe, o più generamente array associativi o dataset dinamici in cui le chiavi sono stringhe. Sono un ottimo modo per immagazzinare set di dati quando molte chiavi hanno prefissi che si sovrappongono, per esempio, tutte le parole in un dizionario. A differenza di un albero binario, i nodi non sono associati con valori. Invece, il percorso verso un nodo rappresenta una chiave specifica. Per esempio, se vogliamo salvare la stringa "code" in un trie, avremmo quattri nodi, uno per ogni lettera: c — o — d — e. Seguendo il percorso attraverso tutti questi nodi creerà la stringa "code" — quel percorso è la chiave che abbiamo immagazzinato. Quindi, se vogliamo aggiungere la stringa "coding", avrebbe in comune i primi tre nodi di "code" prima di seguire un altro ramo dopo la d. In questo modo, dataset ampi possono essere immagazzinati in maniera compatta. In aggiunta, una ricerca può essere molto veloce perché è effettivamente limitata alla lunghezza della stringa che stai immagazinnando. Inoltre, a differenza degli alberi binari un nodo può avere qualsiasi numero di nodi figli. Come potresti avere indovinato dall'esempio precedente, alcuni metadata sono comunemente salvati come nodi che contengono la fine della chiave cossicché in traversamenti succestivi la chiave può essere ancora recuperata. Per esempio, se avessimo aggiunto "codes" nell'esempio precedente, avremmo avuto bisogno di qualche modo per sapere che la e in "code" rappresenta la fine di una chiave che era stata inserita precedentemente. Altrimenti, questa informazione andrebbe persa quando aggiungiamo "codes".

# --instructions--

Creiamo un trie per memorizzare parole. Accetterà parole attraverso un metodo `add` e salverà queste parole in una struttura dati trie. Permetterà anche di chiedere se una certa stringa è una parola con un metodo `isWord`, e estrarre tutte le parole inserite nel trie con un metodo `print`. `isWord` dovrebbe restituire un valore booleano e print dovrebbe restituire un array di tutte queste parole come stringhe. Per poter verificare che la struttura dati è implementata correttamente, abbiamo provveduto una struttura `Node` per ogni nodo dell'albero. Ogni nodo sarà un oggetto con una proprietà `keys` che è un oggetto Map JavaScript. Questo conterrà le lettere individuali che sono chiavi valide per ogni nodo. Abbiamo anche creato una proprietà `end` nel nodo che può essere messa su `true` se il nodo rappresenta la terminazione di una parola.

# --hints--

La tua classe `HashTable` dovrebbe avere un metodo `add`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

La tua classe `HashTable` dovrebbe avere un metodo `add`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

La tua classe `HashTable` dovrebbe avere un metodo `add`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.isWord == 'function';
  })()
);
```

Il metodo print dovrebbe restituire tutti gli elementi aggiunti al trie come stringhe in un array.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('jump');
    test.add('jumps');
    test.add('jumped');
    test.add('house');
    test.add('mouse');
    var added = test.print();
    return (
      added.indexOf('jump') != -1 &&
      added.indexOf('jumps') != -1 &&
      added.indexOf('jumped') != -1 &&
      added.indexOf('house') != -1 &&
      added.indexOf('mouse') != -1 &&
      added.length == 5
    );
  })()
);
```

Il `has` dovrebbe ritornare `true` per gli oggetti aggiunti `false` per consentire gli altri oggetti.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('hop');
    test.add('hops');
    test.add('hopped');
    test.add('hoppy');
    test.add('hope');
    return (
      test.isWord('hop') &&
      !test.isWord('ho') &&
      test.isWord('hopped') &&
      !test.isWord('hopp') &&
      test.isWord('hoppy') &&
      !test.isWord('hoping')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
