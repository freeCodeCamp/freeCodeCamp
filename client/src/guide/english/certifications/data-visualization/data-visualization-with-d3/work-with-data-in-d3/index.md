---
title: Work with Data in D3
---
## Work with Data in D3

### Hint 1

 Use the ``` selectAll ``` method.

### Hint 2

 Use the ``` .data() ``` method.

### Spoiler Alert | Solution Ahead
### Solution

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("h2").data(dataset).enter().append("h2").text("New Title");
  </script>
</body>
```