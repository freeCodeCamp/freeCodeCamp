---
id: 587d8256367417b2b2512c77
title: Lista di adiacenza
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

I grafici possono essere rappresentati in modi diversi. Qui descriviamo un modo, che è chiamato una <dfn>lista di adiacenza</dfn>. Una lista di adiacenza è essenzialmente un elenco puntato dove il lato sinistro è il nodo e il lato destro elenca tutti gli altri nodi a cui è collegato. Di seguito è riportata una rappresentazione di una lista di adiacenza.

<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>

Quello sopra è un grafico non orientato perché `Node1` è connesso a `Node2` e `Node3`, e tali informazioni sono coerenti con le connessioni `Node2` e `Node3`. La lista di adiacenza per un grafico orientato significherebbe che ogni riga della lista mostra la direzione. Se quanto sopra fosse orientato, allora `Node2: Node1` significherebbe che l'arco orientato sta puntando da `Node2` verso `Node1`. Possiamo rappresentare il grafo non orientato qui sopra come una lista di adiacenza inserendolo in un oggetto JavaScript.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

Questo può anche essere rappresentato più semplicemente come un array in cui i nodi hanno solo numeri invece di etichette di stringa.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

Crea un social network come grafo non orientato con 4 nodi/persone di nome `James`, `Jill`, `Jenny`, e `Jeff`. Ci sono lati/rapporti tra James e Jeff, Jill e Jenny, e Jeff e Jenny.

# --hints--

`undirectedAdjList` dovrebbe contenere solo quattro nodi.

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

Ci dovrebbe essere un arco tra `Jeff` e `James`.

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

Ci dovrebbe essere un arco tra `Jill` e `Jenny`.

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

Dovrebbe esserci un arco tra `Jeff` e `Jenny`.

```js
assert(
  undirectedAdjList.Jeff.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jeff') !== -1
);
```

# --seed--

## --seed-contents--

```js
var undirectedAdjList = {};
```

# --solutions--

```js
var undirectedAdjList = {
  James: ['Jeff'],
  Jill: ['Jenny'],
  Jenny: ['Jill', 'Jeff'],
  Jeff: ['James', 'Jenny']
};
```
