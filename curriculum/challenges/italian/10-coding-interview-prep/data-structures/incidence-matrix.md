---
id: 587d8256367417b2b2512c79
title: Matrice di incidenza
challengeType: 1
forumTopicId: 301644
dashedName: incidence-matrix
---

# --description--

Un altro modo per rappresentare un grafico è quello di metterlo in una <dfn>matrice di incidenza.</dfn>

Una <dfn>matrice di incidenza</dfn> è un array bidimensionale (2D). In generale, una matrice di incidenza collega due classi diverse di oggetti tramite le sue due dimensioni. Questo tipo di matrice è simile a una matrice di adiacenza. Tuttavia, le righe e le colonne qui hanno un altro significato.

Nei grafi, abbiamo archi e nodi. Queste saranno le nostre "due classi diverse di oggetti". In questa matrice le righe saranno i nodi e colonne saranno gli archi. Ciò significa che possiamo avere un numero diverso di righe e colonne.

Ogni colonna rappresenterà un arco unico. Inoltre, ogni arco collegherà due nodi. Per mostrare che c'è un arco tra due nodi, si metterà un 1 nelle due righe di una particolare colonna. Di seguito è riportato un grafo a 3 nodi con un arco tra il nodo 1 e il nodo 3.

<blockquote>    1<br>   ---<br>1 | 1<br>2 | 0<br>3 | 1</blockquote>

Ecco un esempio di matrice di incidenza con 4 archi e 4 nodi. Ricorda, le colonne sono gli archi e le righe sono i nodi.

<blockquote>    1 2 3 4<br>   --------<br>1 | 0 1 1 1<br>2 | 1 1 0 0<br>3 | 1 0 0 1<br>4 | 0 0 1 0</blockquote>

Di seguito è riportata un'implementazione JavaScript della stessa cosa.

```js
var incMat = [
  [0, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
];
```

Per creare un grafo diretto, usa `-1` per un arco che lascia un particolare nodo e `1` per un arco che entra in un nodo.

```js
var incMatDirected = [
  [ 0, -1,  1, -1],
  [-1,  1,  0,  0],
  [ 1,  0,  0,  1],
  [ 0,  0, -1,  0]
];
```

I grafi possono anche avere dei <dfn>pesi</dfn> sui loro archi. Finora, abbiamo visto archi <dfn>non ponderati</dfn> dove la sola presenza e assenza degli archi è binaria (`0` o `1`). Puoi avere pesi diversi a seconda della tua applicazione. Un peso diverso è rappresentato con un numero maggiore di 1.

# --instructions--

Crea una matrice di incidenza di un grafo non diretto con cinque nodi e quattro archi. Questa matrice dovrebbe essere in un array multidimensionale.

Questi cinque nodi hanno le seguenti relazioni. Il primo arco è tra il primo e il secondo nodo. Il secondo arco è tra il secondo e il terzo nodo. Il terzo arco è tra il terzo e il quinto nodo. Il quarto arco è tra il quarto e il secondo nodo. Tutti i pesi degli archi sono uno e l'ordine dell'arco conta.

# --hints--

`incMatUndirected` dovrebbe contenere solo cinque nodi.

```js
assert(
  incMatUndirected.length === 5 &&
    incMatUndirected
      .map(function (x) {
        return x.length === 4;
      })
      .reduce(function (a, b) {
        return a && b;
      })
);
```

Dovrebbe esserci un primo arco tra il primo e il secondo nodo.

```js
assert(incMatUndirected[0][0] === 1 && incMatUndirected[1][0] === 1);
```

Dovrebbe esserci un secondo arco tra il secondo e il terzo nodo.

```js
assert(incMatUndirected[1][1] === 1 && incMatUndirected[2][1] === 1);
```

Dovrebbe esserci un terzo arco tra il terzo e il quinto nodo.

```js
assert(incMatUndirected[2][2] === 1 && incMatUndirected[4][2] === 1);
```

Dovrebbe esserci un quarto arco tra il secondo e il quarto nodo.

```js
assert(incMatUndirected[1][3] === 1 && incMatUndirected[3][3] === 1);
```

# --seed--

## --seed-contents--

```js
var incMatUndirected = [

];
```

# --solutions--

```js
var incMatUndirected = [[1, 0, 0, 0],[1, 1, 0, 1],[0, 1, 1, 0],[0, 0, 0, 1],[0, 0, 1, 0]];
```
