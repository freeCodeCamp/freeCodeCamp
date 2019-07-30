---
title: Sorting algorithms/Bogosort
---
# Sorting algorithms/Bogosort

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function bogosort(v) {
  function shuffle(v) {
    for (var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
  };

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
```

</details>