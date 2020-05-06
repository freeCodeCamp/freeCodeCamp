---
id: 587d825d367417b2b2512c96
title: Depth-First Search
challengeType: 1
forumTopicId: 301640
---

## Description
<section id='description'>
Similar to <dfn>breadth-first search</dfn>, here we will learn about another graph traversal algorithm called <dfn>depth-first search</dfn>.
Whereas the breadth-first search searches incremental edge lengths away from the source node, <dfn>depth-first search</dfn> first goes down a path of edges as far as it can.
Once it reaches one end of a path, the search will backtrack to the last node with an un-visited edge path and continue searching.
The animation below shows how the algorithm works. The algorithm starts with the top node and visits the nodes in the numbered order.
<img class='img-responsive' src='https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966'>

Notice how, unlike breadth-first search, every time a node is visited, it doesn't visit all of its neighbors. Instead, it first visits one of its neighbors and continues down that path until there are no more nodes to be visited on that path.

To implement this algorithm, you'll want to use a stack. A stack is an array where the last element added is the first to be removed. This is also known as a <dfn>Last-In-First-Out</dfn> data structure. A stack is helpful in depth-first search algorithms because, as we add neighbors to the stack, we want to visit the most recently added neighbors first and remove them from the stack. 

A simple output of this algorithm is a list of nodes which are reachable from a given node. Therefore, you'll also want to keep track of the nodes you visit.
</section>

## Instructions
<section id='instructions'>
Write a function <code>dfs()</code> that takes an undirected, adjacency matrix <code>graph</code> and a node label <code>root</code> as parameters. The node label will just be the numeric value of the node between <code>0</code> and <code>n - 1</code>, where <code>n</code> is the total number of nodes in the graph.
Your function should output an array of all nodes reachable from <code>root</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with <code>0</code>, <code>1</code>, <code>2</code>, and <code>3</code>.
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})(), [0, 1, 2, 3]);
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with four elements.
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})().length === 4);
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with <code>3</code>.
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})(), [3]);
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with one element.
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})().length === 1);
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with <code>2</code> and <code>3</code>.
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})(), [2, 3]);
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with two elements.
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})().length === 2);
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return an array with <code>0</code> and <code>1</code>.
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})(), [0, 1]);
  - text: The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return an array with two elements.
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})().length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>


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

</section>
