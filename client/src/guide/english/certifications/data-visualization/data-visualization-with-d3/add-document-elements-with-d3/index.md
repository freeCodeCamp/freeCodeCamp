---
title: Add Document Elements with D3
---
## Add Document Elements with D3

### Hint 1

Use the ``` .select() ``` method.

### Hint 2
 Target ``` body ```.

### Hint 3
 Use the ``` .append() ``` method.

### Hint 4
 Use the ``` .text() ``` method.
### Solution Ahead
### Solution
 ```javascript
<body>
  <script>
    d3.select("body").append("h1").text("Learning D3");
  </script>
</body>
```