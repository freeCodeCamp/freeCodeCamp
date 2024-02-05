---
id: 5900f51f1000cf542c510031
title: '問題434：剛性圖'
challengeType: 1
forumTopicId: 302105
dashedName: problem-434-rigid-graphs
---

# --description--

Recall that a graph is a collection of vertices and edges connecting the vertices, and that two vertices connected by an edge are called adjacent.

通過將每個頂點與歐氏空間中的一個點相關聯，可以將圖嵌入到歐氏空間中。

柔性圖是圖的嵌入，其中可以連續移動一個或多個頂點，以便至少兩個不相鄰頂點之間的距離發生變化，而每對相鄰頂點之間的距離保持恆定。

剛性圖是不靈活的圖的嵌入。

非正式地，如果通過用完全旋轉的鉸鏈替換頂點，並用不彎曲且無彈性的杆代替邊，則圖形是剛性的，則圖形的任何部分都不能獨立於圖形的其餘部分移動。

The grid graphs embedded in the Euclidean plane are not rigid, as the following animation demonstrates:

<img class="img-responsive center-block" alt="animation showing grid graphs are not rigid in Euclidean plane" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-1.gif" style="background-color: white; padding: 10px;" />

However, one can make them rigid by adding diagonal edges to the cells. For example, for the 2x3 grid graph, there are 19 ways to make the graph rigid:

<img class="img-responsive center-block" alt="19 ways to make 2x3 grid graph rigid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-2.png" style="background-color: white; padding: 10px;" />

Note that for the purposes of this problem, we do not consider changing the orientation of a diagonal edge or adding both diagonal edges to a cell as a different way of making a grid graph rigid.

Let $R(m, n)$ be the number of ways to make the $m × n$ grid graph rigid.

E.g. $R(2, 3) = 19$ and $R(5, 5) = 23\\,679\\,901$.

Define $S(N)$ as $\sum R(i, j)$ for $1 ≤ i$, $j ≤ N$.

E.g. $S(5) = 25\\,021\\,721$.

Find $S(100)$, give your answer modulo $1\\,000\\,000\\,033$.

# --hints--

`rigidGraphs()` should return `863253606`.

```js
assert.strictEqual(rigidGraphs(), 863253606);
```

# --seed--

## --seed-contents--

```js
function rigidGraphs() {

  return true;
}

rigidGraphs();
```

# --solutions--

```js
// solution required
```
