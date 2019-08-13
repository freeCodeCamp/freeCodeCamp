---
title: Sort using a custom comparator
---
# Sort using a custom comparator

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function lengthSorter(arr) {
  arr.sort(function(a, b) {
    var result = b.length - a.length;
    if (result == 0)
      result = a.localeCompare(b);
    return result;
  })
  return arr;
}
```

</details>