---
title: Add Labels to D3 Elements
---
## Add Labels to D3 Elements

### Hint 1

Use the ``` attr() `` methods to set `` x ``` and ``` y ```.

### Hint 2

Use callback on all methods which you add.

### Solution

Edit your ``` svg.selectAll("text") ``` method to look like:

```javascript
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("x", (d,i) => i*30) //Set x attribute
    .attr("y", (d,i) => ((h-3*d)-3)) // Set y attribute
    .text(d=>d); // Set text
```
