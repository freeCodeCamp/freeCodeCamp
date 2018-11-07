---
title: Use Dynamic Scales
---
## Use Dynamic Scales

### Hint 1

Use the `.domain()` and `.range()` functions.

### Hint 2 

Use a callback function on the `.domain()` function.

### Hint 3

Both the `.domain()` and `.range()` functions accept an array or two elements.

### Hint 4

Subtract padding from height to get SVG height including padding.

### Solution

To solve the solution by including all the hints, set the `yScale` variable to:

```javascript
const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding]);
```
