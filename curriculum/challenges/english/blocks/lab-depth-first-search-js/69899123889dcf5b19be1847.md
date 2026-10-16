---
id: 69899123889dcf5b19be1847
title: Implement the Depth-First Search Algorithm
challengeType: 26
dashedName: implement-depth-first-search-algorithm
---

# --description--

In this lab, you will implement a graph traversal algorithm called <dfn>depth-first search</dfn> (DFS).

While a <dfn>breadth-first search</dfn> (BFS) explores neighbors level by level, <dfn>depth-first search</dfn> dives as deep as possible down a single path of edges before backtracking.

Once the algorithm reaches the end of a path (a node with no unvisited neighbors), it backtracks to the most recent node that still has unexplored edges and continues the search from there.

To implement this algorithm iteratively, you'll want to use a **stack**. In JavaScript, a standard `Array` serves perfectly as a stack using the `.push()` and `.pop()` methods, following the **Last-In-First-Out (LIFO)** principle. This ensures that the neighbor most recently added to the stack is the next one to be explored.

A simple output of this algorithm is a list of nodes which are reachable from a given node. Therefore, you'll also want to keep track of the nodes you visit.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `dfs`.
1. The `dfs` function should take two arguments:

    - `graph`: An adjacency matrix (an array of arrays).
    - `root`: A numeric node label (the starting index) which is the numeric value of the node between `0` and `n - 1`, where `n` is the total number of nodes in the graph.

1. The function should return an array containing all node labels reachable from the starting node.

# --hints--

You should have a function named `dfs` that takes two arguments.

```js
assert.isFunction(dfs);
assert.lengthOf(dfs, 2);
```

`dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1)` should return a list with `1`, `2`, `3`, and `0`.

```js
assert.sameMembers(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1), [1, 2, 3, 0]);
```

`dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 3)` should return a list with `1`, `2`, `3`, and `0`.

```js
assert.sameMembers(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 3), [1, 2, 3, 0]);
```

`dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3)` should return `[3]`.

```js
assert.sameMembers(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3), [3]);
```

`dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3)` should return a list with `3` and `2`.

```js
assert.sameMembers(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3), [3, 2]);

```

`dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0)` should return a list with `0` and `1`.

```js
assert.sameMembers(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0), [0, 1]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function dfs(graph, root) {
  let stack = [root];
  let visited = [];

  while (stack.length > 0) {
    let current = stack.pop();

    if (!visited.includes(current)) {
      visited.push(current);
      let neighbors = graph[current];
      
      for (let i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === 1) {
          stack.push(i);
        }
      }
    }
  }
  return visited;
}
```
