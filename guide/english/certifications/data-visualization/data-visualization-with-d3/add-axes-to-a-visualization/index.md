---
title: Add Axes to a Visualization
---
## Add Axes to a Visualization

### Hint 1

Set the y-axis variable using `const yAxis = d3.axisLeft(yScale);`.

### Hint 2

Append the y-axis using `svg.append()`.

### Spoiler Alert | Solution Ahead
### Solution

To solve the challenge, use:
```javascript
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);
    
svg.append("g")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);
  
svg.append("g")
  .attr("transform", "translate(" + padding + ", 0)")
  .call(yAxis);
```
