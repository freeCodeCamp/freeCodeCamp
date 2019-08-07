---
title: Sum of a series
---
# Sum of a series

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sum(a, b) {
  function fn(x) {
    return 1 / (x * x)
  }
  var s = 0;
  for (; a <= b; a++) s += fn(a);
  return s;
}
```

</details>