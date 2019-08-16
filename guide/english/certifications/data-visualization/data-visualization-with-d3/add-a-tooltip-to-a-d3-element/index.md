---
title: Add a Tooltip to a D3 Element
---
# Add a Tooltip to a D3 Element


---
## Hints

### Hint 1

Use the ` .append() ` method.

### Hint 2

Use the ` .text() ` method.

### Hint 3

Chain the ` .append() ` and ` .text() ` methods.

### Hint 4

Use a callback function in the ` .text() ` method.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Chain the following lines of code with your ` svg.selectAll("rect") ` method.

```javascript
  .append("title")
  .text(d=>d);
```
</details>
