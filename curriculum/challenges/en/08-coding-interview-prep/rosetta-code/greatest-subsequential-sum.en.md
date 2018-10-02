---
title: Greatest subsequential sum
id: 5a23c84252665b21eecc7e84
challengeType: 5
---

## Description
<section id='description'>
Given a sequence of integers, find a continuous subsequence which maximizes the sum of its elements, that is, the elements of no other single subsequence add up to a value larger than this one.
An empty subsequence is considered to have the sum of \( 0 \);  thus if all elements are negative, the result must be the empty sequence.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '''<code>maximumSubsequence</code> should be a function.'''
  testString: 'assert(typeof maximumSubsequence==''function'',''<code>maximumSubsequence</code> should be a function.'');'
- text: '''<code>maximumSubsequence(''+JSON.stringify(tests[0])+'')</code> should return an array.'''
  testString: 'assert(Array.isArray(maximumSubsequence(tests[0])),''<code>maximumSubsequence(''+JSON.stringify(tests[0])+'')</code> should return an array.'');'
- text: '''<code>maximumSubsequence(''+JSON.stringify(tests[0])+'')</code> should return <code>''+JSON.stringify(results[0])+''</code>.'''
  testString: 'assert.deepEqual(maximumSubsequence(tests[0]),results[0],''<code>maximumSubsequence(''+JSON.stringify(tests[0])+'')</code> should return <code>''+JSON.stringify(results[0])+''</code>.'');'
- text: '''<code>maximumSubsequence(''+JSON.stringify(tests[1])+'')</code> should return <code>''+JSON.stringify(results[1])+''</code>.'''
  testString: 'assert.deepEqual(maximumSubsequence(tests[1]),results[1],''<code>maximumSubsequence(''+JSON.stringify(tests[1])+'')</code> should return <code>''+JSON.stringify(results[1])+''</code>.'');'
- text: '''<code>maximumSubsequence(''+JSON.stringify(tests[2])+'')</code> should return <code>''+JSON.stringify(results[2])+''</code>.'''
  testString: 'assert.deepEqual(maximumSubsequence(tests[2]),results[2],''<code>maximumSubsequence(''+JSON.stringify(tests[2])+'')</code> should return <code>''+JSON.stringify(results[2])+''</code>.'');'
- text: '''<code>maximumSubsequence(''+JSON.stringify(tests[3])+'')</code> should return <code>''+JSON.stringify(results[3])+''</code>.'''
  testString: 'assert.deepEqual(maximumSubsequence(tests[3]),results[3],''<code>maximumSubsequence(''+JSON.stringify(tests[3])+'')</code> should return <code>''+JSON.stringify(results[3])+''</code>.'');'
- text: '''<code>maximumSubsequence(''+JSON.stringify(tests[4])+'')</code> should return <code>''+JSON.stringify(results[4])+''</code>.'''
  testString: 'assert.deepEqual(maximumSubsequence(tests[4]),results[4],''<code>maximumSubsequence(''+JSON.stringify(tests[4])+'')</code> should return <code>''+JSON.stringify(results[4])+''</code>.'');'
- text: '''<code>maximumSubsequence(''+JSON.stringify(tests[5])+'')</code> should return <code>''+JSON.stringify(results[5])+''</code>.'''
  testString: 'assert.deepEqual(maximumSubsequence(tests[5]),results[5],''<code>maximumSubsequence(''+JSON.stringify(tests[5])+'')</code> should return <code>''+JSON.stringify(results[5])+''</code>.'');'

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
