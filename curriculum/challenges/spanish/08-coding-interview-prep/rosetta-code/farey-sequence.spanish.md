---
title: Farey sequence
id: 59c3ec9f15068017c96eb8a3
localeTitle: 59c3ec9f15068017c96eb8a3
challengeType: 5
---

## Description
<section id='description'>
<p> Escriba una función que devuelva la secuencia Farey de orden n. La función debe tener un parámetro que sea n. Debe devolver la secuencia como una matriz. Lea lo siguiente para más detalles : </p><p> La <a href="https://en.wikipedia.org/wiki/Farey sequence" title="wp: secuencia de Farey">secuencia Farey</a> F <sub>n</sub> de orden n es la secuencia de fracciones completamente reducidas entre 0 y 1 que, cuando están en los términos más bajos, tienen denominadores menores o iguales a n, dispuestos en orden creciente de tamaño. </p><p> La secuencia de Farey a veces se llama incorrectamente una serie de Farey. </p>
<p> Cada secuencia de Farey: </p>
<p> :: * comienza con el valor 0, indicado por la fracción $ \ frac {0} {1} $ </p>
<p> :: * termina con el valor 1, indicado por la fracción $ \ frac {1} {1} $. </p>
<p> Las secuencias de Farey de las órdenes 1 a 5 son: </p><p> $ {\ bf \ it {F}} _ 1 = \ frac {0} {1}, \ frac {1} {1} $ </p>
<p> </p>
<p> $ {\ bf \ it {F}} _ 2 = \ frac {0} {1}, \ frac {1} {2}, \ frac {1} {1} $ </p>
<p> </p>
<p> $ {\ bf \ it {F}} _ 3 = \ frac {0} {1}, \ frac {1} {3}, \ frac {1} {2}, \ frac {2} {3}, \ frac {1} {1} $ </p>
<p> </p>
<p> $ {\ bf \ it {F}} _ 4 = \ frac {0} {1}, \ frac {1} {4}, \ frac {1} {3}, \ frac {1} {2}, \ frac {2} {3}, \ frac {3} {4}, \ frac {1} {1} $ </p>
<p> </p>
<p> $ {\ bf \ it {F}} _ 5 = \ frac {0} {1}, \ frac {1} {5}, \ frac {1} {4}, \ frac {1} {3}, \ frac {2} {5}, \ frac {1} {2}, \ frac {3} {5}, \ frac {2} {3}, \ frac {3} {4}, \ frac {4} {5 }, \ frac {1} {1} $ </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>farey</code> es una función.
    testString: 'assert(typeof farey === "function", "<code>farey</code> is a function.");'
  - text: <code>farey(3)</code> debería devolver una matriz
    testString: 'assert(Array.isArray(farey(3)), "<code>farey(3)</code> should return an array");'
  - text: ' <code>farey(3)</code> debe devolver <code>[&quot;1/3&quot;,&quot;1/2&quot;,&quot;2/3&quot;]</code> '
    testString: 'assert.deepEqual(farey(3), ["1/3","1/2","2/3"], "<code>farey(3)</code> should return <code>["1/3","1/2","2/3"]</code>");'
  - text: ' <code>farey(4)</code> debe devolver <code>[&quot;1/4&quot;,&quot;1/3&quot;,&quot;1/2&quot;,&quot;2/4&quot;,&quot;2/3&quot;,&quot;3/4&quot;]</code> '
    testString: 'assert.deepEqual(farey(4), ["1/4","1/3","1/2","2/4","2/3","3/4"], "<code>farey(4)</code> should return <code>["1/4","1/3","1/2","2/4","2/3","3/4"]</code>");'
  - text: ' <code>farey(5)</code> debe devolver <code>[&quot;1/5&quot;,&quot;1/4&quot;,&quot;1/3&quot;,&quot;2/5&quot;,&quot;1/2&quot;,&quot;2/4&quot;,&quot;3/5&quot;,&quot;2/3&quot;,&quot;3/4&quot;,&quot;4/5&quot;]</code> '
    testString: 'assert.deepEqual(farey(5), ["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"], "<code>farey(5)</code> should return <code>["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function farey (n) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function farey(n){
	let farSeq=[];
	for(let den = 1; den <= n; den++){
		for(let num = 1; num < den; num++){
			farSeq.push({
				str:num+"/"+den,
				val:num/den});
		}
	}
	farSeq.sort(function(a,b){
		return a.val-b.val;
	});
	farSeq=farSeq.map(function(a){
		return a.str;
	});
	return farSeq;
}

```

</section>
