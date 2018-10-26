---
title: Create a Scatterplot with SVG Circles
---
## Create a Scatterplot with SVG Circles

### Hint 1

Use the ` data() `, ` enter() `, and ` append() ` methods.

### Hint 2

Append circles in the ` append() ` method.

### Solution

Chain the following lines of code in the ` svg.selectAll("circle") ` chain:

```javascript
  .data(dataset)
  .enter()
  .append("circle")
```

The ` svg.selectAll("circle") ` chain should look like:

```javascript
  svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
```

##### Note
The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.
