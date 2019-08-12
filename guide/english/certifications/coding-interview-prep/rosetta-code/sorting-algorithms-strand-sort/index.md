---
title: Sorting algorithms/Strand sort
---
# Sorting algorithms/Strand sort

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function strandSort(list) {

  function merge(left, right) {
    var result = [];
    while (left.length != 0 && right.length != 0) {
      if (left[0] <= right[0])
        result.push(left.shift());
      else
        result.push(right.shift());
    }
    result.push.apply(result, left);
    result.push.apply(result, right);
    return result;
  }

  if (list.length <= 1) return list;
  var result = [];
  while (list.length > 0) {
    var sorted = [];
    sorted.push(list.shift());
    var len = list.length;
    for (var i = 1; i < len; i++) {
      var elem = list[i];
      if (sorted[i - 1] <= elem) {
        sorted.push(elem);
        sorted.splice(i, 1);
      }
    }

    result = merge(result, sorted);
  }
  return result;
}
```

</details>