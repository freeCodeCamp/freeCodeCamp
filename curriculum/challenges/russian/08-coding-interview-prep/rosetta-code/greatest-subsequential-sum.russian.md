---
title: Greatest subsequential sum
id: 5a23c84252665b21eecc7e84
challengeType: 5
forumTopicId: 302278
localeTitle: Наибольшая подпоследовательная сумма
---

## Description
<section id='description'>
Если задана последовательность целых чисел, найдите непрерывную подпоследовательность, которая максимизирует сумму ее элементов, т. Е. Элементы ни одной отдельной подпоследовательности не прибавляют к значению, большему, чем это. Считается, что пустая подпоследовательность имеет сумму \ (0 \); таким образом, если все элементы отрицательны, результат должен быть пустой.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maximumSubsequence</code> should be a function.
    testString: assert(typeof maximumSubsequence=='function');
  - text: <code>maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])</code> should return an array.
    testString: assert(Array.isArray(maximumSubsequence([ 1, 2,-1, 3, 10, -10 ])));
  - text: <code>maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])</code> should return <code>[ 1, 2, -1, 3, 10 ]</code>.
    testString: assert.deepEqual(maximumSubsequence([1,2,-1,3,10,-10]), [ 1, 2, -1, 3, 10 ]);
  - text: <code>maximumSubsequence([ 0, 8, 10, -2, -4, -1, -5, -3 ])</code> should return <code>[ 0, 8, 10 ]</code>.
    testString: assert.deepEqual(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3]), [ 0, 8, 10 ]);
  - text: <code>maximumSubsequence([ 9, 9, -10, 1 ])</code> should return <code>[ 9, 9 ]</code>.
    testString: assert.deepEqual(maximumSubsequence([ 9, 9, -10, 1 ]), [ 9, 9 ]);
  - text: <code>maximumSubsequence([ 7, 1, -5, -3, -8, 1 ]</code> should return <code>[ 7, 1 ]</code>.
    testString: assert.deepEqual(maximumSubsequence([ 7, 1, -5, -3, -8, 1 ]), [ 7, 1 ]);
  - text: <code>maximumSubsequence([ -3, 6, -1, 4, -4, -6 ])</code> should return <code>[ 6, -1, 4 ]</code>.
    testString: assert.deepEqual(maximumSubsequence([ -3, 6, -1, 4, -4, -6 ]), [ 6, -1, 4 ]);
  - text: <code>maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ])</code> should return <code>[ 3, 5, 6, -2, -1, 4 ]</code>.
    testString: assert.deepEqual(maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ]), [ 3, 5, 6, -2, -1, 4 ]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function maximumSubsequence(population) {
  // Good luck!
}

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
