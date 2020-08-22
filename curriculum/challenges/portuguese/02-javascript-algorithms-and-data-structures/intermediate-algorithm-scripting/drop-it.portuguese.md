---
id: a5deed1811a43193f9f1c841
title: Drop it
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Largue
---

## Description
<section id="description"> Dado o arranjo <code>arr</code> , percorra e remova cada elemento começando do primeiro elemento (o índice 0) até que a função <code>func</code> retorne <code>true</code> quando o elemento iterado passar por ele. Em seguida, retorne o restante da matriz quando a condição for satisfeita, caso contrário, o <code>arr</code> deverá ser retornado como uma matriz vazia. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>dropElements([1, 2, 3, 4], function(n) {return n &gt;= 3;})</code> deve retornar <code>[3, 4]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4], "<code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.");'
  - text: '<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> deve retornar <code>[1, 0, 1]</code> .'
    testString: 'assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1], "<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.");'
  - text: '<code>dropElements([1, 2, 3], function(n) {return n &gt; 0;})</code> deve retornar <code>[1, 2, 3]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3], "<code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.");'
  - text: '<code>dropElements([1, 2, 3, 4], function(n) {return n &gt; 5;})</code> deve retornar <code>[]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), [], "<code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.");'
  - text: '<code>dropElements([1, 2, 3, 7, 4], function(n) {return n &gt; 3;})</code> deve retornar <code>[7, 4]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4], "<code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.");'
  - text: '<code>dropElements([1, 2, 3, 9, 2], function(n) {return n &gt; 2;})</code> deve retornar <code>[3, 9, 2]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2], "<code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
