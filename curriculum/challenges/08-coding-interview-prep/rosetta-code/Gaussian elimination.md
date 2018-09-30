---
title: Gaussian elimination
id: 5a23c84252665b21eecc7e77
challengeType: 5
---

## Description
<section id='description'>
Write a function to solve \(A.x = b\) using Gaussian elimination then backwards substitution. \(A\) being an \(n \times n\) matrix. Also, \(x\) and \(b\) are \(n\) by 1 vectors. To improve accuracy, please use partial pivoting and scaling.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: "'<code>gaussianElimination</code> should be a function."'
  testString: 'assert(typeof gaussianElimination=="function","<code>gaussianElimination</code> should be a function.");'
- text: "'<code>gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")</code> should return an array."'
  testString: 'assert(Array.isArray(gaussianElimination(tests[0][0],tests[0][1])),"<code>gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")</code> should return an array.");'
- text: "'<code>gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")</code> should return <code>"+JSON.stringify(results[0])+"</code>."'
  testString: 'assert.deepEqual(gaussianElimination(tests[0][0],tests[0][1]),results[0],"<code>gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
- text: "'<code>gaussianElimination("+JSON.stringify(tests[1][0])+","+JSON.stringify(tests[1][1])+")</code> should return <code>"+JSON.stringify(results[1])+"</code>."'
  testString: 'assert.deepEqual(gaussianElimination(tests[1][0],tests[1][1]),results[1],"<code>gaussianElimination("+JSON.stringify(tests[1][0])+","+JSON.stringify(tests[1][1])+")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
- text: "'<code>gaussianElimination("+JSON.stringify(tests[2][0])+","+JSON.stringify(tests[2][1])+")</code> should return <code>"+JSON.stringify(results[2])+"</code>."'
  testString: 'assert.deepEqual(gaussianElimination(tests[2][0],tests[2][1]),results[2],"<code>gaussianElimination("+JSON.stringify(tests[2][0])+","+JSON.stringify(tests[2][1])+")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
- text: "'<code>gaussianElimination("+JSON.stringify(tests[3][0])+","+JSON.stringify(tests[3][1])+")</code> should return <code>"+JSON.stringify(results[3])+"</code>."'
  testString: 'assert.deepEqual(gaussianElimination(tests[3][0],tests[3][1]),results[3],"<code>gaussianElimination("+JSON.stringify(tests[3][0])+","+JSON.stringify(tests[3][1])+")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
- text: "'<code>gaussianElimination("+JSON.stringify(tests[4][0])+","+JSON.stringify(tests[4][1])+")</code> should return <code>"+JSON.stringify(results[4])+"</code>."'
  testString: 'assert.deepEqual(gaussianElimination(tests[4][0],tests[4][1]),results[4],"<code>gaussianElimination("+JSON.stringify(tests[4][0])+","+JSON.stringify(tests[4][1])+")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gaussianElimination (A,b) {
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
function gaussianElimination(A, b) {
  // Lower Upper Decomposition
  function ludcmp(A) {
  	// A is a matrix that we want to decompose into Lower and Upper matrices.
  	var d = true
  	var n = A.length
  	var idx = new Array(n) // Output vector with row permutations from partial pivoting
  	var vv = new Array(n) // Scaling information

  	for (var i=0; i<n; i++) {
  		var max = 0
  		for (var j=0; j<n; j++) {
  			var temp = Math.abs(A[i][j])
  			if (temp > max) max = temp
  		}
  		if (max == 0) return // Singular Matrix!
  		vv[i] = 1 / max // Scaling
  	}

		var Acpy = new Array(n)
		for (var i=0; i<n; i++) {
			var Ai = A[i]
			let Acpyi = new Array(Ai.length)
			for (j=0; j<Ai.length; j+=1) Acpyi[j] = Ai[j]
			Acpy[i] = Acpyi
		}
		A = Acpy

  	var tiny = 1e-20 // in case pivot element is zero
  	for (var i=0; ; i++) {
  		for (var j=0; j<i; j++) {
  			var sum = A[j][i]
  			for (var k=0; k<j; k++) sum -= A[j][k] * A[k][i];
  			A[j][i] = sum
  		}
  		var jmax = 0
  		var max = 0;
  		for (var j=i; j<n; j++) {
  			var sum = A[j][i]
  			for (var k=0; k<i; k++) sum -= A[j][k] * A[k][i];
  			A[j][i] = sum
  			var temp = vv[j] * Math.abs(sum)
  			if (temp >= max) {
  				max = temp
  				jmax = j
  			}
  		}
  		if (i <= jmax) {
  			for (var j=0; j<n; j++) {
  				var temp = A[jmax][j]
  				A[jmax][j] = A[i][j]
  				A[i][j] = temp
  			}
  			d = !d;
  			vv[jmax] = vv[i]
  		}
  		idx[i] = jmax;
  		if (i == n-1) break;
  		var temp = A[i][i]
  		if (temp == 0) A[i][i] = temp = tiny
  		temp = 1 / temp
  		for (var j=i+1; j<n; j++) A[j][i] *= temp
  	}
  	return {A:A, idx:idx, d:d}
  }

  // Lower Upper Back Substitution
  function lubksb(lu, b) {
  	// solves the set of n linear equations A*x = b.
  	// lu is the object containing A, idx and d as determined by the routine ludcmp.
  	var A = lu.A
  	var idx = lu.idx
  	var n = idx.length

		var bcpy = new Array(n)
		for (var i=0; i<b.length; i+=1) bcpy[i] = b[i]
		b = bcpy

  	for (var ii=-1, i=0; i<n; i++) {
  		var ix = idx[i]
  		var sum = b[ix]
  		b[ix] = b[i]
  		if (ii > -1)
  			for (var j=ii; j<i; j++) sum -= A[i][j] * b[j]
  		else if (sum)
  			ii = i
  		b[i] = sum
  	}
  	for (var i=n-1; i>=0; i--) {
  		var sum = b[i]
  		for (var j=i+1; j<n; j++) sum -= A[i][j] * b[j]
  		b[i] = sum / A[i][i]
  	}
  	return b // solution vector x
  }

	var lu = ludcmp(A)
	if (lu === undefined) return // Singular Matrix!
	return lubksb(lu, b)
}



```

</section>
