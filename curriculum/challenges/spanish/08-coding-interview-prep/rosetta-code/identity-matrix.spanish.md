---
title: Identity matrix
id: 5a23c84252665b21eecc7eb1
localeTitle: 5a23c84252665b21eecc7eb1
challengeType: 5
---

## Description
<section id='description'> 
Una <i>matriz de identidad</i> es una matriz cuadrada de tamaño \ (n \ veces n \), 
donde los elementos diagonales son todos <b>1</b> s (unos), 
y todos los demás elementos son todos <b>0</b> s (ceros). 
\ begin {bmatrix} 1 &amp; 0 &amp; 0 \ cr 0 &amp; 1 &amp; 0 \ cr 0 &amp; 0 &amp; 1 \ cr \ end {bmatrix} 
Escribe una función que toma un número &#39;n&#39; como parámetro y devuelve la identidad matriz de orden nx n. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>idMatrix</code> debería ser una función.
    testString: 'assert(typeof idMatrix=="function","<code>idMatrix</code> should be a function.");'
  - text: <code>idMatrix(1)</code> debería devolver una matriz.
    testString: 'assert(Array.isArray(idMatrix(1)),"<code>idMatrix(1)</code> should return an array.");'
  - text: <code>idMatrix(1)</code> debe devolver <code>&quot;+JSON.stringify(results[0])+&quot;</code> .
    testString: 'assert.deepEqual(idMatrix(1),results[0],"<code>idMatrix(1)</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: <code>idMatrix(2)</code> debe devolver <code>&quot;+JSON.stringify(results[1])+&quot;</code> .
    testString: 'assert.deepEqual(idMatrix(2),results[1],"<code>idMatrix(2)</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: <code>idMatrix(3)</code> debe devolver <code>&quot;+JSON.stringify(results[2])+&quot;</code> .
    testString: 'assert.deepEqual(idMatrix(3),results[2],"<code>idMatrix(3)</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: <code>idMatrix(4)</code> debe devolver <code>&quot;+JSON.stringify(results[3])+&quot;</code> .
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
function idMatrix (n) {
	return Array.apply(null, new Array(n)).map(function (x, i, xs) {
		return xs.map(function (_, k) {
			return i === k ? 1 : 0;
		})
	});
}

```

</section>
