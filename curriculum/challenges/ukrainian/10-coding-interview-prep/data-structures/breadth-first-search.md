---
id: 587d825c367417b2b2512c90
title: Пошук у ширину
challengeType: 1
forumTopicId: 301622
dashedName: breadth-first-search
---

# --description--

Ми вже вивчили різні способи подання графів. А що тепер? Виникає закономірне запитання: як визначити відстані між будь-якими двома вузлами графу? Дати на нього відповідь можуть <dfn>алгоритми для обходу графа</dfn>.

<dfn>Алгоритми для обходу графа</dfn> - це алгоритми проходження вузлів графу. Одним з таких алгоритмів є пошук у ширину.

Він починається в одному вузлі та обходить всі його сусідні вузли, які розташовані на відстані одного ребра. Після цього він відвідує всіх сусідів цих вузлів і так далі, допоки не обійде всі вузли графу.

Важливою структурою даних, що допоможе реалізувати алгоритм пошуку в ширину, є черга. Це такий масив, до якого можна додавати елементи з одного кінця і вилучати їх з іншого. Тобто це структура даних, яка працює за принципом <dfn>Перший прийшов - перший пішов</dfn> (англ. <dfn>First-In-First-Out (FIFO))</dfn>.

Візуальна демонстрація роботи цього алгоритму. ![Алгоритм пошуку в ширину рухається по дереву](https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966)

Сірим кольором позначені вузли, які додаються до черги, а чорним - ті, що вилучаються з неї. Прослідкуйте, як щоразу, коли вузол видаляється з черги (він стає чорним), всі його сусіди додаються в чергу (і стають сірими).

Для реалізації цього алгоритму вам потрібно буде ввести структуру графа і початковий вузол.

Спочатку варто знати відстані або кількість ребер від початкового вузла. Алгоритм розпочнеться для усіх відстаней з великим показником, як-от `Infinity`. Це запобігає помилкам підрахунку, коли вузол не буде доступним з вашого початкового вузла. Далі вам потрібно перейти від початкового вузла до його сусідів. Вони знаходяться на відстані одного ребра, і на цьому етапі ви повинні збільшити на одиницю відстань, яку ви відстежуєте.

# --instructions--

Напишіть функцію `bfs()`, яка приймає матрицю суміжності графа (двомірний масив) та мітку початкового вузла як параметри. Міткою вузла буде ціле значення вузла між `0` і `n - 1`, де `n` - загальна кількість вузлів у графі.

Ваша функція буде виводити пару ключ-значення об'єкта JavaScript з вузлом та його відстанню від кореня. Якщо даний вузол неможливо досягнути, то його відстань - `Infinity`.

# --hints--

Вхідний граф - `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` з початковим вузлом `1` повинен повертатися як `{0: 1, 1: 0, 2: 1, 3: 2}`

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

Вхідний граф - `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` з початковим вузлом `1` повинен повертатися як `{0: 1, 1: 0, 2: 1, 3: Infinity}`

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

Вхідний граф - `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` з початковим вузлом `0` повинен повертатися як `{0: 0, 1: 1, 2: 2, 3: 3}`

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

Вхідний граф - `[[0, 1], [1, 0]]` з початковим вузлом `0` повинен повертатися як `{0: 0, 1: 1}`

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
