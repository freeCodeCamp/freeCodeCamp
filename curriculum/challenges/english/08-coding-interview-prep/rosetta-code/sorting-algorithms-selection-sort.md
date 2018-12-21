---
id: 5a23c84252665b21eecc800f
title: Sorting algorithms/Selection sort
challengeType: 5
---

## Description
<section id='description'>
Write a function to sort an <a href="http://rosettacode.org/wiki/array">array</a> (or list) of elements using the Selection sort algorithm. The function should return the sorted array.
It works as follows:
First find the smallest element in the array and exchange it with the element in the first position, then find the second smallest element and exchange it with the element in the second position, and continue in this way until the entire array is sorted.
Its asymptotic complexity is <a href="http://rosettacode.org/wiki/O">O</a>(n<sup>2</sup>) making it inefficient on large arrays.
Its primary purpose is for when writing data is very expensive (slow) when compared to reading, eg. writing to flash memory or EEPROM.
No other sorting algorithm has less data movement.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>selectionSort</code> should be a function.
    testString: assert(typeof selectionSort == 'function', '<code>selectionSort</code> should be a function.');
  - text: <code>selectionSort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(selectionSort([25, 32, 12, 7, 20])), '<code>selectionSort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>selectionSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(selectionSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>selectionSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>selectionSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(selectionSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>selectionSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>selectionSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(selectionSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>selectionSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>selectionSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(selectionSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>selectionSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>selectionSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(selectionSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>selectionSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function selectionSort (nums) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function selectionSort (nums) {
  var len = nums.length;
  for(var i = 0; i < len; i++) {
    var minAt = i;
    for(var j = i + 1; j < len; j++) {
      if(nums[j] < nums[minAt])
        minAt = j;
    }

    if(minAt != i) {
      var temp = nums[i];
      nums[i] = nums[minAt];
      nums[minAt] = temp;
    }
  }
  return nums;
}
```

</section>
