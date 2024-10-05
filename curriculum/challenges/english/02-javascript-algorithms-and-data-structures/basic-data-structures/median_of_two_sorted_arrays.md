---
id: a7f4d8f2483413a6ce226cac
title: Median of Two Sorted Arrays
challengeType: 5
forumTopicId: 16045
dashedName: median-of-two-sorted-arrays
---

# --description--

Given two sorted arrays `nums1` and `nums2`, find the median of the combined sorted arrays. Your algorithm should run in **O(log(m + n))** time complexity where `m` and `n` are the lengths of `nums1` and `nums2`.

# --hints--

`findMedianSortedArrays([1, 3], [2])` should return `2.0`.

```js
assert.deepEqual(findMedianSortedArrays([1, 3], [2]), 2.0);
```

`findMedianSortedArrays([1, 2], [3, 4])` should return `2.5`.

```js
assert.deepEqual(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
```

`findMedianSortedArrays([0, 0], [0, 0])` should return `0.0`.

```js
assert.deepEqual(findMedianSortedArrays([0, 0], [0, 0]), 0.0);
```

`findMedianSortedArrays([], [1])` should return `1.0`.

```js
assert.deepEqual(findMedianSortedArrays([], [1]), 1.0);
```

`findMedianSortedArrays([2], [])` should return `2.0`.

```js
assert.deepEqual(findMedianSortedArrays([2], []), 2.0);
```

# --seed--

## --seed-contents--

```js
function findMedianSortedArrays(nums1, nums2) {
  return 0.0;
}

findMedianSortedArrays([1, 3], [2]);
```

# --solutions--

```js
function findMedianSortedArrays(nums1, nums2) {
  const merged = [];
  let i = 0, j = 0;
  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  const len = merged.length;
  if (len % 2 === 0) {
    return (merged[len / 2 - 1] + merged[len / 2]) / 2;
  } else {
    return merged[Math.floor(len / 2)];
  }
}
``` 
