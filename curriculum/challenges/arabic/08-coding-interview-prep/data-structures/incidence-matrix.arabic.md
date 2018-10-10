---
id: 587d8256367417b2b2512c79
title: Incidence Matrix
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
    testString: 'assert((incMatUndirected.length === 5) && incMatUndirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) , "<code>incMatUndirected</code> should only contain five nodes.");'
  - text: ''
    testString: 'assert((incMatUndirected[0][0] === 1) && (incMatUndirected[1][0] === 1), "There should be a first edge between the first and second node.");'
  - text: ''
    testString: 'assert((incMatUndirected[1][1] === 1) && (incMatUndirected[2][1] === 1), "There should be a second edge between the second and third node.");'
  - text: ''
    testString: 'assert((incMatUndirected[2][2] === 1) && (incMatUndirected[4][2] === 1), "There should be a third edge between the third and fifth node.");'
  - text: ''
    testString: 'assert((incMatUndirected[1][3] === 1) && (incMatUndirected[3][3] === 1), "There should be a fourth edge between the second and fourth node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var incMatUndirected = [

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
