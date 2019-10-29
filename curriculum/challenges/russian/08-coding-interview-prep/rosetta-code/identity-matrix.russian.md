---
title: Identity matrix
id: 5a23c84252665b21eecc7eb1
challengeType: 5
forumTopicId: 302290
localeTitle: Единичная матрица
---

## Description
<section id='description'>
<i>Единичная матрица</i> является квадратной матрицей размера \ (n \ times n \), где диагональные элементы - все <b>1</b> s (одни), а все остальные элементы - все <b>0</b> s (нули). \ begin {bmatrix} 1 &amp; 0 &amp; 0 \ cr 0 &amp; 1 &amp; 0 \ cr 0 &amp; 0 &amp; 1 \ cr \ end {bmatrix} Напишите функцию, которая принимает число «n» в качестве параметра и возвращает единичную матрицу порядок nx n.
</section>

## Instructions
<section id='instructions'>
Write a function that takes a number <code>n</code> as a parameter and returns the identity matrix of order \( n \times n \).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>idMatrix</code> should be a function.
    testString: assert(typeof idMatrix=='function');
  - text: <code>idMatrix(1)</code> should return an array.
    testString: assert(Array.isArray(idMatrix(1)));
  - text: <code>idMatrix(1)</code> should return <code>[ [ 1 ] ]</code>.
    testString: assert.deepEqual(idMatrix(1),results[0]);
  - text: <code>idMatrix(2)</code> should return <code>[ [ 1, 0 ], [ 0, 1 ] ]</code>.
    testString: assert.deepEqual(idMatrix(2),results[1]);
  - text: <code>idMatrix(3)</code> should return <code>[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]</code>.
    testString: assert.deepEqual(idMatrix(3),results[2]);
  - text: <code>idMatrix(4)</code> should return <code>[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]</code>.
    testString: assert.deepEqual(idMatrix(4),results[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function idMatrix(n) {
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
let results=[[ [ 1 ] ],
[ [ 1, 0 ], [ 0, 1 ] ],
[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ],
[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]]

```

</div>

</section>

## Solution
<section id='solution'>

```js
function idMatrix(n) {
    return Array.apply(null, new Array(n)).map(function (x, i, xs) {
        return xs.map(function (_, k) {
            return i === k ? 1 : 0;
        })
    });
}
```

</section>
