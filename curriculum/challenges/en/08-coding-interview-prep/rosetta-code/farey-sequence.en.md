---
title: Farey sequence
id: 59c3ec9f15068017c96eb8a3
challengeType: 5
---

## Description
<section id='description'>
<p>Write a function that returns the Farey sequence of order n. The function should have one parameter that is n. It should return the sequence as an array. Read the following for more details : </p><p>The  <a href="https://en.wikipedia.org/wiki/Farey sequence" title="wp: Farey sequence">Farey sequence</a>   F<sub>n</sub>  of order  n  is the sequence of completely reduced fractions between  0  and  1  which, when in lowest terms, have denominators less than or equal to  n,  arranged in order of increasing size.</p><p>The  Farey sequence  is sometimes incorrectly called a  Farey series.</p>
<p>Each Farey sequence:</p>
<p>::*  starts with the value  0,  denoted by the fraction  $ \frac{0}{1} $</p>
<p>::*  ends with the value  1,  denoted by the fraction  $ \frac{1}{1}$.</p>
<p>The Farey sequences of orders  1  to  5  are:</p><p>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</p>
<p></p>
<p>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</p>
<p></p>
<p>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</p>
<p></p>
<p>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</p>
<p></p>
<p>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>farey</code> is a function.
  testString: 'assert(typeof farey === ''function'', ''<code>farey</code> is a function.'');'
- text: <code>farey(3)</code> should return an array
  testString: 'assert(Array.isArray(farey(3)), ''<code>farey(3)</code> should return an array'');'
- text: '<code>farey(3)</code> should return <code>["1/3","1/2","2/3"]</code>'
  testString: 'assert.deepEqual(farey(3), ["1/3","1/2","2/3"], ''<code>farey(3)</code> should return <code>["1/3","1/2","2/3"]</code>'');'
- text: '<code>farey(4)</code> should return <code>["1/4","1/3","1/2","2/4","2/3","3/4"]</code>'
  testString: 'assert.deepEqual(farey(4), ["1/4","1/3","1/2","2/4","2/3","3/4"], ''<code>farey(4)</code> should return <code>["1/4","1/3","1/2","2/4","2/3","3/4"]</code>'');'
- text: '<code>farey(5)</code> should return <code>["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]</code>'
  testString: 'assert.deepEqual(farey(5), ["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"], ''<code>farey(5)</code> should return <code>["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]</code>'');'

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
