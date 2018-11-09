---
title: Work with Data in D3
---
## Work with Data in D3

### Hint 1

Make use of the `.data()` and `.enter()` methods.

### Hint 2

Select all `h2` elements using `.selectAll("h2")`.

### Spoiler Alert | Solution Ahead
### Solution

```javascript
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body")
    .selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text("New Title")
  </script>
</body>
```
