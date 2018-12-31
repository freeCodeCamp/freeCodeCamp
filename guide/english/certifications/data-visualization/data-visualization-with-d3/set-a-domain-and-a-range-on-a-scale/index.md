---
title: Set a Domain and a Range on a Scale
---
## Set a Domain and a Range on a Scale

### Hint 1

Use the `.domain()` and `.range()` functions.

### Hint 2

Both the the `.domain()` and `.range()` functions accept an array of two elements.

## Spoiler Alert | Solution Ahead
### Solution

The `domain` and `range` functions can be chained, and the following is the solution:

```javascript
<body>
  <script>
    const scale = d3.scaleLinear()
    .domain([250, 500])
    .range([10, 150]);
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
