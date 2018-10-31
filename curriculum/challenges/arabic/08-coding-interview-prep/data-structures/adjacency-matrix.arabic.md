---
id: 587d8256367417b2b2512c78
title: Adjacency Matrix
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
    testString: 'assert((adjMatUndirected.length === 5) && adjMatUndirected.map(function(x) { return x.length === 5 }).reduce(function(a, b) { return a && b }) , "<code>undirectedAdjList</code> should only contain five nodes.");'
  - text: ''
    testString: 'assert((adjMatUndirected[0][3] === 1) && (adjMatUndirected[3][0] === 1), "There should be an edge between the first and fourth node.");'
  - text: ''
    testString: 'assert((adjMatUndirected[0][2] === 1) && (adjMatUndirected[2][0] === 1), "There should be an edge between the first and third node.");'
  - text: ''
    testString: 'assert((adjMatUndirected[2][4] === 1) && (adjMatUndirected[4][2] === 1), "There should be an edge between the third and fifth node.");'
  - text: ''
    testString: 'assert((adjMatUndirected[3][4] === 1) && (adjMatUndirected[4][3] === 1), "There should be an edge between the fourth and fifth node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var adjMatUndirected = [
];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
