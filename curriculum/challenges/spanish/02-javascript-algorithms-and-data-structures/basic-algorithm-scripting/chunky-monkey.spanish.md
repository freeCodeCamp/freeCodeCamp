---
id: a9bd25c716030ec90084d8a1
title: Chunky Monkey
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Mono grueso
---

## Description
<section id="description"> Escriba una función que divida una matriz (primer argumento) en grupos de la longitud del <code>size</code> (segundo argumento) y los devuelva como una matriz bidimensional. Recuerda usar <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>chunkArrayInGroups([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;], 2)</code> debe devolver <code>[[&quot;a&quot;, &quot;b&quot;], [&quot;c&quot;, &quot;d&quot;]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]], "<code>chunkArrayInGroups(["a", "b", "c", "d"], 2)</code> should return <code>[["a", "b"], ["c", "d"]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> debe devolver <code>[[0, 1, 2], [3, 4, 5]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> debe devolver <code>[[0, 1], [2, 3], [4, 5]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> debe devolver <code>[[0, 1, 2, 3], [4, 5]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> debe devolver <code>[[0, 1, 2], [3, 4, 5], [6]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5], [6]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> debe devolver <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> debe devolver <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
