---
id: 587d8256367417b2b2512c77
title: Adjacency List
challengeType: 1
isHidden: false
forumTopicId: 301620
---

## Description
<section id='description'>

Graphs can be represented in different ways. Here we describe one way, which is called an <dfn>adjacency list</dfn>.
An adjacency list is essentially a bulleted list where the left side is the node and the right side lists all the other nodes it's connected to. Below is a representation of an adjacency list.
<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>
Above is an undirected graph because <code>Node1</code> is connected to <code>Node2</code> and <code>Node3</code>, and that information is consistent with the connections <code>Node2</code> and <code>Node3</code> show. An adjacency list for a directed graph would mean each row of the list shows direction. If the above was directed, then <code>Node2: Node1</code> would mean there the directed edge is pointing from <code>Node2</code> towards <code>Node1</code>.
We can represent the undirected graph above as an adjacency list by putting it within a JavaScript object.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

This can also be more simply represented as an array where the nodes just have numbers rather than string labels.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

</section>

## Instructions
<section id='instructions'>

Create a social network as an undirected graph with 4 nodes/people named <code>James</code>, <code>Jill</code>, <code>Jenny</code>, and <code>Jeff</code>. There are edges/relationships between James and Jeff, Jill and Jenny, and Jeff and Jenny.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> should only contain four nodes.
    testString: assert(Object.keys(undirectedAdjList).length === 4);
  - text: There should be an edge between <code>Jeff</code> and <code>James</code>.
    testString: assert(undirectedAdjList.James.indexOf("Jeff") !== -1 && undirectedAdjList.Jeff.indexOf("James") !== -1);
  - text: There should be an edge between <code>Jill</code> and <code>Jenny</code>.
    testString: assert(undirectedAdjList.Jill.indexOf("Jenny") !== -1 && undirectedAdjList.Jill.indexOf("Jenny") !== -1);
  - text: There should be an edge between <code>Jeff</code> and <code>Jenny</code>.
    testString: assert(undirectedAdjList.Jeff.indexOf("Jenny") !== -1 && undirectedAdjList.Jenny.indexOf("Jeff") !== -1);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var undirectedAdjList = {};
```

</div>
</section>

## Solution
<section id='solution'>

```js
var undirectedAdjList = {
  James: ['Jeff'],
  Jill: ['Jenny'],
  Jenny: ['Jill', 'Jeff'],
  Jeff: ['James', 'Jenny']
};
```

</section>
