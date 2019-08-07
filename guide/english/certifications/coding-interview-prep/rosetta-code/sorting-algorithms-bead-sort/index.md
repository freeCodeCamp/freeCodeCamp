---
title: Sorting algorithms/Bead sort
---
# Sorting algorithms/Bead sort

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function beadSort(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++)
    if (arr[i] > max)
      max = arr[i];;
  var grid = new Array(arr.length);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(max);
  }
  var levelcount = new Array(max);
  levelcount.fill(0)
  for (var i = 0; i < max; i++) {
    levelcount[i] = 0;
    for (var j = 0; j < arr.length; j++)
      grid[j][i] = '_';
  };
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    for (var j = 0; num > 0; j++) {
      grid[levelcount[j]++][j] = '*';
      num--;
    };
  };
  var sorted = new Array(arr.length)
  sorted.fill(0)
  for (var i = 0; i < arr.length; i++) {
    var putt = 0;
    for (var j = 0; j < max && (function(c) {
      return c.charCodeAt == null ? c : c.charCodeAt(0);
    })(grid[arr.length - 1 - i][j]) == '*'.charCodeAt(0); j++)
      putt++;
    sorted[i] = putt;
  };
  return sorted;
}
```

</details>