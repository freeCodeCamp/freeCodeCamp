---
title: Identity matrix
id: 5a23c84252665b21eecc7eb1
challengeType: 5
---

## Description
<section id='description'>
An <i>identity matrix</i> is a square matrix of size \( n \times n \),
where the diagonal elements are all <b>1</b>s (ones),
and all the other elements are all <b>0</b>s (zeroes).
\begin{bmatrix} 1 & 0 & 0 \cr 0 & 1 & 0 \cr 0 & 0 & 1 \cr \end{bmatrix}
Write a function that takes a number 'n' as a parameter and returns the identity matrix of order n x n.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>idMatrix</code> should be a function.
    testString: assert(typeof idMatrix=='function','<code>idMatrix</code> should be a function.');
  - text: <code>idMatrix(1)</code> should return an array.
    testString: assert(Array.isArray(idMatrix(1)),'<code>idMatrix(1)</code> should return an array.');
  - text: <code>idMatrix(1)</code> should return <code>'+JSON.stringify(results[0])+'</code>.
    testString: assert.deepEqual(idMatrix(1),results[0],'<code>idMatrix(1)</code> should return <code>'+JSON.stringify(results[0])+'</code>.');
  - text: <code>idMatrix(2)</code> should return <code>'+JSON.stringify(results[1])+'</code>.
    testString: assert.deepEqual(idMatrix(2),results[1],'<code>idMatrix(2)</code> should return <code>'+JSON.stringify(results[1])+'</code>.');
  - text: <code>idMatrix(3)</code> should return <code>'+JSON.stringify(results[2])+'</code>.
    testString: assert.deepEqual(idMatrix(3),results[2],'<code>idMatrix(3)</code> should return <code>'+JSON.stringify(results[2])+'</code>.');
  - text: <code>idMatrix(4)</code> should return <code>'+JSON.stringify(results[3])+'</code>.
    testString: assert.deepEqual(idMatrix(4),results[3],'<code>idMatrix(4)</code> should return <code>'+JSON.stringify(results[3])+'</code>.');

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
function idMatrix (n) {
	return Array.apply(null, new Array(n)).map(function (x, i, xs) {
		return xs.map(function (_, k) {
			return i === k ? 1 : 0;
		})
	});
}

```

</section>
