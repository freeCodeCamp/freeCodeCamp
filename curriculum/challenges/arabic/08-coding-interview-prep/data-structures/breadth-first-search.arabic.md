---
id: 587d825c367417b2b2512c90
title: Breadth-First Search
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: 2})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: 2}</code>");'
  - text: ''
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: Infinity})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>");'
  - text: ''
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1, 2: 2, 3: 3})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1, 2: 2, 3: 3}</code>");'
  - text: ''
    testString: 'assert((function() { var graph = [[0, 1], [1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1})})(), "The input graph <code>[[0, 1], [1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1}</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bfs(graph, root) {
  // Distance object returned
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

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
