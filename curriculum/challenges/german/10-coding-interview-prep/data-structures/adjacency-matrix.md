---
id: 587d8256367417b2b2512c78
title: Adjazenzmatrix
challengeType: 1
forumTopicId: 301621
dashedName: adjacency-matrix
---

# --description--

Eine andere Möglichkeit einen Graphen darzustellen ist es, ihn in eine <dfn>adjacency matrix</dfn> (Adjazenzmatrix) zu übertragen. Eine <dfn>adjazent matrix</dfn> ist ein 2-dimensionales Array (2D), in dem jedes Subarray dieselbe Anzahl an Elementen hat wie das äußere Array. In anderen Worten ist es eine Matrix bzw. ein Raster von Zahlen, indem die Zahlen die Anzahl der Kanten repräsentieren.

**Hinweis**: Die Nummern oben und links der Matrix sind nur Bezeichnungen für die Knoten. Innerhalb der Matrix bedeutet ein eingetragener 1er, dass eine Kante zwischen den Knoten in der jeweiligen Zeile und Spalte existiert. Nullen schließlich bedeuten, dass es keine Kante oder Beziehung gibt.

<pre>
    1 2 3
  \------
1 | 0 1 1
2 | 1 0 0
3 | 1 0 0
</pre>

Oben sehen Sie einen sehr einfachen, unausgerichteten Graphen mit drei Knoten, wobei der erste Knoten mit dem zweiten und dritten Knoten verbunden ist. Nachfolgend finden Sie eine JavaScript-Implementierung desselben Vorgangs.

```js
var adjMat = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
```

Im Gegensatz zu einer Adjazenzliste muss jede "Zeile" der Matrix die gleiche Anzahl von Elementen haben wie die Knoten im Graphen. Hier haben wir eine drei mal drei Matrix, was bedeutet, dass wir drei Knoten in unserem Graphen haben. Ein ausgerichteter Graph würde ähnlich aussehen. Unten siehst du einen Graphen, bei dem der erste Knoten eine Kante hat, die auf den zweiten Knoten zeigt, und der zweite Knoten eine Kante hat, die auf den dritten Knoten zeigt.

```js
var adjMatDirected = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];
```

Graphen können auch <dfn>weights</dfn> an den Kanten haben. Bis jetzt haben wir <dfn>unweighted</dfn> Kanten, wo nur das Vorhandensein oder Fehlen einer Kante binär ist (`0` or `1`). Je nach Anwendung kann man unterschiedliche Gewichtungen haben.

# --instructions--

Erstelle eine Adjazenzmatrix von einem unausgerichteten Graphen mit fünf Knoten. Diese Matrix sollte in einem mehrdimensionalen Array vorliegen. Die fünf Knoten haben Beziehungen zwischen dem ersten und dem vierten Knoten, dem ersten und dem dritten Knoten, dem dritten und dem fünften Knoten sowie dem vierten und dem fünften Knoten. Alle Kantengewichtungen sind eins.

# --hints--

`undirectedAdjList` sollte nur 5 Knoten enthalten.

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

Es sollte eine Kante zwischen dem ersten und dem vierten Knoten vorhanden sein.

```js
assert(adjMatUndirected[0][3] === 1 && adjMatUndirected[3][0] === 1);
```

Es sollte eine Kante zwischen dem ersten und dem dritten Knoten vorhanden sein.

```js
assert(adjMatUndirected[0][2] === 1 && adjMatUndirected[2][0] === 1);
```

Es sollte eine Kante zwischen dem dritten und dem fünften Knoten vorhanden sein.

```js
assert(adjMatUndirected[2][4] === 1 && adjMatUndirected[4][2] === 1);
```

Es sollte eine Kante zwischen dem vierten und dem fünften Knoten vorhanden sein.

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
