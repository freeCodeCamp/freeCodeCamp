---
title: Identity matrix
id: 5a23c84252665b21eecc7eb1
challengeType: 5
videoUrl: ''
localeTitle: Matriz de identidade
---

## Description
<section id="description"> Uma <i>matriz de identidade</i> é uma matriz quadrada de tamanho \ (n \ times n \), onde os elementos da diagonal são todos <b>1</b> s (uns), e todos os outros elementos são todos <b>0</b> s (zeros). \ begin {bmatrix} 1 &amp; 0 &amp; 0 \ cr 0 &amp; 1 &amp; 0 \ cr 0 &amp; 0 &amp; 1 \ cr \ end {bmatrix} Escreva uma função que tenha um número &#39;n&#39; como parâmetro e retorne a matriz de identidade de ordem nx n. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>idMatrix</code> deve ser uma função.
    testString: 'assert(typeof idMatrix=="function","<code>idMatrix</code> should be a function.");'
  - text: <code>idMatrix(1)</code> deve retornar um array.
    testString: 'assert(Array.isArray(idMatrix(1)),"<code>idMatrix(1)</code> should return an array.");'
  - text: '<code>idMatrix(1)</code> deve retornar <code>&quot;+JSON.stringify(results[0])+&quot;</code> .'
    testString: 'assert.deepEqual(idMatrix(1),results[0],"<code>idMatrix(1)</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: '<code>idMatrix(2)</code> deve retornar <code>&quot;+JSON.stringify(results[1])+&quot;</code> .'
    testString: 'assert.deepEqual(idMatrix(2),results[1],"<code>idMatrix(2)</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: '<code>idMatrix(3)</code> deve retornar <code>&quot;+JSON.stringify(results[2])+&quot;</code> .'
    testString: 'assert.deepEqual(idMatrix(3),results[2],"<code>idMatrix(3)</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: '<code>idMatrix(4)</code> deve retornar <code>&quot;+JSON.stringify(results[3])+&quot;</code> .'
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
