---
title: Farey sequence
id: 59c3ec9f15068017c96eb8a3
challengeType: 5
isHidden: false
forumTopicId: 302266
---

## Description
<section id='description'>
The  <a href="https://en.wikipedia.org/wiki/Farey sequence" title="wp: Farey sequence" target="_blank">Farey sequence</a>   <code>F<sub>n</sub></code> of order <code>n</code> is the sequence of completely reduced fractions between <code>0</code> and <code>1</code> which, when in lowest terms, have denominators less than or equal to <code>n</code>, arranged in order of increasing size.
The <i>Farey sequence</i> is sometimes incorrectly called a <i>Farey series</i>.
Each Farey sequence:
<ul>
  <li>starts with the value  0,  denoted by the fraction  $ \frac{0}{1} $</li>
  <li>ends with the value  1,  denoted by the fraction  $ \frac{1}{1}$.</li>
</ul>
The Farey sequences of orders <code>1</code> to <code>5</code> are:
<ul>
  <li style="list-style: none;">${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style="list-style: none;">${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style="list-style: none;">${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style="list-style: none;">${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style="list-style: none;">${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>
</section>

## Instructions
<section id='instructions'>
Write a function that returns the Farey sequence of order <code>n</code>. The function should have one parameter that is <code>n</code>. It should return the sequence as an array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>farey</code> should be a function.
    testString: assert(typeof farey === 'function');
  - text: <code>farey(3)</code> should return an array
    testString: assert(Array.isArray(farey(3)));
  - text: <code>farey(3)</code> should return <code>["1/3","1/2","2/3"]</code>
    testString: assert.deepEqual(farey(3), ["1/3","1/2","2/3"]);
  - text: <code>farey(4)</code> should return <code>["1/4","1/3","1/2","2/4","2/3","3/4"]</code>
    testString: assert.deepEqual(farey(4), ["1/4","1/3","1/2","2/4","2/3","3/4"]);
  - text: <code>farey(5)</code> should return <code>["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]</code>
    testString: assert.deepEqual(farey(5), ["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function farey(n) {
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
