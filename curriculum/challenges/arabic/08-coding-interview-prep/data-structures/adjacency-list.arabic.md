---
id: 587d8256367417b2b2512c77
title: Adjacency List
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
    testString: 'assert(Object.keys(undirectedAdjList).length === 4, "<code>undirectedAdjList</code> should only contain four nodes.");'
  - text: ''
    testString: 'assert(undirectedAdjList.James.indexOf("Jeff") !== -1 && undirectedAdjList.Jeff.indexOf("James") !== -1, "There should be an edge between <code>Jeff</code> and <code>James</code>.");'
  - text: ''
    testString: 'assert(undirectedAdjList.Jill.indexOf("Jenny") !== -1 && undirectedAdjList.Jill.indexOf("Jenny") !== -1, "There should be an edge between <code>Jill</code> and <code>Jenny</code>.");'
  - text: ''
    testString: 'assert(undirectedAdjList.Jeff.indexOf("Jenny") !== -1 && undirectedAdjList.Jenny.indexOf("Jeff") !== -1, "There should be an edge between <code>Jeff</code> and <code>Jenny</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var undirectedAdjList = {
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
