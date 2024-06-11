---
id: 587d8256367417b2b2512c77
title: Список суміжності
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

Графи можуть бути представлені різними способами. У цьому завданні розглянемо один з них, який називають <dfn>списком суміжності</dfn>. По суті, список суміжності — це маркований список, зліва якого є вершина, а справа перераховуються всі інші вершини, з якими вона з’єднана. Нижче наведено представлення списку суміжності.

<blockquote>Вершина1: Вершина2, Вершина3<br>Вершина2: Вершина1<br>Вершина3: Вершина1</blockquote>

Вищенаведений приклад є неорієнтованим графом, оскільки `Вершина1` з’єднана з `Вершина2` та `Вершина3`, і ця інформація відповідає з’єднанню `Вершина2` та `Вершина3`. Список суміжності для орієнтованого графа означатиме, що кожен ряд списку показує напрямок. Якби наведений вище граф був орієнтованим, то `Вершина2: Вершина1` означало б, що ребро вказує напрямок від `Вершина2` до `Вершина1`. Ми можемо представити згаданий вище неорієнтований граф у вигляді списку суміжності, помістивши його в об’єкті JavaScript.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

Також його можна легше представити у вигляді масиву, де мітками вершин є числа, а не рядки.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

Створіть соціальну мережу у вигляді неорієнтованого графа з 4 вершинами/людьми, яких звати `James`, `Jill`, `Jenny` та `Jeff`. Між `James` та `Jeff`, `Jill` та `Jenny`, `Jeff` та `Jenny` існують ребра/зв’язки.

# --hints--

`undirectedAdjList` має містити лише чотири вершини.

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

Між `Jeff` та `James` має бути ребро.

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

Між `Jill` та `Jenny` має бути ребро.

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

Між `Jeff` та `Jenny` має бути ребро.

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
