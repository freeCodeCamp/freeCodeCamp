---
title: Use a Pre-Defined Scale to Place Elements
---
## Use a Pre-Defined Scale to Place Elements

### Hint 1

Use the `.attr()` function, which accepts 2 parameters.

### Hint 2

Use a callback function on the `.attr()` functions.

### Hint 3

The radius is set using the `r`attribute.

### Spoiler Alert | Solution Ahead
### Solution

Change the `svg.selectAll("circle")` and `svg.selectAll("text")` codeblocks to the following to complete the challenge, this has been done by incorporating all the hints from above:

```javascript
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", 5);

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) =>  (d[0] + ", " + d[1]))
  .attr("x", (d) => xScale(d[0] + 10))
  .attr("y", (d) => yScale(d[1]));
```
