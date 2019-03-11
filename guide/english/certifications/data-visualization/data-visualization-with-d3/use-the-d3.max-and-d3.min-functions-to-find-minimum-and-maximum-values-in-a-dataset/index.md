---
title: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
---
## Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset

### Hint 1

Use the `d3.max()` function.

### Hint 2

Use a callback function.

### Hint 3

Check for the second element in the callback function's array.

### Solution

To solve the solution, you code should look like this, this would check for the `z` co-ordinate i.e. the third element in the array which would be at an index of 2:

```javascript
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
    const output = d3.max(positionData, (d) => d[2]);
      d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
