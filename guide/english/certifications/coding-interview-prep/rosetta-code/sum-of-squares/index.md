---
title: Sum of squares
---
# Sum of squares

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sumsq(array) {
  var sum = 0;
  var i, iLen;

  for (i = 0, iLen = array.length; i < iLen; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}
```

</details>