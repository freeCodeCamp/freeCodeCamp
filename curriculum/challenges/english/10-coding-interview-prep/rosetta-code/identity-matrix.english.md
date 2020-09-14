---
title: Identity matrix
id: 5a23c84252665b21eecc7eb1
challengeType: 5
forumTopicId: 302290
---

## Description
<section id='description'>
An <i>identity matrix</i> is a square matrix of size \( n \times n \), where the diagonal elements are all <code>1</code>s (ones), and all the other elements are all <code>0</code>s (zeroes).
<ul>
  <li style="list-style: none;">\(\displaystyle I_{n}=\begin{bmatrix} 1 & 0 & 0 \cr 0 & 1 & 0 \cr 0 & 0 & 1 \cr \end{bmatrix}\)</li>
</ul>
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
function idMatrix(n) {
	return Array.apply(null, new Array(n)).map(function (x, i, xs) {
		return xs.map(function (_, k) {
			return i === k ? 1 : 0;
		})
	});
}

```

</section>
