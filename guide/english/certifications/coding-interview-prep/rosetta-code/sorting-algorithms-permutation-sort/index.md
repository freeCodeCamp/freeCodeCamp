---
title: Sorting algorithms/Permutation sort
---
# Sorting algorithms/Permutation sort

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function permutationSort(arr) {
  function pSort(a) {
    var list = [];
    permute(a, a.length, list);
    for (var i = 0; i < list.length; i++) {
      var x = list[i];
      if (isSorted(x))
        return x;
    }
    return a;
  };

  function permute(a, n, list) {
    if (n === 1) {
      var b = a.slice();
      list.push(b);
      return;
    }
    for (var i = 0; i < n; i++) {
      swap(a, i, n - 1);
      permute(a, n - 1, list);
      swap(a, i, n - 1);
    };
  };

  function isSorted(a) {
    for (var i = 1; i < a.length; i++)
      if (a[i - 1] > a[i])
        return false;;
    return true;
  };

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  return pSort(arr);
}
```

</details>