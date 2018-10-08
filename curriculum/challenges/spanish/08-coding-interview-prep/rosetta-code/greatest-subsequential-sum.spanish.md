---
title: Greatest subsequential sum
id: 5a23c84252665b21eecc7e84
localeTitle: 5a23c84252665b21eecc7e84
challengeType: 5
---

## Description
<section id='description'> 
Dada una secuencia de enteros, encuentre una subsecuencia continua que maximice la suma de sus elementos, es decir, los elementos de ninguna otra subsecuencia única suman un valor más grande que este. 
Se considera que una subsecuencia vacía tiene la suma de \ (0 \); por lo tanto, si todos los elementos son negativos, el resultado debe ser la secuencia vacía. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maximumSubsequence</code> debería ser una función.
    testString: 'assert(typeof maximumSubsequence=="function","<code>maximumSubsequence</code> should be a function.");'
  - text: <code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code> debe devolver una matriz.
    testString: 'assert(Array.isArray(maximumSubsequence(tests[0])),"<code>maximumSubsequence("+JSON.stringify(tests[0])+")</code> should return an array.");'
  - text: <code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[0])+&quot;</code> .
    testString: 'assert.deepEqual(maximumSubsequence(tests[0]),results[0],"<code>maximumSubsequence("+JSON.stringify(tests[0])+")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: <code>maximumSubsequence(&quot;+JSON.stringify(tests[1])+&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[1])+&quot;</code> .
    testString: 'assert.deepEqual(maximumSubsequence(tests[1]),results[1],"<code>maximumSubsequence("+JSON.stringify(tests[1])+")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: <code>maximumSubsequence(&quot;+JSON.stringify(tests[2])+&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[2])+&quot;</code> .
    testString: 'assert.deepEqual(maximumSubsequence(tests[2]),results[2],"<code>maximumSubsequence("+JSON.stringify(tests[2])+")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: <code>maximumSubsequence(&quot;+JSON.stringify(tests[3])+&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[3])+&quot;</code> .
    testString: 'assert.deepEqual(maximumSubsequence(tests[3]),results[3],"<code>maximumSubsequence("+JSON.stringify(tests[3])+")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: <code>maximumSubsequence(&quot;+JSON.stringify(tests[4])+&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[4])+&quot;</code> .
    testString: 'assert.deepEqual(maximumSubsequence(tests[4]),results[4],"<code>maximumSubsequence("+JSON.stringify(tests[4])+")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'
  - text: <code>maximumSubsequence(&quot;+JSON.stringify(tests[5])+&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[5])+&quot;</code> .
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
function maximumSubsequence(population) {
  function sumValues(arr) {
      var result = 0;
      for (var i = 0, len = arr.length; i < len; i++) {
          result += arr[i];
      }
      return result;
  }
  var greatest;
  var maxValue = 0;
  var subsequence = [];

  for (var i = 0, len = population.length; i < len; i++) {
      for (var j = i; j <= len; j++) {
          var subsequence = population.slice(i, j);
          var value = sumValues(subsequence);
          if (value > maxValue) {
              maxValue = value;
              greatest = subsequence;
          };
      }
  }

  return greatest;
}



```

</section>
