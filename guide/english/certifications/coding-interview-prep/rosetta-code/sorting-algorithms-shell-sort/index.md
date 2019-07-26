---
title: Sorting algorithms/Shell sort
---
# Sorting algorithms/Shell sort

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h)
        a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```

</details>