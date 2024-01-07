---
id: 587d8256367417b2b2512c78
title: Matrice di adiacenza
challengeType: 1
forumTopicId: 301621
dashedName: adjacency-matrix
---

# --description--

Un altro modo per rappresentare un grafico è quello di metterlo in una <dfn>matrice di adiacenza</dfn>. Una matrice di <dfn>adiacenza</dfn> è un array bidimensionale (2D) in cui ogni array annidato ha lo stesso numero di elementi dell'array esterno. In altre parole, è una matrice o una griglia di numeri, dove i numeri rappresentano gli archi.

**Nota**: I numeri in alto e a sinistra della matrice sono solo etichette per i nodi. All'interno della matrice, gli uni significano che esiste un arco tra i vertici (nodi) che rappresentano la riga e la colonna. Infine, gli zeri significano che non c'è un arco o relazione.

<pre>
    1 2 3
  \------
1 | 0 1 1
2 | 1 0 0
3 | 1 0 0
</pre>

Quello sopra è un grafico molto semplice e non orientato con tre nodi, dove il primo nodo è collegato al secondo e al terzo nodo. Di seguito è riportata una implementazione JavaScript della stessa cosa.

```js
var adjMat = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
```

A differenza di una lista di adiacenza, ogni "riga" della matrice deve avere lo stesso numero di elementi dei nodi nel grafico. Qui abbiamo una matrice tre per tre, il che significa che abbiamo tre nodi nel nostro grafico. Un grafico orientato apparirebbe simile. Di seguito è riportato un grafico in cui il primo nodo ha un arco rivolto verso il secondo nodo, e poi il secondo nodo ha un arco che punta al terzo nodo.

```js
var adjMatDirected = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];
```

I grafici possono anche avere <dfn>pesi</dfn> sui loro archi. Finora, abbiamo archi <dfn>non ponderati</dfn> dove la sola presenza e mancanza di archi è binaria (`0` o `1`). Puoi avere pesi diversi a seconda della tua applicazione.

# --instructions--

Crea una matrice di adiacenza di un grafico non orientato con cinque nodi. Questa matrice dovrebbe essere in un array multidimensionale. Questi cinque nodi hanno relazioni tra il primo e il quarto nodo, il primo e il terzo nodo, il terzo e il quinto nodo, il quarto e il quinto nodo. Tutti i pesi degli archi sono uno.

# --hints--

`undirectedAdjList` dovrebbe contenere cinque nodi.

```js
assert(
  adjMatUndirected.length === 5 &&
    adjMatUndirected
      .map(function (x) {
        return x.length === 5;
      })
      .reduce(function (a, b) {
        return a && b;
      })
);
```

Dovrebbe esserci un arco tra il primo e il quarto nodo.

```js
assert(adjMatUndirected[0][3] === 1 && adjMatUndirected[3][0] === 1);
```

Dovrebbe esserci un arco tra il primo e il terzo nodo.

```js
assert(adjMatUndirected[0][2] === 1 && adjMatUndirected[2][0] === 1);
```

Dovrebbe esserci un bordo tra il terzo e il quinto nodo.

```js
assert(adjMatUndirected[2][4] === 1 && adjMatUndirected[4][2] === 1);
```

Dovrebbe esserci un arco tra il quarto e il quinto nodo.

```js
assert(adjMatUndirected[3][4] === 1 && adjMatUndirected[4][3] === 1);
```

# --seed--

## --seed-contents--

```js
var adjMatUndirected = [];
```

# --solutions--

```js
var adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0]
];
```
