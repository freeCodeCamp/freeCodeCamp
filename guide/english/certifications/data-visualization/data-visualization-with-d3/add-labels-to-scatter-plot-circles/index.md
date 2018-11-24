---
title: Add Labels to Scatter Plot Circles
---
## Add Labels to Scatter Plot Circles

In this challenge, you are required to set the x attribute so it's 5 units more than the value you used for the cx attribute on the circle. Set the y attribute the same way that's used for the cy value on the circle, for the text element.

### Hint 1

Target the `svg.selectAll("text")` codeblock.

### Hint 2

Use `d[0]` and `d[1]` for the data to be displayed.

### Hint 3

The format for display has to be `x, y`.

##### Note
There is a space between the comma and the y attribute.

### Solution

Since, you need to add the x any y attributes similar to those as they have been set for the circle, add this to the `svg.selectAll("text")` codeblock:

```javascript
.text((d) => (d[0] + ", " + d[1]))
```
