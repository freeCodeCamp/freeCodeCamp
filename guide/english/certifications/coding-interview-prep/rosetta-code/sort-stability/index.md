---
title: Sort stability
---
# Sort stability

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function stableSort(arr) {
  arr.sort(function(a, b) { return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0)) });
  return arr;
}
```

</details>