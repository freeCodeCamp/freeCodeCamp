---
title: Sum multiples of 3 and 5
---
# Sum multiples of 3 and 5

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sumMults(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}
```

</details>