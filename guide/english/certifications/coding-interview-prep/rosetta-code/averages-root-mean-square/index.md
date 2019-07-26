---
title: Averages-Root mean square
---
# Averages-Root mean square

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function rms(arr) {
  const sumOfSquares = arr.reduce((s, x) => s + x * x, 0);
  return Math.sqrt(sumOfSquares / arr.length);
}
```

</details>
