---
title: Greatest subsequential sum
id: 5a23c84252665b21eecc7e84
challengeType: 5
videoUrl: ''
localeTitle: Maior soma subsequencial
---

## Description
<section id="description"> Dada uma seqüência de inteiros, encontre uma subsequência contínua que maximize a soma de seus elementos, isto é, os elementos de nenhuma outra subsequência única somam um valor maior que este. Uma subsequência vazia é considerada como tendo a soma de \ (0 \); Assim, se todos os elementos são negativos, o resultado deve ser a seqüência vazia. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maximumSubsequence</code> deve ser uma função.
    testString: 'assert(typeof maximumSubsequence=="function","<code>maximumSubsequence</code> should be a function.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code> deve retornar um array.'
    testString: 'assert(Array.isArray(maximumSubsequence(tests[0])),"<code>maximumSubsequence("+JSON.stringify(tests[0])+")</code> should return an array.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[0])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[0]),results[0],"<code>maximumSubsequence("+JSON.stringify(tests[0])+")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[1])+&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[1])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[1]),results[1],"<code>maximumSubsequence("+JSON.stringify(tests[1])+")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[2])+&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[2])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[2]),results[2],"<code>maximumSubsequence("+JSON.stringify(tests[2])+")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[3])+&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[3])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[3]),results[3],"<code>maximumSubsequence("+JSON.stringify(tests[3])+")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[4])+&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[4])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[4]),results[4],"<code>maximumSubsequence("+JSON.stringify(tests[4])+")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[5])+&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[5])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[5]),results[5],"<code>maximumSubsequence("+JSON.stringify(tests[5])+")</code> should return <code>"+JSON.stringify(results[5])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function maximumSubsequence (population) {
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
