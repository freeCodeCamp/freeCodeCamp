---
id: 698b42492a7f5f737895892e
title: Build an Adjacency List to Matrix Converter
challengeType: 26
dashedName: build-an-adjacency-list-to-matrix-converter
---

# --description--

In this lab, you will build a function that converts an adjacency list representation of a graph into an adjacency matrix. An adjacency list is an object where each key represents a node, and the corresponding value is an array of nodes that the key node is connected to. An adjacency matrix is a 2D array where the entry at position `[i][j]` is `1` if there's an edge from node `i` to node `j`, and `0` otherwise.

For example, given the adjacency list:

```js
{
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
}
```

The corresponding adjacency matrix would be:

```js
[
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
]
```

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `adjacencyListToMatrix` to convert an adjacency list to an adjacency matrix.
2. The function should take an object representing the adjacency list of an unweighted (either undirected or directed) graph as its argument.
3. The function should:
   - Convert the adjacency list to an adjacency matrix.
   - Print each row in the adjacency matrix.
   - Return the adjacency matrix.

For example, `adjacencyListToMatrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]})` should print:

```md
[0, 0, 1, 0]
[0, 0, 1, 1]
[1, 1, 0, 1]
[0, 1, 1, 0]
```

and return `[[0, 0, 1, 0], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]`.

# --hints--

You should define a function named `adjacencyListToMatrix`.

```js
assert.isFunction(adjacencyListToMatrix);
```

The `adjacencyListToMatrix` function should have one parameter.

```js
assert.lengthOf(adjacencyListToMatrix, 1);
```

The function should correctly determine the number of nodes from the adjacency list.

```js
const adjList = {0: [1], 1: [0], 2: []};
const result = adjacencyListToMatrix(adjList);
assert.lengthOf(result, 3);
result.forEach(arr => assert.lengthOf(arr, 3));
```

The function should correctly set matrix values to `1` for existing edges.

```js
const adjList = {0: [1], 1: [0]};
const result = adjacencyListToMatrix(adjList);
const expected = [[0, 1], [1, 0]];
assert.sameDeepOrderedMembers(result, expected);
```

The function should print each row of the matrix.

```js
const spy = __helpers.spyOn(console, "log");
try {
  const adjList = {0: [1], 1: []}
  adjacencyListToMatrix(adjList);
  const args = spy.calls;
  assert.sameDeepOrderedMembers(args[0], [ [0, 1] ]);
  assert.sameDeepOrderedMembers(args[1], [ [0, 0] ]);
} catch (e) {
  assert.fail(e);
} finally {
  spy.restore();
}
```

The function should return the adjacency matrix.

```js
const adjList = {0: [1], 1: []};
const result = adjacencyListToMatrix(adjList);
assert.sameDeepOrderedMembers(result, [[0, 1], [0, 0]]);
```

When given the adjacency list `{0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}`, the function should return `[[0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 1], [0, 0, 1, 0]]`.

```js
const adjList = {0: [1, 2], 1: [2], 2: [0, 3], 3: [2]};
const result = adjacencyListToMatrix(adjList);
const expected = [[0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 1], [0, 0, 1, 0]];
assert.sameDeepOrderedMembers(result, expected);
```

When given the adjacency list `{0: [1], 1: [0]}`, the function should return `[[0, 1], [1, 0]]`.

```js
const adjList = {0: [1], 1: [0]};
const result = adjacencyListToMatrix(adjList);
const expected = [[0, 1], [1, 0]];
assert.sameDeepOrderedMembers(result, expected);
```

When given the adjacency list `{0: [], 1: [], 2: []}`, the function should return `[[0, 0, 0], [0, 0, 0], [0, 0, 0]]`.

```js
const adjList = {0: [], 1: [], 2: []};
const result = adjacencyListToMatrix(adjList);
const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
assert.sameDeepOrderedMembers(result, expected);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function adjacencyListToMatrix(adjList) {
  const n = Object.keys(adjList).length;

  const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (const [srcStr, neighbors] of Object.entries(adjList)) {
    const srcNode = Number(srcStr);
    for (const destNode of neighbors) {
      adjMatrix[srcNode][destNode] = 1;
    }
  }

  for (const row of adjMatrix) {
    console.log(row);
  }

  return adjMatrix;
}

const adjList = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
};

const matrix = adjacencyListToMatrix(adjList);
```
