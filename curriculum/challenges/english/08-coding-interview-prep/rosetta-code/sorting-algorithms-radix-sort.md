---
id: 5a23c84252665b21eecc800e
title: Sorting algorithms/Radix sort
challengeType: 5
---

## Description
<section id='description'>
Write a function to sort an integer array with the <a href="https://en.wikipedia.org/wiki/Radix sort">radix sort algorithm</a>. The function should return the sorted array.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>radixSort</code> should be a function.
    testString: assert(typeof radixSort == 'function', '<code>radixSort</code> should be a function.');
  - text: <code>radixSort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(radixSort([25, 32, 12, 7, 20])), '<code>radixSort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>radixSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(radixSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>radixSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>radixSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(radixSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>radixSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>radixSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(radixSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>radixSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>radixSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(radixSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>radixSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>radixSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(radixSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>radixSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function radixSort (old) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function radixSort (old) {
  for (var shift = 52; shift > -1; shift--) {
    var tmp = (function(s) {
      var a = [];
      while (s-- > 0)
        a.push(0);
      return a;
    })(old.length);
    var j = 0;
    for (var i = 0; i < old.length; i++) {
      var move = old[i] << shift >= 0;
      if (shift === 0 ? !move : move) {
        tmp[j] = old[i];
        j++;
      } else {
        old[i - j] = old[i];
      }
    };
    for (var i = j; i < tmp.length; i++) {
      tmp[i] = old[i - j];
    };
    old = tmp;
  };
  return old;
};
```

</section>
