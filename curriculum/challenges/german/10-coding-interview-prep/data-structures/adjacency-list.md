---
id: 587d8256367417b2b2512c77
title: Adjazenzliste
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

Graphen können auf unterschiedliche Weise repräsentiert werden. Hier beschreiben wir einen Weg, der <dfn>adjacency list</dfn> genannt wird. Eine Adjazenzliste ist im Wesentlichen eine Aufzählung, bei der die linke Seite der Knoten ist und die rechte Seite alle anderen Knoten auflistet, mit denen er verbunden ist. Unten sehen Sie eine Darstellung einer Adjazenzliste.

<blockquote>Knoten1: Knoten2, Knoten 3<br>Knoten2: Knoten 1<br>Knoten3: Knoten1</blockquote>

Dieses Beispiel zeigt einen richtungslosen Graphen an, da `Node1` mit `Node2` und `Node3` verbunden ist, und diese Information konsistent durch die Verbindungen `Node2` zu `Node3` bestätigt wird. Eine Adjazenzliste für einen gerichteten Graphen würde bedeuten, dass jede Zeile der Liste die Richtung angibt. Wenn die obigen Angaben stimmen, dann würde `Node2: Node1` bedeuten, dass `Node2` in Richtung `Node1` zeigt. Wir können den obigen nicht ausgerichteten Graphen als eine Adjazenzliste darstellen, indem wir ihn in ein JavaScript-Objekt einfügen.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

Dies kann auch einfacher als ein Array dargestellt werden, bei dem die Knoten nur Nummern und keine String-Bezeichnungen haben.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

Erstelle ein soziales Netzwerk repräsentiert durch einen nicht ausgerichteten Graphen mit 4 Knoten/Personen, namens James `James`, `Jill`, `Jenny`, und `Jeff`. Es gibt Kanten/Beziehungen zwischen James und Jeff, Jill und Jenny und Jeff und Jenny.

# --hints--

`undirectedAdjList` sollte nur 4 Knoten enthalten.

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

Es sollte eine Kante zwischen `Jeff` und `James` geben.

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

Es sollte eine Kante zwischen `Jill` und `Jenny` geben.

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

Es sollte eine Kante zwischen`Jeff` und `Jenny` geben.

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
