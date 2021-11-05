---
id: 587d825c367417b2b2512c90
title: Breadth-First Search
challengeType: 1
forumTopicId: 301622
dashedName: breadth-first-search
---

# --description--

Finora, abbiamo imparato diversi modi per creare rappresentazioni di grafi. E adesso? Una domanda naturale da porsi è quali sono le distanze tra due nodi qualsiasi nel grafo? Qui entrano in gioco gli <dfn>algoritmi di attraversamento di grafi</dfn>.

<dfn>Gli algoritmi di attraversamento</dfn> sono algoritmi per attraversare o visitare nodi in un grafo. Un tipo di algoritmo di attraversamento è l'algoritmo Breadth-first Search (di ricerca in ampiezza).

Questo algoritmo inizia da un nodo e visita tutti i suoi vicini che sono ad un arco di distanza. Poi continua a visitare ciascuno dei loro vicini e così via fino a quando tutti i nodi sono stati raggiunti.

Una struttura dati importante che aiuterà ad implementare l'algoritmo di ricerca in ampiezza è la coda. Questa è un array dove è possibile aggiungere elementi ad una estremità e rimuovere elementi dall'altra estremità. Essa è nota anche come una struttura di dati <dfn>FIFO</dfn> o <dfn>First-In-First-Out</dfn> (NdT: il primo a entrare è il primo a uscire).

Visualmente, questo è ciò che l'algoritmo sta facendo. ![Algoritmo Breadth-first Search che si muove attraverso un albero](https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966)

L'ombreggiatura grigia rappresenta un nodo che viene aggiunto alla coda e l'ombreggiatura nera rappresenta un nodo che viene rimosso dalla coda. Vedi come ogni volta che un nodo viene rimosso dalla coda (il nodo diventa nero), tutti i vicini vengono aggiunti alla coda (il nodo diventa grigio).

Per implementare questo algoritmo, dovrai inserire una struttura grafo e un nodo da cui vuoi iniziare.

Innanzitutto, dovrai essere consapevole delle distanze (o del numero di archi di distanza) dal nodo iniziale. Ti consigliamo di inizializzare tutte le distanze con un numero elevato, come `Infinity`. Questo impedisce problemi di conteggio per quando un nodo potrebbe non essere raggiungibile dal nodo iniziale. Successivamente, vorrai andare dal nodo iniziale ai suoi vicini. Questi vicini sono a un arco di distanza e a questo punto dovresti aggiungere un'unità di distanza alle distanze di cui stai tenendo traccia.

# --instructions--

Scrivi una funzione `bfs()` che prende un grafo a matrice di adiacenza (un array bidimensionale) e l'etichetta di un nodo radice come parametri. L'etichetta del nodo sarà solo il valore intero del nodo tra `0` e `n - 1`, dove `n` è il numero totale di nodi nel grafico.

La tua funzione produrrà coppie chiave-valore di un oggetto JavaScript con il nodo e la sua distanza dalla radice. Se il nodo non può essere raggiunto, dovrebbe avere una distanza di `Infinity`.

# --hints--

Il grafico in ingresso `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo iniziale di `1` dovrebbe restituire `{0: 1, 1: 0, 2: 1, 3: 2}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: 2 });
  })()
);
```

Il grafico in ingresso `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` con un nodo iniziale di `1` dovrebbe restituire `{0: 1, 1: 0, 2: 1, 3: Infinity}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: Infinity });
  })()
);
```

Il grafico in ingresso `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo iniziale di `0` dovrebbe restituire `{0: 0, 1: 1, 2: 2, 3: 3}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1, 2: 2, 3: 3 });
  })()
);
```

Il grafo in ingresso `[[0, 1], [1, 0]]` con un nodo iniziale di `0` dovrebbe restituire `{0: 0, 1: 1}`

```js
assert(
  (function () {
    var graph = [
      [0, 1],
      [1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1 });
  })()
);
```

# --seed--

## --after-user-code--

```js
// Source: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
}
```

## --seed-contents--

```js
function bfs(graph, root) {
  var nodesLen = {};

  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
```

# --solutions--

```js
function bfs(graph, root) {
  var nodesLen = {};
  // Set all distances to infinity
  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0; // ...except root node
  var queue = [root]; // Keep track of nodes to visit
  var current; // Current node traversing
  // Keep on going until no more nodes to traverse
  while (queue.length !== 0) {
    current = queue.shift();
    // Get adjacent nodes from current node
    var curConnected = graph[current]; // Get layer of edges from current
    var neighborIdx = []; // List of nodes with edges
    var idx = curConnected.indexOf(1); // Get first edge connection
    while (idx !== -1) {
      neighborIdx.push(idx); // Add to list of neighbors
      idx = curConnected.indexOf(1, idx + 1); // Keep on searching
    }
    // Loop through neighbors and get lengths
    for (var j = 0; j < neighborIdx.length; j++) {
      // Increment distance for nodes traversed
      if (nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]); // Add new neighbors to queue
      }
    }
  }
  return nodesLen;
}
```
