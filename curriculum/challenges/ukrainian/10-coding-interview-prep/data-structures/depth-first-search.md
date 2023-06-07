---
id: 587d825d367417b2b2512c96
title: Пошук у глибину
challengeType: 1
forumTopicId: 301640
dashedName: depth-first-search
---

# --description--

Тут ми ознайомимося з алгоритмом обходу графу під назвою <dfn>пошук у глибину</dfn>, який є подібним до <dfn>пошуку у ширину</dfn>.

Під час пошуку в ширину робота алгоритму починається з вихідного вузла, а далі він проходить по вузлах таким чином, що кожне наступне ребро є довшим за попереднє. В той час алгоритм <dfn>Пошук у глибину</dfn> спочатку обирає найдовше ребро.

Коли пошук досягне кінця шляху, він повернеться до останнього вузла з невідвіданим ребром і продовжить пошук.

На анімації нижче наочно показано, яким чином працює цей алгоритм. Алгоритм починається з верхнього вузла і проходить по вузлах так, як пронумеровано в анімації.

<img class='img-responsive' src='https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966' />

Зверніть увагу: щоразу, коли даний алгоритм відвідує якийсь вузол, він не проходить по всіх сусідніх вузлах (в цьому полягає його відмінність від пошуку в ширину). Натомість він спочатку відвідує одну з сусідніх вершин і далі проходить вниз, допоки не відвідає всі вершини на цьому шляху.

Для реалізації цього алгоритму краще використати стек. Стек - це масив, в якому останній доданий елемент видаляється першим. Тобто це структура даних, яка працює за принципом <dfn>Останній прийшов - перший пішов</dfn> (англ. Last-In-First-Out (LIFO)). Стек допоможе при пошуку в глибину, адже (коли ми додаємо до стеку сусідні елементи) нам потрібно спочатку відвідати останніх доданих сусідів і вилучити їх зі стеку.

В простому випадку цей алгоритм виводить список вузлів, доступних з даного вузла. Таким чином, також краще відстежувати відвідані вузли.

# --instructions--

Напишіть функцію `dfs()`, яка приймає неорієнтовану матрицю суміжності `graph` та мітку вузла `root` як параметри. Міткою вузла буде ціле значення вузла між `0` і `n - 1`, де `n` - загальна кількість вузлів у графі.

Ваша функція повинна виводити масив усіх вузлів, які можна досягти з `root`.

# --hints--

Вхідний граф `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` з початковим вузлом `1` повинен повертатися як масив з чисел `0`, `1`, `2` і `3`.

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

The input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` with a start node of `3` should return an array with `3`, `2`, `1`, and `0`.

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

The input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` with a start node of `1` should return an array with four elements.

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

The input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` with a start node of `3` should return an array with `3`.

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

The input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` with a start node of `3` should return an array with one element.

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

The input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` with a start node of `3` should return an array with `2` and `3`.

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

The input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` with a start node of `3` should return an array with two elements.

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

The input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` with a start node of `0` should return an array with `0` and `1`.

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

The input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` with a start node of `0` should return an array with two elements.

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
