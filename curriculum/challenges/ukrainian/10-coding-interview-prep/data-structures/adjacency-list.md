---
id: 587d8256367417b2b2512c77
title: Список суміжності
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

Графи можуть бути представлені різними способами. Тут ми опишемо один з них. Він має назву <dfn>список суміжності</dfn>. По суті, список суміжності - це маркований список, де зліва - вузол, а справа перераховуються всі інші вузли, з якими з'єднаний поточний вузол. Нижче наведено представлення списку суміжності.

<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>

Вищенаведений приклад є неорієнтованим графом, оскільки `Node1` з'єднаний з `Node2` та `Node3`, і ця інформація відповідає з'єднанню `Node2` та `Node3`. Список суміжності для орієнтованого графу означатиме, що кожен рядок списку показує напрямок. Якби наведений вище граф був орієнтованим, то рядок `Node2: Node1` означав би, що ребро вказує напрямок від `Node2` до `Node1`. Ми можемо представити згаданий вище неорієнтований граф у вигляді списку суміжності, помістивши його в об'єкт JavaScript.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

Також його можна легше представити у вигляді масиву, де вузли містять числа, а не стрічки.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

Створіть соціальну мережу у вигляді неорієнтованого графа з 4 вузлами/людьми на ім'я `James`, `Jill`, `Jenny` та `Jeff`. Існують ребра/зв'язки між James і Jeff, Jill і Jenny, а також Jeff і Jenny.

# --hints--

`undirectedAdjList` повинен містити лише чотири вузли.

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

Між `Jeff` і `James` повинне бути ребро.

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

Між `Jill` і `Jenny` повинне бути ребро.

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

Між `Jeff` і `Jenny` повинне бути ребро.

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
