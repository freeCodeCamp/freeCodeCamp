---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
isHidden: false
forumTopicId: 301617
---

## Description
<section id='description'>

Given an array `arr`, find element pairs whose sum equal the second argument `arg` and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, `pairwise([1, 1, 2], 3)` creates a pair `[2, 1]` using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example `pairwise([7, 9, 11, 13, 15], 20)` returns `6`. The pairs that sum to 20 are `[7, 13]` and `[9, 11]`. We can then write out the array with their indices and values.

<div style='margin-left: 2em;'>

  |Index|0|1|2|3|4|
  |--- |--- |--- |--- |--- |--- |
  |Value|7|9|11|13|15|

</div>

Below we'll take their corresponding indices and add them.

<div style='margin-left: 2em;'>

  7 + 13 = 20 &#8594; Indices 0 + 3 = 3<br>
  9 + 11 = 20 &#8594; Indices 1 + 2 = 3<br>
  3 + 3 = 6 &#8594 Return `6`
  
</div>

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.
    testString: assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
  - text: <code>pairwise([1, 3, 2, 4], 4)</code> should return 1.
    testString: assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
  - text: <code>pairwise([1, 1, 1], 2)</code> should return 1.
    testString: assert.deepEqual(pairwise([1, 1, 1], 2), 1);
  - text: <code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.
    testString: assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
  - text: <code>pairwise([], 100)</code> should return 0.
    testString: assert.deepEqual(pairwise([], 100), 0);

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
