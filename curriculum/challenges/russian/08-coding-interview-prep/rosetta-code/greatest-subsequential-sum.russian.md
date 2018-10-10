---
title: Greatest subsequential sum
id: 5a23c84252665b21eecc7e84
challengeType: 5
videoUrl: ''
localeTitle: Наибольшая подпоследовательная сумма
---

## Description
<section id="description"> Если задана последовательность целых чисел, найдите непрерывную подпоследовательность, которая максимизирует сумму ее элементов, т. Е. Элементы ни одной отдельной подпоследовательности не прибавляют к значению, большему, чем это. Считается, что пустая подпоследовательность имеет сумму \ (0 \); таким образом, если все элементы отрицательны, результат должен быть пустой. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maximumSubsequence</code> должна быть функцией.
    testString: 'assert(typeof maximumSubsequence=="function","<code>maximumSubsequence</code> should be a function.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code> должен возвращать массив.'
    testString: 'assert(Array.isArray(maximumSubsequence(tests[0])),"<code>maximumSubsequence("+JSON.stringify(tests[0])+")</code> should return an array.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[0])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[0]),results[0],"<code>maximumSubsequence("+JSON.stringify(tests[0])+")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[1])+&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[1])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[1]),results[1],"<code>maximumSubsequence("+JSON.stringify(tests[1])+")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[2])+&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[2])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[2]),results[2],"<code>maximumSubsequence("+JSON.stringify(tests[2])+")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[3])+&quot;)</code> должны возвращать <code>&quot;+JSON.stringify(results[3])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[3]),results[3],"<code>maximumSubsequence("+JSON.stringify(tests[3])+")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[4])+&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[4])+&quot;</code> .'
    testString: 'assert.deepEqual(maximumSubsequence(tests[4]),results[4],"<code>maximumSubsequence("+JSON.stringify(tests[4])+")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[5])+&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[5])+&quot;</code> .'
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
