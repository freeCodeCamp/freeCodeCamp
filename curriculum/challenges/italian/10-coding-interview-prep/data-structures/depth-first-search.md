---
id: 587d825d367417b2b2512c96
title: Ricerca Depth-First
challengeType: 1
forumTopicId: 301640
dashedName: depth-first-search
---

# --description--

Similmente alla ricerca <dfn>breadth-first</dfn>, qui impareremo a conoscere un altro algoritmo di attraversamento chiamato ricerca <dfn>depth-first</dfn>.

Mentre la ricerca breadth-first cerca lunghezze di archi incrementali lontano dal nodo di origine, la ricerca <dfn>depth-first</dfn> scende prima lungo un percorso di archi il più profondo possibile.

Una volta che raggiunge la fine di un percorso, la ricerca tornerà indietro fino all'ultimo nodo con un percorso di archi non visitato e continuerà a cercare.

L'animazione qui sotto mostra come funziona l'algoritmo. L'algoritmo inizia con il nodo iniziale e visita i nodi nell'ordine numerato.

<img class='img-responsive' alt="" src='https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966' />

Nota come, a differenza della ricerca breadth-first, ogni volta che un nodo viene visitato, non visita tutti i suoi vicini. Invece, prima visita uno dei suoi vicini e continua lungo quel percorso fino a quando non ci sono più nodi da visitare su di esso.

Per implementare questo algoritmo, vorrai utilizzare una pila (stack). Una pila è un array in cui l'ultimo elemento aggiunto è il primo ad essere rimosso. Questo è noto anche come una struttura di dati <dfn>Last-In-First-Out</dfn>. Uno stack è utile negli algoritmi di ricerca depth-first perché, mano a mano che aggiungiamo nodi vicini allo stack, vogliamo visitare prima i nodi vicini aggiunti più di recente e rimuoverli dallo stack.

Un semplice output di questo algoritmo è un elenco di nodi raggiungibili da un dato nodo. Pertanto, dovrai anche tenere traccia dei nodi che visiti.

# --instructions--

Scrivi una funzione `dfs()` che richiede una matrice di adiacenza non orientata `graph`, e un'etichetta di nodo `root` come parametri. L' etichetta del nodo sarà solo il valore numerico del nodo tra `0` e `n - 1`, dove `n` è il numero totale dei nodi nel grafo.

La tua funzione dovrebbe generare un array di tutti i nodi raggiungibili da `root`.

# --hints--

Il grafo di input `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo iniziale di `1` dovrebbe restituire un array con `0`, `1`, `2`e `3`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 1);
  })(),
  [0, 1, 2, 3]
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo iniziale di `3` dovrebbe restituire un array con `3`, `2`, `1`, e `0`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })(),
  [3, 2, 1, 0]
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo iniziale di `1` dovrebbe restiture un array con quattro elementi.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 1);
  })().length === 4
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` con un nodo iniziale di `3` dovrebbe restituire un array con `3`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    return dfs(graph, 3);
  })(),
  [3]
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` con un nodo iniziale di `3` dovrebbe restituire un array con un unico elemento.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    return dfs(graph, 3);
  })().length === 1
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo iniziale di `3` dovrebbe restituire un array con `2` e `3`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })(),
  [2, 3]
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo di inizio di `3` dovrebbe restituire un array con due elementi.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })().length === 2
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo iniziale di `0` deve restituire un array con `0` e `1`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 0);
  })(),
  [0, 1]
);
```

Il grafo di input `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo di inizio di `0` dovrebbe restituire un array con due elementi.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 0);
  })().length === 2
);
```

# --seed--

## --seed-contents--

```js
function dfs(graph, root) {

}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));
```

# --solutions--

```js
function dfs(graph, root) {
    var stack = [];
    var tempV;
    var visited = [];
    var tempVNeighbors = [];
    stack.push(root);
    while (stack.length > 0) {
        tempV = stack.pop();
        if (visited.indexOf(tempV) == -1) {
            visited.push(tempV);
            tempVNeighbors = graph[tempV];
            for (var i = 0; i < tempVNeighbors.length; i++) {
                if (tempVNeighbors[i] == 1) {
                    stack.push(i);
                }
            }
        }
    }
    return visited;
}
```
