---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
---

## Description
<section id='description'>
Given an array <code>arr</code>, find element pairs whose sum equal the second argument <code>arg</code> and return the sum of their indices.
You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, <code>pairwise([1, 1, 2], 3)</code> creates a pair <code>[2, 1]</code> using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.
For example <code>pairwise([7, 9, 11, 13, 15], 20)</code> returns <code>6</code>. The pairs that sum to 20 are <code>[7, 13]</code> and <code>[9, 11]</code>. We can then write out the array with their indices and values.
<table class="table"><tr><th><strong>Index</strong></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>Value</td><td>7</td><td>9</td><td>11</td><td>13</td><td>15</td></tr></table>
Below we'll take their corresponding indices and add them.
7 + 13 = 20 &#8594; Indices 0 + 3 = 3<br>9 + 11 = 20 &#8594; Indices 1 + 2 = 3<br>3 + 3 = 6 &#8594 Return <code>6</code>
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.'
  testString: 'assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11, "<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.");'
- text: '<code>pairwise([1, 3, 2, 4], 4)</code> should return 1.'
  testString: 'assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1, "<code>pairwise([1, 3, 2, 4], 4)</code> should return 1.");'
- text: '<code>pairwise([1, 1, 1], 2)</code> should return 1.'
  testString: 'assert.deepEqual(pairwise([1, 1, 1], 2), 1, "<code>pairwise([1, 1, 1], 2)</code> should return 1.");'
- text: '<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.'
  testString: 'assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10, "<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.");'
- text: '<code>pairwise([], 100)</code> should return 0.'
  testString: 'assert.deepEqual(pairwise([], 100), 0, "<code>pairwise([], 100)</code> should return 0.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);

```

</section>
