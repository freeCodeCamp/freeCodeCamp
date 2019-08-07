---
title: Cumulative standard deviation
---
# Cumulative standard deviation

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function standardDeviation(arr) {
  var sum = 0,
    sum_sq = 0,
    n = arr.length;
  arr.forEach(function(e) {
    sum += e;
    sum_sq += e * e;
  })

  var std_dev=Math.sqrt((sum_sq / n) - Math.pow(sum / n, 2))
  return Math.round(std_dev*1000)/1000;
}
```

</details>