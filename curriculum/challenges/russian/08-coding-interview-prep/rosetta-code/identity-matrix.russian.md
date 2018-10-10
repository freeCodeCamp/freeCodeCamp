---
title: Identity matrix
id: 5a23c84252665b21eecc7eb1
challengeType: 5
videoUrl: ''
localeTitle: Единичная матрица
---

## Description
<section id="description"> <i>Единичная матрица</i> является квадратной матрицей размера \ (n \ times n \), где диагональные элементы - все <b>1</b> s (одни), а все остальные элементы - все <b>0</b> s (нули). \ begin {bmatrix} 1 &amp; 0 &amp; 0 \ cr 0 &amp; 1 &amp; 0 \ cr 0 &amp; 0 &amp; 1 \ cr \ end {bmatrix} Напишите функцию, которая принимает число «n» в качестве параметра и возвращает единичную матрицу порядок nx n. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>idMatrix</code> должна быть функцией.
    testString: 'assert(typeof idMatrix=="function","<code>idMatrix</code> should be a function.");'
  - text: <code>idMatrix(1)</code> должен возвращать массив.
    testString: 'assert(Array.isArray(idMatrix(1)),"<code>idMatrix(1)</code> should return an array.");'
  - text: '<code>idMatrix(1)</code> должен возвращать <code>&quot;+JSON.stringify(results[0])+&quot;</code> .'
    testString: 'assert.deepEqual(idMatrix(1),results[0],"<code>idMatrix(1)</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: '<code>idMatrix(2)</code> должен возвращать <code>&quot;+JSON.stringify(results[1])+&quot;</code> .'
    testString: 'assert.deepEqual(idMatrix(2),results[1],"<code>idMatrix(2)</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: '<code>idMatrix(3)</code> должен возвращать <code>&quot;+JSON.stringify(results[2])+&quot;</code> .'
    testString: 'assert.deepEqual(idMatrix(3),results[2],"<code>idMatrix(3)</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: '<code>idMatrix(4)</code> должен возвращать <code>&quot;+JSON.stringify(results[3])+&quot;</code> .'
    testString: 'assert.deepEqual(idMatrix(4),results[3],"<code>idMatrix(4)</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function idMatrix (n) {
  // Good luck!
}

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
